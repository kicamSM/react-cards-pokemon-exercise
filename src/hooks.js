import React, { useState, useEffect } from 'react';
import axios from "axios";

const useFlip = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const flip = () => {
        setState(state => !state) 
    }
    return [state, flip]
}



// const useFetch = (url, options = {}) => {
//     const [response, setResponse] = useState(null);
//     // const [error, setError] = useState(null);
//     // const [isLoading, setIsLoading] = useState(true);
  
//     // after the first render, fetch our data
//     useEffect(() => {
//       const fetchData = async () => {
//         // try {
//           const res = await fetch(url);
//           const json = await res.json();
//           setResponse(json);
//         // } catch (error) {
//         //   setError(error);
//         // }
//         // setIsLoading(false);
//       };
//       fetchData();
//     }, [url]);
  
//     // return { response, error, isLoading };
//     return { response };
//   };
  


// function useAxios(keyInLS, baseUrl) {
//     // const [responses, setResponses] = useLocalStorage(keyInLS);
  
//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//       const response = await axios.get(`${baseUrl}${restOfUrl}`);
//     //   setResponses(data => [...data, formatter(response.data)]);
//     };
  
//     const clearResponses = () => setResponses([]);
  
//     return [responses, addResponseData, clearResponses];
//   }


// function useAxios(keyInLS, baseUrl) {
//     // const [responses, setResponses] = useLocalStorage(keyInLS);
//     const [responses, setResponses] = useState([])
  
//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//       const response = await axios.get(`${baseUrl}${restOfUrl}`);
//       setResponses(data => [...data, formatter(response.data)]);
//     };
  
//     const clearResponses = () => setResponses([]);
  
//     return [responses, addResponseData, clearResponses];
//   }

  
//   function useAxios(keyInLS, baseUrl) {
//     // const [responses, setResponses] = useLocalStorage(keyInLS);
//     const [responses, setResponses] = useState([])
  
//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//       const response = await axios.get(`${baseUrl}${restOfUrl}`);
//       setResponses(data => [...data, formatter(response.data)]);
//     };
  
//     const clearResponses = () => setResponses([]);
  
//     return [responses, addResponseData, clearResponses];
//   }

//   const useAxios = (url) => {
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       axios.get(url).then((response) => {
//         setData(response.data);
//       });
//     }, [url]);
  
//     const addDataItem = (newDataItem) => {
//       setData([...data, newDataItem]);
//     };
  
//     return [data, addDataItem];
//   };

// function useAxios(baseUrl) {
//     // const [responses, setResponses] = useLocalStorage(keyInLS);
  
//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//       const response = await axios.get(`${baseUrl}${restOfUrl}`);
//       setResponses(data => [...data, formatter(response.data)]);
//     };
  
//     const clearResponses = () => setResponses([]);
  
//     return [responses, addResponseData, clearResponses];
//   }
  

  function useAxios(url) {
    const [data, setData] = useState([]);
  
    // useEffect(() => {

    async function fetchData() {
        const response = await axios.get(url)
        // console.log("response:", response);
        setData(response)
    }


    // }, [url]);

    // const addDataItem = (newDataItem) => {
    //   setData([...data, newDataItem]);
    // };
    console.log("fetchData in useAxios:", data)

    // setCards(cards => [...cards, { ...data, id: uuid() }]);

    return [data, fetchData];
  }
  
  


export { useFlip, useAxios }
// ! note that if you are importing multiple functions from the same file you have to do it this way 