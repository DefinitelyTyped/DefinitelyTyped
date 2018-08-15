// Type definitions for jQuery Steps v1.1.1
// Project: http://www.jquery-steps.com/
// Definitions by: Joseph Blank <https://github.com/jblank>, Nicholas Wong <https://github.com/nickwph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    steps(param?: JQuerySteps.Settings): JQuerySteps.JQuerySteps;
}

declare module JQuerySteps {

    //#region "JQuerySteps"

    export interface JQuerySteps {
        /**
        * Adds a new step. (chainable)
        */
        add(step: Step): JQuerySteps;

        /**
        * Inserts a new step to a specific position. (chainable)
        */
        insert(index: number, step: Step): JQuerySteps;

        /**
        * Removes a specific step by an given index.
        */
        remove(index: number): boolean;

        /**
        * Gets the current step object.
        */
        getCurrentStep(): Step;

        /**
        * Gets the current step index.
        */
        getCurrentIndex(): number;

        /**
        * Gets a specific step object by index.
        */
        getStep(index: number): Step;

        /**
        * Routes to the previous step.
        */
        next(): boolean;

        /**
        * Routes to the next step.
        */
        previous(): boolean;

        /**
        * Triggers the onFinishing and onFinished event.
        */
        finish(): void;

        /**
        * Removes the control functionality completely and transforms the current state to the initial HTML structure.
        */
        destroy(): void;

        /**
        * Skips a certain amount of steps. Not yet implemented!
        */
        skip(count: number): boolean;
    }

    //#endregion "JQuerySteps"

    //#region "Settings"
    export interface Settings {
        //#region "Appearance"

        /**
        * The header tag is used to find the step button text within the declared wizard area. Default value is h1.
        */
        headerTag?: string;

        /**
        * The body tag is used to find the step content within the declared wizard area. Default value is div.
        */
        bodyTag?: string;

        /**
        * The content container tag which will be used to wrap all step contents. Default value is div.
        */
        contentContainerTag?: string;

        /**
        * The action container tag which will be used to wrap the pagination navigation. Default value is div.
        */
        actionContainerTag?: string;

        /**
        * The steps container tag which will be used to wrap the steps navigation. Default value is div.
        */
        stepsContainerTag?: string;

        /**
        * The css class which will be added to the outer component wrapper. Default value is wizard.
        */
        cssClass?: string;

        /**
        * Determines whether the steps are vertically or horizontally oriented. Default value is horizontal or 0.
        * This can be horizontal (0) or vertical (1).
        */
        stepsOrientation?: string|number;

        //#endregion "Appearance"

        //#region "Templates"

        /**
        * The title template which will be used to create a step button. Default value is span class="number">#index#.</span> #title#.
        */
        titleTemplate?: string;

        /**
        * The loading template which will be used to create the loading animation. Default value is <span class="spinner"></span> #text#.
        */
        loadingTemplate?: string;

        //#endregion "Templates"

        //#region "Behavior"

        /**
        * Sets the focus to the first wizard instance in order to enable the key navigation from the begining if true. Default value is false.
        */
        autoFocus?: boolean;

        /**
        * Enables all steps from the begining if true (all steps are clickable). Default value is false.
        */
        enableAllSteps?: boolean;

        /**
        * Enables keyboard navigation if true (arrow left and arrow right). Default value is true.
        */
        enableKeyNavigation?: boolean;

        /**
        * Enables pagination (next, previous and finish button) if true. Default value is true.
        */
        enablePagination?: boolean;

        /**
        * Suppresses pagination if a form field is focused. Default value is true.
        */
        suppressPaginationOnFocus?: boolean;

        /**
        * Enables cache for async loaded or iframe embedded content. Default value is true.
        */
        enableContentCache?: boolean;

        /**
        * Shows the cancel button if enabled. Default value is false.
        */
        enableCancelButton?: boolean;

        /**
        * Shows the finish button if enabled. Default value is true.
        */
        enableFinishButton?: boolean;

        /**
        * Shows the finish button always (on each step; right beside the next button) if true. Otherwise the next button will be replaced by the finish button if the last step becomes active. Default value is false.
        */
        showFinishButtonAlways?: boolean;

        /**
        * Prevents jumping to a previous step. Default value is false.
        */
        forceMoveForward?: boolean;

        /**
        * Saves the current state (step position) to a cookie. By coming next time the last active step becomes activated. Default value is false.
        */
        saveState?: boolean;

        /**
        * The position to start on (zero-based). Default value is 0.
        */
        startIndex?: number;

        //#endregion "Behavior"

        //#region "Transition Effects"

        /**
        * The animation effect which will be used for step transitions. Default value is none or 0.
        * This can be none (0), fade (1), slide (2) or slideLeft (3).
        */
        transitionEffect?: string|number;

        /**
        * Animation speed for step transitions (in milliseconds). Default value is 200.
        */
        transitionEffectSpeed?: number;

        //#endregion "Transition Effects"

        //#region "Events"

        /**
        * Fires before the step changes and can be used to prevent step changing by returning false.
        */
        onStepChanging?: FunctionOnStepChanging;

        /**
        * Fires after the step has changed.
        */
        onStepChanged?: FunctionOnStepChanged;

        /**
        * Fires after cancellation.
        */
        onCanceled?: FunctionOnCancelled;

        /**
        * Fires before finishing and can be used to prevent completion by returning false. Very useful for form validation.
        */
        onFinishing?: FunctionOnFinishing;

        /**
        * Fires after completion.
        */
        onFinished?: FunctionOnFinished;

        /**
        * Fires when the wizard is initialized.
        */
        onInit?: FunctionOnInit;

        /**
        * Fires after async content is loaded.
        */
        onContentLoaded?: FunctionOnContentLoaded;

        //#endregion "Events"

        //#region "Labels"

        labels?: LabelSettings;

        //#endregion "Labels"
    }
    //#endregion "Settings"

    //#region "Label Settings"

    interface LabelSettings {

        /**
        * Label for the cancel button. Default value is Cancel.
        */
        cancel?: string;

        /**
        * This label is important for accessability reasons. Indicates which step is activated. Default value is current step:.
        */
        current?: string;

        /**
        * This label is important for accessability reasons and describes the kind of navigation. Default value is Pagination.
        */
        pagination?: string;

        /**
        * Label for the finish button. Default value is Finish.
        */
        finish?: string;

        /**
        * Label for the next button. Default value is Next.
        */
        next?: string;

        /**
        * Label for the previous button. Default value is Previous.
        */
        previous?: string;

        /**
        * Label for the loading animation. Default value is Loading ... .
        */
        loading?: string;

    }

    //#endregion "Label Settings"

    //#region "Callback Functions"

    interface FunctionOnStepChanging {
        (event: string, currentIndex: number, newIndex: number): boolean;
    }

    interface FunctionOnStepChanged {
        (event: string, currentIndex: number, priorIndex: number): void;
    }

    interface FunctionOnCancelled {
        (event: string): void;
    }

    interface FunctionOnFinishing {
        (event: string, currentIndex: number): boolean;
    }

    interface FunctionOnFinished {
        (event: string, currentIndex: number): void;
    }

    interface FunctionOnInit {
        (event: string, currentIndex: number): void;
    }

    interface FunctionOnContentLoaded {
        (event: string, currentIndex: number): void;
    }

    //#endregion "Callback Functions"

    //#region "Step Object"

    interface Step {

        /**
        * The step title (HTML).
        */
        title?: string;

        /**
        *  The step content (HTML).
        */
        content?: string;

        /**
        * Indicates how the content will be loaded.
        * This can be html (0), iframe (1), or async (2).
        */
        contentMode?: string|number;

        /**
        * The URI that refers to the content.
        */
        contentUrl?: string;
    }

    //#endregion "Step Object"
}
