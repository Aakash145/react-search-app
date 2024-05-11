import React, { useState, useEffect } from 'react'

import "../styles/SearchContainer.css"
import myData from '../data/data.json'

import { FaSearch } from 'react-icons/fa'
import BarLoader from "react-spinners/BarLoader";


export const SearchContainer = ({setResults}) => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    //Load Data from data.json after render
    useEffect(() => {
        setItems(myData);
      }, []);

    const fetchSuggestions = (value) => {
        setLoading(true);
        //I've implemented fetchSuggestions in two ways:

        //1. Using fetch API to get dummy data from jsonplaceholder!

        /*fetch("https://dummyjson.com/products")
        .then((response) => {
            setLoading(false);
            return response.json()
        })
        .then((json) => {
            const results = json.products.filter((product) => {
                return (
                    value &&
                    product &&
                    product.title &&
                    product.title.toLowerCase().includes(value.toLowerCase())
                )
            });
            setResults(results);
        })*/

        //2. Using setTimeout to mock the behaviour of a backend service
        setTimeout(() => {
            const results = items.products.filter((item) => {
                //Making sure the input field is not empty and it matches the value in the list.
                return (
                    value &&
                    item &&
                    item.title &&
                    item.title.toLowerCase().includes(value.toLowerCase())
                )
            });
            setResults(results);
            setLoading(false);
         } , 3000)
         
    }

    const handleChange = (value) => {
        setInput(value)
        fetchSuggestions(value)
    }


  return (
    <>
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
            placeholder='Type to search...' 
            value={input} 
            onChange={(e) => handleChange(e.target.value)} />
        </div>
        <div className='bar-loader'>
            {
                loading? 
                    <BarLoader
                        color="#4169e1"
                        height={5}
                        width={200} /> : <div />
            }
        </div>
    </>
  )
}
