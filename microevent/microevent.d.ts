// Type definitions for microevent v1.0.0
// Project: http://notes.jetienne.com/2011/03/22/microeventjs.html
// Definitions by: Jakub Ječmínek <https://github.com/JakubJecminek/>
// Definitions: https://github.com/JakubJecminek/DefinitelyTyped

declare var MicroEvent: MicroEventStatic;


interface MicroEventStatic {

    /**
     * mixin will delegate all MicroEvent.js function in the destination object
     *
     * - require('MicroEvent').mixin(Foobar) will make Foobar able to use MicroEvent
     *
     * @param {Object} the object which will support MicroEvent
    */
    mixin<T>(destObject: T): T & MicroEvent;

}

/**
 * MicroEvent - to make any js object an event emitter (server or browser)
 *
 * - pure javascript - server compatible, browser compatible
 * - dont rely on the browser doms
 * - super simple - you get it immediatly, no mistery, no magic involved
 *
 * - create a MicroEventDebug with goodies to debug
 *   - make it safer to use
*/
interface MicroEvent {

    bind(event: string, fct: (...args: any[]) => void): void;

    unbind(event: string, fct: (...args: any[]) => void): void;

    trigger(event: string, ...args: any[]): void;

}
