import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ScimCompanyUserPhoneNumber
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ScimCompanyUserPhoneNumber extends AbstractCrudObject {
    static get Fields(): Readonly<{
        number: "number";
        primary: "primary";
        type: "type";
    }>;
}
