import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ColumnSuggestions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ColumnSuggestions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        explanations: "explanations";
        format: "format";
        objective: "objective";
        optimization_goals: "optimization_goals";
    }>;
}
