import { useEffect, useState } from "react";
import { getResources } from "../api/api";

export function useResources() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchResources = async () => {
    setIsLoading(true);

    try {
      const response = await getResources();
      setResources(response);
    } catch (error) {
      setError(error?.message ?? "Серверная ошибка получения ресурсов");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return {
    resources,
    isLoading,
    error,
  };
}
