import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FranchiseProgram

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgram extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<FranchiseProgram>;
}
