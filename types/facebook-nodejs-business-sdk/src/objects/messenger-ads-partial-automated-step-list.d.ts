import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * MessengerAdsPartialAutomatedStepList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerAdsPartialAutomatedStepList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        fblead_form: "fblead_form";
        first_step_id: "first_step_id";
        id: "id";
        page: "page";
        privacy_url: "privacy_url";
        reminder_text: "reminder_text";
        stop_question_message: "stop_question_message";
    }>;
    getSteps(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getSteps(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getSteps(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<MessengerAdsPartialAutomatedStepList>;
}
