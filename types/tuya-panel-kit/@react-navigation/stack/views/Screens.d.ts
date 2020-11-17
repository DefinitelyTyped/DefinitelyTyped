import * as React from 'react';
import { Animated, ViewProps } from 'react-native';
export declare const shouldUseActivityState: any;
export declare const MaybeScreenContainer: ({ enabled, ...rest }: ViewProps & {
    enabled: boolean;
    children: React.ReactNode;
}) => JSX.Element;
export declare const MaybeScreen: ({ enabled, active, ...rest }: ViewProps & {
    enabled: boolean;
    active: 0 | 1 | 2 | Animated.AnimatedInterpolation;
    children: React.ReactNode;
}) => JSX.Element;
