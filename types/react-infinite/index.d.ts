// Type definitions for react-infinite
// Project: https://github.com/seatgeek/react-infinite
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react" />

import * as React from "react";

export = Infinite;
export as namespace Infinite;

declare namespace Infinite {
	interface InfiniteProps extends React.Props<Infinite> {
		elementHeight: number | number[];
		containerHeight?: number;
		preloadBatchSize?: number | Object;
		preloadAdditionalHeight?: number | Object;
		handleScroll?: (node: React.ReactElement) => void;
		infiniteLoadBeginBottomOffset?: number;
		infiniteLoadBeginEdgeOffset?: number;
		onInfiniteLoad?: () => void;
		loadingSpinnerDelegate?: React.ReactElement;
		isInfiniteLoading?: boolean;
		timeScrollStateLastsForAfterUserScrolls?: number;
		className?: string;
		useWindowAsScrollContainer?: boolean;
		displayBottomUpwards?: boolean;
	}
}

declare class Infinite extends React.Component<Infinite.InfiniteProps> {
	static containerHeightScaleFactor(n: number): any;
}
