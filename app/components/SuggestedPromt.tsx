import React from "react";

interface PromtSuggestionProps {
  onPromptClick: (suggestion: string) => void;
}

export default function PromptSuggestionRow({
  onPromptClick,
}: PromtSuggestionProps) {
  const suggestions = ["Hund", "Wohnung", "Essen", "Brille"];

  return (
    <div className="flex flex-wrap justify-around gap-4 p-4 w-full">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition rounded-lg px-8 py-2 text-md shadow-md"
          onClick={() => onPromptClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
