// Type definitions for theme-ui 0.3
// Project: https://github.com/system-ui/theme-ui#readme
// Definitions by: Erik Stockmeier <https://github.com/erikdstock>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Brian Andrews <https://github.com/sbardian>
//                 Rodrigo Pombo <https://github.com/pomber>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Prateek Kathal <https://github.com/prateekkathal>
//                 Piotr Monwid-Olechnowicz <https://github.com/hasparus>
//                 Leo Lin <https://github.com/leocantthinkfoaname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import * as React from 'react';
import { Theme as StyledSystemTheme } from 'styled-system';
import { Interpolation, SerializedStyles } from '@emotion/serialize';
export * from '@theme-ui/components';

export {};

type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };

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
 * initialColorModeName key is required to enable color modes and will be used as
 * the name for the root color palette.
 */
export type ColorMode = {
    [k: string]: CSS.Property.Color | ObjectOrArray<CSS.Property.Color>;
} & {
    /**
     * Body background color
     */
    background: CSS.Property.Color;

    /**
     * Body foreground color
     */
    text: CSS.Property.Color;

    /**
     * Primary brand color for links, buttons, etc.
     */
    primary?: CSS.Property.Color;

    /**
     * A secondary brand color for alternative styling
     */
    secondary?: CSS.Property.Color;

    /**
     * A contrast color for emphasizing UI
     */
    accent?: CSS.Property.Color;

    /**
     * A background color for highlighting text
     */
    highlight?: CSS.Property.Color;

    /**
     * A faint color for backgrounds, borders, and accents that do not require
     * high contrast with the background color
     */
    muted?: CSS.Property.Color;
};

export interface Theme extends Omit<StyledSystemTheme, 'colors' | 'buttons'> {
    /**
     * Enable/disable custom CSS properties/variables if lower browser
     * support is required (for eg. IE 11).
     *
     * @defaultValue true
     * @see https://theme-ui.com/color-modes/#turn-off-custom-properties
     */
    useCustomProperties?: boolean;

    /**
     * Adds styles defined in `theme.styles.roo`t to the `<body>` element along
     * with `color` and `background-color`.
     *
     * @defaultValue true
     * @see https://theme-ui.com/color-modes#applying-colors
     */
    useBodyStyles?: boolean;

    /**
     * The key used for the top-level color palette in `theme.colors`.
     *
     * @defaultValue 'default'
     * @see https://theme-ui.com/theming#configuration-flags
     */
    initialColorModeName?: string;

    /**
     * Initializes the color mode based on the `prefers-color-scheme` media
     * query.
     *
     * @defaultValue false
     * @see https://theme-ui.com/color-modes#initialize-mode-with-prefers-color-scheme-media-query
     */
    useColorSchemeMediaQuery?: boolean;

    /**
     * Adds a global `box-sizing: border-box` style.
     *
     * @defaultValue true
     * @see https://theme-ui.com/theming#configuration-flags
     */
    useBorderBox?: boolean;

    /**
     * Persists the color mode in `localStorage`.
     *
     * @defaultValue true
     * @see https://theme-ui.com/color-modes#disable-persisting-color-mode-on-localstorage
     */
    useLocalStorage?: boolean;

    /**
     * Define the colors that are available through this theme
     */
    colors?: ColorMode & {
        /**
         * Nested color modes can provide overrides when used in conjunction with
         * `Theme.initialColorModeName and `useColorMode()`
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

    /**
     * You can define additional CSS grid layouts by adding variants to the
     * `theme.grids` object. These styles can be used to create a wide variety of
     * different reusable layouts.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/grid#variants
     */
    grids?: Record<string, SystemStyleObject>;

    /**
     * Button variants can be defined in the `theme.buttons` object. The `Button`
     * component uses `theme.buttons.primary` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/button#variants
     */
    buttons?: Record<string, SystemStyleObject>;

    /**
     * Text style variants can be defined in the `theme.text` object. The `Text`
     * component uses `theme.text.default` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/text#variants
     */
    text?: Record<string, SystemStyleObject>;

    /**
     * Link variants can be defined in the `theme.links` object. By default the
     * `Link` component will use styles defined in `theme.styles.a`.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/link#variants
     */
    links?: Record<string, SystemStyleObject>;

    /**
     * Image style variants can be defined in the `theme.images` object.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/image#variants
     */
    images?: Record<string, SystemStyleObject>;

    /**
     * Card style variants can be defined in `the theme.cards` object. By default
     * the `Card` component uses the `theme.cards.primary` variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/card#variants
     */
    cards?: Record<string, SystemStyleObject>;

    /**
     * Container variants can be defined in the `theme.layout` object. The
     * `Container` component uses `theme.layout.container` as its default variant
     * style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/container#variants
     */
    layout?: Record<string, SystemStyleObject>;

    /**
     * Label variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.label` variant by default.
     *
     * Input variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.input` variant by default.
     *
     * Select variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.select` variant by default.
     *
     * Textarea variants can be defined in `theme.forms` and the component uses
     * the `theme.forms.textarea` variant by default.
     *
     * Radio variants can be defined in `theme.forms` and the component uses the
     * `theme.forms.radio` variant by default.
     *
     * Checkbox variants can be defined in `theme.forms` and the component uses
     * the `theme.forms.checkbox` variant by default.
     *
     * Slider variants can be defined in the `theme.forms` object. The `Slider`
     * component uses `theme.forms.slider` as its default variant style.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/label#variants
     * @see https://theme-ui.com/components/input#variants
     * @see https://theme-ui.com/components/select#variants
     * @see https://theme-ui.com/components/textarea#variants
     * @see https://theme-ui.com/components/radio#variants
     * @see https://theme-ui.com/components/checkbox#variants
     * @see https://theme-ui.com/components/slider#variants
     */
    forms?: Record<string, SystemStyleObject>;

    /**
     * Badge variants can be defined in `theme.badges`. The `Badge` component uses
     * `theme.badges.primary` as its default variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/badge#variants
     */
    badges?: Record<string, SystemStyleObject>;

    /**
     * Alert variants can be defined in `theme.alerts`. The `Alert` component uses
     * `theme.alerts.primary` as its default variant.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/alert#variants
     */
    alerts?: Record<string, SystemStyleObject>;

    /**
     * Message variants can be defined in the `theme.messages` object.
     *
     * @see https://theme-ui.com/theme-spec#variants
     * @see https://theme-ui.com/components/variants
     * @see https://theme-ui.com/components/message#variants
     */
    messages?: Record<string, SystemStyleObject>;
}

/**
 * A React renderer with awareness of the `sx` prop.
 * Requires the [custom @jsx jsx pragma](https://theme-ui.com/sx-prop) declaration
 * at the top of your file for use.
 */
export const jsx: typeof React.createElement;

/**
 * A utility from @styled-system/css for theming styles to be passed to Emotion's
 * css prop.
 *
 * Refer:
 * 1. https://styled-system.com/css/
 * 2. https://emotion.sh/docs/object-styles#with-css
 */
export function css(styleObject: Interpolation): (theme: Theme) => SerializedStyles;

/**
 * The `sx` prop accepts a `SxStyleProp` object and properties that are part of
 * the `Theme` will be transformed to their corresponding values. Other valid
 * CSS properties are also allowed.
 */
export type SxStyleProp = SystemStyleObject;

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
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
}

export const Context: React.Context<ThemeUIContext>;

/**
 * A hook for retrieving the ThemeUI Context.
 */
export function useThemeUI(): ThemeUIContext;

/**
 * A hook retrieving the current color mode and a setter for a new color mode
 * in the theme.
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

export function merge(a: Theme, b: Theme): Theme;
