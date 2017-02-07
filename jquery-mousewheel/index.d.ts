// Type definitions for jquery-mousewheel v3.1.13
// Project: https://github.com/jquery/jquery-mousewheel
// Definitions by: Brian Surowiec <https://github.com/xt0rted/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

declare namespace JQueryMousewheel {
    interface JQueryMousewheelEventObject extends JQueryEventObject {
        deltaX: number;
        deltaY: number;
        deltaFactor: number;
        deltaMode: number;
        absDelta: number;
    }
}

interface JQuery {
    mousewheel(handler: (eventObject: JQueryMousewheel.JQueryMousewheelEventObject, ...args: any[]) => any): JQuery
    unmousewheel(): JQuery;
}
