const Personal = ({
  inputName,
  inputTitle,
  inputNumber,
  inputEmail,
  inputLocation,
  onInputNameChange,
  onInputEmailChange,
  onInputTitleChange,
  onInputNumberChange,
  onInputLocationChange,
  onClose,
}) => {
  return (
    <>
      <div id="personal-backdrop" onClick={onClose}></div>
      <div className="personal-box">
        <form>
          <h2>Full Name:</h2>
          <input
            className="inputName"
            type="text"
            value={inputName}
            onChange={onInputNameChange}
            placeholder="Enter your name"
          />
          <h2>Job Title:</h2>
          <input
            className="inputJobTitle"
            type="text"
            value={inputTitle}
            onChange={onInputTitleChange}
            placeholder="Enter your job title"
          />
          <h2>Phone Number:</h2>
          <input
            className="inputNumber"
            type="text"
            value={inputNumber}
            onChange={onInputNumberChange}
            placeholder="Enter your phone Number"
          />
          <h2>E-mail:</h2>
          <input
            className="inputEmail"
            type="text"
            value={inputEmail}
            onChange={onInputEmailChange}
            placeholder="Enter your Phone Number"
          />
          <h2>E-mail:</h2>
          <input
            className="inputLocation"
            type="text"
            value={inputLocation}
            onChange={onInputLocationChange}
            placeholder="Enter your Location"
          />
          <button id="btn1" type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default Personal;
