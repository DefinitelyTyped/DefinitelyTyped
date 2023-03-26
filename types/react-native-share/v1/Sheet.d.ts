import { Component, ReactNode } from 'react';
import { Animated, ViewProps } from 'react-native';

import { JSX } from "react";

export interface SheetProps {
    visible: boolean;
    children: ReactNode;
}

export interface SheetState {
    bottom: Animated.Value;
}

declare class Sheet extends Component<SheetProps, SheetState> {
    UNSAFE_componentWillReceiveProps(newProps: SheetProps): void;
    render(): JSX.Element;
}

export default Sheet;
