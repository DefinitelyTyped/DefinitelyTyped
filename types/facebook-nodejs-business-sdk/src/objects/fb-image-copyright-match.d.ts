import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FBImageCopyrightMatch

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBImageCopyrightMatch extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<FBImageCopyrightMatch>;
}
