import './style.css';
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
        (data[name] &&
          data[name]['value'] &&
          data[name]['value'] === option.value) ||
        (data[name] && data[name]['value'] === option.title_en)
          ? 'checked'
          : ''
      }`}
      onClick={() => {
        if (name !== `sub-${question.type}`) {
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
          [name]: {
            value: option.value || option.title_en,
          },
        });
      }}
    >
      <label htmlFor={`${question.type}${index}`}>{option.title_en}</label>
      <input
        className='input'
        type={'radio'}
        name={name}
        value={option.values}
        checked={value === option.value}
        id={`${question.type}${index}`}
      />
    </div>
  );
};

export default AnswersOptions;
