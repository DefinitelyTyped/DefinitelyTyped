// Type definitions for react-loader 2.4
// Project: https://github.com/quickleft/react-loader
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from 'react';

interface LoaderOptions {
	lines?: number;
	length?: number;
	width?: number;
	radius?: number;
	scale?: number;
	corners?: number;
	color?: string;
	opacity?: number;
	rotate?: number;
	direction?: number;
	speed?: number;
	trail?: number;
	fps?: number;
	zIndex?: number;
	top?: string;
	left?: string;
	shadow?: boolean;
	hwaccel?: boolean;
	position?: string;
	loadedClassName?: string;
}

interface LoaderProps extends LoaderOptions {
	loaded: boolean;
	options?: LoaderOptions;
	className?: string;
}

declare class ReactLoader extends Component<LoaderProps>  {
}

declare namespace ReactLoader {
}

export = ReactLoader;
