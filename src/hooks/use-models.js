import { useEffect, useState } from "react";
import { getModels } from "../api/api";

export function useModels() {
    const [models, setModels] = useState([])

    const fetchModels = async () => {
       const response = await getModels()
       setModels(response) 
    }

    useEffect(() => {
        fetchModels()
    }, [])

    return models
}
