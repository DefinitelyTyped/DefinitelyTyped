import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PhotoMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PhotoMetadata extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
