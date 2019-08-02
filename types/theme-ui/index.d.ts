// Type definitions for theme-ui 0.2
// Project: https://github.com/system-ui/theme-ui#readme
// Definitions by: Erik Stockmeier <https://github.com/erikdstock>
//                 Ifiok Jr. <https://github.com/ifiokjr>
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

type SSColors = StyledSystemTheme['colors'];

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
export interface ColorModes {
    /**
     * This is required for a color mode.
     */
    text: string;

    /**
     * This is required for the color mode.
     */
    background: string;
    [k: string]: Partial<Omit<StyledSystemTheme['colors'], 'modes'>>;
}

export interface Theme extends StyledSystemTheme {
    /**
     * Provide a value here to enable color modes
     */
    initialColorMode?: string;

    /**
     * Define the colors that are available through this theme
     */
    colors?: { [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty> } & {
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

        /**
         * Nested color modes can provide overrides when used in conjunction with
         * `Theme.initialColorMode and `useColorMode()`
         */
        modes?: ColorModes;
    };

    /**
     * Styles for elements rendered in MDX can be added to the theme.styles
     * object. This is the primary, low-level way to control typographic and
     * other styles in markdown content. Styles within this object are processed
     * with @styled-system/css and have access to base theme values like colors,
     * fonts, etc.
     */
    styles?: {
        [P in StyledTags]: SystemStyleObject;
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
export type SxStyleProp = SystemStyleObject & Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>;

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

type SxComponent = React.ComponentClass<SxProps>;

export const Box: SxComponent;
export const Container: SxComponent;
export const Flex: SxComponent;
export const Header: SxComponent;
export const Footer: SxComponent;
export const Layout: SxComponent;
export const Main: SxComponent;

export type StyledTags =
    | 'p'
    | 'b'
    | 'i'
    | 'a'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'img'
    | 'pre'
    | 'code'
    | 'ol'
    | 'ul'
    | 'li'
    | 'blockquote'
    | 'hr'
    | 'em'
    | 'table'
    | 'tr'
    | 'th'
    | 'td'
    | 'em'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'thematicBreak'
    | 'div'
    | 'root';

export const Styled: Record<StyledTags, SxComponent> & SxComponent;

interface ThemeUIContext {
    theme: Theme;
    components: Record<StyledTags, SxComponent>;
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
    initialMode?: Modes
): [Modes, React.Dispatch<React.SetStateAction<Modes>>];

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
