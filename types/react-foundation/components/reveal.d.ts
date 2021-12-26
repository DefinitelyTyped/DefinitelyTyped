/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Reveal component.
 * http://foundation.zurb.com/sites/docs/reveal.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Reveal: React.FunctionComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isTiny?: boolean | undefined;
    isSmall?: boolean | undefined;
    isLarge?: boolean | undefined;
    isFullscreen?: boolean | undefined;
}
