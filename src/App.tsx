import './App.css';
import { DynamicForm } from './component';
import formData from './api.json'

function App() {
  return (
    <div className="App">
     <DynamicForm formData={formData}/>
    </div>
  );
}

export default App;
