/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
export interface FlexVideoProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isWidescreen?: boolean | undefined;
    isVimeo?: boolean | undefined;
}
/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const FlexVideo: React.FunctionComponent<FlexVideoProps>;
