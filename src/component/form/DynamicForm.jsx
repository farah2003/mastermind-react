/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import './style.css';
import logo from '../../assets/images/form-logo.png';
import sectionImage from '../../assets/images/section-image.png';
import Question from '../question';
import { useState } from 'react';
const DynamicForm = ({ formData }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const handleNextStep = () => {
    if (formValidation(formData[step], data)) {
      setStep(step + 1);
    }
  };
  const formValidation = (formStep) => {
    return formStep.questions.every((question) => {
      if (question.validations && question.validations.required) {
        const value = data[question.type] && data[question.type]['value'];

        if (!value) {
          setData({
            ...data,
            [question.type]: {
              ...data[question.type],
              error: question.validations.errorMessage,
            },
          });
          return false;
        } else {
          if (
            (question.validations.maxLength &&
              value.length > question.validations.maxLength) ||
            (question.validations.minLength &&
              value.length < question.validations.minLength)
          ) {
            setData({
              ...data,
              [question.type]: {
                ...data[question.type],
                error: question.validations.errorMessage,
              },
            });
            return false;
          }

          return true;
        }
      }
    });
  };

  const handlePreviousStep = () => {
    setStep(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(formData[step], data)) {
    }
    console.log(data);
  };
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='header-form'>
          <div className='section-title-wrapper'>
            <img src={sectionImage} alt='library' className='section-image' />
            <h1 className='section-title'>Literal Arts</h1>
          </div>
          <div className='logo-wrapper'>
            <img src={logo} alt='logo' className='logo' />
            <h1 className='logo-title'>
              Master<span>mind</span>
            </h1>
          </div>
        </div>
        <div className='form-content'>
          {formData[step].questions.map((question) => {
            return (
              <Question question={question} setData={setData} data={data} />
            );
          })}
        </div>
        <div className='form-footer'>
          {step === 0 ? (
            <button className='next-btn' onClick={() => handleNextStep()}>
              Next
            </button>
          ) : (
            <div className='form-footer'>
              <button
                className='cancelBtn'
                onClick={() => handlePreviousStep()}
              >
                Back
              </button>
              <button className='submitBtn' onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
