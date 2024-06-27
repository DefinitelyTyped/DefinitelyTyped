import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelSignalsIWLNux
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelSignalsIWLNux extends AbstractCrudObject {
    static get Fields(): Readonly<{
        background_color: "background_color";
        content: "content";
        content_color: "content_color";
        content_size: "content_size";
        img_url: "img_url";
    }>;
}
