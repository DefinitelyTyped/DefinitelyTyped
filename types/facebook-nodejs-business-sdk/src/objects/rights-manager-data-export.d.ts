import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * RightsManagerDataExport

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RightsManagerDataExport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<RightsManagerDataExport>;
}
