import React from "react";
import { LocalizationLoader, t } from "@local-logic/localization";
import { type ColorTheme, FontWeightTheme } from "../../styles/themes/types";
import * as S from "./styles";

export interface TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption1" | "caption2";
  align?: "left" | "center" | "right";
  color?: keyof ColorTheme | string;
  lineClamp?: number;
  noMargin?: boolean;
  weight?: keyof FontWeightTheme;
  lineHeight?: number;
  family?: "sans-serif" | "mono";
  className?: string;
  fontVariant?: "small-caps" | "normal" | "inherit" | "initial";
  textTransform?: "capitalize" | "uppercase" | "lowercase" | "none";
  letterSpacing?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = "p",
  align,
  color = "--ll-color-on-background",
  lineClamp,
  noMargin,
  lineHeight,
  weight = "--ll-font-weight-normal",
  family = "sans-serif",
  className,
  fontVariant = "initial",
  textTransform = "none",
  letterSpacing,
}) => {
  const elementType = ["caption1", "caption2", "p"].includes(variant) ? "p" : variant;

  return (
    <S.Text
      $variant={variant}
      $align={align}
      $color={color}
      $lineClamp={lineClamp}
      $weight={weight}
      $family={family}
      $fontVariant={fontVariant}
      $letterSpacing={letterSpacing}
      $textTransform={textTransform}
    >
      <LocalizationLoader locale="en">
        <S.TextWrap
          as={elementType}
          className={className}
          $noMargin={noMargin}
          $lineHeight={lineHeight}
        >
          {t("Testing localization", { _key: "my_test" })}
        </S.TextWrap>
      </LocalizationLoader>
    </S.Text>
  );
};
