import QuestionTypes from '../questionTypes';
import './style.css';

const Question = ({ question, setData, data, isSubQuestion }) => {
  return (
    <div>
      <div className='question-wrapper'>
        <h1 className={`question-title  ${isSubQuestion && 'subQuestion'}`}>
          {question.title_en}
        </h1>
        <QuestionTypes
          question={question}
          setData={setData}
          data={data}
          isSubQuestion={isSubQuestion}
        />
        {data[question.type]?.error && (
          <p className='errorMessage'>{data[question.type].error}</p>
        )}
      </div>
    </div>
  );
};

export default Question;
