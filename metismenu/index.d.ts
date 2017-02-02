// Type definitions for metisMenu 2.6.2
// Project: http://github.com/onokumus/metisMenu
// Definitions by: onokumus <https://github.com/onokumus/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="jquery"/>

interface MetisMenuOptions {
    toggle?: boolean;
    activeClass?: string;
    collapseClass?: string;
    collapseInClass?: string;
    collapsingClass?: string;
    preventDefault?: boolean;
}

type MetisMenuEvents = "show.metisMenu" | "shown.metisMenu" | "hide.metisMenu" | "hidden.metisMenu";

interface JQuery {
    metisMenu(options?: MetisMenuOptions | "dispose"): JQuery;
    on(events: MetisMenuEvents, handler: (eventObject: JQueryEventObject) => any): JQuery;
}
