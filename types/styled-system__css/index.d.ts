// Type definitions for @styled-system/css 5.0
// Project: https://github.com/styled-system/styled-system
// Definitions by: Sebastian Sebald <https://github.com/sebald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as CSS from 'csstype';

/**
 * Omit exists in TypeScript >= v3.5, we're putting this here so typings can be
 * used with earlier versions of TypeScript.
 */
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export {};

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | T[];

/**
 * Helper to define responsive objects and props.
 */
export type ResponsiveStyleProps<T> = { [P in keyof T]?: ResponsiveStyleValue<T[P]> };

/**
 * All non-vendor-prefixed CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
export interface CSSProperties extends CSS.StandardProperties<number | string>, CSS.SvgProperties<number | string> {}

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...)
 */
export type CSSPseudoSelectorProps = { [Key in CSS.SimplePseudos]?: ResponsiveStyleProps<CSSProperties> };

/**
 * Color system properties.
 * See: https://styled-system.com/api/#color
 */
export type ColorProps = ResponsiveStyleProps<{
    color: CSS.ColorProperty;
    bg: CSS.ColorProperty;
    backgroundColor: CSS.ColorProperty;
    borderColor: CSS.ColorProperty;
}>;

/**
 * Space system properties.
 * See: https://styled-system.com/api#space
 */
export type SpaceProps = ResponsiveStyleProps<{
    m: number | string;
    mt: number | string;
    mr: number | string;
    mb: number | string;
    ml: number | string;
    mx: number | string;
    marginX: number | string;
    my: number | string;
    marginY: number | string;
    margin: number | string;
    marginTop: number | string;
    marginRight: number | string;
    marginBottom: number | string;
    marginLeft: number | string;

    p: number | string;
    pt: number | string;
    pr: number | string;
    pb: number | string;
    pl: number | string;
    px: number | string;
    paddingX: number | string;
    py: number | string;
    paddingY: number | string;
    padding: number | string;
    paddingTop: number | string;
    paddingRight: number | string;
    paddingBottom: number | string;
    paddingLeft: number | string;
}>;

/**
 * Typography system properties.
 * See: https://styled-system.com/api#typography
 */
export type TypographyProps = ResponsiveStyleProps<{
    fontFamily: CSS.FontFamilyProperty;
    fontSize: CSS.FontSizeProperty<number>;
    fontWeight: CSS.FontWeightProperty;
    lineHeight: CSS.LineHeightProperty<string>;
    letterSpacing: CSS.LetterSpacingProperty<string | number>;
}>;

/**
 * Border system properties.
 * See: https://styled-system.com/api/#border
 */
export type BorderProps = ResponsiveStyleProps<{
    border: CSS.BorderProperty<number>;
    borderTop: CSS.BorderTopProperty<number>;
    borderRight: CSS.BorderRightProperty<number>;
    borderBottom: CSS.BorderBottomProperty<number>;
    borderLeft: CSS.BorderLeftProperty<number>;
    borderWidth: CSS.BorderWidthProperty<number>;
    borderStyle: CSS.BorderStyleProperty;
    borderRadius: CSS.BorderRadiusProperty<number>;
    borderTopRightRadius: CSS.BorderTopRightRadiusProperty<number>;
    borderTopLeftRadius: CSS.BorderTopLeftRadiusProperty<number>;
    borderBottomRightRadius: CSS.BorderBottomRightRadiusProperty<number>;
    borderBottomLeftRadius: CSS.BorderBottomLeftRadiusProperty<number>;
}>;

/**
 * Shadow system properties.
 * See: https://styled-system.com/api/#shadow
 */
export type ShadowProps = ResponsiveStyleProps<{
    boxShadow: CSS.BoxShadowProperty | number;
}>;

/**
 * Layout system properties.
 * See: https://styled-system.com/api/#layout
 */
export type LayoutProps = ResponsiveStyleProps<{
    zIndex: CSS.ZIndexProperty;
    width: CSS.WidthProperty<number>;
    minWidth: CSS.MinWidthProperty<number>;
    maxWidth: CSS.MaxWidthProperty<number>;
    height: CSS.HeightProperty<number>;
    minHeight: CSS.MinHeightProperty<number>;
    maxHeight: CSS.MaxHeightProperty<number>;
}>;

/**
 * All supported style props.
 * See: https://styled-system.com/css#theme-keys
 */
export type StyleProps = ColorProps & SpaceProps & TypographyProps & BorderProps & ShadowProps & LayoutProps;

/**
 * Helper to define theme values.
 *
 * Theme values can be nested, but their value eventually has to match a certain `CSSProperty`.
 * E.g. `colors.light.primary`, `primary` has to be from type `CSS.ColorProperty`.
 */
export type ThemeValue<T> =
    | T[]
    | {
          [name: string]: T | ThemeValue<T>;
      };

/**
 * Object that defines the minimal specification of a theme. It follows
 * the [Theme Specification](https://system-ui.com/theme/) for interoperability
 * with other libraries.
 */
export type Theme<Styles extends string = never> = {
    breakpoints?: string[] | number[] | object;
    colors?: ThemeValue<CSS.ColorProperty>;
    space?: ThemeValue<number | string>;
    fonts?: ThemeValue<CSS.FontFamilyProperty>;
    fontSizes?: ThemeValue<CSS.FontSizeProperty<number>>;
    fontWeights?: ThemeValue<CSS.FontWeightProperty>;
    lineHeights?: ThemeValue<CSS.LineHeightProperty<string>>;
    letterSpacings?: ThemeValue<CSS.LetterSpacingProperty<string>>;
    borders?: ThemeValue<CSS.BorderProperty<{}>>;
    borderWidths?: ThemeValue<CSS.BorderWidthProperty<{}>>;
    borderStyles?: ThemeValue<CSS.LineStyle>;
    radii?: ThemeValue<CSS.BorderRadiusProperty<{}>>;
    shadows?: ThemeValue<CSS.BoxShadowProperty>;
    zIndices?: ThemeValue<CSS.ZIndexProperty>;
    sizes?: ThemeValue<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
} & { [key in Styles]: ThemeValue<SystemStyleObject> };

/**
 * The `SystemStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SystemStyleObject = ResponsiveStyleProps<Omit<CSSProperties, 'boxShadow'>> &
    CSSPseudoSelectorProps &
    StyleProps;

/**
 * Transforms `input` to a style object that can be processed by CSS-in-JS
 * libraries. Note that this function should be used with the [css prop](https://emotion.sh/docs/css-prop).
 *
 * If you're using variants in your theme, you can access them by using the `variant`
 * property. The value of the property has to correspond to a path of your `Theme`.
 */
export function css(
    input?: SystemStyleObject & { variant?: string } | ((theme: Theme) => SystemStyleObject & { variant?: string })
): (props?: Theme | { theme: Theme }) => CSS.Properties;
export default css;

/**
 * Safe getter with fallback. Basically https://github.com/developit/dlv
 */
export function get(object: object, key: string | string[], defaultValue?: any): any;

/**
 * Get responsive array from styles and theme.
 */
export function responsive(styles: object): (theme: object) => any[];
