import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PrivateComputationEnvironment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateComputationEnvironment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        publisher_account_id: "publisher_account_id";
        publisher_pce_deployment_status: "publisher_pce_deployment_status";
        publisher_pce_id: "publisher_pce_id";
        publisher_region: "publisher_region";
        publisher_vpc_id: "publisher_vpc_id";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): PrivateComputationEnvironment;
}
