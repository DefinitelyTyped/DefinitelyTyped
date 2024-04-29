import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * OpenBridgeConfiguration
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenBridgeConfiguration extends AbstractCrudObject {
    static get Fields(): Readonly<{
        access_key: "access_key";
        active: "active";
        endpoint: "endpoint";
        fallback_domain: "fallback_domain";
        fallback_domain_enabled: "fallback_domain_enabled";
        host_business_id: "host_business_id";
        host_external_id: "host_external_id";
        id: "id";
        pixel_id: "pixel_id";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<OpenBridgeConfiguration>;
    update(fields: string[], params?: Record<any, any>): Promise<OpenBridgeConfiguration>;
}
