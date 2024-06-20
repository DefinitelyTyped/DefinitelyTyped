import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExtendedCreditApplication

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditApplication extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditApplication>;
}
