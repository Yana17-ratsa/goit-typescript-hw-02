import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import clsx from 'clsx';
// import css from './ImageGallery.module.css';
import { Image } from '../App/App';

interface ImageGalleryProps {
  gallery: Image[],
  onOpenModal: (imgUrl: string, alt: string) => void,
}
const ImageGallery : FC<ImageGalleryProps> = ({ gallery, onOpenModal }) => {
  return (
    <div 
    // className={css.container}
    >
      <ul 
      // lassName={css.ul}
      >
        {gallery.map(galleryItem => (
          <li key={galleryItem.id} 
          // className={clsx(css.galleryItem)}
          >
            <div>
              <ImageCard
                galleryItemData={galleryItem}
                onOpenModal={onOpenModal}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
