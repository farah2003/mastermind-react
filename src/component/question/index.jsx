import { useState } from 'react';

const Quest = ({ option, value, question, setValue, setSubQuestion }) => {
  return (
    <div>
      <input
        className={`yes-no-answer ${
          (value === option.value || value === option.title_en) && 'checked'
        }`}
        type='button'
        name={question.type}
        value={option.title_en}
        onClick={() => {
          setValue(option.value || option.title_en);
          if (option.is_sub) {
            console.log(option.sub_question[0]);
            setSubQuestion({
              is_sub: true,
              question: option.sub_question[0],
            });
          }
        }}
      />
    </div>
  );
};

const Question = ({ question, isSub }) => {
  const [value, setValue] = useState('');
  const [subQuestion, setSubQuestion] = useState({
    is_sub: false,
    question: {},
  });

  return (
    <div>
      {!isSub ? (
        <div className='question-wrapper'>
          <h1 className={`question-title ${isSub && 'subQuestion'}`}>
            {question.title_en}
          </h1>
          <div className='answers'>
            {question.options.map((option, optionIndex) => {
              return (
                <Quest
                  option={option}
                  isSub={subQuestion.is_sub}
                  value={value}
                  setValue={setValue}
                  setSubQuestion={setSubQuestion}
                  question={question}
                />
              );
            })}
          </div>
          {value === 'yes' && subQuestion.is_sub && (
            <Question
              question={subQuestion.question}
              isSub={subQuestion.is_sub}
            />
          )}
        </div>
      ) : (
        <div className='question-wrapper'>
          <h1 className={`question-title ${isSub && 'subQuestion'}`}>
            {question.title_en}
          </h1>
          <div className='answers'>
            {question.option.map((option, optionIndex) => {
              return (
                <Quest
                  option={option}
                  isSub={subQuestion.is_sub}
                  value={value}
                  setValue={setValue}
                  setSubQuestion={setSubQuestion}
                  question={question}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
