import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SiteLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SiteLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        link_image_hash: "link_image_hash";
        link_title: "link_title";
        link_type: "link_type";
        link_url: "link_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<SiteLink>;
}
