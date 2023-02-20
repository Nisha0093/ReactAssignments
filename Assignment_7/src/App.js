//import logo from './logo.svg';
import './App.css';
import FunctionalComponents from './components/FunctionalComponenets'
import ClassComponents from './components/ClassComponents';
import StateExample from './state/StateExample';
function App() {
  return (
    <div className="App">
     <FunctionalComponents name='example'/>
     <ClassComponents name='example'/>
     <StateExample />
    </div>
  );
}

export default App;
