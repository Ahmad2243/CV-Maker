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
          <h2>Job Title:</h2>
          <input
            className="inputJobTitle"
            type="text"
            value={inputJobTitle}
            onChange={onInputJobTitleChange}
            placeholder="Enter your Job Title"
          />
          <h2>Company Name:</h2>
          <input
            className="inputCompanyName"
            type="text"
            value={inputCompanyName}
            onChange={onInputCompanyNameChange}
            placeholder="Enter your Company Name"
          />
          <h2>Start Date:</h2>
          <input
            className="inputStartDate"
            type="text"
            value={inputProStartDate}
            onChange={onInputProStartDateChange}
            placeholder="Enter your Start Date"
          />
          <h2>End Date:</h2>
          <input
            className="inputEndDate"
            type="text"
            value={inputProEndDate}
            onChange={onInputProEndDateChange}
            placeholder="Enter your End Date"
          />
          <h2>Description:</h2>
          <input
            className="inputDescription"
            type="text"
            value={inputDescription}
            onChange={onInputDescriptionChange}
            placeholder="Enter your Description"
          />
          <div id="formProfessionalButtons">
            <button id="btn1" type="button" onClick={onClose}>
              Close
            </button>
            <button type="button" id="dustbin" onClick={onProDustbinClick}>
              🗑️
            </button>
            <button id="btn2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Professional;
