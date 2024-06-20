import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OffsitePixel

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsitePixel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<OffsitePixel>;
}
