import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PrivateComputationEnvironment

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateComputationEnvironment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PrivateComputationEnvironment>;
}
