import type { Component, CSSProperties, FC, HTMLAttributes, JSX, ReactNode } from "react";

declare namespace ReactUserTour {
    interface TourStep {
        /**
         * Index number of the step in the tour
         */
        step: number;
        /**
         * CSS selector to be passed to document.querySelector()
         */
        selector: string;
        /**
         * A react element representing the header of the current step
         */
        title: string | JSX.Element;
        /**
         * A react element representing the main body message of the tour step
         */
        body: string | JSX.Element;
        /**
         * Optional properties horizontalOffset and verticalOffset values allow to move tooltip around pointed element.
         */
        horizontalOffset?: number | undefined;
        /**
         * Optional properties horizontalOffset and verticalOffset values allow to move tooltip around pointed element.
         */
        verticalOffset?: number | undefined;
        /**
         * Each step can also take an optional argument, position which will override the position of the tour component in relation to the selector that is determined by the application.
         */
        position?: "left" | "right" | "top" | "topLeft" | "bottom" | "bottomLeft" | undefined;
    }

    interface TourProps {
        /**
         * A boolean value representing whether or not the tour should currently be displayed
         */
        active: boolean;
        /**
         * An integer representing the current active step of the tour
         */
        step: number;
        /**
         * Function that fires when user clicks the Next button.
         * Receives the next step integer as a callback.
         * For example, if current step is 1 and user clicks the Next button, onNext(2) will be called.
         *
         * @default () => {}
         */
        onNext?: ((step: number) => void) | undefined;
        /**
         * Function that fires when user clicks the Back button.
         * Receives the previous step integer as a callback.
         * For example, if current step is 2 and user clicks the Back button, onBack(1) will be called.
         *
         * @default () => {}
         */
        onBack?: ((step: number) => void) | undefined;
        /**
         * Function that fires when user clicks the X button or the Done Button.
         *
         * @default () => {}
         */
        onCancel?: (() => void) | undefined;
        /**
         * An array of TourStep.
         */
        steps: TourStep[];
        /**
         * Optional style object.
         *
         * @default { height: 150, width: 350, position: "absolute", zIndex: 9999, backgroundColor: "#fff", color: "#494949", boxShadow: "0 6px 8px 0 rgba(0, 0, 0, 0.24)" }
         */
        style?: Omit<CSSProperties, "transform"> | undefined;
        /**
         * Optional style object for the top level component container.
         *
         * @default {}
         */
        containerStyle?: CSSProperties | undefined;
        /**
         * Optional style object for buttons displayed on component.
         */
        buttonStyle?: CSSProperties | undefined;
        /**
         * Optional style object for the container div around the buttons.
         *
         * @default { position: "absolute", bottom: 10, right: 0 }
         */
        buttonContainerStyle?: CSSProperties | undefined;
        /**
         * We provide an arrow that points to the selector,
         * but you may optionally pass in your own React element in the place of the arrow provided.
         */
        arrow?:
            | FC<{
                position?: string | undefined;
                width?: number | undefined;
                height?: number | undefined;
                size?: number | undefined;
                color?: string | undefined;
            }>
            | undefined;
        /**
         * If you choose to use the provided arrow, you can set the pixel size here with an integer value.
         *
         * @default 15
         */
        arrowSize?: number | undefined;
        /**
         * If you choose to use the provided arrow, you can set the color here by passing in a hex value.
         *
         * @default "#fff"
         */
        arrowColor?: string | undefined;
        /**
         * Text that will appear on the button that moves the tour forward.
         *
         * @default "Next"
         */
        nextButtonText?: string | undefined;
        /**
         * Text that will appear on the button that moves the tour backwards.
         *
         * @default "Back"
         */
        backButtonText?: string | undefined;
        /**
         * Text that will appear on the button that finishes the tour.
         *
         * @default "Done"
         */
        doneButtonText?: string | undefined;
        /**
         * Text that will appear on the button that closes the tour.
         *
         * @default "Close"
         */
        closeButtonText?: string | undefined;
        /**
         * Boolean to disable the showing of next/back/done buttons.
         * Set this to true if you want to insert your own buttons in the body.
         *
         * @default false
         */
        hideButtons?: boolean | undefined;
        /**
         * Boolean to disable the showing of the close text in the upper left of the component.
         * Set this to true if you want to insert your own close functionality
         * or if you would like to disable the ability for the user to prematurely exit the tour.
         *
         * @default false
         */
        hideClose?: boolean | undefined;
    }
}

declare class ReactUserTour extends Component<ReactUserTour.TourProps> {}

export = ReactUserTour;
