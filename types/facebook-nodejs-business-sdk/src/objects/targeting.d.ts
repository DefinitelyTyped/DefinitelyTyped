import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Targeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Targeting extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DevicePlatforms(): Record<string, any>;
    static get EffectiveDevicePlatforms(): Record<string, any>;
}
