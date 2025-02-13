interface PromtSuggestionProps {
  onPromptClick: (suggestion: string) => void;
}

export default function PromptSuggestionRow({
  onPromptClick,
}: PromtSuggestionProps) {
  const suggestions = ["Hund", "Wohnung", "Essen", "Brille"];

  return (
    <div
      data-testid="suggestedPrompts"
      className="flex flex-wrap flex-col gap-3 p-6 w-full max-w-3xl mx-auto"
    >
      {suggestions.map((suggestion, index) => (
        <button
          data-testid="proptButton"
          key={index}
          className="relative overflow-hidden rounded-xl 
                     bg-gradient-to-br from-gray-700 to-gray-800
                     text-gray-200 px-8 py-3 text-md
                     shadow-lg transition-all duration-300
                     hover:scale-105 hover:shadow-xl
                     hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700
                     active:scale-95 border border-gray-600/30"
          onClick={() => onPromptClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
