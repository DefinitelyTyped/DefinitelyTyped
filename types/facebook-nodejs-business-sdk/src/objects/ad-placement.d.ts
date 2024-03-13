import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdPlacement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bundle_id: "bundle_id";
        display_format: "display_format";
        external_placement_id: "external_placement_id";
        google_display_format: "google_display_format";
        id: "id";
        name: "name";
        placement_group: "placement_group";
        platform: "platform";
        status: "status";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AdPlacement>;
}
