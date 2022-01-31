import { createGlobalStyle } from "styled-components";

import HelveticaNeueRegularTtf from "../fonts/HelveticaNeue-Regular.ttf";
import HelveticaNeueRegularWoff from "../fonts/HelveticaNeue-Regular.woff";
import HelveticaNeueRegularWoff2 from "../fonts/HelveticaNeue-Regular.woff2";

import HelveticaNeueBoldTtf from "../fonts/HelveticaNeue-Bold.ttf";
import HelveticaNeueBoldWoff from "../fonts/HelveticaNeue-Bold.woff";
import HelveticaNeueBoldWoff2 from "../fonts/HelveticaNeue-Bold.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Gilroy'), url(${HelveticaNeueRegularWoff}) format('woff'),url(${HelveticaNeueRegularWoff2}) format('woff2'),url(${HelveticaNeueRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Gilroy'), url(${HelveticaNeueBoldWoff}) format('woff'),url(${HelveticaNeueBoldWoff2}) format('woff2'),url(${HelveticaNeueBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  *, input {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 400;
  }
  form, button, input, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  * {
    margin: 0px;
    padding: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
export default GlobalStyles;
