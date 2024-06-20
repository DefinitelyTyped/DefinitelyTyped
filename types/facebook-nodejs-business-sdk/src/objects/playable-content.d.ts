import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlayableContent

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlayableContent extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PlayableContent>;
}
