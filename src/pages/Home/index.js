import { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './style';
import { FiLink } from 'react-icons/fi';
import Logo from '../../assets/logo.png';

import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){

    if(link === ''){
      toast.info('Por favor, preencha o campo!');
      return;
    }

    try{
      const response = await api.post('shorten', {
        long_url: link
      });

      setData(response.data);
      
      saveLink('@encurtaLink', response.data);

      setShowModal(true);
      setLink('');

    } catch(error){
      if(error.response.status === 400){
        toast.error('Insira uma URL válida!');
        return;
      }
    }
  }

  return (
    <S.ContainerHome>
      <S.AreaLogo>
        <img src={Logo} alt='Sujeito Link Logo' />
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurtá-lo 👇</span>
      </S.AreaLogo>

      <S.AreaInput>
        <div>
          <FiLink size={24} />
          <input 
            placeholder='Cole o link aqui...' 
            value={link}
            onChange={(event) => setLink(event.target.value)} 
          />
        </div>

        <button onClick={handleShortLink}>
          Encurtar Link
        </button>
      </S.AreaInput>

      <Menu />

      {showModal && (
        <ModalLink closeModal={() => setShowModal(false)} content={data} />
      )}

    </S.ContainerHome>
  );
}
