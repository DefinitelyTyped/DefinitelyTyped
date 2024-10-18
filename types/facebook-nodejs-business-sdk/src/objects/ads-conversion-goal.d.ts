import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdsConversionGoal
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsConversionGoal extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        conversion_event_value_source: "conversion_event_value_source";
        description: "description";
        goal_creation_method: "goal_creation_method";
        id: "id";
        name: "name";
        performance_goal: "performance_goal";
        update_status: "update_status";
    }>;
    getConversionEvents(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsConversionGoal>;
}
