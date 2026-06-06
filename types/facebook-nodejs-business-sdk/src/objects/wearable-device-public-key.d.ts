import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WearableDevicePublicKey
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WearableDevicePublicKey extends AbstractCrudObject {
    static get Fields(): Readonly<{
        base64_encoded_public_key: "base64_encoded_public_key";
        creation_time_on_device: "creation_time_on_device";
        device_uuid: "device_uuid";
        id: "id";
        key_type: "key_type";
        owner_id: "owner_id";
        product_use_case: "product_use_case";
        version: "version";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WearableDevicePublicKey>;
}
