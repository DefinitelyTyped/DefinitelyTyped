// Type definitions for Vimeo
// Project: http://developer.vimeo.com/player/js-api
// Definitions by: Daz Wilkin <https://github.com/DazWilkin/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface VimeoParams {
	name:string;
	value:any;
}
interface VimeoPlayerAPI {
    (method: string): any;
    (method: string, callback: (value: any, player_id: any) =>void ): any;
	(method: string, value: any): any;
	(method: string, value: VimeoParams[]): any;
}
interface VimeoPlayer {
    api: VimeoPlayerAPI;
    addEvent(eventName: string, callback: (e: any) =>void ): any;
    removeEvent(eventName: string): void;
    postMessage(method: string, params:VimeoParams[], target): void;
    onMessagReceived(event);
    storeCallback(eventName: string, callback, target_id: string);
    getCallback(eventName: string, target_id: string);
    removeCallback(eventName: string, target_id: string);
    getDomainFromUrl(url: string): string;
}

declare var $f: VimeoPlayerAPI;