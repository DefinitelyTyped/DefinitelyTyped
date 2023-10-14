import { AbstractCrudObject } from './../abstract-crud-object';
export default class GameItem extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<GameItem>;
}
