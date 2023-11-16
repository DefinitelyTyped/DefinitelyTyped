import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * InstagramVideoMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramVideoMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        duration: "duration";
        height: "height";
        width: "width";
    }>;
}
