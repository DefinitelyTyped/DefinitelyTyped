/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
export interface TopBarProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Top bar component.
 * http://foundation.zurb.com/sites/docs/top-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TopBar: React.FunctionComponent<TopBarProps>;
/**
 * Top bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TopBarTitle: React.FunctionComponent<TopBarProps>;
/**
 * Top bar left sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TopBarLeft: React.FunctionComponent<TopBarProps>;
/**
 * Top bar right sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TopBarRight: React.FunctionComponent<TopBarProps>;
