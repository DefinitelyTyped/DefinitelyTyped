import * as React from 'react';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { Route } from '../../../native';
import type { Layout, StackHeaderStyleInterpolator, StackHeaderTitleProps, StackHeaderOptions, Scene } from '../../types';
declare type Props = StackHeaderOptions & {
    headerTitle: (props: StackHeaderTitleProps) => React.ReactNode;
    layout: Layout;
    insets: EdgeInsets;
    onGoBack?: () => void;
    title?: string;
    leftLabel?: string;
    scene: Scene<Route<string>>;
    styleInterpolator: StackHeaderStyleInterpolator;
};
export declare const getDefaultHeaderHeight: (layout: Layout, statusBarHeight: number) => number;
export default function HeaderSegment(props: Props): JSX.Element;
export {};
