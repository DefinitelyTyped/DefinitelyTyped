import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FranchiseProgramMember

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgramMember extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<FranchiseProgramMember>;
}
