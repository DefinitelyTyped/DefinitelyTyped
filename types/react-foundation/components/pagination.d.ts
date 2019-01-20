/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexboxPropTypes } from '../utils';
/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Pagination: React.StatelessComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLUListElement> {
    isCentered?: boolean;
}
/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationItem: React.StatelessComponent<PaginationItemProps>;
export interface PaginationItemProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLLIElement> {
    isCurrent?: boolean;
    isDisabled?: boolean;
}
/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationPrevious: React.StatelessComponent<PaginationItemProps>;
/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationNext: React.StatelessComponent<PaginationItemProps>;
/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const PaginationEllipsis: React.StatelessComponent<PaginationItemProps>;
