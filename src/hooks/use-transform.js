import { useEffect, useState } from "react";
import { getModels, transformData } from "../api/api";

export function useTransform() {
  const [transformedData, setTransformedData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const requestTransform = async (resource, model) => {
    setIsSubmitting(true);

    try {
      const response = await transformData(resource, model);
      setTransformedData(response);
    } catch (error) {
      setError(error.message ?? "Серверная ошибка преобразования данных");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    transformedData,
    requestTransform,
    isSubmitting,
    error,
  };
}
