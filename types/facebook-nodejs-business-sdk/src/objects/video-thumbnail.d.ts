import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoThumbnail
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoThumbnail extends AbstractCrudObject {
    static get Fields(): Readonly<{
        height: "height";
        id: "id";
        is_preferred: "is_preferred";
        name: "name";
        scale: "scale";
        uri: "uri";
        width: "width";
    }>;
}
