import { Theme } from "./types";
import { defaultTheme } from "./default";
import { primaryColors, neutralColors, blueColors } from "../base/colors";

export const nightTheme: Theme = {
  ...defaultTheme,
  "--ll-color-primary": primaryColors.colorPrimary60,
  "--ll-color-primary-variant1": primaryColors.colorPrimary50,

  "--ll-color-background": neutralColors.colorNeutral10,
  "--ll-color-surface": neutralColors.colorNeutral20,
  "--ll-color-surface-variant1": neutralColors.colorNeutral30,
  "--ll-color-surface-variant2": neutralColors.colorNeutral40,

  "--ll-color-on-primary": neutralColors.colorNeutral100,
  "--ll-color-on-primary-variant1": neutralColors.colorNeutral90,
  "--ll-color-on-background": neutralColors.colorNeutral99,
  "--ll-color-on-background-variant1": neutralColors.colorNeutral80,
  "--ll-color-on-surface": neutralColors.colorNeutral80,
  "--ll-color-on-surface-variant1": neutralColors.colorNeutral90,
  "--ll-color-placeholder": neutralColors.colorNeutral70,
  "--ll-color-disabled": neutralColors.colorNeutral70,

  "--ll-color-border": neutralColors.colorNeutral30,

  "--ll-color-link": blueColors.colorBlue70,
};
