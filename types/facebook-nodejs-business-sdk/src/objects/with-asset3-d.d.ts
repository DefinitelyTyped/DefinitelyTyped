import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WithAsset3D
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WithAsset3D extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): WithAsset3D;
}
