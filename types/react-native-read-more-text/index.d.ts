import * as React from "react";

export interface ReadMoreProps {
    children: React.ReactNode;
    numberOfLines: number;
    onReady?: (() => void) | undefined;
    renderRevealedFooter: (onPress: () => void) => React.ReactNode;
    renderTruncatedFooter: (onPress: () => void) => React.ReactNode;
}

export default class ReadMore extends React.Component<ReadMoreProps> {}
