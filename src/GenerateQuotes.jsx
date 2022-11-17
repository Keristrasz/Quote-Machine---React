import React, { useState } from "react";
import "./App.css";
import { quotesData } from "./Quotes.jsx";


export default function Quotes({setQuote, setAuthor, quote, author, randomNumber}) {

  return (
    <div id="quote-box">
      <div id="quote-text">
        <h3>{quote}</h3>
      </div>
      <div id="quote-author">
        <p><i>{author}</i></p>
      </div>
      <button type="submit" id="btn-new-quote" onClick={randomNumber}>
        New Quote
      </button>
    </div>
  );
}
