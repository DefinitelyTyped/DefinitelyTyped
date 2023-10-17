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
