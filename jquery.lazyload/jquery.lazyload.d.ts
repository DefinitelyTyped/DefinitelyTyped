// Type definitions for Lazy Load 1.9.3
// Project: http://http://www.appelsiini.net/projects/lazyload
// Definitions by: cwerner1 <https://github.com/cwerner1>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../jquery/jquery.d.ts'/>

declare module JQueryLazyLoad {

    interface LazyLoadOptions {
        /**
         * What text will be inside bar. Can be HTML or just text.
         */
        html?: string;
        /**
         * Setting threshold to 200 causes image to load 200 pixels before it appears on viewport.
         */
        threshold?:number;
        /**
         * When should the loading be triggered
         */
        event?:string;

        /**
         * Effect
         */
        effect?:string;


        /**
         *Setting failure_limit to 10 causes plugin to stop searching for images to load after finding 10 images below the fold.
         */
        failure_limit?:number;

        /**
         * There are cases when you have images which are in viewport but not :visible. To improve performance plugin ignores .not(":visible") by default.
         */
        skip_invisible?:boolean
    }
}

interface JQuery {
    /**
     *  lazyloads all Elements
     *
     * @param options LazyLoad options
     */
    lazyload(options?:JQueryLazyLoad.LazyLoadOptions): void;
}