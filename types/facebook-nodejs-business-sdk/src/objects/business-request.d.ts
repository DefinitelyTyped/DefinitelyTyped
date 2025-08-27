import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        accessor: "accessor";
        creation_time: "creation_time";
        id: "id";
        object_id: "object_id";
        object_type: "object_type";
        permitted_tasks: "permitted_tasks";
        request_status: "request_status";
        request_type: "request_type";
        requestor: "requestor";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessRequest>;
}
