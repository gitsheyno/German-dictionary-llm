import React from "react";
import { aiFunction } from "../utils/ai";
export default async function Translator() {
  const res = await aiFunction();

  return (
    <div>
      translation : {res.translateInEnglish}
      <br />
      article : {res.correctArticle}
      <br />
      syn : {res.meaningfulSynonym}
      <br />
      ant : {res.meaningfulAntonym}
      <br />
      exm : {res.exampleOfUsing}
    </div>
  );
}
