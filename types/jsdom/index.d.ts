// Type definitions for jsdom 21.1
// Project: https://github.com/jsdom/jsdom
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Johan Palmfjord <https://github.com/palmfjord>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

/// <reference path="base.d.ts"/>

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "jsdom" {
    interface DOMWindow {
        FinalizationRegistry: FinalizationRegistryConstructor;
        WeakRef: WeakRefConstructor;
        InputEvent: typeof InputEvent;
        External: typeof External;
    }
}

// Necessary to avoid breaking dependents because of the dependency
// on the `ESNext.WeakRef` lib:
// tslint:disable-next-line: no-empty-interface
interface FinalizationRegistryConstructor {}
// tslint:disable-next-line: no-empty-interface
interface WeakRefConstructor {}
