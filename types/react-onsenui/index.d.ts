// Type definitions for React OnSenui (react-onsenui) 2.7.0
// Project: https://onsen.io/v2/docs/guide/react/
// Definitions by: Ozytis <https://ozytis.fr>
//                 Ringrid <https://github.com/ringrid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import Component = React.Component;

export interface Modifiers_string {
    default?: string;
    material?: string;
}

export interface Modifiers_number {
    default?: number;
    material?: number;
}

export interface AnimationOptions {
    duration?: number;
    delay?: number;
    timing?: string;
}

/*** splitter ***/
export class SplitterSide extends Component<{
    collapse?: "portrait" | "landscape" | boolean,
    swipeable?: boolean,
    isOpen?: boolean,
    onOpen?(e?: Event): void,
    onClose?(e?: Event): void,
    side?: "left" | "right",
    swipeTargetWidth?: number,
    width?: number,
    animation?: "overlay" | "default"
    animationOptions?: AnimationOptions,
    openThreshold?: number,
    mode?: "collapse" | "split"
    onPreOpen?(e?: Event): void,
    onPreClose?(e?: Event): void,
    onModeChange?(e?: Event): void,
}, any> { }

export class SplitterContent extends Component { }

export class Splitter extends Component<{
    onDeviceBackButton?(): void,
}, any> { }

/*** toolbar ***/
export class Toolbar extends Component<{
    modifier?: string,
}, any> { }

export class BottomToolbar extends Component<{
    modifier?: string
}, any> { }

export class ToolbarButton extends Component<{
    modifier?: string,
    disabled?: boolean,
}, any> { }

/*** icon ***/
export class Icon extends Component<{
    modifier?: string,
    icon?: string | Modifiers_string,
    size?: number | Modifiers_number,
    rotate?: 90 | 180 | 270,
    fixedWidth?: boolean,
    spin?: boolean
}, any> { }

/*** page ***/

export class Page extends Component<{
    contentStyle?: any,
    modifier?: string,
    renderModal?(): void,
    renderToolbar?(): void,
    renderBottomToolbar?(): void,
    renderFixed?(): void,
    onInit?(): void,
    onShow?(): void,
    onHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

/*** Grid ***/
export class Col extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
    width?: string
}, any> { }

export class Row extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
}, any> { }

/*** Navigation ***/
export class BackButton extends Component<{
    modifier?: string,
    onClick?(navigator: Navigator): void
}, any> { }

export class Navigator extends Component<{
    renderPage(route: any, navigator: Navigator): JSX.Element,
    initialRouteStack?: string[],
    initialRoute?: any,
    onPrePush?(): void,
    onPostPush?(): void,
    onPrePop?(): void,
    onPostPop?(): void,
    animation?: "slide" | "lift" | "fade" | "none" | string,
    animationOptions?: AnimationOptions,
    swipeable?: boolean,
    swipePop?(popPage: any): void,
    onDeviceBackButton?(): void,
}, any> {
    resetPage(route: any, options?: any): void;
    resetPageStack(route: any, options?: any): void;
    pushPage(route: any, options?: any): void;
    popPage(options?: any): void;
}

export class RouterNavigator extends Component<{
    renderPage(route: any, navigator: Navigator): JSX.Element,
    initialRouteStack?: string[],
    initialRoute?: any,
    onPrePush?(): void,
    onPostPush?(): void,
    onPrePop?(): void,
    onPostPop?(): void,
    animation?: "slide" | "lift" | "fade" | "none" | string,
    animationOptions?: AnimationOptions,
    swipeable?: boolean,
    swipePop?(popPage: any): void,
    onDeviceBackButton?(): void,
}, any> {
    resetPageStack(route: any, options?: any): void;
    pushPage(route: any, options?: any): void;
    popPage(route: any, options?: any): void;
}

/*** Carousel ***/
export class Carousel extends Component<{
    direction?: "horizontal" | "vertical",
    fullscreen?: boolean,
    overscrollable?: boolean,
    centered?: boolean,
    itemWidth?: number,
    itemHeight?: number,
    autoScroll?: boolean,
    autoScrollRatio?: number,
    swipeable?: boolean,
    disabled?: boolean,
    index?: number,
    autoRefresh?: boolean,
    onPostChange?(): void,
    onRefresh?(): void,
    onOverscroll?(): void,
    animationOptions?: AnimationOptions,
    onSwipe?(): void,
}, any> { }

export class CarouselItem extends Component<{
    modifier: string
}, any> { }

/*** AlertDialog ***/
export class AlertDialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

/*** AlertDialogButton ***/
export class AlertDialogButton extends Component<{
    modifier?: string,
    disabled?: boolean,
    onClick?(e: Event): void,
}, any> { }

/*** Dialog ***/
export class Dialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

export class Modal extends Component<{
    animation?: "fade" | "none",
    animationOptions?: AnimationOptions
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    isOpen?: boolean,
    onDeviceBackButton?(): void,
}, any> { }

export class Popover extends Component<{
    getTarget?(): React.ReactInstance,
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

/*** Toast ***/
export class Toast extends Component<{
    isOpen?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

export class ProgressBar extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: boolean,
    intermediate?: boolean,
}, any> { }

export class ProgressCircular extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: boolean,
    intermediate?: boolean,
}, any> { }

export class Ripple extends Component<{
    color?: string,
    background?: string,
    disabled?: boolean,
}, any> { }

/*** Forms ***/
export class Fab extends Component<{
    modifier?: string,
    ripple?: boolean,
    position?: string,
    disabled?: boolean,
    onClick?(e?: Event): void,
}, any> { }

export class Button extends Component<{
    modifier?: string,
    disabled?: boolean,
    ripple?: boolean,
    onClick?(e?: Event): void
}, any> { }

export class Input extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?: React.ChangeEvent<any>,
    value?: string,
    checked?: boolean,
    placeholder?: string,
    type?: string,
    inputId?: string,
    float?: boolean,
}, any> { }

export class Range extends Component<{
    modifier?: string,
    onChange?(e?: Event): void,
    value?: number,
    disabled?: boolean,
}, any> { }

export class Switch extends Component<{
    onChange?(e: Event): void,
    checked?: boolean,
    disabled?: boolean,
    inputId?: string
}, any> { }

/**
 * Tabs
 */

export class Tab extends Component { }

export class Tabbar extends Component<{
    index?: number,
    renderTabs?(): any,
    position?: "bottom" | "top" | "auto",
    swipeable?: boolean,
    ignoreEdgeWidth?: number,
    animation: "none" | "slide" | "fade",
    animationOptions?: AnimationOptions,
    tabBorder: boolean,
    onPreChange?(): void,
    onPostChange?(): void,
    onReactive?(): void,
    onSwipe?(index: number, animationOptions: AnimationOptions): void,
}, any> { }

/**
 * Lists
 */

export class LazyList extends Component<{
    modifier?: string,
    length?: number,
    renderRow(rowIndex: number): any,
    calculateItemHeight(rowIndex: number): any,
}, any> { }

export class List extends Component<{
    modifier?: string,
    dataSource?: any[],
    renderRow?(row: any, index?: number): JSX.Element | undefined,
    renderFooter?(): JSX.Element | undefined,
    renderHeader?(): JSX.Element | undefined,
}, any> { }

export class ListHeader extends Component<{
    modifier?: string,
}, any> { }

export class ListItem extends Component<{
    modifier?: string,
    tappable?: boolean,
    tapBackgroundColor?: string,
    lockOnDrag?: boolean,
}, any> { }

export class ListTitle extends Component<{
    modifier?: string,
}, any> { }

/*** Card ***/
export class Card extends Component<{
    modifier?: string,
}, any> { }

/*** Checkbox ***/
export class Checkbox extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    checked?: boolean,
    inputId?: string,
}, any> { }

/*** Radio ***/
export class Radio extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    checked?: boolean,
    inputId?: string,
}, any> { }

/*** SearchInput ***/
export class SearchInput extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    inputId?: string,
}, any> { }

/*** Select ***/
export class Select extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    multiple?: boolean,
    autofocus?: boolean,
    required?: boolean,
    form?: string,
    size?: string,
}, any> { }

/*** ActionSheet ***/
export class ActionSheet extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> { }

/*** ActionSheetButton ***/
export class ActionSheetButton extends Component<{
    modifier?: string,
    icon?: string,
    onClick?(e: Event): void,
}, any> { }
