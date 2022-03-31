import { Header } from "./components/Header";


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
      <Header/>
      <div>Meu nome é {name} , ihuu</div>
      <p>Soma: {somar(n1,n2)}</p>
      Link para o site:<br/>
      <a href={link}>Clique aqui para acessar</a>
    </div>
  )
}


export default App;