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
    static propTypes: {
        breakpoint: PropTypes.Validator<any>;
        alignX: PropTypes.Requireable<any>;
        alignY: PropTypes.Requireable<any>;
        selfAlignX: PropTypes.Requireable<any>;
        selfAlignY: PropTypes.Requireable<any>;
        centerAlign: PropTypes.Requireable<any>;
        flexContainer: PropTypes.Requireable<any>;
        flexDirRow: PropTypes.Requireable<any>;
        flexDirRowRev: PropTypes.Requireable<any>;
        flexDirCol: PropTypes.Requireable<any>;
        flexDirColRev: PropTypes.Requireable<any>;
        flexChild: PropTypes.Requireable<any>;
        flexOrder: PropTypes.Requireable<any>;
        flexOrderSmall: PropTypes.Requireable<any>;
        flexOrderMedium: PropTypes.Requireable<any>;
        flexOrderLarge: PropTypes.Requireable<any>;
        showFor: PropTypes.Requireable<any>;
        showOnlyFor: PropTypes.Requireable<any>;
        hideFor: PropTypes.Requireable<any>;
        hideOnlyFor: PropTypes.Requireable<any>;
        isHidden: PropTypes.Requireable<any>;
        isInvisible: PropTypes.Requireable<any>;
        showForLandscape: PropTypes.Requireable<any>;
        showForPortrait: PropTypes.Requireable<any>;
        showForSr: PropTypes.Requireable<any>;
        showOnFocus: PropTypes.Requireable<any>;
        isClearfix: PropTypes.Requireable<any>;
        float: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        breakpoint: number;
    };
}
export interface ResponsiveNavigationState {
    isTitleBarVisible: boolean;
    isTopBarVisible: boolean;
}
export interface ResponsiveNavigationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    breakpoint?: number | undefined;
    titleBar?: TitleBarProps | undefined;
    menuIcon?: MenuIconProps | undefined;
    titleBarTitle?: TitleBarTitleProps | undefined;
    topBar?: TopBarProps | undefined;
}
/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TitleBar: React.FunctionComponent<TitleBarProps>;
export interface TitleBarProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const MenuIcon: React.FunctionComponent<MenuIconProps>;
export interface MenuIconProps extends GeneralPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> {
}
/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TitleBarTitle: React.FunctionComponent<TitleBarTitleProps>;
export interface TitleBarTitleProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> {
}
