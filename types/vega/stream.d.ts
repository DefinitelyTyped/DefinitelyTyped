import { Expr } from './expr';
import { MarkType } from './marktype';
export declare type EventSource = 'view' | 'scope' | 'window';
export declare type EventType = 'click' | 'dblclick' | 'dragenter' | 'dragleave' | 'dragover' | 'keydown' | 'keypress' | 'keyup' | 'mousedown' | 'mousemove' | 'mouseout' | 'mouseover' | 'mouseup' | 'mousewheel' | 'touchend' | 'touchmove' | 'touchstart' | 'wheel';
export interface StreamParameters {
    between?: Stream[];
    marktype?: MarkType;
    markname?: string;
    filter?: Expr | Expr[];
    throttle?: number;
    debounce?: number;
    consume?: boolean;
}
export interface EventStream extends StreamParameters {
    source?: EventSource;
    type: EventType;
}
export interface DerivedStream extends StreamParameters {
    stream: Stream;
}
export interface MergedStream extends StreamParameters {
    merge: Stream[];
}
export declare type Stream = EventStream | DerivedStream | MergedStream;
