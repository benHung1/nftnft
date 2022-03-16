import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
  margin:0;
  padding:0;
}

body {
  font-family: 'Sora', sans-serif;  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
}
ul {
  list-style: none;
}

`;
