// tslint:disable-next-line: no-bad-reference
/// <reference path="../base.d.ts"/>

// tslint:disable-next-line: no-single-declare-module
declare module "jsdom" {
    interface DOMWindow {
        InputEvent: typeof InputEvent;
        External: typeof External;
    }
}
