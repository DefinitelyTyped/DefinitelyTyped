import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreativeMulticellTestConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeMulticellTestConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        budget_percentage: "budget_percentage";
        configured_cell_count: "configured_cell_count";
        daily_budget: "daily_budget";
        entry_source: "entry_source";
        lifetime_budget: "lifetime_budget";
        use_existing_daily_budget: "use_existing_daily_budget";
    }>;
}
