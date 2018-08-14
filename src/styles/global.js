import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #F5F5F5;
    text-rendering: optmizedLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  }
`;
