import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    // db.json using endpoints
    const [isPending, setIsPending] = useState(true);      //For displaying 'loading' till the data is recieved
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        // we can use the abort controller to stop the fetch if the component using this fetch function unmounts
        setTimeout(() => {      //It executes the function only after 500 ms
            fetch(url, {signal: abortCont.signal })   //Get request (api)for blogs as we have selected port 8000 for JSON web server in our project 
            .then(res => {
               if(!res.ok) {
                    throw Error('Could not able to fetch!')
                }
                return res.json();
            })
            .then(data => { 
                setData(data);         //Updating the 'data'
                setIsPending(false);
                setError(null);
            })
            .catch(err => {         //To catch any network error if occured during fetching
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else{
                setIsPending(false);
                setError(err.message);
                }
            })
        }, 500);

        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error }       //returning these values as an object wherever useFetch hook is called
}

export default useFetch;