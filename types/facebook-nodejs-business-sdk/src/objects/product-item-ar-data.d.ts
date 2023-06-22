import { AbstractCrudObject } from "./../abstract-crud-object";
export default class ProductItemARData extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Surfaces(): Record<string, any>;
}
