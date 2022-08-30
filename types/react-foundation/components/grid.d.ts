/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Row: React.FunctionComponent<RowProps>;
export interface RowProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    upOnSmall?: number | undefined;
    upOnMedium?: number | undefined;
    upOnLarge?: number | undefined;
    horizontalAlignment?: string | undefined;
    verticalAlignment?: string | undefined;
    unstackOnSmall?: boolean | undefined;
    unstackOnMedium?: boolean | undefined;
    unstackOnLarge?: boolean | undefined;
    collapseOnSmall?: boolean | undefined;
    collapseOnMedium?: boolean | undefined;
    collapseOnLarge?: boolean | undefined;
    uncollapseOnSmall?: boolean | undefined;
    uncollapseOnMedium?: boolean | undefined;
    uncollapseOnLarge?: boolean | undefined;
    isCollapsed?: boolean | undefined;
    isExpanded?: boolean | undefined;
    isColumn?: boolean | undefined;
}
/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Column: React.FunctionComponent<ColumnProps>;
export interface ColumnProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    upOnSmall?: number | undefined;
    small?: number | undefined;
    medium?: number | undefined;
    large?: number | undefined;
    offsetOnSmall?: number | undefined;
    offsetOnMedium?: number | undefined;
    offsetOnLarge?: number | undefined;
    pushOnSmall?: number | undefined;
    pushOnMedium?: number | undefined;
    pushOnLarge?: number | undefined;
    pullOnSmall?: number | undefined;
    pullOnMedium?: number | undefined;
    pullOnLarge?: number | undefined;
    orderOnSmall?: number | undefined;
    orderOnMedium?: number | undefined;
    orderOnLarge?: number | undefined;
    centerOnSmall?: boolean | undefined;
    centerOnMedium?: boolean | undefined;
    centerOnLarge?: boolean | undefined;
    uncenterOnSmall?: boolean | undefined;
    uncenterOnMedium?: boolean | undefined;
    uncenterOnLarge?: boolean | undefined;
    expandOnSmall?: boolean | undefined;
    expandOnMedium?: boolean | undefined;
    expandOnLarge?: boolean | undefined;
    isShrunk?: boolean | undefined;
    isLast?: boolean | undefined;
    isColumn?: boolean | undefined;
}
