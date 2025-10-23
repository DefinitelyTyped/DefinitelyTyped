/// <reference types="react" />
import React = require("react");
import { BadgeColors } from "../enums";
import { FlexboxPropTypes } from "../utils";
/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 */
export declare const Badge: React.FunctionComponent<BadgeProps>;
export interface BadgeProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    color?: BadgeColors | undefined;
}
