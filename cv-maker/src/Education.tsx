import React from 'react';
import './Education.css';

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
      <div id="Education-box">
        <form className="formEducation" onSubmit={onSubmit}>
          <h2>Institute Name:</h2>
          <input
            className="inputInstitutes"
            type="text"
            value={inputInstitutes}
            onChange={onInputInstitutesChange}
            placeholder="Enter your Institutes Name"
          />
          <h2>Degree Name:</h2>
          <input
            className="inputDegree"
            type="text"
            value={inputDegree}
            onChange={onInputDegreeChange}
            placeholder="Enter your Degree Name"
          />
          <h2>Start Date:</h2>
          <input
            className="inputStartDate"
            type="text"
            value={inputStartDate}
            onChange={onInputStartDateChange}
            placeholder="Enter your Start Date"
          />
          <h2>End Date:</h2>
          <input
            className="inputEndDate"
            type="text"
            value={inputEndDate}
            onChange={onInputEndDateChange}
            placeholder="Enter your End Date"
          />
          <div id="formEducationButtons">
            <button id="btn1" type="button" onClick={onClose}>
              Close
            </button>
            <button type="button" id="dustbin" onClick={onDustbinClick}>
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

export default Education;
