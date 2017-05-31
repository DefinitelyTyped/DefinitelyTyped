// Type definitions for react-loader v2.4
// Project: https://github.com/CognizantStudio/react-loader
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-loader' {
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

	class ReactLoader extends Component<LoaderProps, any>  {
	}

	namespace ReactLoader {
	}

	export = ReactLoader;
}
