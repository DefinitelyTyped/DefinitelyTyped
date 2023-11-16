import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AsyncSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncSession extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app: "app";
        complete_time: "complete_time";
        error_code: "error_code";
        exception: "exception";
        id: "id";
        method: "method";
        name: "name";
        page: "page";
        percent_completed: "percent_completed";
        platform_version: "platform_version";
        result: "result";
        start_time: "start_time";
        status: "status";
        uri: "uri";
        user: "user";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): AsyncSession;
}
