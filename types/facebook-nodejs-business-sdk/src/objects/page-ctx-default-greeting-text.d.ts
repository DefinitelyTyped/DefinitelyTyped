import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCTXDefaultGreetingText
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTXDefaultGreetingText extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ctd: "ctd";
        ctm: "ctm";
        ctwa: "ctwa";
    }>;
}
