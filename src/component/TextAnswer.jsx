const TextAnswer = ({ question, textAnswerValue, setData }) => {
  return (
    <div>
      <input
        className='textInput'
        type='text'
        name={question.type}
        value={textAnswerValue}
        onChange={(e) => {
          setData({
            [question.type]: e.target.value,
          });
        }}
        placeholder='Write here'
        required={question.validations.required}
        maxLength={question.validations.maxLength}
        minLength={question.validations.minLength}
      />
    </div>
  );
};

export default TextAnswer;
