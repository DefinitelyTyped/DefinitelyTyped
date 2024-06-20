import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageReferenceMatch

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageReferenceMatch extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ImageReferenceMatch>;
}
