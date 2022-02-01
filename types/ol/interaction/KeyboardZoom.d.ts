import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Interaction from './Interaction';

export type TKeyboardZoomBaseEventTypes = 'change' | 'error';
export type TKeyboardZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    duration?: number | undefined;
    condition?: Condition | undefined;
    delta?: number | undefined;
}
export default class KeyboardZoom extends Interaction {
    constructor(opt_options?: Options);
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} if it was a
     * KeyEvent, and decides whether to zoom in or out (depending on whether the
     * key pressed was '+' or '-').
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    on(type: TKeyboardZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TKeyboardZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TKeyboardZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TKeyboardZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TKeyboardZoomBaseEventTypes | TKeyboardZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TKeyboardZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TKeyboardZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TKeyboardZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TKeyboardZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TKeyboardZoomObjectEventTypes | TKeyboardZoomObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
