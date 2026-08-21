import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ABTestPostTestActions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ABTestPostTestActions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auto_change_budget_to_winner: "auto_change_budget_to_winner";
    }>;
}
