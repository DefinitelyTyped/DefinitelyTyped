import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * MailingAddress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MailingAddress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        city: "city";
        city_page: "city_page";
        country: "country";
        id: "id";
        postal_code: "postal_code";
        region: "region";
        street1: "street1";
        street2: "street2";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): MailingAddress;
}
