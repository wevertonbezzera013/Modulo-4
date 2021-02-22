import React from 'react';
import ListaDeNotas from './components/ListaDeNotas.JSX'
function App() {
  return (

    <section>
      <form>
        <input type="text" placeholder="Digite seu nome completo"></input>
        <input type="text" placeholder="Digite seu E-mail"></input>
        <textarea placeholder="Digite seu texto"></textarea>
        <button>Enviar</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
