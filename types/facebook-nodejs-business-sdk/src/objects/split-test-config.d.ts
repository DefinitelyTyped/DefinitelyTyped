import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SplitTestConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SplitTestConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<SplitTestConfig>;
}
