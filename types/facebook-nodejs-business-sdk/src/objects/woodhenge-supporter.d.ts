import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WoodhengeSupporter
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WoodhengeSupporter extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WoodhengeSupporter>;
}
