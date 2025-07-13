import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerBusinessTemplate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerBusinessTemplate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category: "category";
        components: "components";
        creation_time: "creation_time";
        id: "id";
        language: "language";
        language_count: "language_count";
        last_updated_time: "last_updated_time";
        library_template_name: "library_template_name";
        name: "name";
        rejected_reason: "rejected_reason";
        rejection_reasons: "rejection_reasons";
        specific_rejection_reasons: "specific_rejection_reasons";
        status: "status";
    }>;
    static get Status(): Readonly<{
        approved: "APPROVED";
        archived: "ARCHIVED";
        deleted: "DELETED";
        disabled: "DISABLED";
        in_appeal: "IN_APPEAL";
        limit_exceeded: "LIMIT_EXCEEDED";
        paused: "PAUSED";
        pending: "PENDING";
        pending_deletion: "PENDING_DELETION";
        rejected: "REJECTED";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<MessengerBusinessTemplate>;
    update(fields: string[], params?: Record<string, any>): Promise<MessengerBusinessTemplate>;
}
