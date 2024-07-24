import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeAssetSuggestions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeAssetSuggestions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        extraction_status: "extraction_status";
        id: "id";
        link_url: "link_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WebsiteCreativeAssetSuggestions>;
}
