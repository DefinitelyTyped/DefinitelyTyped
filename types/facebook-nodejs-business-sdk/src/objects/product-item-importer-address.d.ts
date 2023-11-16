import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductItemImporterAddress
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemImporterAddress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        city: "city";
        country: "country";
        postal_code: "postal_code";
        region: "region";
        street1: "street1";
        street2: "street2";
    }>;
}
