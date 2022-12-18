import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    position: relative;
    overflow: auto;
    width: 100%;
    min-height: 100%;
    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  header,
  menu,
  nav,
  main,
  section,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  hgroup {
    display: block;
  }

  img {
    max-width: 100%;
    border-style: none;
    display: block;
    object-fit: cover;
  }

  button {
    border: none;
    background-color: transparent;
  }
  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyles;
