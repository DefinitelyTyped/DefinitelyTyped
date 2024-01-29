import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CloudGame
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CloudGame extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        owner: "owner";
        playable_ad_file_size: "playable_ad_file_size";
        playable_ad_orientation: "playable_ad_orientation";
        playable_ad_package_name: "playable_ad_package_name";
        playable_ad_reject_reason: "playable_ad_reject_reason";
        playable_ad_status: "playable_ad_status";
        playable_ad_upload_time: "playable_ad_upload_time";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CloudGame>;
}
