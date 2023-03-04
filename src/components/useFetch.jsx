import { useEffect, useState } from "react";

// Passed "url" parameter to make useFetch dyanmic to different urls
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        setTimeout(() =>{
            fetch(url)
            .then(res =>{
                // If server response is failed/false, throw error message 👇 
                if(!res.ok){
                    throw Error("Could not get server response, try again later😑")
                }
                return res.json()})
            .then(data => {
                // Changing "States" when data is successfully recieved
                setData(data);
                setHasError(null);
                setIsLoading(false);
            })
            .catch(err => {
                // Changing "States" when network, server returns an error
                setHasError(err.message);
                setIsLoading(false)
            })
        }, 1000)
    }, [url]);

    // Exporting useState value as object items for use in other components
    return {data, isLoading, hasError, setData}
}

export default useFetch;