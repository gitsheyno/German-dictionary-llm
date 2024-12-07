"use server";

import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { JsonOutputParser } from "@langchain/core/output_parsers";

export const aiFunction = async (str: string) => {
  const model = new ChatOpenAI({ model: "gpt-4" });
  const parser = new JsonOutputParser();
  const messages = [
    new SystemMessage(
      `You are a native German Teacher, and i give you a german word, you fill this exact object with new values 
      ${{
        translateInEnglish: "",
        meaningfulSynonym: "",
        meaningfulAntonym: "",
        correctArticle: "",
        exampleOfUsing: "",
      }} 
   
        The first key is called translateInEnglish. Check if the input is a verb or a noun. If the input is capitalized, it is a noun; if not, it is not a noun, should be translate din english.
        The second key is called meaningfulSynonym. Provide a meaningful synonym for the input. If no synonym is found, return "notFound".
        The third key is called meaningfulAntonym. Provide a meaningful antonym for the input. If the input is a noun, return "notFound" since nouns generally do not have antonyms (e.g., for "dog," return "notFound").
        The fourth key is called correctArticle. Return the correct article ("der," "die," or "das") for the input, if applicable.
        The fifth key is called exampleOfUsing. Provide a meaningful example sentence using the input in context and it must use the same input for example.

        ### Instructions:
        1. Always use the exact keys as shown above. Do not change their names or order.
        2. Fill in the values based on the German word provided.
        3. Return the object in the same format as shown above, without any additional text or explanation.
        `
    ),
    new HumanMessage(str),
  ];

  const result = await model.invoke(messages);
  const content: Record<string, string> = await parser.invoke(result);

  return content;
};
