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
    onSwitching?: OnSwitchingCallback;
}
export interface WithAutoPlayProps {
    autoplay?: boolean;
    direction?: 'incremental' | 'decremental';
    index: number;
    interval?: number;
    onChangeIndex: OnChangeIndexCallback;
    slideCount?: number;
}

export interface WithVirtualize {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    slideRenderer: (render: SlideRendererCallback) => React.ReactNode;
}
export interface WithVirtualizeProps {
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    onTransitionEnd?: OnTransitionEndCallback;
    overscanSlideAfter?: number;
    overscanSliedBefore?: number;
    slideCount?: number;
    children?: React.ReactNode;
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
    axis?: "x" | "x-reverse" | "y" | "y-reverse";
    index: number;
    onChangeIndex: OnChangeIndexCallback;
    slidecount?: number;
}

export const autoPlay: PropInjector<WithAutoPlay, WithAutoPlayProps>;
export type SlideRendererCallback = (render: SlideRenderProps) => React.ReactNode;
export const virtualize: PropInjector<WithVirtualize, WithVirtualizeProps>;
export const bindKeyboard: PropInjector<WithBindKeyboard, WithBindKeyboardProps>;
