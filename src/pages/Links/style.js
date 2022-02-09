import styled from 'styled-components';

export const ContainerLinks = styled.div`
  max-width: 1120px;
  margin: 32px auto 0 auto;

  @media (max-width: 715px){
    width: 90%;
  }
`;

export const LinksHeader = styled.div`
  display: flex;
  flex-direction: row;

  a{
    color: ${ ({theme}) => theme.bodyFont };
  }

  svg{
    margin-right: 14px;
  }

  @media (max-width: 715px){
    h1{
      font-size: 2rem;
    }
  }

`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 700px;
  margin-top: 8px;

  h2{
    width: 100%;
    text-align: center;
    margin-top: 28px;
  }

  &:last-child{
    margin-bottom: 18px;
  }

  .link{
    display: flex;
    align-items: center;

    width: 100%;
    min-width: 80%;
    height: 46px;
    margin-right: 14px;
    padding: 0 14px;
    font-size: 18px;
    
    border: 0;
    border-radius: 4px;

    border: 1px solid ${ ({theme}) => theme.bgcBody === '#FFF' ? '#172742' : 'transparent' };
    background-color: ${ ({theme}) => theme.bgcInput };
    color: ${ ({theme}) => theme.placeholder };

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg{
      margin-right: 14px;
    }
  }

  .link-delete{
    border: 0;
    background: transparent;
  }

  @media (max-width: 715px){
    width: 100%;

    .link{
      width: 100%;
    }
  }
`;
