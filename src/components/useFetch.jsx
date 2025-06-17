// JavaScript source code
import { useState, useEffect } from "react"

// Custom hook to fetch data from a given URL

export const useFetch = (url) => {

    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        let componentMounted = true;
        const fetchdata = async () => {


            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network Responded with an error");
                }
                if (componentMounted) {
                    const result = await response.json();
                    if (result.products) {
                        var id = "id" + Math.random().toString(16).slice(2)
                        result.products.map((item,index) => {
                            item.uniqueId = id + index
                        })
                        setdata(result.products);
                    }

                    else {
                        setdata(result);
                    }
                }

            } catch (error) {
                console.error("Fetch error:", error);
            }
            finally {
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        fetchdata()

    }, [url])

    return { data, loading }
}