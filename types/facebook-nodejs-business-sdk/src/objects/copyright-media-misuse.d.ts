import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CopyrightMediaMisuse

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightMediaMisuse extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CopyrightMediaMisuse>;
}
