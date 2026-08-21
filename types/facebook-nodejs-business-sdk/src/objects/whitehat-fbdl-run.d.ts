import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhitehatFBDLRun
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhitehatFBDLRun extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        id: "id";
        is_pinned: "is_pinned";
        note: "note";
        result: "result";
        run_code: "run_code";
        status: "status";
        user_type: "user_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WhitehatFBDLRun>;
}
