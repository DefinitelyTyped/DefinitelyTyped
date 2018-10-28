/// <reference types="react" />
import * as React from 'react';
import { GutterTypes, ExtendedBreakpoints } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const GridContainer: React.StatelessComponent<GridContainerProps>;
export interface GridContainerProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
    full?: boolean;
}
/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Grid: React.StatelessComponent<GridProps>;
export interface GridProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    vertical?: boolean;
    gutters?: GutterTypes;
    upOnSmall?: number;
    upOnMedium?: number;
    upOnLarge?: number;
    collapseOnSmall?: GutterTypes;
    collapseOnMedium?: GutterTypes;
    collapseOnLarge?: GutterTypes;
    gridFrame?: ExtendedBreakpoints;
}
/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Cell: React.StatelessComponent<CellProps>;
export interface CellProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    small?: number;
    medium?: number;
    large?: number;
    auto?: ExtendedBreakpoints;
    shrink?: ExtendedBreakpoints;
    offsetOnSmall?: number;
    offsetOnMedium?: number;
    offsetOnLarge?: number;
}
