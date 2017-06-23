// Type definitions for react-spinkit 3.0.0
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>, Mleko <https://github.com/mleko>, Tom Crockett <https://github.com/pelotom>, zzanol <https://github.com/zzanol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

declare namespace spinner {
	export interface SpinnerProps {
        /**
         * Specify spinner to use. Defaults to three-bounce
         */
        name?: 'three-bounce' | 'double-bounce' | 'rotating-plane' | 'folding-cube' | 'wave' | 'wandering-cubes' | 'pulse' | 'chasing-dots' | 'circle' | 'cube-grid' | 'wordpress';
        /**
         * Set the time before the spinner fades in
         */
        fadeIn?: string;
        /**
         * Change the default sk-spinner className
         */
        overrideSpinnerClassName?: string;
        /**
         * Add a custom classname to the outer div
         */
        className?: string;
				/**
				* Programmatically set the color of the spinners; this can either be a hex value or a color word
				*/
				color?: string;
	}

	export interface Spinner extends React.ComponentClass<SpinnerProps> {
	}
}

declare const spinner: spinner.Spinner;
export = spinner;
