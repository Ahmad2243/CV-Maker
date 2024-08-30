import { useState } from 'react';
import './App.css';
import Summary from './Summary';
import Personal from './Personal';
import Education from './Education';
import Professional from './Professional';

function App() {
  /*childContainer1----------------------------------------------------------------*/
  const [showPersonal, setShowPersonal] = useState<boolean>(false);
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

  const handlePersonalNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputName(event.target.value);
  };

  const handlePersonalTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputTitle(event.target.value);
  };

  const handlePersonalNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputNumber(event.target.value);
  };

  const handlePersonalEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputEmail(event.target.value);
  };

  const handlePersonalLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputLocation(event.target.value);
  };

  /*-------------------------------------------------------------------------------*/

  /*childContainer2----------------------------------------------------------------*/
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minus, saepe iste, nemo dolores necessitatibus perspiciatis velit esse distinctio consequuntur recusandae asperiores sunt veritatis eum quibusdam culpa vero facilis eos?'
  );

  const handleButtonClick = () => {
    setShowSummary(true);
  };

  const handleClose = () => {
    setShowSummary(false);
  };

  const handleSummaryInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
  const [submittedValues, setSubmittedValues] = useState<
    {
      institutes: string;
      degree: string;
      startDate: number;
      endDate: number;
    }[]
  >([]);

  const handleExpandEducation = () => {
    setExpandEducationAccordion((prev) => !prev);
  };

  const handleEducationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowEducationModal(true);
  };

  const handleEducationButtonClose = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setShowEducationModal(false);
  };

  const handleInstitutesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputInstitutes(event.target.value);
  };

  const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDegree(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputStartDate(parseInt(event.target.value, 10));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEndDate(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSubmission = {
      institutes: inputInstitutes,
      degree: inputDegree,
      startDate: inputStartDate,
      endDate: inputEndDate,
    };
    setSubmittedValues([...submittedValues, newSubmission]);
    setShowEducationModal(false);
    clearForm();
  };

  const handleDustbinClick = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const updatedValues = submittedValues.filter((_, i) => i !== index);
    setSubmittedValues(updatedValues);
    if (updatedValues.length === 0) {
      clearForm();
    }
  };

  const clearForm = () => {
    setInputInstitutes('');
    setInputDegree('');
    setInputStartDate(0);
    setInputEndDate(0);
  };

  const handleSubmittedValueClick = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
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
    useState<boolean>(false);
  const [showProfessionalModal, setShowProfessionalModal] =
    useState<boolean>(false);
  const [inputJobTitle, setInputJobTitle] = useState<string>(
    'Front-End Developer'
  );
  const [inputCompanyName, setInputCompanyName] = useState<string>('Techwards');
  const [inputDescription, setInputDescription] = useState<string>('');
  const [inputProStartDate, setInputProStartDate] = useState<string>('2023');
  const [inputProEndDate, setInputProEndDate] = useState<string>('2026');
  const [proSubmittedValues, setProSubmittedValues] = useState<
    {
      proStartDate: string;
      proEndDate: string;
      job: string;
      company: string;
      description: string;
    }[]
  >([]);

  const handleExpandProfessional = () => {
    setExpandProfessionalAccordion((prev) => !prev);
  };

  const handleProfessionalClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setShowProfessionalModal(true);
  };

  const handleProfessionalButtonClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setShowProfessionalModal(false);
  };

  const handleJobTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputJobTitle(event.target.value);
  };

  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCompanyName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputDescription(event.target.value);
  };

  const handleProStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputProStartDate(event.target.value);
  };

  const handleProEndDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputProEndDate(event.target.value);
  };

  const handleProSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

  const handleProDustbinClick = (
    proindex: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

  const handleProSubmittedValueClick = (
    proindex: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
  const [expandSkillsAccordion, setExpandSkillsAccordion] =
    useState<boolean>(false);
  const [submittedSkills, setSubmittedSkills] = useState([
    {
      skills: '',
    },
  ]);

  const handleExpandSkills = () => {
    setExpandSkillsAccordion((prev) => !prev);
  };

  const handleSkillsInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    skillsIndex: number
  ) => {
    const previousSkills = [...submittedSkills];
    previousSkills[skillsIndex].skills = event.target.value;
    setSubmittedSkills(previousSkills);
  };

  const preventBubbling = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleAddSkills = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newSubmission = {
      skills: '',
    };
    setSubmittedSkills([...submittedSkills, newSubmission]);
  };

  const handleSkillsDustbinClick = (
    skillsIndex: Number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const updatedValues = submittedSkills.filter((_, i) => i !== skillsIndex);
    setSubmittedSkills(updatedValues);
  };

  /*----------------------------------------------------------------*/
  /*childContainer6----------------------------------------------------------------*/
  const [expandCertificateAccordion, setExpandCertificateAccordion] =
    useState<boolean>(false);
  const [submittedCertificate, setSubmittedCertificate] = useState([
    {
      certificate: '',
    },
  ]);

  const handleExpandCertificate = () => {
    setExpandCertificateAccordion((prev) => !prev);
  };

  const handleCertificateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    certificateIndex: number
  ) => {
    const previousCertificate = [...submittedCertificate];
    previousCertificate[certificateIndex].certificate = event.target.value;
    setSubmittedCertificate(previousCertificate);
  };

  const preventCertificateBubbling = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleAddCertificate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newSubmission = {
      certificate: '',
    };
    setSubmittedCertificate([...submittedCertificate, newSubmission]);
  };

  const handleCertificateDustbinClick = (
    certificateIndex: Number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const updatedValues = submittedCertificate.filter(
      (_, i) => i !== certificateIndex
    );
    setSubmittedCertificate(updatedValues);
  };

  /*----------------------------------------------------------------*/
  return (
    <>
      <div className="flex justify-center flex-col w-[400px]">
        <div className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
          <div onClick={handlePersonalButtonClick}>
            <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
              Personal Details
            </h2>
          </div>

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
        <div className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
          <div onClick={handleButtonClick}>
            <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
              Summary
            </h2>
          </div>

          {showSummary && (
            <Summary
              inputValue={inputValue}
              onInputChange={handleSummaryInputChange}
              onClose={handleClose}
            />
          )}
        </div>
        *-----------------------------------------------------------------*
        <div
          onClick={handleExpandEducation}
          className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        >
          <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
            Education
          </h2>

          {expandEducationAccordion && (
            <>
              {submittedValues.map((value, index) => (
                <div
                  key={index}
                  className="w-[310px] border-2 border-black border-l-0 border-r-0 p-2 mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                  onClick={(event) => handleSubmittedValueClick(index, event)}
                >
                  {value.institutes}
                  <button
                    type="button"
                    className="bg-white hover:border-transparent px-0 py-0"
                    onClick={(event) => handleDustbinClick(index, event)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
              <div className="flex w-[310px] justify-center">
                <button
                  className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                  onClick={handleEducationClick}
                >
                  + Education Detail
                </button>
              </div>
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
        <div
          onClick={handleExpandProfessional}
          className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        >
          <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
            Professional Experience
          </h2>

          {expandProfessionalAccordion && (
            <>
              {proSubmittedValues.map((value, proindex) => (
                <div
                  key={proindex}
                  className="w-[310px] border-2 border-black border-l-0 border-r-0 p-2 mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                  onClick={(event) =>
                    handleProSubmittedValueClick(proindex, event)
                  }
                >
                  {value.job} at {value.company}
                  <button
                    type="button"
                    className="bg-white hover:border-transparent px-0 py-0"
                    onClick={(event) => handleProDustbinClick(proindex, event)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
              <div className="flex w-[310px] justify-center">
                <button
                  className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                  onClick={handleProfessionalClick}
                >
                  + Experience
                </button>
              </div>
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
        <div
          onClick={handleExpandSkills}
          className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        >
          <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
            Skills
          </h2>
          {expandSkillsAccordion && (
            <>
              {submittedSkills.map((skill, skillsIndex) => (
                <div
                  key={skillsIndex}
                  className="w-[310px] border-2 border-black rounded-lg mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                >
                  <input
                    className="px-1 py-[2px] mx-1 my-2 focus:outline-none focus:border-transparent"
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
                    className="bg-white hover:border-transparent px-0 py-0"
                    onClick={(event) =>
                      handleSkillsDustbinClick(skillsIndex, event)
                    }
                  >
                    🗑️
                  </button>
                </div>
              ))}
              <div className="flex w-[310px] justify-center">
                <button
                  className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                  onClick={handleAddSkills}
                >
                  + Skills
                </button>
              </div>
            </>
          )}
        </div>
        *-----------------------------------------------------------------*
        <div
          onClick={handleExpandCertificate}
          className="w-[330px] bg-white border-2 border-black mb-5 rounded-lg p-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        >
          <div>
            <h2 className="text-black text-2xl font-semibold my-2 cursor-pointer">
              Certifications
            </h2>
            {expandCertificateAccordion && (
              <>
                {submittedCertificate.map((certificate, certificateIndex) => (
                  <div
                    key={certificateIndex}
                    className="w-[310px] border-2 border-black rounded-lg mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                  >
                    <input
                      className="px-1 py-[2px] mx-1 my-2 focus:outline-none focus:border-transparent"
                      type="text"
                      value={certificate.certificate}
                      onChange={(event) =>
                        handleCertificateInputChange(event, certificateIndex)
                      }
                      placeholder="Enter your Certificate"
                      onClick={preventCertificateBubbling}
                    ></input>
                    <button
                      type="button"
                      className="bg-white hover:border-transparent px-0 py-0"
                      onClick={(event) =>
                        handleCertificateDustbinClick(certificateIndex, event)
                      }
                    >
                      🗑️
                    </button>
                  </div>
                ))}
                <div className="flex w-[310px] justify-center">
                  <button
                    className="border-2 border-black rounded-[50px] cursor-pointer hover:bg-slate-100 hover:border-gray-400"
                    onClick={handleAddCertificate}
                  >
                    + Certification
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        *-----------------------------------------------------------------*
      </div>

      <div className="grid w-[860px] grid-cols-[345px_1fr_0px] grid-rows-[150px_150px_1fr_100px] shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
        <div className="col-start-1 col-end-4 bg-blue-950 text-white flex justify-between p-[10px] items-center">
          <div className="pr-[15px] pl-[30px]">
            <h1 className="mt-[25px] text-4xl font-bold">{inputName}</h1>
            <p>
              <i>{inputTitle}</i>
            </p>
          </div>
          <div className="text-end">
            <p>{inputNumber} &nbsp;&nbsp;&nbsp;&nbsp; 🕻&nbsp;&nbsp;</p>
            <p>{inputEmail} &nbsp;&nbsp;&nbsp; ✉️</p>
            <p>{inputLocation} &nbsp;&nbsp;&nbsp; 📍</p>
          </div>
        </div>
        <div className="col-start-1 col-end-4 bg-white text-center border-t-[5px] border-gray-500 p-5">
          <h1 className="text-4xl font-bold">Summary</h1>
          <p>{inputValue}</p>
        </div>

        <div className="w-[345px] border-r-[1px] border-black bg-white text-center p-5">
          <h1 className="text-4xl font-bold">Education</h1>
          {submittedValues.map((value, index) => (
            <div key={index}>
              <p>{value.institutes}</p>
              <p>{value.degree}</p>
              <p>
                {value.startDate} - {value.endDate}
              </p>
            </div>
          ))}

          <h1 className="text-4xl font-bold">Skills</h1>
          {submittedSkills.map((value, skillsIndex) => (
            <div key={skillsIndex}>
              <h3>{value.skills}</h3>
            </div>
          ))}

          <h1 className="text-4xl font-bold">Certification</h1>
          {submittedCertificate.map((value, certificateIndex) => (
            <div key={certificateIndex}>
              <h3>{value.certificate}</h3>
            </div>
          ))}
        </div>

        <div className="border-l-[1px] border-black text-center p-5 bg-white">
          <h1 className="text-4xl font-bold">Professional Experience</h1>
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

        <div className="col-start-1 col-end-4 bg-white text-center p-5"></div>
      </div>
    </>
  );
}

export default App;
