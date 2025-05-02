import { Mastra } from "@mastra/core";
import { chatAgent } from "./agents/simple-chat";

export const mastra = new Mastra({
  agents: { chatAgent },
});
