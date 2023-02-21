//import logo from './logo.svg';
import './App.css';
import ComponentDidCatch from './lifecycleMethods/ComponentDidCatch';
//import ComponentDidUpdate from './lifecycleMethods/ComponentDidUpdate';
//import ComponentWillUnmount from './lifecycleMethods/ComponentWillUnmount';
//import ComponentDidMount from './lifecycleMethods/ComponentDidMount';
//import ComponentShouldUpdate from './lifecycleMethods/ComponentShouldUpdate';

function App() {
  return (
    <div className="App">
     {/* <ComponentDidMount /> */}
     {/*<ComponentShouldUpdate />*/}
     {/*<ComponentDidUpdate />*/}
     {/*<ComponentWillUnmount />*/}
     <ComponentDidCatch />
    </div>
  );
}

export default App;
