import "./Header.css";

import React, { useState } from "react";
import { Instagram, Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import Box from "ui-box";

const HeaderLink = ({
  href = "",
  to = "",
  children,
}: {
  href?: string;
  to?: string;
  children: any;
}) => {
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
      <Link className="Header-logo" to="/">
        <Box is="img" alt="Tiff" src="tiff_logo_2022.png" />
      </Link>

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
        <HeaderLink to="/">portfolio</HeaderLink>
        <HeaderLink to="/">graphics</HeaderLink>
        <HeaderLink to="/">downloads</HeaderLink>
        <HeaderLink to="/about">about</HeaderLink>
        <HeaderLink href="https://tiffblot.bigcartel.com/">shop</HeaderLink>
        <HeaderLink href="https://www.instagram.com/tiffblot/">
          <Instagram />
        </HeaderLink>
      </Box>
    </Box>
  );
};
