
const App = () => {
  // return React.createElement('div',null,'Meu nome é Gustavo');

  let name: string = "Gustavo";
  let n1: number = 10;
  let n2: number = 3;

  function somar(n1: number,n2: number): number{
    return n1+n2
  }

  return(
    // <div>Meu nome é {name} , ihuu</div>
    <p>Soma: {somar(n1,n2)}</p>
  )
}


export default App;