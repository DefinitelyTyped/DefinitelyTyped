// Type definitions for react-native-snackbar-components 1.1
// Project: https://github.com/sidevesh/react-native-snackbar
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface SnackbarComponentProps {
    accentColor?: string | undefined;
    actionText?: string | undefined;
    messageColor?: string | undefined;
    backgroundColor?: string | undefined;
    distanceCallback?: (() => void) | undefined;
    actionHandler?: (() => void) | undefined;
    left?: number | undefined;
    right?: number | undefined;
    bottom?: number | undefined;
    position?: string | undefined;
    textMessage?: string | JSX.Element | undefined;
    autoHidingTime?: number | undefined;
    visible?: boolean | undefined;
}

export default class SnackbarComponent extends React.Component<SnackbarComponentProps> {}
