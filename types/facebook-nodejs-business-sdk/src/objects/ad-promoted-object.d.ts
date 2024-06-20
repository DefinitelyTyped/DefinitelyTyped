import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdPromotedObject

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPromotedObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomEventType(): Record<string, any>;
}
