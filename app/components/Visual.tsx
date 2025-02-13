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
    <div
      className="flex flex-col items-center justify-center w-full min-h-[400px] p-6 bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-sm transition-[max-height] duration-500 ease-in-out overflow-hidden"
      style={{ maxHeight: data ? "1000px" : "400px" }}
    >
      <div className="w-full max-w-2xl mx-auto overflow-scroll">
        {!data && !loading && (
          <div className="animate-fadeIn">
            <PromptSuggestionRow onPromptClick={onHandleFetchSuggestedPromt} />
          </div>
        )}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader />
          </div>
        )}
        {data && !loading && (
          <div className="animate-slideUp">
            <Result data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
