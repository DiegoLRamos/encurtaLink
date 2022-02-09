import { Link } from 'react-router-dom';
import * as S from './style';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Menu(){
  return(
    <S.ContainerMenu>
      <a className='social' href='https://github.com/diegolramos' target='_blank'>
        <BsGithub size={24} />
      </a>

      <a className='social' href='https://www.linkedin.com/in/diego-lima-ramos/' target='_blank'>
        <BsLinkedin size={24} />
      </a>

      <Link className='menu-item' to='/links'>
        Meus links
      </Link>
    </S.ContainerMenu>
  );
}