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

  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  img {
    max-width: 100%;
    border-style: none;
    display: block;
    object-fit: cover;
  }
`;

export default GlobalStyles;
