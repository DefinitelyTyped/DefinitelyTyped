import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageGetStartedNullstate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageGetStartedNullstate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        cta_title: "cta_title";
        processed_greeting: "processed_greeting";
        responsiveness: "responsiveness";
    }>;
}
