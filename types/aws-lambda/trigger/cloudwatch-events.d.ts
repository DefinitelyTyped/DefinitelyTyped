import { EventBridgeHandler, EventBridgeEvent } from '../trigger/eventbridge';

export type ScheduledHandler = EventBridgeHandler<'Scheduled Event', ScheduledEvent, void>;

// TODO: generic cloudwatch event types.

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html
 */
export interface ScheduledEvent extends EventBridgeEvent<'Scheduled Event', any> {}
