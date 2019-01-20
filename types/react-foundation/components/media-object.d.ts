/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HorizontalAlignments } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MediaObject: React.StatelessComponent<MediaObjectProps>;
export interface MediaObjectProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
    stackForSmall?: boolean;
}
/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MediaObjectSection: React.StatelessComponent<MediaObjectSectionProps>;
export interface MediaObjectSectionProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
    alignment?: HorizontalAlignments;
    isMain?: boolean;
    isMiddle?: boolean;
    isBottom?: boolean;
}
