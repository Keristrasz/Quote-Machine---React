import React from 'react'
import './App.css'
import Quotes from './GenerateQuotes.jsx'
import BelowMainBar from './BelowMainBar'

export default function App() {
  return (
    <div id="quote-box">
      <main>
        <Quotes />
        <BelowMainBar />
      </main>
    </div>
  )
}
