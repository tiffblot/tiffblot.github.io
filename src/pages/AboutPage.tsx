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
      <p>
        Email:{" "}
        <a href="mailto:teashopbytiff@gmail.com">teashopbytiff@gmail.com</a>
      </p>

      <h3>Press</h3>
      <p>
        <a
          href="https://corporate.comcast.com/stories/comcast-nbcuniversal-celebrates-brilliance-courage-aapi-communities"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comcast Connections through Creations
        </a>
        , AAPIHM 2023
        <br />
        <a
          href="https://usa.kinokuniya.com/blog-top/kinokuniya-atlanta-grand-opening"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinokuniya Atlanta Grand Opening Artist Alley
        </a>{" "}
      </p>

      <h3>Conventions</h3>
      <p>
        JapanFest 2023 (Duluth, GA) with Musubee ATL
        <br /> MomoCon 2023 (Atlanta, GA)
        <br /> Anime Weekend Atlanta 2022 (Atlanta, GA)
      </p>

      <h3>Exhibits</h3>
      <p>
        Hi I&apos;m Home 2024 Chunky Things (Los Angeles, CA)
        <br />
        Being Ourselves 2023 Asian Cultural Empowerment (Atlanta, GA)
        <br />
        Labor of Love: Dumpling Fest 2023 Asian American Advocacy Fund (Atlanta,
        GA)
        <br />
        Have A Nice Day 2023 Chunky Things (Los Angeles, CA)
        <br />
        Year of the Rabbit 2023 The Bakery (Atlanta, GA)
        <br />
        Hua Yuan: AAPI Artist in Bloom 2023 Roswell Cultural Arts Center
        (Atlanta, GA)
      </p>
    </Box>
  );
};
