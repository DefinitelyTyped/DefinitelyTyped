// Type definitions for react-swipeable-views-utils 0.13
// Project: https://github.com/oliviertassinari/react-swipeable-views#react-swipeable-views
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { ConsistentWith, Omit, PropInjector } from '@material-ui/types';
import { OnChangeIndexCallback, OnSwitchingCallback } from 'react-swipeable-views';

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

export const autoPlay: PropInjector<WithAutoPlay, WithAutoPlayProps>;
