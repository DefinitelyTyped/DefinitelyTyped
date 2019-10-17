// Type definitions for react-sketchapp 3.0
// Project: https://github.com/airbnb/react-sketchapp
// Definitions by: Rico Kahler <https://github.com/ricokahler>
//                 DomiR <https://github.com/DomiR>
//                 Sascha Zarhuber <https://github.com/saschazar21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Color, ResizeConstraints, SketchContext, SketchShadow } from './types';

declare global {
    const context: SketchContext;
}

/**
 * The [`StyleSheet` api uses numbers as IDs][0] to pull registered styles. The component props
 * can actually take either a `Style` or a `StyleReference` (where the `StyleReference` is given
 * by a `StyleSheet` obj created with `StyleSheet.create`)
 * [0]: https://github.com/airbnb/react-sketchapp/blob/v0.12.1/src/stylesheet/index.js#L34
 */
export type StyleReference = number;

/**
 * Represents the base styles that can be applied to a component.
 */
export interface Style {
    shadowColor?: Color;
    shadowOffset?: { width?: number; height?: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    margin?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    padding?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    position?: 'absolute' | 'relative';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'wrap' | 'nowrap';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
    overflow?: 'visible' | 'hidden' | 'scroll';
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number;
    aspectRatio?: number;
    zIndex?: number;
    backfaceVisibility?: 'visible' | 'hidden';
    backgroundColor?: Color;
    borderColor?: Color;
    borderTopColor?: Color;
    borderRightColor?: Color;
    borderBottomColor?: Color;
    borderLeftColor?: Color;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    opacity?: number;
}

/**
 * Represents all the Styles that can be applied to a `<Text/>` component. The this interface
 * extends the `Style` interface
 */
export interface TextStyle extends Style {
    color?: Color;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: 'normal' | 'italic';
    fontWeight?: string;
    textDecorationLine?: 'none' | 'underline' | 'double' | 'line-through';
    textShadowOffset?: { width: number; height: number };
    textShadowRadius?: number;
    textShadowColor?: Color;
    letterSpacing?: number;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    writingDirection?: 'auto' | 'ltr' | 'rtl';
}

/**
 * DocumentProps, a Document does not take any props but children
 */
export interface DocumentProps {
    children?: Array<React.ReactElement<PageProps, any>> | React.ReactElement<PageProps, any>;
}

/**
 * Document, a wrapper for a Sketch document, may contain Pages as children
 * http://airbnb.io/react-sketchapp/docs/API.html#document
 */
export class Document extends React.Component<DocumentProps, any> {}

/**
 * PageProps, a Page takes optionally a name and children as props
 */
export interface PageProps {
    name?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

/**
 * Page, a wrapper for a Sketch page, may contain Artboards as children
 * http://airbnb.io/react-sketchapp/docs/API.html#page
 */
export class Page extends React.Component<PageProps, any> {}

// wanted to type these as classes because they are implemented as classes and typing them this
// way gives you typings like `Artboard.prototype`

// Artboard
export interface ArtboardProps {
    /**
     * The name to be displayed in the Sketch Layer List
     */
    name?: string;
    children?: React.ReactNode[] | React.ReactNode;
    style?: Style | StyleReference;
}
/**
 * Wrapper for Sketch's Artboards.
 */
export class Artboard extends React.Component<ArtboardProps, any> {}

// Image
export type ImageSource = string | { src: string };
export type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center' | 'repeat' | 'none';
export interface ImageProps {
    children?: React.ReactNode[] | React.ReactNode;
    source?: ImageSource;
    style?: Style | StyleReference;
    resizeMode: ResizeMode;
}
export class Image extends React.Component<ImageProps, any> {}

// RedBox
export interface RedBoxProps {
    /** A JavaScript Error object */
    error: Error;
}
/**
 * A red box / 'red screen of death' error handler. Thanks to
 * [commissure/redbox-react.](https://github.com/commissure/redbox-react)
 */
export class RedBox extends React.Component<RedBoxProps, any> {}

// Text
export interface TextProps {
    name?: string;
    children?: string;
    style?: TextStyle | StyleReference;
}
/** Text primitives */
export class Text extends React.Component<TextProps, any> {}

// View
export interface ViewProps {
    name?: string;
    children?: React.ReactNode[] | React.ReactNode;
    style?: Style | StyleReference;
    resizingConstraint?: ResizeConstraints;
    shadows?: SketchShadow[];
}
/** View primitives */
export class View extends React.Component<ViewProps, any> {}

export const StyleSheet: {
    hairlineWidth: 1;
    absoluteFill: StyleReference;
    /**
     * Create an optimized `StyleSheet` reference from a style object.
     */
    create: <T extends { [key: string]: Style | TextStyle }>(t: T) => { [P in keyof T]: StyleReference };
    /**
     * Flatten an array of style objects into one aggregated object, or look up the definition for a
     * registered stylesheet.
     */
    flatten: (
        input: Array<Style | TextStyle | StyleReference> | StyleReference | undefined | Style,
    ) => Style | TextStyle; // returns the expanded style or expanded style reference which conforms
    // to the `Style | TextStyle` interface
    /**
     * resolve one style
     */
    resolve: (style: Style | TextStyle) => { style: Style | TextStyle };
};

/**
 * An interface to Sketch's shared text styles. Create styles with or without rendering them to
 * the document canvas.
 */
export const TextStyles: {
    /**
     * The primary interface to TextStyles. Call this before rendering.
     */
    create: (
        options: { context: SketchContext; clearExistingStyles?: boolean },
        styles: { [key: string]: TextStyle },
    ) => any;
    /**
     * Find a stored native Sketch style object for a given JavaScript style object. You probably
     * don't need to use this.
     */
    resolve: (style: TextStyle) => any;
    /**
     * Find a stored style by name.
     */
    get: (name: string) => TextStyle | undefined;
    /**
     * Find all of the registered styles. You probably don't need to use this.
     */
    styles: { [key: string]: TextStyle | undefined };
    /**
     * Reset the registered styles.
     */
    clear: () => void;
};

// Symbols
/**
 * Returns a Sketch symbol given a node and an optional name.
 * @param node The node object that will be rendered as a symbol
 * @param name Optional name for the symbol, string can include backslashes to organize these
 * symbols with Sketch. For example squares/blue
 */
export function makeSymbol<P>(
    node: React.ComponentClass<P> | ((props: P) => JSX.Element),
    name?: string,
): React.ComponentClass<P & { overrides?: { [key: string]: any } }>;

/**
 * Injects the symbols into Sketch's symbol page. **Call this before rendering.**
 */
export function injectSymbols(context: SketchContext): void;

export const Platform: {
    OS: 'sketch';
    Version: 1;
    select: (obj: any) => any;
};

// render functions from render.d.ts
export { render, renderToJSON } from './render';

// Svg, similar to https://github.com/react-native-community/react-native-svg
export { default as Svg, SvgProps } from './lib/components/Svg';
