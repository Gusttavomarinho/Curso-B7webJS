import { Fragment } from 'react';
// é importado este cara quando preciso criar um children que seja um elemento tipo um img ou p algo deste tipo
import { ReactNode } from 'react';

type Props = {
  url?:string;
  legend?:string;
  children: ReactNode;
}

// componente criando para conceito de Filho ( Children )
// o filho ( children ) é um component que nao abre e fecha na mesma linha
// ele tem conteudo de fato dentro 


// criado tambem para mostrar o Fragment 

// as coisas ficam dentro de uma div pois por padrao
// precisa retorna apenas um elemento 
//  caso precise retorna mais de um elemento tipo um p ou img solto precisa usar o conceito de fragment


export const Photo = ({url,legend,children}: Props) => {
  return(
    // 2 exemplos de como usar o fragment 
    // <Fragment>
    //   <img src={url} />
    //   <p>{legend}</p>
    // </Fragment>
    <>
      {/* <img src={url} /> */}
      {children}
      <p>{legend}</p>
    </>
  );
}