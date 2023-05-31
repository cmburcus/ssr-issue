import { Theme } from "./types";
import { defaultTheme } from "./default";
import { nightTheme } from "./night";

const themeKeys = Object.keys(defaultTheme);

/**
 * For accessing the current theme (using CSS Variables)
 */
export const theme = themeKeys.reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: `var(${curr})`,
  }),
  {} as Record<keyof Theme, string>
);

/**
 * All available themes
 */
export const themes = {
  day: defaultTheme,
  night: nightTheme,
};

export * from "./default";
export * from "./types";
