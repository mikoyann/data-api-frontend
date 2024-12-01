import { useEffect, useState } from "react";
import { getResources } from "../api/api";

export function useResources() {
    const [resources, setResources] = useState([])

    const fetchResources = async () => {
       const response = await getResources()
       setResources(response) 
    }

    useEffect(() => {
        fetchResources()
    }, [])

    return resources
}
