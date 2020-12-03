import { useState, useEffect } from "react";

const baseUrl = "https://conduit.productionready.io/api/";


export default function useFetch<D>(url: string | number) {
  const [data, setData] = useState<D | null>(null);
  // const [error, setError] = useState<D | null>(null);
  // const [loading, setLoading] = useState<D | boolean>(true);

    useEffect(() => {
      async function init() {
        // try {
          const response = await fetch(baseUrl + url)
          if (response.ok) {
            const jsonResponse = await response.json()
            setData(jsonResponse)
          } else {
            throw response;
          }
        // } catch (e) {
        //   setError(e);
        // } finally {
        //   setLoading(false);
        // }
      }
      init();
    }, [url]);

  // return { data, error, loading }
  return data
}