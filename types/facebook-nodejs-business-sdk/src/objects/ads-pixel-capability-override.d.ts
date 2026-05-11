import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelCapabilityOverride
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelCapabilityOverride extends AbstractCrudObject {
    static get Fields(): Readonly<{
        capability: "capability";
        id: "id";
        override_value: "override_value";
        reason: "reason";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsPixelCapabilityOverride>;
}
