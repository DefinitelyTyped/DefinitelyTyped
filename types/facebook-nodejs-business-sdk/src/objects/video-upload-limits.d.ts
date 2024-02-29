import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoUploadLimits
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoUploadLimits extends AbstractCrudObject {
    static get Fields(): Readonly<{
        length: "length";
        size: "size";
    }>;
}
