// Type definitions for @styled-system/css 5.0
// Project: https://github.com/styled-system/styled-system
// Definitions by: Sebastian Sebald <https://github.com/sebald>
//                 Bartosz Szewczyk <https://github.com/sztobar>
//                 Ryan Dowling <https://github.com/RyanTheAllmighty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as CSS from 'csstype';

export {};

export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;

/**
 * Omit exists in TypeScript >= v3.5, we're putting this here so typings can be
 * used with earlier versions of TypeScript.
 */
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | Array<T | null>;

/**
 * All CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
export interface CSSProperties extends CSS.StandardProperties<number | string>, CSS.SvgProperties<number | string>, CSS.VendorProperties<number | string> {}

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...)
 */
export type CSSPseudoSelectorProps = { [K in CSS.Pseudos]?: SystemStyleObject };

/**
 * CSS as POJO that is compatible with CSS-in-JS libaries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types
 */
export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudosForCSSObject, CSSOthersObjectForCSSObject {}

export type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K];
};
export type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject };
export type CSSInterpolation = undefined | number | string | CSSObject;
export interface CSSOthersObjectForCSSObject {
    [propertiesName: string]: CSSInterpolation;
}

/**
 * Map all nested selectors
 */
export interface CSSSelectorObject {
    [cssSelector: string]: SystemStyleObject;
}

export interface AliasesCSSProperties {
    /**
     * The **`background-color`** CSS property sets the background color of an element.
     *
     * **Initial value**: `transparent`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/background-color
     */
    bg?: StandardCSSProperties['backgroundColor'] | undefined;
    /**
     * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin
     */
    m?: StandardCSSProperties['margin'] | undefined;
    /**
     * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     */
    mt?: StandardCSSProperties['marginTop'] | undefined;
    /**
     * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    mr?: StandardCSSProperties['marginRight'] | undefined;
    /**
     * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    mb?: StandardCSSProperties['marginBottom'] | undefined;
    /**
     * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     */
    ml?: StandardCSSProperties['marginLeft'] | undefined;
    /**
     * The **`mx`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value places it
     * farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    mx?: StandardCSSProperties['marginLeft'] | undefined;
    /**
     * The **`marginX`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value
     * places it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
     */
    marginX?: StandardCSSProperties['marginLeft'] | undefined;
    /**
     * The **`my`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places it
     * farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    my?: StandardCSSProperties['marginTop'] | undefined;
    /**
     * The **`marginY`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places
     * it farther from its neighbors, while a negative value places it closer.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://styled-system.com/#margin-props
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
     * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
     */
    marginY?: StandardCSSProperties['marginTop'] | undefined;
    /**
     * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding
     */
    p?: StandardCSSProperties['padding'] | undefined;
    /**
     * The **`padding-top`** padding area on the top of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     */
    pt?: StandardCSSProperties['paddingTop'] | undefined;
    /**
     * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    pr?: StandardCSSProperties['paddingRight'] | undefined;
    /**
     * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    pb?: StandardCSSProperties['paddingBottom'] | undefined;
    /**
     * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     */
    pl?: StandardCSSProperties['paddingLeft'] | undefined;
    /**
     * The **`px`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    px?: StandardCSSProperties['paddingLeft'] | undefined;
    /**
     * The **`paddingX`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
     */
    paddingX?: StandardCSSProperties['paddingLeft'] | undefined;
    /**
     * The **`py`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    py?: StandardCSSProperties['paddingTop'] | undefined;
    /**
     * The **`paddingY`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://styled-system.com/#padding-props
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
     * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
     */
    paddingY?: StandardCSSProperties['paddingTop'] | undefined;
    /**
     * The **`size`** is shorthand for using both **`width`** and **`height`** CSS properties. They set the width and height of an element.
     *
     * **Initial value**: `0`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/width
     * @see https://developer.mozilla.org/docs/Web/CSS/height
     */
    size?: StandardCSSProperties['width'] | undefined;
}

export interface OverwriteCSSProperties {
    /**
     * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the
     * element, blur and spread radii, and color.
     *
     * **Initial value**: `none`
     *
     * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
     * | :-----: | :-----: | :-----: | :----: | :---: |
     * | **10**  |  **4**  | **5.1** | **12** | **9** |
     * | 1 _-x-_ |         | 3 _-x-_ |        |       |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
     */
    boxShadow?: CSS.Property.BoxShadow | number | undefined;
    /**
     * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only
     * available in `normal` and `bold`.
     *
     * **Initial value**: `normal`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **2**  |  **1**  | **1**  | **12** | **3** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
     */
    fontWeight?: CSS.Property.FontWeight | string | undefined;
    /**
     * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     *
     * **Initial value**: `auto`
     *
     * | Chrome | Firefox | Safari |  Edge  |  IE   |
     * | :----: | :-----: | :----: | :----: | :---: |
     * | **1**  |  **1**  | **1**  | **12** | **4** |
     *
     * @see https://developer.mozilla.org/docs/Web/CSS/z-index
     */
    zIndex?: CSS.Property.ZIndex | string | undefined;
}

/**
 * Map of all available CSS properties (including aliases) and their raw value.
 * Only used internally to map CCS properties to input types (responsive value,
 * theme function or nested) in `SystemCssProperties`.
 */
export interface AllSystemCSSProperties
    extends Omit<CSSProperties, 'boxShadow' | 'fontWeight' | 'zIndex'>,
        AliasesCSSProperties,
        OverwriteCSSProperties {}

export type SystemCssProperties = {
    [K in keyof AllSystemCSSProperties]:
        | ResponsiveStyleValue<AllSystemCSSProperties[K]>
        | ((theme: any) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
        | SystemStyleObject;
};

export interface VariantProperty {
    /**
     * **`Variants`** can be useful for applying complex styles to a component based on a single prop.
     *
     * @example
     * const theme = {
     *   buttons: {
     *     primary: {
     *       p: 3,
     *       fontWeight: 'bold',
     *       color: 'white',
     *       bg: 'primary',
     *       borderRadius: 2,
     *     },
     *   },
     * }
     * const result = css({
     *   variant: 'buttons.primary',
     * })(theme)
     *
     * @see https://styled-system.com/variants
     */
    variant: string;
}

export interface UseThemeFunction {
    (theme: any): SystemStyleObject;
}

export interface EmotionLabel {
    label?: string | undefined;
}

/**
 * The `SystemStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SystemStyleObject =
    | SystemCssProperties
    | CSSPseudoSelectorProps
    | CSSSelectorObject
    | VariantProperty
    | UseThemeFunction
    | EmotionLabel
    | null;

/**
 * Helper to define theme values.
 *
 * Theme values can be nested, but their value eventually has to match a certain `CSSProperty`.
 * E.g. `colors.light.primary`, `primary` has to be from type `CSS.Property.Color`.
 */
export type ThemeValue<T> =
    | T[]
    | {
          [name: string]: T | ThemeValue<T>;
      };

/**
 * Object that defines the minimal specification of a theme. It follows
 * the [Theme Specification](https://styled-system.com/css/#theme-keys) for interoperability
 * with other libraries.
 */
export type Theme =
    | { [K in keyof StandardCSSProperties]: ThemeValue<StandardCSSProperties[K]> }
    | Partial<ScaleThemeProperties>
    | ThemeBreakPoints
    | { [variantPart: string]: Theme };

export interface ThemeBreakPoints {
    breakpoints: string[] | number[];
}

export interface ScaleThemeProperties {
    /**
     * | Prop                | CSS Property     | Theme Field |
     * | :------------------ | :--------------- | :---------- |
     * | color               | color            | colors      |
     * | bg, backgroundColor | background-color | colors      |
     *
     * @see https://styled-system.com/table#color
     */
    colors?: ThemeValue<CSS.Property.Color> | undefined;
    /**
     * | Prop              | CSS Property                   | Theme Field |
     * | :---------------- | :----------------------------- | :---------- |
     * | m, margin           | margin                         | space       |
     * | mt, marginTop     | margin-top                     | space       |
     * | mr, marginRight   | margin-right                   | space       |
     * | mb, marginBottom  | margin-bottom                  | space       |
     * | ml, marginLeft    | margin-left                    | space       |
     * | mx                | margin-left and margin-right   | space       |
     * | my                | margin-top and margin-bottom   | space       |
     * | p, padding        | padding                        | space       |
     * | pt, paddingTop    | padding-top                    | space       |
     * | pr, paddingRight  | padding-right                  | space       |
     * | pb, paddingBottom | padding-bottom                 | space       |
     * | pl, paddingLeft   | padding-left                   | space       |
     * | px                | padding-left and padding-right | space       |
     * | py                | padding-top and padding-bottom | space       |
     *
     * @see https://styled-system.com/table#space
     */
    space?: ThemeValue<CSS.Property.Margin<number> & CSS.Property.Padding<number>> | undefined;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | fontFamily | font-family  | fonts       |
     *
     * @see https://styled-system.com/table#typography
     */
    fonts?: ThemeValue<CSS.Property.FontFamily> | undefined;
    /**
     * | Prop     | CSS Property | Theme Field |
     * | :------- | :----------- | :---------- |
     * | fontSize | font-size    | fontSizes   |
     *
     * @see https://styled-system.com/table#typography
     */
    fontSizes?: ThemeValue<CSS.Property.FontSize<number>> | undefined;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | fontWeight | font-weight  | fontWeights |
     *
     * @see https://styled-system.com/table#typography
     */
    fontWeights?: ThemeValue<CSS.Property.FontWeight> | undefined;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | lineHeight | line-height  | lineHeights |
     *
     * @see https://styled-system.com/table#typography
     */
    lineHeights?: ThemeValue<CSS.Property.LineHeight<string>> | undefined;
    /**
     * | Prop          | CSS Property   | Theme Field    |
     * | :------------ | :------------- | :------------- |
     * | letterSpacing | letter-spacing | letterSpacings |
     *
     * @see https://styled-system.com/table#typography
     */
    letterSpacings?: ThemeValue<CSS.Property.LetterSpacing<string | number>> | undefined;
    /**
     * | Prop         | CSS Property               | Theme Field |
     * | :----------- | :------------------------- | :---------- |
     * | border       | border                     | borders     |
     * | borderTop    | border-top                 | borders     |
     * | borderRight  | border-right               | borders     |
     * | borderBottom | border-bottom              | borders     |
     * | borderLeft   | border-left                | borders     |
     * | borderX      | border-left & border-right | borders     |
     * | borderY      | border-top & border-bottom | borders     |
     *
     * @see https://styled-system.com/table#border
     */
    borders?: ThemeValue<CSS.Property.Border<{}>> | undefined;
    /**
     * | Prop        | CSS Property | Theme Field  |
     * | :---------- | :----------- | :----------- |
     * | borderWidth | border-width | borderWidths |
     *
     * @see https://styled-system.com/table#border
     */
    borderWidths?: ThemeValue<CSS.Property.BorderWidth<{}>> | undefined;
    /**
     * | Prop        | CSS Property | Theme Field  |
     * | :---------- | :----------- | :----------- |
     * | borderStyle | border-style | borderStyles |
     *
     * @see https://styled-system.com/table#border
     */
    borderStyles?: ThemeValue<CSS.Property.BorderStyle> | undefined;
    /**
     * | Prop         | CSS Property  | Theme Field |
     * | :----------- | :------------ | :---------- |
     * | borderRadius | border-radius | radii       |
     *
     * @see https://styled-system.com/table#border
     */
    radii?: ThemeValue<CSS.Property.BorderRadius<{}>> | undefined;
    /**
     * | Prop       | CSS Property | Theme Field |
     * | :--------- | :----------- | :---------- |
     * | textShadow | text-shadow  | shadows     |
     * | boxShadow  | box-shadow   | shadows     |
     *
     * @see https://styled-system.com/table#shadow
     */
    shadows?: ThemeValue<CSS.Property.BoxShadow> | undefined;
    /**
     * | Prop    | CSS Property | Theme Field |
     * | :------ | :----------- | :---------- |
     * | zIndex  | z-index      | zIndices    |
     *
     * @see https://styled-system.com/table#position
     */
    zIndices?: ThemeValue<CSS.Property.ZIndex> | undefined;
    /**
     * | Prop      | CSS Property | Theme Field |
     * | :-------- | :----------- | :---------- |
     * | width     | width        | sizes       |
     * | height    | height       | sizes       |
     * | minWidth  | min-width    | sizes       |
     * | maxWidth  | max-width    | sizes       |
     * | minHeight | min-height   | sizes       |
     * | maxHeight | max-height   | sizes       |
     * | size      | width height | sizes       |
     *
     * @see https://styled-system.com/table#layout
     */
    sizes?: ThemeValue<CSS.Property.Height<{}> | CSS.Property.Width<{}>> | undefined;
}

/**
 * Transforms `input` to a style object that can be processed by CSS-in-JS
 * libraries. Note that this function should be used with the [css prop](https://emotion.sh/docs/css-prop).
 *
 * If you're using variants in your theme, you can access them by using the `variant`
 * property. The value of the property has to correspond to a path of your `Theme`.
 */
export type CssFunctionReturnType = (props?: Theme | { theme: Theme }) => CSSObject;
export function css(input?: SystemStyleObject): CssFunctionReturnType;
export default css;

/**
 * Safe getter with fallback. Basically https://github.com/developit/dlv
 */
export function get(object: object, key: string | string[], defaultValue?: any): any;

/**
 * Get responsive array from styles and theme.
 */
export function responsive(styles: object): (theme: object) => any[];
