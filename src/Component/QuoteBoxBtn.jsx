const QuoteBoxBtn = ({ color, changePhrase }) => {
  return (
    <div className="btn text-align-right">
      <button style={{ backgroundColor: color }} onClick={changePhrase}>
        <i className="fa-solid fa-chevron-right icon-width-small"></i>
      </button>
    </div>
  );
};

export default QuoteBoxBtn;
