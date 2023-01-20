import { AbstractCrudObject } from "./../abstract-crud-object";
export default class NullNode extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
