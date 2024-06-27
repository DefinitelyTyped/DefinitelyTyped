import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EmailImport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EmailImport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        lists: "lists";
        total: "total";
    }>;
}
