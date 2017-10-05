/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const CloseButton: React.StatelessComponent<CloseButtonProps>;
export interface CloseButtonProps extends FlexboxPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> {
}
