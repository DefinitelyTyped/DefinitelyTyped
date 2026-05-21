import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGScheduledMedia
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGScheduledMedia extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption: "caption";
        id: "id";
        media_type: "media_type";
        media_url: "media_url";
        publish_timestamp: "publish_timestamp";
        thumbnail_url: "thumbnail_url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ShadowIGScheduledMedia>;
}
