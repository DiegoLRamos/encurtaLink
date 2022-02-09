import * as S from './style';
import { FiX, FiClipboard} from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function ModalLink({ closeModal, content }){
  async function copyLink(){
    await navigator.clipboard.writeText(content.link);
    
    toast.success('Link copiado com sucesso', {
      autoClose: 500,
    });
    closeModal();
  }

  return(
    <S.ContainerModal>
      <S.ModalHeader>
        <h2>Link Encurtado!</h2>
        <button onClick={closeModal}>
          <FiX size={28} />
        </button>
      </S.ModalHeader>

      <span>
        {content.long_url}
      </span>

      <button className='btn-copy' onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} />
      </button>
    </S.ContainerModal>
  );
}