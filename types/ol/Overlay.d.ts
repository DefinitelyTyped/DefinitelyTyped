import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
import { Extent } from './extent';
import BaseObject, { ObjectEvent } from './Object';
import OverlayPositioning from './OverlayPositioning';
import { Pixel } from './pixel';
import PluggableMap from './PluggableMap';
import { Size } from './size';

export interface Options {
    id?: number | string;
    element?: HTMLElement;
    offset?: number[];
    position?: Coordinate;
    positioning?: OverlayPositioning;
    stopEvent?: boolean;
    insertFirst?: boolean;
    autoPan?: PanIntoViewOptions | boolean;
    autoPanAnimation?: PanOptions;
    autoPanMargin?: number;
    autoPanOptions?: PanIntoViewOptions;
    className?: string;
}
export interface PanIntoViewOptions {
    animation?: PanOptions;
    margin?: number;
}
export interface PanOptions {
    duration?: number;
    easing?: (p0: number) => number;
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
     * Pan the map so that the overlay is entirely visisble in the current viewport
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:element', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:map', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:offset', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:positioning', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
