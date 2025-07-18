import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import resultValue from "./openai";

dotenv.config({ path: [".env", `.env.${process.env.NODE_ENV}`] });

const app: Express = express();
const port = process.env.PORT || 3000; // heroku default post is 34381

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Orpheus Lyre API",
    version: process.env.npm_package_version,
  });
});

app.post("/", async (req: Request, res: Response) => {
  // request content
  console.log(req.body, null, 2);
  // call OpenAI API
  const result = await resultValue(JSON.stringify(req.body));
  if (result instanceof Error) return res.status(500).json({ error: "Internal Server Error" });
  // filtering result
  console.log(result?.output_text, null, 2);
  // response content
  res.json(Object.assign(req.body, JSON.parse(result?.output_text || "{}")));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
