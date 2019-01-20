/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexboxPropTypes } from '../utils';
/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Icon: React.StatelessComponent<IconProps>;
export interface IconProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLElement> {
    name: string;
    prefix?: string;
}
