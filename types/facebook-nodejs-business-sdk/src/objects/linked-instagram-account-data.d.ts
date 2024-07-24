import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LinkedInstagramAccountData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LinkedInstagramAccountData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        access_token: "access_token";
        analytics_claim: "analytics_claim";
        full_name: "full_name";
        profile_picture_url: "profile_picture_url";
        user_id: "user_id";
        user_name: "user_name";
    }>;
}
