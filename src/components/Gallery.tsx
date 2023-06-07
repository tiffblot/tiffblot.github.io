import "./Gallery.css";

import React, { useEffect, useMemo, useState } from "react";
import Box from "ui-box";

interface FetchedImage {
  link: string;
  description: string;
}

interface GalleryImage {
  src: string;
  description: string;
  tags: string[];
}

const CLIENT_ID = "fad804cc7c9498e";

export const Gallery = ({
  filter,
  download = false,
}: {
  filter?: string;
  download?: boolean;
}) => {
  const screenWidth = useScreenWidth();
  const images = useGallery();
  const filteredImages =
    images?.filter((img) => img.tags.indexOf(filter || "") > -1) || [];

  const columns = useMemo(() => {
    let maxCols = screenWidth < 600 ? 1 : screenWidth < 900 ? 2 : 3;

    const cols = [];
    for (let i = 0; i < maxCols; i++) {
      const col = [];
      for (let j = i; j < filteredImages.length; j += maxCols) {
        col.push(filteredImages[j]);
      }
      cols.push(col);
    }

    return cols;
  }, [filteredImages, screenWidth]);

  return (
    <Box className="App-page Gallery-container">
      {columns.map((imgs, j) => (
        <div key={j}>
          {imgs.map((img, i) => {
            return (
              <div key={i} className="Gallery-single">
                <img
                  className="Gallery-image"
                  src={img.src}
                  alt={img.description}
                />
                <div className="Gallery-description">
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
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </Box>
  );
};

function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function update() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", update);
    return window.removeEventListener("resize", update);
  }, []);

  return screenWidth;
}

function useGallery() {
  const [value, setValue] = useState<{
    data: { images: FetchedImage[] };
  } | null>(null);

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

  const images = useMemo(() => {
    if (!value) return [];
    const resultImages: GalleryImage[] = value?.data?.images?.map(
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
  }, [value]);

  return images;
}
