import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * GenericVideoAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GenericVideoAsset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}
