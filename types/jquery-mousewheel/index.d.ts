// Type definitions for jquery-mousewheel v3.1.13
// Project: https://github.com/jquery/jquery-mousewheel
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

import 'jquery';

declare global {
    namespace JQueryMousewheel {
        interface JQueryMousewheelEventObject extends JQueryEventObject {
            deltaX: number;
            deltaY: number;
            deltaFactor: number;
            deltaMode: number;
            absDelta: number;
            offsetX: number;
            offsetY: number;
        }
        interface JQueryMousewheelEventData {
            'mousewheel-line-height': number;
            'mousewheel-page-height': number;
        }
    }
}

type SpecialEventHook = JQuery.SpecialEventHook<
    JQueryMousewheel.JQueryMousewheelEventObject,
    JQueryMousewheel.JQueryMousewheelEventData
>;

export type JQueryMousewheelEventHook = (
    & { version: string; }
    & { setup: (Extract<SpecialEventHook, { setup: any; }>)["setup"] }
    & { teardown: (Extract<SpecialEventHook, { teardown: any; }>)["teardown"] }
    & { getLineHeight(elem: JQuery.htmlString): number | never; }
    & { getPageHeight(elem: JQuery.htmlString): number | never; }
    & {
        settings: {
            adjustOldDeltas: boolean;
            normalizeOffset: boolean;
        };
    }
);

export type JQueryMousewheelEventHandler = (eventObject: JQueryMousewheel.JQueryMousewheelEventObject, ...args: any[]) => any;

declare global {
    namespace JQuery {
        interface SpecialEventHooks {
            mousewheel: JQueryMousewheelEventHook;
        }
    }
    interface JQuery {
        on(event: 'mousewheel', handler: JQueryMousewheelEventHandler): JQuery;
        mousewheel(handler: JQueryMousewheelEventHandler): JQuery
        unmousewheel(): JQuery;
    }
}
