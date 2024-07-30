import './style.css';
import { useState } from 'react';
import api from './services/Api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

   async function clicar(){
    //01001000/json/
    if(input===""){
      alert("Ops! não pode ficar vazio")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch{
      alert("erro, cep não encontrado");
    }
  }
  return (
    <div className="Principal">
      <h1 className='titulo'>Pesquisar CEP</h1>
<div>
      <input className='entrada'
      type='text'
      placeholder='digite o cep ex:01001000'
      value={input}
      onChange={(e)=>setInput(e.target.value)}/>
      <button className='pesquisar'
      onClick={clicar}>
        Cep
      </button>
      </div>
      <main className='main'>
        <h2>CEP:{cep.cep}</h2>
        <spa>Rua:{cep.logradouro}</spa>
        <spa>Bairro:{cep.bairro}</spa>
        <spa>Cidade:{cep.localidade}</spa>
        <spa>Estado:{cep.uf}</spa>
      </main>
    </div>
  );
}

export default App;
