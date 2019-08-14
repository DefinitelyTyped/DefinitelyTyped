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
    initialStart?: number;
    fill?: SliderFillProps;
    handle?: SliderHandleProps;
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
    initialStart?: number;
    initialEnd?: number;
    minHandle?: SliderHandleProps;
    maxHandle?: SliderHandleProps;
    fill?: SliderFillProps;
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
export declare const SliderHandle: React.StatelessComponent<SliderHandleProps>;
export interface SliderHandleProps extends React.HTMLAttributes<HTMLSpanElement> {
}
export interface SliderFillProps {
    className?: string;
}
/**
 * Slider fill sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export declare const SliderFill: React.StatelessComponent<SliderFillProps>;
export interface SliderCommonProps {
    className?: string;
    isVertical?: boolean;
    isDisabled?: boolean;
}
