/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlexboxPropTypes } from '../utils';
/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Thumbnail: React.StatelessComponent<ThumbnailProps>;
export interface ThumbnailProps extends FlexboxPropTypes, ReactDOM.ImgHTMLAttributes<HTMLImageElement> {
}
/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ThumbnailLink: React.StatelessComponent<ThumbnailProps>;
