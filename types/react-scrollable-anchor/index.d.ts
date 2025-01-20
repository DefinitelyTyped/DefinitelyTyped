import * as React from "react";

export interface ScrollableAnchorProps {
    id: string;
    children?: React.ReactNode | undefined;
}

export interface ConfigureAnchorsOptions {
    offset?: number | undefined;
    scrollDuration?: number | undefined;
    keepLastAnchorHash?: boolean | undefined;
}

export default class ScrollableAnchor extends React.Component<ScrollableAnchorProps> {}
export function goToTop(): void;
export function configureAnchors(options: ConfigureAnchorsOptions): void;
export function goToAnchor(anchorId: string, saveHashUpdate?: boolean): void;
export function removeHash(): void;
