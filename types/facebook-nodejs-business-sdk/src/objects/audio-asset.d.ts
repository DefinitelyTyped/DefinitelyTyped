import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioAsset

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioAsset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioAsset>;
}
