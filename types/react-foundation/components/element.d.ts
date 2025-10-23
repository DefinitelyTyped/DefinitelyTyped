/// <reference types="react" />
import React = require("react");
import { FlexboxPropTypes } from "../utils";
/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Block: React.FunctionComponent<BlockProps>;
export interface BlockProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Inline: React.FunctionComponent<InlineProps>;
export interface InlineProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
}
