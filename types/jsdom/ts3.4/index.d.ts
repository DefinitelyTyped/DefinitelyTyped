// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.3/index.d.ts"/>

// tslint:disable-next-line: no-single-declare-module
declare module 'jsdom' {
    interface DOMWindow {
        ShadowRoot: typeof ShadowRoot;
    }
}
