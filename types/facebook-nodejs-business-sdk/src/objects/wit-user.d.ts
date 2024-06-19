import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WITUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WITUser extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
