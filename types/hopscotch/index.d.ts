declare type CallbackNameNamesOrDefinition = string | string[] | (() => void);
declare type placementTypes = "top" | "bottom" | "right" | "left";

interface HopscotchConfiguration {
    bubbleWidth?: number | undefined;
    buddleHeight?: number | undefined;

    smoothScroll?: boolean | undefined;
    scrollDuration?: number | undefined;
    scrollTopMargin?: number | undefined;

    showCloseButton?: boolean | undefined;
    showNextButton?: boolean | undefined;
    showPrevButton?: boolean | undefined;

    arrowWidth?: number | undefined;
    skipIfNoElement?: boolean | undefined;
    nextOnTargetClick?: boolean | undefined;

    onNext?: CallbackNameNamesOrDefinition | undefined;
    onPrev?: CallbackNameNamesOrDefinition | undefined;
    onStart?: CallbackNameNamesOrDefinition | undefined;
    onEnd?: CallbackNameNamesOrDefinition | undefined;
    onClose?: CallbackNameNamesOrDefinition | undefined;
    onError?: CallbackNameNamesOrDefinition | undefined;
    onShow?: CallbackNameNamesOrDefinition | undefined;

    i18n?: {
        nextBtn?: string | undefined;
        prevBtn?: string | undefined;
        doneBtn?: string | undefined;
        skipBtn?: string | undefined;
        closeTooltip?: string | undefined;
        stepNums?: string[] | undefined;
    } | undefined;
}

interface TourDefinition extends HopscotchConfiguration {
    id: string;
    steps: StepDefinition[];
}

interface StepDefinition {
    placement: placementTypes;
    target: string | HTMLElement | Array<string | HTMLElement>;

    title?: string | undefined;
    content?: string | undefined;

    width?: number | undefined;
    padding?: number | undefined;

    xOffset?: number | "center" | undefined;
    yOffset?: number | "center" | undefined;
    arrowOffset?: number | "center" | undefined;

    delay?: number | undefined;
    zIndex?: number | undefined;

    showNextButton?: boolean | undefined;
    showPrevButton?: boolean | undefined;
    showCTAButton?: boolean | undefined;

    ctaLabel?: string | undefined;
    multipage?: boolean | undefined;
    showSkip?: boolean | undefined;
    fixedElement?: boolean | undefined;
    nextOnTargetClick?: boolean | undefined;

    onPrev?: CallbackNameNamesOrDefinition | undefined;
    onNext?: CallbackNameNamesOrDefinition | undefined;
    onShow?: CallbackNameNamesOrDefinition | undefined;
    onCTA?: CallbackNameNamesOrDefinition | undefined;
}

interface HopscotchStatic {
    /**
     * Actually starts the tour. Optional stepNum argument specifies what step to start at.
     */
    startTour(tour: TourDefinition, stepNum?: number): void;

    /**
     * Skips to a given step in the tour
     */
    showStep(id: number): void;

    /**
     * Goes back one step in the tour
     */
    prevStep(): void;

    /**
     * Goes forward one step in the tour
     */
    nextStep(): void;

    /**
     * Ends the current tour. If clearCookie is set to false, the tour state is preserved.
     * Otherwise, if clearCookie is set to true or is not provided, the tour state is cleared.
     */
    endTour(clearCookie: boolean): void;

    /**
     * Sets options for running the tour.
     */
    configure(options: HopscotchConfiguration): void;

    /**
     * Returns the currently running tour.
     */
    getCurrTour(): TourDefinition;

    /**
     * Returns the currently running tour.
     */
    getCurrStepNum(): number;

    /**
     * Checks for tour state saved in sessionStorage/cookies and returns the state if
     * it exists. Use this method to determine whether or not you should resume a tour.
     */
    getState(): string;

    /**
     * Adds a callback for one of the event types. Valid event types are:
     * *start*, *end*, *next*, *prev*, *show*, *close*, *error*
     */
    listen(eventName: string, callback: () => void): void;

    /**
     * Removes a callback for one of the event types.
     */
    unlisten(eventName: string, callback: () => void): void;

    /**
     * Remove callbacks for hopscotch events. If tourOnly is set to true, only removes
     * callbacks specified by a tour (callbacks set by hopscotch.configure or hopscotch.listen
     * will remain). If eventName is null or undefined, callbacks for all events will be removed.
     */
    removeCallbacks(eventName?: string, tourOnly?: boolean): void;

    /**
     * Registers a callback helper. See the section about Helpers below.
     */
    registerHelper(id: string, helper: (...args: any[]) => void): void;

    /**
     * Resets i18n strings to original default values.
     */
    resetDefaultI18N(): void;

    /**
     * Resets all config options to original values.
     */
    resetDefaultOptions(): void;
}

declare var hopscotch: HopscotchStatic;

declare module "hopscotch" {
    export = hopscotch;
}
