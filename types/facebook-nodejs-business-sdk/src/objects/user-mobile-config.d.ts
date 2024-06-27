import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserMobileConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserMobileConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        section_name: "section_name";
        value: "value";
    }>;
}
