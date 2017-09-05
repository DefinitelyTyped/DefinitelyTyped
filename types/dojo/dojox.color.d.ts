// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/color.html
     *
     * Deprecated.  Should require dojox/color modules directly rather than trying to access them through
     * this module.
     *
     */
    interface color {
    }
    namespace color {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/MeanColorModel.html
         *
         * A color model that returns a color from a data value
         * using an interpolation between two extremum colors around the mean value.
         *
         * @param startColor The start color.
         * @param endColor       OptionalThe end color.
         */
        class MeanColorModel extends dojox.color.NeutralColorModel {
            constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color);
            /**
             * Return the neutral value in this case the mean value of the data values.
             *
             * @param min The minimal value.
             * @param max The maximum value.
             * @param sum The sum of all values.
             * @param values The sorted array of values used to compute colors.
             */
            computeNeutral(min: number, max: number, sum: number, values: number[]): any;
            /**
             * return the color for a given data value.
             *
             * @param value The data value.
             */
            getColor(value: number): any;
            /**
             * Return the normalized (between 0 and 1) value for a given data value.
             * This implementation uses an power function to map neutral value to 0.5
             * and distribute other values around it.
             *
             * @param value The data value
             */
            getNormalizedValue(value: number): any;
            /**
             * Initialize the color model from a list of data items and using a function
             * that returns the value used to compute the color for a given item.
             *
             * @param items The data items.
             * @param colorFunc The function that returns the value used to compute the color for particular data item.
             */
            initialize(items: Object[], colorFunc: Function): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/NeutralColorModel.html
         *
         * Base class for color models that return a color from a data value
         * using an interpolation between two extremum colors around a neutral value.
         *
         * @param startColor The start color.
         * @param endColor       OptionalThe end color.
         */
        class NeutralColorModel extends dojox.color.SimpleColorModel {
            constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color);
            /**
             * Return the neutral value. This can be for example the mean or average value.
             * This function must be implemented by implementations.
             *
             * @param min The minimal value.
             * @param max The maximum value.
             * @param sum The sum of all values.
             * @param values The sorted array of values used to compute colors.
             */
            computeNeutral(min: number, max: number, sum: number, values: number[]): void;
            /**
             * return the color for a given data value.
             *
             * @param value The data value.
             */
            getColor(value: number): any;
            /**
             * Return the normalized (between 0 and 1) value for a given data value.
             * This implementation uses an power function to map neutral value to 0.5
             * and distribute other values around it.
             *
             * @param value The data value
             */
            getNormalizedValue(value: number): any;
            /**
             * Initialize the color model from a list of data items and using a function
             * that returns the value used to compute the color for a given item.
             *
             * @param items The data items.
             * @param colorFunc The function that returns the value used to compute the color for particular data item.
             */
            initialize(items: Object[], colorFunc: Function): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/SimpleColorModel.html
         *
         * Base class for color models that return a color from a data value
         * using an interpolation between two extremum colors.
         *
         * @param startColor The start color.
         * @param endColor       OptionalThe end color.
         */
        class SimpleColorModel {
            constructor(startColor: dojo._base.Color, endColor?: dojo._base.Color);
            /**
             * return the color for a given data value.
             *
             * @param value The data value.
             */
            getColor(value: number): any;
            /**
             * Return the normalized (between 0 and 1) value for a given data value.
             * This function must be implemented by implementations.
             *
             * @param value The data value.
             */
            getNormalizedValue(value: number): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/Palette.html
         *
         * An object that represents a palette of colors.
         * A Palette is a representation of a set of colors.  While the standard
         * number of colors contained in a palette is 5, it can really handle any
         * number of colors.
         *
         * A palette is useful for the ability to transform all the colors in it
         * using a simple object-based approach.  In addition, you can generate
         * palettes using dojox.color.Palette.generate; these generated palettes
         * are based on the palette generators at http://kuler.adobe.com.
         *
         * @param base
         */
        interface Palette{(base: String): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/Palette.html
         *
         * An object that represents a palette of colors.
         * A Palette is a representation of a set of colors.  While the standard
         * number of colors contained in a palette is 5, it can really handle any
         * number of colors.
         *
         * A palette is useful for the ability to transform all the colors in it
         * using a simple object-based approach.  In addition, you can generate
         * palettes using dojox.color.Palette.generate; these generated palettes
         * are based on the palette generators at http://kuler.adobe.com.
         *
         * @param base
         */
        interface Palette{(base: any[]): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/Palette.html
         *
         * An object that represents a palette of colors.
         * A Palette is a representation of a set of colors.  While the standard
         * number of colors contained in a palette is 5, it can really handle any
         * number of colors.
         *
         * A palette is useful for the ability to transform all the colors in it
         * using a simple object-based approach.  In addition, you can generate
         * palettes using dojox.color.Palette.generate; these generated palettes
         * are based on the palette generators at http://kuler.adobe.com.
         *
         * @param base
         */
        interface Palette{(base: dojo._base.Color): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/Palette.html
         *
         * An object that represents a palette of colors.
         * A Palette is a representation of a set of colors.  While the standard
         * number of colors contained in a palette is 5, it can really handle any
         * number of colors.
         *
         * A palette is useful for the ability to transform all the colors in it
         * using a simple object-based approach.  In addition, you can generate
         * palettes using dojox.color.Palette.generate; these generated palettes
         * are based on the palette generators at http://kuler.adobe.com.
         *
         * @param base
         */
        interface Palette{(base: dojox.color.Palette): void}
        namespace Palette {
            /**
             *
             */
            var generators: Object
            /**
             * Clones the current palette.
             *
             */
            interface clone{(): any}
            /**
             * Generate a new Palette using any of the named functions in
             * dojox.color.Palette.generators or an optional function definition.  Current
             * generators include "analogous", "monochromatic", "triadic", "complementary",
             * "splitComplementary", and "shades".
             *
             * @param base
             * @param type
             */
            interface generate{(base: String, type: Function): any}
            /**
             * Generate a new Palette using any of the named functions in
             * dojox.color.Palette.generators or an optional function definition.  Current
             * generators include "analogous", "monochromatic", "triadic", "complementary",
             * "splitComplementary", and "shades".
             *
             * @param base
             * @param type
             */
            interface generate { (base: dojo._base.Color, type: Function): any}
            /**
             * Generate a new Palette using any of the named functions in
             * dojox.color.Palette.generators or an optional function definition.  Current
             * generators include "analogous", "monochromatic", "triadic", "complementary",
             * "splitComplementary", and "shades".
             *
             * @param base
             * @param type
             */
            interface generate{(base: String, type: String): any}
            /**
             * Generate a new Palette using any of the named functions in
             * dojox.color.Palette.generators or an optional function definition.  Current
             * generators include "analogous", "monochromatic", "triadic", "complementary",
             * "splitComplementary", and "shades".
             *
             * @param base
             * @param type
             */
            interface generate { (base: dojo._base.Color, type: String): any}
            /**
             * Transform the palette using a specific transformation function
             * and a set of transformation parameters.
             * {palette}.transform is a simple way to uniformly transform
             * all of the colors in a palette using any of 5 formulae:
             * RGBA, HSL, HSV, CMYK or CMY.
             *
             * Once the forumula to be used is determined, you can pass any
             * number of parameters based on the formula "d"[param]; for instance,
             * { use: "rgba", dr: 20, dg: -50 } will take all of the colors in
             * palette, add 20 to the R value and subtract 50 from the G value.
             *
             * Unlike other types of transformations, transform does not alter
             * the original palette but will instead return a new one.
             *
             * @param kwArgs An object with the following properties:use (String, optional): Specify the color model to use for the transformation.  Can be "rgb", "rgba", "hsv", "hsl", "cmy", "cmyk".dr (Number, optional): The delta to be applied to the red aspect of the RGB/RGBA color model.dg (Number, optional): The delta to be applied to the green aspect of the RGB/RGBA color model.db (Number, optional): The delta to be applied to the blue aspect of the RGB/RGBA color model.da (Number, optional): The delta to be applied to the alpha aspect of the RGBA color model.dc (Number, optional): The delta to be applied to the cyan aspect of the CMY/CMYK color model.dm (Number, optional): The delta to be applied to the magenta aspect of the CMY/CMYK color model.dy (Number, optional): The delta to be applied to the yellow aspect of the CMY/CMYK color model.dk (Number, optional): The delta to be applied to the black aspect of the CMYK color model.dh (Number, optional): The delta to be applied to the hue aspect of the HSL/HSV color model.ds (Number, optional): The delta to be applied to the saturation aspect of the HSL/HSV color model.dl (Number, optional): The delta to be applied to the luminosity aspect of the HSL color model.dv (Number, optional): The delta to be applied to the value aspect of the HSV color model.
             */
            interface transform{(kwArgs: Object): any}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/Palette.generators.html
             *
             *
             */
            interface generators {
                /**
                 * Create a 5 color palette based on the analogous rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.high (Number, optional): The difference between the hue of the base color and the highest hue.  In degrees, default is 60.low (Number, optional): The difference between the hue of the base color and the lowest hue.  In degrees, default is 18.
                 */
                analogous(args: Object): any;
                /**
                 * Create a 5 color palette based on the complementary rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.
                 */
                complementary(args: Object): any;
                /**
                 * Create a 5 color palette based on the compound rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.
                 */
                compound(args: Object): any;
                /**
                 * Create a 5 color palette based on the monochromatic rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.
                 */
                monochromatic(args: Object): any;
                /**
                 * Create a 5 color palette based on the shades rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.
                 */
                shades(args: Object): any;
                /**
                 * Create a 5 color palette based on the split complementary rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.da (Number, optional): The delta angle to be used to determine where the split for the complementary rules happen.In degrees, the default is 30.
                 */
                splitComplementary(args: Object): any;
                /**
                 * Create a 5 color palette based on the triadic rules as implemented at
                 * http://kuler.adobe.com.
                 *
                 * @param args An object with the following properties:base (dojo/_base/Color): The base color to be used to generate the palette.
                 */
                triadic(args: Object): any;
            }
        }

        module _base {
        }

        namespace api {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/color/api/ColorModel.html
             *
             * API for classes that implement a color model that returns a color from a data value.
             *
             */
            class ColorModel {
                constructor();
                /**
                 * return the color for a given data value.
                 *
                 * @param value The data value.
                 */
                getColor(value: number): void;
                /**
                 * Optionally initialize the color model from a list of data items and using a function
                 * that returns the value used to compute the color for a given item.
                 *
                 * @param items The data items.
                 * @param colorFunc The function that returns the value used to compute the color for particular data item.
                 */
                initialize(items: Object[], colorFunc: Function): void;
            }
        }

    }

}

declare module "dojox/color" {
    var exp: dojox.color
    export=exp;
}
declare module "dojox/color/MeanColorModel" {
    var exp: dojox.color.MeanColorModel
    export=exp;
}
declare module "dojox/color/NeutralColorModel" {
    var exp: dojox.color.NeutralColorModel
    export=exp;
}
declare module "dojox/color/SimpleColorModel" {
    var exp: dojox.color.SimpleColorModel
    export=exp;
}
declare module "dojox/color/Palette" {
    var exp: dojox.color.Palette
    export=exp;
}
declare module "dojox/color/Palette.generators" {
    var exp: dojox.color.Palette.generators
    export=exp;
}
declare module "dojox/color/api/ColorModel" {
    var exp: dojox.color.api.ColorModel
    export=exp;
}
