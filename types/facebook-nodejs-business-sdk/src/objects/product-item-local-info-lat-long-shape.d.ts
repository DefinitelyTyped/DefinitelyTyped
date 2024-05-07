import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductItemLocalInfoLatLongShape
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLocalInfoLatLongShape extends AbstractCrudObject {
    static get Fields(): Readonly<{
        latitude: "latitude";
        longitude: "longitude";
    }>;
}
