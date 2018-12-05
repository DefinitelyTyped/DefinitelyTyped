// Type definitions for intro.js 2.4
// Project: https://github.com/usablica/intro.js
// Definitions by: Maxime Fabre <https://github.com/anahkiasen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace IntroJs {
    interface Step {
        intro: string;
        element?: string|HTMLElement|Element;
        position?: string;
    }

    interface Hint {
        hint: string;
        element?: string|HTMLElement|Element;
        hintPosition?: string;
    }

    interface Options {
        nextLabel?: string;
        prevLabel?: string;
        skipLabel?: string;
        doneLabel?: string;
        hidePrev?: boolean;
        hideNext?: boolean;
        tooltipPosition?: string;
        tooltipClass?: string;
        highlightClass?: string;
        exitOnEsc?: boolean;
        exitOnOverlayClick?: boolean;
        showStepNumbers?: boolean;
        keyboardNavigation?: boolean;
        showButtons?: boolean;
        showBullets?: boolean;
        showProgress?: boolean;
        scrollToElement?: boolean;
        overlayOpacity?: number;
        scrollPadding?: number;
        positionPrecedence?: string[];
        disableInteraction?: boolean;
        hintPosition?: string;
        hintButtonLabel?: string;
        hintAnimation?: boolean;
        steps?: Step[];
        hints?: Hint[];
    }

    interface IntroJs {
        start(): IntroJs;
        exit(): IntroJs;
        clone(): IntroJs;

        goToStepNumber(stepId: number): IntroJs
        goToStep(step: number): IntroJs;
        nextStep(): IntroJs;
        previousStep(): IntroJs;

        refresh(): IntroJs;

        setOption(option: string, value: string|number|boolean): IntroJs;
        setOptions(options: Options): IntroJs;

        onexit(callback: Function): IntroJs;
        onbeforechange(callback: (element: HTMLElement) => any): IntroJs;
        onafterchange(callback: (element: HTMLElement) => any): IntroJs;
        onchange(callback: (element: HTMLElement) => any): IntroJs;
        oncomplete(callback: Function): IntroJs;

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

    interface Factory {
        (): IntroJs;
        (element: HTMLElement): IntroJs;
        (querySelector: string): IntroJs;
    }
}

declare var introJs: IntroJs.Factory;
declare module 'intro.js' {
    export = IntroJs;
}
