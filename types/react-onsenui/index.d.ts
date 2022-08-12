// Type definitions for React Onsen UI (react-onsenui) 2.10.0
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
export type InputHTMLAttributes<K extends keyof React.InputHTMLAttributes<{}>> = Partial<
    Pick<React.InputHTMLAttributes<{}>, K>
>;

export class Component<P = {}, S = {}> extends React.Component<HTMLAttributes<'id' | 'className' | 'style'> & P, S> { }

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

export type PullHookState = 'initial' | 'preaction' | 'action';

export interface PullHookChangeEvent {
    state: PullHookState;
}

export type NavigatorAnimationTypes = 'slide' | 'lift' | 'fade' | 'none' | string;

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

/*** general props ***/
export interface PropsWithModifier {
    modifier?: string | undefined;
}

export interface PropsWithChildren extends React.PropsWithChildren<{}> { }

/*** gestures ***/

export interface GestureDetectorProps {
    onDrag?(): void;
    onDragLeft?(): void;
    onDragRight?(): void;
    onDragUp?(): void;
    onDragDown?(): void;
    onHold?(): void;
    onRelease?(): void;
    onSwipe?(): void;
    onSwipeLeft?(): void;
    onSwipeRight?(): void;
    onSwipeUp?(): void;
    onSwipeDown?(): void;
    onTap?(): void;
    onDoubleTap?(): void;
    onPinch?(): void;
    onPinchIn?(): void;
    onPinchOut?(): void;
    onTouch?(): void;
    onTransform?(): void;
    onRotate?(): void;
}

export class GestureDetector extends Component<GestureDetectorProps, any> { }

/*** splitter ***/
export interface SplitterSideProps extends PropsWithChildren {
    side?: 'left' | 'right' | undefined;
    collapse?: 'portrait' | 'landscape' | 'string' | boolean | undefined;
    isOpen?: boolean | undefined;
    /**
     * @deprecated use onPostOpen instead
     */
    onOpen?(e?: Event): void;
    onPreOpen?(e?: Event): void;
    onPostOpen?(e?: Event): void;
    onPreClose?(e?: Event): void;
    onPostClose?(e?: Event): void;
    onModeChange?(e?: Event): void;
    /**
     * @deprecated use onPostClose instead
     */
    onClose?(e?: Event): void;
    swipeable?: boolean | undefined;
    swipeTargetWidth?: number | undefined;
    width?: number | string | undefined;
    animation?: 'overlay' | 'push' | 'reveal' | 'default' | undefined;
    animationOptions?: AnimationOptions | undefined;
    openThreshold?: number | undefined;
    mode?: 'collapse' | 'split' | undefined;
}

export class SplitterSide extends Component<SplitterSideProps, any> { }

/* disabling no-empty-interface rule to provide meaningful name of SplitterContent props interface */
/* tslint:disable-next-line:no-empty-interface */
export interface SplitterContentProps extends PropsWithChildren { }

export class SplitterContent extends Component<SplitterContentProps> { }

export interface SplitterProps extends PropsWithChildren {
    onDeviceBackButton?(): void;
}

export class Splitter extends Component<SplitterProps> { }

/*** toolbar ***/
export interface ToolbarProps extends PropsWithModifier, PropsWithChildren {
    inline?: boolean | undefined;
    static?: boolean | undefined;
    visible?: boolean | undefined;
}

export class Toolbar extends Component<ToolbarProps, any> { }
export interface BottomToolbarPops extends ToolbarProps {
    inline?: boolean | undefined;
    static?: boolean | undefined;
    visible?: boolean | undefined;
}

export class BottomToolbar extends Component<BottomToolbarPops, any> { }

export interface ToolbarButtonProps extends PropsWithModifier, PropsWithChildren {
    disabled?: boolean | undefined;
    icon?: string | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void;
}

export class ToolbarButton extends Component<ToolbarButtonProps, any> { }

/*** icon ***/
export interface IconProps extends PropsWithModifier {
    icon?: string | Modifiers_string | undefined;
    size?: number | Modifiers_number | undefined;
    rotate?: 0 | 90 | 180 | 270 | undefined;
    fixedWidth?: boolean | undefined;
    spin?: boolean | undefined;
    title?: string | undefined;
}

export class Icon extends Component<IconProps, any> { }

/*** page ***/
export interface PageProps extends PropsWithChildren, PropsWithModifier {
    contentStyle?: any;
    renderModal?(): void;
    renderToolbar?(): void;
    renderBottomToolbar?(): void;
    renderFixed?(): void;
    onInit?(): void;
    onShow?(): void;
    onHide?(): void;
    onDeviceBackButton?(): void;
    onInfiniteScroll?(doneCallback: () => void): void;
}

export class Page extends Component<PageProps, any> { }

/*** Grid ***/
export interface ColProps extends PropsWithChildren {
    verticalAlign?: 'top' | 'bottom' | 'center' | undefined;
    width?: number | string | undefined;
}

export class Col extends Component<ColProps, any> { }

export interface RowProps {
    verticalAlign?: 'top' | 'bottom' | 'center' | undefined;
}

export class Row extends Component<RowProps, any> { }

/*** Navigation ***/
export interface BackButtonOptions {
    animation?: string | undefined;
    animationOptions?: AnimationOptions | undefined;
    callback?(): void;
}
export interface BackButtonProps extends PropsWithModifier, PropsWithChildren {
    onClick?(navigator: Navigator): void;
    options?: BackButtonOptions | undefined;
}

export class BackButton extends Component<BackButtonProps, any> { }

export interface NavigatorProps {
    renderPage(route: any, navigator?: Navigator): JSX.Element;
    initialRouteStack?: string[] | any[] | undefined;
    initialRoute?: any;
    onPrePush?(): void;
    onPostPush?(): void;
    onPrePop?(): void;
    onPostPop?(): void;
    swipePop?(): void;
    onDeviceBackButton?(): void;
    animation?: NavigatorAnimationTypes | undefined;
    animationOptions?: AnimationOptions | undefined;
    swipeable?: boolean | 'force' | undefined;
}

export class Navigator extends Component<NavigatorProps, any> {
    pages: any[];
    routes: any[];
    resetPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    resetPageStack(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    pushPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    popPage(options?: PageTransitionOptions): Promise<HTMLElement>;
}

// Still incomplete, see https://onsen.io/v2/api/react/RouterNavigator.html
export type RouterNavigatorProcessType = 'push' | 'pop' | 'reset';

export interface RouterNavigatorProcess {
    type: RouterNavigatorProcessType;
    route: any;
}

export interface RouterNavigatorRouteConfig {
    routeStack: any[];
    processStack: RouterNavigatorProcess[];
}

export interface RouterNavigatorProps {
    routeConfig: RouterNavigatorRouteConfig;
    renderPage(route: any, navigator?: Navigator): JSX.Element;
    swipeable?: boolean | 'force' | undefined;
    swipePop?: (() => void) | undefined;
    swipeTargetWidth?: number | undefined;
    animation?: NavigatorAnimationTypes | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPrePush(): void;
    onPostPush(): void;
    onPrePop(): void;
    onPostPop(): void;
    onDeviceBackButton(): void;
}

export class RouterNavigator extends Component<RouterNavigatorProps, any> { }

// https://github.com/OnsenUI/OnsenUI/blob/master/bindings/react/src/RouterUtil.js
export type Route = any;
export type RouterProcess = object; // incomplete

export interface RouteConfig {
    routeStack: Route[];
    processStack: RouterProcess[];
}

export const RouterUtil: {
    init: (routes: Route[]) => RouteConfig;
    replace: (config: { routeConfig: RouteConfig; route: Route; options?: any; key?: any }) => RouteConfig;
    reset: (config: { routeConfig: RouteConfig; route: Route; options?: any; key?: any }) => RouteConfig;
    push: (config: { routeConfig: RouteConfig; route: Route; options?: any; key?: any }) => RouteConfig;
    pop: (config: { routeConfig: RouteConfig; options?: any; key?: any }) => RouteConfig;
    postPush: (routeConfig: RouteConfig) => RouteConfig;
    postPop: (routeConfig: RouteConfig) => RouteConfig;
};

/*** Carousel ***/
export interface CarouselProps extends PropsWithChildren {
    direction?: 'horizontal' | 'vertical' | undefined;
    fullscreen?: boolean | undefined;
    overscrollable?: boolean | undefined;
    centered?: boolean | undefined;
    itemWidth?: number | string | undefined;
    itemHeight?: number | string | undefined;
    autoScroll?: boolean | undefined;
    autoScrollRatio?: number | undefined;
    swipeable?: boolean | undefined;
    disabled?: boolean | undefined;
    activeIndex?: number | undefined;
    /**
     * @deprecated use activeIndex instead
     */
    index?: number | undefined;
    autoRefresh?: boolean | undefined;
    onPreChange?(): void;
    onPostChange?(): void;
    onRefresh?(): void;
    onOverscroll?(): void;
    onSwipe?(): void;
    animation?: 'none' | undefined;
    animationOptions?: AnimationOptions | undefined;
}

export class Carousel extends Component<CarouselProps, any> { }

export interface CarouselItemProps extends PropsWithModifier, PropsWithChildren { }

export class CarouselItem extends Component<CarouselItemProps, any> { }

/*** AlertDialog ***/
export interface AlertDialogProps extends PropsWithModifier, PropsWithChildren {
    /**
     * @deprecated use onDialogCancel instead
     */
    onCancel?(): void;
    onDialogCancel?(): void;
    /**
     * @deprecated use visible instead
     */
    isOpen?: boolean | undefined;
    visible?: boolean | undefined;
    /**
     * @deprecated use cancelable instead
     */
    isCancelable?: boolean | undefined;
    cancelable?: boolean | undefined;
    /**
     * @deprecated use disabled instead
     */
    isDisabled?: boolean | undefined;
    disabled?: boolean | undefined;
    animation?: 'none' | 'default' | undefined;
    maskColor?: string | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    onDeviceBackButton?(): void;
}

export class AlertDialog extends Component<AlertDialogProps, any> { }

export interface AlertDialogButtonProps extends PropsWithModifier, PropsWithChildren {
    onClick?(): void;
    disabled?: boolean | undefined;
}

export class AlertDialogButton extends Component<AlertDialogButtonProps, any> { }

export interface DialogProps extends PropsWithModifier, PropsWithChildren {
    /**
     * @deprecated use onDialogCancel instead
     */
    onCancel?(): void;
    onDialogCancel?(): void;
    /**
     * @deprecated use visible instead
     */
    isOpen?: boolean | undefined;
    visible?: boolean | undefined;
    /**
     * @deprecated use cancelable instead
     */
    isCancelable?: boolean | undefined;
    cancelable?: boolean | undefined;
    /**
     * @deprecated use disabled instead
     */
    isDisabled?: boolean | undefined;
    disabled?: boolean | undefined;
    animation?: 'none' | 'default' | undefined;
    maskColor?: string | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    onDeviceBackButton?(): void;
}

export class Dialog extends Component<DialogProps, any> { }

export interface ModalProps extends PropsWithChildren {
    animation?: 'fade' | 'lift' | 'none' | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    /**
     * @deprecated use visible instead
     */
    isOpen?: boolean | undefined;
    visible?: boolean | undefined;
    onDeviceBackButton?(): void;
}

export class Modal extends Component<ModalProps, any> { }

export interface PopoverProps extends PropsWithModifier {
    getTarget(): React.ReactInstance;
    /**
     * @deprecated use onDialogCancel instead
     */
    onCancel?(): void;
    onDialogCancel?(): void;
    isOpen?: boolean | undefined;
    /**
     * @deprecated use cancelable instead
     */
    isCancelable?: boolean | undefined;
    cancelable?: boolean | undefined;
    /**
     * @deprecated use disabled instead
     */
    isDisabled?: boolean | undefined;
    disabled?: boolean | undefined;
    animation?: 'none' | 'default' | undefined;
    maskColor?: string | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    onDeviceBackButton?(): void;
}

export class Popover extends Component<PopoverProps, any> { }

export type ToastAnimation = 'default' | 'ascend' | 'lift' | 'fall' | 'fade' | 'none';

export interface ToastProps extends PropsWithModifier, PropsWithChildren {
    /**
     * @deprecated use visible instead
     */
    isOpen: boolean;
    visible: boolean;
    animation?: ToastAnimation | undefined;
    animationOptions?: AnimationOptions | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    onDeviceBackButton?(): void;
}

export class Toast extends Component<ToastProps, any> { }

export interface ActionSheetProps extends PropsWithModifier {
    /**
     * @deprecated use onDialogCancel instead
     */
    onCancel?(): void;
    onDialogCancel?(): void;
    /**
     * @deprecated use visible instead
     */
    isOpen?: boolean | undefined;
    visible?: boolean | undefined;
    /**
     * @deprecated use cancelable instead
     */
    isCancelable?: boolean | undefined;
    cancelable?: boolean | undefined;
    /**
     * @deprecated use disabled instead
     */
    isDisabled?: boolean | undefined;
    disabled?: boolean | undefined;
    animation?: 'none' | 'default' | undefined;
    maskColor?: string | undefined;
    animationOptions?: {} | undefined;
    title?: string | undefined;
    onPreShow?(): void;
    onPostShow?(): void;
    onPreHide?(): void;
    onPostHide?(): void;
    onDeviceBackButton?(): void;
}

export class ActionSheet extends Component<ActionSheetProps, any> { }

export interface ActionSheetButtonProps extends PropsWithModifier, PropsWithChildren {
    icon?: string | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void;
}

export class ActionSheetButton extends Component<ActionSheetButtonProps, any> { }

export interface ProgressBarProps extends PropsWithModifier {
    value?: number | undefined;
    secondaryValue?: number | undefined;
    indeterminate?: boolean | undefined;
}

export class ProgressBar extends Component<ProgressBarProps, any> { }

export interface ProgressCircularProps extends PropsWithModifier {
    value?: number | undefined;
    secondaryValue?: boolean | undefined;
    indeterminate?: boolean | undefined;
}

export class ProgressCircular extends Component<ProgressCircularProps, any> { }

export interface RippleProps extends PropsWithModifier {
    color?: string | undefined;
    background?: string | undefined;
    disabled?: boolean | undefined;
    center?: boolean | undefined;
    size?: 'cover' | 'contain' | undefined;
}

export class Ripple extends Component<RippleProps, any> { }

/*** Forms ***/
export interface FabProps extends PropsWithModifier, PropsWithChildren {
    ripple?: boolean | undefined;
    position?: string | undefined;
    disabled?: boolean | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void;
    name?: string | undefined;
}

export class Fab extends Component<FabProps, any> { }

export interface ButtonProps extends PropsWithModifier, PropsWithChildren {
    disabled?: boolean | undefined;
    ripple?: boolean | undefined;
    name?: string | undefined;
    onClick?(e?: React.MouseEvent<HTMLElement>): void;
}

export class Button extends Component<ButtonProps, any> { }

export interface InputProps extends InputHTMLAttributes<'min' | 'max' | 'step'>, PropsWithModifier {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined;
    onInput?: ((e: React.ChangeEvent<any>) => void) | undefined;
    onBlur?: ((e: React.FocusEvent<any>) => void) | undefined;
    onFocus?: ((e: React.FocusEvent<any>) => void) | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
    checked?: boolean | undefined;
    placeholder?: string | undefined;
    type?: string | undefined;
    inputId?: string | undefined;
    float?: boolean | undefined;
    name?: string | undefined;
    autoFocus?: boolean | undefined;
}

export class Input extends Component<InputProps, any> { }

export interface RadioProps extends PropsWithModifier {
    disabled?: boolean | undefined;
    onChange?(e: Event): void;
    value?: string | undefined;
    checked?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    inputId?: string | undefined;
    name?: string | undefined;
}

export class Radio extends Component<RadioProps, any> { }

export interface CheckboxProps extends PropsWithModifier {
    disabled?: boolean | undefined;
    onChange?(e: Event): void;
    onInput?(e: Event): void;
    value?: string | undefined;
    checked?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    inputId?: string | undefined;
    name?: string | undefined;
}

export class Checkbox extends Component<CheckboxProps, any> { }

export interface RangeProps extends PropsWithModifier {
    onChange?(e: Event): void;
    onInput?(e: Event): void;
    value?: number | undefined;
    defaultValue?: number | undefined;
    disabled?: boolean | undefined;
}

export class Range extends Component<RangeProps, any> { }

export interface SearchInputProps extends PropsWithModifier {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined;
    onInput?: ((e: React.ChangeEvent<any>) => void) | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
    inputId?: string | undefined;
}

export class SearchInput extends Component<SearchInputProps, any> { }

export interface SelectProps extends PropsWithModifier, PropsWithChildren {
    disabled?: boolean | undefined;
    onChange?: ((e: React.ChangeEvent<any>) => void) | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
    multiple?: boolean | undefined;
    autofocus?: boolean | undefined;
    required?: boolean | undefined;
    form?: string | undefined;
    size?: string | undefined;
    name?: string | undefined;
}

export class Select extends Component<SelectProps, any> { }

export interface SwitchProps extends PropsWithModifier {
    onChange?(e: SwitchChangeEvent): void;
    checked?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    inputId?: string | undefined;
    name?: string | undefined;
    autoFocus?: boolean | undefined;
}

export class Switch extends Component<SwitchProps, any> { }

/**
 * Tabs
 */
export interface TabProps {
    label?: string | undefined;
    icon?: IconProps['icon'];
    activeIcon?: IconProps['icon'];
    badge?: string | undefined;
}

export class Tab extends Component<TabProps> { }

export interface TabbarRenderTab {
    content: JSX.Element;
    tab: JSX.Element;
}

export interface TabbarChangeEvent extends Event {
    index: number;
    activeIndex: number;
    lastActiveIndex: number;
    swipe: boolean;
}

export interface TabbarProps extends PropsWithModifier {
    /**
     * @deprecated use activeIndex instead
     */
    index?: number;
    activeIndex: number;
    renderTabs(index: number, tabbar: Tabbar): TabbarRenderTab[];
    position?: 'bottom' | 'top' | 'auto' | undefined;
    swipeable?: boolean | undefined;
    ignoreEdgeWidth?: number | undefined;
    animation?: 'none' | 'slide' | undefined;
    animationOptions?: AnimationOptions | undefined;
    tabBorder?: boolean | undefined;
    hideTabs?: boolean | undefined;
    /**
     * @deprecated use hideTabs instead
     */
    visible?: boolean | undefined;
    onPreChange?(e: TabbarChangeEvent): void;
    onPostChange?(e: TabbarChangeEvent): void;
    onReactive?(): void;
    onSwipe?(index: number, animationOptions: AnimationOptions): void;
}

export class Tabbar extends Component<TabbarProps, any> { }

/**
 * Lists
 */

export interface LazyListProps extends PropsWithModifier {
    length?: number | undefined;
    renderRow(rowIndex: number): any;
    calculateItemHeight(rowIndex: number): any;
}

export class LazyList extends Component<LazyListProps, any> { }

export interface ListProps<T> extends PropsWithModifier {
    dataSource?: T[] | undefined;
    renderRow?(row: T, index?: number): JSX.Element | undefined;
    renderFooter?(): JSX.Element | undefined;
    renderHeader?(): JSX.Element | undefined;
}

export class List<T> extends Component<ListProps<T>, any> { }

export interface ListHeaderProps extends PropsWithModifier, PropsWithChildren { }

export class ListHeader extends Component<ListHeaderProps, any> { }

export interface ListItemProps extends PropsWithModifier, PropsWithChildren {
    tappable?: boolean | undefined;
    tapBackgroundColor?: string | undefined;
    lockOnDrag?: boolean | undefined;
    expandable?: boolean | undefined;
    expanded?: boolean | undefined;
    onClick?: React.MouseEventHandler<any> | undefined;
}

export class ListItem extends Component<ListItemProps, any> { }

export interface ListTitleProps extends PropsWithModifier, PropsWithChildren {
    onClick?: React.MouseEventHandler<any> | undefined;
}

export class ListTitle extends Component<ListTitleProps, any> { }

export interface CardProps extends PropsWithModifier, PropsWithChildren { }

export class Card extends Component<CardProps, any> { }

/**
 * Controls
 */

/** Pull-to-refresh hook. */
export interface PullHookProps extends PropsWithChildren {
    /**
     * @deprecated use onChangeState instead
     */
    onChange?(e: PullHookChangeEvent): void;
    onChangeState?(e: PullHookChangeEvent): void;
    /**
     * @deprecated use onAction instead
     */
    onLoad?(done: () => void): void;
    onAction?(done: () => void): void;
    onPull?(): void;
    disabled?: boolean | undefined;
    height?: number | undefined;
    thresholdHeight?: number | undefined;
    fixedContent?: boolean | undefined;
}

export class PullHook extends Component<PullHookProps, any> { }

export interface SegmentProps extends PropsWithModifier, PropsWithChildren {
    /**
     * @deprecated use activeIndex instead
     */
    index?: number | undefined;
    activeIndex?: number | undefined;
    tabbarId?: string | undefined;
    onPostChange?(): void;
}

export class Segment extends Component<SegmentProps, any> { }

export type SpeedDialPosition =
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top right'
    | 'top left'
    | 'bottom right'
    | 'bottom left';
export type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';

export interface SpeedDialProps extends PropsWithModifier, PropsWithChildren {
    position?: SpeedDialPosition | undefined;
    direction?: SpeedDialDirection | undefined;
    disabled?: boolean | undefined;
}

export class SpeedDial extends Component<SpeedDialProps, any> { }

export interface SpeedDialItemProps extends PropsWithModifier, PropsWithChildren {
    onClick?(e?: React.MouseEvent<HTMLElement>): void;
}

export class SpeedDialItem extends Component<SpeedDialItemProps, any> { }
