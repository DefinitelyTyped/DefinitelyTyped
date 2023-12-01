import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductCatalogHotelRoomsBatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogHotelRoomsBatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        errors: "errors";
        errors_total_count: "errors_total_count";
        handle: "handle";
        status: "status";
    }>;
}
