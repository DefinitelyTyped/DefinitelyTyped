import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CanvasTemplate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasTemplate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        channels: "channels";
        description: "description";
        document: "document";
        id: "id";
        is_multi_tab_supportable: "is_multi_tab_supportable";
        is_new: "is_new";
        name: "name";
        objectives: "objectives";
        owner_id: "owner_id";
        required_capabilities: "required_capabilities";
        snapshot_photo: "snapshot_photo";
        status: "status";
        sub_verticals: "sub_verticals";
        verticals: "verticals";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CanvasTemplate>;
}
