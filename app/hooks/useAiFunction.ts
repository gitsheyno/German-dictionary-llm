import { useState } from "react";
import { aiFunction } from "../utils/ai";

export const useAIFunction = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWordDetails = async (word: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await aiFunction(word);
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
