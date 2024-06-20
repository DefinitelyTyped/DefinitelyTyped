import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DACheck

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DACheck extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ConnectionMethod(): Record<string, any>;
}
