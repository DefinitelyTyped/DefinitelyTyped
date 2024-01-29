import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ContextualBundlingSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContextualBundlingSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        status: "status";
    }>;
}
