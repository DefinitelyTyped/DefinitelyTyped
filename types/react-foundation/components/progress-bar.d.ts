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
export declare const Progress: React.StatelessComponent<PaginationProps>;
export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    min?: number;
    max?: number;
    value?: number;
    color?: ProgressColors;
    valueText?: string;
    meter?: ProgressMeterWithTextProps;
}
/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeter: React.StatelessComponent<ProgressMeterProps>;
export interface ProgressMeterProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeterWithText: React.StatelessComponent<ProgressMeterWithTextProps>;
export interface ProgressMeterWithTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text: string;
}
/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const ProgressMeterText: React.StatelessComponent<ProgressMeterTextProps>;
export interface ProgressMeterTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLParagraphElement> {
    children?: string;
}
/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @returns {Object}
 */
export declare const NativeProgress: React.StatelessComponent<NativeProgressProps>;
export interface NativeProgressProps extends FlexboxPropTypes, React.ProgressHTMLAttributes<HTMLProgressElement> {
    max?: number;
    value?: number;
    color?: ProgressColors;
}
