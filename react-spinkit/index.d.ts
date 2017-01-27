// Type definitions for react-spinkit 1.1.4
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>, Mleko <https://github.com/mleko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

declare namespace ReactSpinkit {
	interface Props {
		spinnerName?: string;
	}

	interface Spinner extends React.ComponentClass<Props> { }
}
declare module "react-spinkit" {
	var spinner: ReactSpinkit.Spinner;
	export = spinner;
}


