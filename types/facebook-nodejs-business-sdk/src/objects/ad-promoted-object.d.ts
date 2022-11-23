import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdPromotedObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomEventType(): Record<string, any>;
}
