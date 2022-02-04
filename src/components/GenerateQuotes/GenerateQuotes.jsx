import React, { useEffect, useState } from 'react';
import './style.css';

function GenerateQuotes(props) {
  const [printableQuote, setPrintableQuote] = useState({});

 const loadQuotes = async () => {
  const response = await fetch("https://animechan.vercel.app/api/random");
  const data = await response.json();
  if(data.quote.length > 60 && data.quote.length < 120)
    setPrintableQuote(data);
  else
    loadQuotes();
 }

  useEffect(() => {
    loadQuotes();
  },[]);

  const handleClickCapture = event => {
    if(event.target.className === 'quote-section' || event.target.className === 'author-section') {
      loadQuotes();
    }
  }

  return (
    <div className="quote-box" onClickCapture={handleClickCapture}>
      <div className="quote-section">
        <p className="quote"><q> {printableQuote?.quote || "Strength is the only thing that matters in this world. Everything else is just a useless delusion for the weak."} </q></p>
      </div>

      <div className="author-section">
        <p>— {printableQuote?.character || "Vegeta"}</p>
      </div>
      {/* <button className="cta-btn" onClick={() => generateRandomQuote()}>Give Me Advice!</button> */}
    </div>
  );
}

export default GenerateQuotes;