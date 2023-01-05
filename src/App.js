
import './App.css';
import SimpleCounterComponent from './components/SimpleFunction';
import PureCounterComponent from './components/PureFunction';

function App() {
  return (
    <div className="App">
     <SimpleCounterComponent/>
     <PureCounterComponent/>
    </div>
  );
}

export default App;
