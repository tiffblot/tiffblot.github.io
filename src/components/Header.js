import React, { useState } from "react";
import Box from "ui-box";
import { Link } from "react-router-dom";
import { Instagram, Menu, X } from "react-feather";

import "./Header.css";

const HeaderLink = ({ href = "", to = "", children }) => {
  if (href) {
    return (
      <li className="Header-link">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </li>
    );
  }
  return (
    <li className="Header-link">
      <Link to={to}>{children}</Link>
    </li>
  );
};

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Box className="App-page Header-container">
      {/* TODO: style the logo sizing */}
      <Box is="img" alt="Tiff" src="tiff-logo.svg" />

      <Menu
        className="Header-hamburger"
        onClick={() => setShowLinks(!showLinks)}
      />
      <Box
        className={`Header-linkContainer ${showLinks && "show"}`}
        is="ul"
        onClick={() => setShowLinks(false)}
      >
        <li className="Header-link Header-close">
          <X />
        </li>
        <HeaderLink to="/">works</HeaderLink>
        <HeaderLink to="/about">about</HeaderLink>
        <HeaderLink href="https://www.etsy.com/shop/teashopbytiff">
          shop
        </HeaderLink>
        <HeaderLink>contact</HeaderLink>
        <HeaderLink href="https://www.instagram.com/tiffblot/">
          <Instagram />
        </HeaderLink>
      </Box>
    </Box>
  );
};
