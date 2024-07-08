import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SplitTestConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SplitTestConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        budget: "budget";
        early_winner_declaration_enabled: "early_winner_declaration_enabled";
        end_time: "end_time";
        splits: "splits";
        start_time: "start_time";
        test_variable: "test_variable";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<SplitTestConfig>;
}
