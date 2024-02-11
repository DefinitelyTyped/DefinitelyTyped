import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserAvailableCatalogs
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserAvailableCatalogs extends AbstractCrudObject {
    static get Fields(): Readonly<{
        catalog_id: "catalog_id";
        catalog_name: "catalog_name";
        product_count: "product_count";
        shop_name: "shop_name";
    }>;
}
