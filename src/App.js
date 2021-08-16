import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// importando useState para armazenar o array do json em uma
// variavel local

// importando useEffect para fazer uma requisição com fetch
// na estrutura json

function App() {
  const [items, setItems] = useState([]);
  // para representar uma coleção de dados na variavel 'items' use-se []
  useEffect(()=>{
    // usando fetch para englobar o arquivo json dentro da variavel local 'items'
    fetch("http://localhost:3000/sistema_solar").then(response => response.json())
    .then((json) => {setItems(json)})
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
      {
        items.map(item => (
          <p>{item.nome}</p>
          // aqui nos temos uma estrutura que repete o componente 'p' pelo
          // comprimento do objeto json, ou seja: se temos 9 objetos no arquivo
          // sistema_solar.json, a tag 'p' repetira 9 vezes

          // e para finalizar colocamos {item.nome} na tag 'p', que significa
          // que para cada repetição seja colocado o valor da linha escolhida, no caso 'nome'
        ))
      }

      </header>
    </div>
  );
}

export default App;
