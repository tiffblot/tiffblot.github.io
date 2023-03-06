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

export const Gallery = ({
  filter,
  download = false,
}: {
  filter?: string;
  download: boolean;
}) => {
  const images = useGallery();
  const filteredImages =
    images?.filter((img) => img.tags.indexOf(filter || "") > -1) || [];

  return (
    <>
      <Box className="App-page Gallery-container">
        <Box>
          {filteredImages.map((img, i) => {
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
