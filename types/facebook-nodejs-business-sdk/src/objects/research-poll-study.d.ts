import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ResearchPollStudy
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ResearchPollStudy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account: "account";
        id: "id";
        name: "name";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ResearchPollStudy>;
}
