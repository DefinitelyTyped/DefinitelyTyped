import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * StreamFilter
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StreamFilter extends AbstractCrudObject {
    static get Fields(): Readonly<{
        filter_key: "filter_key";
        name: "name";
        type: "type";
    }>;
}
