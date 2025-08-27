import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * OpenBridgeConfiguration
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenBridgeConfiguration extends AbstractCrudObject {
    static get Fields(): Readonly<{
        active: "active";
        cloud_provider: "cloud_provider";
        cloud_region: "cloud_region";
        destination_id: "destination_id";
        endpoint: "endpoint";
        fallback_domain: "fallback_domain";
        first_party_domain: "first_party_domain";
        host_business_id: "host_business_id";
        id: "id";
        instance_id: "instance_id";
        instance_version: "instance_version";
        is_sgw_instance: "is_sgw_instance";
        partner_name: "partner_name";
        pixel_id: "pixel_id";
    }>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<OpenBridgeConfiguration>;
    update(fields: string[], params?: Record<string, any>): Promise<OpenBridgeConfiguration>;
}
