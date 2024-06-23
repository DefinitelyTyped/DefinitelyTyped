import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * GameItem
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GameItem extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        created: "created";
        ext_id: "ext_id";
        id: "id";
        item_def: "item_def";
        owner: "owner";
        status: "status";
        updated: "updated";
    }>;
    static get Action(): Readonly<{
        consume: "CONSUME";
        drop: "DROP";
        mark: "MARK";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<GameItem>;
}
