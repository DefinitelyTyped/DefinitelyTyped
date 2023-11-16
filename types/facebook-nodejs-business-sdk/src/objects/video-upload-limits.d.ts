import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * VideoUploadLimits
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoUploadLimits extends AbstractCrudObject {
    static get Fields(): Readonly<{
        length: "length";
        size: "size";
    }>;
}
