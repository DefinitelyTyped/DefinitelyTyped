import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerProfile extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
