import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DestinationCatalogSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DestinationCatalogSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        generate_items_from_pages: "generate_items_from_pages";
        id: "id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<DestinationCatalogSettings>;
}
