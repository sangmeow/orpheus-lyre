import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

import { prompt } from "./constant";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = async (str: string) => {
  try {
    const result = await client.responses.create({
      model: "gpt-4.1",
      input: str + `\n\n` + prompt,
    });
    return result;
  } catch (error) {
    console.error("Error fetching response:", error);
  }
};

export default response;
