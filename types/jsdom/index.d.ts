// Type definitions for jsdom 16.2
// Project: https://github.com/jsdom/jsdom
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Johan Palmfjord <https://github.com/palmfjord>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="ts3.5/index.d.ts"/>

// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'jsdom' {
    interface DOMWindow {
        InputEvent: typeof InputEvent;
        External: typeof External;
    }
}
