import './style.css';
const AnswersOptions = ({
  option,
  index,
  value,
  setSubQuestion,
  setData,
  data,
  name,
}) => {
  const isChecked =
    (data[name]?.value && data[name].value === option.value) ||
    data[name]?.value === option.title_en;

  const handleOptionClick = () => {
    setSubQuestion({
      isSub: option.is_sub,
      question: option.is_sub ? option.sub_question[0] : {},
    });

    setData({
      ...data,
      [name]: {
        value: option.value || option.title_en,
      },
    });
  };

  return (
    <div
      className={`answer-option ${isChecked && 'checked'}`}
      onClick={() => handleOptionClick()}
    >
      <label htmlFor={`${name}${index}`}>{option.title_en}</label>
      <input
        className='input'
        type={'radio'}
        name={name}
        value={option.values}
        checked={value === option.value}
        id={`${name}${index}`}
      />
    </div>
  );
};

export default AnswersOptions;
