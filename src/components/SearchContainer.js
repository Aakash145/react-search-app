import React, { useState, useEffect } from 'react'

import "../styles/SearchContainer.css"
import myData from '../data/data.json'

import { FaSearch } from 'react-icons/fa'
import BarLoader from "react-spinners/BarLoader";


export const SearchContainer = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    //Load Data from data.json after render
    useEffect(() => {
        setItems(myData);
    }, []);

    // Debounce function
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            const context = this;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        };
    };

    //I've implemented fetchSuggestions in two ways:
    const fetchSuggestions = async (value) => {
        try {
            //1. Using fetch API to get dummy data from dummyjson
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Network Response was not Ok");
            }

            const json = await response.json();
            const results = json.products.filter((product) => {
                return (
                    value &&
                    product &&
                    product.title &&
                    product.title.toLowerCase().includes(value.toLowerCase())
                )
            });
            //2. Using data.json to loadData using useEffect() Hooks (Uncomment the below code to test out!)
            /*
            const results = items.products.filter((item) => {
                //Making sure the input field is not empty and it matches the value in the list.
                return (
                    value &&
                    item &&
                    item.title &&
                    item.title.toLowerCase().includes(value.toLowerCase())
                )
            });
            */
            setLoading(false);
            setResults(results);
            setNoResults(results.length === 0); // Check if there are no results
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Debounced the fetchSuggestions function
    const debouncedFetchSuggestions = debounce(fetchSuggestions, 3000);

    const handleChange = (value) => {
        setInput(value)
        setLoading(true);
        debouncedFetchSuggestions(value)
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
                    loading ?
                        <BarLoader
                            color="#4169e1"
                            height={5}
                            width={200} /> : <div />
                }
            </div>
            {noResults && !loading && <p>No results found. Please try again.</p>}
        </>
    )
}
