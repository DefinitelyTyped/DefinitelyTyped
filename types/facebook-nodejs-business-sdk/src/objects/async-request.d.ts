import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AsyncRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Type(): Record<string, any>;
}
