import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessAdAccountRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAdAccountRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account: "ad_account";
        id: "id";
    }>;
}
