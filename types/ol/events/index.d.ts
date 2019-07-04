import Event from 'ol/events/Event';
import { EventTargetLike } from 'ol/events/Target';
export function bindListener(listenerObj: EventsKey): ListenerFunction;
export function findListener(listeners: EventsKey[], listener: (() => void), opt_this?: { [key: string]: any }, opt_setDeleteIndex?: boolean): EventsKey;
export function getListeners(target: EventTargetLike, type: string): EventsKey[];
export function listen(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: { [key: string]: any }, opt_once?: boolean): EventsKey;
export function listenOnce(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: { [key: string]: any }): EventsKey;
export function unlisten(target: EventTargetLike, type: string, listener: ListenerFunction, opt_this?: { [key: string]: any }): void;
export function unlistenAll(target: EventTargetLike): void;
export function unlistenByKey(key: EventsKey): void;
export interface EventsKey {
    bindTo?: { [key: string]: any };
    boundListener?: ListenerFunction;
    callOnce: boolean;
    deleteIndex?: number;
    listener: ListenerFunction;
    target: EventTargetLike;
    type: string;
}
export type ListenerFunction = ((param0: Event | Event) => void | boolean);
