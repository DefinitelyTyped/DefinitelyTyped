// Type definitions for intro.js 5.1
// Project: https://github.com/usablica/intro.js
// Definitions by: Maxime Fabre <https://github.com/anahkiasen>
//                 Leon Montealegre <https://github.com/LeonMontealegre>
//                 Veniamin Krol <https://github.com/vkrol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function introJs(): introJs.IntroJs;
declare function introJs(element: HTMLElement): introJs.IntroJs;
declare function introJs(querySelector: string): introJs.IntroJs;

declare namespace introJs {
    interface Step {
        intro: string;
        element?: string | HTMLElement | Element | undefined;
        position?:
            | 'top'
            | 'left'
            | 'right'
            | 'bottom'
            | 'bottom-left-aligned'
            | 'bottom-middle-aligned'
            | 'bottom-right-aligned'
            | 'auto' | undefined;
        tooltipClass?: string | undefined;
        highlightClass?: string | undefined;
        scrollTo?: 'off' | 'tooltip' | 'element' | undefined;
        disableInteraction?: boolean | undefined;
        title?: string | undefined;
        step?: number | undefined;
    }

    interface Hint {
        hint: string;
        element?: string | HTMLElement | Element | undefined;
        hintPosition?: string | undefined;
    }

    interface Options {
        nextLabel?: string | undefined;
        prevLabel?: string | undefined;
        skipLabel?: string | undefined;
        doneLabel?: string | undefined;
        hidePrev?: boolean | undefined;
        hideNext?: boolean | undefined;
        tooltipPosition?: string | undefined;
        tooltipClass?: string | undefined;
        highlightClass?: string | undefined;
        buttonClass?: string | undefined;
        exitOnEsc?: boolean | undefined;
        exitOnOverlayClick?: boolean | undefined;
        showStepNumbers?: boolean | undefined;
        keyboardNavigation?: boolean | undefined;
        showButtons?: boolean | undefined;
        showBullets?: boolean | undefined;
        showProgress?: boolean | undefined;
        scrollToElement?: boolean | undefined;
        overlayOpacity?: number | undefined;
        scrollPadding?: number | undefined;
        positionPrecedence?: string[] | undefined;
        disableInteraction?: boolean | undefined;
        hintPosition?: string | undefined;
        hintButtonLabel?: string | undefined;
        hintAnimation?: boolean | undefined;
        steps?: Step[] | undefined;
        hints?: Hint[] | undefined;
    }
    interface IntroJs {
        start(): IntroJs;
        exit(force?: boolean): IntroJs;
        clone(): IntroJs;

        currentStep(): number | undefined;
        goToStepNumber(stepId: number): IntroJs;
        goToStep(step: number): IntroJs;
        nextStep(): IntroJs;
        previousStep(): IntroJs;

        refresh(): IntroJs;

        setOption(option: string, value: string | number | boolean): IntroJs;
        setOptions(options: Options): IntroJs;

        onexit(callback: Function): IntroJs;
        onbeforeexit(callback: () => boolean | void): IntroJs;
        onbeforechange(callback: (element: HTMLElement) => any): IntroJs;
        onafterchange(callback: (element: HTMLElement) => any): IntroJs;
        onchange(callback: (element: HTMLElement) => any): IntroJs;
        oncomplete(callback: Function): IntroJs;
        /**
         * @link https://introjs.com/docs/intro/api/#introjsaddstepoptions
         */
        addStep(options: Step): IntroJs;
        /**
         * @link https://introjs.com/docs/intro/api/#introjsaddstepssteps
         */
        addSteps(steps: Step[]): IntroJs;
        addHints(): IntroJs;
        showHint(stepId: number): IntroJs;
        showHints(): IntroJs;
        hideHint(stepId: number): IntroJs;
        hideHints(): IntroJs;
        removeHint(stepId: number): IntroJs;
        removeHints(): IntroJs;

        onhintsadded(callback: Function): IntroJs;
        onhintclick(callback: (hintElement: HTMLElement, item: Step, stepId: number) => any): IntroJs;
        onhintclose(callback: (stepId: number) => any): IntroJs;
    }
}

export = introJs;
export as namespace introJs;
