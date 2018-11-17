// Type definitions for react-navigation-fluid-transitions 0.2
// Project: https://github.com/fram-x/FluidTransitions#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\
// TypeScript Version: 2.8

// tslint:disable-next-line:no-single-declare-module
declare module "react-navigation-fluid-transitions" {
    import {
        NavigationRouteConfig,
        StackNavigatorConfig,
        NavigationContainer
    } from "react-navigation";
    import * as React from "react";
    import { Animated, Dimensions, StyleSheet } from "react-native";

    type TransitionEnum =
        | "scale"
        | "bottom"
        | "top"
        | "left"
        | "right"
        | "horizontal"
        | "vertical"
        | "flip";

    interface TransitionProps {
        appear?: TransitionEnum;
        disappear?: TransitionEnum;
        anchor?: string;
        delay?: boolean;
        animated?: string;
        shared?: string;
    }

    interface Metrics {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    }

    class Transition extends React.Component<TransitionProps, any> {}

    interface TransitionInfo {
        progress: Animated.Value;
        metrics: Metrics;
        boundingbox: Metrics;
        name: string;
        start: number;
        route: string;
        end: number;
        dimensions: Dimensions;
    }

    function FluidNavigator(
        routeConfig: NavigationRouteConfig,
        stachConfig?: StackNavigatorConfig
    ): NavigationContainer;
}
