import React from 'react'
import './App.css'
import Quotes from './GenerateQuotes.jsx'
import BelowMainBar from './BelowMainBar'
import { quotesData } from "./Quotes.jsx";

export default function App() {

  //generate random number, to generate random quote + regex to differenciate between author and text 

  const regexQuote = /[^–-—]+/;
  const regexAuthor = /[–-—].+/;
  let generatedNumber = Math.floor(Math.random() * quotesData.length);
  let randomNumber = () => {
  generatedNumber = Math.floor(Math.random() * quotesData.length);
  setQuote(quotesData[generatedNumber].match(regexQuote));
  setAuthor(quotesData[generatedNumber].match(regexAuthor));};
  let matchedQuote = quotesData[generatedNumber].match(regexQuote);
  let matchedAuthor = quotesData[generatedNumber].match(regexAuthor);
  const [quote, setQuote] = React.useState(matchedQuote);
  const [author, setAuthor] = React.useState(matchedAuthor);
  
  return (
    <div id="quote-box">
      <main>
        <Quotes quote={quote} setQuote={setQuote} author={author} setAuthor={setAuthor} randomNumber={randomNumber}  />
        <BelowMainBar quote={quote} author={author} />
      </main>
    </div>
  )
}
