import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LiveVideoError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        error_code: "error_code";
        error_message: "error_message";
        error_type: "error_type";
        id: "id";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<LiveVideoError>;
}
