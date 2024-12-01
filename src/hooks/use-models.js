import { useEffect, useState } from "react";
import { getModels } from "../api/api";

export function useModels() {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchModels = async () => {
    setIsLoading(true);

    try {
      const response = await getModels();
      setModels(response);
    } catch (error) {
      setError(error?.message ?? "Серверная ошибка получения моделей");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return {
    models,
    isLoading,
    error,
  };
}
