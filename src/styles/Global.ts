import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --main-bg-color: #171430;
    --main-card-bg-color: #231F4A;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: var(--main-bg-color);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
