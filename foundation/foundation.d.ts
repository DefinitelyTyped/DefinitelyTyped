// Type definitions for Foundation 3.2
// Project: http://foundation.zurb.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface OrbitOptions {
    animation?: string;
    animationSpeed?: number;
    timer?: boolean;
    resetTimerOnClick?: boolean;
    advanceSpeed?: number;
    pauseOnHover?: boolean;
    startClockOnMouseOut?: boolean;
    startClockOnMouseOutAfter?: number;
    directionalNav?: number;
    captions?: number;
    captionAnimation?: string;
    captionAnimationSpeed?: number;
    bullets?: boolean;
    bulletThumbs?: boolean;
    bulletThumbLocation?: string;
    afterSlideChange?: () => void;
    fluid?: boolean;
}

interface RevealOptions {
    animation?: string;
    animationSpeed?: number;
    closeOnBackgroundClick?: boolean;
    dismissModalClass?: string;
    /**
    * The class of the modals background.
    */
    bgClass?: string;
    open?: () => void;
    opened?: () => void;
    close?: () => void;
    closed?: () => void;
    /**
    * The modals background object.
    */
    bg: JQuery;
    /**
    * The css property for when the modal is opened and closed.
    */
    css: {
        open: {
            opacity?: number;
            visibility?: string;
            display: string;
        };
        close: {
            opacity: number;
            visibility: string;
            display: string;
        };
    };
}

interface JoyrideOptions {
    tipLocation?: string;
    nubPosition?: string;
    scrollSpeed?: number;
    timer?: number;
    startTimerOnClick?: boolean;
    nextButton?: boolean;
    tipAnimation?: string;
    pauseAfter?: number[];
    tipAnimationFadeSpeed?: number;
    cookieMonster?: boolean;
    cookieName?: string;
    cookieDomain?: boolean;
    tipContainer?: string;
    postRideCallback?: () => void;
    postStepCallback?: () => void;
}

interface JQuery {
    orbit(): JQuery;
    orbit(OrbitOptions): JQuery;
    reveal(): JQuery;
    reveal(RevealOptions): JQuery;
    joyride(): JQuery;
    joyride(JoyrideOptions): JQuery;
}
