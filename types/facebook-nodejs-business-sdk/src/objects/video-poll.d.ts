import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * VideoPoll
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoPoll extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get Action(): Record<string, any>;
    getPollOptions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoPoll>;    get(fields: string[], params?: Record<string, any>): Promise<VideoPoll>;
}
