/// <reference types="jquery"/>

declare namespace JQuerySmartwizard {
    type TransitionAnimation = "none" | "fade" | "slide-horizontal" | "slide-vertical" | "slide-swing";
    type ToolbarPosition = "none" | "top" | "bottom" | "both";
    type ToolbarButtonPosition = "left" | "right" | "center";

    interface TransitionSettings {
        /**
         * Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
         *
         * @default 'none'
         */
        animation?: TransitionAnimation | undefined;
        /**
         * Transion animation speed
         *
         * @default '400'
         */
        speed?: string | undefined;
        /**
         * Transition animation easing. Not supported without a jQuery easing plugin
         *
         * @default ''
         */
        easing?: string | undefined;
    }

    interface ToolbarSettings {
        /**
         * @default 'bottom'
         */
        toolbarPosition?: ToolbarPosition | undefined;
        /**
         * @default 'right'
         */
        toolbarButtonPosition?: ToolbarButtonPosition | undefined;
        /**
         * show/hide a Next button
         *
         * @default true
         */
        showNextButton?: boolean | undefined;
        /**
         * show/hide a Previous button
         *
         * @default true
         */
        showPreviousButton?: boolean | undefined;
        /**
         * Extra buttons to show on toolbar, array of jQuery input/buttons elements
         *
         * @default []
         */
        toolbarExtraButtons?: JQuery[] | undefined;
    }

    interface AnchorSettings {
        /**
         * Enable/Disable anchor navigation
         *
         * @default true
         */
        anchorClickable?: boolean | undefined;
        /**
         * Activates all anchors clickable all times
         *
         * @default false
         */
        enableAllAnchors?: boolean | undefined;
        /**
         * Add done state on navigation
         *
         * @default true
         */
        markDoneStep?: boolean | undefined;
        /**
         * When a step selected by url hash, all previous steps are marked done
         *
         * @default true
         */
        markAllPreviousStepsAsDone?: boolean | undefined;
        /**
         * While navigate back done step after active step will be cleared
         *
         * @default false
         */
        removeDoneStepOnNavigateBack?: boolean | undefined;
        /**
         * Enable/Disable the done steps navigation
         *
         * @default true
         */
        enableAnchorOnDoneStep?: boolean | undefined;
    }

    interface KeyboardSettings {
        /**
         * Enable/Disable keyboard navigation(left and right keys are used if enabled)
         *
         * @default true
         */
        keyNavigation?: boolean | undefined;
        /**
         * Left key code
         *
         * @default [37]
         */
        keyLeft?: number[] | undefined;
        /**
         * Right key code
         *
         * @default [39]
         */
        keyRight?: number[] | undefined;
    }

    interface LangSettings {
        next?: string | undefined;
        previous?: string | undefined;
    }

    interface SmartWizardOptions {
        /**
         * Initial selected step, 0 = first step
         *
         * @default 0
         */
        selected?: number | undefined;
        /**
         * theme for the wizard, related css need to include for other than default theme
         *
         * @default 'default'
         */
        theme?: string | undefined;
        /**
         * Nav menu justification. true/false
         *
         * @default true
         */
        justified?: boolean | undefined;
        /**
         * Enable/disable Dark Mode if the theme supports. true/false
         *
         * @default false
         */
        darkMode?: boolean | undefined;
        /**
         * Automatically adjust content height
         *
         * @default true
         */
        autoAdjustHeight?: boolean | undefined;
        /**
         * Allows to cycle the navigation of steps
         *
         * @default false
         */
        cycleSteps?: boolean | undefined;
        /**
         * Enable the back button support
         *
         * @default true
         */
        backButtonSupport?: boolean | undefined;
        /**
         * Enable selection of the step based on url hash
         *
         * @default true
         */
        enableURLhash?: boolean | undefined;
        transition?: TransitionSettings | undefined;
        toolbarSettings?: ToolbarSettings | undefined;
        anchorSettings?: AnchorSettings | undefined;
        keyboardSettings?: KeyboardSettings | undefined;
        /**
         * Language variables for button
         */
        lang?: LangSettings | undefined;
        /**
         * Array Steps disabled
         *
         * @default []
         */
        disabledSteps?: number[] | undefined;
        /**
         * Highlight step with errors
         *
         * @default []
         */
        errorSteps?: number[] | undefined;
        /**
         * Hidden steps
         *
         * @default []
         */
        hiddenSteps?: number[] | undefined;
    }
}

interface JQuery {
    /**
     * Gets the current step index
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#func-getstepindex}
     */
    smartWizard(functionName: "getStepIndex"): number;

    /**
     * Allow you to go to a certain step.
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#func-gotostep}
     */
    smartWizard(functionName: "goToStep", step: number): void;

    /**
     * Allow you to show/hide the built-n loader animation.
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#func-loader}
     */
    smartWizard(functionName: "loader", action: "show" | "hide"): void;

    /**
     * Allow you to set the options dynamically.
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#func-setoptions}
     */
    smartWizard(functionName: "setOptions", options: JQuerySmartwizard.SmartWizardOptions): void;

    /**
     * Change the state of a step
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#func-stepstate}
     */
    smartWizard(functionName: "stepState", steps: number[], action: "disable" | "hide"): void;

    smartWizard(functionName?: "next" | "prev" | "reset"): void;

    /**
     * The leaveStep event triggers just before leaving from a step. You can
     * cancel the event by returning false, so the navigation is also be
     * cancelled and the wizard will retain the current state.
     *
     * @see {@link http://techlaboratory.net/jquery-smartwizard#event-leavestep}
     */
    on(
        eventName: "leaveStep",
        callback: (
            e: Event,
            anchorObject: JQuery<HTMLAnchorElement>,
            currentStepIndex: number,
            nextStepIndex: number,
            stepDirection: string,
        ) => void,
    ): void;

    on(
        eventName: "showStep" | "stepContent",
        callback: (e: Event, anchorObject: JQuery<HTMLAnchorElement>, stepIndex: number, stepDirection: string) => void,
    ): void;
}
