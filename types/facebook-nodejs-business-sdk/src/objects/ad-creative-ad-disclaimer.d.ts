import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeAdDisclaimer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeAdDisclaimer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        text: "text";
        title: "title";
        url: "url";
    }>;
}
