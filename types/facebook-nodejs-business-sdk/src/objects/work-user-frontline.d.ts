import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WorkUserFrontline
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkUserFrontline extends AbstractCrudObject {
    static get Fields(): Readonly<{
        has_access: "has_access";
        is_frontline: "is_frontline";
    }>;
}
