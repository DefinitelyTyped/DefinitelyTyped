/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexboxPropTypes } from '../utils';
/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Block: React.StatelessComponent<BlockProps>;
export interface BlockProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
}
/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Inline: React.StatelessComponent<InlineProps>;
export interface InlineProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLSpanElement> {
}
