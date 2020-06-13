import React, { useEffect, useState } from "react";
import Box from "ui-box";

import { getGallery } from "../api";

import "./Gallery.css";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  const loadImages = async () => {
    try {
      const result = await getGallery();
      const resultImages = result.data.images.map((img) => ({
        src: img.link,
        description: img.description,
      }));
      setImages(resultImages);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <Box className="App-page Gallery-container">
      {images.map((img, i) => (
        <Box key={i} className="Gallery-single">
          <Box
            is="img"
            className="Gallery-image"
            src={img.src}
            alt={img.description}
          />
          <Box className="Gallery-description">{img.description}</Box>
        </Box>
      ))}
    </Box>
  );
};
