/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonSizes, ButtonColors } from '../enums';
import { FlexboxPropTypes } from '../utils';
export interface ButtonPropsCommon extends FlexboxPropTypes {
    size?: ButtonSizes;
    isHollow?: boolean;
    isExpanded?: boolean;
    isDisabled?: boolean;
    isDropdown?: boolean;
    isArrowOnly?: boolean;
}
export interface ButtonProps extends ButtonPropsCommon, ReactDOM.HTMLAttributes<HTMLDivElement> {
    color?: ButtonColors;
}
/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Button: React.StatelessComponent<ButtonProps>;
export interface LinkProps extends ButtonPropsCommon, ReactDOM.AnchorHTMLAttributes<HTMLAnchorElement> {
    color?: ButtonColors;
}
/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Link: React.StatelessComponent<LinkProps>;
