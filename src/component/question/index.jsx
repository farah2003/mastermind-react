import { useState } from 'react';
import TextAnswer from '../TextAnswer';
const AnswersOptions = ({
  option,
  question,
  index,
  value,
  setSubQuestion,
  setData,
  data,
  name,
}) => {
  return (
    <div
      className={`yes-no-answer ${
        (data[name] && data[name] === option.value) ||
        data[name] === option.title_en
          ? 'checked'
          : ''
      }`}
      onClick={() => {
        if (name !== '2_sub') {
          setSubQuestion({
            isSub: option.is_sub,
          });
        }
        if (option.is_sub) {
          setSubQuestion({
            isSub: option.is_sub,
            question: option.sub_question[0],
          });
        }

        setData({
          ...data,
          [name]: option.value || option.title_en,
        });
        console.log(data);
      }}
    >
      <label htmlFor={`${question.type}${index}`}>{option.title_en}</label>
      <input
        className='input'
        type={'radio'}
        required={question.validations.required}
        name={name}
        value={option.values}
        checked={value === option.value}
        id={`${question.type}${index}`}
      />
    </div>
  );
};

const AnswerType = ({ question, setData, data }) => {
  const [subQuestion, setSubQuestion] = useState({
    isSub: false,
    question: {},
  });
  // eslint-disable-next-line default-case
  switch (question.type) {
    case 1:
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
                        question={question}
                        index={index}
                        setSubQuestion={setSubQuestion}
                        setData={setData}
                        data={data}
                        name={'2_sub'}
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
const Question = ({ question, isSub, setData, data }) => {
  return (
    <div>
      <div className='question-wrapper'>
        <h1 className={`question-title ${isSub && 'subQuestion'}`}>
          {question.title_en}
        </h1>
        <AnswerType question={question} setData={setData} data={data} />

        {/* <div className='answers'>
          {isSub ? (
             {
          switch (question.type) {
              case 4:
                return (
                  <div>
                    <TextAnswer
                      question={question}
                      setTextAnswerValue={setTextAnswerValue}
                      textAnswerValue={textAnswerValue}
                    />
                    ;
                  </div>
                );
              default:
                return <p>invalid section</p>;
            }
        }
        question.option.map((option, index) => {
              return (
                <>
                  <AnswersOptions
                    option={option}
                    setValue={setValue}
                    isSub={subQuestion.is_sub}
                    value={value}
                    question={question}
                    index={index}
                  />
                  <h1>fdxhgh</h1>
                </>
              );
            })
          ) : !question.options.length ? (
            <TextAnswer
              question={question}
              setTextAnswerValue={setTextAnswerValue}
              textAnswerValue={textAnswerValue}
            />
          ) : (
            
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Question;
