import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataMoment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataMoment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        type: "type";
    }>;
    static get Type(): Readonly<{
        fb_live_shopping: "FB_LIVE_SHOPPING";
        ig_drops: "IG_DROPS";
        ig_live_shopping: "IG_LIVE_SHOPPING";
    }>;
}
