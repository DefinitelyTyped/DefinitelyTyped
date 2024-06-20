import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioRelease

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioRelease extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioRelease>;
}
