import styled from "styled-components";
// import { BgDark, BgLight } from "./assets/index";

export const Background = styled.div`
  inset: 0;
  position: fixed;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colorBg};
  background-image: ${props => props.theme.bgImage};
`