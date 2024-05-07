import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageParking
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageParking extends AbstractCrudObject {
    static get Fields(): Readonly<{
        lot: "lot";
        street: "street";
        valet: "valet";
    }>;
}
