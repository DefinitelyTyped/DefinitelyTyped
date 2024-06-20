import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VidwallaBroadcast
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VidwallaBroadcast extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<VidwallaBroadcast>;
}
