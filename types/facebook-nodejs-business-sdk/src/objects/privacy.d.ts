import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Privacy
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Privacy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        allow: "allow";
        deny: "deny";
        description: "description";
        friends: "friends";
        networks: "networks";
        value: "value";
    }>;
}
