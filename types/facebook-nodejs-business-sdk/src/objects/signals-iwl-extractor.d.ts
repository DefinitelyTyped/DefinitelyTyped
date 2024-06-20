import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SignalsIWLExtractor

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SignalsIWLExtractor extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<SignalsIWLExtractor>;
}
