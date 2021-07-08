// Type definitions for react-native-read-more-text 1.0
// Project: https://github.com/expo/react-native-read-more-text
// Definitions by: Jeff Held <https://github.com/solkaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReadMoreProps {
    children: React.ReactNode;
    numberOfLines: number;
    onReady?: (() => void) | undefined;
    renderRevealedFooter: (onPress: () => void) => React.ReactNode;
    renderTruncatedFooter: (onPress: () => void) => React.ReactNode;
}

export default class ReadMore extends React.Component<ReadMoreProps> {}
