const Professional = ({
  inputJobTitle,
  inputCompanyName,
  inputProStartDate,
  inputProEndDate,
  inputDescription,
  onInputJobTitleChange,
  onInputCompanyNameChange,
  onInputProStartDateChange,
  onInputProEndDateChange,
  onInputDescriptionChange,
  onClose,
  onProSubmit,
  onProDustbinClick,
}) => {
  return (
    <>
      <div id="Professional-backdrop" onClick={onClose}></div>
      <div id="Professional-box">
        <form className="formProfessional" onSubmit={onProSubmit}>
          <h2 className="font-bold">Job Title:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputJobTitle}
            onChange={onInputJobTitleChange}
            placeholder="Enter your Job Title"
          />
          <h2 className="font-bold">Company Name:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputCompanyName}
            onChange={onInputCompanyNameChange}
            placeholder="Enter your Company Name"
          />
          <h2 className="font-bold">Start Date:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputProStartDate}
            onChange={onInputProStartDateChange}
            placeholder="Enter your Start Date"
          />
          <h2 className="font-bold">End Date:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputProEndDate}
            onChange={onInputProEndDateChange}
            placeholder="Enter your End Date"
          />
          <h2 className="font-bold">Description:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputDescription}
            onChange={onInputDescriptionChange}
            placeholder="Enter your Description"
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
                onClick={onProDustbinClick}
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

export default Professional;
