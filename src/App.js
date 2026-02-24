import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = "Maria";
  return (
    <div className="App">         
      <h1>Testando CSS</h1> 
      <Frase />
      <Frase />
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
