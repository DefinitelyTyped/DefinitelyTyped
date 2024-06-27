import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ResearchPollStudy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResearchPollStudy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account: "account";
        id: "id";
        name: "name";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): ResearchPollStudy;
}
