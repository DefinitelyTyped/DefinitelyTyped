// Type definitions for react-native-pull-to-refresh 2.1
// Project: https://github.com/moschan/react-native-pull-to-refresh#readme
// Definitions by: euZebe <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface PTRViewProps {
    onRefresh?: () => any;
    delay?: number; // default O
    style?: object;

    // iOS only
    offset?: number; // default 80

    // android only
    colors?: string; // default #000
    progressBackgroundColor?: string; // default transparent
}

export default class PTRView extends React.Component<PTRViewProps, any> {}
