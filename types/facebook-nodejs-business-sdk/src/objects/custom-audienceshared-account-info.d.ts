import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CustomAudiencesharedAccountInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudiencesharedAccountInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_name: "account_name";
        business_id: "business_id";
        business_name: "business_name";
        sharing_status: "sharing_status";
    }>;
}
