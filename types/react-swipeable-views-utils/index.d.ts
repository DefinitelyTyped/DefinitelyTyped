// Type definitions for react-swipeable-views-utils 0.13
// Project: https://github.com/oliviertassinari/react-swipeable-views#react-swipeable-views
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
//                 Robert Nisipeanu <https://github.com/robertnisipeanu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { ConsistentWith, Omit, PropInjector } from '@material-ui/types';
import { OnChangeIndexCallback, OnSwitchingCallback, OnTransitionEndCallback } from 'react-swipeable-views';

export interface WithAutoPlay {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    onSwitching?: OnSwitchingCallback | undefined;
}
export interface WithAutoPlayProps {
    autoplay?: boolean | undefined;
    direction?: 'incremental' | 'decremental' | undefined;
    index: number;
    interval?: number | undefined;
    onChangeIndex: OnChangeIndexCallback;
    slideCount?: number | undefined;
}

export interface WithVirtualize {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    slideRenderer: (render: SlideRendererCallback) => React.ReactNode;
}
export interface WithVirtualizeProps {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
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

export interface WithBindKeyboard {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
}
export interface WithBindKeyboardProps {
    axis?: "x" | "x-reverse" | "y" | "y-reverse" | undefined;
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    slidecount?: number | undefined;
}

export const autoPlay: PropInjector<WithAutoPlay, WithAutoPlayProps>;
export type SlideRendererCallback = (render: SlideRenderProps) => React.ReactNode;
export const virtualize: PropInjector<WithVirtualize, WithVirtualizeProps>;
export const bindKeyboard: PropInjector<WithBindKeyboard, WithBindKeyboardProps>;
