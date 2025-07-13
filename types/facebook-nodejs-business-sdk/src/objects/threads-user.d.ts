import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThreadsUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThreadsUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        threads_user_id: "threads_user_id";
        threads_user_profile_pic: "threads_user_profile_pic";
    }>;
}
