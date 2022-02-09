import styled, { keyframes } from 'styled-components';

const slideY = keyframes`
  from{
    transform: translateY(90px);
  }

  to{
    transform: translateY(0px);
  }
`;

export const ContainerModal = styled.div`
  position: absolute;
  bottom: 120px;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background-color: ${ ({theme}) => theme.bgcModal };

  padding: 14px;
  width: 700px;

  animation: ${slideY} 1s;

  span{
    margin: 14px 0;
    color: #A7A7A7;
  }

  .btn-copy{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 14px;
    height: 38px;

    border: 0;
    border-radius: 4px;

    background-color: ${ ({theme}) => theme.fontButton };
    color: ${ ({theme}) => theme.bodyFont };
  }

  @media(max-width: 735px){
    width: 90%;
  }

`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    color: ${ ({theme}) => theme.fontButton };
  }

  button{
    border: 0;
    background: transparent;
    border: transparent;
    color: ${ ({theme}) => theme.fontButton };
  }
`;