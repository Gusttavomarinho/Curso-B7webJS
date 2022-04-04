import {useState} from 'react';


const App = () => {

  const [numero,setNumero] = useState(0);
  const [name,setName] = useState('Bonieky');

  const handleButtonClick = () => {
    // alert('O botão foi clicado!');
    // numero++;
    setName('Gustavo');
  }

  return(
    <div>
      O numero é: {numero}
      <br/>
      Meu nome é {name}
      <br/>
      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  )
}


export default App;