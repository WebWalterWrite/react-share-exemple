import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import color from '../src/utils/style/colors';
const { js } = color;
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body, html{
  height: 100%;
  width: 100%;
}
header{
  background-color:#282c34;
  display: flex;
  align-items: center;
  color: ${js};
  svg{ 
    width: 100px;
  }
  & :nth-child(3){
    margin-left: 10px;
    width:70px;
  }
}
main{
  display: flex;
  justify-content: center;
  padding-top: 10%;
}
}
`;
render(
  <>
    <GlobalStyle />
    <App />
  </>
  ,
  document.getElementById('root')
);


