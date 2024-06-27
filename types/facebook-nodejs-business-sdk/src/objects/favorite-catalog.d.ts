import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FavoriteCatalog
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FavoriteCatalog extends AbstractCrudObject {
    static get Fields(): Readonly<{
        catalog: "catalog";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): FavoriteCatalog;
}
