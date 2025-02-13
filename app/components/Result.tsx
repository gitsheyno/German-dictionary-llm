"use client";
import React from "react";
export default function Result({
  data,
}: {
  data: Record<string, string> | null;
}) {
  return (
    <div
      data-testid="result"
      className="flex flex-col gap-6 w-full bg-gray-800/40 rounded-xl p-6 shadow-lg "
    >
      <h2 className="text-center text-xl font-semibold text-gray-100 border-b border-gray-700 pb-4">
        Translation Details
      </h2>

      <div className="space-y-4 ">
        <div className="flex flex-col gap-1">
          <strong className="text-gray-300 text-sm">Meaning</strong>
          <p className="text-gray-100 bg-gray-700/30 p-3 rounded-lg">
            {data?.translateInEnglish}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <strong className="text-gray-300 text-sm">Synonym</strong>
          <p className="text-gray-100 bg-gray-700/30 p-3 rounded-lg">
            {data?.meaningfulSynonym}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <strong className="text-gray-300 text-sm">Antonym</strong>
          <p className="text-gray-100 bg-gray-700/30 p-3 rounded-lg">
            {data?.meaningfulAntonym}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <strong className="text-gray-300 text-sm">Article</strong>
          <p className="text-gray-100 bg-gray-700/30 p-3 rounded-lg">
            {data?.correctArticle}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <strong className="text-gray-300 text-sm">Example</strong>
          <p className="text-gray-100 bg-gray-700/30 p-3 rounded-lg">
            {data?.exampleOfUsing}
          </p>
        </div>
      </div>
    </div>
  );
}
