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
      <div className="p-2">
        <form>
          <h2 className="font-bold">Full Name:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputName}
            onChange={onInputNameChange}
            placeholder="Enter your name"
          />
          <h2 className="font-bold">Job Title:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputTitle}
            onChange={onInputTitleChange}
            placeholder="Enter your job title"
          />
          <h2 className="font-bold">Phone Number:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputNumber}
            onChange={onInputNumberChange}
            placeholder="Enter your phone Number"
          />
          <h2 className="font-bold">E-mail:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputEmail}
            onChange={onInputEmailChange}
            placeholder="Enter your Phone Number"
          />
          <h2 className="font-bold">E-mail:</h2>
          <input
            className="border-gray-100 border-2 px-2 mb-4 mx-2"
            type="text"
            value={inputLocation}
            onChange={onInputLocationChange}
            placeholder="Enter your Location"
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

export default Personal;
