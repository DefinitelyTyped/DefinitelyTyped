// Type definitions for D3JS d3-selection-multi module v1.0.0
// Project: https://github.com/d3/d3-selection-multi/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Selection, BaseType, ArrayLike, ValueFn} from 'd3-selection';
import {Transition} from 'd3-transition';


// An object mapping attribute (or style or property) names to value accessors
export type ValueMap<T extends BaseType, Datum> = { [key: string]: number | string | boolean | null | ValueFn<T, Datum, number | string | boolean | null> };

declare module 'd3-selection' {
    export interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
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
    export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
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
