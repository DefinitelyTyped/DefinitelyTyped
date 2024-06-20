import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserSetReportingRoot
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserSetReportingRoot extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<UserSetReportingRoot>;
}
