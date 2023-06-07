import React from "react";
import Box from "ui-box";

export const AboutPage = () => {
  return (
    <Box className="App-page">
      <Box is="h2" fontWeight={500} marginBottom="0">
        hello!
      </Box>
      <Box is="p" maxWidth={500}>
        I'm{" "}
        <Box is="b" color="var(--text-secondary)">
          Tiff
        </Box>
        , an Asian-American watercolor artist based in Georgia, USA. I tell
        stories about life with nostalgic illustrations, from food to people to
        Pokemon fanart. Look out for new artwork, sales, and in-person vending
        announcement on Instagram{" "}
        <a
          href="https://www.instagram.com/tiffblot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tiffblot
        </a>
        !
      </Box>
      <p>You can find my art in stores at:</p>
      <p>
        Homegrown Decatur
        <br />
        412 Church St, Decatur, GA 30030
      </p>
      <p>
        July Moon Bakery & Cafe
        <br />
        230 S Main St Suite Z, Alpharetta, GA 30009
      </p>
      <p>
        Mischief Oakland
        <br />
        3908 MacArthur Blvd, Oakland, CA 94619
      </p>
      <p>
        Email:{" "}
        <a href="mailto:teashopbytiff@gmail.com">teashopbytiff@gmail.com</a>
      </p>
    </Box>
  );
};
