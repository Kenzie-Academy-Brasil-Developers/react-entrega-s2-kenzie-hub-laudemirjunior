import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
      --botBlue: #fafdfe;
      --midBlue: #7C9AA6;
      --topBlue: #2D6673;
      --gray: #5C6F73;
      --black: #1F2326;
        }
  body{
      background: var(--botBlue);
      color: var(--black);
  }
  body, input, button {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;;
    font-weight: 500;

  }
  p, span {
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
  }
  button {
      cursor: pointer;
  }
  a {
      text-decoration: none;
  }
  textarea:focus, input:focus{
    outline: none;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #FFF inset;
}
`;

export default GlobalStyle;
