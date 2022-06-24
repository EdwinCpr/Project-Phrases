import phrases from "./Phrase.json";

const QuoteBox = ({ phrase }) => {
  return (
    <div className="quote-grid">
      <div className="flex-icon">
        <i className="fa-solid fa-quote-left icon-width-big"></i>
        <p>{phrases[phrase].quote}</p>
      </div>
      <p className="text-align-right">{phrases[phrase].author}</p>
    </div>
  );
};

export default QuoteBox;
