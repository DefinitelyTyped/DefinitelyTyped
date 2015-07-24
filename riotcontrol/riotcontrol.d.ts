// Type definitions for riotcontrol
// Project: https://github.com/jimsparkman/RiotControl
// Definitions by: hiep <https://github.com/duongphuhiep>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../riotjs/riotjs.d.ts" />

declare module RiotControl {

    /**
     * store should be a observable. riot.observable(obj) will convert a POJO to a observable on run-time
     * @param store: Observable
     */
    function addStore(store: any):void;

    /**
     * Listen for event, and execute callback when it is triggered. This applies to all stores registered, so that you may receive the same event from multiple sources.
     *
     * Single event:
     *      el.on('start', function() { })
     *
     * Multiple events, the event type is given as the argument:
     *      el.on('start stop', function(type:string) { })
     */
    function on(events:string, callback:(...args:any[])=>void):void;

    /**
     * Listen to the given event and execute the callback at most once.
     *      el.one('start', function() {})
     */
    function one(event:string, callback:()=>void):void;

    /**
     * Removes the given space separated list of event listeners
     * el.off('start stop')
     *
     * Removes the given callback from the list of events
     * el.off('start end', doIt)
     *
     * Removes all listeners from all event types.
     * el.off(‘*‘)
     */
    function off(events:string, callback?:()=>void):void;

    /**
     * Trigger event on all stores registered in central dispatch. Essentially,
     * a 'broadcast' version of Riot's el.trigger() API.
     */
    function trigger(event:string, ...args:any[]):void;
}
