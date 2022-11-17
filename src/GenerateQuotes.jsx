import React, { useState } from "react";
import "./App.css";
import { quotesData } from "./Quotes.jsx";

export default function Quotes() {
  const regexQuote = /[^–-—]+/;
  const regexAuthor = /[–-—].+/;
  let generatedNumber = Math.floor(Math.random() * quotesData.length);
  let matchedQuote = quotesData[generatedNumber].match(regexQuote);
  let matchedAuthor = quotesData[generatedNumber].match(regexAuthor);
  const [quote, setQuote] = React.useState(matchedQuote);
  const [author, setAuthor] = useState(matchedAuthor);

  let randomNumber = () => {
    generatedNumber = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[generatedNumber].match(regexQuote));
    setAuthor(quotesData[generatedNumber].match(regexAuthor));
  };
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
