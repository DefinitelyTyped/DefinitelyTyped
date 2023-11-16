import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenQuestionOption
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenQuestionOption extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
        value: "value";
    }>;
}
