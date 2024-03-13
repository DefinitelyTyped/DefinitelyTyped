import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * SavedAudience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account: "account";
        approximate_count_lower_bound: "approximate_count_lower_bound";
        approximate_count_upper_bound: "approximate_count_upper_bound";
        delete_time: "delete_time";
        description: "description";
        id: "id";
        name: "name";
        operation_status: "operation_status";
        owner_business: "owner_business";
        page_deletion_marked_delete_time: "page_deletion_marked_delete_time";
        permission_for_actions: "permission_for_actions";
        run_status: "run_status";
        sentence_lines: "sentence_lines";
        targeting: "targeting";
        time_created: "time_created";
        time_updated: "time_updated";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<SavedAudience>;
}
