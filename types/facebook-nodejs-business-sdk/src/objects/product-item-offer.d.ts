import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemOffer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        availability_area: "availability_area";
        availability_radius: "availability_radius";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): ProductItemOffer;
}
