import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ManagementSiteLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagementSiteLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        id: "id";
        link_domain: "link_domain";
        link_hash: "link_hash";
        link_image_hash: "link_image_hash";
        link_image_url: "link_image_url";
        link_title: "link_title";
        link_type: "link_type";
        link_url: "link_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ManagementSiteLink>;
}
