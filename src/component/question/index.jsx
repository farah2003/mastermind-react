import QuestionTypes from '../questionTypes';
import './style.css';

const Question = ({ question, isSub, setData, data }) => {
  return (
    <div>
      <div className='question-wrapper'>
        <h1 className={`question-title ${isSub && 'subQuestion'}`}>
          {question.title_en}
        </h1>
        <QuestionTypes question={question} setData={setData} data={data} />
        {data[question.type] && data[question.type]['error'] && (
          <p className='errorMessage'>{data[question.type]['error']}</p>
        )}
      </div>
    </div>
  );
};

export default Question;
