// Type definitions for jsdom 16.2
// Project: https://github.com/jsdom/jsdom
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Johan Palmfjord <https://github.com/palmfjord>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="ts4.0/index.d.ts"/>

// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module "jsdom" {
    interface DOMWindow {
        FinalizationRegistry: FinalizationRegistryConstructor;
        WeakRef: WeakRefConstructor;
    }
}

// Necessary to avoid breaking dependents because of the dependency
// on the `ESNext.WeakRef` lib:
// tslint:disable-next-line: no-empty-interface
interface FinalizationRegistryConstructor {}
// tslint:disable-next-line: no-empty-interface
interface WeakRefConstructor {}
