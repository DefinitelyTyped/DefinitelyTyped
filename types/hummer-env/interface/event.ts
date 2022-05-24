interface CommonEvent {
    /**
     * @summary state: 0 // normal   state: 1 // began   state: 2 // changed   state: 3 // ended   state: 4 // cancelled
     */
    state: number;
    timestaps: number;
    position: {
        x: number;
        y: number;
    };
}
export interface TouchEvent extends CommonEvent {
    type: 'touch';
}
export interface TapEvent extends CommonEvent {
    type: 'tap';
}
export interface LongPressEvent extends CommonEvent {
    type: 'longPress';
}
export interface PanEvent extends Omit<CommonEvent, 'position'> {
    type: 'pan';
    translation: {
        deltaX: number;
        deltaY: number;
    };
}

export interface SwipeEvent extends Omit<CommonEvent, 'position'> {
    type: 'swiper';
    /**
     * @summary 1:right, 2:left, 4:up, 8:down
     */
    direction: number;
}

export interface PinchEvent extends Omit<CommonEvent, 'position'> {
    type: 'pinch';
    scale: number;
}

export interface InputEvent extends Omit<CommonEvent, 'position'> {
    type: 'input';
    text: string;
}

export interface ScrollEvent extends Omit<CommonEvent, 'position'> {
    type: 'scroll';
    /**
     * @summary x方向实际滚动偏移量
     */
    offsetX: number;
    /**
     * @summary y方向实际滚动偏移量
     */
    offsetY: number;
    /**
     * @summary x方向滚动与上一个事件的差值
     */
    dx: number;
    /**
     * @summary y方向滚动与上一个事件的差值
     */
    dy: number;
}

export interface SwitchEvent extends Omit<CommonEvent, 'position' | 'state'> {
    type: 'switch';
    state: 0 | 1;
}

// TODO 为各事件设置专属的事件池
export type EventInView = 'touch' | 'tap' | 'longPress' | 'pan' | 'swipe' | 'pinch';
export type EventInText = 'touch' | 'tap' | 'longPress' | 'pan' | 'pinch';
export type EventInImage = 'touch' | 'tap' | 'longPress' | 'pan' | 'pinch';
export type EventInScroller = 'scroll';
export type EventInInput = 'input';

export interface EventHandlersEventMap {
    touch: TouchEvent;
    tap: TapEvent;
    longPress: LongPressEvent;
    pan: PanEvent;
    swipe: SwipeEvent;
    pinch: PinchEvent;
    input: InputEvent;
    scroll: ScrollEvent;
    switch: SwitchEvent;
}
