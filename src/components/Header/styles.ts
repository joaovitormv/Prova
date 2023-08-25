import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.primary};
  display: flex;
  height: 4rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  list-style-type: none;
  padding: 1rem;
  text-decoration: none;
  color: white;
  font-family: arial;
  font-weight: bold;
  font-size: 1.5rem;
`
