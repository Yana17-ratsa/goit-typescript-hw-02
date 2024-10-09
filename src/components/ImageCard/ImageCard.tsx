import { FC } from "react"
import { Image } from "../App/App"

interface ImageCardProps {
    galleryItemData: Image,
    onOpenModal: (imgUrl: string, alt: string) => void, 
}


const ImageCard : FC<ImageCardProps>= ({ galleryItemData, onOpenModal }) => {
    return (
        <div>
             <img  onClick={() =>
          onOpenModal(galleryItemData.urls.regular, galleryItemData.description)
        }src={galleryItemData.urls.small} alt={galleryItemData.description} />
        </div>
    )
}

export default ImageCard