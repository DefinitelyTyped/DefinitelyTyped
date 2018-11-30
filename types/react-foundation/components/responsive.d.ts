/// <reference types="react" />
import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import { TopBarProps } from './top-bar';
import { GeneralPropTypes, FlexboxPropTypes } from '../utils';
/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */
export declare class ResponsiveNavigation extends Component<ResponsiveNavigationProps, ResponsiveNavigationState> {
    constructor();
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Updates the state of this component.
     * While this might seem like a sub-optimal solution, it is actually the only solution.
     * Using 'hide' and 'show' -classes won't work because they set display with `!important`.
     */
    update(): void;
    /**
     * Called when the menu icon is clicked.
     */
    toggle(): void;
    render(): JSX.Element;
    static defaultProps: {
        breakpoint: number;
    };
}
export interface ResponsiveNavigationState {
    isTitleBarVisible: boolean;
    isTopBarVisible: boolean;
}
export interface ResponsiveNavigationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    breakpoint?: number;
    titleBar?: TitleBarProps;
    menuIcon?: MenuIconProps;
    titleBarTitle?: TitleBarTitleProps;
    topBar?: TopBarProps;
}
/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TitleBar: React.StatelessComponent<TitleBarProps>;
export interface TitleBarProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MenuIcon: React.StatelessComponent<MenuIconProps>;
export interface MenuIconProps extends GeneralPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> {
}
/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TitleBarTitle: React.StatelessComponent<TitleBarTitleProps>;
export interface TitleBarTitleProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
