import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WebAppLink
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebAppLink extends AbstractCrudObject {
    static get Fields(): Readonly<{
        should_fallback: "should_fallback";
        url: "url";
    }>;
}
