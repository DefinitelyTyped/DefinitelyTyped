/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Breakpoints, ButtonGroupColors, ButtonGroupSizes } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ButtonGroup: React.StatelessComponent<ButtonGroupProps>;
export interface ButtonGroupProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
    color?: ButtonGroupColors;
    size?: ButtonGroupSizes;
    stackFor?: Breakpoints;
    isExpanded?: boolean;
    isStacked?: boolean;
}
