import { useState, useEffect } from 'react';
import axios from "axios";



const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const flip = () => {
        setState(state => !state) 
    }
    return [state, flip]
}


function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLS);
    // * responses from axios 
  // * keyInLS is simply whether it is receiving a card or a pokemon
  
  // ? Not defined here console.log("restOfUrl:", restOfUrl)
//   !this makes sense because the calling of the next function is what initiates the pass through of that data which is where the restOfUrl is coming from 
   
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        console.log("formatter:", formatter)
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
      console.log("restOfUrl:", restOfUrl)
    };
  
    // const addResponseData = async function(formatter = function(data) { return data; }, restOfUrl = "") {
    //   const response = await axios.get(`${baseUrl}${restOfUrl}`);
    //   setResponses(function(data) { return [...data, formatter(response.data)]; });
    //   console.log("restOfUrl:", restOfUrl);
    // };
  
    const clearResponses = () => setResponses([]);
  
    // ? it feels like circlular logic to me becuase this is where it appears that I am getting add -- > its the response from axios but I dont understand how we are getting the restOfUrl as this appears where it is starting??? SO CONFUSING!!!
    // ! The answer is that the function is not getting called until that data is being passed to it. That function is getting called in the PokemonSelect and passed the need informtion parameters that is data (formated(pokemonData) and the restOfURl) So it is NOT circular.
  
    return [responses, addResponseData, clearResponses];
  }
  
  function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  
  export default useLocalStorage;
  
  export { useFlip, useAxios, useLocalStorage };


// ****************************************************************
// *This one works for the cardsAPI 

// function useAxios(url) {
//     const [data, setData] = useState([]);
  
//     async function fetchData() {
//         const response = await axios.get(url)
//         console.log("response:", response);
//         const newData = [...data, response.data.cards[0]]
//         // setData(response.data.cards)
//         // !This is setting the data as the new data so includes old cards as well.
//         setData(newData)
//     }
  
  
//     console.log("$$$$$fetchData in useAxios:", data)
  
  
//     return [data, fetchData];
//   }

// **************************************************************

// function useAxios(baseUrl) {
// // function useAxios(keyInLS, baseUrl) {
//     // const [responses, setResponses] = useLocalStorage(keyInLS);
//     const [data, setData] = useState();
  
//     // const addData = async (formatter = data => data, restOfUrl = "") => {
//     //   const response = await axios.get(`${baseUrl}${restOfUrl}`);
//     //   setData(data => [...data, formatter(response.data)]);
//     // };
//     async function addData() {
//         const response = await axios.get(`${baseUrl}`);
//         console.log("response.data:", response.data)
//         // const response = await axios.get(`${baseUrl}${restOfUrl}`);
//         // setData(data => [...data, formatter(response.data)]);
//         setData([...data, response.data])
//     }
    
//     // const clearResponses = () => setResponses([]);
  
//     return [data, addData];
//   }


// export { useFlip, useAxios }
// ! note that if you are importing multiple functions from the same file you have to do it this way 