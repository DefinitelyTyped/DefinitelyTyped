/// <reference types='react' />

declare module "react-user-tour" {
    // Import React
    import { ComponentClass, HTMLAttributes } from "react";

    interface TourStep {
        /**
        Index number of the step in the tour
        */
        step: number;
        /**
        CSS selector to be passed to document.querySelector()
        */
        selector: string;
        /**
        a react element representing the header of the current step
        */
        title: string | JSX.Element;
        /**
        a react element representing the main body message of the tour step
        */
        body: string | JSX.Element;
        /**
        Optional properties horizontalOffset and verticalOffset values allow to move tooltip around pointed element.
        */
        horizontalOffset?: number | undefined;
        /**
        Optional properties horizontalOffset and verticalOffset values allow to move tooltip around pointed element.
        */
        verticalOffset?: number | undefined;
        /**
        Each step can also take an optional argument, position which will override the position of the tour component in relation to the selector that is determined by the application.
        */
        position?: "left" | "right" | "top" | "topLeft" | "bottom" | "bottomLeft" | undefined;
    }

    interface TourProps extends HTMLAttributes<any> {
        /**
        A boolean value representing whether or not the tour should currently be displayed
        */
        active: boolean;
        /**
        An integer representing the current active step of the tour
        */
        step: number;
        /**
        function that fires when user clicks the Next button.
        Receives the next step integer as a callback.
        For example, if current step is 1 and user clicks the Next button, onNext(2) will be called.
        */
        onNext: Function;
        /**
        function that fires when user clicks the Back button.
        Receives the previous step integer as a callback.
        For example, if current step is 2 and user clicks the Back button, onBack(1) will be called.
        */
        onBack: Function;
        /**
        function that fires when user clicks the X button or the Done Button.
        */
        onCancel: Function;
        /**
        An array of TourStep.
        */
        steps: TourStep[];
        /**
        Optional style object.
        */
        style?: any;
        /**
        Optional style object for buttons displayed on component.
        */
        buttonStyle?: any;
        /**
        Optional style object for the container div around the buttons.
        */
        buttonContainerStyle?: any;
        /**
        We provide an arrow that points to the selector, but you may optionally pass in your own React element in the place of the arrow provided.
        */
        arrow?: any;
        /**
        If you choose to use the provided arrow, you can set the pixel size here with an integer value.
        */
        arrowSize?: number | undefined;
        /**
        If you choose to use the provided arrow, you can set the color here by passing in a hex value.
        */
        arrowColor?: string | undefined;
        /**
        Text that will appear on the button that moves the tour forward.
        Defaults to Next
        */
        nextButtonText?: string | undefined;
        /**
        Text that will appear on the button that moves the tour backwards.
         Defaults to Back
        */
        backButtonText?: string | undefined;
        /**
        Text that will appear on the button that finishes the tour.
        Defaults to Done
        */
        doneButtonText?: string | undefined;
        /**
        Text that will appear on the button that closes the tour.
        Defaults to Close
        */
        closeButtonText?: string | undefined;
        /**
        Boolean to disable the showing of next/back/done buttons.
        Set this to true if you want to insert your own buttons in the body.
        */
        hideButtons?: boolean | undefined;
        /**
        Boolean to disable the showing of the close text in the upper left of
        the component. Set this to true if you want to insert your own close
        functionality or if you would like to disable the ability for the user
        to prematurely exit the tour.
        */
        hideClose?: boolean | undefined;
    }

    var ReactUserTour: ComponentClass<TourProps>;
    export default ReactUserTour;
}
