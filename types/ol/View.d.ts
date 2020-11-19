import { Type } from './centerconstraint';
import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
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

/**
 * An animation configuration
 */
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
    constrainOnlyCenter?: boolean;
    smoothExtentConstraint?: boolean;
    maxResolution?: number;
    minResolution?: number;
    maxZoom?: number;
    minZoom?: number;
    multiWorld?: boolean;
    constrainResolution?: boolean;
    smoothResolutionConstraint?: boolean;
    showFullExtent?: boolean;
    projection?: ProjectionLike;
    resolution?: number;
    resolutions?: number[];
    rotation?: number;
    zoom?: number;
    zoomFactor?: number;
}
export default class View extends BaseObject {
    constructor(opt_options?: ViewOptions);
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     */
    adjustCenter(deltaCoordinates: Coordinate): void;
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     */
    adjustCenterInternal(deltaCoordinates: Coordinate): void;
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     */
    adjustResolution(ratio: number, opt_anchor?: Coordinate): void;
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     */
    adjustResolutionInternal(ratio: number, opt_anchor?: Coordinate): void;
    /**
     * Adds a value to the view rotation, optionally using an anchor. Any rotation
     * constraint will apply.
     */
    adjustRotation(delta: number, opt_anchor?: Coordinate): void;
    adjustRotationInternal(delta: number, opt_anchor?: Coordinate): void;
    /**
     * Adds a value to the view zoom level, optionally using an anchor. Any resolution
     * constraint will apply.
     */
    adjustZoom(delta: number, opt_anchor?: Coordinate): void;
    /**
     * Animate the view.  The view's center, zoom (or resolution), and rotation
     * can be animated for smooth transitions between view states.  For example,
     * to animate the view to a new zoom level:
     * By default, the animation lasts one second and uses in-and-out easing.  You
     * can customize this behavior by including duration (in milliseconds) and
     * easing options (see {@link module:ol/easing}).
     * To chain together multiple animations, call the method with multiple
     * animation objects.  For example, to first zoom and then pan:
     * If you provide a function as the last argument to the animate method, it
     * will get called at the end of an animation series.  The callback will be
     * called with true if the animation series completed on its own or false
     * if it was cancelled.
     * Animations are cancelled by user interactions (e.g. dragging the map) or by
     * calling view.setCenter(), view.setResolution(), or view.setRotation()
     * (or another method that calls one of these).
     */
    animate(...var_args: (AnimationOptions | ((p0: boolean) => void))[]): void;
    animateInternal(...var_args: (AnimationOptions | ((p0: boolean) => void))[]): void;
    /**
     * Set up the view with the given options.
     */
    applyOptions_(options: ViewOptions): void;
    /**
     * Notify the View that an interaction has started.
     * The view state will be resolved to a stable one if needed
     * (depending on its constraints).
     */
    beginInteraction(): void;
    calculateCenterRotate(rotation: number, anchor: Coordinate): Coordinate | undefined;
    calculateCenterZoom(resolution: number, anchor: Coordinate): Coordinate | undefined;
    /**
     * Calculate the extent for the current view state and the passed size.
     * The size is the pixel dimensions of the box into which the calculated extent
     * should fit. In most cases you want to get the extent of the entire map,
     * that is map.getSize().
     */
    calculateExtent(opt_size?: Size): Extent;
    calculateExtentInternal(opt_size?: Size): Extent;
    /**
     * Cancel any ongoing animations.
     */
    cancelAnimations(): void;
    /**
     * Center on coordinate and view position.
     */
    centerOn(coordinate: Coordinate, size: Size, position: Pixel): void;
    centerOnInternal(coordinate: Coordinate, size: Size, position: Pixel): void;
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     */
    endInteraction(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     */
    endInteractionInternal(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is map.getSize().
     * Takes care of the map angle.
     */
    fit(geometryOrExtent: SimpleGeometry | Extent, opt_options?: FitOptions): void;
    fitInternal(geometry: SimpleGeometry, opt_options?: FitOptions): void;
    /**
     * Determine if the view is being animated.
     */
    getAnimating(): boolean;
    /**
     * Get the view center.
     */
    getCenter(): Coordinate | undefined;
    /**
     * Get the view center without transforming to user projection.
     */
    getCenterInternal(): Coordinate | undefined;
    /**
     * Get a valid position for the view center according to the current constraints.
     */
    getConstrainedCenter(targetCenter: Coordinate | undefined, opt_targetResolution?: number): Coordinate | undefined;
    /**
     * Get a valid resolution according to the current view constraints.
     */
    getConstrainedResolution(targetResolution: number | undefined, opt_direction?: number): number | undefined;
    /**
     * Get a valid zoom level according to the current view constraints.
     */
    getConstrainedZoom(targetZoom: number | undefined, opt_direction?: number): number | undefined;
    getConstrainResolution(): boolean;
    getConstraints(): Constraints;
    getHints(opt_hints?: number[]): number[];
    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     */
    getInteracting(): boolean;
    /**
     * Get the maximum resolution of the view.
     */
    getMaxResolution(): number;
    /**
     * Get the maximum zoom level for the view.
     */
    getMaxZoom(): number;
    /**
     * Get the minimum resolution of the view.
     */
    getMinResolution(): number;
    /**
     * Get the minimum zoom level for the view.
     */
    getMinZoom(): number;
    /**
     * Get the view projection.
     */
    getProjection(): Projection;
    /**
     * Get the view resolution.
     */
    getResolution(): number | undefined;
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     */
    getResolutionForExtent(extent: Extent, opt_size?: Size): number;
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     */
    getResolutionForExtentInternal(extent: Extent, opt_size?: Size): number;
    /**
     * Return a function that returns a value between 0 and 1 for a
     * resolution. Exponential scaling is assumed.
     */
    getResolutionForValueFunction(opt_power?: number): (p0: number) => number;
    /**
     * Get the resolution for a zoom level.
     */
    getResolutionForZoom(zoom: number): number;
    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the View, or undefined if none were given.
     */
    getResolutions(): number[] | undefined;
    /**
     * Get the view rotation.
     */
    getRotation(): number;
    getState(): State;
    /**
     * Get an updated version of the view options used to construct the view.  The
     * current resolution (or zoom), center, and rotation are applied to any stored
     * options.  The provided options can be used to apply new min/max zoom or
     * resolution limits.
     */
    getUpdatedOptions_(newOptions: ViewOptions): ViewOptions;
    /**
     * Return a function that returns a resolution for a value between
     * 0 and 1. Exponential scaling is assumed.
     */
    getValueForResolutionFunction(opt_power?: number): (p0: number) => number;
    /**
     * Get the current zoom level. This method may return non-integer zoom levels
     * if the view does not constrain the resolution, or if an interaction or
     * animation is underway.
     */
    getZoom(): number | undefined;
    /**
     * Get the zoom level for a resolution.
     */
    getZoomForResolution(resolution: number): number | undefined;
    isDef(): boolean;
    /**
     * If any constraints need to be applied, an animation will be triggered.
     * This is typically done on interaction end.
     * Note: calling this with a duration of 0 will apply the constrained values straight away,
     * without animation.
     */
    resolveConstraints(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    /**
     * Set the center of the current view. Any extent constraint will apply.
     */
    setCenter(center: Coordinate | undefined): void;
    /**
     * Set the center using the view projection (not the user projection).
     */
    setCenterInternal(center: Coordinate | undefined): void;
    /**
     * Set whether the view shoud allow intermediary zoom levels.
     */
    setConstrainResolution(enabled: boolean): void;
    setHint(hint: ViewHint, delta: number): number;
    /**
     * Set a new maximum zoom level for the view.
     */
    setMaxZoom(zoom: number): void;
    /**
     * Set a new minimum zoom level for the view.
     */
    setMinZoom(zoom: number): void;
    /**
     * Set the resolution for this view. Any resolution constraint will apply.
     */
    setResolution(resolution: number | undefined): void;
    /**
     * Set the rotation for this view. Any rotation constraint will apply.
     */
    setRotation(rotation: number): void;
    /**
     * Stores the viewport size on the view. The viewport size is not read every time from the DOM
     * to avoid performance hit and layout reflow.
     * This should be done on map size change.
     * Note: the constraints are not resolved during an animation to avoid stopping it
     */
    setViewportSize(opt_size?: Size): void;
    /**
     * Zoom to a specific zoom level. Any resolution constrain will apply.
     */
    setZoom(zoom: number): void;
    /**
     * Update all animations.
     */
    updateAnimations_(): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:center', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:resolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:rotation', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function createCenterConstraint(options: ViewOptions): Type;
export function createResolutionConstraint(options: ViewOptions): any;
export function createRotationConstraint(options: ViewOptions): Type_2;
/**
 * Determine if an animation involves no view change.
 */
export function isNoopAnimation(animation: Animation): boolean;
