// Type definitions for intro.js 1.1.1
// Project: https://github.com/usablica/intro.js
// Definitions by: Maxime Fabre <https://github.com/anahkiasen/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module IntroJs {
    interface Step {
        intro: string;
        element?: string|HTMLElement|Element;
        position?: string;
    }

    interface Options {
        nextLabel?: string;
        prevLabel?: string;
        skipLabel?: string;
        doneLabel?: string;
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
        positionPrecedence?: string[];
        disableInteraction?: boolean;
        steps: Step[];
    }

    interface IntroJs {
        start(): IntroJs;
        exit(): IntroJs;

        goToStep(step: number): IntroJs;
        nextStep(): IntroJs;
        previousStep(): IntroJs;

        refresh(): IntroJs;

        setOption(option: string, value: string|number|boolean): IntroJs;
        setOptions(options: Options): IntroJs;

        onexit(callback: Function): IntroJs;
        onbeforechange(callback: (element: HTMLElement) => any): IntroJs;
        onafterchange(callback: (element: HTMLElement) => any): IntroJs;
        onchange(callback: Function): IntroJs;
        oncomplete(callback: Function): IntroJs;
    }

    interface Factory {
        (element?: string): IntroJs;
    }
}

declare var introJs: IntroJs.Factory;
declare module 'intro.js' {
    export = IntroJs;
}
