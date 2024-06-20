import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MusicWorkCopyright

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MusicWorkCopyright extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MusicWorkCopyright>;
}
