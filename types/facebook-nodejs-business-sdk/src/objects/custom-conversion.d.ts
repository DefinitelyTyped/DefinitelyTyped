import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CustomConversion

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversion extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CustomEventType(): Record<string, any>;
    static get ActionSourceType(): Record<string, any>;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<CustomConversion>;    get(fields: string[], params?: Record<string, any>): Promise<CustomConversion>;
}
