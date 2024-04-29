import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ValueBasedEligibleSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ValueBasedEligibleSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        title: "title";
        type: "type";
    }>;
}
