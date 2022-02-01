import BaseObject, { ObjectEvent } from './Object';
import Types from './ObjectEventType';
import OverlayPositioning from './OverlayPositioning';
import PluggableMap from './PluggableMap';
import { Coordinate } from './coordinate';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import { Extent } from './extent';
import { Pixel } from './pixel';
import { Size } from './size';

export type TOverlayBaseEventTypes = 'change' | 'error';
export type TOverlayObjectEventTypes =
    | 'change:element'
    | 'change:map'
    | 'change:offset'
    | 'change:position'
    | 'change:positioning'
    | 'propertychange';
export interface Options {
    id?: number | string | undefined;
    element?: HTMLElement | undefined;
    offset?: number[] | undefined;
    position?: Coordinate | undefined;
    positioning?: OverlayPositioning | undefined;
    stopEvent?: boolean | undefined;
    insertFirst?: boolean | undefined;
    autoPan?: PanIntoViewOptions | boolean | undefined;
    autoPanAnimation?: PanOptions | undefined;
    autoPanMargin?: number | undefined;
    autoPanOptions?: PanIntoViewOptions | undefined;
    className?: string | undefined;
}
export type OverlayObjectEventTypes =
    | Types
    | 'change:element'
    | 'change:map'
    | 'change:offset'
    | 'change:position'
    | 'change:positioning';
export interface PanIntoViewOptions {
    animation?: PanOptions | undefined;
    margin?: number | undefined;
}
export interface PanOptions {
    duration?: number | undefined;
    easing?: ((p0: number) => number) | undefined;
}
export default class Overlay extends BaseObject {
    constructor(options: Options);
    protected autoPan: PanIntoViewOptions | false;
    protected element: HTMLElement;
    protected id: number | string;
    protected insertFirst: boolean;
    protected mapPostrenderListenerKey: EventsKey;
    protected options: Options;
    protected rendered: any;
    protected stopEvent: boolean;
    /**
     * Get the extent of an element relative to the document
     */
    protected getRect(element: HTMLElement, size: Size): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected handlePositioningChanged(): void;
    /**
     * Pan the map so that the overlay is entirely visible in the current viewport
     * (if necessary) using the configured autoPan parameters
     */
    protected performAutoPan(): void;
    protected render(): void;
    /**
     * Modify the visibility of the element.
     */
    protected setVisible(visible: boolean): void;
    /**
     * Update pixel position.
     */
    protected updatePixelPosition(): void;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size | undefined): void;
    /**
     * Get the DOM element of this overlay.
     */
    getElement(): HTMLElement | undefined;
    /**
     * Get the overlay identifier which is set on constructor.
     */
    getId(): number | string | undefined;
    /**
     * Get the map associated with this overlay.
     */
    getMap(): PluggableMap | undefined;
    /**
     * Get the offset of this overlay.
     */
    getOffset(): number[];
    /**
     * returns the options this Overlay has been created with
     */
    getOptions(): Options;
    /**
     * Get the current position of this overlay.
     */
    getPosition(): Coordinate | undefined;
    /**
     * Get the current positioning of this overlay.
     */
    getPositioning(): OverlayPositioning;
    /**
     * Pan the map so that the overlay is entirely visible in the current viewport
     * (if necessary).
     */
    panIntoView(opt_panIntoViewOptions?: PanIntoViewOptions): void;
    /**
     * Set the DOM element to be associated with this overlay.
     */
    setElement(element: HTMLElement | undefined): void;
    /**
     * Set the map to be associated with this overlay.
     */
    setMap(map: PluggableMap | undefined): void;
    /**
     * Set the offset for this overlay.
     */
    setOffset(offset: number[]): void;
    /**
     * Set the position for this overlay. If the position is undefined the
     * overlay is hidden.
     */
    setPosition(position: Coordinate | undefined): void;
    /**
     * Set the positioning for this overlay.
     */
    setPositioning(positioning: OverlayPositioning): void;
    on(type: TOverlayBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TOverlayBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TOverlayBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TOverlayBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TOverlayBaseEventTypes | TOverlayBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TOverlayObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TOverlayObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TOverlayObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TOverlayObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TOverlayObjectEventTypes | TOverlayObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
