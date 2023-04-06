import { AbstractCrudObject } from "./../abstract-crud-object";
export default class Targeting extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DevicePlatforms(): Record<string, any>;
    static get EffectiveDevicePlatforms(): Record<string, any>;
}
