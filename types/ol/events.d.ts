import Event from './events/Event';
import { EventTargetLike } from './events/Target';

export interface EventsKey {
    bindTo?: any;
    boundListener?: ListenerFunction;
    callOnce: boolean;
    deleteIndex?: number;
    listener: ListenerFunction;
    target: EventTargetLike;
    type: string;
}
export type ListenerFunction = (p0: Event | Event) => boolean;
export function bindListener(listenerObj: EventsKey): ListenerFunction;
export function findListener(listeners: EventsKey[], listener: () => void, opt_this?: any, opt_setDeleteIndex?: boolean): EventsKey | undefined;
export function getListeners(target: EventTargetLike, type: string): EventsKey[] | undefined;
export function listen(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: any, opt_once?: boolean): EventsKey;
export function listenOnce(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: any): EventsKey;
export function unlisten(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: any): void;
export function unlistenAll(target: EventTargetLike): void;
export function unlistenByKey(key: EventsKey): void;
