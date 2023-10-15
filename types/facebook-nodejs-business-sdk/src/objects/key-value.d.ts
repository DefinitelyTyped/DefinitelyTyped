import { AbstractCrudObject } from "./../abstract-crud-object";
export default class KeyValue extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
