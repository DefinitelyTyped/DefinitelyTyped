import BaseEvent from './events/Event';
import { EventTargetLike } from './events/Target';

export interface EventsKey {
    listener: ListenerFunction;
    target: EventTargetLike;
    type: string;
}
export type ListenerFunction = (p0: Event | BaseEvent) => boolean;
export function listen(
    target: EventTargetLike,
    type: string,
    listener: ListenerFunction,
    opt_this?: any,
    opt_once?: boolean,
): EventsKey;
export function listenOnce(
    target: EventTargetLike,
    type: string,
    listener: ListenerFunction,
    opt_this?: any,
): EventsKey;
export function unlistenByKey(key: EventsKey): void;
