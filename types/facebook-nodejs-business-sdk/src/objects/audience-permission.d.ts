import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudiencePermission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudiencePermission extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience: "audience";
        share_account_id: "share_account_id";
        share_account_name: "share_account_name";
    }>;
}
