import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * AppRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_type: "action_type";
        application: "application";
        created_time: "created_time";
        data: "data";
        from: "from";
        id: "id";
        message: "message";
        object: "object";
        to: "to";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<AppRequest>;
}
