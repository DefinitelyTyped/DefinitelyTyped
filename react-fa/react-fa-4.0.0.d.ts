// Type definitions for react-fa v4.0.0
// Project: https://github.com/andreypopp/react-fa
// Definitions by: Frank Laub <https://github.com/flaub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-fa" {
	import { ComponentClass, Props } from 'react';

	interface IconProps extends Props<Icon> {
		name: string;
		className?: string;
		size?: string;
		spin?: boolean;
		rotate?: string;
		flip?: string;
		fixedWidth?: boolean;
		pulse?: boolean;
		stack?: string;
		inverse?: boolean;
	}

	interface Icon extends ComponentClass<IconProps> { }
	const Icon: Icon;

	export = Icon;
}
