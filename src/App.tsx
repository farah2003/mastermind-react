import './App.css';
import { DynamicForm } from './component';
import formData from './api.json'
import { SubQuestionProvider } from './context/subQuestionContext';

function App() {
  return (
    <div className="App">
       <SubQuestionProvider>
       <DynamicForm formData={formData}/>
    </SubQuestionProvider>
   
    </div>
  );
}

export default App;
