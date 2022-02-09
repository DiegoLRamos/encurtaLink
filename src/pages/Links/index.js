import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { getLinksSave, deleteLink } from '../../services/storeLinks';

import ModalLink from '../../components/ModalLink';

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink');

      if(result.length === 0){
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <S.ContainerLinks>
      <S.LinksHeader>
        <Link to='/'>
          <FiArrowLeft size={38} />
        </Link>
        <h1>Meus Links</h1>
      </S.LinksHeader>

      { emptyList && (
        <S.LinkItem>
          <h2>Você não tem links salvos!</h2>
        </S.LinkItem>
      )}

      { myLinks.map(link => (
        <S.LinkItem key={link.id}>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} />
           {link.long_url}
          </button>

          <button className='link-delete' onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color='#FF5454' />
          </button>
        </S.LinkItem>
      ))}

      { showModal && (
        <ModalLink closeModal={() => setShowModal(false)} content={data} />
      )}
    </S.ContainerLinks>
  );
}

