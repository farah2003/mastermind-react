import { createContext, useContext, useState } from 'react';

const SubQuestionContext = createContext();

export const SubQuestionProvider = ({ children }) => {
  const [subQuestion, setSubQuestion] = useState({
    question: {},
  });

  return (
    <SubQuestionContext.Provider value={{ subQuestion, setSubQuestion }}>
      {children}
    </SubQuestionContext.Provider>
  );
};

export const useSubQuestion = () => {
  return useContext(SubQuestionContext);
};
