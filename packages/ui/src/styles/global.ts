import { createGlobalStyle } from "styled-components";
import { themes, Theme } from "./themes";

export const GlobalStyle = createGlobalStyle<{
  themeName?: keyof typeof themes;
  overrides?: Partial<Theme>;
}>`
  :root {
    ${({ themeName, overrides }) => ({ ...themes[themeName || "day"], ...overrides })};
  }
`;
