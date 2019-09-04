import Disposable from '../Disposable';
import { ListenerFunction } from '../events';
import Event from './Event';

export type EventTargetLike = EventTarget | Target;
export default class Target extends Disposable {
    constructor();
    addEventListener(type: string, listener: ListenerFunction): void;
    dispatchEvent(event: object | Event | string): boolean | undefined;
    getListeners(type: string): ListenerFunction[];
    hasListener(opt_type?: string): boolean;
    removeEventListener(type: string, listener: ListenerFunction): void;
}
