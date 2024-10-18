import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeAssetSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeAssetSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        source_url: "source_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WebsiteCreativeAssetSource>;
}
