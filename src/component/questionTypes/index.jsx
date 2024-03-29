import './style.css';
import AnswersOptions from '../answersOptions';
import TextAnswer from '../textAnswer';
import Question from '../question';
import { useSubQuestion } from '../../context/subQuestionContext';

const QuestionTypes = ({ question, setData, data, isSubQuestion }) => {
  const { subQuestion } = useSubQuestion();
  // eslint-disable-next-line default-case
  switch (question.type) {
    case 1:
    case 4:
      return (
        <div className='answers'>
          {isSubQuestion
            ? question.option.map((option, index) => {
                return (
                  <AnswersOptions
                    option={option}
                    index={index}
                    setData={setData}
                    data={data}
                    name={`sub-${question.type}`}
                  />
                );
              })
            : question.options.map((option, index) => {
                return (
                  <>
                    <AnswersOptions
                      option={option}
                      index={index}
                      setData={setData}
                      data={data}
                      name={question.type}
                    />
                  </>
                );
              })}
        </div>
      );

    case 3:
      return (
        <div className='answers'>
          <TextAnswer
            question={question}
            setData={setData}
            name={question.type}
            data={data}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <div className='answers'>
            {question.options.map((option, index) => {
              return (
                <AnswersOptions
                  option={option}
                  index={index}
                  setData={setData}
                  data={data}
                  name={question.type}
                />
              );
            })}
          </div>
          <div>
            {data[question.type]?.value === 'yes' && (
              <Question
                isSubQuestion={true}
                question={subQuestion.question}
                setData={setData}
                data={data}
              />
            )}
          </div>
        </div>
      );
  }
};

export default QuestionTypes;
