const Summary = ({ inputValue, onInputChange, onClose }) => {
  return (
    <>
      <div id="summary-backdrop" onClick={onClose}></div>
      <div className="summary-box">
        <form className="formSummary">
          <input
            className="border-gray-100 border-2 px-2 mr-2 mb-4 mx-2 w-[290px] h-20"
            type="text"
            value={inputValue}
            onChange={onInputChange}
            placeholder="Enter your summary"
          />
          <div className="flex w-[310px] justify-center">
            <button
              className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Summary;
