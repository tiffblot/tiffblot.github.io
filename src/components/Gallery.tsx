import "./Gallery.css";

import React, { useEffect, useState } from "react";
import Box from "ui-box";

import { getGallery } from "../api";

interface FetchedImage {
  link: string;
  description: string;
}

interface GalleryImage {
  src: string;
  description: string;
  tags: string[];
}

export const Gallery = ({
  filter,
  download = false,
}: {
  filter?: string;
  download: boolean;
}) => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  const loadImages = async () => {
    try {
      const result = await getGallery();
      const resultImages: GalleryImage[] = result.data.images.map(
        (img: FetchedImage) => ({
          src: img.link,
          description:
            img.description &&
            img.description.replace(/(?:^|\W)#(\w+)(?!\w)/g, ""),
          tags:
            img.description
              ?.match(/(?:^|\W)#(\w+)(?!\w)/g)
              ?.map((tag) => tag.slice(tag.indexOf("#") + 1)) || [],
        }),
      );
      return resultImages;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const updateImages = async () => {
      const resultImages = await loadImages();
      const filteredImages = resultImages?.filter(
        (img) => img.tags.indexOf(filter || "") > -1,
      );
      setImages(filteredImages || []);
    };
    updateImages();
  }, []);

  return (
    <>
      <Box className="App-page Gallery-container">
        <Box>
          {images.map((img, i) => {
            return (
              <Box key={i} className="Gallery-single">
                <Box
                  is="img"
                  className="Gallery-image"
                  src={img.src}
                  alt={img.description}
                />
                <Box className="Gallery-description">
                  {img.description}
                  {download && (
                    <Box
                      is="a"
                      marginLeft=".4em"
                      href={img.src}
                      download={
                        img.description
                          ? img.description.split(" ")[0] + ".png"
                          : "tiffblot.png"
                      }
                      title={img.description}
                    >
                      [download]
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
