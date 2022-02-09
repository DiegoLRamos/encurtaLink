import { Link } from 'react-router-dom';
import * as S from './style';

import Notfound from '../../assets/notfound.png';

export default function Error(){
  return(
    <S.ContainerError>
      <img src={Notfound} alt='Página não encontrada' title='Página não encontrada' />
      <h1>Página não encontrada!</h1>

      <Link to='/'>
        Voltar para home
      </Link>
    </S.ContainerError>
  );
}