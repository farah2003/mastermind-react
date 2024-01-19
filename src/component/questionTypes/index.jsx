import { useState } from 'react';
import './style.css';
import AnswersOptions from '../answersOptions';
import TextAnswer from '../textAnswer';
const QuestionTypes = ({ question, setData, data }) => {
  const [subQuestion, setSubQuestion] = useState({
    isSub: false,
    question: {},
  });
  // eslint-disable-next-line default-case
  switch (question.type) {
    case 1:
    case 4:
      return (
        <div className='answers'>
          {question.options.map((option, index) => {
            return (
              <>
                <AnswersOptions
                  option={option}
                  question={question}
                  index={index}
                  setSubQuestion={setSubQuestion}
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
                  question={question}
                  index={index}
                  setSubQuestion={setSubQuestion}
                  subQuestion={subQuestion}
                  setData={setData}
                  data={data}
                  name={question.type}
                />
              );
            })}
          </div>
          <div>
            {subQuestion.isSub && (
              <div>
                <div className='question-wrapper'>
                  <h1 className={`question-title subQuestion`}>
                    {subQuestion.question.title_en}
                  </h1>
                </div>
                <div className='answers'>
                  {subQuestion.question.option.map((option, index) => {
                    return (
                      <AnswersOptions
                        option={option}
                        question={subQuestion.question}
                        index={index}
                        setSubQuestion={setSubQuestion}
                        setData={setData}
                        data={data}
                        name={`sub-${subQuestion.question.type}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      );
  }
};

export default QuestionTypes;
