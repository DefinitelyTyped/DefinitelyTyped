import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageStartInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageStartInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        date: "date";
        type: "type";
    }>;
}
