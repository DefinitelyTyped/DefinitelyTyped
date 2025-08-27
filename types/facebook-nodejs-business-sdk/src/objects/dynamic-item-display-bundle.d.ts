import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        additional_urls: "additional_urls";
        description: "description";
        id: "id";
        name: "name";
        product_set: "product_set";
        text_tokens: "text_tokens";
        url: "url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicItemDisplayBundle>;
}
