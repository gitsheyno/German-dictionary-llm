"use client";

import React from "react";
import { useAIFunction } from "../hooks/useAiFunction";
import Visual from "./Visual";
import Form from "./Form";
export default function Translator() {
  const { data, loading, error, fetchWordDetails } = useAIFunction();

  const handleFetch = (inputValue: string) => {
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <section className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-4 space-y-4 flex flex-col md:p-6 md:space-y-6 h-auto">
        <Form onSubmit={handleFetch} loading={loading} />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Visual
          data={data}
          loading={loading}
          onHandleFetchSuggestedPromt={handleFetchSuggestedPromt}
        />
      </section>
    </div>
  );
}
