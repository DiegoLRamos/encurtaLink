import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 10%;
  font-weight: bold;

  display: flex;

  a{
    text-decoration: none;
    color: ${ ({theme}) => theme.bodyFont };
  }

  .social{
    display: flex;
    align-items: center;

    margin-right: 14px;
  }

  .menu-item{
    border-radius: 4px;
    margin-right: 14px;
    padding: 12px 24px;

    background-color: ${ ({theme}) => theme.bgcButton };
    color: ${ ({theme}) => theme.fontButton };
  }

`;
