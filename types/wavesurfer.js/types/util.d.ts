import Observer from '../src/util/observer';
import { XHROptions } from './xhr';
import * as util from '../src/util';

export type WaveSurferUtil = typeof util;

export interface Styles {
    [styleName: string]: string;
}

export interface DrawingContextAttributes {
    desynchronized: boolean;
}

export type EventHandler = (...args: any[]) => void;

export interface ListenerDescriptor {
    /** The name of the event. */
    name: string;
    /** The callback. */
    callback: (...args: any[]) => void;
    /** The function to call to remove the listener. */
    un: () => void;
}
