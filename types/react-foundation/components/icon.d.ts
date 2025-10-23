/// <reference types="react" />
import React = require("react");
import { FlexboxPropTypes } from "../utils";
/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Icon: React.FunctionComponent<IconProps>;
export interface IconProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLElement> {
    name: string;
    prefix?: string | undefined;
}
