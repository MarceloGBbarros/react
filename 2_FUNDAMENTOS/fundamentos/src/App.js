//components
import FirstComponent from "./components/FristComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
//styles
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Fundamentos react</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events></Events>

    </div>
  );
}

export default App;
