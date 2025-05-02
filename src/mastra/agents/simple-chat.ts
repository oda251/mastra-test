import { Agent } from "@mastra/core/agent";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama({
  baseURL: "http://localhost:11434/api",
});

const modelId = "gemma3";
const model = ollama.chat(modelId, {
  experimentalStreamTools: true,
});

export const chatAgent = new Agent({
  model,
  name: "Chat Agent",
  instructions: `You are a chatbot.`,
});
