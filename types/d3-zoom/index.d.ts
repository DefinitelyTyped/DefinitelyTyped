// Type definitions for d3JS d3-zoom module 1.3
// Project: https://github.com/d3/d3-zoom/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.3.0

import { ArrayLike, Selection, TransitionLike, ValueFn } from 'd3-selection';
import { ZoomView, ZoomInterpolator } from 'd3-interpolate';

// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * ZoomedElementBaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-zoom' (and related code in 'd3-selection') trying to use properties internally which would otherwise not
 * be supported.
 */
export type ZoomedElementBaseType = Element;

/**
 * Minimal interface for a continuous scale.
 * This interface is used as a minimum contract for scale objects
 * that  can be passed into zoomTransform methods rescaleX and rescaleY
 */
export interface ZoomScale {
    domain(): number[];
    domain(domain: number[]): this;
    range(): number[];
    range(range: number[]): this;
    copy(): ZoomScale;
    invert(value: number): number;
}

// --------------------------------------------------------------------------
// Zoom Behavior
// --------------------------------------------------------------------------

/**
 * A D3 Zoom Behavior
 *
 * The first generic refers to the type of reference element to which the zoom behavior is attached.
 * The second generic refers to the type of the datum of the reference element.
 */
export interface ZoomBehavior<ZoomRefElement extends ZoomedElementBaseType, Datum> extends Function {
    /**
     * Applies this zoom behavior to the specified selection, binding the necessary event listeners to
     * allow panning and zooming, and initializing the zoom transform on each selected element to the identity transform if not already defined. This function is typically not invoked directly,
     * and is instead invoked via selection.call.
     *
     * For details see: {@link https://github.com/d3/d3-zoom#_zoom}
     *
     * @param selection A D3 selection of elements.
     * @param args Optional arguments to be passed in.
     */
    (selection: Selection<ZoomRefElement, Datum, any, any>, ...args: any[]): void;
    /**
     * Sets the current zoom transform of the selected elements to the specified transform,
     * instantaneously emitting start, zoom and end events.
     *
     * This method requires that you specify the new zoom transform completely,
     * and does not enforce the defined scale extent and translate extent, if any.
     * To derive a new transform from the existing transform, and to enforce the scale and translate extents,
     * see the convenience methods zoom.translateBy, zoom.scaleBy and zoom.scaleTo.
     *
     * This function is typically not invoked directly, and is instead invoked via selection.call.
     *
     * @param selection A D3 selection of elements.
     * @param transform A zoom transform object.
     */
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: ZoomTransform): void;
    /**
     * Sets the current zoom transform of the selected elements to the transform returned by the specified
     * zoom transform factory function evaluated for each element, instantaneously emitting start, zoom and end events.
     *
     * This method requires that you specify the new zoom transform completely,
     * and does not enforce the defined scale extent and translate extent, if any.
     * To derive a new transform from the existing transform, and to enforce the scale and translate extents,
     * see the convenience methods zoom.translateBy, zoom.scaleBy and zoom.scaleTo.
     *
     * This function is typically not invoked directly, and is instead invoked via selection.call.
     *
     * @param selection A D3 selection of elements.
     * @param transform A zoom transform factory function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element. The function returns a zoom transform object.
     */
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: ValueFn<ZoomRefElement, Datum, ZoomTransform>): void;
    /**
     * Sets the current zoom transform of the transitioning elements to the specified transform.
     * It defines a “zoom” tween to the specified transform using d3.interpolateZoom,
     * emitting a start event when the transition starts, zoom events for each tick of the transition,
     * and then an end event when the transition ends (or is interrupted).
     *
     * This method requires that you specify the new zoom transform completely,
     * and does not enforce the defined scale extent and translate extent, if any.
     * To derive a new transform from the existing transform, and to enforce the scale and translate extents,
     * see the convenience methods zoom.translateBy, zoom.scaleBy and zoom.scaleTo.
     *
     * This function is typically not invoked directly, and is instead invoked via selection.call.
     *
     * @param transition A D3 transition on elements.
     * @param transform A zoom transform object.
     */
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: ZoomTransform): void;
    /**
     * Sets the current zoom transform of the transitioning elements to the transform returned by the specified
     * zoom transform factory function evaluated for each element.
     * It defines a “zoom” tween to the specified transform using d3.interpolateZoom,
     * emitting a start event when the transition starts, zoom events for each tick of the transition,
     * and then an end event when the transition ends (or is interrupted).
     *
     * This method requires that you specify the new zoom transform completely,
     * and does not enforce the defined scale extent and translate extent, if any.
     * To derive a new transform from the existing transform, and to enforce the scale and translate extents,
     * see the convenience methods zoom.translateBy, zoom.scaleBy and zoom.scaleTo.
     *
     * This function is typically not invoked directly, and is instead invoked via selection.call.
     *
     * @param transition A D3 transition on elements.
     * @param transform A zoom transform factory function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element. The function returns a zoom transform object.
     */
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: ValueFn<ZoomRefElement, Datum, ZoomTransform>): void;

    /**
     * Translates the current zoom transform of the selected elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided as a constant for all elements.
     * y is provided as a constant for all elements.
     *
     * @param selection A D3 selection of elements.
     * @param x Amount of translation in x-direction.
     * @param y Amount of translation in y-direction.
     */
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: number, y: number): void;
    /**
     * Translates the current zoom transform of the selected elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided by a value function evaluated for each element in the selection.
     * y is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param x A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in x-direction.
     * @param y Amount of translation in y-direction.
     */
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: ValueFn<ZoomRefElement, Datum, number>, y: number): void;
    /**
     * Translates the current zoom transform of the selected elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided as a constant for all elements.
     * y is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param x Amount of translation in x-direction.
     * @param y A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in y-direction.
     */
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: number, y: ValueFn<ZoomRefElement, Datum, number>): void;
    /**
     * Translates the current zoom transform of the selected elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided by a value function evaluated for each element in the selection.
     * y is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param x A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in x-direction.
     * @param y A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in y-direction.
     */
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: ValueFn<ZoomRefElement, Datum, number>, y: ValueFn<ZoomRefElement, Datum, number>): void;
    /**
     * Defines a “zoom” tween translating the current transform for the transitioning elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided as a constant for all elements.
     * y is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param x Amount of translation in x-direction.
     * @param y Amount of translation in y-direction.
     */
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: number, y: number): void;
    /**
     * Defines a “zoom” tween translating the current transform for the transitioning elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided by a value function evaluated for each element in the selection.
     * y is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param x A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in x-direction.
     * @param y Amount of translation in y-direction.
     */
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: ValueFn<ZoomRefElement, Datum, number>, y: number): void;
    /**
     * Defines a “zoom” tween translating the current transform for the transitioning elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided as a constant for all elements.
     * y is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param x Amount of translation in x-direction.
     * @param y A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in y-direction.
     */
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: number, y: ValueFn<ZoomRefElement, Datum, number>): void;
    /**
     * Defines a “zoom” tween translating the current transform for the transitioning elements by x and y,
     * such that the new t(x1) = t(x0) + k × x and t(y1) = t(y0) + k × y.
     *
     * x is provided by a value function evaluated for each element in the selection.
     * y is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param x A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in x-direction.
     * @param y A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the amount of translation in y-direction.
     */
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: ValueFn<ZoomRefElement, Datum, number>, y: ValueFn<ZoomRefElement, Datum, number>): void;

    /**
     * Scales the current zoom transform of the selected elements by k, such that the new k(1) = k(0) × k.
     *
     * k is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param k Scale factor.
     */
    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    /**
     * Scales the current zoom transform of the selected elements by k, such that the new k(1) = k(0) × k.
     *
     * k is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param k A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the scale factor.
     */
    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: ValueFn<ZoomRefElement, Datum, number>): void;
    /**
     * Defines a “zoom” tween translating scaling the current transform of the selected elements by k, such that the new k(1) = k(0) × k.
     *
     * k is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param k Scale factor.
     */
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    /**
     * Defines a “zoom” tween translating scaling the current transform of the selected elements by k, such that the new k(1) = k(0) × k.
     *
     * k is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param k A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the scale factor.
     */
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: ValueFn<ZoomRefElement, Datum, number>): void;

    /**
     * Scales the current zoom transform of the selected elements to k, such that the new k(1) = k.
     *
     * k is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param k New scale.
     */
    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    /**
     * Scales the current zoom transform of the selected elements to k, such that the new k(1) = k.
     *
     * k is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param selection A D3 selection of elements.
     * @param k A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the new scale.
     */
    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: ValueFn<ZoomRefElement, Datum, number>): void;
    /**
     * Defines a “zoom” tween translating scaling the current transform of the selected elements to k, such that the new k(1) = k.
     *
     * k is provided as a constant for all elements.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param k New scale.
     */
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    /**
     * Defines a “zoom” tween translating scaling the current transform of the selected elements to k, such that the new k(1) = k.
     *
     * k is provided by a value function evaluated for each element in the selection.
     *
     * This method is a convenience method for zoom.transform.
     * In contrast to zoom.transform, however, it is subject to the constraints imposed by zoom.extent, zoom.scaleExten, and zoom.translateExtent.
     *
     * @param transition A D3 transition on elements.
     * @param k A value function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the new scale.
     */
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: ValueFn<ZoomRefElement, Datum, number>): void;

    /**
     * Returns the current filter function.
     */
    filter(): ValueFn<ZoomRefElement, Datum, boolean>;
    /**
     * Sets the filter to the specified filter function and returns the zoom behavior.
     * The filter function is invoked in the zoom initiating event handlers of each element to which the zoom behavior was applied.
     *
     * If the filter returns falsey, the initiating event is ignored and no zoom gesture is started.
     * Thus, the filter determines which input events are ignored. The default filter ignores mousedown events on secondary buttons,
     * since those buttons are typically intended for other purposes, such as the context menu.
     *
     * @param filterFn A filter function which is invoked in the zoom initiating event handlers of each element to which the zoom behavior was applied,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element. The function returns a boolean value.
     */
    filter(filterFn: ValueFn<ZoomRefElement, Datum, boolean>): this;

    /**
     * Returns the current wheelDelta function.
     */
    wheelDelta(): ValueFn<ZoomRefElement, Datum, number>;
    /**
     * Sets the wheel delta function to the specified function and returns the zoom behavior. The wheel delta function which is invoked in the wheel event handler
     * of each element to which the zoom behavior was applied.
     * The value Δ returned by the wheel delta function determines the amount of scaling applied in response to a WheelEvent.
     * The scale factor transform.k is multiplied by 2Δ; for example, a Δ of +1 doubles the scale factor, Δ of -1 halves the scale factor.
     *
     * @param delta Wheel delta function which is invoked in the wheel event handler of each element to which the zoom behavior was applied,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element. The function returns a numeric value.
     */
    wheelDelta(delta: ValueFn<ZoomRefElement, Datum, number>): this;

    /**
     * Return the current extent accessor, which defaults to [[0, 0], [width, height]] where width is the client width of the element and height is its client height;
     * for SVG elements, the nearest ancestor SVG element’s width and height is used. In this case,
     * the owner SVG element must have defined width and height attributes rather than (for example) relying on CSS properties or the viewBox attribute;
     * SVG provides no programmatic method for retrieving the initial viewport size. Alternatively, consider using element.getBoundingClientRect.
     * (In Firefox, element.clientWidth and element.clientHeight is zero for SVG elements!)
     */
    extent(): ValueFn<ZoomRefElement, Datum, [[number, number], [number, number]]>;
    /**
     * Set the viewport extent to the specified array of points [[x0, y0], [x1, y1]],
     * where [x0, y0] is the top-left corner of the viewport and [x1, y1] is the bottom-right corner of the viewport,
     * and return this zoom behavior.
     *
     * The viewport extent affects several functions: the center of the viewport remains fixed during changes by zoom.scaleBy and zoom.scaleTo;
     * the viewport center and dimensions affect the path chosen by d3.interpolateZoom; and the viewport extent is needed to enforce the optional translate extent.
     *
     * @param extent An extent specified as an array of two coordinates.
     */
    extent(extent: [[number, number], [number, number]]): this;
    /**
     * Set the viewport extent to the array of points [[x0, y0], [x1, y1]] returned by the
     * extent accessor function, and return this zoom behavior.
     * The extent accessor function is evaluated for each element.
     *
     * [x0, y0] is the top-left corner of the viewport and [x1, y1] is the bottom-right corner of the viewport.
     *
     * The viewport extent affects several functions: the center of the viewport remains fixed during changes by zoom.scaleBy and zoom.scaleTo;
     * the viewport center and dimensions affect the path chosen by d3.interpolateZoom; and the viewport extent is needed to enforce the optional translate extent.
     *
     * The default is [[0, 0], [width, height]] where width is the client width of the element and height is its client height;
     * for SVG elements, the nearest ancestor SVG element’s width and height is used.
     * In this case, the owner SVG element must have defined width and height attributes rather than (for example) relying on CSS properties or the viewBox attribute;
     * SVG provides no programmatic method for retrieving the initial viewport size. Alternatively, consider using element.getBoundingClientRect.
     * (In Firefox, element.clientWidth and element.clientHeight is zero for SVG elements!)
     *
     * @extent An extent accessor function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.The function returns the extent array.
     */
    extent(extent: ValueFn<ZoomRefElement, Datum, [[number, number], [number, number]]>): this;

    /**
     * Return the current scale extent.
     */
    scaleExtent(): [number, number];
    /**
     * Set the scale extent to the specified array of numbers [k0, k1] where k0 is the minimum allowed scale factor and k1 is the maximum allowed scale factor,
     * and return this zoom behavior.
     *
     * The scale extent restricts zooming in and out. It is enforced on interaction and when using zoom.scaleBy, zoom.scaleTo and zoom.translateBy;
     * however, it is not enforced when using zoom.transform to set the transform explicitly.
     *
     * The default scale extent is [0, infinity].
     *
     * If the user tries to zoom by wheeling when already at the corresponding limit of the scale extent, the wheel events will be ignored and not initiate a zoom gesture.
     * This allows the user to scroll down past a zoomable area after zooming in, or to scroll up after zooming out.
     * If you would prefer to always prevent scrolling on wheel input regardless of the scale extent, register a wheel event listener to prevent the browser default behavior
     *
     * @param extent A scale extent array of two numbers representing the scale boundaries.
     */
    scaleExtent(extent: [number, number]): this;

    /**
     * Return the current translate extent.
     */
    translateExtent(): [[number, number], [number, number]];
    /**
     * Set the translate extent to the specified array of points [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner of the world and [x1, y1]
     * is the bottom-right corner of the world, and return this zoom behavior.
     *
     * The translate extent restricts panning, and may cause translation on zoom out. It is enforced on interaction and when using zoom.scaleBy, zoom.scaleTo and zoom.translateBy;
     * however, it is not enforced when using zoom.transform to set the transform explicitly.
     *
     * The default scale extent is [[-infinity, infinity], [-infinity, infinity]].
     *
     * @param extent A translate extent array, i.e. an array of two arrays, each representing a point.
     */
    translateExtent(extent: [[number, number], [number, number]]): this;

    /**
     * Return the current click distance threshold, which defaults to zero.
     */
    clickDistance(): number;
    /**
     * Set the maximum distance that the mouse can move between mousedown and mouseup that will trigger
     * a subsequent click event. If at any point between mousedown and mouseup the mouse is greater than or equal to
     * distance from its position on mousedown, the click event follwing mouseup will be suppressed.
     *
     * @param distance The distance threshold between mousedown and mouseup measured in client coordinates (event.clientX and event.clientY).
     * The default is zero.
     */
    clickDistance(distance: number): this;

    /**
     * Get the duration for zoom transitions on double-click and double-tap in milliseconds.
     */
    duration(): number;
    /**
     * Set the duration for zoom transitions on double-click and double-tap to the specified number of milliseconds and returns the zoom behavior.
     *
     * To disable double-click and double-tap transitions, you can remove the zoom behavior’s dblclick event listener after applying the zoom behavior to the selection.
     *
     * @param Duration in milliseconds.
     */
    duration(duration: number): this;

    /**
     * Returns the current interpolation factory, which defaults to d3.interpolateZoom to implement smooth zooming.
     */
    interpolate<InterpolationFactory extends (a: ZoomView, b: ZoomView) => ((t: number) => ZoomView)>(): InterpolationFactory;

    /**
     * Sets the interpolation factory for zoom transitions to the specified function.
     * Use the default d3.interpolateZoom to implement smooth zooming.
     * To apply direct interpolation between two views, try d3.interpolate instead.
     *
     * Each view is defined as an array of three numbers: cx, cy and width. The first two coordinates cx, cy represent the center of the viewport;
     * the last coordinate width represents the size of the viewport.
     *
     * @param interpolatorFactory An interpolator factory to be used to generate interpolators beetween zooms for transitions.
     */
    interpolate(interpolatorFactory: (a: ZoomView, b: ZoomView) => ((t: number) => ZoomView)): this;

    /**
     * Return the first currently-assigned listener matching the specified typenames, if any.
     *
     * @param typenames The typenames is a string containing one or more typename separated by whitespace.
     * Each typename is a type, optionally followed by a period (.) and a name, such as "drag.foo"" and "drag.bar";
     * the name allows multiple listeners to be registered for the same type. The type must be one of the following:
     * start (after zooming begins [such as mousedown]), zoom (after a change to the zoom  transform [such as mousemove], or
     * end (after an active pointer becomes inactive [such as on mouseup].)
     */
    on(typenames: string): ValueFn<ZoomRefElement, Datum, void> | undefined;
    /**
     * Remove the current event listeners for the specified typenames, if any, return the drag behavior.
     *
     * @param typenames The typenames is a string containing one or more typename separated by whitespace.
     * Each typename is a type, optionally followed by a period (.) and a name, such as "drag.foo"" and "drag.bar";
     * the name allows multiple listeners to be registered for the same type. The type must be one of the following:
     * start (after zooming begins [such as mousedown]), zoom (after a change to the zoom  transform [such as mousemove], or
     * end (after an active pointer becomes inactive [such as on mouseup].)
     * @param listener Use null to remove the listener.
     */
    on(typenames: string, listener: null): this;
    /**
     * Set the event listener for the specified typenames and return the zoom behavior.
     * If an event listener was already registered for the same type and name,
     * the existing listener is removed before the new listener is added.
     * When a specified event is dispatched, each listener will be invoked with the same context and arguments as selection.on listeners.
     *
     *
     * @param typenames The typenames is a string containing one or more typename separated by whitespace.
     * Each typename is a type, optionally followed by a period (.) and a name, such as "drag.foo"" and "drag.bar";
     * the name allows multiple listeners to be registered for the same type. The type must be one of the following:
     * start (after zooming begins [such as mousedown]), zoom (after a change to the zoom  transform [such as mousemove], or
     * end (after an active pointer becomes inactive [such as on mouseup].)
     * @param listener An event listener function which is evaluated for each selected element,
     * in order, being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element.
     */
    on(typenames: string, listener: ValueFn<ZoomRefElement, Datum, void>): this;
}

/**
 * Creates a new zoom behavior. The returned behavior, zoom, is both an object and a function,
 * and is typically applied to selected elements via selection.call.
 *
 * The first generic refers to the type of reference element to which the zoom behavior is attached.
 * The second generic refers to the type of the datum of the reference element.
 */
export function zoom<ZoomRefElement extends ZoomedElementBaseType, Datum>(): ZoomBehavior<ZoomRefElement, Datum>;

// --------------------------------------------------------------------------
// Zoom Event
// --------------------------------------------------------------------------

/**
 * A D3 Zoom Event
 *
 * The first generic refers to the type of reference element to which the zoom behavior is attached.
 * The second generic refers to the type of the datum of the reference element.
 */
export interface D3ZoomEvent<ZoomRefElement extends ZoomedElementBaseType, Datum> {
    /**
     * The ZoomBehavior associated with the event
     */
    target: ZoomBehavior<ZoomRefElement, Datum>;
    /**
     * The event type for the zoom event
     */
    type: 'start' | 'zoom' | 'end' | string; // Leave failsafe string type for cases like 'zoom.foo'
    /**
     * The current zoom transform
     */
    transform: ZoomTransform;
    /**
     * The underlying input event, such as mousemove or touchmove.
     */
    sourceEvent: any;
}

// --------------------------------------------------------------------------
// Zoom Transforms
// --------------------------------------------------------------------------

/**
 * A zoom transform
 *
 * The zoom behavior stores the zoom state on the element to which the zoom behavior was applied, not on the zoom behavior itself.
 * This is because the zoom behavior can be applied to many elements simultaneously, and each element can be zoomed independently.
 * The zoom state can change either on user interaction or programmatically via zoom.transform.
 *
 * To retrieve the zoom state, use event.transform on the current zoom event within a zoom event listener (see zoom.on), or use d3.zoomTransform for a given node.
 * The latter is particularly useful for modifying the zoom state programmatically,
 * say to implement buttons for zooming in and out.
 *
 * For details see {@link https://github.com/d3/d3-zoom#zoom-transforms}
 */
export interface ZoomTransform {
    /**
     * The translation amount tx along the x-axis.
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly x: number;

    /**
     * The translation amount ty along the y-axis
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly y: number;

    /**
     * The scale factor k.
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly k: number;

    /**
     * Return the transformation of the specified point which is a two-element array of numbers [x, y].
     * The returned point is equal to [x × k + tx, y × k + ty].
     *
     * @param point Point coordinates [x, y]
     */
    apply(point: [number, number]): [number, number];

    /**
     * Return the transformation of the specified x-coordinate, x × k + tx.
     *
     * @param x Value of x-coordinate.
     */
    applyX(x: number): number;

    /**
     * Return the transformation of the specified y-coordinate, y × k + ty.
     *
     * @param y Value of y-coordinate.
     */
    applyY(y: number): number;

    /**
     * Return the inverse transformation of the specified point which is a two-element array of numbers [x, y].
     * The returned point is equal to [(x - tx) / k, (y - ty) / k].
     *
     * @param point Point coordinates [x, y]
     */
    invert(point: [number, number]): [number, number];

    /**
     * Return the inverse transformation of the specified x-coordinate, (x - tx) / k.
     *
     * @param x Value of x-coordinate.
     */
    invertX(x: number): number;

    /**
     * Return the inverse transformation of the specified y-coordinate, (y - ty) / k.
     *
     * @param y Value of y-coordinate.
     */
    invertY(y: number): number;

    /**
     * Returns a copy of the continuous scale x whose domain is transformed.
     * This is implemented by first applying the inverse x-transform on the scale’s range,
     * and then applying the inverse scale to compute the corresponding domain
     *
     * The scale x must use d3.interpolateNumber; do not use continuous.rangeRound as this
     * reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain.
     * This method does not modify the input scale x; x thus represents the untransformed scale,
     * while the returned scale represents its transformed view.
     *
     * @param xScale A continuous scale for x-dimension.
     */
    rescaleX<S extends ZoomScale>(xScale: S): S;

    /**
     * Returns a copy of the continuous scale y whose domain is transformed.
     * This is implemented by first applying the inverse y-transform on the scale’s range,
     * and then applying the inverse scale to compute the corresponding domain
     *
     * The scale y must use d3.interpolateNumber; do not use continuous.rangeRound as this
     * reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain.
     * This method does not modify the input scale x; x thus represents the untransformed scale,
     * while the returned scale represents its transformed view.
     *
     * @param yScale A continuous scale for y-dimension.
     */
    rescaleY<S extends ZoomScale>(yScale: S): S;

    /**
     * Return a transform whose scale k1 is equal to k0 × k, where k0 is this transform’s scale.
     *
     * @param k A scale factor.
     */
    scale(k: number): ZoomTransform;

    /**
     * Return a string representing the SVG transform corresponding to this transform.
     */
    toString(): string;

    /**
     * Return a transform whose translation tx1 and ty1 is equal to tx0 + x and ty0 + y,
     * where tx0 and ty0 is this transform’s translation.
     *
     * @param x Amount of translation in x-direction.
     * @param y Amount of translation in y-direction.
     */
    translate(x: number, y: number): ZoomTransform;
}

/**
 * Returns the current transform for the specified node. Note that node should typically be a DOM element, and not a selection.
 * (A selection may consist of multiple nodes, in different states, and this function only returns a single transform.) If you have a selection, call selection.node first.
 * In the context of an event listener, the node is typically the element that received the input event (which should be equal to event.transform), "this".
 * Internally, an element’s transform is stored as element.__zoom; however, you should use this method rather than accessing it directly.
 * If the given node has no defined transform, returns the identity transformation.
 * The returned transform represents a two-dimensional transformation matrix
 *
 * For details see {@link https://github.com/d3/d3-zoom#zoom-transforms}
 *
 * @param node An element for which to retrieve its current zoomt transform.
 */
export function zoomTransform(node: ZoomedElementBaseType): ZoomTransform;

/**
 * The identity transform, where k = 1, tx = ty = 0.
 */
export const zoomIdentity: ZoomTransform;
