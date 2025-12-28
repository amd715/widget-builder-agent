import { tool } from "@openai/agents";
import { z } from "zod";
import { promises as fs } from "fs";
import * as path from "path";

export const getTimeStamp = tool({
  name: "get_time_stamp",
  description: "Gets the current timestamp",
  parameters: z.object({}),
  execute: async () => {
    console.log("Getting current timestamp");
    return { timestamp: new Date().toISOString() };
  },
});

export const createFile = tool({
  name: "create_file",
  description: "Creates a new file",
  parameters: z.object({
    fileName: z.string().describe("The name of the file to create"),
    content: z.string().describe("The content to write into the file"),
  }),
  execute: async ({ fileName, content }) => {
    const filePath = path.resolve(__dirname, fileName);
    console.log("Creating file at:", filePath);
    await fs.writeFile(filePath, content, "utf8");
    console.log("File created successfully");
    return { success: true, filePath };
  },
});

export const readFile = tool({
  name: "read_file",
  description: "Reads the contents of a file",
  parameters: z.object({
    fileName: z.string().describe("The name of the file to read"),
  }),
  execute: async ({ fileName }) => {
    const filePath = path.resolve(__dirname, fileName);
    console.log("Reading file at:", filePath);
    try {
      const content = await fs.readFile(filePath, "utf8");
      return { success: true, content, filePath };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  },
});

export const listFiles = tool({
  name: "list_files",
  description: "Lists all files in a directory",
  parameters: z.object({
    dirPath: z.string().optional().default("."),
  }),
  execute: async ({ dirPath }) => {
    const fullPath = path.resolve(__dirname, dirPath);
    console.log("Listing files in directory:", fullPath);
    try {
      const files = await fs.readdir(fullPath);
      return { success: true, files, path: fullPath };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  },
});

export const createDirectory = tool({
  name: "create_directory",
  description: "Creates a new directory",
  parameters: z.object({
    dirPath: z.string().min(1).max(200),
  }),
  execute: async ({ dirPath }) => {
    const fullPath = path.resolve(__dirname, dirPath);
    console.log("Creating directory at:", fullPath);
    try {
      await fs.mkdir(fullPath, { recursive: true });
      return { success: true, path: fullPath };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  },
});
