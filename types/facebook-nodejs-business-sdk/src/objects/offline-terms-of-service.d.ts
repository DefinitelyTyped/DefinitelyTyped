import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineTermsOfService
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineTermsOfService extends AbstractCrudObject {
    static get Fields(): Readonly<{
        accept_time: "accept_time";
        id: "id";
        signed_by_user: "signed_by_user";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<OfflineTermsOfService>;
}
