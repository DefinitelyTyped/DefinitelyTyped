/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { Route } from '../../../native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { Layout, Scene, StackHeaderStyleInterpolator, GestureDirection } from '../../types';
export declare type Props = {
    mode: 'float' | 'screen';
    layout: Layout;
    insets: EdgeInsets;
    scenes: (Scene<Route<string>> | undefined)[];
    getPreviousScene: (props: {
        route: Route<string>;
    }) => Scene<Route<string>> | undefined;
    getFocusedRoute: () => Route<string>;
    onContentHeightChange?: (props: {
        route: Route<string>;
        height: number;
    }) => void;
    styleInterpolator: StackHeaderStyleInterpolator;
    gestureDirection: GestureDirection;
    style?: StyleProp<ViewStyle>;
};
export default function HeaderContainer({ mode, scenes, layout, insets, getPreviousScene, getFocusedRoute, onContentHeightChange, gestureDirection, styleInterpolator, style, }: Props): JSX.Element;
