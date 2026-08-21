import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGAccessTokenForIGOnlyAPI
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGAccessTokenForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Readonly<{
        access_token: "access_token";
        expires_in: "expires_in";
        token_type: "token_type";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<IGAccessTokenForIGOnlyAPI>;
}
