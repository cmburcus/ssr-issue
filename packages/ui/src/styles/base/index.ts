import * as colors from "./colors";
import * as transitions from "./transitions";
import * as screenSizes from "./screen-size";

export const baseStyles = {
  colors,
  ...transitions,
  ...screenSizes,
};
