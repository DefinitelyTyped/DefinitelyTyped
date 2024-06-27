import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * PublisherBlockList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherBlockList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        app_publishers: "app_publishers";
        business_owner_id: "business_owner_id";
        id: "id";
        is_auto_blocking_on: "is_auto_blocking_on";
        is_eligible_at_campaign_level: "is_eligible_at_campaign_level";
        last_update_time: "last_update_time";
        last_update_user: "last_update_user";
        name: "name";
        owner_ad_account_id: "owner_ad_account_id";
        web_publishers: "web_publishers";
    }>;
    createAppendPublisherUrl(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getPagedWebPublishers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): PublisherBlockList;
    update(fields: Array<string>, params?: Record<string, any>): PublisherBlockList;
}
