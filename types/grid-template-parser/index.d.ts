// Type definitions for grid-template-parser 0.3
// Project: https://github.com/anthonydugois/grid-template-parser
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Parses a grid template.
 *
 * @param template the grid template to parse.
 * @returns an object representation of the grid template.
 */
export function grid(template: string): Grid;

/**
 * Builds a grid template from an object representation.
 *
 * @param grid the grid to build.
 * @returns the equivalent grid template.
 */
export function template(grid: Grid): string;

/**
 * Converts an area into a rect.
 *
 * @param area the area to convert.
 * @returns the equivalent rect.
 */
export function rect(area?: Partial<Area>): Rect;

/**
 * Converts a rect into an area.
 *
 * @param rect the rect to convert.
 * @returns The equivalent area.
 */
export function area(rect?: Partial<Rect>): Area;

/**
 * Finds the min column start of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the min column start.
 */
export function minColumnStart(grid: Grid): number;

/**
 * Finds the max column start of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the max column start.
 */
export function maxColumnStart(grid: Grid): number;

/**
 * Finds the min column end of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the min column end.
 */
export function minColumnEnd(grid: Grid): number;

/**
 * Finds the max column end of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the max column end.
 */
export function maxColumnEnd(grid: Grid): number;

/**
 * Finds the min row start of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the min row start.
 */
export function minRowStart(grid: Grid): number;

/**
 * Finds the max row start of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the max row start.
 */
export function maxRowStart(grid: Grid): number;

/**
 * Finds the min row end of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the min row end.
 */
export function minRowEnd(grid: Grid): number;

/**
 * Finds the max row end of all grid areas.
 *
 * @param grid the grid to analyze.
 * @returns the max row end.
 */
export function maxRowEnd(grid: Grid): number;

export interface Track {
    start: number;
    end: number;
    span: number;
}

export interface Area {
    row: Track;
    column: Track;
}

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Grid {
    width: number;
    height: number;
    areas: { [key: string]: Area };
}
