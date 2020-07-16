// Type definitions for react-native-snackbar-components 1.1
// Project: https://github.com/sidevesh/react-native-snackbar
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { TextStyle } from 'react-native';

export interface SnackbarComponentProps {
    accentColor?: string;
    actionText?: string;
    messageColor?: string;
    backgroundColor?: string;
    distanceCallback?: () => void;
    actionHandler?: () => void;
    left?: number;
    right?: number;
    bottom?: number;
    position?: string;
    textMessage?: string;
    autoHidingTime?: number;
    visible?: boolean;
}

export default class SnackbarComponent extends React.Component<SnackbarComponentProps> {}
