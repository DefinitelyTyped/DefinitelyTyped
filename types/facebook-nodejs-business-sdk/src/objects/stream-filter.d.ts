import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * StreamFilter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StreamFilter extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
