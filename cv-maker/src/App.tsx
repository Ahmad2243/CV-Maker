import { useState } from 'react';
import './App.css';
//import Summary from './Summary';
//import Personal from './Personal';
//import Education from './Education';
//import Professional from './Professional';

function App() {
  /*childContainer1----------------------------------------------------------------*/
  const [showPersonal, setShowPersonal] = useState<Boolean>(false);
  const [inputName, setInputName] = useState<string>('Ahmad Rabbani');
  const [inputTitle, setInputTitle] = useState<string>('Developer');
  const [inputNumber, setInputNumber] = useState<string>('0333-5632563');
  const [inputEmail, setInputEmail] = useState<string>(
    'ahmadrabbani@gmail.com'
  );
  const [inputLocation, setInputLocation] =
    useState<string>('Karachi,Pakistan.');

  const handlePersonalButtonClick = () => {
    setShowPersonal(true);
  };

  const handlePersonalButtonClose = () => {
    setShowPersonal(false);
  };

  const handlePersonalNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handlePersonalTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handlePersonalNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handlePersonalEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePersonalLocationChange = (event) => {
    setInputLocation(event.target.value);
  };

  /*-------------------------------------------------------------------------------*/

  /*childContainer2----------------------------------------------------------------*/
  const [showSummary, setShowSummary] = useState<Boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minus, saepe iste, nemo dolores necessitatibus perspiciatis velit esse distinctio consequuntur recusandae asperiores sunt veritatis eum quibusdam culpa vero facilis eos?'
  );

  const handleButtonClick = () => {
    setShowSummary(true);
  };

  const handleClose = () => {
    setShowSummary(false);
  };

  const handleSummaryInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /*-----------------------------------------------------------------------*/

  /*childContainer3-----------------------------------------------------------------------*/
  const [expandEducationAccordion, setExpandEducationAccordion] =
    useState<boolean>(false);
  const [showEducationModal, setShowEducationModal] = useState<boolean>(false);
  const [inputInstitutes, setInputInstitutes] = useState<string>(
    'Sindh Madrassa Tul Islam University'
  );
  const [inputDegree, setInputDegree] = useState<string>(
    'BS Information Technology'
  );
  const [inputStartDate, setInputStartDate] = useState<number>(2023);
  const [inputEndDate, setInputEndDate] = useState<number>(2026);
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleExpandEducation = () => {
    setExpandEducationAccordion((prev) => !prev);
  };

  const handleEducationClick = (event) => {
    event.stopPropagation();
    setShowEducationModal(true);
  };

  const handleEducationButtonClose = (event) => {
    event.stopPropagation();
    setShowEducationModal(false);
  };

  const handleInstitutesChange = (event) => {
    setInputInstitutes(event.target.value);
  };

  const handleDegreeChange = (event) => {
    setInputDegree(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setInputStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setInputEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSubmission = {
      institutes: inputInstitutes,
      degree: inputDegree,
      startDate: inputStartDate,
      endDate: inputEndDate,
      job: inputJobTitle,
    };
    setSubmittedValues([...submittedValues, newSubmission]);
    setShowEducationModal(false);
    clearForm();
  };

  const handleDustbinClick = (index, event) => {
    event.stopPropagation();
    const updatedValues = submittedValues.filter((_, i) => i !== index);
    setSubmittedValues(updatedValues);
    if (updatedValues.length === 0) {
      clearForm(); // Clear form fields if no values are left
    }
  };

  const clearForm = () => {
    setInputInstitutes('');
    setInputDegree('');
    setInputStartDate(0);
    setInputEndDate(0);
  };

  const handleSubmittedValueClick = (index, event) => {
    event.stopPropagation();
    setInputInstitutes(submittedValues[index].institutes);
    setInputDegree(submittedValues[index].degree);
    setInputStartDate(submittedValues[index].startDate);
    setInputEndDate(submittedValues[index].endDate);
    setShowEducationModal(true);
  };

  /*----------------------------------------------------------------*/
  /*childContainer4----------------------------------------------------------------*/
  const [expandProfessionalAccordion, setExpandProfessionalAccordion] =
    useState(false);
  const [showProfessionalModal, setShowProfessionalModal] = useState(false);
  const [inputJobTitle, setInputJobTitle] = useState('Front-End Developer');
  const [inputCompanyName, setInputCompanyName] = useState('Techwards');
  const [inputDescription, setInputDescription] = useState('');
  const [inputProStartDate, setInputProStartDate] = useState('2023');
  const [inputProEndDate, setInputProEndDate] = useState('2026');
  const [proSubmittedValues, setProSubmittedValues] = useState([]);

  const handleExpandProfessional = () => {
    setExpandProfessionalAccordion((prev) => !prev);
  };

  const handleProfessionalClick = (event) => {
    event.stopPropagation();
    setShowProfessionalModal(true);
  };

  const handleProfessionalButtonClose = (event) => {
    event.stopPropagation();
    setShowProfessionalModal(false);
  };

  const handleJobTitleChange = (event) => {
    setInputJobTitle(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setInputCompanyName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  };

  const handleProStartDateChange = (event) => {
    setInputProStartDate(event.target.value);
  };

  const handleProEndDateChange = (event) => {
    setInputProEndDate(event.target.value);
  };

  const handleProSubmit = (event) => {
    event.preventDefault();
    const newSubmission = {
      proStartDate: inputProStartDate,
      proEndDate: inputProEndDate,
      job: inputJobTitle,
      company: inputCompanyName,
      description: inputDescription,
    };
    setProSubmittedValues([...proSubmittedValues, newSubmission]);
    setShowProfessionalModal(false);
    setExpandProfessionalAccordion(true);
    proClearForm();
  };

  const handleProDustbinClick = (proindex, event) => {
    event.stopPropagation();
    const updatedValues = proSubmittedValues.filter((_, i) => i !== proindex);
    setProSubmittedValues(updatedValues);
    if (updatedValues.length === 0) {
      proClearForm();
    }
  };

  const proClearForm = () => {
    setInputProStartDate('');
    setInputProEndDate('');
    setInputJobTitle('');
    setInputCompanyName('');
    setInputDescription('');
  };

  const handleProSubmittedValueClick = (proindex, event) => {
    event.stopPropagation();
    setInputProStartDate(proSubmittedValues[proindex].proStartDate);
    setInputProEndDate(proSubmittedValues[proindex].proEndDate);
    setInputJobTitle(proSubmittedValues[proindex].job);
    setInputCompanyName(proSubmittedValues[proindex].company);
    setInputDescription(proSubmittedValues[proindex].description);
    setShowProfessionalModal(true);
  };

  /*----------------------------------------------------------------*/
  /*childContainer5----------------------------------------------------------------*/
  const [expandSkillsAccordion, setExpandSkillsAccordion] = useState(false);
  const [submittedSkills, setSubmittedSkills] = useState([
    {
      skills: '',
    },
  ]);

  const handleExpandSkills = () => {
    setExpandSkillsAccordion((prev) => !prev);
  };

  const handleSkillsInputChange = (event, skillsIndex) => {
    const previousSkills = [...submittedSkills];
    previousSkills[skillsIndex].skills = event.target.value;
    setSubmittedSkills(previousSkills);
  };

  const preventBubbling = (event) => {
    event.stopPropagation();
  };

  const handleAddSkill = (event) => {
    event.stopPropagation();
    const newSubmission = {
      skills: '',
    };
    setSubmittedSkills([...submittedSkills, newSubmission]);
  };

  const handleSkillsDustbinClick = (skillsIndex, event) => {
    event.stopPropagation();
    const updatedValues = submittedSkills.filter((_, i) => i !== skillsIndex);
    setSubmittedSkills(updatedValues);
  };

  /*----------------------------------------------------------------*/
  console.log('submittedSkills', submittedSkills);
  return (
    <>
      <div className="container1">
        <div className="childContainer1">
          <button onClick={handlePersonalButtonClick}>
            <h2>Personal Details</h2>
          </button>

          {showPersonal && (
            <Personal
              inputName={inputName}
              onInputNameChange={handlePersonalNameChange}
              onClose={handlePersonalButtonClose}
              inputTitle={inputTitle}
              onInputTitleChange={handlePersonalTitleChange}
              inputNumber={inputNumber}
              onInputNumberChange={handlePersonalNumberChange}
              inputEmail={inputEmail}
              onInputEmailChange={handlePersonalEmailChange}
              inputLocation={inputLocation}
              onInputLocationChange={handlePersonalLocationChange}
            />
          )}
        </div>
        *-----------------------------------------------------------------*
        <div className="childContainer2">
          <button onClick={handleButtonClick}>
            <h2>Summary</h2>
          </button>

          {showSummary && (
            <Summary
              inputValue={inputValue}
              onInputChange={handleSummaryInputChange}
              onClose={handleClose}
            />
          )}
        </div>
        *-----------------------------------------------------------------*
        <div onClick={handleExpandEducation} className="childContainer3">
          <h2>Education</h2>

          {expandEducationAccordion && (
            <>
              {submittedValues.map((value, index) => (
                <div
                  key={index}
                  id="submitted-value"
                  onClick={(event) => handleSubmittedValueClick(index, event)}
                >
                  {value.institutes}
                  <button
                    type="button"
                    id="dustbin"
                    onClick={(event) => handleDustbinClick(index, event)}
                  >
                    🗑️
                  </button>
                </div>
              ))}

              <button id="edu" onClick={handleEducationClick}>
                + Education Detail
              </button>
            </>
          )}

          {showEducationModal && (
            <Education
              inputInstitutes={inputInstitutes}
              onInputInstitutesChange={handleInstitutesChange}
              onClose={handleEducationButtonClose}
              onSubmit={handleSubmit}
              inputDegree={inputDegree}
              onInputDegreeChange={handleDegreeChange}
              inputStartDate={inputStartDate}
              onInputStartDateChange={handleStartDateChange}
              inputEndDate={inputEndDate}
              onInputEndDateChange={handleEndDateChange}
              onDustbinClick={() =>
                handleDustbinClick(submittedValues.length - 1)
              }
            />
          )}
        </div>
        *-----------------------------------------------------------------*
        <div onClick={handleExpandProfessional} className="childContainer4">
          <h2>Professional Experience</h2>

          {expandProfessionalAccordion && (
            <>
              {proSubmittedValues.map((value, proindex) => (
                <div
                  key={proindex}
                  id="submitted-value"
                  onClick={(event) =>
                    handleProSubmittedValueClick(proindex, event)
                  }
                >
                  {value.job} at {value.company}
                  <button
                    type="button"
                    id="dustbin"
                    onClick={(event) => handleProDustbinClick(proindex, event)}
                  >
                    🗑️
                  </button>
                </div>
              ))}

              <button id="edu" onClick={handleProfessionalClick}>
                + Experience
              </button>
            </>
          )}

          {showProfessionalModal && (
            <Professional
              inputJobTitle={inputJobTitle}
              onInputJobTitleChange={handleJobTitleChange}
              onClose={handleProfessionalButtonClose}
              onProSubmit={handleProSubmit}
              inputCompanyName={inputCompanyName}
              onInputCompanyNameChange={handleCompanyNameChange}
              inputProStartDate={inputProStartDate}
              onInputProStartDateChange={handleProStartDateChange}
              inputProEndDate={inputProEndDate}
              onInputProEndDateChange={handleProEndDateChange}
              inputDescription={inputDescription}
              onInputDescriptionChange={handleDescriptionChange}
              onProDustbinClick={proClearForm} // Clear form when dustbin is clicked
            />
          )}
        </div>
        *-----------------------------------------------------------------*
        <div onClick={handleExpandSkills} className="childContainer5">
          <h2>Skills</h2>
          {expandSkillsAccordion && (
            <>
              {submittedSkills.map((skill, skillsIndex) => (
                <div key={skillsIndex} id="submitted-skills">
                  <input
                    className="inputSkills"
                    type="text"
                    value={skill.skills}
                    onChange={(event) =>
                      handleSkillsInputChange(event, skillsIndex)
                    }
                    placeholder="Enter your Skills"
                    onClick={preventBubbling}
                  ></input>
                  <button
                    type="button"
                    id="dustbin"
                    onClick={(event) =>
                      handleSkillsDustbinClick(skillsIndex, event)
                    }
                  >
                    🗑️
                  </button>
                </div>
              ))}

              <button id="edu" onClick={handleAddSkill}>
                + Skills
              </button>
            </>
          )}
        </div>
        *-----------------------------------------------------------------*
        <div className="childContainer6">
          <button>
            <h2>Certifications</h2>
          </button>
        </div>
        *-----------------------------------------------------------------*
      </div>

      <div className="container2">
        <div className="item1">
          <div className="childItem1">
            <h1 className="h1Name">{inputName}</h1>
            <p>
              <i>{inputTitle}</i>
            </p>
          </div>
          <div className="childItem2">
            <p>{inputNumber} &nbsp;&nbsp;&nbsp;&nbsp; 🕻&nbsp;&nbsp;</p>
            <p>{inputEmail} &nbsp;&nbsp;&nbsp; ✉️</p>
            <p>{inputLocation} &nbsp;&nbsp;&nbsp; 📍</p>
          </div>
        </div>
        <div className="item2">
          <h1>Summary</h1>
          <p>{inputValue}</p>
        </div>

        <div className="item3">
          <h1>Education</h1>
          {submittedValues.map((value, index) => (
            <div key={index}>
              <p>{value.institutes}</p>
              <p>{value.degree}</p>
              <p>
                {value.startDate} - {value.endDate}
              </p>
            </div>
          ))}

          <h1>Skills</h1>
          {submittedSkills.map((value, skillsIndex) => (
            <div key={skillsIndex}>
              <h3>{value.skills}</h3>
            </div>
          ))}
        </div>

        <div className="item4">
          <h1>Professional Experience</h1>
          {proSubmittedValues.map((value, proindex) => (
            <div key={proindex}>
              <h3>{value.job}</h3>
              <p>
                {value.company} | {value.proStartDate} - {value.proEndDate}
              </p>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="item5"></div>
      </div>
    </>
  );
}

export default App;
