import { EventBridgeHandler, EventBridgeEvent } from '../trigger/eventbridge';

export type ScheduledHandler<TDetail = any> = EventBridgeHandler<'Scheduled Event', TDetail, void>;

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html
 */
export interface ScheduledEvent<TDetail = any> extends EventBridgeEvent<'Scheduled Event', TDetail> {}
