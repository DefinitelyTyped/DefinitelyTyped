// Type definitions for react-navigation-fluid-transitions 0.2
// Project: https://github.com/fram-x/FluidTransitions#readme
// Definitions by: LFSCamargo <https://github.com/LFSCamargo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\
// TypeScript Version: 2.8

import {
    NavigationRouteConfig,
    StackNavigatorConfig,
    NavigationContainer
} from "react-navigation";
import * as React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

export type TransitionEnum =
    | "scale"
    | "bottom"
    | "top"
    | "left"
    | "right"
    | "horizontal"
    | "vertical"
    | "flip";

export interface TransitionProps {
    appear?: TransitionEnum;
    disappear?: TransitionEnum;
    anchor?: string;
    delay?: boolean;
    animated?: string;
    shared?: string;
}

export interface Metrics {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
}

export class Transition extends React.Component<TransitionProps, any> {}

export interface TransitionInfo {
    progress: Animated.Value;
    metrics: Metrics;
    boundingbox: Metrics;
    name: string;
    start: number;
    route: string;
    end: number;
    dimensions: Dimensions;
}

export function FluidNavigator(
    routeConfig: NavigationRouteConfig,
    stachConfig?: StackNavigatorConfig
): NavigationContainer;
