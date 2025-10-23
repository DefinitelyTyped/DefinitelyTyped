/// <reference types="react" />
import React = require("react");
import { FlexboxPropTypes } from "../utils";
/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const CloseButton: React.FunctionComponent<CloseButtonProps>;
export interface CloseButtonProps extends FlexboxPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> {
}
