import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * UserLeadGenDisclaimerResponse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserLeadGenDisclaimerResponse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checkbox_key: "checkbox_key";
        is_checked: "is_checked";
    }>;
}
