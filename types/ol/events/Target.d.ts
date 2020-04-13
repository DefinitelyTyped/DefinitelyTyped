import Disposable from '../Disposable';
import { Listener } from '../events';
import BaseEvent from './Event';

export type EventTargetLike = EventTarget | Target;
export default class Target extends Disposable {
    constructor(opt_target?: any);
    addEventListener(type: string, listener: Listener): void;
    dispatchEvent(event: BaseEvent | string): boolean;
    getListeners(type: string): Listener[];
    hasListener(opt_type?: string): boolean;
    removeEventListener(type: string, listener: Listener): void;
}
