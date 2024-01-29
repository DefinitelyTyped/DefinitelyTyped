import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DACheck
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DACheck extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_uri: "action_uri";
        description: "description";
        key: "key";
        result: "result";
        title: "title";
        user_message: "user_message";
    }>;
    static get ConnectionMethod(): Readonly<{
        all: "ALL";
        app: "APP";
        browser: "BROWSER";
        server: "SERVER";
    }>;
}
