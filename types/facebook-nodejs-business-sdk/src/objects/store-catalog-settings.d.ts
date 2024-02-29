import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * StoreCatalogSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StoreCatalogSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page: "page";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<StoreCatalogSettings>;
}
