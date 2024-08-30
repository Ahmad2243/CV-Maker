const Education = ({
  inputInstitutes,
  inputDegree,
  inputStartDate,
  inputEndDate,
  onInputInstitutesChange,
  onInputDegreeChange,
  onInputStartDateChange,
  onInputEndDateChange,
  onClose,
  onSubmit,
  onDustbinClick,
}) => {
  return (
    <>
      <div id="Education-backdrop" onClick={onClose}></div>
      <div className="p-2">
        <form className="formEducation" onSubmit={onSubmit}>
          <h2 className="font-bold">Institute Name:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputInstitutes}
            onChange={onInputInstitutesChange}
            placeholder="Enter your Institutes Name"
          />
          <h2 className="font-bold">Degree Name:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputDegree}
            onChange={onInputDegreeChange}
            placeholder="Enter your Degree Name"
          />
          <h2 className="font-bold">Start Date:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputStartDate}
            onChange={onInputStartDateChange}
            placeholder="Enter your Start Date"
          />
          <h2 className="font-bold">End Date:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputEndDate}
            onChange={onInputEndDateChange}
            placeholder="Enter your End Date"
          />
          <div className="flex w-[290px] justify-between">
            <div>
              <button
                className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="bg-white hover:border-transparent px-0 py-0 m-2"
                onClick={onDustbinClick}
              >
                🗑️
              </button>
            </div>
            <div>
              <button
                className="bg-blue-500 border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
