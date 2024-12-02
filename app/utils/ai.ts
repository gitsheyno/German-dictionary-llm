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
      you return me an object type like in programimng language, of key values, first key should be called translateInEnglish, second should be called  meaningfulSynonym synonym, third key should be called meaningfulAntonym, next should be called correctArticle, last should be called  exampleOfUsing,
        make sure to use the same exact keys and dont change them 

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
