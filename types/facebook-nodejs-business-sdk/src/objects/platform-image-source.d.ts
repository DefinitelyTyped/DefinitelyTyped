import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PlatformImageSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlatformImageSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        height: "height";
        source: "source";
        width: "width";
    }>;
}
