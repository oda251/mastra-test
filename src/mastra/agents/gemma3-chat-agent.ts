import {Agent} from "@mastra/core/agent";
import {createOllama} from "ollama-ai-provider";
import {Memory} from "@mastra/memory";

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
    memory: new Memory(),
});

// 直接実行用
// try {
//     console.log("Chat agent initialized");
//     const response = await chatAgent.generate(
//         "hello",
//     );
//     console.log("Chat agent response:", response);
// } catch (error) {
//     console.error("Error:", error);
// }
