import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WithAsset3D
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WithAsset3D extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WithAsset3D>;
}
