import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioIsrc

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioIsrc extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AudioIsrc>;
}
