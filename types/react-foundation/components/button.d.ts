/// <reference types="react" />
import * as React from 'react';
import { ButtonSizes, ButtonColors } from '../enums';
import { FlexboxPropTypes } from '../utils';
export interface ButtonPropsCommon extends FlexboxPropTypes {
    size?: ButtonSizes | undefined;
    isHollow?: boolean | undefined;
    isExpanded?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isDropdown?: boolean | undefined;
    isArrowOnly?: boolean | undefined;
}
export interface ButtonProps extends ButtonPropsCommon, React.HTMLAttributes<HTMLDivElement> {
    color?: ButtonColors | undefined;
}
/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Button: React.FunctionComponent<ButtonProps>;
export interface LinkProps extends ButtonPropsCommon, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    color?: ButtonColors | undefined;
}
/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Link: React.FunctionComponent<LinkProps>;
