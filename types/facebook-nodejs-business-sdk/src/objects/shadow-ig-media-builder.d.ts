import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGMediaBuilder
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaBuilder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        copyright_check_status: "copyright_check_status";
        id: "id";
        status: "status";
        status_code: "status_code";
        video_status: "video_status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ShadowIGMediaBuilder>;
}
