import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * OpenBridgeConfiguration

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OpenBridgeConfiguration extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<OpenBridgeConfiguration>;    get(fields: string[], params?: Record<string, any>): Promise<OpenBridgeConfiguration>;
}
