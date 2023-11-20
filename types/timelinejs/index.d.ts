declare function createStoryJS(config: knightlab.ITimeLineConfiguration): void;

declare namespace knightlab {
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
        type?: string | undefined;
        /*
         * Optional use a different div id for embed
         */
        embed_id?: string | undefined;
        /*
         * Optional start at latest date
         */
        start_at_end?: boolean | undefined;
        /*
         * Optional start at specific slide
         */
        start_at_slide?: string | undefined;
        /*
         * Optional tweak the default zoom level
         */
        start_zoom_adjust?: string | undefined;
        /*
         * Optional location bar hashes
         */
        hash_bookmark?: boolean | undefined;
        /*
         * Optional font
         */
        font?: string | undefined;
        /*
         * Optional debug to console
         */
        debug?: boolean | undefined;
        /*
         * Optional language
         */
        lang?: string | undefined;
        /*
         * Optional path to css
         */
        css?: string | undefined;
        /*
         * Optional path to js
         */
        js?: string | undefined;
        /*
         * required in order to use maptype
         */
        gmap_key?: string | undefined;
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
        maptype?: string | undefined;
    }

    export interface ITimelineModel {
        timeline: ITimeLine;
    }

    export interface ITimeLine {
        headline?: string | undefined;
        type?: string | undefined;
        text?: string | undefined;
        asset?: ITimeLineAsset | undefined;
        date?: ITimelineDate[] | undefined;
        era?: ITimelineEra[] | undefined;
    }

    export interface ITimeLineAsset {
        media: string;
        thumbnail?: string | undefined;
        credit: string;
        caption: string;
    }

    export interface ITimelineDate extends ITimelineEra {
        classname?: string | undefined;
        asset?: ITimeLineAsset | undefined;
    }

    export interface ITimelineEra {
        /*
         * format example: 2011,12,10
         */
        startDate: string;
        /*
         * format example: 2011,12,10
         */
        endDate: string;
        headline: string;
        text: string;
        tag?: string | undefined;
    }
}
