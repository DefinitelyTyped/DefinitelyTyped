import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebsiteCreativeInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        image_urls: "image_urls";
        link_url: "link_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WebsiteCreativeInfo>;
}
