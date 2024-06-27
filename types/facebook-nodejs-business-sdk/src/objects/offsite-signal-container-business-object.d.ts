import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * OffsiteSignalContainerBusinessObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OffsiteSignalContainerBusinessObject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        id: "id";
        is_eligible_for_sharing_to_ad_account: "is_eligible_for_sharing_to_ad_account";
        is_eligible_for_sharing_to_business: "is_eligible_for_sharing_to_business";
        is_unavailable: "is_unavailable";
        name: "name";
        primary_container_id: "primary_container_id";
    }>;
    getLinkedApplication(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getLinkedPage(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): OffsiteSignalContainerBusinessObject;
}
