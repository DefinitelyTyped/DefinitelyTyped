import { Handler } from "../handler";

export type ScheduledHandler = Handler<ScheduledEvent, void>;

// TODO: generic cloudwatch event types.

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html
 */
export interface ScheduledEvent {
    account: string;
    region: string;
    detail: any;
    'detail-type': string;
    source: string;
    time: string;
    id: string;
    resources: string[];
}
