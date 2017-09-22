/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
export interface FlexVideoProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isWidescreen?: boolean;
    isVimeo?: boolean;
}
/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const FlexVideo: React.StatelessComponent<FlexVideoProps>;
