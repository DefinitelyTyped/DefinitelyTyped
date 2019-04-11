// Type definitions for ui-box 1.4
// Project: https://github.com/segmentio/ui-box
// Definitions by: Netto Farah <https://github.com/nettofarah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ComponentClass, ReactNode } from "react";
import * as CSS from "csstype";

/** Placeholder type for UI box props */
type UIBoxProp = string | number | boolean | null | undefined;

/** A prop defining which */
type UIBoxIsProp = string | ReactNode;

type CSSProps = CSS.StandardProperties;

export interface BoxProps {
    /**
     * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
     * React component type).
     */
    innerRef?(node: ReactNode): any;

    /**
     * Lets you change the underlying element type.
     * You can pass either a string to change the DOM element type, or a React component type to
     * inherit another component. The component just needs to accept a className prop to work.
     * A good example is inheriting the react-router Link component
     */
    is?: UIBoxIsProp;

    /**
     * The className prop you know and love. Internally it gets enhanced with additional class
     * names for the CSS properties you specify.
     */
    className?: string;

    /** Set to border - box by default. */
    boxSizing?: UIBoxProp;

    /** Sets marginLeft and marginRight to the same value */
    marginX?: UIBoxProp;

    /** Sets marginTop and marginBottom to the same value */
    marginY?: UIBoxProp;

    /** Sets paddingLeft and paddingRight to the same value */
    paddingX?: UIBoxProp;

    /** Sets paddingTop and paddingBottom to the same value */
    paddingY?: UIBoxProp;

    /** Utility property for easily adding clearfix styles to the element. */
    clearfix?: boolean;

    // accept any other arbitrary prop
    [key: string]: any;
}

export type Box = Component<BoxProps | CSSProps>;
export const Box: ComponentClass<BoxProps | CSSProps>;
export default Box;

type CacheEntry = ReadonlyArray<[/** key */ string, /** value */ string]>;

/**
 * Returns a { cache, styles } object which contains the cache entries and rendered styles
 * for server rendering. The styles can be output in a <style> tag or an external stylesheet (however you want).
 * The cache should be passed to hydrate() on the client-side before mounting the app.
 * Also useful for doing snapshot unit testing (make sure to call clearStyles() after each test though).
 */
export function extractStyles(): { cache: ReadonlyArray<CacheEntry>; styles: string };

/**
 * Hydrates the cache using the cache value returned from extractStyles().
 * This is used to prevent needing to recalculate all the class names and re-render
 * all the styles on page load when server rendering.
 */
export function hydrate(cache: ReadonlyArray<CacheEntry>): void;

/**
 * Clears the cache and removes the rendered styles.
 * Mainly useful for resetting the global state when using extractStyles() in unit tests.
 */
export function clearStyles(): void;

/**
 * Utility function for filtering out props based on an array of keys.
 * Returns an { matchedProps, remainingProps } object.
 */
export function splitProps(props: object, keys: ReadonlyArray<string>): { matchedProps: object; remainingProps: object };
