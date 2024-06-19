import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Experience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Experience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
