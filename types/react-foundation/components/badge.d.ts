/// <reference types="react" />
import * as React from 'react';
import { BadgeColors } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 */
export declare const Badge: React.StatelessComponent<BadgeProps>;
export interface BadgeProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    color?: BadgeColors;
}
