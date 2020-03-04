import Disposable from '../Disposable';
import { ListenerFunction } from '../events';
import BaseEvent from './Event';

export type EventTargetLike = EventTarget | Target;
export default class Target extends Disposable {
    constructor(opt_target?: any);
    addEventListener(type: string, listener: ListenerFunction): void;
    dispatchEvent(event: object | BaseEvent | string): boolean;
    getListeners(type: string): ListenerFunction[];
    hasListener(opt_type?: string): boolean;
    removeEventListener(type: string, listener: ListenerFunction): void;
}
