// Type definitions for theme-ui 0.2
// Project: https://github.com/system-ui/theme-ui#readme
// Definitions by: Erik Stockmeier <https://github.com/erikdstock>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Brian Andrews <https://github.com/sbardian>
//                 Rodrigo Pombo <https://github.com/pomber>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Prateek Kathal <https://github.com/prateekkathal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import * as React from 'react';
import { lineHeight, Theme as StyledSystemTheme } from 'styled-system';

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };

interface Object<T> {
    [k: string]: T | Object<T>;
}

export interface ThemeProviderProps<Theme> {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}

// tslint:disable-next-line: no-unnecessary-generics
export function ThemeProvider<Theme>(props: ThemeProviderProps<Theme>): React.ReactElement;

/**
 * To use Theme UI color modes, color scales should include at least a text
 * and background color. These values are used in the ColorMode component to
 * set body foreground and background colors. Color modes should be defined as
 * nested objects within a theme.colors.modes object. Each key in this object
 * should correspond to a color mode name, where the name can be anything, but
 * typically light and dark are used for applications with a dark mode. The
 * initialColorMode key is required to enable color modes and will be used as
 * the name for the root color palette.
 */
export type ColorMode = {
    [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty>;
} & {
    /**
     * Body background color
     */
    background: CSS.ColorProperty;

    /**
     * Body foreground color
     */
    text: CSS.ColorProperty;

    /**
     * Primary brand color for links, buttons, etc.
     */
    primary?: CSS.ColorProperty;

    /**
     * A secondary brand color for alternative styling
     */
    secondary?: CSS.ColorProperty;

    /**
     * A faint color for backgrounds, borders, and accents that do not require
     * high contrast with the background color
     */
    muted?: CSS.ColorProperty;

    /**
     * A contrast color for emphasizing UI
     */
    accent?: CSS.ColorProperty;
};

export interface Theme extends StyledSystemTheme {
    /**
     * Enable/disable custom CSS properties/variables if lower browser
     * support is required (for eg. IE 11).
     *
     * References: https://theme-ui.com/color-modes/#turn-off-custom-properties
     */
    useCustomProperties?: boolean;

    /**
     * Provide a value here to enable color modes
     */
    initialColorMode?: string;

    /**
     * Define the colors that are available through this theme
     */
    colors?: ColorMode & {
        /**
         * Nested color modes can provide overrides when used in conjunction with
         * `Theme.initialColorMode and `useColorMode()`
         */
        modes?: {
            [k: string]: ColorMode;
        };
    };

    /**
     * Styles for elements rendered in MDX can be added to the theme.styles
     * object. This is the primary, low-level way to control typographic and
     * other styles in markdown content. Styles within this object are processed
     * with @styled-system/css and have access to base theme values like colors,
     * fonts, etc.
     */
    styles?: {
        [P in StyledTags]?: SystemStyleObject;
    };
}

/**
 * A React renderer with awareness of the `sx` prop.
 * Requires the [custom @jsx jsx pragma](https://theme-ui.com/sx-prop) declaration
 * at the top of your file for use.
 */
export const jsx: typeof React.createElement;

/**
 * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SxStyleProp = SystemStyleObject &
    Record<
        string,
        | SystemStyleObject
        | ResponsiveStyleValue<number | string>
        | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface SxProps {
    /**
     * The sx prop lets you style elements inline, using values from your
     * theme. To use the sx prop, add the custom pragma as a comment to the
     * top of your module and import the jsx function.
     *
     * ```ts
     * // @jsx jsx
     *
     * import { jsx } from 'theme-ui'
     * ```
     */
    sx?: SxStyleProp;
}

type SxComponent<T extends SxProps = IntrinsicSxElements['div']> = React.ComponentClass<T & { as?: React.ElementType }>;

export const Box: SxComponent;
export const Container: SxComponent;
export const Flex: SxComponent;
export const Header: SxComponent;
export const Footer: SxComponent;
export const Layout: SxComponent;
export const Main: SxComponent;

export interface IntrinsicSxElements {
    p: JSX.IntrinsicElements['p'] & SxProps;
    b: JSX.IntrinsicElements['b'] & SxProps;
    i: JSX.IntrinsicElements['i'] & SxProps;
    a: JSX.IntrinsicElements['a'] & SxProps;
    h1: JSX.IntrinsicElements['h1'] & SxProps;
    h2: JSX.IntrinsicElements['h2'] & SxProps;
    h3: JSX.IntrinsicElements['h3'] & SxProps;
    h4: JSX.IntrinsicElements['h4'] & SxProps;
    h5: JSX.IntrinsicElements['h5'] & SxProps;
    h6: JSX.IntrinsicElements['h6'] & SxProps;
    img: JSX.IntrinsicElements['img'] & SxProps;
    pre: JSX.IntrinsicElements['pre'] & SxProps;
    code: JSX.IntrinsicElements['code'] & SxProps;
    ol: JSX.IntrinsicElements['ol'] & SxProps;
    ul: JSX.IntrinsicElements['ul'] & SxProps;
    li: JSX.IntrinsicElements['li'] & SxProps;
    blockquote: JSX.IntrinsicElements['blockquote'] & SxProps;
    hr: JSX.IntrinsicElements['hr'] & SxProps;
    table: JSX.IntrinsicElements['table'] & SxProps;
    tr: JSX.IntrinsicElements['tr'] & SxProps;
    th: JSX.IntrinsicElements['th'] & SxProps;
    td: JSX.IntrinsicElements['td'] & SxProps;
    em: JSX.IntrinsicElements['em'] & SxProps;
    strong: JSX.IntrinsicElements['strong'] & SxProps;
    div: JSX.IntrinsicElements['div'] & SxProps;
    delete: JSX.IntrinsicElements['div'] & SxProps;
    inlineCode: JSX.IntrinsicElements['div'] & SxProps;
    thematicBreak: JSX.IntrinsicElements['div'] & SxProps;
    root: JSX.IntrinsicElements['div'] & SxProps;
}

export type StyledTags = keyof IntrinsicSxElements;

export const Styled: {
    [P in keyof IntrinsicSxElements]: SxComponent<IntrinsicSxElements[P]>;
} &
    SxComponent;

interface ThemeUIContext {
    theme: Theme;
    components: { [P in keyof IntrinsicSxElements]: SxComponent<IntrinsicSxElements[P]> };
}

export const Context: React.Context<ThemeUIContext>;

/**
 * A hook for retrieving the ThemeUI Context.
 */
export function useThemeUI(): ThemeUIContext;

/**
 * A hook retrieving the current color mode and a setter for a new color mode
 * in the theme.
 *
 * @param initialMode - the default color mode to use
 */
export function useColorMode<Modes extends string>(
    initialMode?: Modes,
): [Modes, React.Dispatch<React.SetStateAction<Modes>>];

export const InitializeColorMode: React.ComponentType;
export const ColorMode: React.ComponentType;

declare module 'react' {
    // tslint:disable-next-line: no-empty-interface
    interface DOMAttributes<T> extends SxProps {}
}

declare global {
    namespace JSX {
        // tslint:disable-next-line: no-empty-interface
        interface IntrinsicAttributes extends SxProps {}
    }
}
