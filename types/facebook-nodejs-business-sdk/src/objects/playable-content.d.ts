import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PlayableContent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlayableContent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        owner: "owner";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PlayableContent>;
}
