// Type definitions for jquery-mousewheel v3.1.10
// Project: https://github.com/jquery/jquery-mousewheel
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

/// <reference types="jquery"/>

export type JQueryMousewheelEventHook<
    O = JQueryMousewheel.JQueryMousewheelEventObject,
    D = JQueryMousewheel.JQueryMousewheelEventData
> = (
    & { version: string; }
    & { setup: (Extract<JQuery.SpecialEventHook<O, D>, { setup: any; }>)["setup"] }
    & { teardown: (Extract<JQuery.SpecialEventHook<O, D>, { teardown: any; }>)["teardown"] }
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
