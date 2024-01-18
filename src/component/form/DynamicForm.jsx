/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import './style.css';
import logo from '../../assets/images/form-logo.png';
import sectionImage from '../../assets/images/section-image.png';
import Question from '../question';
function DynamicForm({ formData }) {
  console.log(formData);
  return (
    <div className='form-container'>
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
        {formData.map((page, pageIndex) => (
          <div key={pageIndex}>
            {page.questions.map((question, questionIndex) => {
              console.log(question);

              {
                switch (question.type) {
                  case 2:
                  case 1:
                    return <Question question={question} />;
                }
              }
            })}
          </div>
        ))}
      </div>
      <div className='form-footer'>
        <button className='next-btn'>Next</button>
      </div>
    </div>
  );
}

export default DynamicForm;
