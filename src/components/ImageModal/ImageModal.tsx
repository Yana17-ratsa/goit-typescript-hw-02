import { FC } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  onOpen: boolean,
  onClose: ()  => void,
  style: object,
  modalImageUrl: string,
  modalImageAlt: string,
}

 const ImageModal : FC<ImageModalProps> = ({
  onOpen,
  onClose,
  style,
  modalImageUrl,
  modalImageAlt
}) => {
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onClose}
      style={style}
      contentLabel="Modal image"
    >
      <img src={modalImageUrl} alt={modalImageAlt} />
    </Modal>
  );
}

export default ImageModal