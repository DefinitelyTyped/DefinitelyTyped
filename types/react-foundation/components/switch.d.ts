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
export declare const Switch: React.StatelessComponent<SwitchProps>;
export interface SwitchProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    size?: SwitchSizes;
    id?: string;
    input?: SwitchInputProps;
    paddle?: SwitchPaddleProps;
    active?: SwitchActiveProps;
    inactive?: SwitchInactiveProps;
}
/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchInput: React.StatelessComponent<SwitchInputProps>;
export interface SwitchInputProps extends GeneralPropTypes, React.InputHTMLAttributes<HTMLInputElement> {
    type?: SwitchInputTypes;
    id?: string;
}
/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchPaddle: React.StatelessComponent<SwitchPaddleProps>;
export interface SwitchPaddleProps extends GeneralPropTypes, React.LabelHTMLAttributes<HTMLLabelElement> {
}
/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchActive: React.StatelessComponent<SwitchActiveProps>;
export interface SwitchActiveProps extends GeneralPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text?: string;
}
/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const SwitchInactive: React.StatelessComponent<SwitchInactiveProps>;
export interface SwitchInactiveProps extends GeneralPropTypes, React.HTMLAttributes<HTMLSpanElement> {
    text?: string;
}
