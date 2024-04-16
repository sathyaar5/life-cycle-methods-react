import './App.css';
import LifeCycleComponent from './LifeCycleComponent';
import ChildLifeCycleComponent from './ChildLifeCycleComponent';

function App() {
  return (
    <div className="App">
      <h1>Life Cycle Methods</h1>
      <LifeCycleComponent />
      <ChildLifeCycleComponent />
    </div>
  );
}

export default App;