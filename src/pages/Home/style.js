import styled, { keyframes } from 'styled-components'

const upDown = keyframes`
  0%{
    transform: translateY(0px);
  }

  100%{
    transform: translateY(10px);
  }
`;


export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

`;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 2rem;
  }

  span{
    margin-top: 14px;
    margin-bottom: 34px;
    font-size: 1.20rem;
    animation: ${upDown} .5s infinite alternate ;
  }

  @media (max-width: 555px){
    img{
      width: 95px;
    }

    span{
      font-size: 1rem;
    }
  }
`;

const slideY = keyframes`
  from{
    transform: translateY(90px);
  }

  to{
    transform: translateY(0px);
  }
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 540px;

  animation: ${slideY} 1.5s;

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    background-color: ${ ({theme}) => theme.bgcInput };

    height: 46px;
    width: 100%;

    border: 1px solid ${ ({theme}) => theme.bgcBody === '#FFF' ? '#172742' : 'transparent' };

    input{
      height: 46px;
      width: 100%;

      font-size: 1.20rem;
      background: transparent;
      color: ${ ({theme}) => theme.placeholder };

      border: 0;
      border-radius: 4px;
      outline: none;

      &::placeholder{
        color: ${ ({theme}) => theme.placeholder };
      }
    }
  }

  svg{
    margin: 0 8px;
  }

  button{
    height: 46px;
    width: 100%;
    margin-top: 8px;

    border: 0;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: bold;
    background-color: ${ ({theme}) => theme.bgcButton };
    color: ${ ({theme}) => theme.fontButton };

    transition: transform 0.7s;

    &:hover{
      transform: scale(1.05);
    }
  }

  @media (max-width: 555px){
    width: 85%;
  }
`;
