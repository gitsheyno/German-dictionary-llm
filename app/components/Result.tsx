"use client";
import React from "react";
export default function Result({
  data,
}: {
  data: Record<string, string> | null;
}) {
  return (
    <>
      <div data-testid="result" className="flex flex-col gap-2 w-full">
        <h2 className="text-center mb-4 text-lg font-semibold">
          Translation Details
        </h2>
        <p>
          <strong>Meaning:</strong> {data?.translateInEnglish}
        </p>
        <p>
          <strong>Synonym:</strong> {data?.meaningfulSynonym}
        </p>
        <p>
          <strong>Antonym:</strong> {data?.meaningfulAntonym}
        </p>
        <p>
          <strong>Article:</strong> {data?.correctArticle}
        </p>
        <p>
          <strong>Example:</strong> {data?.exampleOfUsing}
        </p>
      </div>
    </>
  );
}
