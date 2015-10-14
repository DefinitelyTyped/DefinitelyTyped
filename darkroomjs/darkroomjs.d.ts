// Type definitions for darkroomjs
// Project: https://github.com/MattKetmo/darkroomjs
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../fabricjs/fabricjs.d.ts"/>

declare class DarkRoom {
    constructor(element: string | HTMLImageElement, options?: Options)
    plugins: {
        crop: any;
        save: any;
    }
    sourceImage: fabric.IImage;
    /**
    * add event listener for fabric events
    */
    addEventListener: (eventName: string, callBack:()=>any)=>any
}
interface Options {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    plugins?: Plugins;
    /**
    * Post initialize callback
    */
    initialize?: () => void;
    backgroundColor?: string;
    ratio?: number;
}
interface Plugins {
    /**
    * Crop plugin options. if passed 'false' - disable plugin
    */
    crop?: CropPluginOptions | boolean;
    /**
    * Save plugin options. if passed 'false' - disable plugin
    */
    save?: SavePluginOptions | boolean;


    history?: HistoryPluginOptions | boolean;
}
interface CropPluginOptions {
    minHeight?: number;
    minWidth?: number;
    ratio?: number;
    quickCropKey?: number;
}
interface SavePluginOptions {
    callback?: () => any
}
interface HistoryPluginOptions{

}
declare var Darkroom: typeof DarkRoom;
declare module 'darkroomjs' {

    export = Darkroom;
}
