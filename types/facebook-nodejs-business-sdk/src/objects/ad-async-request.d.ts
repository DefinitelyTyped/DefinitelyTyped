import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * AdAsyncRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        async_request_set: "async_request_set";
        created_time: "created_time";
        id: "id";
        input: "input";
        result: "result";
        scope_object_id: "scope_object_id";
        status: "status";
        type: "type";
        updated_time: "updated_time";
    }>;
    static get Statuses(): Readonly<{
        canceled: "CANCELED";
        canceled_dependency: "CANCELED_DEPENDENCY";
        error: "ERROR";
        error_conflicts: "ERROR_CONFLICTS";
        error_dependency: "ERROR_DEPENDENCY";
        initial: "INITIAL";
        in_progress: "IN_PROGRESS";
        pending_dependency: "PENDING_DEPENDENCY";
        process_by_ad_async_engine: "PROCESS_BY_AD_ASYNC_ENGINE";
        process_by_event_processor: "PROCESS_BY_EVENT_PROCESSOR";
        success: "SUCCESS";
        user_canceled: "USER_CANCELED";
        user_canceled_dependency: "USER_CANCELED_DEPENDENCY";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<AdAsyncRequest>;
}
