// Type definitions for timelinejs
// Project: https://github.com/NUKnightLab/TimelineJS
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function createStoryJS(config:knightlab.ITimeLineConfiguration):void;

declare module knightlab {

    export interface ITimeLineConfiguration {
        width: string;
        height: string;
        /*
         * path to json/ or link to googlespreadsheet
         * source Should be either the path to the JSON resource to load, or a JavaScript object corresponding to the
         * Timeline model.
         *
         * Here is an example using a data object:
         *
         * var dataObject = {timeline: {headline: "Headline", type: ... }}
         * createStoryJS({
         * type:       'timeline',
         * width:      '800',
         * height:     '600',
         * source:     dataObject,
         * embed_id:   'my-timeline'
         * });
         * If source is a string, we will try to automatically recognize resources that are Twitter searches, Google
         * Spreadsheets or Storify stories. Failing that, we assume the source is either JSON or JSONP. If string
         * matches on .jsonp, we will treat it as JSONP, otherwise, we will append ?callback=onJSONP_Data.
         */
        source: any;
        type?: string;
        /*
         * Optional use a different div id for embed
         */
        embed_id?: string;
        /*
         * Optional start at latest date
         */
        start_at_end?: boolean;
        /*
         * Optional start at specific slide
         */
        start_at_slide?: string;
        /*
         * Optional tweak the default zoom level
         */
        start_zoom_adjust?: string;
        /*
         * Optional location bar hashes
         */
        hash_bookmark?: boolean;
        /*
         * Optional font
         */
        font?: string;
        /*
         * Optional debug to console
         */
        debug?: boolean;
        /*
         * Optional language
         */
        lang?: string;
        /*
         * Optional path to css
         */
        css?: string;
        /*
         * Optional path to js
         */
        js?: string;
        /*
         * required in order to use maptype
         */
        gmap_key?: string;
        /*
         * Stamen Maps:
         * toner
         * toner-lines
         * toner-labels
         * watercolor
         * sterrain
         *
         * Google Maps:
         * ROADMAP
         * TERRAIN
         * HYBRID
         * SATELLITE
         *
         * OpenStreetMap:
         * osm
         */
        maptype?: string;
    }

    export interface ITimelineModel {
        timeline:ITimeLine;
    }

    export interface ITimeLine {
        headline?:string;
        type?:string;
        text?:string;
        asset?:ITimeLineAsset;
        date?:ITimelineDate[];
        era?:ITimelineEra[];
    }

    export interface ITimeLineAsset {
        media:string;
        thumbnail?:string;
        credit:string;
        caption:string;
    }

    export interface ITimelineDate extends ITimelineEra {
        classname?:string;
        asset?:ITimeLineAsset;
    }

    export interface ITimelineEra {
        /*
         * format example: 2011,12,10
         */
        startDate:string;
        /*
         * format example: 2011,12,10
         */
        endDate:string;
        headline:string;
        text:string;
        tag?:string;
    }
}