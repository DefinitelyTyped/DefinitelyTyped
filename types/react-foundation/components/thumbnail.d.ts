/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Thumbnail: React.FunctionComponent<ThumbnailProps>;
export interface ThumbnailProps extends FlexboxPropTypes, React.ImgHTMLAttributes<HTMLImageElement> {
}
/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ThumbnailLink: React.FunctionComponent<ThumbnailProps>;
