import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Interaction from './Interaction';

export type TKeyboardPanBaseEventTypes = 'change' | 'error';
export type TKeyboardPanObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    condition?: Condition | undefined;
    duration?: number | undefined;
    pixelDelta?: number | undefined;
}
export default class KeyboardPan extends Interaction {
    constructor(opt_options?: Options);
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} if it was a
     * KeyEvent, and decides the direction to pan to (if an arrow key was
     * pressed).
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    on(type: TKeyboardPanBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TKeyboardPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TKeyboardPanBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TKeyboardPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TKeyboardPanBaseEventTypes | TKeyboardPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TKeyboardPanObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TKeyboardPanObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TKeyboardPanObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TKeyboardPanObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TKeyboardPanObjectEventTypes | TKeyboardPanObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
