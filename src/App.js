
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List';
function App() {
  const name = 'Maria';
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase></Frase>
      <Frase></Frase>
    <SayMyName nome="Moisés"></SayMyName>
    <SayMyName nome="João"></SayMyName>
    <SayMyName nome={name}></SayMyName>
    <Pessoa nome="Rodrigo" idade="29" profissao="programador" foto= "https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_640.png"></Pessoa>
    <List></List>
    </div>
  );
}

export default App;
