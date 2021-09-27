// Type definitions for jquery-mousewheel v3.1.10
// Project: https://github.com/jquery/jquery-mousewheel
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import 'jquery';

declare global {
    namespace JQueryMousewheel {
        type JQueryMousewheelEventHook<
            O = JQueryMousewheelEventObject,
            D = JQueryMousewheelEventData
        > = (
            & { version: string; }
            & { setup: (Extract<JQuery.SpecialEventHook<O, D>, { setup: any; }>)['setup'] }
            & { teardown: (Extract<JQuery.SpecialEventHook<O, D>, { teardown: any; }>)['teardown'] }
            & { getLineHeight(elem: JQuery.htmlString): number | never; }
            & { getPageHeight(elem: JQuery.htmlString): number | never; }
            & {
                settings: {
                    adjustOldDeltas: boolean;
                    normalizeOffset: boolean;
                };
            }
        );
        type JQueryMousewheelEventHandler = (eventObject: JQueryMousewheelEventObject, ...args: any[]) => any;
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
            mousewheel: JQueryMousewheel.JQueryMousewheelEventHook;
        }
    }
    interface JQuery {
        on(event: 'mousewheel', handler: JQueryMousewheel.JQueryMousewheelEventHandler): JQuery;
        mousewheel(handler: JQueryMousewheel.JQueryMousewheelEventHandler): JQuery
        unmousewheel(): JQuery;
    }
}

export = undefined;
