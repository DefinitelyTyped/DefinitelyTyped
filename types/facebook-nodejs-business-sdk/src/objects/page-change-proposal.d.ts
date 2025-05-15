import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageChangeProposal
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageChangeProposal extends AbstractCrudObject {
    static get Fields(): Readonly<{
        acceptance_status: "acceptance_status";
        category: "category";
        id: "id";
        upcoming_change_info: "upcoming_change_info";
    }>;
}
