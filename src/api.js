import fetchival from "fetchival";

const CLIENT_ID = "fad804cc7c9498e";
const apiBase = "https://api.imgur.com/3";
const request = fetchival(apiBase, {
  mode: "cors",
  headers: {
    Authorization: "Client-ID " + CLIENT_ID,
  },
});

export const getGallery = () => {
  return request("album/Y4cGbYY").get();
};
