import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WearableDevicePublicKey
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WearableDevicePublicKey extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WearableDevicePublicKey>;
}
