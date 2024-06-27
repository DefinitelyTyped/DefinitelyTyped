import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * AppRequest
 * @extends AbstractCrudObject
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
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): AppRequest;
}
