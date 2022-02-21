import * as React from "react";
import ThemeContext from "terra-theme-context";

export {};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Handle Font Sizing
 *
 * According to terra-text, the only valid values for the font size of the component are:
 * 10, 12, 14, 16, 18, 20, 24, 32, 36, 46, 50, 56, 64, 72, 92, 100
 */
type TextFontSize =
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 32
  | 36
  | 46
  | 50
  | 56
  | 64
  | 72
  | 92
  | 100;

/**
 * Handle Font Weight
 *
 * According to terra-text, the only valid values for the font weight of the component are:
 * 200, 300, 400, 700
 */
type TextFontWeight = 200 | 300 | 400 | 700;

type OmittedKeys =
  | "type"
  | "disabled"
  | "tabIndex"
  | "aria-disabled"
  | "aria-label";

/**
 * Generates the base typing for the component, which extends the general props found in the
 * terra-text source code
 */
export interface TextProps<T extends HTMLSpanElement>
  extends Omit<React.HTMLAttributes<T>, OmittedKeys> {
    /**
     * Children of the text element (usually the text being displayed)
     */
    children: React.ReactNode;
    /**
     * Whether the text should be displayed in an italic font
     */
    isItalic?: boolean;
    /**
     * If the text is visually hidden
     */
    isVisuallyHidden?: boolean;
    /**
     * If the text should be wrapped
     */
    isWordWrapped?: boolean;
    /**
     * Set the font size for the given text element
     */
    fontSize?: TextFontSize;
    /**
     * Set the font weight for the given text element
     */
    fontWeight?: TextFontWeight;
}

/**
 * Constructor required to abstract the Text component with the TextProps
 */
export default class Text<T extends HTMLSpanElement> extends React.Component<
  TextProps<T>
> {
  static contextType?: typeof ThemeContext;
}
