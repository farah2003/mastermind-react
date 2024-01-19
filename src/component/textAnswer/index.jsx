import './style.css';
const TextAnswer = ({ question, textAnswerValue, setData, data }) => {
  return (
    <div>
      <input
        className='textInput'
        type='text'
        name={question.type}
        value={textAnswerValue}
        onChange={(e) => {
          setData({
            ...data,
            [question.type]: {
              value: e.target.value,
            },
          });
        }}
        placeholder='Write here'
      />
    </div>
  );
};

export default TextAnswer;
