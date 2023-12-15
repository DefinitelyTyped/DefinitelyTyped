import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdDynamicCreative
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDynamicCreative extends AbstractCrudObject {
    static get Fields(): Readonly<{
        preview_url: "preview_url";
    }>;
}
