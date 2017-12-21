/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Block: React.StatelessComponent<BlockProps>;
export interface BlockProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Inline: React.StatelessComponent<InlineProps>;
export interface InlineProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
}
