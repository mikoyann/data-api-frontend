import { useEffect, useState } from "react";
import { getModels, transformData } from "../api/api";

export function useTransform() {
    const [transformedData, setTransformedData] = useState([])

    const requestTransform = async (resource, model) => {
       const response = await transformData(resource, model)
       setTransformedData(response) 
    }

    return {
        transformedData, requestTransform
    }
}
