import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserSetReportingRoot
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserSetReportingRoot extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        id: "id";
        last_modified_time: "last_modified_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<UserSetReportingRoot>;
}
