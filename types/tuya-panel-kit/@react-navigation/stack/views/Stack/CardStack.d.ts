import * as React from 'react';
import { Animated } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { ParamListBase, Route, StackNavigationState } from '../../../native';
import type { Props as HeaderContainerProps } from '../Header/HeaderContainer';
import type { Layout, StackHeaderMode, StackCardMode, Scene, StackDescriptorMap } from '../../types';
declare type GestureValues = {
    [key: string]: Animated.Value;
};
declare type Props = {
    mode: StackCardMode;
    insets: EdgeInsets;
    state: StackNavigationState<ParamListBase>;
    descriptors: StackDescriptorMap;
    routes: Route<string>[];
    openingRouteKeys: string[];
    closingRouteKeys: string[];
    onOpenRoute: (props: {
        route: Route<string>;
    }) => void;
    onCloseRoute: (props: {
        route: Route<string>;
    }) => void;
    getPreviousRoute: (props: {
        route: Route<string>;
    }) => Route<string> | undefined;
    getGesturesEnabled: (props: {
        route: Route<string>;
    }) => boolean;
    renderHeader: (props: HeaderContainerProps) => React.ReactNode;
    renderScene: (props: {
        route: Route<string>;
    }) => React.ReactNode;
    headerMode: StackHeaderMode;
    isParentHeaderShown: boolean;
    onTransitionStart: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onTransitionEnd: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onPageChangeStart?: () => void;
    onPageChangeConfirm?: () => void;
    onPageChangeCancel?: () => void;
    onGestureStart?: (props: {
        route: Route<string>;
    }) => void;
    onGestureEnd?: (props: {
        route: Route<string>;
    }) => void;
    onGestureCancel?: (props: {
        route: Route<string>;
    }) => void;
    detachInactiveScreens?: boolean;
};
declare type State = {
    routes: Route<string>[];
    descriptors: StackDescriptorMap;
    scenes: Scene<Route<string>>[];
    gestures: GestureValues;
    layout: Layout;
    headerHeights: Record<string, number>;
};
export default class CardStack extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: Props, state: State): {
        routes: Route<string, object | undefined>[];
        scenes: Scene<Route<string, object | undefined>>[];
        gestures: GestureValues;
        descriptors: StackDescriptorMap;
        headerHeights: Record<string, number>;
    } | null;
    constructor(props: Props);
    private handleLayout;
    private handleHeaderLayout;
    private getFocusedRoute;
    private getPreviousScene;
    render(): JSX.Element;
}
export {};
