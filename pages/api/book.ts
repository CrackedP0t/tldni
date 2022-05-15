// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as openai from "openai";

console.log(openai);

const conf = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai_api = new openai.OpenAIApi(conf);

type Data = {
  title: string,
  series: string,
  author: string,
  description: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prompt = `Title: ${req.query.title}\nSeries:`;
  const completion = await openai_api.createCompletionFromModel({
    model: "davinci:ft-personal-2022-03-02-00-34-30",
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 500,
    stop: "END"
  });

  const text = prompt + completion.data.choices[0].text;

  console.log(text);

  //completion.data.

  //res.status(200).json({ title: 'John Doe' }
  res.status(200).send({result: text})
}
