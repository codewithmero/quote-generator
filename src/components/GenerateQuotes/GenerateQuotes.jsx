import React, { useEffect, useState } from 'react';
import Quotes from '../../api/Quotes';
import './style.css';

function GenerateQuotes(props) {
  const [quotes, setQuotes] = useState([]);
  const [printableQuote, setPrintableQuote] = useState({
    id: 1, 
    author: 'Fredrick Seige', 
    quote: "The siege is lost, but the war is far from over. My castle crumbles, but my will does not. You will not distract me so easily! We are prepared, come at us, you will fail."
  });

  const generateRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setPrintableQuote(quotes[index]);
 }

  useEffect(() => {
    const quotes = Quotes.map(q => q);
    setQuotes(quotes);

    const index = Math.floor(Math.random() * quotes.length);
    setPrintableQuote(quotes[index]);
  },[]);

  const handleClickCapture = event => {
    if(event.target.className === 'quote-section' || event.target.className === 'author-section') {
      generateRandomQuote();
    }
  }

  return (
    <div className="quote-box" onClickCapture={handleClickCapture}>
      <div className="quote-section">
        <p className="quote"><q> {printableQuote?.quote} </q></p>
      </div>

      <div className="author-section">
        <p>— {printableQuote?.author}</p>
      </div>
      {/* <button className="cta-btn" onClick={() => generateRandomQuote()}>Give Me Advice!</button> */}
    </div>
  );
}

export default GenerateQuotes;