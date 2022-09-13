/// <reference types="react" />
import * as React from 'react';
import { ProgressColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes } from '../utils';
/**
 * Progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Progress: React.FunctionComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    min?: number | undefined;
    max?: number | undefined;
    value?: number | undefined;
    color?: ProgressColors | undefined;
    valueText?: string | undefined;
    meter?: ProgressMeterWithTextProps | undefined;
}
/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeter: React.FunctionComponent<ProgressMeterProps>;
export interface ProgressMeterProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeterWithText: React.FunctionComponent<ProgressMeterWithTextProps>;
export interface ProgressMeterWithTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text: string;
}
/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeterText: React.FunctionComponent<ProgressMeterTextProps>;
export interface ProgressMeterTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLParagraphElement> {
    children?: string | undefined;
}
/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @returns {Object}
 */
export declare const NativeProgress: React.FunctionComponent<NativeProgressProps>;
export interface NativeProgressProps extends FlexboxPropTypes, React.ProgressHTMLAttributes<HTMLProgressElement> {
    max?: number | undefined;
    value?: number | undefined;
    color?: ProgressColors | undefined;
}
