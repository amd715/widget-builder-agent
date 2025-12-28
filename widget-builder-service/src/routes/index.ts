import { Router, Request, Response } from "express";
import { run } from "@openai/agents";
import { widgetBuilderAgent } from "../agent";

const router = Router();

// Root endpoint - API information
router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Widget Builder Agent API",
    version: "1.0.0",
    endpoints: {
      health: "GET /health",
      generate: "GET /generate",
      generateStream: "GET /generate-stream",
    },
  });
});

// Health check endpoint
router.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Generate widget endpoint with SSE
router.get("/generate-stream", async (req: Request, res: Response) => {
  console.log("Received request to generate widget");
  try {
    const { prompt } = req.query;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Generating widget for prompt:", prompt);

    // Set SSE headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Start streaming
    const result = await run(widgetBuilderAgent, prompt.toString(), {
      stream: true,
    });

    const stream = result.toTextStream();
    for await (const value of stream) {
      res.write(`data: ${value}\n\n`);
    }
    res.write(`data: ${result.finalOutput}\n\n`);
    console.log("Widget generated successfully");
    // Close the connection
    res.end();
  } catch (error) {
    console.error("Error generating widget:", error);
    const errorData = JSON.stringify({
      type: "error",
      error: "Failed to generate widget",
      message: (error as Error).message,
      timestamp: new Date().toISOString(),
    });
    res.write(`data: ${errorData}\n\n`);
    res.end();
  }
});

// Generate widget endpoint without SSE
router.get("/generate", async (req: Request, res: Response) => {
  console.log("Received request to generate widget");
  try {
    const { prompt } = req.query;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Generating widget for prompt:", prompt);

    // Start streaming
    const result = await run(widgetBuilderAgent, prompt.toString());
    console.log("Widget generated successfully");
    res.json({ finalOutput: result.finalOutput });
  } catch (error) {
    console.error("Error generating widget:", error);
    const errorData = JSON.stringify({
      type: "error",
      error: "Failed to generate widget",
      message: (error as Error).message,
      timestamp: new Date().toISOString(),
    });
    res.status(500).json({ error: errorData });
  }
});

export default router;
