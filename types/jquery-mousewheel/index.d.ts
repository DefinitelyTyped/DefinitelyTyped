/// <reference types="jquery" />

declare global {
    namespace JQueryMousewheel {
        type JQueryMousewheelEventHook<
            O = JQueryMousewheelEventObject,
            D = JQueryMousewheelEventData,
        > =
            & { version: string }
            & { setup: (Extract<JQuery.SpecialEventHook<O, D>, { setup: any }>)["setup"] }
            & { teardown: (Extract<JQuery.SpecialEventHook<O, D>, { teardown: any }>)["teardown"] }
            & { getLineHeight(elem: Parameters<JQuery["appendTo"]>[0]): number | never }
            & { getPageHeight(elem: Parameters<JQuery["appendTo"]>[0]): number | never }
            & {
                settings: {
                    adjustOldDeltas: boolean;
                    normalizeOffset: boolean;
                };
            };
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
            "mousewheel-line-height": number;
            "mousewheel-page-height": number;
        }
    }
    namespace JQuery {
        interface SpecialEventHooks {
            mousewheel: JQueryMousewheel.JQueryMousewheelEventHook;
        }
    }
    interface JQuery {
        on(event: "mousewheel", handler: JQueryMousewheel.JQueryMousewheelEventHandler): JQuery;
        mousewheel(handler: JQueryMousewheel.JQueryMousewheelEventHandler): JQuery;
        unmousewheel(): JQuery;
    }
}

/**
 * Factory function for Browserify in Node.js/CommonJS environments.
 * Modifies `$` to include the `jquery-mousewheel` library.
 * Designed for use with export-related JS features.
 *
 * @param $ JQuery static library object.
 */
declare function factory($: JQueryStatic): void;
export = factory;
