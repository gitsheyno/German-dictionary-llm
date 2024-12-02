"use client";
import Loader from "./static/loader/Loader";
import React, { useState } from "react";
import { useAIFunction } from "../hooks/useAiFunction";
import PromptSuggestionRow from "./SuggestedPromt";

export default function Translator() {
  const { data, loading, error, fetchWordDetails } = useAIFunction();
  const [inputValue, setInputValue] = useState("");

  const handleFetch = () => {
    if (inputValue.trim()) {
      fetchWordDetails(inputValue);
    }
  };

  const handleFetchSuggestedPromt = (str: string) => {
    if (str.trim()) {
      fetchWordDetails(str);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <section className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 h-[50vh] flex flex-col">
        <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
          <input
            className="flex-1 bg-gray-900 text-white placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            type="text"
            placeholder="Enter a German word"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleFetch}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Translate
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className=" w-full h-full flex items-center justify-center ">
          {!data && !loading && (
            <PromptSuggestionRow onPromptClick={handleFetchSuggestedPromt} />
          )}
          {loading && <Loader />}
          {data && !loading && (
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-center mb-4">Translation Details</h2>
              <p>
                <strong>Meaning :</strong> {data.translateInEnglish}
              </p>
              <p>
                <strong>Synonym :</strong> {data.meaningfulSynonym}
              </p>
              <p>
                <strong>Antonym :</strong> {data.meaningfulAntonym}
              </p>
              <p>
                <strong>Article :</strong> {data.correctArticle}
              </p>
              <p>
                <strong>Example :</strong> {data.exampleOfUsing}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
