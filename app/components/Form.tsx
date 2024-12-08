import React, { useState } from "react";

export default function Form({
  onSubmit,
  loading,
}: {
  loading: boolean;
  onSubmit: (inputValue: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 bg-gray-700 p-4 rounded-lg">
      <input
        className="flex-1 bg-gray-900 text-white placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        type="text"
        data-testid="input"
        placeholder="Enter a German word"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          onSubmit(inputValue);
        }}
        data-testid="button"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Translate
      </button>
    </div>
  );
}
