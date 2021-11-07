/// <reference types="react" />
import * as React from 'react';
import { HorizontalAlignments } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MediaObject: React.FunctionComponent<MediaObjectProps>;
export interface MediaObjectProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    stackForSmall?: boolean | undefined;
}
/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MediaObjectSection: React.FunctionComponent<MediaObjectSectionProps>;
export interface MediaObjectSectionProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    alignment?: HorizontalAlignments | undefined;
    isMain?: boolean | undefined;
    isMiddle?: boolean | undefined;
    isBottom?: boolean | undefined;
}
