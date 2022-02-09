import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  10%, 90%{
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80%{
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70%{
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60%{
    transform: translate3d(4px, 0, 0);
  }

`;


export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  img{
    max-width: 300px;
    margin: 24px 0;
    animation: ${shake} 1s;
  }

  a{
    text-decoration: none;
    font-weight: bold;
    padding: 12px 18px;
    margin: 14px 0;
    border-radius: 4px;

    background-color: ${ ({theme}) => theme.bgcButton };
    color: ${ ({theme}) => theme.fontButton };
  }
`;