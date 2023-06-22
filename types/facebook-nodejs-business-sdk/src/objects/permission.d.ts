import { AbstractCrudObject } from "./../abstract-crud-object";
export default class Permission extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
}
