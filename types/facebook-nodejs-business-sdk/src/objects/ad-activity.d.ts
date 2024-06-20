import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdActivity
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdActivity extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get EventType(): Record<string, any>;
    static get Category(): Record<string, any>;
    static get DataSource(): Record<string, any>;
}
