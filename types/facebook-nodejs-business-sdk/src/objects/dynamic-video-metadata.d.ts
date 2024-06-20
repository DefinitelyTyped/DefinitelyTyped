import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicVideoMetadata

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicVideoMetadata extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicVideoMetadata>;
}
