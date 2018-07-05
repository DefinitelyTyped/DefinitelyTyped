/// <reference types="react" />
import * as React from 'react';
import { LabelColors } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Label: React.StatelessComponent<LabelProps>;
export interface LabelProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    color?: LabelColors;
}
