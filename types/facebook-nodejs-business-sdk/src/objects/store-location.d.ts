import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * StoreLocation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StoreLocation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        full_address: "full_address";
        hours: "hours";
        id: "id";
        phone_number: "phone_number";
        pickup_options: "pickup_options";
        price_range: "price_range";
        store_code: "store_code";
        zip_code: "zip_code";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<StoreLocation>;
}
