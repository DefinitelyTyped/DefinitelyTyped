// Type definitions for leaflet-textpath 1.2
// Project: https://github.com/makinacorpus/Leaflet.TextPath
// Definitions by: Eric Myllyoja <https://github.com/MasterEric>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Needed to access the leaflet module, to extend it.
import * as Leaflet from 'leaflet';

// Needed to access JSX.IntrinsicElements.
import * as React from 'react';

/*
 * Add new properties to existing types in the leaflet module.
 */
declare module 'leaflet' {
    /**
     * <number> rotates the text by the specified angle, in degrees.
     * 'flip' rotates the text by 180 degrees.
     * 'perpendicular' rotates the text by 90 degrees.
     */
    type TextPathOrientation = 'flip' | 'perpendicular' | number;

    interface TextPathOptions {
        /**
         * Specifies if the text should be repeated along the polyline.
         * @default false
         */
        repeat?: boolean;
        /**
         * Centers the text according to the polyline's bounding box.
         * @default false
         */
        center?: boolean;
        /**
         * Show text below the path.
         * @default false
         */
        below?: boolean;
        /**
         * Set an offset to position text relative to the polyline.
         * @default 0
         */
        offset?: number;
        /**
         * Rotate text.
         * @default 0
         */
        orientation?: TextPathOrientation;
        /**
         * Object containing the attributes applied to the text tag.
         * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text#attributes
         * @default {}
         */
        attributes?: Record<string, string>;
    }

    interface Polyline {
        /**
         * Set the text to display over this Polyline.
         * @default null Represents no text.
         */
        setText: (text: string | null, options?: TextPathOptions) => void;
    }

    interface LayerGroup {
        /**
         * Set the text to display over the Polylines in this layer group.
         * @default null Represents no text.
         */
        setText: (text: string | null, options?: TextPathOptions) => void;
    }
}
