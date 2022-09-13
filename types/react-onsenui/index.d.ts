// Type definitions for React Onsen UI (react-onsenui) 2.9.5
// Project: https://onsen.io/v2/docs/guide/react/
// Definitions by: Ozytis <https://ozytis.fr>,
//                 Salim <https://github.com/salim7>,
//                 Jemmyw <https://github.com/jemmyw>
//                 Yuji Tabata <https://github.com/uztbt>
//                 LBLZR_ <https://github.com/LaBlazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type HTMLAttributes<K extends keyof React.HTMLAttributes<{}>> = Partial<Pick<React.HTMLAttributes<{}>, K>>;
export type InputHTMLAttributes<K extends keyof React.InputHTMLAttributes<{}>> = Partial<Pick<React.InputHTMLAttributes<{}>, K>>;

export class Component<P = {}, S = {}> extends React.Component<HTMLAttributes<'id' | 'className' | 'style'> & P, S> {}

export interface Modifiers_string {
    default?: string | undefined;
    material?: string | undefined;
}

export interface Modifiers_number {
    default?: number | undefined;
    material?: number | undefined;
}

export interface AnimationOptions {
    duration?: number | undefined;
    delay?: number | undefined;
    timing?: string | undefined;
}

export interface PullHookChangeEvent {
    state: "initial" | "preaction" | "action";
}

export type NavigatorAnimationTypes = "slide" | "lift" | "fade" | "none" | string;

export interface PageTransitionOptions {
    animation?: NavigatorAnimationTypes | undefined;
    animationOptions?: AnimationOptions | undefined;
    callback?: (() => void) | undefined;
    data?: any;
}

export interface SwitchChangeEvent extends Event {
    switch: HTMLElement;
    value: boolean;
    isInteractive: boolean;
}

/*** splitter ***/
export class SplitterSide extends Component<{
    children?: React.ReactNode;
    side?: "left" | "right" | undefined,
    collapse?: "portrait" | "landscape" | boolean | undefined,
    isOpen?: boolean | undefined,
    onOpen?(e?: Event): void,
    onPreOpen?(e?: Event): void,
    onPreClose?(e?: Event): void,
    onModeChange?(e?: Event): void,
    onClose?(e?: Event): void,
    swipeable?: boolean | undefined,
    swipeTargetWidth?: number | undefined,
    width?: number | undefined,
    animation?: "overlay" | "default" | undefined
    animationOptions?: AnimationOptions | undefined,
    openThreshold?: number | undefined,
    mode?: "collapse" | "split" | undefined,
}, any> { }

export class SplitterContent extends Component<{ children?: React.ReactNode }> { }

export class Splitter extends Component<{ children?: React.ReactNode }> { }

/*** toolbar ***/

export class Toolbar extends Component<{
    modifier?: string | undefined
}, any> {}

export class BottomToolbar extends Component<{
    modifier?: string | undefined
}, any> {}

export class ToolbarButton extends Component<{
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

/*** icon ***/
export class Icon extends Component<{
    modifier?: string | undefined,
    icon?: string | Modifiers_string | undefined,
    size?: number | Modifiers_number | undefined,
    rotate?: 90 | 180 | 270 | undefined,
    fixedWidth?: boolean | undefined,
    spin?: boolean | undefined,
    title?: string | undefined
}, any> {}

/*** page ***/
export class Page extends Component<{
    children?: React.ReactNode;
    contentStyle?: any,
    modifier?: string | undefined,
    renderModal?(): void,
    renderToolbar?(): void,
    renderBottomToolbar?(): void,
    renderFixed?(): void,
    onInit?(): void,
    onShow?(): void,
    onHide?(): void,
    onInfiniteScroll?(doneCallback: () => void): void
}, any> {}

/*** Grid ***/
export class Col extends Component<{
    verticalAlign?: "top" | "bottom" | "center" | undefined,
    width?: string | undefined,
}, any> {}

export class Row extends Component<{
    verticalAlign?: "top" | "bottom" | "center" | undefined,
}, any> {}

/*** Navigation ***/
export class BackButton extends Component<{
    modifier?: string | undefined,
    onClick?(navigator: Navigator): void
}, any> {}

export class Navigator extends Component<{
    renderPage(route: any, navigator?: Navigator): JSX.Element,
    initialRouteStack?: string[] | undefined,
    initialRoute?: any,
    onPrePush?(): void,
    onPostPush?(): void,
    onPrePop?(): void,
    onPostPop?(): void,
    animation?: NavigatorAnimationTypes | undefined,
    animationOptions?: AnimationOptions | undefined,
}, any> {
    pages: any[];
    routes: any[];
    resetPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    resetPageStack(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    pushPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    popPage(options?: PageTransitionOptions): Promise<HTMLElement>;
}

// Still incomplete, see https://onsen.io/v2/api/react/RouterNavigator.html
export class RouterNavigator extends Component<{
  routeConfig: any,
  renderPage(route: any, navigator?: Navigator): JSX.Element,
  swipeable?: boolean | 'force' | undefined,
  swipePop?: (() => void) | undefined;
  swipeTargetWidth?: number | undefined;
  animation?: string | undefined,
  onPostPush(): void,
  onPostPop(): void,
}, any> {
}

// https://github.com/OnsenUI/OnsenUI/blob/master/bindings/react/src/RouterUtil.js
export type Route = any;
export type RouterProcess = object; // incomplete

export interface RouteConfig {
  routeStack: Route[];
  processStack: RouterProcess[];
}

export const RouterUtil: {
  init: (routes: Route[]) => RouteConfig;
  replace: (config: {routeConfig: RouteConfig, route: Route, options?: any, key?: any}) => RouteConfig;
  reset: (config: {routeConfig: RouteConfig, route: Route, options?: any, key?: any}) => RouteConfig;
  push: (config: {routeConfig: RouteConfig, route: Route, options?: any, key?: any}) => RouteConfig;
  pop: (config: {routeConfig: RouteConfig, options?: any, key?: any}) => RouteConfig;
  postPush: (routeConfig: RouteConfig) => RouteConfig;
  postPop: (routeConfig: RouteConfig) => RouteConfig;
};

/*** Carousel ***/
export class Carousel extends Component<{
    direction?: "horizontal" | "vertical" | undefined,
    fullscreen?: boolean | undefined,
    overscrollable?: boolean | undefined,
    centered?: boolean | undefined,
    itemWidth?: number | string | undefined,
    itemHeight?: number | string | undefined,
    autoScroll?: boolean | undefined,
    autoScrollRatio?: number | undefined,
    swipeable?: boolean | undefined,
    disabled?: boolean | undefined,
    index?: number | undefined,
    autoRefresh?: boolean | undefined,
    onPostChange?(): void,
    onRefresh?(): void,
    onOverscroll?(): void
    animationOptions?: AnimationOptions | undefined
}, any> {}

export class CarouselItem extends Component<{
    modifier?: string | undefined
}, any> {}

/*** AlertDialog ***/
export class AlertDialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean | undefined,
    isCancelable?: boolean | undefined,
    isDisabled?: boolean | undefined,
    animation?: "none" | "default" | undefined,
    modifier?: string | undefined,
    maskColor?: string | undefined,
    animationOptions?: AnimationOptions | undefined,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
}, any> {}

export class AlertDialogButton extends Component<{
    onClick?(): void,
    modifier?: string | undefined,
    disabled?: boolean | undefined,
}, any> {}

export class Dialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean | undefined,
    isCancelable?: boolean | undefined,
    isDisabled?: boolean | undefined,
    animation?: "none" | "default" | undefined,
    modifier?: string | undefined,
    maskColor?: string | undefined,
    animationOptions?: AnimationOptions | undefined,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
}, any> {}

export class Modal extends Component<{
    animation?: "fade" | "lift" | "none" | undefined,
    animationOptions?: AnimationOptions | undefined,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    isOpen?: boolean | undefined,
    onDeviceBackButton?(): void,
}, any> {}

export class Popover extends Component<{
    getTarget?(): React.ReactInstance,
    onCancel?(): void,
    isOpen?: boolean | undefined,
    isCancelable?: boolean | undefined,
    isDisabled?: boolean | undefined,
    animation?: "none" | "default" | undefined,
    modifier?: string | undefined,
    maskColor?: string | undefined,
    animationOptions?: AnimationOptions | undefined,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
}, any> {}

export class Toast extends Component<{
    isOpen: boolean,
    animation?: 'default' | 'ascend' | 'lift' | 'fall' | 'fade' | 'none' | undefined,
    modifier?: string | undefined,
    animationOptions?: AnimationOptions | undefined,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void,
}, any> {}

export class ActionSheet extends Component<{
    onCancel?(): void,
    isOpen?: boolean | undefined,
    isCancelable?: boolean | undefined,
    isDisabled?: boolean | undefined,
    animation?: string | undefined,
    modifier?: string | undefined
    maskColor?: string | undefined,
    animationOptions?: {} | undefined,
    title?: string | undefined
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void
}, any> {}

export class ActionSheetButton extends Component<{
    modifier?: string | undefined,
    icon?: string | undefined,
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

export class ProgressBar extends Component<{
    modifier?: string | undefined,
    value?: number | undefined,
    secondaryValue?: number | undefined,
    indeterminate?: boolean | undefined,
}, any> {}

export class ProgressCircular extends Component<{
    modifier?: string | undefined,
    value?: number | undefined,
    secondaryValue?: boolean | undefined,
    indeterminate?: boolean | undefined,
}, any> {}

export class Ripple extends Component<{
    color?: string | undefined,
    background?: string | undefined,
    disabled?: boolean | undefined,
    modifier?: string | undefined,
}, any> {}

/*** Forms ***/
export class Fab extends Component<{
    modifier?: string | undefined,
    ripple?: boolean | undefined,
    position?: string | undefined,
    disabled?: boolean | undefined,
    onClick?(e?: React.MouseEvent<HTMLElement>): void,
    name?: string | undefined,
}, any> {}

export class Button extends Component<{
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    ripple?: boolean | undefined,
    name?: string | undefined,
    icon?: string | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void
}, any> {}

export class Input extends Component<InputHTMLAttributes<'min' | 'max' | 'step'> & {
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    readOnly?: boolean | undefined,
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined,
    onInput?: ((e: React.ChangeEvent<any>) => void) | undefined,
    onBlur?: ((e: React.FocusEvent<any>) => void) | undefined,
    onFocus?: ((e: React.FocusEvent<any>) => void) | undefined,
    value?: string | undefined,
    defaultValue?: string | undefined,
    checked?: boolean | undefined,
    placeholder?: string | undefined,
    type?: string | undefined,
    inputId?: string | undefined,
    float?: boolean | undefined,
    name?: string | undefined,
    autoFocus?: boolean | undefined;
}, any> {}

export class Radio extends Component<{
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    onChange?(e: Event): void,
    value?: string | undefined,
    checked?: boolean | undefined,
    defaultChecked?: boolean | undefined,
    inputId?: string | undefined,
    name?: string | undefined,
}, any> {}

export class Checkbox extends Component<{
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    onChange?(e: Event): void,
    value?: string | undefined,
    checked?: boolean | undefined,
    inputId?: string | undefined,
    name?: string | undefined,
}, any> {}

export class Range extends Component<{
    modifier?: string | undefined,
    onChange?(e: Event): void,
    value?: number | undefined,
    disabled?: boolean | undefined,
}, any> {}

export class SearchInput extends Component<{
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined,
    onInput?: ((e: React.ChangeEvent<any>) => void) | undefined,
    placeholder?: string | undefined,
    value?: string | undefined,
    inputId?: string | undefined,
}, any> {}

export class Select extends Component<{
    children?: React.ReactNode;
    modifier?: string | undefined,
    disabled?: boolean | undefined,
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined,
    value?: string | undefined,
    multiple?: boolean | undefined,
    autofocus?: boolean | undefined,
    required?: boolean | undefined,
    form?: string | undefined,
    size?: string | undefined,
    name?: string | undefined,
}, any> {}

export class Switch extends Component<{
    modifier?: string | undefined,
    onChange?(e: SwitchChangeEvent): void,
    checked?: boolean | undefined,
    disabled?: boolean | undefined,
    inputId?: string | undefined,
    name?: string | undefined,
    autoFocus?: boolean | undefined;
}, any> {}

/**
 * Tabs
 */

export class Tab extends Component<{
    label?: string | undefined,
    icon?: string | undefined,
}> { }

export class TabActive extends Component { }

export class TabInactive extends Component { }

export interface TabbarRenderTab {
    content: JSX.Element;
    tab: JSX.Element;
}

export class Tabbar extends Component<{
    index: number,
    renderTabs(index: number, tabbar: Tabbar): TabbarRenderTab[],
    position?: "bottom" | "top" | "auto" | undefined,
    swipeable?: boolean | undefined,
    ignoreEdgeWidth?: number | undefined,
    animation?: "none" | "slide" | undefined,
    animationOptions?: AnimationOptions | undefined,
    tabBorder?: boolean | undefined,
    onPreChange?(): void,
    onPostChange?(): void,
    onReactive?(): void,
    onSwipe?(index: number, animationOptions: AnimationOptions): void,
}, any> { }

/**
 * Lists
 */

export class LazyList extends Component<{
    modifier?: string | undefined,
    length?: number | undefined,
    renderRow(rowIndex: number): any,
    calculateItemHeight(rowIndex: number): any,
}, any> { }

export class List<T> extends Component<{
    modifier?: string | undefined,
    dataSource?: T[] | undefined,
    renderRow?(row: T, index?: number): JSX.Element | undefined,
    renderFooter?(): JSX.Element | undefined,
    renderHeader?(): JSX.Element | undefined,
}, any> {}

export class ListHeader extends Component<{
    modifier?: string | undefined,
}, any> {}

export class ListItem extends Component<{
    children?: React.ReactNode;
    modifier?: string | undefined,
    tappable?: boolean | undefined,
    tapBackgroundColor?: string | undefined,
    lockOnDrag?: boolean | undefined,
    expandable?: boolean | undefined,
    expanded?: boolean | undefined,
    onClick?: React.MouseEventHandler<any> | undefined,
}, any> {}

export class ListTitle extends Component<{
    modifier?: string | undefined,
    onClick?: React.MouseEventHandler<any> | undefined,
}, any> {}

export class Card extends Component<{
    modifier?: string | undefined,
}, any> {}

/**
 * Controls
 */

/** Pull-to-refresh hook. */
export class PullHook extends Component<{
    onChange?(e: PullHookChangeEvent): void,
    onLoad?(done: () => void): void,
    onPull?(): void,
    disabled?: boolean | undefined,
    height?: number | undefined,
    thresholdHeight?: number | undefined,
    fixedContent?: boolean | undefined,
}, any> {}

export class Segment extends Component<{
    index?: number | undefined,
    tabbarId?: string | undefined,
    modifier?: string | undefined,
    onPostChange?(): void,
}, any> {}

export type SpeedDialPosition = 'top' | 'right' | 'bottom' | 'left' |
    'top right' | 'top left' | 'bottom right' | 'bottom left';
export type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';

export class SpeedDial extends Component<{
    modifier?: string | undefined,
    position?: SpeedDialPosition | undefined,
    direction?: SpeedDialDirection | undefined,
    disabled?: boolean | undefined,
}, any> {}

export class SpeedDialItem extends Component<{
    modifier?: string | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void,
}, any> {}
