import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AsyncRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        result: "result";
        status: "status";
        type: "type";
    }>;
    static get Status(): Readonly<{
        error: "ERROR";
        executing: "EXECUTING";
        finished: "FINISHED";
        initialized: "INITIALIZED";
    }>;
    static get Type(): Readonly<{
        async_adgroup_creation: "ASYNC_ADGROUP_CREATION";
        batch_api: "BATCH_API";
        drafts: "DRAFTS";
    }>;
}
