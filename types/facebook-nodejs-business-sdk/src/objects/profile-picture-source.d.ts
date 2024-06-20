import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProfilePictureSource

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProfilePictureSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
}
