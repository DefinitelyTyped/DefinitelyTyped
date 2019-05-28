import { Type } from 'ol/centerconstraint';
import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import BaseObject, { ObjectEvent } from 'ol/Object';
import { Pixel } from 'ol/pixel';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { Type as Type_2 } from 'ol/resolutionconstraint';
import { Type as Type_1 } from 'ol/rotationconstraint';
import { Size } from 'ol/size';
import ViewHint from 'ol/ViewHint';
export function createCenterConstraint(options: ViewOptions): Type;
export function createResolutionConstraint(options: ViewOptions): { [key: string]: any };
export function createRotationConstraint(options: ViewOptions): Type_1;
export function isNoopAnimation(animation: Animation): boolean;
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
    easing: ((param0: number) => number);
    callback: ((param0: boolean) => void);
}
export interface AnimationOptions {
    center?: Coordinate;
    zoom?: number;
    resolution?: number;
    rotation?: number;
    anchor?: Coordinate;
    duration?: number;
    easing?: ((param0: number) => number);
}
export interface Constraints {
    center: Type;
    resolution: Type_2;
    rotation: Type_1;
}
export interface FitOptions {
    size?: Size;
    padding?: number[];
    constrainResolution?: boolean;
    nearest?: boolean;
    minResolution?: number;
    maxZoom?: number;
    duration?: number;
    easing?: ((param0: number) => number);
    callback?: ((param0: boolean) => void);
}
export interface State {
    center: Coordinate;
    projection: Projection;
    resolution: number;
    rotation: number;
    zoom: number;
}
export default class View extends BaseObject {
    constructor(opt_options?: ViewOptions);
    getResolution(): number;
    animate(...var_args: (AnimationOptions | ((param0: boolean) => void))[]): void;
    calculateCenterRotate(rotation: number, anchor: Coordinate): Coordinate;
    calculateCenterZoom(resolution: number, anchor: Coordinate): Coordinate;
    calculateExtent(opt_size?: Size): Extent;
    cancelAnimations(): void;
    centerOn(coordinate: Coordinate, size: Size, position: Pixel): void;
    constrainCenter(center: Coordinate): Coordinate;
    constrainResolution(resolution: number, opt_delta?: number, opt_direction?: number): number;
    constrainRotation(rotation: number, opt_delta?: number): number;
    fit(geometryOrExtent: SimpleGeometry | Extent, opt_options?: FitOptions): void;
    getAnimating(): boolean;
    getCenter(): Coordinate;
    getConstraints(): Constraints;
    getHints(opt_hints?: number[]): number[];
    getInteracting(): boolean;
    getMaxResolution(): number;
    getMaxZoom(): number;
    getMinResolution(): number;
    getMinZoom(): number;
    getProjection(): Projection;
    applyOptions_(options: ViewOptions): void;
    getResolutionForExtent(extent: Extent, opt_size?: Size): number;
    getResolutionForValueFunction(opt_power?: number): ((param0: number) => number);
    getResolutionForZoom(zoom: number): number;
    getResolutions(): number[];
    getRotation(): number;
    getState(pixelRatio: number): State;
    getUpdatedOptions_(newOptions: ViewOptions): ViewOptions;
    getValueForResolutionFunction(opt_power?: number): ((param0: number) => number);
    getZoom(): number;
    getZoomForResolution(resolution: number): number;
    isDef(): boolean;
    rotate(rotation: number, opt_anchor?: Coordinate): void;
    setCenter(center: Coordinate): void;
    setHint(hint: ViewHint, delta: number): number;
    setMaxZoom(zoom: number): void;
    setMinZoom(zoom: number): void;
    setResolution(resolution: number): void;
    setRotation(rotation: number): void;
    setZoom(zoom: number): void;
    updateAnimations_(): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
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
