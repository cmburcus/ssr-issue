import {
  Theme,
  ColorTheme,
  BorderTheme,
  ShadowTheme,
  SpacingTheme,
  FontSizeTheme,
  FontWeightTheme,
  FontFamilyTheme,
} from "./types";
import { primaryColors, neutralColors, blueColors } from "../base/colors";

export const gridUnit = 4;

export const colors: ColorTheme = {
  "--ll-color-primary": primaryColors.colorPrimary50,
  "--ll-color-primary-variant1": primaryColors.colorPrimary40,

  "--ll-color-background": neutralColors.colorNeutral100,
  "--ll-color-surface": neutralColors.colorNeutral95,
  "--ll-color-surface-variant1": neutralColors.colorNeutral90,
  "--ll-color-surface-variant2": neutralColors.colorNeutral80,

  "--ll-color-on-primary": neutralColors.colorNeutral100,
  "--ll-color-on-primary-variant1": neutralColors.colorNeutral90,
  "--ll-color-on-background": neutralColors.colorNeutral10,
  "--ll-color-on-background-variant1": neutralColors.colorNeutral30,
  "--ll-color-on-surface": neutralColors.colorNeutral10,
  "--ll-color-on-surface-variant1": neutralColors.colorNeutral30,
  "--ll-color-placeholder": neutralColors.colorNeutral60,
  "--ll-color-disabled": neutralColors.colorNeutral60,

  "--ll-color-border": neutralColors.colorNeutral90,

  "--ll-color-link": blueColors.colorBlue70,

  "--ll-sdk-title-color": neutralColors.colorNeutral10,
};

export const borders: BorderTheme = {
  "--ll-border-radius-small": `${gridUnit}px`,
  "--ll-border-radius-medium": `${2 * gridUnit}px`,
  "--ll-border-radius-large": `${4 * gridUnit}px`,
};

export const shadows: ShadowTheme = {
  "--ll-shadow-small": "rgb(0 0 0 / 18%) 0px 2px 5px",
  "--ll-shadow-medium": "0px 5px 11px -4px rgba(0,0,0,0.75)",
};

export const spacings: SpacingTheme = {
  "--ll-spacing-auto": "auto",
  "--ll-spacing-base-unit": `${gridUnit}px`,
  "--ll-spacing-xx-small": "var(--ll-spacing-base-unit)",
  "--ll-spacing-x-small": "calc(var(--ll-spacing-base-unit) * 2)",
  "--ll-spacing-small": "calc(var(--ll-spacing-base-unit) * 3)",
  "--ll-spacing-medium": "calc(var(--ll-spacing-base-unit) * 4)",
  "--ll-spacing-large": "calc(var(--ll-spacing-base-unit) * 6)",
  "--ll-spacing-x-large": "calc(var(--ll-spacing-base-unit) * 8)",
  "--ll-spacing-xx-large": "calc(var(--ll-spacing-base-unit) * 12)",
  "--ll-spacing-xxx-large": "calc(var(--ll-spacing-base-unit) * 16)",
};

export const fontFamilies: FontFamilyTheme = {
  "--ll-font-family": "Inter, sans-serif",
  "--ll-font-family-mono":
    "Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace;",
};

export const fontSizes: FontSizeTheme = {
  "--ll-font-size-base": "12px",
  "--ll-font-size-h1": "calc(var(--ll-font-size-base) * 4)",
  "--ll-font-size-h2": "calc(var(--ll-font-size-base) * 3)",
  "--ll-font-size-h3": "calc(var(--ll-font-size-base) * 2)",
  "--ll-font-size-h4": "calc(var(--ll-font-size-base) * 1.667)",
  "--ll-font-size-h5": "calc(var(--ll-font-size-base) * 1.5)",
  "--ll-font-size-h6": "calc(var(--ll-font-size-base) * 1.333)",
  "--ll-font-size-p": "calc(var(--ll-font-size-base) * 1.167)",
  "--ll-font-size-caption-1": "var(--ll-font-size-base)",
  "--ll-font-size-caption-2": "calc(var(--ll-font-size-base) * 0.833)",
};

export const fontWeights: FontWeightTheme = {
  "--ll-font-weight-light": "400",
  "--ll-font-weight-normal": "500",
  "--ll-font-weight-medium": "600",
  "--ll-font-weight-bold": "700",
};

export const defaultTheme: Theme = {
  ...colors,
  ...borders,
  ...shadows,
  ...spacings,
  ...fontFamilies,
  ...fontSizes,
  ...fontWeights,
};
