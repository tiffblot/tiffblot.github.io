import "./Gallery.css";

import React, { useCallback, useEffect, useState } from "react";
import Box from "ui-box";

const CLIENT_ID = "fad804cc7c9498e";

function useGallery() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch("https://api.imgur.com/3/album/Y4cGbYY", {
      mode: "cors",
      headers: {
        Authorization: "Client-ID " + CLIENT_ID,
      },
    })
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  return value;
}

export const Gallery = ({ filter, download = false }) => {
  const [images, setImages] = useState([]);
  const [columns, setColumns] = useState([0, 1, 2]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const gallery = useGallery();
  const loadImages = useCallback(async () => {
    try {
      const result = gallery;
      if (!result) return;
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
      return resultImages;
    } catch (e) {
      console.error(e);
    }
  }, [gallery]);

  const calculateColumns = () => {
    if (screenWidth < 600) {
      if (columns.length !== 1) setColumns([0]);
    } else if (screenWidth < 900) {
      if (columns.length !== 2) setColumns([0, 1]);
    } else {
      if (columns.length !== 3) setColumns([0, 1, 2]);
    }
  };

  useEffect(() => {
    const updateImages = async () => {
      const resultImages = await loadImages();
      const filteredImages =
        resultImages?.filter((img) => img.tags.indexOf(filter) > -1) || [];
      setImages(filteredImages);
    };

    if (!gallery) return;
    updateImages();

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, [gallery]);

  useEffect(() => {
    calculateColumns();
  }, [screenWidth]);

  return (
    <>
      <Box className="App-page Gallery-container">
        {columns.map((col) => {
          return (
            <Box key={"col" + col}>
              {images
                .filter((_, i) => i % columns.length === col)
                .map((img, i) => {
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
          );
        })}
      </Box>
    </>
  );
};
