/// <reference types="react" />

declare namespace spinner {
    export interface SpinnerProps {
        /**
         * Specify spinner to use.
         */
        spinnerName?:
            | "three-bounce"
            | "double-bounce"
            | "rotating-plane"
            | "folding-cube"
            | "wave"
            | "wandering-cubes"
            | "pulse"
            | "chasing-dots"
            | "circle"
            | "cube-grid"
            | "wordpress"
            | undefined;
        /**
         * Disable the initial fade-in of the spinner.
         */
        noFadeIn?: boolean | undefined;
        /**
         * Change the default "spinner" className.
         */
        overrideSpinnerClassName?: string | undefined;
        /**
         * Component className.
         */
        className?: string | undefined;
    }

    export interface Spinner extends React.ComponentClass<SpinnerProps> {
    }
}

declare const spinner: spinner.Spinner;
export = spinner;
