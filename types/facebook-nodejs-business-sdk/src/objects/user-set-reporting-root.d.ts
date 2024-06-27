import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * UserSetReportingRoot
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserSetReportingRoot extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        id: "id";
        last_modified_time: "last_modified_time";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): UserSetReportingRoot;
}
