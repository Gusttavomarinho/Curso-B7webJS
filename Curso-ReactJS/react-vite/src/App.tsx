import { Header } from "./components/Header";
import { Photo } from "./components/Photo";


const App = () => {
  // return React.createElement('div',null,'Meu nome é Gustavo');

  let name: string = "Gustavo";
  let n1: number = 10;
  let n2: number = 3;

  let link: string = "https://gusttavodev.com";

  function somar(n1: number,n2: number): number{
    return n1+n2
  }

  return(
    <div>
      {/* treinando props */}
      <Header title="Este é um exemplo" version="1.0.0"/>
      <Header title="Outro titulo" />
      <div>Meu nome é {name} , ihuu</div>
      <p>Soma: {somar(n1,n2)}</p>
      Link para o site:<br/>
      <a href={link}>Clique aqui para acessar</a>
      {/* // conceito de Filho ( Children) */}
      <br/><br/><hr/>
      <Photo legend="Google">
        <img src="http://www.google.com.br/google.jpg" alt="Google Logo" />
      </Photo>
    </div>
  )
}


export default App;