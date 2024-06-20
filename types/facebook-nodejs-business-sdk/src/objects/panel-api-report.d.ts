import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PanelAPIReport

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PanelAPIReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PanelAPIReport>;
}
