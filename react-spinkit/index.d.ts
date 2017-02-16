// Type definitions for react-spinkit 1.1.4
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>, Mleko <https://github.com/mleko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

declare namespace spinner {
	export interface SpinnerProps {
		spinnerName?: string;
	}

	export interface Spinner extends React.ComponentClass<SpinnerProps> {
	}
}

declare const spinner: spinner.Spinner;
export = spinner;
