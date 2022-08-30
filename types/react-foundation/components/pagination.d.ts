/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Pagination: React.FunctionComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
    isCentered?: boolean | undefined;
}
/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationItem: React.FunctionComponent<PaginationItemProps>;
export interface PaginationItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isCurrent?: boolean | undefined;
    isDisabled?: boolean | undefined;
}
/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationPrevious: React.FunctionComponent<PaginationItemProps>;
/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationNext: React.FunctionComponent<PaginationItemProps>;
/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationEllipsis: React.FunctionComponent<PaginationItemProps>;
