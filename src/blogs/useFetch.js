import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(() => {
        setTimeout(() => {
            fetch(url, signal)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    else {
                        throw Error("Data is not fetched from the API");
                    }
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    if (error.name === 'AbortError') {
                        console.log("Fetch is aborted");
                    }
                    else {
                        setLoading(false);
                        setError(error);
                    }
                    console.log("fetch is failed: catch block executed");
                })
        }, 2000);
        
        return () => {
            abortController.abort();
            console.log("useFetch() cleanup function is called");
        }
    }, [url]);

    return { data, loading, error };
};

export default useFetch;