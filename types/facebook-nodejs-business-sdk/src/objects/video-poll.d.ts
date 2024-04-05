import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * VideoPoll
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoPoll extends AbstractCrudObject {
    static get Fields(): Readonly<{
        close_after_voting: "close_after_voting";
        default_open: "default_open";
        id: "id";
        question: "question";
        show_gradient: "show_gradient";
        show_results: "show_results";
        status: "status";
    }>;
    static get Status(): Readonly<{
        closed: "closed";
        results_open: "results_open";
        voting_open: "voting_open";
    }>;
    static get Action(): Readonly<{
        attach_to_video: "ATTACH_TO_VIDEO";
        close: "CLOSE";
        delete_poll: "DELETE_POLL";
        show_results: "SHOW_RESULTS";
        show_voting: "SHOW_VOTING";
    }>;
    getPollOptions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPollOptions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPollOptions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<VideoPoll>;
    update(fields: string[], params?: Record<any, any>): Promise<VideoPoll>;
}
