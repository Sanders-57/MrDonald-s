import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
}

*,
*::before,
*::after {
box-sizing: inherit;
}

body {
margin: 0;
backgtoung-color: #f0f0f0;
font-family: Roboto, sans-serif;
font-size: 20px;
color: black;
}

img {
max-width: 100%;
height: auto;

}

a {
text-decoration: none;
color: inherit;
}

ul {
list-style: none;
padding: 0;
margin: 0;
}

h1, h2, h3 {
font-family: Pacifico;
padding: 0;
margin: 0;
}

p{
padding: 0;
margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Новее и шире */
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Chrome, Safari */
  margin: 0; /* Иногда помогает */
}
`