// Type definitions for react-native-elevated-view 0.0
// Project: https://github.com/alekhurst/react-native-elevated-view
// Definitions by: fhelwanger <https://github.com/fhelwanger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactNative from 'react-native';

export interface ElevatedViewProperties extends ReactNative.ViewProps {
    elevation?: number;
}

export default class ElevatedView extends React.Component<ElevatedViewProperties> {}
