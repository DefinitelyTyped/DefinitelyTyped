import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeAssetSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeAssetSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        source_url: "source_url";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): WebsiteCreativeAssetSource;
}
