// Type definitions for react-infinite
// Project: https://github.com/seatgeek/react-infinite
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "react-infinite" {
	import Infinite = ReactInfinite.Infinite;
	export = Infinite;
}

declare namespace ReactInfinite {
	import React = __React;

	interface InfiniteProps extends React.Props<Infinite> {
		elementHeight: number | number[];
		containerHeight?: number;
		preloadBatchSize?: number | Object;
		preloadAdditionalHeight?: number | Object;
		handleScroll?: (node: React.ReactElement<any>) => void;
		infiniteLoadBeginBottomOffset?: number;
		infiniteLoadBeginEdgeOffset?: number;
		onInfiniteLoad?: () => void;
		loadingSpinnerDelegate?: React.ReactElement<any>;
		isInfiniteLoading?: boolean;
		timeScrollStateLastsForAfterUserScrolls?: number;
		className?: string;
		useWindowAsScrollContainer?: boolean;
		displayBottomUpwards?: boolean;
	}

	export class Infinite extends React.Component<InfiniteProps, {}> {
		static containerHeightScaleFactor(n: number): any;
	}
}
