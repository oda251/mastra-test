import { createTool } from "@mastra/core";
import { z } from "zod";

interface RollDiceOptions {
  max: number;
}

interface RollDiceResponse {
  result: number;
}

export const rollDice = createTool<RollDiceOptions, RollDiceResponse>({