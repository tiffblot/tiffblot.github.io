import React from "react";
import Box from "ui-box";

export const AboutPage = () => {
  return (
    <Box className="App-page">
      <Box is="h2" fontWeight={500} marginBottom="0">
        oh, hi there!
      </Box>
      <Box is="p" maxWidth={500}>
        i'm{" "}
        <Box is="b" color="var(--text-secondary)">
          tiffany
        </Box>
        , a watercolor artist & graphic designer. i like to illustrate nostalgic
        art, from the little moments in life to your favorite childhood foods.
      </Box>
      <p>
        email:{" "}
        <a href="mailto:teashopbytiff@gmail.com">teashopbytiff@gmail.com</a>
      </p>
    </Box>
  );
};
