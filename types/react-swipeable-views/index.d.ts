import * as React from "react";

export type OnChangeIndexCallback = (index: number, indexLatest: number) => void;

export type OnTransitionEndCallback = () => void;

export type OnSwitchingCallback = (index: number, type: OnSwitchingCallbackTypeDescriptor) => void;

export type OnSwitchingCallbackTypeDescriptor = "move" | "end";

export type AxisType = "x" | "x-reverse" | "y" | "y-reverse";

export interface Actions {
    updateHeight: UpdateHeightAction;
}

export type ActionCallback = (actions: Actions) => void;

export type UpdateHeightAction = () => void;

export interface SpringConfig {
    duration: string;
    easeFunction: string;
    delay: string;
}

export interface SwipeableViewsProps extends Omit<React.HTMLProps<HTMLDivElement>, "action"> {
    animateHeight?: boolean | undefined;
    animateTransitions?: boolean | undefined;
    axis?: AxisType | undefined;
    containerStyle?: React.CSSProperties | undefined;
    disabled?: boolean | undefined;
    /*
     * This is the config used to disable lazy loading, if true it will render all the views in first rendering.
     */
    disableLazyLoading?: boolean | undefined;
    enableMouseEvents?: boolean | undefined;
    hysteresis?: number | undefined;
    ignoreNativeScroll?: boolean | undefined;
    index?: number | undefined;
    onChangeIndex?: OnChangeIndexCallback | undefined;
    onSwitching?: OnSwitchingCallback | undefined;
    onTransitionEnd?: OnTransitionEndCallback | undefined;
    resistance?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    slideStyle?: React.CSSProperties | undefined;
    springConfig?: SpringConfig | undefined;
    slideClassName?: string | undefined;
    threshold?: number | undefined;
    action?: ActionCallback;
}

export interface SwipeableViewsState {
    indexCurrent?: number | undefined;
    indexLatest?: number | undefined;
    isDragging?: boolean | undefined;
    isFirstRender?: boolean | undefined;
    heightLatest?: number | undefined;
    displaySameSlide?: boolean | undefined;
}

export default class SwipeableViews extends React.Component<SwipeableViewsProps, SwipeableViewsState> {}
