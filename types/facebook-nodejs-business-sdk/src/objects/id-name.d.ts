import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IDName
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IDName extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
    }>;
}
