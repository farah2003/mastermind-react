import './style.css';
const TextAnswer = ({ question, setData, data }) => {
  return (
    <div>
      <input
        className='textInput'
        type='text'
        name={question.type}
        value={data[question.type]?.value}
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
