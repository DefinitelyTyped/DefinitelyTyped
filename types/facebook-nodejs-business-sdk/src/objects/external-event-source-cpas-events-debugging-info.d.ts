import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalEventSourceCPASEventsDebuggingInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSourceCPASEventsDebuggingInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        counts: "counts";
        diagnostic: "diagnostic";
        event_name: "event_name";
    }>;
}
