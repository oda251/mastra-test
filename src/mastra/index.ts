import {Mastra} from "@mastra/core";
import {chatAgent} from "@/mastra/agents/gemma3-chat-agent";
import {weatherAgent} from "@/mastra/agents/weather-agent";

export const mastra = new Mastra({
    agents: {
        chat: chatAgent,
        weather: weatherAgent,
    },
});
