import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PrivateLiftStudyInstance
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
    static get Fields(): Readonly<{
        breakdown_key: "breakdown_key";
        created_time: "created_time";
        feature_list: "feature_list";
        id: "id";
        issuer_certificate: "issuer_certificate";
        latest_status_update_time: "latest_status_update_time";
        run_id: "run_id";
        server_hostnames: "server_hostnames";
        server_ips: "server_ips";
        status: "status";
        tier: "tier";
    }>;
    static get Operation(): Readonly<{
        aggregate: "AGGREGATE";
        cancel: "CANCEL";
        compute: "COMPUTE";
        id_match: "ID_MATCH";
        next: "NEXT";
        none: "NONE";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PrivateLiftStudyInstance>;
    update(fields: string[], params?: Record<any, any>): Promise<PrivateLiftStudyInstance>;
}
