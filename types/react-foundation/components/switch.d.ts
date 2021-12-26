/// <reference types="react" />
import * as React from 'react';
import { SwitchSizes, SwitchInputTypes } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes } from '../utils';
/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Switch: React.FunctionComponent<SwitchProps>;
export interface SwitchProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    size?: SwitchSizes | undefined;
    id?: string | undefined;
    input?: SwitchInputProps | undefined;
    paddle?: SwitchPaddleProps | undefined;
    active?: SwitchActiveProps | undefined;
    inactive?: SwitchInactiveProps | undefined;
}
/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchInput: React.FunctionComponent<SwitchInputProps>;
export interface SwitchInputProps extends GeneralPropTypes, React.InputHTMLAttributes<HTMLInputElement> {
    type?: SwitchInputTypes | undefined;
    id?: string | undefined;
}
/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchPaddle: React.FunctionComponent<SwitchPaddleProps>;
export interface SwitchPaddleProps extends GeneralPropTypes, React.LabelHTMLAttributes<HTMLLabelElement> {
}
/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchActive: React.FunctionComponent<SwitchActiveProps>;
export interface SwitchActiveProps extends GeneralPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text?: string | undefined;
}
/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchInactive: React.FunctionComponent<SwitchInactiveProps>;
export interface SwitchInactiveProps extends GeneralPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text?: string | undefined;
}
