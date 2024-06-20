import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGMediaBuilder

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaBuilder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ShadowIGMediaBuilder>;
}
