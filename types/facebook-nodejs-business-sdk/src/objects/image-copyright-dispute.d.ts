import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageCopyrightDispute

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageCopyrightDispute extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ImageCopyrightDispute>;
}
