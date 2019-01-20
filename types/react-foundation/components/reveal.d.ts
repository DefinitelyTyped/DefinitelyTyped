/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexboxPropTypes } from '../utils';
/**
 * Reveal component.
 * http://foundation.zurb.com/sites/docs/reveal.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Reveal: React.StatelessComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
    isTiny?: boolean;
    isSmall?: boolean;
    isLarge?: boolean;
    isFullscreen?: boolean;
}
