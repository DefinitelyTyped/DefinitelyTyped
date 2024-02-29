/**
 * Namespace to tracking.js.
 * Provides global `window.tracking` object.
 *
 * Usage:
 * - As ES6 module import (side effect import): `import 'tracking'`.
 * - As ambient declaration if installed as global: `/// <reference path='tracking' />`.
 *
 * Note that individual classifier models have to be imported/loaded separately.
 * e.g. `import 'tracking/buid/data/face`
 */
declare namespace tracking {
    /**
     * Listener callback type for track events.
     */
    type TrackEventListener = (event: TrackEvent) => void;

    /**
     * Color match predicate function.
     */
    type ColorFunction = (r: number, g: number, b: number) => boolean;

    /**
     * ColorTracker utility to track colored blobs in a frame using color
     * difference evaluation.
     */
    class ColorTracker extends Tracker {
        /**
         * Create a new ColorTracker.
         * @param colors Optional color(s) to track.
         */
        constructor(colors?: string | string[]);

        /**
         * Registers a color as known color.
         * @param name The color name.
         * @param predicate The color function to test if the passed (r,g,b) is
         *        the desired color.
         */
        static registerColor(name: string, predicate: ColorFunction): void;

        /**
         * Gets the known color function that is able to test whether an (r,g,b) is
         * the desired color.
         * @param name The color name.
         */
        static getColor(name: string): ColorFunction;

        /** Gets the colors being tracked by the `ColorTracker` instance. */
        getColors(): string[];

        /** Gets the minimum dimension to classify a rectangle. */
        getMinDimension(): number;

        /** Gets the maximum dimension to classify a rectangle. */
        getMaxDimension(): number;

        /** Gets the minimum group size to be classified as a rectangle. */
        getMinGroupSize(): number;

        /**
         * Sets the colors to be tracked by the `ColorTracker` instance.
         * @param colors Array of color names to add.
         */
        setColors(colors: string[]): void;

        /**
         * Sets the minimum dimension to classify a rectangle.
         * @param minDimension The min dimension.
         */
        setMinDimension(minDimension: number): void;

        /**
         * Sets the maximum dimension to classify a rectangle.
         * @param maxDimension The max dimension.
         */
        setMaxDimension(maxDimension: number): void;

        /**
         * Sets the minimum group size to be classified as a rectangle.
         * @param minGroupSize The min group size.
         */
        setMinGroupSize(minGroupSize: number): void;

        /**
         * @param pixels The pixel data to track.
         * @param width The pixel canvas width.
         * @param height The pixel data height.
         */
        track(pixels: Uint8ClampedArray, width: number, height: number): void;
    }

    /**
     * Object tracker utility.
     */
    class ObjectTracker extends Tracker {
        /**
         * Create a new Object Tracker.
         * @param classifiers Optional object classifiers to track.
         */
        constructor(classifiers?: string | string[]);

        /** Gets the tracker HAAR classifiers. */
        getClassifiers(): number[];

        /** Gets the edges density value. */
        getEdgesDensity(): number;

        /** Gets the initial scale to start the feature block scaling. */
        getInitialScale(): number;

        /** Gets the scale factor to scale the feature block. */
        getScaleFactor(): number;

        /** Gets the block step size. */
        getStepSize(): number;

        /**
         * Sets the tracker HAAR classifiers.
         * @param classifiers Classifiers to track.
         */
        setClassifiers(classifiers: number[]): void;

        /**
         * Sets the edges density.
         * @param edgesDensity
         */
        setEdgesDensity(edgesDensity: number): void;

        /**
         * Sets the initial scale to start the block scaling.
         * @param initialScale
         */
        setInitialScale(initialScale: number): void;

        /**
         * Sets the scale factor to scale the feature block.
         * @param scaleFactor
         */
        setScaleFactor(scaleFactor: number): void;

        /**
         * Sets the block step size.
         * @param stepSize
         */
        setStepSize(stepSize: number): void;

        /**
         * @param pixels The pixel data to track.
         * @param width The pixel canvas width.
         * @param height The pixel data height.
         */
        track(pixels: Uint8ClampedArray, width: number, height: number): void;
    }

    /**
     * Base class for specific tracker types.
     */
    abstract class Tracker extends EventEmitter {
        /**
         * Tracks the pixels on the array. This method is called for each video
         * frame in order to emit `track` event.
         * @param pixels The pixel data to track.
         * @param width The pixel canvas width.
         * @param height The pixel data height.
         */
        abstract track(pixels: Uint8ClampedArray, width: number, height: number): void;
    }

    /**
     * EventEmitter utility class.
     */
    class EventEmitter {
        /**
         * Adds a listener to the end of the listeners array for the specified event.
         * @param event Name of the event.
         * @param listener Listener function.
         */
        addListener(event: string, listener: TrackEventListener): this;

        /**
         * Execute each of the listeners in order with the supplied arguments.
         * @param event Name of the event.
         * @param args Callback arguments.
         */
        emit(event: string, ...args: any[]): boolean;

        /**
         * Adds a listener to the end of the listeners array for the specified event.
         * @param event Name of the event.
         * @param listener Listener function.
         */
        on(event: string, listener: TrackEventListener): this;

        /**
         * Adds a one time listener for the event. This listener is invoked only the
         * next time the event is fired, after which it is removed.
         * @param event Name of the event.
         * @param listener Listener function.
         * FIXME: tracking.js docs says method should return this, but code does not
         *        this should be updated when fixed in the repo.
         */
        once(event: string, listener: TrackEventListener): void;

        /**
         * Removes all listeners, or those of the specified event. It's not a good
         * idea to remove listeners that were added elsewhere in the code,
         * especially when it's on an emitter that you didn't create.
         * @param event Optional name of the evnet to remove listeners for.
         */
        removeAllListeners(event?: string): this;

        /**
         * Remove a listener from the listener array for the specified event.
         * Caution: changes array indices in the listener array behind the listener.
         * @param event Name of the event.
         * @param listener Listener function.
         */
        removeListener(event: string, listener: TrackEventListener): this;
    }

    /**
     * TrackerTask utility.
     * Note: Types do not provide `setTracker()` even though not marked as private.
     * A new tracker should be created instead.
     */
    class TrackerTask extends EventEmitter {
        /**
         * Create a new tracker task.
         * @param tracker The tracker instance to manage.
         */
        constructor(tracker: Tracker);

        /**
         * Gets the tracker instance managed by this task.
         */
        getTracker(): Tracker;

        /**
         * Emits a `run` event on the tracker task for the implementers to run any
         * child action, e.g. `requestAnimationFrame`.
         */
        run(): this;

        /**
         * Emits a `stop` event on the tracker task for the implementers to stop any
         * child action being done, e.g. `requestAnimationFrame`.
         */
        stop(): this;
    }

    /**
     * Event data emmitted by a `track` event.
     */
    interface TrackEvent {
        data: TrackRect[];
    }

    /**
     * Bounding box data for individal tracking rectangles.
     */
    interface TrackRect {
        /** Horizontal position of top-left corner. */
        x: number;

        /** Vertical position of top-left corner */
        y: number;

        /** Rectange height. */
        height: number;

        /** Rectange width. */
        width: number;

        /** Color being tracked (for ColorTracker only) */
        color?: string | undefined;
    }

    /**
     * Tracks a canvas, image or video element based on the specified `tracker`
     * instance. This method extract the pixel information of the input element
     * to pass to the `tracker` instance. When tracking a video, the
     * `tracker.track(pixels, width, height)` will be in a
     * `requestAnimationFrame` loop in order to track all video frames.
     * @param element HTMLElement or CSS3 selector string for the element to track.
     *                Element must be convas, image, or video.
     * @param tracker Tracker instance used to track the element.
     * @param options Optional tracker configuration.
     */
    function track(
        element: HTMLElement | string,
        tracker: tracking.Tracker,
        options?: { camera?: boolean | undefined; audio?: boolean | undefined },
    ): TrackerTask;
}
