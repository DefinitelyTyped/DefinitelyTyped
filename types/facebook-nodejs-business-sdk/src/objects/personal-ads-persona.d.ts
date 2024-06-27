import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PersonalAdsPersona
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PersonalAdsPersona extends AbstractCrudObject {
    static get Fields(): Readonly<{
        email: "email";
        first_name: "first_name";
        id: "id";
        last_name: "last_name";
        pending_email: "pending_email";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): PersonalAdsPersona;
}
