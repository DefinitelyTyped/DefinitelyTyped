import { Type } from './centerconstraint';
import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import Event from './events/Event';
import { Extent } from './extent';
import SimpleGeometry from './geom/SimpleGeometry';
import BaseObject, { ObjectEvent } from './Object';
import { Pixel } from './pixel';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';
import { Type as Type_1 } from './resolutionconstraint';
import { Type as Type_2 } from './rotationconstraint';
import { Size } from './size';
import ViewHint from './ViewHint';

export interface Animation {
    sourceCenter?: Coordinate;
    targetCenter?: Coordinate;
    sourceResolution?: number;
    targetResolution?: number;
    sourceRotation?: number;
    targetRotation?: number;
    anchor?: Coordinate;
    start: number;
    duration: number;
    complete: boolean;
    easing: (p0: number) => number;
    callback: (p0: boolean) => void;
}
export interface AnimationOptions {
    center?: Coordinate;
    zoom?: number;
    resolution?: number;
    rotation?: number;
    anchor?: Coordinate;
    duration?: number;
    easing?: (p0: number) => number;
}
export interface Constraints {
    center: Type;
    resolution: Type_1;
    rotation: Type_2;
}
export interface FitOptions {
    size?: Size;
    padding?: number[];
    constrainResolution?: boolean;
    nearest?: boolean;
    minResolution?: number;
    maxZoom?: number;
    duration?: number;
    easing?: (p0: number) => number;
    callback?: (p0: boolean) => void;
}
export interface State {
    center: Coordinate;
    projection: Projection;
    resolution: number;
    rotation: number;
    zoom: number;
}
export interface ViewOptions {
    center?: Coordinate;
    constrainRotation?: boolean | number;
    enableRotation?: boolean;
    extent?: Extent;
    maxResolution?: number;
    minResolution?: number;
    maxZoom?: number;
    minZoom?: number;
    projection?: ProjectionLike;
    resolution?: number;
    resolutions?: number[];
    rotation?: number;
    zoom?: number;
    zoomFactor?: number;
}
export default class View extends BaseObject {
    constructor(opt_options?: ViewOptions);
    animate(...var_args: (AnimationOptions | ((p0: boolean) => void))[]): void;
    applyOptions_(options: ViewOptions): void;
    calculateCenterRotate(rotation: number, anchor: Coordinate): Coordinate | undefined;
    calculateCenterZoom(resolution: number, anchor: Coordinate): Coordinate | undefined;
    calculateExtent(opt_size?: Size): Extent;
    cancelAnimations(): void;
    centerOn(coordinate: Coordinate, size: Size, position: Pixel): void;
    constrainCenter(center: Coordinate | undefined): Coordinate | undefined;
    constrainResolution(resolution: number | undefined, opt_delta?: number, opt_direction?: number): number | undefined;
    constrainRotation(rotation: number | undefined, opt_delta?: number): number | undefined;
    fit(geometryOrExtent: SimpleGeometry | Extent, opt_options?: FitOptions): void;
    getAnimating(): boolean;
    getCenter(): Coordinate | undefined;
    getConstraints(): Constraints;
    getHints(opt_hints?: number[]): number[];
    getInteracting(): boolean;
    getMaxResolution(): number;
    getMaxZoom(): number;
    getMinResolution(): number;
    getMinZoom(): number;
    getProjection(): Projection;
    getResolution(): number | undefined;
    getResolutionForExtent(extent: Extent, opt_size?: Size): number;
    getResolutionForValueFunction(opt_power?: number): (p0: number) => number;
    getResolutionForZoom(zoom: number): number;
    getResolutions(): number[] | undefined;
    getRotation(): number;
    getState(pixelRatio: number): State;
    getUpdatedOptions_(newOptions: ViewOptions): ViewOptions;
    getValueForResolutionFunction(opt_power?: number): (p0: number) => number;
    getZoom(): number | undefined;
    getZoomForResolution(resolution: number): number | undefined;
    isDef(): boolean;
    rotate(rotation: number, opt_anchor?: Coordinate): void;
    setCenter(center: Coordinate | undefined): void;
    setHint(hint: ViewHint, delta: number): number;
    setMaxZoom(zoom: number): void;
    setMinZoom(zoom: number): void;
    setResolution(resolution: number | undefined): void;
    setRotation(rotation: number): void;
    setZoom(zoom: number): void;
    updateAnimations_(): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:center', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:resolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:rotation', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function createCenterConstraint(options: ViewOptions): Type;
export function createResolutionConstraint(options: ViewOptions): any;
export function createRotationConstraint(options: ViewOptions): Type_2;
export function isNoopAnimation(animation: Animation): boolean;
