import React, { useState, useEffect } from 'react';
import API_KEY from '../keys';


// https://www.googleapis.com/customersearch/v1?key=AIzaSyD6HvOu-5ZiCvVHPI--A4YBP2TIl9sLmj0&cx=8b315bef75be95c0a&q=rice
const CONTEXT_KEY = "8b315bef75be95c0a" // get it from the setup of 2nd link
// https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}


function useGoogleSearch(term) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => setData(result))
        }

        fetchData();

        return { data }
    }, [term])

    return (
        <div>

        </div>
    )
}

export default useGoogleSearch
