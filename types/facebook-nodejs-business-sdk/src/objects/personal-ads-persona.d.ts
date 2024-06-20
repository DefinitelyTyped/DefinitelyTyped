import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PersonalAdsPersona

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PersonalAdsPersona extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PersonalAdsPersona>;
}
