import React from "react";
import PromptSuggestionRow from "./SuggestedPromt";
import Result from "./Result";
import Loader from "./static/loader/Loader";
export default function Visual({
  data,
  loading,
  onHandleFetchSuggestedPromt,
}: {
  data: Record<string, string> | null;
  loading: boolean;
  onHandleFetchSuggestedPromt(str: string): void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {!data && !loading && (
        <PromptSuggestionRow onPromptClick={onHandleFetchSuggestedPromt} />
      )}
      {loading && <Loader />}
      {data && !loading && <Result data={data} />}
    </div>
  );
}
