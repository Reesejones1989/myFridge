import React from 'react'
import { Link } from "react-router-dom";
import stocks from '../data';
import Stock from './Stock';

console.log(stocks)
export default function Dashboard() {
  return (
    <div>

    {stocks.map((coin, i) =>{
        const {name, symbol,lastPrice} = coin;
        return (<Link to={`/stocks/${symbol}`}>
        <h2>Name: {name}</h2>
        <h3>Symbol: {symbol}</h3>

        </Link>
        // return(<Stock stock={stock} key={i}/>
        )
    })}

    </div>
  )
}
