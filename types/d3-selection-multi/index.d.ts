// Type definitions for D3JS d3-selection-multi module 1.0
// Project: https://github.com/d3/d3-selection-multi/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.0

import { Selection, BaseType, ArrayLike, ValueFn } from 'd3-selection';
import { Transition } from 'd3-transition';

/**
 * An object mapping attribute (or style or property) names to value accessors
 *
 * The first generic corresponds to type of the selected element(s).
 *
 * The second generic corresponds to the type of the data on the selected element.
 */
// Retained ValueMap as type as it works better with IDE support for its intended purpose. It is not meant to be extended. So type is o.k.
// tslint:disable-next-line:interface-over-type-literal
export type ValueMap<T extends BaseType, Datum> = { [key: string]: number | string | boolean | null | ValueFn<T, Datum, number | string | boolean | null> };

declare module 'd3-selection' {
    /**
     * A D3 Selection of elements.
     *
     * The first generic "GElement" refers to the type of the selected element(s).
     * The second generic "Datum" refers to the type of the datum of a selected element(s).
     * The third generic "PElement" refers to the type of the parent element(s) in the D3 selection.
     * The fourth generic "PDatum" refers to the type of the datum of the parent element(s).
     */
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        /**
         * Set multiple attributes on the given selection. Attribute values may be constant or derived from each node and its bound data.
         *
         * @param attrs An object used as a map of attribute names to set
         */
        attrs(attrs: ValueMap<GElement, Datum>): this;

        /**
         * Derive a map of attributes to be set on the selection.
         *
         * @param attrs A function that returns an object of attribute names and values to set.
         */
        attrs(attrs: ValueFn<GElement, Datum, ValueMap<GElement, Datum>>): this;

        /**
         * Set multiple CSS style properties on the given selection. Style properties may be constant or derived from each node and its bound data.
         *
         * @param style An object used as a map of style properties to set.
         * @param priority The CSS priority (either "important" or undefined).
         */
        styles(style: ValueMap<GElement, Datum>, priority?: 'important'): this;

        /**
         * Derive a map of style properties to be set on the selection.
         *
         * @param style A function that returns an object of style properties and the values to be set.
         * @param priority The CSS priority (either "important" or undefined)
         */
        styles(style: ValueFn<GElement, Datum, ValueMap<GElement, Datum>>, priority?: 'important'): this;

        /**
         * Set multiple object properties directly on the selection's node(s). Property values may be constants or derived from each node and its bound data.
         *
         * @param props An object used as a map of object properties to be set.
         */
        properties(props: ValueMap<GElement, Datum>): this;

        /**
         * Derive a map of object properties to be set on the selection's node(s).
         *
         * @param props A function that returns an object of properties and their values.
         */
        properties(props: ValueFn<GElement, Datum, ValueMap<GElement, Datum>>): this;
    }
}

declare module 'd3-transition' {
    /**
     * A D3 Transition.
     *
     * The first generic "GElement" refers to the type of the selected element(s) in the Transition.
     * The second generic "Datum" refers to the type of the datum of a selected element(s) in the Transition.
     * The third generic "PElement" refers to the type of the parent element(s) in the D3 selection in the Transition.
     * The fourth generic "PDatum" refers to the type of the datum of the parent element(s) in the Transition.
     */
    interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        /**
         * Set multiple attribute values. The transition will animate from the present value to the new value. Attribute values may be constant or derived from each node and its bound data.
         *
         * @param attrs An object used as a map of attributes and their values.
         */
        attrs(attrs: ValueMap<GElement, Datum>): this;

        /**
         * Derive a map of attribute values to set.
         *
         * @param attrs A function returning a map of attributes and their values.
         */
        attrs(attrs: ValueFn<GElement, Datum, ValueMap<GElement, Datum>>): this;

        /**
         * Set multiple style properties. The transition will animate from the present value to the new value. Attribute values may be constant or derived from each node and its bound data.
         *
         * @param style A map of style properties and their values
         * @param priority The CSS priority (either "important" or undefined)
         */
        styles(style: ValueMap<GElement, Datum>, priority?: 'important'): this;

        /**
         * Derive a map of style properties to be set.
         *
         * @param style A function returning a map of style properties and their values
         * @param priority The CSS priority (either "important" or undefined)
         */
        styles(style: ValueFn<GElement, Datum, ValueMap<GElement, Datum>>, priority?: 'important'): this;
    }
}
