import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './Componentes/Button';



function AppTest() {
  
  const [useEffectCounter, SetuseEffectCounter] = useState(0);
  const [logado, Setlogado] = useState(false);

  useEffect(()=>{
    console.log("O UseEffect foi chamado");
    SetuseEffectCounter(useEffectCounter + 1);

  },[logado]);

  const Logar = () =>{
    Setlogado(true);
  }
  const Deslogar = () =>{
    Setlogado(false);
  }

  return (
    <div className="App">
      <div>
        <h1>O UseEffect foi chamado {useEffectCounter} vezes</h1>
        <Button tarefa={Logar} className = "button red" > Logar </Button>
        <Button tarefa={Deslogar} className = "button purple" > Deslogar </Button>
      </div>

    </div>
  );
}

export default AppTest;
