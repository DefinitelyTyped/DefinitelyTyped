import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreativeMulticellTestConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeMulticellTestConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        daily_budget: "daily_budget";
        lifetime_budget: "lifetime_budget";
    }>;
}
