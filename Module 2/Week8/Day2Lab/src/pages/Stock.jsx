import React from 'react'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
// import { Link } from "gatsby"

export default function Stock(props) {
  
    const apiKey = "f9722ec071c3061ced6a1437e8fbacd6"
    const params = useParams()
    const symbol = params.symbol

    const url = `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${symbol}?limit=120&apikey=${apiKey}`
  
  
    const [stockinfo, setStockinfo] = useState(null);

// console.log(coin)
const getstockinfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStockinfo(data);
   };
   useEffect(() => {
    getstockinfo();
    }, []);

    const loaded = () => {
        console.log(stockinfo)
        return (
          <div>
            <h1>
            Time: {stockinfo[0].date}
            </h1>
            <h2>
            Current High: {stockinfo[0].high}
            </h2>
            <h2>Current Volume: {stockinfo[0].volume} </h2>
            <h2>{stockinfo.name}</h2>
          </div>
        );
      };
  const loading = () => {
     return <h1>Loading...</h1>;
    };

    return stockinfo && stockinfo ? loaded() : loading();
};

