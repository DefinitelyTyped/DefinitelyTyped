/// <reference types="react" />
import * as React from 'react';
import { GeneralPropTypes, FlexboxPropTypes } from '../utils';
/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps>;
export interface BreadcrumbsProps extends GeneralPropTypes, React.HTMLAttributes<HTMLUListElement> {
}
/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps>;
export interface BreadcrumbItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isDisabled?: boolean | undefined;
}
