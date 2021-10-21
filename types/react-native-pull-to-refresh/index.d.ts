// Type definitions for react-native-pull-to-refresh 2.1
// Project: https://github.com/moschan/react-native-pull-to-refresh#readme
// Definitions by: euZebe <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface PTRViewProps {
    children?: React.ReactNode;
    onRefresh?: (() => any) | undefined;
    delay?: number | undefined; // default O
    style?: object | undefined;

    // iOS only
    offset?: number | undefined; // default 80

    // android only
    colors?: string | undefined; // default #000
    progressBackgroundColor?: string | undefined; // default transparent
}

export default class PTRView extends React.Component<PTRViewProps, any> {}
