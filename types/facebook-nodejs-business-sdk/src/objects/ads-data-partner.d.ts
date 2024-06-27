import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsDataPartner
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsDataPartner extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        rev_share_policies: "rev_share_policies";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): AdsDataPartner;
}
