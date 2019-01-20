/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GeneralPropTypes, FlexboxPropTypes } from '../utils';
/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Breadcrumbs: React.StatelessComponent<BreadcrumbsProps>;
export interface BreadcrumbsProps extends GeneralPropTypes, ReactDOM.HTMLAttributes<HTMLUListElement> {
}
/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const BreadcrumbItem: React.StatelessComponent<BreadcrumbItemProps>;
export interface BreadcrumbItemProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLLIElement> {
    isDisabled?: boolean;
}
