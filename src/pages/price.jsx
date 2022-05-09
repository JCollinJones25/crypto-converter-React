import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Price = (props) => {
    // Our api key from coinapi.io
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = useParams()
    // console.log(params)
    // Grabbing the Currency symbol from the URL Param
    const symbol = params.symbol;
    // Using the other two variables to create our URL
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //state to hold the coin data
    const [coin, setCoin] = useState("null");

    //function to fetch coin data
    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setCoin(data);
    };

    // useEffect to run getCoin when component mounts
    // Calls getCoin() and the [] says "Run useEffect on the initial render of the price component"
    useEffect(() => {
        getCoin();
    }, []);

    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>The value of one {coin.asset_id_base} is ${coin.rate} in {coin.asset_id_quote}</h1>
            </div>
        );
    };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  // ternary operator just to show loading while waiting on data
  // Check if coin is falsey / has data from the API
  // ? - "If coin has data, THEN invoke loaded"
  // : - If coin is falsey, THEN invoke the loading function
  return coin ? loaded() : loading();
};

export default Price;