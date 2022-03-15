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
export declare const GridContainer: React.FunctionComponent<GridContainerProps>;
export interface GridContainerProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean | undefined;
    full?: boolean | undefined;
}
/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Grid: React.FunctionComponent<GridProps>;
export interface GridProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    vertical?: boolean | undefined;
    gutters?: GutterTypes | undefined;
    upOnSmall?: number | undefined;
    upOnMedium?: number | undefined;
    upOnLarge?: number | undefined;
    collapseOnSmall?: GutterTypes | undefined;
    collapseOnMedium?: GutterTypes | undefined;
    collapseOnLarge?: GutterTypes | undefined;
    gridFrame?: ExtendedBreakpoints | undefined;
}
/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Cell: React.FunctionComponent<CellProps>;
export interface CellProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    small?: number | undefined;
    medium?: number | undefined;
    large?: number | undefined;
    auto?: ExtendedBreakpoints | undefined;
    shrink?: ExtendedBreakpoints | undefined;
    offsetOnSmall?: number | undefined;
    offsetOnMedium?: number | undefined;
    offsetOnLarge?: number | undefined;
}
