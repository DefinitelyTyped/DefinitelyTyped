import { AbstractCrudObject } from "./../abstract-crud-object";
export default class DACheck extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ConnectionMethod(): Record<string, any>;
}
