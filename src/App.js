import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = "Maria";
  return (
    <div className="App">          
      <SayMyName name="João" />
      <SayMyName name="Jose" />
      <SayMyName name={name} />
      <Pessoa 
        photo="https://via.placeholder.com/150"
        name="Maria"
        age="30"
        job="Desenvolvedora"
      />
    </div>
  );
}

export default App;
