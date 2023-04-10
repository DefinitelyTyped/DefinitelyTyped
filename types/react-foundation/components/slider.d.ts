/// <reference types="react" />
import * as React from 'react';
import { Component } from 'react';
/**
 * Slider component.
 * http://foundation.zurb.com/sites/docs/slider.html
 */
export declare class Slider extends Component<SliderProps, SliderState> {
    constructor();
    componentWillMount(): void;
    render(): JSX.Element;
}
export interface SliderProps extends React.HTMLAttributes<HTMLDivElement>, SliderCommonProps {
    initialStart?: number | undefined;
    fill?: SliderFillProps | undefined;
    handle?: SliderHandleProps | undefined;
}
export interface SliderState {
    value: number;
}
/**
 * Two-handle slider component.
 * http://foundation.zurb.com/sites/docs/slider.html#two-handles
 */
export declare class TwoHandleSlider extends Component<TwoHandleSliderProps, TwoHandleSliderState> {
    constructor();
    componentWillMount(): void;
    render(): JSX.Element;
}
export interface TwoHandleSliderProps extends React.HTMLAttributes<HTMLDivElement>, SliderCommonProps {
    initialStart?: number | undefined;
    initialEnd?: number | undefined;
    minHandle?: SliderHandleProps | undefined;
    maxHandle?: SliderHandleProps | undefined;
    fill?: SliderFillProps | undefined;
}
export interface TwoHandleSliderState {
    minValue: number;
    maxValue: number;
}
/**
 * Slider handle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export declare const SliderHandle: React.FunctionComponent<SliderHandleProps>;
export interface SliderHandleProps extends React.HTMLAttributes<HTMLSpanElement> {
}
export interface SliderFillProps {
    className?: string | undefined;
}
/**
 * Slider fill sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export declare const SliderFill: React.FunctionComponent<SliderFillProps>;
export interface SliderCommonProps {
    className?: string | undefined;
    isVertical?: boolean | undefined;
    isDisabled?: boolean | undefined;
}
