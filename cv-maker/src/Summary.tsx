const Summary = ({ inputValue, onInputChange, onClose }) => {
  return (
    <>
      <div id="summary-backdrop" onClick={onClose}></div>
      <div className="summary-box">
        <form className="formSummary">
          <input
            className="inputValue"
            type="text"
            value={inputValue}
            onChange={onInputChange}
            placeholder="Enter your summary"
          />
          <button id="btn1" type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default Summary;
