import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BlockedUserInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BlockedUserInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        block_time: "block_time";
        block_type: "block_type";
        fbid: "fbid";
        name: "name";
        username: "username";
    }>;
}
