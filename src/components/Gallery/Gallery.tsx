import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { GalleryWrapper, SearchBar, SearchButton, InputBar, Container } from './Gallery.styled';
import './OverrideGalleryStyle.css';

interface GalleryProps { }

interface PixabayImage {
   id: number;
   webformatURL: string;
   previewURL: string;
}

export const Gallery: FC<GalleryProps> = () => {
   const [images, setImages] = useState<PixabayImage[]>([]);
   const [search, setSearch] = useState<string>('cat');

   useEffect(() => {
      fetchImages();
   }, []);

   const fetchImages = async () => {
      const key = ''; // Pixabay API key
      const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&orientation=horizontal`);
      setImages(response.data.hits.slice(0, 9));
   };

   const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
   };

   const imageItems = images.map(image => ({
      original: image.webformatURL,
      thumbnail: image.previewURL,
   }));

   return (
      <GalleryWrapper>
         <Container>
            <ImageGallery items={imageItems}/>
            <SearchBar>
               <InputBar type="text" value={search} onChange={searchChange}/>
               <SearchButton onClick={fetchImages}>Search</SearchButton>
            </SearchBar>
         </Container>
      </GalleryWrapper>
   );
};

export default Gallery;
