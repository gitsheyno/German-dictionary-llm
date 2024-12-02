import { useState } from "react";
import { aiFunction } from "../utils/ai"; // Adjust the path as needed

// type WordDetails = {
//   translateInEnglish: string;
//   meaningfulSynonym: string;
//   meaningfulAntonym: string;
//   correctArticle: "der" | "die" | "das";
//   exampleOfUsing: string;
// };

export const useAIFunction = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWordDetails = async (word: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await aiFunction(word); // Pass the word to aiFunction
      setData(result);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchWordDetails };
};
