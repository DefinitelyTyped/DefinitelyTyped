import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ChildEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ChildEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        id: "id";
        start_time: "start_time";
        ticket_uri: "ticket_uri";
    }>;
}
