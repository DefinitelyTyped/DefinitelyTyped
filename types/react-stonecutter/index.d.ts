import * as React from "react";

export type Coordinates = [number, number];
export interface Layout {
    /**
     * an Array of [x, y] coordinate pairs like this: [[0, 0], [20, 0], [0, 30]]
     */
    positions: Coordinates[];

    /**
     * width of the entire grid
     */
    gridWidth: number;

    /**
     * height of the entire grid
     */
    gridHeight: number;
}
export type LengthUnit = "px" | "em" | "rem";
export type AngleUnit = "deg";

export type Easing = string;
export interface Easings {
    quadIn: Easing;
    quadOut: Easing;
    quadInOut: Easing;
    cubicIn: Easing;
    cubicOut: Easing;
    cubicInOut: Easing;
    quartIn: Easing;
    quartOut: Easing;
    quartInOut: Easing;
    quintIn: Easing;
    quintOut: Easing;
    quintInOut: Easing;
    sineIn: Easing;
    sineOut: Easing;
    sineInOut: Easing;
    expoIn: Easing;
    expoOut: Easing;
    expoInOut: Easing;
    circIn: Easing;
    circOut: Easing;
    circInOut: Easing;
    backIn: Easing;
    backOut: Easing;
    backInOut: Easing;
}

export interface CommonGridProps {
    /**
     * Number of columns. Required.
     * You can wrap the Grid component in the `makeResponsive` higher-order component to set this dynamically.
     */
    columns: number;

    /**
     * Width of a single column, by default in px units. Required.
     */
    columnWidth: number;

    /**
     * Width of space between columns. Default: 0.
     */
    gutterWidth?: number | undefined;

    /**
     * Height of vertical space between items. Default: 0.
     */
    gutterHeight?: number | undefined;

    /**
     * Change the HTML tagName of the Grid element, for example to 'ul' or 'ol' for a list. Default: 'div'.
     */
    component?: string | undefined;

    /**
     * Use one of the included layouts, or create your own. Defaults to a 'simple' layout with items of fixed height.
     */
    layout?: LayoutFunction | undefined;

    /**
     * These allow you to change how items animate as they appear and disappear from the grid.
     * Supply functions that return objects with the opacity and transform values for an item's start and end states.
     * By default the item's scale and opacity go from 0 to 1 and back to 0 on exit
     */
    enter?(itemProps: unknown[], gridProps: unknown[], gridState: unknown): unknown;
    entered?(itemProps: unknown[], gridProps: unknown[], gridState: unknown): unknown;
    exit?(itemProps: unknown[], gridProps: unknown[], gridState: unknown): unknown;

    /**
     * The perspective distance used for 3D transforms.
     * If you are using a transform function like rotateX, use this to strengthen the effect.
     * Default is no perspective applied.
     */
    perspective?: number | undefined;

    /**
     * The length unit used throughout.
     * Default: 'px'. Experimental.
     * You could try using 'em' or 'rem' and then adjust the font-size for a fluid layout,
     * but it may not work well with the measureItems and makeResponsive higher-order components.
     * `%` does not work well due to the way CSS transforms work.
     */
    lengthUnit?: LengthUnit | undefined;

    /**
     * The angle unit. Affects transform-functions such as rotate. Default: 'deg'.
     */
    angleUnit?: AngleUnit | undefined;
}

export interface SpringGridProps extends CommonGridProps {
    /**
     * Configuration of the React-Motion spring.
     * See the React-Motion docs for more info. Default: { stiffness: 60, damping: 14, precision: 0.1 }.
     */
    springConfig?: unknown | undefined;
}

export interface CSSGridProps extends CommonGridProps {
    /**
     * Animation duration in ms. Required.
     */
    duration: number;

    /**
     * Animation easing function in CSS transition-timing-function format.
     * Some Penner easings are included for convenience.
     * Default: easings.cubicOut.
     */
    easing?: Easing | undefined;
}

export class SpringGrid extends React.Component<SpringGridProps> {}
export class CSSGrid extends React.Component<CSSGridProps> {}

export interface MeasureItemsOptions {
    /**
     * If set to true, waits for images to load before measuring items and adding them to the Grid.
     * This may be necessary if you don't know the height of your images ahead of time.
     * Powered by imagesLoaded.
     */
    measureImages: boolean;

    /**
     * This option is passed through to the imagesLoaded library.
     * It allows you to wait for background images to load, in addition to <img> tags.
     */
    background?: boolean | string | undefined;
}

export function measureItems<T>(grid: T, options?: MeasureItemsOptions): T;

export interface MakeResponsiveOptions {
    /**
     * Maximum width for the Grid in px.
     */
    maxWidth: number;

    /**
     * Minimum horizontal length between the edge of the Grid and the edge of the viewport in px. Default: 0.
     */
    minPadding?: number | undefined;

    /**
     * Default number of columns before the breakpoints kick in.
     * May be useful when rendering server-side in a universal app.
     * Default: 4.
     */
    defaultColumns?: number | undefined;
}

export function makeResponsive<T>(grid: T, options: MakeResponsiveOptions): T;

export type LayoutFunction = (itemProps: unknown[], gridProps: unknown[]) => Layout;
export const layout: {
    pinterest: LayoutFunction;
    simple: LayoutFunction;
};

export const enterExitStyle: {
    foldUp: unknown;
    fromCenter: unknown;
    fromLeftToRight: unknown;
    fromTop: unknown;
    fromBottom: unknown;
    newspaper: unknown;
    simple: unknown;
    skew: unknown;
};

export const easings: Easings;
