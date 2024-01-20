import { useSubQuestion } from '../../context/subQuestionContext';
import './style.css';
const AnswersOptions = ({
  option,
  index,
  value,

  setData,
  data,
  name,
}) => {
  const { setSubQuestion } = useSubQuestion();
  const isChecked =
    (data[name]?.value && data[name].value === option.value) ||
    data[name]?.value === option.title_en;

  const handleOptionClick = () => {
    if (option.is_sub) {
      setSubQuestion({
        question: option.sub_question[0],
      });
    }

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
