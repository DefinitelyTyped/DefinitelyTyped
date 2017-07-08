// Type definitions for Plottable v1.4.0
// Project: http://plottablejs.org/
// Definitions by: Plottable Team <https://github.com/palantir/plottable>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as d3 from "d3";

declare global {
    namespace Plottable {
        namespace Utils {
            namespace Math {
                /**
                 * Checks if x is between a and b.
                 *
                 * @param {number} x The value to test if in range
                 * @param {number} a The beginning of the (inclusive) range
                 * @param {number} b The ending of the (inclusive) range
                 * @return {boolean} Whether x is in [a, b]
                 */
                function inRange(x: number, a: number, b: number): boolean;
                /**
                 * Clamps x to the range [min, max].
                 *
                 * @param {number} x The value to be clamped.
                 * @param {number} min The minimum value.
                 * @param {number} max The maximum value.
                 * @return {number} A clamped value in the range [min, max].
                 */
                function clamp(x: number, min: number, max: number): number;
                /**
                 * Applies the accessor, if provided, to each element of `array` and returns the maximum value.
                 * If no maximum value can be computed, returns defaultValue.
                 */
                function max<C>(array: C[], defaultValue: C): C;
                function max<T, C>(array: T[], accessor: (t?: T, i?: number) => C, defaultValue: C): C;
                /**
                 * Applies the accessor, if provided, to each element of `array` and returns the minimum value.
                 * If no minimum value can be computed, returns defaultValue.
                 */
                function min<C>(array: C[], defaultValue: C): C;
                function min<T, C>(array: T[], accessor: (t?: T, i?: number) => C, defaultValue: C): C;
                /**
                 * Returns true **only** if x is NaN
                 */
                function isNaN(n: any): boolean;
                /**
                 * Returns true if the argument is a number, which is not NaN
                 * Numbers represented as strings do not pass this function
                 */
                function isValidNumber(n: any): boolean;
                /**
                 * Generates an array of consecutive, strictly increasing numbers
                 * in the range [start, stop) separeted by step
                 */
                function range(start: number, stop: number, step?: number): number[];
                /**
                 * Returns the square of the distance between two points
                 *
                 * @param {Point} p1
                 * @param {Point} p2
                 * @return {number} dist(p1, p2)^2
                 */
                function distanceSquared(p1: Point, p2: Point): number;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            /**
             * Shim for ES6 map.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
             */
            class Map<K, V> {
                constructor();
                set(key: K, value: V): Map<K, V>;
                get(key: K): V;
                has(key: K): boolean;
                forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
                delete(key: K): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            /**
             * Shim for ES6 set.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
             */
            class Set<T> {
                size: number;
                constructor();
                add(value: T): Set<T>;
                delete(value: T): boolean;
                has(value: T): boolean;
                forEach(callback: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
            }
        }
    }

    namespace Plottable {
        namespace Utils {
            namespace DOM {
                /**
                 * Gets the bounding box of an element.
                 * @param {d3.Selection} element
                 * @returns {SVGRed} The bounding box.
                 */
                function elementBBox(element: d3.Selection<any>): SVGRect;
                /**
                 * Screen refresh rate which is assumed to be 60fps
                 */
                var SCREEN_REFRESH_RATE_MILLISECONDS: number;
                /**
                 * Polyfill for `window.requestAnimationFrame`.
                 * If the function exists, then we use the function directly.
                 * Otherwise, we set a timeout on `SCREEN_REFRESH_RATE_MILLISECONDS` and then perform the function.
                 *
                 * @param {() => void} callback The callback to call in the next animation frame
                 */
                function requestAnimationFramePolyfill(callback: () => void): void;
                /**
                 * Calculates the width of the element.
                 * The width includes the padding and the border on the element's left and right sides.
                 *
                 * @param {Element} element The element to query
                 * @returns {number} The width of the element.
                 */
                function elementWidth(element: Element): number;
                /**
                 * Calculates the height of the element.
                 * The height includes the padding the and the border on the element's top and bottom sides.
                 *
                 * @param {Element} element The element to query
                 * @returns {number} The height of the element
                 */
                function elementHeight(element: Element): number;
                /**
                 * Retrieves the number array representing the translation for the selection
                 *
                 * @param {d3.Selection<any>} selection The selection to query
                 * @returns {[number, number]} The number array representing the translation
                 */
                function translate(selection: d3.Selection<any>): [number, number];
                /**
                 * Translates the given selection by the input x / y pixel amounts.
                 *
                 * @param {d3.Selection<any>} selection The selection to translate
                 * @param {number} x The amount to translate in the x direction
                 * @param {number} y The amount to translate in the y direction
                 * @returns {d3.Selection<any>} The input selection
                 */
                function translate(selection: d3.Selection<any>, x: number, y: number): d3.Selection<any>;
                /**
                 * Checks if the first ClientRect overlaps the second.
                 *
                 * @param {ClientRect} clientRectA The first ClientRect
                 * @param {ClientRect} clientRectB The second ClientRect
                 * @returns {boolean} If the ClientRects overlap each other.
                 */
                function clientRectsOverlap(clientRectA: ClientRect, clientRectB: ClientRect): boolean;
                /**
                 * Returns true if and only if innerClientRect is inside outerClientRect.
                 *
                 * @param {ClientRect} innerClientRect The first ClientRect
                 * @param {ClientRect} outerClientRect The second ClientRect
                 * @returns {boolean} If and only if the innerClientRect is inside outerClientRect.
                 */
                function clientRectInside(innerClientRect: ClientRect, outerClientRect: ClientRect): boolean;
                /**
                 * Retrieves the bounding svg of the input element
                 *
                 * @param {SVGElement} element The element to query
                 * @returns {SVGElement} The bounding svg
                 */
                function boundingSVG(element: SVGElement): SVGElement;
                /**
                 * Generates a ClipPath ID that is unique for this instance of Plottable
                 */
                function generateUniqueClipPathId(): string;
                /**
                 * Returns true if the supplied coordinates or Ranges intersect or are contained by bbox.
                 *
                 * @param {number | Range} xValOrRange The x coordinate or Range to test
                 * @param {number | Range} yValOrRange The y coordinate or Range to test
                 * @param {SVGRect} bbox The bbox
                 * @param {number} tolerance Amount by which to expand bbox, in each dimension, before
                 * testing intersection
                 *
                 * @returns {boolean} True if the supplied coordinates or Ranges intersect or are
                 * contained by bbox, false otherwise.
                 */
                function intersectsBBox(xValOrRange: number | Range, yValOrRange: number | Range, bbox: SVGRect, tolerance?: number): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            namespace Color {
                /**
                 * Return contrast ratio between two colors
                 * Based on implementation from chroma.js by Gregor Aisch (gka) (licensed under BSD)
                 * chroma.js may be found here: https://github.com/gka/chroma.js
                 * License may be found here: https://github.com/gka/chroma.js/blob/master/LICENSE
                 * see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
                 */
                function contrast(a: string, b: string): number;
                /**
                 * Returns a brighter copy of this color. Each channel is multiplied by 0.7 ^ -factor.
                 * Channel values are capped at the maximum value of 255, and the minimum value of 30.
                 */
                function lightenColor(color: string, factor: number): string;
                /**
                 * Gets the Hex Code of the color resulting by applying the className CSS class to the
                 * colorTester selection. Returns null if the tester is transparent.
                 *
                 * @param {d3.Selection<void>} colorTester The d3 selection to apply the CSS class to
                 * @param {string} className The name of the class to be applied
                 * @return {string} The hex code of the computed color
                 */
                function colorTest(colorTester: d3.Selection<void>, className: string): string;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            namespace Array {
                /**
                 * Takes two arrays of numbers and adds them together
                 *
                 * @param {number[]} aList The first array of numbers
                 * @param {number[]} bList The second array of numbers
                 * @return {number[]} An array of numbers where x[i] = aList[i] + bList[i]
                 */
                function add(aList: number[], bList: number[]): number[];
                /**
                 * Take an array of values, and return the unique values.
                 * Will work iff ∀ a, b, a.toString() == b.toString() => a == b; will break on Object inputs
                 *
                 * @param {T[]} values The values to find uniqueness for
                 * @return {T[]} The unique values
                 */
                function uniq<T>(arr: T[]): T[];
                /**
                 * @param {T[][]} a The 2D array that will have its elements joined together.
                 * @return {T[]} Every array in a, concatenated together in the order they appear.
                 */
                function flatten<T>(a: T[][]): T[];
                /**
                 * Creates an array of length `count`, filled with value or (if value is a function), value()
                 *
                 * @param {T | ((index?: number) => T)} value The value to fill the array with or a value generator (called with index as arg)
                 * @param {number} count The length of the array to generate
                 * @return {any[]}
                 */
                function createFilledArray<T>(value: T | ((index?: number) => T), count: number): T[];
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            /**
             * A set of callbacks which can be all invoked at once.
             * Each callback exists at most once in the set (based on reference equality).
             * All callbacks should have the same signature.
             */
            class CallbackSet<CB extends Function> extends Set<CB> {
                callCallbacks(...args: any[]): CallbackSet<CB>;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            namespace Stacking {
                type StackedDatum = {
                    value: number;
                    offset: number;
                };
                type StackingResult = Utils.Map<Dataset, Utils.Map<string, StackedDatum>>;
                /**
                 * Computes the StackingResult (value and offset) for each data point in each Dataset.
                 *
                 * @param {Dataset[]} datasets The Datasets to be stacked on top of each other in the order of stacking
                 * @param {Accessor<any>} keyAccessor Accessor for the key of the data
                 * @param {Accessor<number>} valueAccessor Accessor for the value of the data
                 * @return {StackingResult} value and offset for each datapoint in each Dataset
                 */
                function stack(datasets: Dataset[], keyAccessor: Accessor<any>, valueAccessor: Accessor<number>): StackingResult;
                /**
                 * Computes the total extent over all data points in all Datasets, taking stacking into consideration.
                 *
                 * @param {StackingResult} stackingResult The value and offset information for each datapoint in each dataset
                 * @oaram {Accessor<any>} keyAccessor Accessor for the key of the data existent in the stackingResult
                 * @param {Accessor<boolean>} filter A filter for data to be considered when computing the total extent
                 * @return {[number, number]} The total extent
                 */
                function stackedExtent(stackingResult: StackingResult, keyAccessor: Accessor<any>, filter: Accessor<boolean>): number[];
                /**
                 * Normalizes a key used for stacking
                 *
                 * @param {any} key The key to be normalized
                 * @return {string} The stringified key
                 */
                function normalizeKey(key: any): string;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            namespace Window {
                /**
                 * Print a warning message to the console, if it is available.
                 *
                 * @param {string} The warnings to print
                 */
                function warn(warning: string): void;
                /**
                 * Is like setTimeout, but activates synchronously if time=0
                 * We special case 0 because of an observed issue where calling setTimeout causes visible flickering.
                 * We believe this is because when requestAnimationFrame calls into the paint function, as soon as that function finishes
                 * evaluating, the results are painted to the screen. As a result, if we want something to occur immediately but call setTimeout
                 * with time=0, then it is pushed to the call stack and rendered in the next frame, so the component that was rendered via
                 * setTimeout appears out-of-sync with the rest of the plot.
                 */
                function setTimeout(f: Function, time: number, ...args: any[]): number;
                /**
                 * Sends a deprecation warning to the console. The warning includes the name of the deprecated method,
                 * version number of the deprecation, and an optional message.
                 *
                 * To be used in the first line of a deprecated method.
                 *
                 * @param {string} callingMethod The name of the method being deprecated
                 * @param {string} version The version when the tagged method became obsolete
                 * @param {string?} message Optional message to be shown with the warning
                 */
                function deprecated(callingMethod: string, version: string, message?: string): void;
            }
        }
    }


    namespace Plottable {
        namespace Utils {
            class ClientToSVGTranslator {
                /**
                 * Returns the ClientToSVGTranslator for the <svg> containing elem.
                 * If one already exists on that <svg>, it will be returned; otherwise, a new one will be created.
                 */
                static getTranslator(elem: SVGElement): ClientToSVGTranslator;
                constructor(svg: SVGElement);
                /**
                 * Computes the position relative to the <svg> in svg-coordinate-space.
                 */
                computePosition(clientX: number, clientY: number): Point;
                /**
                 * Checks whether event happened inside <svg> element.
                 */
                insideSVG(e: Event): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Configs {
            /**
             * Specifies if Plottable should show warnings.
             */
            var SHOW_WARNINGS: boolean;
        }
    }


    namespace Plottable {
        var version: string;
    }


    namespace Plottable {
        type DatasetCallback = (dataset: Dataset) => void;
        class Dataset {
            /**
             * A Dataset contains an array of data and some metadata.
             * Changes to the data or metadata will cause anything subscribed to the Dataset to update.
             *
             * @constructor
             * @param {any[]} [data=[]] The data for this Dataset.
             * @param {any} [metadata={}] An object containing additional information.
             */
            constructor(data?: any[], metadata?: any);
            /**
             * Adds a callback to be called when the Dataset updates.
             *
             * @param {DatasetCallback} callback.
             * @returns {Dataset} The calling Dataset.
             */
            onUpdate(callback: DatasetCallback): Dataset;
            /**
             * Removes a callback that would be called when the Dataset updates.
             *
             * @param {DatasetCallback} callback
             * @returns {Dataset} The calling Dataset.
             */
            offUpdate(callback: DatasetCallback): Dataset;
            /**
             * Gets the data.
             *
             * @returns {any[]}
             */
            data(): any[];
            /**
             * Sets the data.
             *
             * @param {any[]} data
             * @returns {Dataset} The calling Dataset.
             */
            data(data: any[]): Dataset;
            /**
             * Gets the metadata.
             *
             * @returns {any}
             */
            metadata(): any;
            /**
             * Sets the metadata.
             *
             * @param {any} metadata
             * @returns {Dataset} The calling Dataset.
             */
            metadata(metadata: any): Dataset;
        }
    }


    namespace Plottable {
        namespace RenderPolicies {
            /**
             * A policy for rendering Components.
             */
            interface RenderPolicy {
                render(): any;
            }
            /**
             * Renders Components immediately after they are enqueued.
             * Useful for debugging, horrible for performance.
             */
            class Immediate implements RenderPolicy {
                render(): void;
            }
            /**
             * The default way to render, which only tries to render every frame
             * (usually, 1/60th of a second).
             */
            class AnimationFrame implements RenderPolicy {
                render(): void;
            }
            /**
             * Renders with `setTimeout()`.
             * Generally an inferior way to render compared to `requestAnimationFrame`,
             * but useful for browsers that don't suppoort `requestAnimationFrame`.
             */
            class Timeout implements RenderPolicy {
                render(): void;
            }
        }
    }


    namespace Plottable {
        /**
         * The RenderController is responsible for enqueueing and synchronizing
         * layout and render calls for Components.
         *
         * Layout and render calls occur inside an animation callback
         * (window.requestAnimationFrame if available).
         *
         * RenderController.flush() immediately lays out and renders all Components currently enqueued.
         *
         * To always have immediate rendering (useful for debugging), call
         * ```typescript
         * Plottable.RenderController.setRenderPolicy(
         *   new Plottable.RenderPolicies.Immediate()
         * );
         * ```
         */
        namespace RenderController {
            namespace Policy {
                var IMMEDIATE: string;
                var ANIMATION_FRAME: string;
                var TIMEOUT: string;
            }
            function renderPolicy(): RenderPolicies.RenderPolicy;
            function renderPolicy(renderPolicy: string): void;
            /**
             * Enqueues the Component for rendering.
             *
             * @param {Component} component
             */
            function registerToRender(component: Component): void;
            /**
             * Enqueues the Component for layout and rendering.
             *
             * @param {Component} component
             */
            function registerToComputeLayout(component: Component): void;
            /**
             * Renders all Components waiting to be rendered immediately
             * instead of waiting until the next frame.
             *
             * Useful to call when debugging.
             */
            function flush(): void;
        }
    }

    namespace Plottable {
        /**
         * Accesses a specific datum property.
         */
        interface Accessor<T> {
            (datum: any, index: number, dataset: Dataset): T;
        }
        /**
         * Retrieves a scaled datum property.
         * Essentially passes the result of an Accessor through a Scale.
         */
        type Projector = (datum: any, index: number, dataset: Dataset) => any;
        /**
         * A mapping from attributes ("x", "fill", etc.) to the functions that get
         * that information out of the data.
         */
        type AttributeToProjector = {
            [attr: string]: Projector;
        };
        /**
         * A function that generates attribute values from the datum and index.
         * Essentially a Projector with a particular Dataset rolled in.
         */
        type AppliedProjector = (datum: any, index: number) => any;
        /**
         * A mapping from attributes to the AppliedProjectors used to generate them.
         */
        type AttributeToAppliedProjector = {
            [attr: string]: AppliedProjector;
        };
        /**
         * Space request used during layout negotiation.
         *
         * @member {number} minWidth The minimum acceptable width given the offered space.
         * @member {number} minHeight the minimum acceptable height given the offered space.
         */
        type SpaceRequest = {
            minWidth: number;
            minHeight: number;
        };
        /**
         * Min and max values for a particular property.
         */
        type Range = {
            min: number;
            max: number;
        };
        /**
         * A location in pixel-space.
         */
        type Point = {
            x: number;
            y: number;
        };
        /**
         * The corners of a box.
         */
        type Bounds = {
            topLeft: Point;
            bottomRight: Point;
        };
        /**
         * An object representing a data-backed visual entity inside a Component.
         */
        interface Entity<C extends Component> {
            datum: any;
            position: Point;
            selection: d3.Selection<any>;
            component: C;
        }
    }


    namespace Plottable {
        type Formatter = (d: any) => string;
        /**
         * This field is deprecated and will be removed in v2.0.0.
         *
         * The number of milliseconds between midnight one day and the next is
         * not a fixed quantity.
         *
         * Use date.setDate(date.getDate() + number_of_days) instead.
         *
         */
        var MILLISECONDS_IN_ONE_DAY: number;
        namespace Formatters {
            /**
             * Creates a formatter for currency values.
             *
             * @param {number} [precision] The number of decimal places to show (default 2).
             * @param {string} [symbol] The currency symbol to use (default "$").
             * @param {boolean} [prefix] Whether to prepend or append the currency symbol (default true).
             * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
             *
             * @returns {Formatter} A formatter for currency values.
             */
            function currency(precision?: number, symbol?: string, prefix?: boolean): (d: any) => string;
            /**
             * Creates a formatter that displays exactly [precision] decimal places.
             *
             * @param {number} [precision] The number of decimal places to show (default 3).
             * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
             *
             * @returns {Formatter} A formatter that displays exactly [precision] decimal places.
             */
            function fixed(precision?: number): (d: any) => string;
            /**
             * Creates a formatter that formats numbers to show no more than
             * [precision] decimal places. All other values are stringified.
             *
             * @param {number} [precision] The number of decimal places to show (default 3).
             * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
             *
             * @returns {Formatter} A formatter for general values.
             */
            function general(precision?: number): (d: any) => string;
            /**
             * Creates a formatter that stringifies its input.
             *
             * @returns {Formatter} A formatter that stringifies its input.
             */
            function identity(): (d: any) => string;
            /**
             * Creates a formatter for percentage values.
             * Multiplies the input by 100 and appends "%".
             *
             * @param {number} [precision] The number of decimal places to show (default 0).
             * @param {boolean} [onlyShowUnchanged] Whether to return a value if value changes after formatting (default true).
             *
             * @returns {Formatter} A formatter for percentage values.
             */
            function percentage(precision?: number): (d: any) => string;
            /**
             * Creates a formatter for values that displays [precision] significant figures
             * and puts SI notation.
             *
             * @param {number} [precision] The number of significant figures to show (default 3).
             *
             * @returns {Formatter} A formatter for SI values.
             */
            function siSuffix(precision?: number): (d: any) => string;
            /**
             * Creates a multi time formatter that displays dates.
             *
             * @returns {Formatter} A formatter for time/date values.
             */
            function multiTime(): (d: any) => string;
            /**
             * Creates a time formatter that displays time/date using given specifier.
             *
             * List of directives can be found on: https://github.com/mbostock/d3/wiki/Time-Formatting#format
             *
             * @param {string} [specifier] The specifier for the formatter.
             *
             * @returns {Formatter} A formatter for time/date values.
             */
            function time(specifier: string): Formatter;
            /**
             * Creates a formatter for relative dates.
             *
             * @param {number} baseValue The start date (as epoch time) used in computing relative dates (default 0)
             * @param {number} increment The unit used in calculating relative date values (default MILLISECONDS_IN_ONE_DAY)
             * @param {string} label The label to append to the formatted string (default "")
             *
             * @returns {Formatter} A formatter for time/date values.
             */
            function relativeDate(baseValue?: number, increment?: number, label?: string): (d: any) => string;
        }
    }


    namespace Plottable {
        /**
         * A SymbolFactory is a function that takes in a symbolSize which is the edge length of the render area
         * and returns a string representing the 'd' attribute of the resultant 'path' element
         */
        type SymbolFactory = (symbolSize: number) => string;
        namespace SymbolFactories {
            function circle(): SymbolFactory;
            function square(): SymbolFactory;
            function cross(): SymbolFactory;
            function diamond(): SymbolFactory;
            function triangleUp(): SymbolFactory;
            function triangleDown(): SymbolFactory;
        }
    }


    namespace Plottable {
        interface ScaleCallback<S extends Scale<any, any>> {
            (scale: S): any;
        }
        namespace Scales {
            /**
             * A function that supplies domain values to be included into a Scale.
             *
             * @param {Scale} scale
             * @returns {D[]} An array of values that should be included in the Scale.
             */
            interface IncludedValuesProvider<D> {
                (scale: Scale<D, any>): D[];
            }
            /**
             * A function that supplies padding exception values for the Scale.
             * If one end of the domain is set to an excepted value as a result of autoDomain()-ing,
             * that end of the domain will not be padded.
             *
             * @param {QuantitativeScale} scale
             * @returns {D[]} An array of values that should not be padded.
             */
            interface PaddingExceptionsProvider<D> {
                (scale: QuantitativeScale<D>): D[];
            }
        }
        class Scale<D, R> {
            /**
             * A Scale is a function (in the mathematical sense) that maps values from a domain to a range.
             *
             * @constructor
             */
            constructor();
            /**
             * Given an array of potential domain values, computes the extent of those values.
             *
             * @param {D[]} values
             * @returns {D[]} The extent of the input values.
             */
            extentOfValues(values: D[]): D[];
            protected _getAllIncludedValues(): D[];
            protected _getExtent(): D[];
            /**
             * Adds a callback to be called when the Scale updates.
             *
             * @param {ScaleCallback} callback.
             * @returns {Scale} The calling Scale.
             */
            onUpdate(callback: ScaleCallback<Scale<D, R>>): Scale<D, R>;
            /**
             * Removes a callback that would be called when the Scale updates.
             *
             * @param {ScaleCallback} callback.
             * @returns {Scale} The calling Scale.
             */
            offUpdate(callback: ScaleCallback<Scale<D, R>>): Scale<D, R>;
            protected _dispatchUpdate(): void;
            /**
             * Sets the Scale's domain so that it spans the Extents of all its ExtentsProviders.
             *
             * @returns {Scale} The calling Scale.
             */
            autoDomain(): Scale<D, R>;
            protected _autoDomainIfAutomaticMode(): void;
            /**
             * Computes the range value corresponding to a given domain value.
             *
             * @param {D} value
             * @returns {R} The range value corresponding to the supplied domain value.
             */
            scale(value: D): R;
            /**
             * Gets the domain.
             *
             * @returns {D[]} The current domain.
             */
            domain(): D[];
            /**
             * Sets the domain.
             *
             * @param {D[]} values
             * @returns {Scale} The calling Scale.
             */
            domain(values: D[]): Scale<D, R>;
            protected _getDomain(): void;
            protected _setDomain(values: D[]): void;
            protected _setBackingScaleDomain(values: D[]): void;
            /**
             * Gets the range.
             *
             * @returns {R[]} The current range.
             */
            range(): R[];
            /**
             * Sets the range.
             *
             * @param {R[]} values
             * @returns {Scale} The calling Scale.
             */
            range(values: R[]): Scale<D, R>;
            protected _getRange(): void;
            protected _setRange(values: R[]): void;
            /**
             * Adds an IncludedValuesProvider to the Scale.
             *
             * @param {Scales.IncludedValuesProvider} provider
             * @returns {Scale} The calling Scale.
             */
            addIncludedValuesProvider(provider: Scales.IncludedValuesProvider<D>): Scale<D, R>;
            /**
             * Removes the IncludedValuesProvider from the Scale.
             *
             * @param {Scales.IncludedValuesProvider} provider
             * @returns {Scale} The calling Scale.
             */
            removeIncludedValuesProvider(provider: Scales.IncludedValuesProvider<D>): Scale<D, R>;
        }
    }


    namespace Plottable {
        class QuantitativeScale<D> extends Scale<D, number> {
            protected static _DEFAULT_NUM_TICKS: number;
            /**
             * A QuantitativeScale is a Scale that maps number-like values to numbers.
             * It is invertible and continuous.
             *
             * @constructor
             */
            constructor();
            autoDomain(): QuantitativeScale<D>;
            protected _autoDomainIfAutomaticMode(): void;
            protected _getExtent(): D[];
            /**
             * Adds a padding exception provider.
             * If one end of the domain is set to an excepted value as a result of autoDomain()-ing,
             * that end of the domain will not be padded.
             *
             * @param {Scales.PaddingExceptionProvider<D>} provider The provider function.
             * @returns {QuantitativeScale} The calling QuantitativeScale.
             */
            addPaddingExceptionsProvider(provider: Scales.PaddingExceptionsProvider<D>): QuantitativeScale<D>;
            /**
             * Removes the padding exception provider.
             *
             * @param {Scales.PaddingExceptionProvider<D>} provider The provider function.
             * @returns {QuantitativeScale} The calling QuantitativeScale.
             */
            removePaddingExceptionsProvider(provider: Scales.PaddingExceptionsProvider<D>): QuantitativeScale<D>;
            /**
             * Gets the padding proportion.
             */
            padProportion(): number;
            /**
             * Sets the padding porportion.
             * When autoDomain()-ing, the computed domain will be expanded by this proportion,
             * then rounded to human-readable values.
             *
             * @param {number} padProportion The padding proportion. Passing 0 disables padding.
             * @returns {QuantitativeScale} The calling QuantitativeScale.
             */
            padProportion(padProportion: number): QuantitativeScale<D>;
            protected _expandSingleValueDomain(singleValueDomain: D[]): D[];
            /**
             * Computes the domain value corresponding to a supplied range value.
             *
             * @param {number} value: A value from the Scale's range.
             * @returns {D} The domain value corresponding to the supplied range value.
             */
            invert(value: number): D;
            domain(): D[];
            domain(values: D[]): QuantitativeScale<D>;
            /**
             * Gets the lower end of the domain.
             *
             * @return {D}
             */
            domainMin(): D;
            /**
             * Sets the lower end of the domain.
             *
             * @return {QuantitativeScale} The calling QuantitativeScale.
             */
            domainMin(domainMin: D): QuantitativeScale<D>;
            /**
             * Gets the upper end of the domain.
             *
             * @return {D}
             */
            domainMax(): D;
            /**
             * Sets the upper end of the domain.
             *
             * @return {QuantitativeScale} The calling QuantitativeScale.
             */
            domainMax(domainMax: D): QuantitativeScale<D>;
            extentOfValues(values: D[]): D[];
            protected _setDomain(values: D[]): void;
            /**
             * Gets the array of tick values generated by the default algorithm.
             */
            defaultTicks(): D[];
            /**
             * Gets an array of tick values spanning the domain.
             *
             * @returns {D[]}
             */
            ticks(): D[];
            /**
             * Given a domain, expands its domain onto "nice" values, e.g. whole
             * numbers.
             */
            protected _niceDomain(domain: D[], count?: number): D[];
            protected _defaultExtent(): D[];
            /**
             * Gets the TickGenerator.
             */
            tickGenerator(): Scales.TickGenerators.TickGenerator<D>;
            /**
             * Sets the TickGenerator
             *
             * @param {TickGenerator} generator
             * @return {QuantitativeScale} The calling QuantitativeScale.
             */
            tickGenerator(generator: Scales.TickGenerators.TickGenerator<D>): QuantitativeScale<D>;
        }
    }


    namespace Plottable {
        namespace Scales {
            class Linear extends QuantitativeScale<number> {
                /**
                 * @constructor
                 */
                constructor();
                protected _defaultExtent(): number[];
                protected _expandSingleValueDomain(singleValueDomain: number[]): number[];
                scale(value: number): number;
                protected _getDomain(): number[];
                protected _setBackingScaleDomain(values: number[]): void;
                protected _getRange(): number[];
                protected _setRange(values: number[]): void;
                invert(value: number): number;
                defaultTicks(): number[];
                protected _niceDomain(domain: number[], count?: number): number[];
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            class ModifiedLog extends QuantitativeScale<number> {
                /**
                 * A ModifiedLog Scale acts as a regular log scale for large numbers.
                 * As it approaches 0, it gradually becomes linear.
                 * Consequently, a ModifiedLog Scale can process 0 and negative numbers.
                 *
                 * @constructor
                 * @param {number} [base=10]
                 *        The base of the log. Must be > 1.
                 *
                 *        For x <= base, scale(x) = log(x).
                 *
                 *        For 0 < x < base, scale(x) will become more and more
                 *        linear as it approaches 0.
                 *
                 *        At x == 0, scale(x) == 0.
                 *
                 *        For negative values, scale(-x) = -scale(x).
                 */
                constructor(base?: number);
                scale(x: number): number;
                invert(x: number): number;
                protected _getDomain(): number[];
                protected _setDomain(values: number[]): void;
                protected _setBackingScaleDomain(values: number[]): void;
                ticks(): number[];
                protected _niceDomain(domain: number[], count?: number): number[];
                protected _defaultExtent(): number[];
                protected _expandSingleValueDomain(singleValueDomain: number[]): number[];
                protected _getRange(): number[];
                protected _setRange(values: number[]): void;
                defaultTicks(): number[];
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            class Category extends Scale<string, number> {
                /**
                 * A Category Scale maps strings to numbers.
                 *
                 * @constructor
                 */
                constructor();
                extentOfValues(values: string[]): string[];
                protected _getExtent(): string[];
                domain(): string[];
                domain(values: string[]): Category;
                protected _setDomain(values: string[]): void;
                range(): [number, number];
                range(values: [number, number]): Category;
                /**
                 * Returns the width of the range band.
                 *
                 * @returns {number} The range band width
                 */
                rangeBand(): number;
                /**
                 * Returns the step width of the scale.
                 *
                 * The step width is the pixel distance between adjacent values in the domain.
                 *
                 * @returns {number}
                 */
                stepWidth(): number;
                /**
                 * Gets the inner padding.
                 *
                 * The inner padding is defined as the padding in between bands on the scale,
                 * expressed as a multiple of the rangeBand().
                 *
                 * @returns {number}
                 */
                innerPadding(): number;
                /**
                 * Sets the inner padding.
                 *
                 * The inner padding is defined as the padding in between bands on the scale,
                 * expressed as a multiple of the rangeBand().
                 *
                 * @returns {Category} The calling Category Scale.
                 */
                innerPadding(innerPadding: number): Category;
                /**
                 * Gets the outer padding.
                 *
                 * The outer padding is the padding in between the outer bands and the edges of the range,
                 * expressed as a multiple of the rangeBand().
                 *
                 * @returns {number}
                 */
                outerPadding(): number;
                /**
                 * Sets the outer padding.
                 *
                 * The outer padding is the padding in between the outer bands and the edges of the range,
                 * expressed as a multiple of the rangeBand().
                 *
                 * @returns {Category} The calling Category Scale.
                 */
                outerPadding(outerPadding: number): Category;
                scale(value: string): number;
                protected _getDomain(): string[];
                protected _setBackingScaleDomain(values: string[]): void;
                protected _getRange(): number[];
                protected _setRange(values: number[]): void;
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            class Color extends Scale<string, string> {
                /**
                 * A Color Scale maps string values to color hex values expressed as a string.
                 *
                 * @constructor
                 * @param {string} [scaleType] One of "Category10"/"Category20"/"Category20b"/"Category20c".
                 *   (see https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors)
                 *   If not supplied, reads the colors defined using CSS -- see plottable.css.
                 */
                constructor(scaleType?: string);
                extentOfValues(values: string[]): string[];
                protected _getExtent(): string[];
                static invalidateColorCache(): void;
                /**
                 * Returns the color-string corresponding to a given string.
                 * If there are not enough colors in the range(), a lightened version of an existing color will be used.
                 *
                 * @param {string} value
                 * @returns {string}
                 */
                scale(value: string): string;
                protected _getDomain(): string[];
                protected _setBackingScaleDomain(values: string[]): void;
                protected _getRange(): string[];
                protected _setRange(values: string[]): void;
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            class Time extends QuantitativeScale<Date> {
                /**
                 * A Time Scale maps Date objects to numbers.
                 *
                 * @constructor
                 */
                constructor();
                /**
                 * Returns an array of ticks values separated by the specified interval.
                 *
                 * @param {string} interval A string specifying the interval unit.
                 * @param {number?} [step] The number of multiples of the interval between consecutive ticks.
                 * @return {Date[]}
                 */
                tickInterval(interval: string, step?: number): Date[];
                protected _setDomain(values: Date[]): void;
                protected _defaultExtent(): Date[];
                protected _expandSingleValueDomain(singleValueDomain: Date[]): Date[];
                scale(value: Date): number;
                protected _getDomain(): Date[];
                protected _setBackingScaleDomain(values: Date[]): void;
                protected _getRange(): number[];
                protected _setRange(values: number[]): void;
                invert(value: number): Date;
                defaultTicks(): Date[];
                protected _niceDomain(domain: Date[]): Date[];
                /**
                 * Transforms the Plottable TimeInterval string into a d3 time interval equivalent.
                 * If the provided TimeInterval is incorrect, the default is d3.time.year
                 */
                static timeIntervalToD3Time(timeInterval: string): d3.time.Interval;
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            class InterpolatedColor extends Scale<number, string> {
                static REDS: string[];
                static BLUES: string[];
                static POSNEG: string[];
                /**
                 * An InterpolatedColor Scale maps numbers to color hex values, expressed as strings.
                 *
                 * @param {string} [scaleType="linear"] One of "linear"/"log"/"sqrt"/"pow".
                 */
                constructor(scaleType?: string);
                extentOfValues(values: number[]): number[];
                autoDomain(): InterpolatedColor;
                scale(value: number): string;
                protected _getDomain(): number[];
                protected _setBackingScaleDomain(values: number[]): void;
                protected _getRange(): string[];
                protected _setRange(range: string[]): void;
            }
        }
    }


    namespace Plottable {
        namespace Scales {
            namespace TickGenerators {
                /**
                 * Generates an array of tick values for the specified scale.
                 *
                 * @param {QuantitativeScale} scale
                 * @returns {D[]}
                 */
                interface TickGenerator<D> {
                    (scale: Plottable.QuantitativeScale<D>): D[];
                }
                /**
                 * Creates a TickGenerator using the specified interval.
                 *
                 * Generates ticks at multiples of the interval while also including the domain boundaries.
                 *
                 * @param {number} interval
                 * @returns {TickGenerator}
                 */
                function intervalTickGenerator(interval: number): TickGenerator<number>;
                /**
                 * Creates a TickGenerator returns only integer tick values.
                 *
                 * @returns {TickGenerator}
                 */
                function integerTickGenerator(): TickGenerator<number>;
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            /**
             * A step for the drawer to draw.
             *
             * Specifies how AttributeToProjector needs to be animated.
             */
            type DrawStep = {
                attrToProjector: AttributeToProjector;
                animator: Animator;
            };
            /**
             * A DrawStep that carries an AttributeToAppliedProjector map.
             */
            type AppliedDrawStep = {
                attrToAppliedProjector: AttributeToAppliedProjector;
                animator: Animator;
            };
        }
        class Drawer {
            protected _svgElementName: string;
            protected _className: string;
            /**
             * A Drawer draws svg elements based on the input Dataset.
             *
             * @constructor
             * @param {Dataset} dataset The dataset associated with this Drawer
             */
            constructor(dataset: Dataset);
            /**
             * Retrieves the renderArea selection for the Drawer.
             */
            renderArea(): d3.Selection<void>;
            /**
             * Sets the renderArea selection for the Drawer.
             *
             * @param {d3.Selection} Selection containing the <g> to render to.
             * @returns {Drawer} The calling Drawer.
             */
            renderArea(area: d3.Selection<void>): Drawer;
            /**
             * Removes the Drawer and its renderArea
             */
            remove(): void;
            protected _applyDefaultAttributes(selection: d3.Selection<any>): void;
            /**
             * Calculates the total time it takes to use the input drawSteps to draw the input data
             *
             * @param {any[]} data The data that would have been drawn
             * @param {Drawers.DrawStep[]} drawSteps The DrawSteps to use
             * @returns {number} The total time it takes to draw
             */
            totalDrawTime(data: any[], drawSteps: Drawers.DrawStep[]): number;
            /**
             * Draws the data into the renderArea using the spefic steps and metadata
             *
             * @param{any[]} data The data to be drawn
             * @param{DrawStep[]} drawSteps The list of steps, which needs to be drawn
             */
            draw(data: any[], drawSteps: Drawers.DrawStep[]): Drawer;
            selection(): d3.Selection<any>;
            /**
             * Returns the CSS selector for this Drawer's visual elements.
             */
            selector(): string;
            /**
             * Returns the D3 selection corresponding to the datum with the specified index.
             */
            selectionForIndex(index: number): d3.Selection<any>;
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Line extends Drawer {
                constructor(dataset: Dataset);
                protected _applyDefaultAttributes(selection: d3.Selection<any>): void;
                selectionForIndex(index: number): d3.Selection<any>;
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Area extends Drawer {
                constructor(dataset: Dataset);
                protected _applyDefaultAttributes(selection: d3.Selection<any>): void;
                selectionForIndex(index: number): d3.Selection<any>;
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Rectangle extends Drawer {
                constructor(dataset: Dataset);
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Arc extends Drawer {
                constructor(dataset: Dataset);
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Symbol extends Drawer {
                constructor(dataset: Dataset);
            }
        }
    }


    namespace Plottable {
        namespace Drawers {
            class Segment extends Drawer {
                constructor(dataset: Dataset);
            }
        }
    }


    namespace Plottable {
        type ComponentCallback = (component: Component) => void;
        namespace Components {
            class Alignment {
                static TOP: string;
                static BOTTOM: string;
                static LEFT: string;
                static RIGHT: string;
                static CENTER: string;
            }
        }
        class Component {
            protected _boundingBox: d3.Selection<void>;
            protected _clipPathEnabled: boolean;
            protected _isSetup: boolean;
            protected _isAnchored: boolean;
            constructor();
            /**
             * Attaches the Component as a child of a given d3 Selection.
             *
             * @param {d3.Selection} selection.
             * @returns {Component} The calling Component.
             */
            anchor(selection: d3.Selection<void>): Component;
            /**
             * Adds a callback to be called on anchoring the Component to the DOM.
             * If the Component is already anchored, the callback is called immediately.
             *
             * @param {ComponentCallback} callback
             * @return {Component}
             */
            onAnchor(callback: ComponentCallback): Component;
            /**
             * Removes a callback that would be called on anchoring the Component to the DOM.
             * The callback is identified by reference equality.
             *
             * @param {ComponentCallback} callback
             * @return {Component}
             */
            offAnchor(callback: ComponentCallback): Component;
            /**
             * Creates additional elements as necessary for the Component to function.
             * Called during anchor() if the Component's element has not been created yet.
             * Override in subclasses to provide additional functionality.
             */
            protected _setup(): void;
            /**
             * Given available space in pixels, returns the minimum width and height this Component will need.
             *
             * @param {number} availableWidth
             * @param {number} availableHeight
             * @returns {SpaceRequest}
             */
            requestedSpace(availableWidth: number, availableHeight: number): SpaceRequest;
            /**
             * Computes and sets the size, position, and alignment of the Component from the specified values.
             * If no parameters are supplied and the Component is a root node,
             * they are inferred from the size of the Component's element.
             *
             * @param {Point} [origin] Origin of the space offered to the Component.
             * @param {number} [availableWidth] Available width in pixels.
             * @param {number} [availableHeight] Available height in pixels.
             * @returns {Component} The calling Component.
             */
            computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Component;
            protected _sizeFromOffer(availableWidth: number, availableHeight: number): {
                width: number;
                height: number;
            };
            /**
             * Queues the Component for rendering.
             *
             * @returns {Component} The calling Component.
             */
            render(): Component;
            /**
             * Renders the Component without waiting for the next frame.
             */
            renderImmediately(): Component;
            /**
             * Causes the Component to re-layout and render.
             *
             * This function should be called when a CSS change has occured that could
             * influence the layout of the Component, such as changing the font size.
             *
             * @returns {Component} The calling Component.
             */
            redraw(): Component;
            /**
             * Renders the Component to a given <svg>.
             *
             * @param {String|d3.Selection} element A selector-string for the <svg>, or a d3 selection containing an <svg>.
             * @returns {Component} The calling Component.
             */
            renderTo(element: String | d3.Selection<void>): Component;
            /**
             * Gets the x alignment of the Component.
             */
            xAlignment(): string;
            /**
             * Sets the x alignment of the Component.
             *
             * @param {string} xAlignment The x alignment of the Component ("left"/"center"/"right").
             * @returns {Component} The calling Component.
             */
            xAlignment(xAlignment: string): Component;
            /**
             * Gets the y alignment of the Component.
             */
            yAlignment(): string;
            /**
             * Sets the y alignment of the Component.
             *
             * @param {string} yAlignment The y alignment of the Component ("top"/"center"/"bottom").
             * @returns {Component} The calling Component.
             */
            yAlignment(yAlignment: string): Component;
            /**
             * Checks if the Component has a given CSS class.
             *
             * @param {string} cssClass The CSS class to check for.
             */
            hasClass(cssClass: string): boolean;
            /**
             * Adds a given CSS class to the Component.
             *
             * @param {string} cssClass The CSS class to add.
             * @returns {Component} The calling Component.
             */
            addClass(cssClass: string): Component;
            /**
             * Removes a given CSS class from the Component.
             *
             * @param {string} cssClass The CSS class to remove.
             * @returns {Component} The calling Component.
             */
            removeClass(cssClass: string): Component;
            /**
             * Checks if the Component has a fixed width or if it grows to fill available space.
             * Returns false by default on the base Component class.
             */
            fixedWidth(): boolean;
            /**
             * Checks if the Component has a fixed height or if it grows to fill available space.
             * Returns false by default on the base Component class.
             */
            fixedHeight(): boolean;
            /**
             * Detaches a Component from the DOM. The Component can be reused.
             *
             * This should only be used if you plan on reusing the calling Component. Otherwise, use destroy().
             *
             * @returns The calling Component.
             */
            detach(): Component;
            /**
             * Adds a callback to be called when the Component is detach()-ed.
             *
             * @param {ComponentCallback} callback
             * @return {Component} The calling Component.
             */
            onDetach(callback: ComponentCallback): Component;
            /**
             * Removes a callback to be called when the Component is detach()-ed.
             * The callback is identified by reference equality.
             *
             * @param {ComponentCallback} callback
             * @return {Component} The calling Component.
             */
            offDetach(callback: ComponentCallback): Component;
            /**
             * Gets the parent ComponentContainer for this Component.
             */
            parent(): ComponentContainer;
            /**
             * Sets the parent ComponentContainer for this Component.
             * An error will be thrown if the parent does not contain this Component.
             * Adding a Component to a ComponentContainer should be done
             * using the appropriate method on the ComponentContainer.
             */
            parent(parent: ComponentContainer): Component;
            /**
             * Removes a Component from the DOM and disconnects all listeners.
             */
            destroy(): void;
            /**
             * Gets the width of the Component in pixels.
             */
            width(): number;
            /**
             * Gets the height of the Component in pixels.
             */
            height(): number;
            /**
             * Gets the origin of the Component relative to its parent.
             *
             * @return {Point}
             */
            origin(): Point;
            /**
             * Gets the origin of the Component relative to the root <svg>.
             *
             * @return {Point}
             */
            originToSVG(): Point;
            /**
             * Gets the Selection containing the <g> in front of the visual elements of the Component.
             *
             * Will return undefined if the Component has not been anchored.
             *
             * @return {d3.Selection}
             */
            foreground(): d3.Selection<void>;
            /**
             * Gets a Selection containing a <g> that holds the visual elements of the Component.
             *
             * Will return undefined if the Component has not been anchored.
             *
             * @return {d3.Selection} content selection for the Component
             */
            content(): d3.Selection<void>;
            /**
             * Gets the Selection containing the <g> behind the visual elements of the Component.
             *
             * Will return undefined if the Component has not been anchored.
             *
             * @return {d3.Selection} background selection for the Component
             */
            background(): d3.Selection<void>;
        }
    }


    namespace Plottable {
        class ComponentContainer extends Component {
            constructor();
            anchor(selection: d3.Selection<void>): ComponentContainer;
            render(): ComponentContainer;
            /**
             * Checks whether the specified Component is in the ComponentContainer.
             */
            has(component: Component): boolean;
            protected _adoptAndAnchor(component: Component): void;
            /**
             * Removes the specified Component from the ComponentContainer.
             */
            remove(component: Component): ComponentContainer;
            /**
             * Carry out the actual removal of a Component.
             * Implementation dependent on the type of container.
             *
             * @return {boolean} true if the Component was successfully removed, false otherwise.
             */
            protected _remove(component: Component): boolean;
            /**
             * Invokes a callback on each Component in the ComponentContainer.
             */
            protected _forEach(callback: (component: Component) => void): void;
            /**
             * Destroys the ComponentContainer and all Components within it.
             */
            destroy(): void;
        }
    }


    namespace Plottable {
        namespace Components {
            class Group extends ComponentContainer {
                /**
                 * Constructs a Group.
                 *
                 * A Group contains Components that will be rendered on top of each other.
                 * Components added later will be rendered above Components already in the Group.
                 *
                 * @constructor
                 * @param {Component[]} [components=[]] Components to be added to the Group.
                 */
                constructor(components?: Component[]);
                protected _forEach(callback: (component: Component) => any): void;
                /**
                 * Checks whether the specified Component is in the Group.
                 */
                has(component: Component): boolean;
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Group;
                protected _sizeFromOffer(availableWidth: number, availableHeight: number): {
                    width: number;
                    height: number;
                };
                fixedWidth(): boolean;
                fixedHeight(): boolean;
                /**
                 * @return {Component[]} The Components in this Group.
                 */
                components(): Component[];
                /**
                 * Adds a Component to this Group.
                 * The added Component will be rendered above Components already in the Group.
                 */
                append(component: Component): Group;
                protected _remove(component: Component): boolean;
            }
        }
    }


    namespace Plottable {
        class Axis<D> extends Component {
            /**
             * The css class applied to each end tick mark (the line on the end tick).
             */
            static END_TICK_MARK_CLASS: string;
            /**
             * The css class applied to each tick mark (the line on the tick).
             */
            static TICK_MARK_CLASS: string;
            /**
             * The css class applied to each tick label (the text associated with the tick).
             */
            static TICK_LABEL_CLASS: string;
            protected _tickMarkContainer: d3.Selection<void>;
            protected _tickLabelContainer: d3.Selection<void>;
            protected _baseline: d3.Selection<void>;
            protected _scale: Scale<D, number>;
            protected _computedWidth: number;
            protected _computedHeight: number;
            /**
             * Constructs an Axis.
             * An Axis is a visual representation of a Scale.
             *
             * @constructor
             * @param {Scale} scale
             * @param {string} orientation One of "top"/"bottom"/"left"/"right".
             */
            constructor(scale: Scale<D, number>, orientation: string);
            destroy(): void;
            protected _isHorizontal(): boolean;
            protected _computeWidth(): number;
            protected _computeHeight(): number;
            requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
            fixedHeight(): boolean;
            fixedWidth(): boolean;
            protected _rescale(): void;
            computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Axis<D>;
            protected _setup(): void;
            protected _getTickValues(): D[];
            renderImmediately(): Axis<D>;
            protected _generateBaselineAttrHash(): {
                [key: string]: number;
            };
            protected _generateTickMarkAttrHash(isEndTickMark?: boolean): {
                [key: string]: number | ((d: any) => number);
            };
            redraw(): Component;
            protected _setDefaultAlignment(): void;
            /**
             * Gets the Formatter on the Axis. Tick values are passed through the
             * Formatter before being displayed.
             */
            formatter(): Formatter;
            /**
             * Sets the Formatter on the Axis. Tick values are passed through the
             * Formatter before being displayed.
             *
             * @param {Formatter} formatter
             * @returns {Axis} The calling Axis.
             */
            formatter(formatter: Formatter): Axis<D>;
            /**
             * @deprecated As of release 1.3, replaced by innerTickLength()
             *
             * Gets the tick mark length in pixels.
             */
            tickLength(): number;
            /**
             * Sets the tick mark length in pixels.
             *
             * @param {number} length
             * @returns {Axis} The calling Axis.
             */
            tickLength(length: number): Axis<D>;
            /**
             * Gets the tick mark length in pixels.
             */
            innerTickLength(): number;
            /**
             * Sets the tick mark length in pixels.
             *
             * @param {number} length
             * @returns {Axis} The calling Axis.
             */
            innerTickLength(length: number): Axis<D>;
            /**
             * Gets the end tick mark length in pixels.
             */
            endTickLength(): number;
            /**
             * Sets the end tick mark length in pixels.
             *
             * @param {number} length
             * @returns {Axis} The calling Axis.
             */
            endTickLength(length: number): Axis<D>;
            protected _maxLabelTickLength(): number;
            /**
             * Gets the padding between each tick mark and its associated label in pixels.
             */
            tickLabelPadding(): number;
            /**
             * Sets the padding between each tick mark and its associated label in pixels.
             *
             * @param {number} padding
             * @returns {Axis} The calling Axis.
             */
            tickLabelPadding(padding: number): Axis<D>;
            /**
             * Gets the margin in pixels.
             * The margin is the amount of space between the tick labels and the outer edge of the Axis.
             */
            margin(): number;
            /**
             * Sets the margin in pixels.
             * The margin is the amount of space between the tick labels and the outer edge of the Axis.
             *
             * @param {number} size
             * @returns {Axis} The calling Axis.
             */
            margin(size: number): Axis<D>;
            /**
             * Gets the orientation of the Axis.
             */
            orientation(): string;
            /**
             * Sets the orientation of the Axis.
             *
             * @param {number} orientation One of "top"/"bottom"/"left"/"right".
             * @returns {Axis} The calling Axis.
             */
            orientation(orientation: string): Axis<D>;
            /**
             * Gets whether the Axis shows the end tick labels.
             */
            showEndTickLabels(): boolean;
            /**
             * Sets whether the Axis shows the end tick labels.
             *
             * @param {boolean} show
             * @returns {Axis} The calling Axis.
             */
            showEndTickLabels(show: boolean): Axis<D>;
        }
    }


    namespace Plottable {
        namespace TimeInterval {
            var second: string;
            var minute: string;
            var hour: string;
            var day: string;
            var week: string;
            var month: string;
            var year: string;
        }
        namespace Axes {
            /**
             * Defines a configuration for a Time Axis tier.
             * For details on how ticks are generated see: https://github.com/mbostock/d3/wiki/Time-Scales#ticks
             * interval - A time unit associated with this configuration (seconds, minutes, hours, etc).
             * step - number of intervals between each tick.
             * formatter - formatter used to format tick labels.
             */
            type TimeAxisTierConfiguration = {
                interval: string;
                step: number;
                formatter: Formatter;
            };
            /**
             * An array of linked TimeAxisTierConfigurations.
             * Each configuration will be shown on a different tier.
             * Currently, up to two tiers are supported.
             */
            type TimeAxisConfiguration = TimeAxisTierConfiguration[];
            class Time extends Axis<Date> {
                /**
                 * The CSS class applied to each Time Axis tier
                 */
                static TIME_AXIS_TIER_CLASS: string;
                /**
                 * Constructs a Time Axis.
                 *
                 * A Time Axis is a visual representation of a Time Scale.
                 *
                 * @constructor
                 * @param {Scales.Time} scale
                 * @param {string} orientation One of "top"/"bottom".
                 */
                constructor(scale: Scales.Time, orientation: string);
                /**
                 * Gets the label positions for each tier.
                 */
                tierLabelPositions(): string[];
                /**
                 * Sets the label positions for each tier.
                 *
                 * @param {string[]} newPositions The positions for each tier. "bottom" and "center" are the only supported values.
                 * @returns {Axes.Time} The calling Time Axis.
                 */
                tierLabelPositions(newPositions: string[]): Time;
                /**
                 * Gets the possible TimeAxisConfigurations.
                 */
                axisConfigurations(): TimeAxisConfiguration[];
                /**
                 * Sets the possible TimeAxisConfigurations.
                 * The Time Axis will choose the most precise configuration that will display in the available space.
                 *
                 * @param {TimeAxisConfiguration[]} configurations
                 * @returns {Axes.Time} The calling Time Axis.
                 */
                axisConfigurations(configurations: TimeAxisConfiguration[]): Time;
                orientation(): string;
                orientation(orientation: string): Time;
                protected _computeHeight(): number;
                protected _sizeFromOffer(availableWidth: number, availableHeight: number): {
                    width: number;
                    height: number;
                };
                protected _setup(): void;
                protected _getTickValues(): any[];
                renderImmediately(): Time;
            }
        }
    }


    namespace Plottable {
        namespace Axes {
            class Numeric extends Axis<number> {
                /**
                 * Constructs a Numeric Axis.
                 *
                 * A Numeric Axis is a visual representation of a QuantitativeScale.
                 *
                 * @constructor
                 * @param {QuantitativeScale} scale
                 * @param {string} orientation One of "top"/"bottom"/"left"/"right".
                 */
                constructor(scale: QuantitativeScale<number>, orientation: string);
                protected _setup(): void;
                protected _computeWidth(): number;
                protected _computeHeight(): number;
                protected _getTickValues(): number[];
                protected _rescale(): void;
                renderImmediately(): Numeric;
                /**
                 * Gets the tick label position relative to the tick marks.
                 *
                 * @returns {string} The current tick label position.
                 */
                tickLabelPosition(): string;
                /**
                 * Sets the tick label position relative to the tick marks.
                 *
                 * @param {string} position "top"/"center"/"bottom" for a vertical Numeric Axis,
                 *                          "left"/"center"/"right" for a horizontal Numeric Axis.
                 * @returns {Numeric} The calling Numeric Axis.
                 */
                tickLabelPosition(position: string): Numeric;
            }
        }
    }


    namespace Plottable {
        namespace Axes {
            class Category extends Axis<string> {
                /**
                 * Constructs a Category Axis.
                 *
                 * A Category Axis is a visual representation of a Category Scale.
                 *
                 * @constructor
                 * @param {Scales.Category} scale
                 * @param {string} [orientation="bottom"] One of "top"/"bottom"/"left"/"right".
                 */
                constructor(scale: Scales.Category, orientation: string);
                protected _setup(): void;
                protected _rescale(): Component;
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                protected _getTickValues(): string[];
                /**
                 * Gets the tick label angle in degrees.
                 */
                tickLabelAngle(): number;
                /**
                 * Sets the tick label angle in degrees.
                 * Right now only -90/0/90 are supported. 0 is horizontal.
                 *
                 * @param {number} angle
                 * @returns {Category} The calling Category Axis.
                 */
                tickLabelAngle(angle: number): Category;
                renderImmediately(): Category;
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Axis<string>;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class Label extends Component {
                /**
                 * A Label is a Component that displays a single line of text.
                 *
                 * @constructor
                 * @param {string} [displayText=""] The text of the Label.
                 * @param {number} [angle=0] The angle of the Label in degrees (-90/0/90). 0 is horizontal.
                 */
                constructor(displayText?: string, angle?: number);
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                protected _setup(): void;
                /**
                 * Gets the Label's text.
                 */
                text(): string;
                /**
                 * Sets the Label's text.
                 *
                 * @param {string} displayText
                 * @returns {Label} The calling Label.
                 */
                text(displayText: string): Label;
                /**
                 * Gets the angle of the Label in degrees.
                 */
                angle(): number;
                /**
                 * Sets the angle of the Label in degrees.
                 *
                 * @param {number} angle One of -90/0/90. 0 is horizontal.
                 * @returns {Label} The calling Label.
                 */
                angle(angle: number): Label;
                /**
                 * Gets the amount of padding around the Label in pixels.
                 */
                padding(): number;
                /**
                 * Sets the amount of padding around the Label in pixels.
                 *
                 * @param {number} padAmount
                 * @returns {Label} The calling Label.
                 */
                padding(padAmount: number): Label;
                fixedWidth(): boolean;
                fixedHeight(): boolean;
                renderImmediately(): Label;
            }
            class TitleLabel extends Label {
                static TITLE_LABEL_CLASS: string;
                /**
                 * @constructor
                 * @param {string} [text]
                 * @param {number} [angle] One of -90/0/90. 0 is horizontal.
                 */
                constructor(text?: string, angle?: number);
            }
            class AxisLabel extends Label {
                static AXIS_LABEL_CLASS: string;
                /**
                 * @constructor
                 * @param {string} [text]
                 * @param {number} [angle] One of -90/0/90. 0 is horizontal.
                 */
                constructor(text?: string, angle?: number);
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class Legend extends Component {
                /**
                 * The css class applied to each legend row
                 */
                static LEGEND_ROW_CLASS: string;
                /**
                 * The css class applied to each legend entry
                 */
                static LEGEND_ENTRY_CLASS: string;
                /**
                 * The css class applied to each legend symbol
                 */
                static LEGEND_SYMBOL_CLASS: string;
                /**
                 * The Legend consists of a series of entries, each with a color and label taken from the Color Scale.
                 *
                 * @constructor
                 * @param {Scale.Color} scale
                 */
                constructor(colorScale: Scales.Color);
                protected _setup(): void;
                /**
                 * Gets the maximum number of entries per row.
                 *
                 * @returns {number}
                 */
                maxEntriesPerRow(): number;
                /**
                 * Sets the maximum number of entries perrow.
                 *
                 * @param {number} maxEntriesPerRow
                 * @returns {Legend} The calling Legend.
                 */
                maxEntriesPerRow(maxEntriesPerRow: number): Legend;
                /**
                 * Gets the current comparator for the Legend's entries.
                 *
                 * @returns {(a: string, b: string) => number}
                 */
                comparator(): (a: string, b: string) => number;
                /**
                 * Sets a new comparator for the Legend's entries.
                 * The comparator is used to set the display order of the entries.
                 *
                 * @param {(a: string, b: string) => number} comparator
                 * @returns {Legend} The calling Legend.
                 */
                comparator(comparator: (a: string, b: string) => number): Legend;
                /**
                 * Gets the Color Scale.
                 *
                 * @returns {Scales.Color}
                 */
                colorScale(): Scales.Color;
                /**
                 * Sets the Color Scale.
                 *
                 * @param {Scales.Color} scale
                 * @returns {Legend} The calling Legend.
                 */
                colorScale(colorScale: Scales.Color): Legend;
                destroy(): void;
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                /**
                 * Gets the Entities (representing Legend entries) at a particular point.
                 * Returns an empty array if no Entities are present at that location.
                 *
                 * @param {Point} p
                 * @returns {Entity<Legend>[]}
                 */
                entitiesAt(p: Point): Entity<Legend>[];
                renderImmediately(): Legend;
                /**
                 * Gets the function determining the symbols of the Legend.
                 *
                 * @returns {(datum: any, index: number) => symbolFactory}
                 */
                symbol(): (datum: any, index: number) => SymbolFactory;
                /**
                 * Sets the function determining the symbols of the Legend.
                 *
                 * @param {(datum: any, index: number) => SymbolFactory} symbol
                 * @returns {Legend} The calling Legend
                 */
                symbol(symbol: (datum: any, index: number) => SymbolFactory): Legend;
                fixedWidth(): boolean;
                fixedHeight(): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class InterpolatedColorLegend extends Component {
                /**
                 * The css class applied to the legend labels.
                 */
                static LEGEND_LABEL_CLASS: string;
                /**
                 * Creates an InterpolatedColorLegend.
                 *
                 * The InterpolatedColorLegend consists of a sequence of swatches that show the
                 * associated InterpolatedColor Scale sampled at various points.
                 * Two labels show the maximum and minimum values of the InterpolatedColor Scale.
                 *
                 * @constructor
                 * @param {Scales.InterpolatedColor} interpolatedColorScale
                 */
                constructor(interpolatedColorScale: Scales.InterpolatedColor);
                destroy(): void;
                /**
                 * Gets the Formatter for the labels.
                 */
                formatter(): Formatter;
                /**
                 * Sets the Formatter for the labels.
                 *
                 * @param {Formatter} formatter
                 * @returns {InterpolatedColorLegend} The calling InterpolatedColorLegend.
                 */
                formatter(formatter: Formatter): InterpolatedColorLegend;
                /**
                 * Gets the orientation.
                 */
                orientation(): string;
                /**
                 * Sets the orientation.
                 *
                 * @param {string} orientation One of "horizontal"/"left"/"right".
                 * @returns {InterpolatedColorLegend} The calling InterpolatedColorLegend.
                 */
                orientation(orientation: string): InterpolatedColorLegend;
                fixedWidth(): boolean;
                fixedHeight(): boolean;
                protected _setup(): void;
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                renderImmediately(): InterpolatedColorLegend;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class Gridlines extends Component {
                /**
                 * @constructor
                 * @param {QuantitativeScale} xScale The scale to base the x gridlines on. Pass null if no gridlines are desired.
                 * @param {QuantitativeScale} yScale The scale to base the y gridlines on. Pass null if no gridlines are desired.
                 */
                constructor(xScale: QuantitativeScale<any>, yScale: QuantitativeScale<any>);
                destroy(): Gridlines;
                protected _setup(): void;
                renderImmediately(): Gridlines;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class Table extends ComponentContainer {
                /**
                 * A Table combines Components in the form of a grid. A
                 * common case is combining a y-axis, x-axis, and the plotted data via
                 * ```typescript
                 * new Table([[yAxis, plot],
                 *            [null,  xAxis]]);
                 * ```
                 *
                 * @constructor
                 * @param {Component[][]} [rows=[]] A 2-D array of Components to be added to the Table.
                 *   null can be used if a cell is empty.
                 */
                constructor(rows?: Component[][]);
                protected _forEach(callback: (component: Component) => any): void;
                /**
                 * Checks whether the specified Component is in the Table.
                 */
                has(component: Component): boolean;
                /**
                 * Adds a Component in the specified row and column position.
                 *
                 * For example, instead of calling `new Table([[a, b], [null, c]])`, you
                 * could call
                 * ```typescript
                 * var table = new Table();
                 * table.add(a, 0, 0);
                 * table.add(b, 0, 1);
                 * table.add(c, 1, 1);
                 * ```
                 *
                 * @param {Component} component The Component to be added.
                 * @param {number} row
                 * @param {number} col
                 * @returns {Table} The calling Table.
                 */
                add(component: Component, row: number, col: number): Table;
                protected _remove(component: Component): boolean;
                requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Table;
                /**
                 * Gets the padding above and below each row in pixels.
                 */
                rowPadding(): number;
                /**
                 * Sets the padding above and below each row in pixels.
                 *
                 * @param {number} rowPadding
                 * @returns {Table} The calling Table.
                 */
                rowPadding(rowPadding: number): Table;
                /**
                 * Gets the padding to the left and right of each column in pixels.
                 */
                columnPadding(): number;
                /**
                 * Sets the padding to the left and right of each column in pixels.
                 *
                 * @param {number} columnPadding
                 * @returns {Table} The calling Table.
                 */
                columnPadding(columnPadding: number): Table;
                /**
                 * Gets the weight of the specified row.
                 *
                 * @param {number} index
                 */
                rowWeight(index: number): number;
                /**
                 * Sets the weight of the specified row.
                 * Space is allocated to rows based on their weight. Rows with higher weights receive proportionally more space.
                 *
                 * A common case would be to have one row take up 2/3rds of the space,
                 * and the other row take up 1/3rd.
                 *
                 * Example:
                 *
                 * ```JavaScript
                 * plot = new Plottable.Component.Table([
                 *  [row1],
                 *  [row2]
                 * ]);
                 *
                 * // assign twice as much space to the first row
                 * plot
                 *  .rowWeight(0, 2)
                 *  .rowWeight(1, 1)
                 * ```
                 *
                 * @param {number} index
                 * @param {number} weight
                 * @returns {Table} The calling Table.
                 */
                rowWeight(index: number, weight: number): Table;
                /**
                 * Gets the weight of the specified column.
                 *
                 * @param {number} index
                 */
                columnWeight(index: number): number;
                /**
                 * Sets the weight of the specified column.
                 * Space is allocated to columns based on their weight. Columns with higher weights receive proportionally more space.
                 *
                 * Please see `rowWeight` docs for an example.
                 *
                 * @param {number} index
                 * @param {number} weight
                 * @returns {Table} The calling Table.
                 */
                columnWeight(index: number, weight: number): Table;
                fixedWidth(): boolean;
                fixedHeight(): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class SelectionBoxLayer extends Component {
                protected _box: d3.Selection<void>;
                constructor();
                protected _setup(): void;
                protected _sizeFromOffer(availableWidth: number, availableHeight: number): {
                    width: number;
                    height: number;
                };
                /**
                 * Gets the Bounds of the box.
                 */
                bounds(): Bounds;
                /**
                 * Sets the Bounds of the box.
                 *
                 * @param {Bounds} newBounds
                 * @return {SelectionBoxLayer} The calling SelectionBoxLayer.
                 */
                bounds(newBounds: Bounds): SelectionBoxLayer;
                protected _setBounds(newBounds: Bounds): void;
                renderImmediately(): SelectionBoxLayer;
                /**
                 * Gets whether the box is being shown.
                 */
                boxVisible(): boolean;
                /**
                 * Shows or hides the selection box.
                 *
                 * @param {boolean} show Whether or not to show the box.
                 * @return {SelectionBoxLayer} The calling SelectionBoxLayer.
                 */
                boxVisible(show: boolean): SelectionBoxLayer;
                fixedWidth(): boolean;
                fixedHeight(): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            interface PlotEntity extends Entity<Plot> {
                dataset: Dataset;
                index: number;
                component: Plot;
            }
            interface AccessorScaleBinding<D, R> {
                accessor: Accessor<any>;
                scale?: Scale<D, R>;
            }
            namespace Animator {
                var MAIN: string;
                var RESET: string;
            }
        }
        class Plot extends Component {
            protected static _ANIMATION_MAX_DURATION: number;
            protected _renderArea: d3.Selection<void>;
            protected _renderCallback: ScaleCallback<Scale<any, any>>;
            protected _propertyExtents: d3.Map<any[]>;
            protected _propertyBindings: d3.Map<Plots.AccessorScaleBinding<any, any>>;
            /**
             * A Plot draws some visualization of the inputted Datasets.
             *
             * @constructor
             */
            constructor();
            anchor(selection: d3.Selection<void>): Plot;
            protected _setup(): void;
            destroy(): void;
            /**
             * Adds a Dataset to the Plot.
             *
             * @param {Dataset} dataset
             * @returns {Plot} The calling Plot.
             */
            addDataset(dataset: Dataset): Plot;
            protected _createNodesForDataset(dataset: Dataset): Drawer;
            protected _createDrawer(dataset: Dataset): Drawer;
            protected _getAnimator(key: string): Animator;
            protected _onDatasetUpdate(): void;
            /**
             * Gets the AccessorScaleBinding for a particular attribute.
             *
             * @param {string} attr
             */
            attr<A>(attr: string): Plots.AccessorScaleBinding<A, number | string>;
            /**
             * Sets a particular attribute to a constant value or the result of an Accessor.
             *
             * @param {string} attr
             * @param {number|string|Accessor<number>|Accessor<string>} attrValue
             * @returns {Plot} The calling Plot.
             */
            attr(attr: string, attrValue: number | string | Accessor<number> | Accessor<string>): Plot;
            /**
             * Sets a particular attribute to a scaled constant value or scaled result of an Accessor.
             * The provided Scale will account for the attribute values when autoDomain()-ing.
             *
             * @param {string} attr
             * @param {A|Accessor<A>} attrValue
             * @param {Scale<A, number | string>} scale The Scale used to scale the attrValue.
             * @returns {Plot} The calling Plot.
             */
            attr<A>(attr: string, attrValue: A | Accessor<A>, scale: Scale<A, number | string>): Plot;
            protected _bindProperty(property: string, value: any, scale: Scale<any, any>): void;
            protected _generateAttrToProjector(): AttributeToProjector;
            renderImmediately(): Plot;
            /**
             * Returns whether the plot will be animated.
             */
            animated(): boolean;
            /**
             * Enables or disables animation.
             */
            animated(willAnimate: boolean): Plot;
            detach(): Plot;
            /**
             * Updates the extents associated with each attribute, then autodomains all scales the Plot uses.
             */
            protected _updateExtents(): void;
            protected _updateExtentsForProperty(property: string): void;
            protected _filterForProperty(property: string): Accessor<boolean>;
            /**
             * Override in subclass to add special extents, such as included values
             */
            protected _extentsForProperty(property: string): any[];
            /**
             * Get the Animator associated with the specified Animator key.
             *
             * @return {Animator}
             */
            animator(animatorKey: string): Animator;
            /**
             * Set the Animator associated with the specified Animator key.
             *
             * @param {string} animatorKey
             * @param {Animator} animator
             * @returns {Plot} The calling Plot.
             */
            animator(animatorKey: string, animator: Animator): Plot;
            /**
             * Removes a Dataset from the Plot.
             *
             * @param {Dataset} dataset
             * @returns {Plot} The calling Plot.
             */
            removeDataset(dataset: Dataset): Plot;
            protected _removeDatasetNodes(dataset: Dataset): void;
            datasets(): Dataset[];
            datasets(datasets: Dataset[]): Plot;
            protected _getDrawersInOrder(): Drawer[];
            protected _generateDrawSteps(): Drawers.DrawStep[];
            protected _additionalPaint(time: number): void;
            protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
            /**
             * Retrieves Selections of this Plot for the specified Datasets.
             *
             * @param {Dataset[]} [datasets] The Datasets to retrieve the Selections for.
             *   If not provided, Selections will be retrieved for all Datasets on the Plot.
             * @returns {d3.Selection}
             */
            selections(datasets?: Dataset[]): d3.Selection<any>;
            /**
             * Gets the Entities associated with the specified Datasets.
             *
             * @param {dataset[]} datasets The Datasets to retrieve the Entities for.
             *   If not provided, returns defaults to all Datasets on the Plot.
             * @return {Plots.PlotEntity[]}
             */
            entities(datasets?: Dataset[]): Plots.PlotEntity[];
            /**
             * Returns the PlotEntity nearest to the query point by the Euclidian norm, or undefined if no PlotEntity can be found.
             *
             * @param {Point} queryPoint
             * @returns {Plots.PlotEntity} The nearest PlotEntity, or undefined if no PlotEntity can be found.
             */
            entityNearest(queryPoint: Point): Plots.PlotEntity;
            protected _visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
            protected _entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
            protected _uninstallScaleForKey(scale: Scale<any, any>, key: string): void;
            protected _installScaleForKey(scale: Scale<any, any>, key: string): void;
            protected _propertyProjectors(): AttributeToProjector;
            protected static _scaledAccessor<D, R>(binding: Plots.AccessorScaleBinding<D, R>): Accessor<any>;
            protected _pixelPoint(datum: any, index: number, dataset: Dataset): Point;
            protected _animateOnNextRender(): boolean;
        }
    }


    namespace Plottable {
        namespace Plots {
            class Pie extends Plot {
                /**
                 * @constructor
                 */
                constructor();
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Pie;
                addDataset(dataset: Dataset): Pie;
                removeDataset(dataset: Dataset): Pie;
                protected _onDatasetUpdate(): void;
                protected _createDrawer(dataset: Dataset): Drawers.Arc;
                entities(datasets?: Dataset[]): PlotEntity[];
                /**
                 * Gets the AccessorScaleBinding for the sector value.
                 */
                sectorValue<S>(): AccessorScaleBinding<S, number>;
                /**
                 * Sets the sector value to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} sectorValue
                 * @returns {Pie} The calling Pie Plot.
                 */
                sectorValue(sectorValue: number | Accessor<number>): Plots.Pie;
                /**
                 * Sets the sector value to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {S|Accessor<S>} sectorValue
                 * @param {Scale<S, number>} scale
                 * @returns {Pie} The calling Pie Plot.
                 */
                sectorValue<S>(sectorValue: S | Accessor<S>, scale: Scale<S, number>): Plots.Pie;
                /**
                 * Gets the AccessorScaleBinding for the inner radius.
                 */
                innerRadius<R>(): AccessorScaleBinding<R, number>;
                /**
                 * Sets the inner radius to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} innerRadius
                 * @returns {Pie} The calling Pie Plot.
                 */
                innerRadius(innerRadius: number | Accessor<number>): Plots.Pie;
                /**
                 * Sets the inner radius to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {R|Accessor<R>} innerRadius
                 * @param {Scale<R, number>} scale
                 * @returns {Pie} The calling Pie Plot.
                 */
                innerRadius<R>(innerRadius: R | Accessor<R>, scale: Scale<R, number>): Plots.Pie;
                /**
                 * Gets the AccessorScaleBinding for the outer radius.
                 */
                outerRadius<R>(): AccessorScaleBinding<R, number>;
                /**
                 * Sets the outer radius to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} outerRadius
                 * @returns {Pie} The calling Pie Plot.
                 */
                outerRadius(outerRadius: number | Accessor<number>): Plots.Pie;
                /**
                 * Sets the outer radius to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {R|Accessor<R>} outerRadius
                 * @param {Scale<R, number>} scale
                 * @returns {Pie} The calling Pie Plot.
                 */
                outerRadius<R>(outerRadius: R | Accessor<R>, scale: Scale<R, number>): Plots.Pie;
                /**
                 * Get whether slice labels are enabled.
                 *
                 * @returns {boolean} Whether slices should display labels or not.
                 */
                labelsEnabled(): boolean;
                /**
                 * Sets whether labels are enabled.
                 *
                 * @param {boolean} labelsEnabled
                 * @returns {Pie} The calling Pie Plot.
                 */
                labelsEnabled(enabled: boolean): Pie;
                /**
                 * Gets the Formatter for the labels.
                 */
                labelFormatter(): Formatter;
                /**
                 * Sets the Formatter for the labels.
                 *
                 * @param {Formatter} formatter
                 * @returns {Pie} The calling Pie Plot.
                 */
                labelFormatter(formatter: Formatter): Pie;
                entitiesAt(queryPoint: Point): PlotEntity[];
                protected _propertyProjectors(): AttributeToProjector;
                protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
                protected _pixelPoint(datum: any, index: number, dataset: Dataset): {
                    x: number;
                    y: number;
                };
                protected _additionalPaint(time: number): void;
            }
        }
    }


    namespace Plottable {
        class XYPlot<X, Y> extends Plot {
            protected static _X_KEY: string;
            protected static _Y_KEY: string;
            /**
             * An XYPlot is a Plot that displays data along two primary directions, X and Y.
             *
             * @constructor
             * @param {Scale} xScale The x scale to use.
             * @param {Scale} yScale The y scale to use.
             */
            constructor();
            /**
             * Returns the whether or not the rendering is deferred for performance boost.
             * @return {boolean} The deferred rendering option
             */
            deferredRendering(): boolean;
            /**
             * Sets / unsets the deferred rendering option
             * Activating this option improves the performance of plot interaction (pan / zoom) by
             * performing lazy renders, only after the interaction has stopped. Because re-rendering
             * is no longer performed during the interaction, the zooming might experience a small
             * resolution degradation, before the lazy re-render is performed.
             *
             * This option is intended for cases where performance is an issue.
             */
            deferredRendering(deferredRendering: boolean): XYPlot<X, Y>;
            /**
             * Gets the AccessorScaleBinding for X.
             */
            x(): Plots.AccessorScaleBinding<X, number>;
            /**
             * Sets X to a constant number or the result of an Accessor<number>.
             *
             * @param {number|Accessor<number>} x
             * @returns {XYPlot} The calling XYPlot.
             */
            x(x: number | Accessor<number>): XYPlot<X, Y>;
            /**
             * Sets X to a scaled constant value or scaled result of an Accessor.
             * The provided Scale will account for the values when autoDomain()-ing.
             *
             * @param {X|Accessor<X>} x
             * @param {Scale<X, number>} xScale
             * @returns {XYPlot} The calling XYPlot.
             */
            x(x: X | Accessor<X>, xScale: Scale<X, number>): XYPlot<X, Y>;
            /**
             * Gets the AccessorScaleBinding for Y.
             */
            y(): Plots.AccessorScaleBinding<Y, number>;
            /**
             * Sets Y to a constant number or the result of an Accessor<number>.
             *
             * @param {number|Accessor<number>} y
             * @returns {XYPlot} The calling XYPlot.
             */
            y(y: number | Accessor<number>): XYPlot<X, Y>;
            /**
             * Sets Y to a scaled constant value or scaled result of an Accessor.
             * The provided Scale will account for the values when autoDomain()-ing.
             *
             * @param {Y|Accessor<Y>} y
             * @param {Scale<Y, number>} yScale
             * @returns {XYPlot} The calling XYPlot.
             */
            y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): XYPlot<X, Y>;
            protected _filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
            protected _uninstallScaleForKey(scale: Scale<any, any>, key: string): void;
            protected _installScaleForKey(scale: Scale<any, any>, key: string): void;
            destroy(): XYPlot<X, Y>;
            /**
             * Gets the automatic domain adjustment mode for visible points.
             */
            autorangeMode(): string;
            /**
             * Sets the automatic domain adjustment mode for visible points to operate against the X Scale, Y Scale, or neither.
             * If "x" or "y" is specified the adjustment is immediately performed.
             *
             * @param {string} autorangeMode One of "x"/"y"/"none".
             *   "x" will adjust the x Scale in relation to changes in the y domain.
             *   "y" will adjust the y Scale in relation to changes in the x domain.
             *   "none" means neither Scale will change automatically.
             * @returns {XYPlot} The calling XYPlot.
             */
            autorangeMode(autorangeMode: string): XYPlot<X, Y>;
            computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): XYPlot<X, Y>;
            /**
             * Adjusts the domains of both X and Y scales to show all data.
             * This call does not override the autorange() behavior.
             *
             * @returns {XYPlot} The calling XYPlot.
             */
            showAllData(): XYPlot<X, Y>;
            protected _projectorsReady(): boolean;
            protected _pixelPoint(datum: any, index: number, dataset: Dataset): Point;
            protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
        }
    }


    namespace Plottable {
        namespace Plots {
            class Rectangle<X, Y> extends XYPlot<X, Y> {
                /**
                 * A Rectangle Plot displays rectangles based on the data.
                 * The left and right edges of each rectangle can be set with x() and x2().
                 *   If only x() is set the Rectangle Plot will attempt to compute the correct left and right edge positions.
                 * The top and bottom edges of each rectangle can be set with y() and y2().
                 *   If only y() is set the Rectangle Plot will attempt to compute the correct top and bottom edge positions.
                 *
                 * @constructor
                 * @param {Scale.Scale} xScale
                 * @param {Scale.Scale} yScale
                 */
                constructor();
                protected _createDrawer(dataset: Dataset): Drawers.Rectangle;
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _updateExtentsForProperty(property: string): void;
                protected _filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
                /**
                 * Gets the AccessorScaleBinding for X.
                 */
                x(): AccessorScaleBinding<X, number>;
                /**
                 * Sets X to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} x
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                x(x: number | Accessor<number>): Plots.Rectangle<X, Y>;
                /**
                 * Sets X to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {X|Accessor<X>} x
                 * @param {Scale<X, number>} xScale
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                x(x: X | Accessor<X>, xScale: Scale<X, number>): Plots.Rectangle<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for X2.
                 */
                x2(): AccessorScaleBinding<X, number>;
                /**
                 * Sets X2 to a constant number or the result of an Accessor.
                 * If a Scale has been set for X, it will also be used to scale X2.
                 *
                 * @param {number|Accessor<number>|X|Accessor<X>} x2
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                x2(x2: number | Accessor<number> | X | Accessor<X>): Plots.Rectangle<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for Y.
                 */
                y(): AccessorScaleBinding<Y, number>;
                /**
                 * Sets Y to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} y
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                y(y: number | Accessor<number>): Plots.Rectangle<X, Y>;
                /**
                 * Sets Y to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {Y|Accessor<Y>} y
                 * @param {Scale<Y, number>} yScale
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Plots.Rectangle<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for Y2.
                 */
                y2(): AccessorScaleBinding<Y, number>;
                /**
                 * Sets Y2 to a constant number or the result of an Accessor.
                 * If a Scale has been set for Y, it will also be used to scale Y2.
                 *
                 * @param {number|Accessor<number>|Y|Accessor<Y>} y2
                 * @returns {Plots.Rectangle} The calling Rectangle Plot.
                 */
                y2(y2: number | Accessor<number> | Y | Accessor<Y>): Plots.Rectangle<X, Y>;
                protected _propertyProjectors(): AttributeToProjector;
                protected _pixelPoint(datum: any, index: number, dataset: Dataset): {
                    x: any;
                    y: any;
                };
                protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Scatter<X, Y> extends XYPlot<X, Y> {
                /**
                 * A Scatter Plot draws a symbol at each data point.
                 *
                 * @constructor
                 */
                constructor();
                protected _createDrawer(dataset: Dataset): Drawers.Symbol;
                /**
                 * Gets the AccessorScaleBinding for the size property of the plot.
                 * The size property corresponds to the area of the symbol.
                 */
                size<S>(): AccessorScaleBinding<S, number>;
                /**
                 * Sets the size property to a constant number or the result of an Accessor<number>.
                 *
                 * @param {number|Accessor<number>} size
                 * @returns {Plots.Scatter} The calling Scatter Plot.
                 */
                size(size: number | Accessor<number>): Plots.Scatter<X, Y>;
                /**
                 * Sets the size property to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {S|Accessor<S>} sectorValue
                 * @param {Scale<S, number>} scale
                 * @returns {Plots.Scatter} The calling Scatter Plot.
                 */
                size<S>(size: S | Accessor<S>, scale: Scale<S, number>): Plots.Scatter<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for the symbol property of the plot.
                 * The symbol property corresponds to how the symbol will be drawn.
                 */
                symbol(): AccessorScaleBinding<any, any>;
                /**
                 * Sets the symbol property to an Accessor<SymbolFactory>.
                 *
                 * @param {Accessor<SymbolFactory>} symbol
                 * @returns {Plots.Scatter} The calling Scatter Plot.
                 */
                symbol(symbol: Accessor<SymbolFactory>): Plots.Scatter<X, Y>;
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
                protected _entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
                protected _propertyProjectors(): AttributeToProjector;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Bar<X, Y> extends XYPlot<X, Y> {
                static ORIENTATION_VERTICAL: string;
                static ORIENTATION_HORIZONTAL: string;
                protected _isVertical: boolean;
                /**
                 * A Bar Plot draws bars growing out from a baseline to some value
                 *
                 * @constructor
                 * @param {string} [orientation="vertical"] One of "vertical"/"horizontal".
                 */
                constructor(orientation?: string);
                x(): Plots.AccessorScaleBinding<X, number>;
                x(x: number | Accessor<number>): Bar<X, Y>;
                x(x: X | Accessor<X>, xScale: Scale<X, number>): Bar<X, Y>;
                y(): Plots.AccessorScaleBinding<Y, number>;
                y(y: number | Accessor<number>): Bar<X, Y>;
                y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Bar<X, Y>;
                /**
                 * Gets the orientation of the plot
                 *
                 * @return "vertical" | "horizontal"
                 */
                orientation(): string;
                render(): Bar<X, Y>;
                protected _createDrawer(dataset: Dataset): Drawers.Rectangle;
                protected _setup(): void;
                /**
                 * Gets the baseline value.
                 * The baseline is the line that the bars are drawn from.
                 *
                 * @returns {X|Y}
                 */
                baselineValue(): X | Y;
                /**
                 * Sets the baseline value.
                 * The baseline is the line that the bars are drawn from.
                 *
                 * @param {X|Y} value
                 * @returns {Bar} The calling Bar Plot.
                 */
                baselineValue(value: X | Y): Bar<X, Y>;
                addDataset(dataset: Dataset): Bar<X, Y>;
                removeDataset(dataset: Dataset): Bar<X, Y>;
                /**
                 * Get whether bar labels are enabled.
                 *
                 * @returns {boolean} Whether bars should display labels or not.
                 */
                labelsEnabled(): boolean;
                /**
                 * Sets whether labels are enabled.
                 *
                 * @param {boolean} labelsEnabled
                 * @returns {Bar} The calling Bar Plot.
                 */
                labelsEnabled(enabled: boolean): Bar<X, Y>;
                /**
                 * Gets the Formatter for the labels.
                 */
                labelFormatter(): Formatter;
                /**
                 * Sets the Formatter for the labels.
                 *
                 * @param {Formatter} formatter
                 * @returns {Bar} The calling Bar Plot.
                 */
                labelFormatter(formatter: Formatter): Bar<X, Y>;
                protected _createNodesForDataset(dataset: Dataset): Drawer;
                protected _removeDatasetNodes(dataset: Dataset): void;
                /**
                 * Returns the PlotEntity nearest to the query point according to the following algorithm:
                 *   - If the query point is inside a bar, returns the PlotEntity for that bar.
                 *   - Otherwise, gets the nearest PlotEntity by the primary direction (X for vertical, Y for horizontal),
                 *     breaking ties with the secondary direction.
                 * Returns undefined if no PlotEntity can be found.
                 *
                 * @param {Point} queryPoint
                 * @returns {PlotEntity} The nearest PlotEntity, or undefined if no PlotEntity can be found.
                 */
                entityNearest(queryPoint: Point): PlotEntity;
                protected _visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
                protected _entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
                /**
                 * Gets the Entities at a particular Point.
                 *
                 * @param {Point} p
                 * @returns {PlotEntity[]}
                 */
                entitiesAt(p: Point): PlotEntity[];
                /**
                 * Gets the Entities that intersect the Bounds.
                 *
                 * @param {Bounds} bounds
                 * @returns {PlotEntity[]}
                 */
                entitiesIn(bounds: Bounds): PlotEntity[];
                /**
                 * Gets the Entities that intersect the area defined by the ranges.
                 *
                 * @param {Range} xRange
                 * @param {Range} yRange
                 * @returns {PlotEntity[]}
                 */
                entitiesIn(xRange: Range, yRange: Range): PlotEntity[];
                protected _additionalPaint(time: number): void;
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                /**
                 * Computes the barPixelWidth of all the bars in the plot.
                 *
                 * If the position scale of the plot is a CategoryScale and in bands mode, then the rangeBands function will be used.
                 * If the position scale of the plot is a CategoryScale and in points mode, then
                 *   from https://github.com/mbostock/d3/wiki/Ordinal-Scales#ordinal_rangePoints, the max barPixelWidth is step * padding
                 * If the position scale of the plot is a QuantitativeScale, then _getMinimumDataWidth is scaled to compute the barPixelWidth
                 */
                protected _getBarPixelWidth(): number;
                entities(datasets?: Dataset[]): PlotEntity[];
                protected _pixelPoint(datum: any, index: number, dataset: Dataset): {
                    x: any;
                    y: any;
                };
                protected _uninstallScaleForKey(scale: Scale<any, number>, key: string): void;
                protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Line<X> extends XYPlot<X, number> {
                /**
                 * A Line Plot draws line segments starting from the first data point to the next.
                 *
                 * @constructor
                 */
                constructor();
                protected _createDrawer(dataset: Dataset): Drawer;
                protected _getResetYFunction(): (d: any, i: number, dataset: Dataset) => number;
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                /**
                 * Returns the PlotEntity nearest to the query point by X then by Y, or undefined if no PlotEntity can be found.
                 *
                 * @param {Point} queryPoint
                 * @returns {PlotEntity} The nearest PlotEntity, or undefined if no PlotEntity can be found.
                 */
                entityNearest(queryPoint: Point): PlotEntity;
                protected _propertyProjectors(): AttributeToProjector;
                protected _constructLineProjector(xProjector: Projector, yProjector: Projector): (datum: any, index: number, dataset: Dataset) => string;
                protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Area<X> extends Line<X> {
                /**
                 * An Area Plot draws a filled region (area) between Y and Y0.
                 *
                 * @constructor
                 */
                constructor();
                protected _setup(): void;
                y(): Plots.AccessorScaleBinding<number, number>;
                y(y: number | Accessor<number>): Area<X>;
                y(y: number | Accessor<number>, yScale: QuantitativeScale<number>): Area<X>;
                /**
                 * Gets the AccessorScaleBinding for Y0.
                 */
                y0(): Plots.AccessorScaleBinding<number, number>;
                /**
                 * Sets Y0 to a constant number or the result of an Accessor<number>.
                 * If a Scale has been set for Y, it will also be used to scale Y0.
                 *
                 * @param {number|Accessor<number>} y0
                 * @returns {Area} The calling Area Plot.
                 */
                y0(y0: number | Accessor<number>): Area<X>;
                protected _onDatasetUpdate(): void;
                addDataset(dataset: Dataset): Area<X>;
                protected _removeDatasetNodes(dataset: Dataset): void;
                protected _additionalPaint(): void;
                protected _createDrawer(dataset: Dataset): Drawers.Area;
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _updateYScale(): void;
                protected _getResetYFunction(): Accessor<any>;
                protected _propertyProjectors(): AttributeToProjector;
                selections(datasets?: Dataset[]): d3.Selection<any>;
                protected _constructAreaProjector(xProjector: Projector, yProjector: Projector, y0Projector: Projector): (datum: any[], index: number, dataset: Dataset) => string;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class ClusteredBar<X, Y> extends Bar<X, Y> {
                /**
                 * A ClusteredBar Plot groups bars across Datasets based on the primary value of the bars.
                 *   On a vertical ClusteredBar Plot, the bars with the same X value are grouped.
                 *   On a horizontal ClusteredBar Plot, the bars with the same Y value are grouped.
                 *
                 * @constructor
                 * @param {string} [orientation="vertical"] One of "vertical"/"horizontal".
                 */
                constructor(orientation?: string);
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                protected _getDataToDraw(): Utils.Map<Dataset, any[]>;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class StackedArea<X> extends Area<X> {
                /**
                 * @constructor
                 */
                constructor();
                protected _getAnimator(key: string): Animator;
                protected _setup(): void;
                x(): Plots.AccessorScaleBinding<X, number>;
                x(x: number | Accessor<number>): StackedArea<X>;
                x(x: X | Accessor<X>, xScale: Scale<X, number>): StackedArea<X>;
                y(): Plots.AccessorScaleBinding<number, number>;
                y(y: number | Accessor<number>): StackedArea<X>;
                y(y: number | Accessor<number>, yScale: QuantitativeScale<number>): StackedArea<X>;
                protected _additionalPaint(): void;
                protected _updateYScale(): void;
                protected _onDatasetUpdate(): StackedArea<X>;
                protected _updateExtentsForProperty(property: string): void;
                protected _extentsForProperty(attr: string): any[];
                protected _propertyProjectors(): AttributeToProjector;
                protected _pixelPoint(datum: any, index: number, dataset: Dataset): Point;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class StackedBar<X, Y> extends Bar<X, Y> {
                /**
                 * A StackedBar Plot stacks bars across Datasets based on the primary value of the bars.
                 *   On a vertical StackedBar Plot, the bars with the same X value are stacked.
                 *   On a horizontal StackedBar Plot, the bars with the same Y value are stacked.
                 *
                 * @constructor
                 * @param {Scale} xScale
                 * @param {Scale} yScale
                 * @param {string} [orientation="vertical"] One of "vertical"/"horizontal".
                 */
                constructor(orientation?: string);
                x(): Plots.AccessorScaleBinding<X, number>;
                x(x: number | Accessor<number>): StackedBar<X, Y>;
                x(x: X | Accessor<X>, xScale: Scale<X, number>): StackedBar<X, Y>;
                y(): Plots.AccessorScaleBinding<Y, number>;
                y(y: number | Accessor<number>): StackedBar<X, Y>;
                y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): StackedBar<X, Y>;
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                protected _onDatasetUpdate(): StackedBar<X, Y>;
                protected _updateExtentsForProperty(property: string): void;
                protected _extentsForProperty(attr: string): any[];
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Segment<X, Y> extends XYPlot<X, Y> {
                /**
                 * A Segment Plot displays line segments based on the data.
                 *
                 * @constructor
                 */
                constructor();
                protected _createDrawer(dataset: Dataset): Drawers.Segment;
                protected _generateDrawSteps(): Drawers.DrawStep[];
                protected _updateExtentsForProperty(property: string): void;
                protected _filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
                /**
                 * Gets the AccessorScaleBinding for X
                 */
                x(): AccessorScaleBinding<X, number>;
                /**
                 * Sets X to a constant value or the result of an Accessor.
                 *
                 * @param {X|Accessor<X>} x
                 * @returns {Plots.Segment} The calling Segment Plot.
                 */
                x(x: number | Accessor<number>): Plots.Segment<X, Y>;
                /**
                 * Sets X to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {X|Accessor<X>} x
                 * @param {Scale<X, number>} xScale
                 * @returns {Plots.Segment} The calling Segment Plot.
                 */
                x(x: X | Accessor<X>, xScale: Scale<X, number>): Plots.Segment<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for X2
                 */
                x2(): AccessorScaleBinding<X, number>;
                /**
                 * Sets X2 to a constant number or the result of an Accessor.
                 * If a Scale has been set for X, it will also be used to scale X2.
                 *
                 * @param {number|Accessor<number>|Y|Accessor<Y>} y2
                 * @returns {Plots.Segment} The calling Segment Plot
                 */
                x2(x2: number | Accessor<number> | X | Accessor<X>): Plots.Segment<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for Y
                 */
                y(): AccessorScaleBinding<Y, number>;
                /**
                 * Sets Y to a constant value or the result of an Accessor.
                 *
                 * @param {Y|Accessor<Y>} y
                 * @returns {Plots.Segment} The calling Segment Plot.
                 */
                y(y: number | Accessor<number>): Plots.Segment<X, Y>;
                /**
                 * Sets Y to a scaled constant value or scaled result of an Accessor.
                 * The provided Scale will account for the values when autoDomain()-ing.
                 *
                 * @param {Y|Accessor<Y>} y
                 * @param {Scale<Y, number>} yScale
                 * @returns {Plots.Segment} The calling Segment Plot.
                 */
                y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Plots.Segment<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for Y2.
                 */
                y2(): AccessorScaleBinding<Y, number>;
                /**
                 * Sets Y2 to a constant number or the result of an Accessor.
                 * If a Scale has been set for Y, it will also be used to scale Y2.
                 *
                 * @param {number|Accessor<number>|Y|Accessor<Y>} y2
                 * @returns {Plots.Segment} The calling Segment Plot.
                 */
                y2(y2: number | Accessor<number> | Y | Accessor<Y>): Plots.Segment<X, Y>;
                protected _propertyProjectors(): AttributeToProjector;
            }
        }
    }


    namespace Plottable {
        namespace Plots {
            class Waterfall<X, Y> extends Bar<X, number> {
                constructor();
                /**
                 * Gets whether connectors are enabled.
                 *
                 * @returns {boolean} Whether connectors should be shown or not.
                 */
                connectorsEnabled(): boolean;
                /**
                 * Sets whether connectors are enabled.
                 *
                 * @param {boolean} enabled
                 * @returns {Plots.Waterfall} The calling Waterfall Plot.
                 */
                connectorsEnabled(enabled: boolean): Waterfall<X, Y>;
                /**
                 * Gets the AccessorScaleBinding for whether a bar represents a total or a delta.
                 */
                total<T>(): Plots.AccessorScaleBinding<T, boolean>;
                /**
                 * Sets total to a constant number or the result of an Accessor
                 *
                 * @param {Accessor<boolean>}
                 * @returns {Plots.Waterfall} The calling Waterfall Plot.
                 */
                total(total: Accessor<boolean>): Waterfall<X, Y>;
                protected _additionalPaint(time: number): void;
                protected _createNodesForDataset(dataset: Dataset): Drawer;
                protected _extentsForProperty(attr: string): any[];
                protected _generateAttrToProjector(): {
                    [attr: string]: (datum: any, index: number, dataset: Dataset) => any;
                };
                protected _onDatasetUpdate(): Waterfall<X, Y>;
            }
        }
    }


    namespace Plottable {
        interface Animator {
            /**
             * Applies the supplied attributes to a d3.Selection with some animation.
             *
             * @param {d3.Selection} selection The update selection or transition selection that we wish to animate.
             * @param {AttributeToAppliedProjector} attrToAppliedProjector The set of
             *     AppliedProjectors that we will use to set attributes on the selection.
             * @return {any} Animators should return the selection or
             *     transition object so that plots may chain the transitions between
             *     animators.
             */
            animate(selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector): d3.Selection<any> | d3.Transition<any>;
            /**
             * Given the number of elements, return the total time the animation requires
             *
             * @param {number} numberofIterations The number of elements that will be drawn
             * @returns {number}
             */
            totalTime(numberOfIterations: number): number;
        }
    }


    namespace Plottable {
        namespace Animators {
            /**
             * An animator implementation with no animation. The attributes are
             * immediately set on the selection.
             */
            class Null implements Animator {
                totalTime(selection: any): number;
                animate(selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector): d3.Selection<any>;
            }
        }
    }


    namespace Plottable {
        namespace Animators {
            /**
             * An Animator with easing and configurable durations and delays.
             */
            class Easing implements Animator {
                /**
                 * Constructs the default animator
                 *
                 * @constructor
                 */
                constructor();
                totalTime(numberOfSteps: number): number;
                animate(selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector): d3.Transition<any>;
                /**
                 * Gets the start delay of the animation in milliseconds.
                 *
                 * @returns {number} The current start delay.
                 */
                startDelay(): number;
                /**
                 * Sets the start delay of the animation in milliseconds.
                 *
                 * @param {number} startDelay The start delay in milliseconds.
                 * @returns {Easing} The calling Easing Animator.
                 */
                startDelay(startDelay: number): Easing;
                /**
                 * Gets the duration of one animation step in milliseconds.
                 *
                 * @returns {number} The current duration.
                 */
                stepDuration(): number;
                /**
                 * Sets the duration of one animation step in milliseconds.
                 *
                 * @param {number} stepDuration The duration in milliseconds.
                 * @returns {Easing} The calling Easing Animator.
                 */
                stepDuration(stepDuration: number): Easing;
                /**
                 * Gets the maximum start delay between animation steps in milliseconds.
                 *
                 * @returns {number} The current maximum iterative delay.
                 */
                stepDelay(): number;
                /**
                 * Sets the maximum start delay between animation steps in milliseconds.
                 *
                 * @param {number} stepDelay The maximum iterative delay in milliseconds.
                 * @returns {Easing} The calling Easing Animator.
                 */
                stepDelay(stepDelay: number): Easing;
                /**
                 * Gets the maximum total animation duration constraint in milliseconds.
                 *
                 * If the animation time would exceed the specified time, the duration of each step
                 * and the delay between each step will be reduced until the animation fits within
                 * the specified time.
                 *
                 * @returns {number} The current maximum total animation duration.
                 */
                maxTotalDuration(): number;
                /**
                 * Sets the maximum total animation duration constraint in miliseconds.
                 *
                 * If the animation time would exceed the specified time, the duration of each step
                 * and the delay between each step will be reduced until the animation fits within
                 * the specified time.
                 *
                 * @param {number} maxTotalDuration The maximum total animation duration in milliseconds.
                 * @returns {Easing} The calling Easing Animator.
                 */
                maxTotalDuration(maxTotalDuration: number): Easing;
                /**
                 * Gets the current easing mode of the animation.
                 *
                 * @returns {string} the current easing mode.
                 */
                easingMode(): string;
                /**
                 * Sets the easing mode of the animation.
                 *
                 * @param {string} easingMode The desired easing mode.
                 * @returns {Easing} The calling Easing Animator.
                 */
                easingMode(easingMode: string): Easing;
            }
        }
    }


    namespace Plottable {
        class Dispatcher {
            protected _eventToCallback: {
                [eventName: string]: (e: Event) => any;
            };
            protected _callbacks: Utils.CallbackSet<Function>[];
            protected _setCallback(callbackSet: Utils.CallbackSet<Function>, callback: Function): void;
            protected _unsetCallback(callbackSet: Utils.CallbackSet<Function>, callback: Function): void;
        }
    }


    namespace Plottable {
        namespace Dispatchers {
            type MouseCallback = (p: Point, event: MouseEvent) => void;
            class Mouse extends Dispatcher {
                /**
                 * Get a Mouse Dispatcher for the <svg> containing elem.
                 * If one already exists on that <svg>, it will be returned; otherwise, a new one will be created.
                 *
                 * @param {SVGElement} elem
                 * @return {Dispatchers.Mouse}
                 */
                static getDispatcher(elem: SVGElement): Dispatchers.Mouse;
                /**
                 * This constructor not be invoked directly.
                 *
                 * @constructor
                 * @param {SVGElement} svg The root <svg> to attach to.
                 */
                constructor(svg: SVGElement);
                /**
                 * Registers a callback to be called when the mouse position changes.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                onMouseMove(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Removes a callback that would be called when the mouse position changes.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                offMouseMove(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Registers a callback to be called when a mousedown occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                onMouseDown(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Removes a callback that would be called when a mousedown occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                offMouseDown(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Registers a callback to be called when a mouseup occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                onMouseUp(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Removes a callback that would be called when a mouseup occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                offMouseUp(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Registers a callback to be called when a wheel event occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                onWheel(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Removes a callback that would be called when a wheel event occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                offWheel(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Registers a callback to be called when a dblClick occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                onDblClick(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Removes a callback that would be called when a dblClick occurs.
                 *
                 * @param {MouseCallback} callback
                 * @return {Dispatchers.Mouse} The calling Mouse Dispatcher.
                 */
                offDblClick(callback: MouseCallback): Dispatchers.Mouse;
                /**
                 * Returns the last computed mouse position in <svg> coordinate space.
                 *
                 * @return {Point}
                 */
                lastMousePosition(): Point;
            }
        }
    }


    namespace Plottable {
        namespace Dispatchers {
            type TouchCallback = (ids: number[], idToPoint: {
                [id: number]: Point;
            }, event: TouchEvent) => void;
            class Touch extends Dispatcher {
                /**
                 * Gets a Touch Dispatcher for the <svg> containing elem.
                 * If one already exists on that <svg>, it will be returned; otherwise, a new one will be created.
                 *
                 * @param {SVGElement} elem
                 * @return {Dispatchers.Touch}
                 */
                static getDispatcher(elem: SVGElement): Dispatchers.Touch;
                /**
                 * This constructor should not be invoked directly.
                 *
                 * @constructor
                 * @param {SVGElement} svg The root <svg> to attach to.
                 */
                constructor(svg: SVGElement);
                /**
                 * Registers a callback to be called when a touch starts.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                onTouchStart(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Removes a callback that would be called when a touch starts.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                offTouchStart(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Registers a callback to be called when the touch position changes.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                onTouchMove(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Removes a callback that would be called when the touch position changes.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                offTouchMove(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Registers a callback to be called when a touch ends.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                onTouchEnd(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Removes a callback that would be called when a touch ends.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                offTouchEnd(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Registers a callback to be called when a touch is cancelled.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                onTouchCancel(callback: TouchCallback): Dispatchers.Touch;
                /**
                 * Removes a callback that would be called when a touch is cancelled.
                 *
                 * @param {TouchCallback} callback
                 * @return {Dispatchers.Touch} The calling Touch Dispatcher.
                 */
                offTouchCancel(callback: TouchCallback): Dispatchers.Touch;
            }
        }
    }


    namespace Plottable {
        namespace Dispatchers {
            type KeyCallback = (keyCode: number, event: KeyboardEvent) => void;
            class Key extends Dispatcher {
                /**
                 * Gets a Key Dispatcher. If one already exists it will be returned;
                 * otherwise, a new one will be created.
                 *
                 * @return {Dispatchers.Key}
                 */
                static getDispatcher(): Dispatchers.Key;
                /**
                 * This constructor should not be invoked directly.
                 *
                 * @constructor
                 */
                constructor();
                /**
                 * Registers a callback to be called whenever a key is pressed.
                 *
                 * @param {KeyCallback} callback
                 * @return {Dispatchers.Key} The calling Key Dispatcher.
                 */
                onKeyDown(callback: KeyCallback): Key;
                /**
                 * Removes the callback to be called whenever a key is pressed.
                 *
                 * @param {KeyCallback} callback
                 * @return {Dispatchers.Key} The calling Key Dispatcher.
                 */
                offKeyDown(callback: KeyCallback): Key;
            }
        }
    }


    namespace Plottable {
        class Interaction {
            protected _componentAttachedTo: Component;
            protected _anchor(component: Component): void;
            protected _unanchor(): void;
            /**
             * Attaches this Interaction to a Component.
             * If the Interaction was already attached to a Component, it first detaches itself from the old Component.
             *
             * @param {Component} component
             * @returns {Interaction} The calling Interaction.
             */
            attachTo(component: Component): Interaction;
            /**
             * Detaches this Interaction from the Component.
             * This Interaction can be reused.
             *
             * @param {Component} component
             * @returns {Interaction} The calling Interaction.
             */
            detachFrom(component: Component): Interaction;
            /**
             * Gets whether this Interaction is enabled.
             */
            enabled(): boolean;
            /**
             * Enables or disables this Interaction.
             *
             * @param {boolean} enabled Whether the Interaction should be enabled.
             * @return {Interaction} The calling Interaction.
             */
            enabled(enabled: boolean): Interaction;
            /**
             * Translates an <svg>-coordinate-space point to Component-space coordinates.
             *
             * @param {Point} p A Point in <svg>-space coordinates.
             * @return {Point} The same location in Component-space coordinates.
             */
            protected _translateToComponentSpace(p: Point): Point;
            /**
             * Checks whether a Component-coordinate-space Point is inside the Component.
             *
             * @param {Point} p A Point in Compoennt-space coordinates.
             * @return {boolean} Whether or not the point is inside the Component.
             */
            protected _isInsideComponent(p: Point): boolean;
        }
    }


    namespace Plottable {
        type ClickCallback = (point: Point) => void;
        namespace Interactions {
            class Click extends Interaction {
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Adds a callback to be called when the Component is clicked.
                 *
                 * @param {ClickCallback} callback
                 * @return {Interactions.Click} The calling Click Interaction.
                 */
                onClick(callback: ClickCallback): Click;
                /**
                 * Removes a callback that would be called when the Component is clicked.
                 *
                 * @param {ClickCallback} callback
                 * @return {Interactions.Click} The calling Click Interaction.
                 */
                offClick(callback: ClickCallback): Click;
            }
        }
    }


    namespace Plottable {
        namespace Interactions {
            class DoubleClick extends Interaction {
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Adds a callback to be called when the Component is double-clicked.
                 *
                 * @param {ClickCallback} callback
                 * @return {Interactions.DoubleClick} The calling DoubleClick Interaction.
                 */
                onDoubleClick(callback: ClickCallback): DoubleClick;
                /**
                 * Removes a callback that would be called when the Component is double-clicked.
                 *
                 * @param {ClickCallback} callback
                 * @return {Interactions.DoubleClick} The calling DoubleClick Interaction.
                 */
                offDoubleClick(callback: ClickCallback): DoubleClick;
            }
        }
    }


    namespace Plottable {
        type KeyCallback = (keyCode: number) => void;
        namespace Interactions {
            class Key extends Interaction {
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Adds a callback to be called when the key with the given keyCode is
                 * pressed and the user is moused over the Component.
                 *
                 * @param {number} keyCode
                 * @param {KeyCallback} callback
                 * @returns {Interactions.Key} The calling Key Interaction.
                 */
                onKeyPress(keyCode: number, callback: KeyCallback): Key;
                /**
                 * Removes a callback that would be called when the key with the given keyCode is
                 * pressed and the user is moused over the Component.
                 *
                 * @param {number} keyCode
                 * @param {KeyCallback} callback
                 * @returns {Interactions.Key} The calling Key Interaction.
                 */
                offKeyPress(keyCode: number, callback: KeyCallback): Key;
            }
        }
    }


    namespace Plottable {
        type PointerCallback = (point: Point) => void;
        namespace Interactions {
            class Pointer extends Interaction {
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Adds a callback to be called when the pointer enters the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                onPointerEnter(callback: PointerCallback): Pointer;
                /**
                 * Removes a callback that would be called when the pointer enters the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                offPointerEnter(callback: PointerCallback): Pointer;
                /**
                 * Adds a callback to be called when the pointer moves within the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                onPointerMove(callback: PointerCallback): Pointer;
                /**
                 * Removes a callback that would be called when the pointer moves within the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                offPointerMove(callback: PointerCallback): Pointer;
                /**
                 * Adds a callback to be called when the pointer exits the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                onPointerExit(callback: PointerCallback): Pointer;
                /**
                 * Removes a callback that would be called when the pointer exits the Component.
                 *
                 * @param {PointerCallback} callback
                 * @return {Interactions.Pointer} The calling Pointer Interaction.
                 */
                offPointerExit(callback: PointerCallback): Pointer;
            }
        }
    }


    namespace Plottable {
        namespace Interactions {
            class PanZoom extends Interaction {
                /**
                 * A PanZoom Interaction updates the domains of an x-scale and/or a y-scale
                 * in response to the user panning or zooming.
                 *
                 * @constructor
                 * @param {QuantitativeScale} [xScale] The x-scale to update on panning/zooming.
                 * @param {QuantitativeScale} [yScale] The y-scale to update on panning/zooming.
                 */
                constructor(xScale?: QuantitativeScale<any>, yScale?: QuantitativeScale<any>);
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Gets the x scales for this PanZoom Interaction.
                 */
                xScales(): QuantitativeScale<any>[];
                /**
                 * Sets the x scales for this PanZoom Interaction.
                 *
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                xScales(xScales: QuantitativeScale<any>[]): Interactions.PanZoom;
                /**
                 * Gets the y scales for this PanZoom Interaction.
                 */
                yScales(): QuantitativeScale<any>[];
                /**
                 * Sets the y scales for this PanZoom Interaction.
                 *
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                yScales(yScales: QuantitativeScale<any>[]): Interactions.PanZoom;
                /**
                 * Adds an x scale to this PanZoom Interaction
                 *
                 * @param {QuantitativeScale<any>} An x scale to add
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                addXScale(xScale: QuantitativeScale<any>): PanZoom;
                /**
                 * Removes an x scale from this PanZoom Interaction
                 *
                 * @param {QuantitativeScale<any>} An x scale to remove
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                removeXScale(xScale: QuantitativeScale<any>): PanZoom;
                /**
                 * Adds a y scale to this PanZoom Interaction
                 *
                 * @param {QuantitativeScale<any>} A y scale to add
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                addYScale(yScale: QuantitativeScale<any>): PanZoom;
                /**
                 * Removes a y scale from this PanZoom Interaction
                 *
                 * @param {QuantitativeScale<any>} A y scale to remove
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                removeYScale(yScale: QuantitativeScale<any>): PanZoom;
                /**
                 * Gets the minimum domain extent for the scale, specifying the minimum allowable amount
                 * between the ends of the domain.
                 *
                 * Note that extents will mainly work on scales that work linearly like Linear Scale and Time Scale
                 *
                 * @param {QuantitativeScale<any>} quantitativeScale The scale to query
                 * @returns {D} The minimum domain extent for the scale.
                 */
                minDomainExtent<D>(quantitativeScale: QuantitativeScale<D>): D;
                /**
                 * Sets the minimum domain extent for the scale, specifying the minimum allowable amount
                 * between the ends of the domain.
                 *
                 * Note that extents will mainly work on scales that work linearly like Linear Scale and Time Scale
                 *
                 * @param {QuantitativeScale<any>} quantitativeScale The scale to query
                 * @param {D} minDomainExtent The minimum domain extent for the scale.
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                minDomainExtent<D>(quantitativeScale: QuantitativeScale<D>, minDomainExtent: D): Interactions.PanZoom;
                /**
                 * Gets the maximum domain extent for the scale, specifying the maximum allowable amount
                 * between the ends of the domain.
                 *
                 * Note that extents will mainly work on scales that work linearly like Linear Scale and Time Scale
                 *
                 * @param {QuantitativeScale<any>} quantitativeScale The scale to query
                 * @returns {D} The maximum domain extent for the scale.
                 */
                maxDomainExtent<D>(quantitativeScale: QuantitativeScale<D>): D;
                /**
                 * Sets the maximum domain extent for the scale, specifying the maximum allowable amount
                 * between the ends of the domain.
                 *
                 * Note that extents will mainly work on scales that work linearly like Linear Scale and Time Scale
                 *
                 * @param {QuantitativeScale<any>} quantitativeScale The scale to query
                 * @param {D} minDomainExtent The maximum domain extent for the scale.
                 * @returns {Interactions.PanZoom} The calling PanZoom Interaction.
                 */
                maxDomainExtent<D>(quantitativeScale: QuantitativeScale<D>, maxDomainExtent: D): Interactions.PanZoom;
            }
        }
    }


    namespace Plottable {
        type DragCallback = (start: Point, end: Point) => void;
        namespace Interactions {
            class Drag extends Interaction {
                protected _anchor(component: Component): void;
                protected _unanchor(): void;
                /**
                 * Gets whether the Drag Interaction constrains Points passed to its
                 * callbacks to lie inside its Component.
                 *
                 * If true, when the user drags outside of the Component, the closest Point
                 * inside the Component will be passed to the callback instead of the actual
                 * cursor position.
                 *
                 * @return {boolean}
                 */
                constrainedToComponent(): boolean;
                /**
                 * Sets whether the Drag Interaction constrains Points passed to its
                 * callbacks to lie inside its Component.
                 *
                 * If true, when the user drags outside of the Component, the closest Point
                 * inside the Component will be passed to the callback instead of the actual
                 * cursor position.
                 *
                 * @param {boolean}
                 * @return {Interactions.Drag} The calling Drag Interaction.
                 */
                constrainedToComponent(constrainedToComponent: boolean): Drag;
                /**
                 * Adds a callback to be called when dragging starts.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                onDragStart(callback: DragCallback): Drag;
                /**
                 * Removes a callback that would be called when dragging starts.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                offDragStart(callback: DragCallback): Drag;
                /**
                 * Adds a callback to be called during dragging.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                onDrag(callback: DragCallback): Drag;
                /**
                 * Removes a callback that would be called during dragging.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                offDrag(callback: DragCallback): Drag;
                /**
                 * Adds a callback to be called when dragging ends.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                onDragEnd(callback: DragCallback): Drag;
                /**
                 * Removes a callback that would be called when dragging ends.
                 *
                 * @param {DragCallback} callback
                 * @returns {Drag} The calling Drag Interaction.
                 */
                offDragEnd(callback: DragCallback): Drag;
            }
        }
    }


    namespace Plottable {
        type DragBoxCallback = (bounds: Bounds) => void;
        namespace Components {
            class DragBoxLayer extends Components.SelectionBoxLayer {
                protected _hasCorners: boolean;
                /**
                 * Constructs a DragBoxLayer.
                 *
                 * A DragBoxLayer is a SelectionBoxLayer with a built-in Drag Interaction.
                 * A drag gesture will set the Bounds of the box.
                 * If resizing is enabled using resizable(true), the edges of box can be repositioned.
                 *
                 * @constructor
                 */
                constructor();
                protected _setup(): void;
                renderImmediately(): DragBoxLayer;
                /**
                 * Gets the detection radius of the drag box in pixels.
                 */
                detectionRadius(): number;
                /**
                 * Sets the detection radius of the drag box in pixels.
                 *
                 * @param {number} r
                 * @return {DragBoxLayer} The calling DragBoxLayer.
                 */
                detectionRadius(r: number): DragBoxLayer;
                /**
                 * Gets whether or not the drag box is resizable.
                 */
                resizable(): boolean;
                /**
                 * Sets whether or not the drag box is resizable.
                 *
                 * @param {boolean} canResize
                 * @return {DragBoxLayer} The calling DragBoxLayer.
                 */
                resizable(canResize: boolean): DragBoxLayer;
                protected _setResizableClasses(canResize: boolean): void;
                /**
                 * Sets the callback to be called when dragging starts.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                onDragStart(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Removes a callback to be called when dragging starts.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                offDragStart(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Sets a callback to be called during dragging.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                onDrag(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Removes a callback to be called during dragging.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                offDrag(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Sets a callback to be called when dragging ends.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                onDragEnd(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Removes a callback to be called when dragging ends.
                 *
                 * @param {DragBoxCallback} callback
                 * @returns {DragBoxLayer} The calling DragBoxLayer.
                 */
                offDragEnd(callback: DragBoxCallback): DragBoxLayer;
                /**
                 * Gets the internal Interactions.Drag of the DragBoxLayer.
                 */
                dragInteraction(): Interactions.Drag;
                /**
                 * Enables or disables the interaction and drag box.
                 */
                enabled(enabled: boolean): DragBoxLayer;
                /**
                 * Gets the enabled state.
                 */
                enabled(): boolean;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class XDragBoxLayer extends DragBoxLayer {
                /**
                 * An XDragBoxLayer is a DragBoxLayer whose size can only be set in the X-direction.
                 * The y-values of the bounds() are always set to 0 and the height() of the XDragBoxLayer.
                 *
                 * @constructor
                 */
                constructor();
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): XDragBoxLayer;
                protected _setBounds(newBounds: Bounds): void;
                protected _setResizableClasses(canResize: boolean): void;
            }
        }
    }


    namespace Plottable {
        namespace Components {
            class YDragBoxLayer extends DragBoxLayer {
                /**
                 * A YDragBoxLayer is a DragBoxLayer whose size can only be set in the Y-direction.
                 * The x-values of the bounds() are always set to 0 and the width() of the YDragBoxLayer.
                 *
                 * @constructor
                 */
                constructor();
                computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): YDragBoxLayer;
                protected _setBounds(newBounds: Bounds): void;
                protected _setResizableClasses(canResize: boolean): void;
            }
        }
    }
}
