import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import ImageCanvas from '../ImageCanvas';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource from './Image';
import { AttributionLike } from './Source';
import State from './State';

export type FunctionType = (this: ImageCanvas, p0: Extent, p1: number, p2: number, p3: Size, p4: Projection) => HTMLCanvasElement;
export interface Options {
    attributions?: AttributionLike;
    canvasFunction?: FunctionType;
    projection?: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    state?: State;
}
export default class ImageCanvasSource extends ImageSource {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
