/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Row: React.StatelessComponent<RowProps>;
export interface RowProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    upOnSmall?: number;
    upOnMedium?: number;
    upOnLarge?: number;
    horizontalAlignment?: string;
    verticalAlignment?: string;
    unstackOnSmall?: boolean;
    unstackOnMedium?: boolean;
    unstackOnLarge?: boolean;
    collapseOnSmall?: boolean;
    collapseOnMedium?: boolean;
    collapseOnLarge?: boolean;
    uncollapseOnSmall?: boolean;
    uncollapseOnMedium?: boolean;
    uncollapseOnLarge?: boolean;
    isCollapsed?: boolean;
    isExpanded?: boolean;
    isColumn?: boolean;
}
/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Column: React.StatelessComponent<ColumnProps>;
export interface ColumnProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    upOnSmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    offsetOnSmall?: number;
    offsetOnMedium?: number;
    offsetOnLarge?: number;
    pushOnSmall?: number;
    pushOnMedium?: number;
    pushOnLarge?: number;
    pullOnSmall?: number;
    pullOnMedium?: number;
    pullOnLarge?: number;
    orderOnSmall?: number;
    orderOnMedium?: number;
    orderOnLarge?: number;
    centerOnSmall?: boolean;
    centerOnMedium?: boolean;
    centerOnLarge?: boolean;
    uncenterOnSmall?: boolean;
    uncenterOnMedium?: boolean;
    uncenterOnLarge?: boolean;
    expandOnSmall?: boolean;
    expandOnMedium?: boolean;
    expandOnLarge?: boolean;
    isShrunk?: boolean;
    isLast?: boolean;
    isColumn?: boolean;
}
