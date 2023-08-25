import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`
export const colors = {
  primary: "#472F5F",
  secondary: "#FFB391",
  primarydark: "#52073D",
  black: "#000",
  white: "#fff"
}
