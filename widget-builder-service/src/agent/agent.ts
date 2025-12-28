import { Agent } from "@openai/agents";
import {
  getTimeStamp,
  // createFile,
  readFile,
  listFiles,
  createDirectory,
} from "./tools";
import OpenAI from "openai";

export const ollamaClient = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama", // Dummy key (Ollama doesn't require auth)
});

// Agent configuration
export const widgetBuilderAgent = new Agent({
  name: "Widget Builder Agent",
  model: "gpt-5-mini",
  tools: [getTimeStamp, readFile, listFiles, createDirectory],
  instructions: `You are an expert UI/UX designer. 
  Your task is to generate designs for user interfaces based on the provided requirements.
  Follow these steps:
  1. Use your creativity and design skills to come up with innovative solutions.
  2. Generate 3 variations of the same UI component with different styles and layouts.
  3. Present your designs in a clear and concise manner, explaining the rationale behind each variation.
  4. Use index.html as a template for your designs. It has access to tailwind css. use tailwind classes
  5. Create a new designs by using index.html as starting point and return the html. 
  Make sure to add \n to each new line so that I can display it properly in editor.
  Only work on the request if it is related to UI/UX design. Otherwise, politely decline.`,
});
