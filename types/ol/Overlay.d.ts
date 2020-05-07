import { Coordinate } from './coordinate';
import { EventsKey, ListenerFunction } from './events';
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
    protected getRect(element: HTMLElement, size: Size): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected handlePositioningChanged(): void;
    protected performAutoPan(): void;
    protected render(): void;
    protected setVisible(visible: boolean): void;
    protected updatePixelPosition(): void;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size | undefined): void;
    getElement(): HTMLElement;
    getId(): number | string;
    getMap(): PluggableMap;
    getOffset(): number[];
    getOptions(): Options;
    getPosition(): Coordinate;
    getPositioning(): OverlayPositioning;
    panIntoView(panIntoViewOptions: PanIntoViewOptions | undefined): void;
    setElement(element: HTMLElement | undefined): void;
    setMap(map: PluggableMap | undefined): void;
    setOffset(offset: number[]): void;
    setPosition(position: Coordinate | undefined): void;
    setPositioning(positioning: OverlayPositioning): void;
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
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
