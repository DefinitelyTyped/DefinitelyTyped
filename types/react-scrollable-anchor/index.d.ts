// Type definitions for react-scrollable-anchor 0.6
// Project: https://github.com/gabergg/react-scrollable-anchor
// Definitions by: Antoine DOUBOVETZKY <https://github.com/AntoineDoubovetzky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ScrollableAnchorProps {
  id: string;
  children?: React.ReactNode;
}

export interface ConfigureAnchorsOptions {
  offset?: number;
  scrollDuration?: number;
  keepLastAnchorHash?: boolean;
}

export default class ScrollableAnchor extends React.Component<ScrollableAnchorProps> { }
export function goToTop(): void;
export function configureAnchors(options: ConfigureAnchorsOptions): void;
export function goToAnchor(anchorId: string, saveHashUpdate?: boolean): void;
export function removeHash(): void;
