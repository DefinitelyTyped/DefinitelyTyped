import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Domain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Domain extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        url: "url";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): Domain;
}
