declare namespace TetherShepherd {
    interface ShepherdStatic {
        on(eventName: string, handler: Function, context?: any): any;
        off(eventName: string, handler?: Function): any;
        once(eventName: string, handler: Function, context?: any): any;

        activeTour: IShepherdTour;
        Tour: IShepherdTour;
    }

    interface IShepherdTourOptions {
        steps?: IShepherdTourStep[] | undefined;
        defaults?: IShepherdTourStepOptions | undefined;
    }

    interface IShepherdTour {
        new(options?: IShepherdTourOptions): IShepherdTour;

        /**
         * Creates a new Step object with options, and returns the Tour object for convenient chaining when creating multiple steps. If you'd like you can also just pass an options hash which includes id as a key. If the options hash doesn't include an id, one will be generated. You can also pass an existing Step instance rather than options, but note that Shepherd does not support a Step being attached to multiple Tours.
         */
        addStep(id: string, options: IShepherdTourStepOptions): IShepherdTour;
        addStep(id: string, options: IShepherdTourStep): IShepherdTour;

        /**
         * Return a step with a specific id
         */
        getById(id: string): IShepherdTourStep;

        /**
         * Advance to the next step, in the order they were added
         */
        next(): void;

        /**
         * Show the previous step, in the order they were added
         */
        back(): void;

        /**
         * Trigger cancel on the current step, hiding it without advancing
         */
        cancel(): void;

        /**
         * Hide the current step
         */
        hide(): void;

        /**
         * Show the step specified by id (if it's a string), or index (if it's a number) provided. Defaults to the first step.
         */
        show(): void;
        show(id: number): void;
        show(id: string): void;

        /**
         * Show the first step and begin the tour
         */
        start(): void;

        /**
         * Returns the currently shown step
         */
        getCurrentStep(): IShepherdTourStep;

        /**
         * Bind an event
         */
        on(eventName: string, handler: Function, context?: any): any;

        /**
         * Unbind an event
         */
        off(eventName: string, handler?: Function): any;

        /**
         * Bind just the next instance of an event
         */
        once(eventName: string, handler: Function, context?: any): any;
    }

    interface IShepherdTourStep {
        /**
         * Show this step
         */
        show(): void;

        /**
         * Hide this step
         */
        hide(): void;

        /**
         * Hide this step and trigger the cancel event
         */
        cancel(): void;

        /**
         * Hide this step and trigger the complete event
         */
        complete(): void;

        /**
         * Scroll to this step's element
         */
        scrollTo(): void;

        /**
         * Returns true if the step is currently shown
         */
        isOpen(): boolean;

        /**
         * Remove the element
         */
        destroy(): void;

        /**
         * Bind an event
         */
        on(eventName: string, handler: Function, context?: any): any;

        /**
         * Unbind an event
         */
        off(eventName: string, handler?: Function): any;

        /**
         * Bind just the next instance of an event
         */
        once(eventName: string, handler: Function, context?: any): any;
    }

    interface IShepherdTourStepOptions {
        text?: any;
        title?: string | undefined;
        attachTo?: any;
        beforeShowPromise?: any;
        classes?: string | undefined;
        buttons?: IShepherdTourButton[] | undefined;
        advanceOn?: any;
        showCancelLink?: boolean | undefined;
        scrollTo?: boolean | undefined;
        when?: any;
        showOn?: (() => boolean) | undefined;

        // TODO: Tie this in with the tether.d.ts
        tetherOptions?: any;
    }

    interface IShepherdTourButton {
        text: string;
        classes?: string | undefined;
        action?: Function | undefined;
        events?: IShepherdTourButtonEventHash | undefined;
    }

    interface IShepherdTourButtonEventHash {
        [Key: string]: Function;
    }

    interface IShepherdTourAttachProperties {
        element: string;
        on: string;
    }
}

declare var Shepherd: TetherShepherd.ShepherdStatic;
