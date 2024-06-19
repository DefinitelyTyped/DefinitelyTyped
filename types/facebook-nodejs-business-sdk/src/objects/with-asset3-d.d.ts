import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WithAsset3D
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WithAsset3D extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): WithAsset3D;
}
