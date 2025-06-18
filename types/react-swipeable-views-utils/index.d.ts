import { PropInjector } from "@material-ui/types";
import * as React from "react";
import { OnChangeIndexCallback, OnSwitchingCallback, OnTransitionEndCallback } from "react-swipeable-views";

export interface WithIndex {
    index?: number;
    onChangeIndex?: OnChangeIndexCallback;
}

export interface WithAutoPlay extends WithIndex {
    onSwitching?: OnSwitchingCallback | undefined;
}
export interface WithAutoPlayProps extends WithIndex {
    autoplay?: boolean | undefined;
    direction?: "incremental" | "decremental" | undefined;
    interval?: number | undefined;
    slideCount?: number | undefined;
}

export interface WithVirtualize extends WithIndex {
    slideRenderer: (render: SlideRendererCallback) => React.ReactNode;
}
export interface WithVirtualizeProps extends WithIndex {
    onTransitionEnd?: OnTransitionEndCallback | undefined;
    overscanSlideAfter?: number | undefined;
    overscanSlideBefore?: number | undefined;
    slideCount?: number | undefined;
    children?: React.ReactNode | undefined;
    slideRenderer: SlideRendererCallback;
}
export interface SlideRenderProps {
    index: number;
    key: number;
}

export type WithBindKeyboard = WithIndex;

export interface WithBindKeyboardProps extends WithIndex {
    axis?: "x" | "x-reverse" | "y" | "y-reverse" | undefined;
    slidecount?: number | undefined;
}

export const autoPlay: PropInjector<WithAutoPlay, WithAutoPlayProps>;
export type SlideRendererCallback = (render: SlideRenderProps) => React.ReactNode;
export const virtualize: PropInjector<WithVirtualize, WithVirtualizeProps>;
export const bindKeyboard: PropInjector<WithBindKeyboard, WithBindKeyboardProps>;
