import React, { useEffect, useState } from "react";
import Box from "ui-box";

import { getGallery } from "../api";

import "./Gallery.css";

export const Gallery = ({ filter }) => {
  const [images, setImages] = useState([]);

  const loadImages = async () => {
    try {
      const result = await getGallery();
      const resultImages = result.data.images.map((img) => ({
        src: img.link,
        description:
          img.description &&
          img.description.replace(/(?:^|\W)#(\w+)(?!\w)/g, ""),
        tags: img.description
          ? img.description
              .match(/(?:^|\W)#(\w+)(?!\w)/g)
              .map((tag) => tag.slice(tag.indexOf("#") + 1))
          : [],
      }));
      console.log(resultImages);
      return resultImages;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const updateImages = async () => {
      const resultImages = await loadImages();
      const filteredImages = resultImages.filter(
        (img) => img.tags.indexOf(filter) > -1,
      );
      setImages(filteredImages);
    };
    updateImages();
  }, []);

  return (
    <>
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
    </>
  );
};
