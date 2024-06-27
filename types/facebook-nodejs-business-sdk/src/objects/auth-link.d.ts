import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AuthLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AuthLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        link: "link";
    }>;
}
