import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FantasyGame

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FantasyGame extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<FantasyGame>;
}
