import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGRefreshAccessTokenForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGRefreshAccessTokenForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        access_token: "access_token";
        expires_in: "expires_in";
        token_type: "token_type";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): IGRefreshAccessTokenForIGOnlyAPI;
}
