import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetMessageExtensions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetMessageExtensions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        type: "type";
    }>;
}
