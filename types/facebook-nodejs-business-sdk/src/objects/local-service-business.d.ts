import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * LocalServiceBusiness

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LocalServiceBusiness extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get Visibility(): Record<string, any>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<LocalServiceBusiness>;
}
