// Type definitions for React Onsen UI (react-onsenui) 2.9.5
// Project: https://onsen.io/v2/docs/guide/react/
// Definitions by: Ozytis <https://ozytis.fr>,
//                 Salim <https://github.com/salim7>,
//                 Jemmyw <https://github.com/jemmyw>
//                 Mikael Lirbank <https://github.com/lirbank>
//                 Yuji Tabata <https://github.com/uztbt>
//                 LBLZR_ <https://github.com/LaBlazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type HTMLAttributes<K extends keyof React.HTMLAttributes<{}>> = Partial<Pick<React.HTMLAttributes<{}>, K>>;
export type InputHTMLAttributes<K extends keyof React.InputHTMLAttributes<{}>> = Partial<Pick<React.InputHTMLAttributes<{}>, K>>;

export class Component<P = {}, S = {}> extends React.Component<HTMLAttributes<'id' | 'className' | 'style'> & P, S> {}

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

export interface PullHookChangeEvent {
    state: "initial" | "preaction" | "action";
}

export type NavigatorAnimationTypes = "slide" | "lift" | "fade" | "none" | string;

export interface PageTransitionOptions {
    animation?: NavigatorAnimationTypes;
    animationOptions?: AnimationOptions;
    callback?: () => void;
    data?: any;
}

export interface SwitchChangeEvent extends Event {
    switch: HTMLElement;
    value: boolean;
    isInteractive: boolean;
}

/*** splitter ***/
export class SplitterSide extends Component<{
    side?: "left" | "right",
    collapse?: "portrait" | "landscape" | boolean,
    isOpen?: boolean,
    onOpen?(e?: Event): void,
    onPreOpen?(e?: Event): void,
    onPreClose?(e?: Event): void,
    onModeChange?(e?: Event): void,
    onClose?(e?: Event): void,
    swipeable?: boolean,
    swipeTargetWidth?: number,
    width?: number,
    animation?: "overlay" | "default"
    animationOptions?: AnimationOptions,
    openThreshold?: number,
    mode?: "collapse" | "split",
}, any> { }

export class SplitterContent extends Component { }

export class Splitter extends Component { }

/*** toolbar ***/

export class Toolbar extends Component<{
    modifier?: string
}, any> {}

export class BottomToolbar extends Component<{
    modifier?: string
}, any> {}

export class ToolbarButton extends Component<{
    modifier?: string,
    disabled?: boolean,
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

/*** icon ***/
export class Icon extends Component<{
    modifier?: string,
    icon?: string | Modifiers_string,
    size?: number | Modifiers_number,
    rotate?: 90 | 180 | 270,
    fixedWidth?: boolean,
    spin?: boolean
}, any> {}

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
    onHide?(): void
}, any> {}

/*** Grid ***/
export class Col extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
    width?: string,
}, any> {}

export class Row extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
}, any> {}

/*** Navigation ***/
export class BackButton extends Component<{
    modifier?: string,
    onClick?(navigator: Navigator): void
}, any> {}

export class Navigator extends Component<{
    renderPage(route: any, navigator?: Navigator): JSX.Element,
    initialRouteStack?: string[],
    initialRoute?: any,
    onPrePush?(): void,
    onPostPush?(): void,
    onPrePop?(): void,
    onPostPop?(): void,
    animation?: NavigatorAnimationTypes,
    animationOptions?: AnimationOptions,
}, any> {
    pages: any[];
    routes: any[];
    resetPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    resetPageStack(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    pushPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    popPage(options?: PageTransitionOptions): Promise<HTMLElement>;
}

/*** Carousel ***/
export class Carousel extends Component<{
    direction?: "horizontal" | "vertical",
    fullscreen?: boolean,
    overscrollable?: boolean,
    centered?: boolean,
    itemWidth?: number | string,
    itemHeight?: number | string,
    autoScroll?: boolean,
    autoScrollRatio?: number,
    swipeable?: boolean,
    disabled?: boolean,
    index?: number,
    autoRefresh?: boolean,
    onPostChange?(): void,
    onRefresh?(): void,
    onOverscroll?(): void
    animationOptions?: AnimationOptions
}, any> {}

export class CarouselItem extends Component<{
    modifier?: string
}, any> {}

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
}, any> {}

export class AlertDialogButton extends Component<{
    onClick?(): void,
    modifier?: string,
    disabled?: boolean,
}, any> {}

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
}, any> {}

export class Modal extends Component<{
    animation?: "fade" | "lift" | "none",
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    isOpen?: boolean,
    onDeviceBackButton?(): void,
}, any> {}

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
}, any> {}

export class Toast extends Component<{
    isOpen: boolean,
    animation?: 'default' | 'ascend' | 'lift' | 'fall' | 'fade' | 'none',
    modifier?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> {}

export class ActionSheet extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: string,
    modifier?: string
    maskColor?: string,
    animationOptions?: {},
    title?: string
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void
}, any> {}

export class ActionSheetButton extends Component<{
    modifier?: string,
    icon?: string,
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

export class ProgressBar extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: number,
    indeterminate?: boolean,
}, any> {}

export class ProgressCircular extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: boolean,
    indeterminate?: boolean,
}, any> {}

export class Ripple extends Component<{
    color?: string,
    background?: string,
    disabled?: boolean,
    modifier?: string,
}, any> {}

/*** Forms ***/
export class Fab extends Component<{
    modifier?: string,
    ripple?: boolean,
    position?: string,
    disabled?: boolean,
    onClick?(e?: React.MouseEvent<HTMLElement>): void,
    name?: string,
}, any> {}

export class Button extends Component<{
    modifier?: string,
    disabled?: boolean,
    ripple?: boolean,
    name?: string,
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

export class Input extends Component<InputHTMLAttributes<'min' | 'max' | 'step'> & {
    modifier?: string,
    disabled?: boolean,
    readOnly?: boolean,
    onChange?: (e: React.ChangeEvent<any>) => void,
    onBlur?: (e: React.FocusEvent<any>) => void,
    onFocus?: (e: React.FocusEvent<any>) => void,
    value?: string,
    defaultValue?: string,
    checked?: boolean,
    placeholder?: string,
    type?: string,
    inputId?: string,
    float?: boolean,
    name?: string,
}, any> {}

export class Radio extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    checked?: boolean,
    defaultChecked?: boolean,
    inputId?: string,
    name?: string,
}, any> {}

export class Checkbox extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    checked?: boolean,
    inputId?: string,
    name?: string,
}, any> {}

export class Range extends Component<{
    modifier?: string,
    onChange?(e: Event): void,
    value?: number,
    disabled?: boolean,
}, any> {}

export class SearchInput extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    inputId?: string,
}, any> {}

export class Select extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?: (e: React.ChangeEvent<any>) => void,
    value?: string,
    multiple?: boolean,
    autofocus?: boolean,
    required?: boolean,
    form?: string,
    size?: string,
    name?: string,
}, any> {}

export class Switch extends Component<{
    modifier?: string,
    onChange?(e: SwitchChangeEvent): void,
    checked?: boolean,
    disabled?: boolean,
    inputId?: string,
    name?: string,
}, any> {}

/**
 * Tabs
 */

export class Tab extends Component<{
    label?: string,
    icon?: string,
}> { }

export class TabActive extends Component { }

export class TabInactive extends Component { }

export interface TabbarRenderTab {
    content: JSX.Element;
    tab: JSX.Element;
}

export class Tabbar extends Component<{
    index: number,
    renderTabs(): TabbarRenderTab[],
    position?: "bottom" | "top" | "auto",
    swipeable?: boolean,
    ignoreEdgeWidth?: number,
    animation?: "none" | "slide",
    animationOptions?: AnimationOptions,
    tabBorder?: boolean,
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
}, any> {}

export class ListHeader extends Component<{
    modifier?: string,
}, any> {}

export class ListItem extends Component<{
    modifier?: string,
    tappable?: boolean,
    tapBackgroundColor?: string,
    lockOnDrag?: boolean,
    expandable?: boolean,
    expanded?: boolean,
    onClick?: React.MouseEventHandler<any>,
}, any> {}

export class ListTitle extends Component<{
    modifier?: string,
    onClick?: React.MouseEventHandler<any>,
}, any> {}

export class Card extends Component<{
    modifier?: string,
}, any> {}

/**
 * Controls
 */

/** Pull-to-refresh hook. */
export class PullHook extends Component<{
    onChange?(e: PullHookChangeEvent): void,
    onLoad?(done: () => void): void,
    onPull?(): void,
    disabled?: boolean,
    height?: number,
    thresholdHeight?: number,
    fixedContent?: boolean,
}, any> {}

export class Segment extends Component<{
    index?: number,
    tabbarId?: string,
    modifier?: string,
    onPostChange?(): void,
}, any> {}

export type SpeedDialPosition = 'top' | 'right' | 'bottom' | 'left' |
    'top right' | 'top left' | 'bottom right' | 'bottom left';
export type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';

export class SpeedDial extends Component<{
    modifier?: string,
    position?: SpeedDialPosition,
    direction?: SpeedDialDirection,
    disabled?: boolean,
}, any> {}

export class SpeedDialItem extends Component<{
    modifier?: string;
    onClick?(e?: React.MouseEvent<HTMLElement>): void,
}, any> {}
