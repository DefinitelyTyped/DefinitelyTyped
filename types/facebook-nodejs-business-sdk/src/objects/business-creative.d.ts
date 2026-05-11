import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessCreative
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreative extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        duration: "duration";
        hash: "hash";
        height: "height";
        id: "id";
        name: "name";
        thumbnail: "thumbnail";
        type: "type";
        url: "url";
        video_id: "video_id";
        width: "width";
    }>;
}
