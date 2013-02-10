// Type definitions for Foundation 3.2
// Project: http://foundation.zurb.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface OrbitOptions {
    animation?: string;
    animationSpeed?: number;
    timer?: bool;
    resetTimerOnClick?: bool;
    advanceSpeed?: number;
    pauseOnHover?: bool;
    startClockOnMouseOut?: bool;
    startClockOnMouseOutAfter?: number;
    directionalNav?: number;
    captions?: number;
    captionAnimation?: string;
    captionAnimationSpeed?: number;
    bullets?: bool;
    bulletThumbs?: bool;
    bulletThumbLocation?: string;
    afterSlideChange?: () => void;
    fluid?: bool;
}

interface RevealOptions {
    animation?: string;
    animationSpeed?: number;
    closeOnBackgroundClick?: bool;
    dismissModalClass?: string;
    open?: () => void;
    opened?: () => void;
    close?: () => void;
    closed?: () => void;
}

interface JoyrideOptions {
    tipLocation?: string;
    nubPosition?: string;
    scrollSpeed?: number;
    timer?: number;
    startTimerOnClick?: bool;
    nextButton?: bool;
    tipAnimation?: string;
    pauseAfter?: number[];
    tipAnimationFadeSpeed?: number;
    cookieMonster?: bool;
    cookieName?: string;
    cookieDomain?: bool;
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
