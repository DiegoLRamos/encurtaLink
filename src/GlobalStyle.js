import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    background-color: ${ ({theme}) => theme.bgcBody };
    color: ${ ({theme}) => theme.bodyFont };
  }

  button{
    cursor: pointer;
  }
`;

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;  
`;

export const ButtonTheme = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  border: 0;
  background: transparent;

  border-radius: 4px;
  padding: 2px 2px;

  color: ${ ({theme}) => theme.bodyFont };
`;
