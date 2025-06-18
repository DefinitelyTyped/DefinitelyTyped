import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ANBlockedBICategory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ANBlockedBICategory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
    }>;
}
