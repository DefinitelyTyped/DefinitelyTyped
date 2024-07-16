import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Robot
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Robot extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bringup_vars: "bringup_vars";
        configurations: "configurations";
        data_center: "data_center";
        id: "id";
        init_pos: "init_pos";
        last_pos: "last_pos";
        meetup_link_hash: "meetup_link_hash";
        suite: "suite";
        target_map_image_uri: "target_map_image_uri";
        target_os_image_uri: "target_os_image_uri";
        target_sw_image_uri: "target_sw_image_uri";
        user: "user";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<Robot>;
}
