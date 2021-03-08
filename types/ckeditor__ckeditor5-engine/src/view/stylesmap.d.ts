/**
 * Styles map. Allows handling (adding, removing, retrieving) a set of style rules (usually, of an element).
 *
 * The styles map is capable of normalizing style names so e.g. the following operations are possible:
 */
export default class StylesMap {
    /**
     * Creates Styles instance.
     */
    constructor(styleProcessor: StylesProcessor);

    /**
     * Returns true if style map has no styles set.
     */
    readonly isEmpty: boolean;

    /**
     * Number of styles defined.
     */
    readonly size: number;

    /**
     * Set styles map to a new value.
     *
     *    styles.setTo( 'border:1px solid blue;margin-top:1px;' );
     */
    setTo(inlineStyle: string): void;

    /**
     * Checks if a given style is set.
     *
     *    styles.setTo( 'margin-left:1px;' );
     *
     *    styles.has( 'margin-left' );    // -> true
     *    styles.has( 'padding' );        // -> false
     *
     * **Note**: This check supports normalized style names.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    styles.setTo( 'margin:2px;' );
     *
     *    styles.has( 'margin' );         // -> true
     *    styles.has( 'margin-top' );     // -> true
     *    styles.has( 'margin-left' );    // -> true
     *
     *    styles.remove( 'margin-top' );
     *
     *    styles.has( 'margin' );         // -> false
     *    styles.has( 'margin-top' );     // -> false
     *    styles.has( 'margin-left' );    // -> true
     */
    has(name: string): boolean;

    /**
     * Sets a given style.
     *
     * Can insert one by one:
     *
     *    styles.set( 'color', 'blue' );
     *    styles.set( 'margin-right', '1em' );
     *
     * or many styles at once:
     *
     *    styles.set( {
     *        color: 'blue',
     *        'margin-right': '1em'
     *    } );
     *
     * ***Note**:* This method uses {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules
     * enabled style processor rules} to normalize passed values.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    styles.set( 'margin', '2px' );
     *
     * The above code will set margin to:
     *
     *    styles.getNormalized( 'margin' );
     *    // -> { top: '2px', right: '2px', bottom: '2px', left: '2px' }
     *
     * Which makes it possible to retrieve a "sub-value":
     *
     *    styles.get( 'margin-left' );       // -> '2px'
     *
     * Or modify it:
     *
     *    styles.remove( 'margin-left' );
     *
     *    styles.getNormalized( 'margin' );  // -> { top: '1px', bottom: '1px', right: '1px' }
     *    styles.toString();                 // -> 'margin-bottom:1px;margin-right:1px;margin-top:1px;'
     *
     * This method also allows to set normalized values directly (if a particular styles processor rule was enabled):
     *
     *    styles.set( 'border-color', { top: 'blue' } );
     *    styles.set( 'margin', { right: '2em' } );
     *
     *    styles.toString();                 // -> 'border-color-top:blue;margin-right:2em;'
     */
    set(nameOrObject: string, valueOrObject: string): void;
    set(nameOrObject: Record<string, unknown>): void;

    /**
     * Removes given style.
     *
     *    styles.setTo( 'background:#f00;margin-right:2px;' );
     *
     *    styles.remove( 'background' );
     *
     *    styles.toString();   // -> 'margin-right:2px;'
     *
     * ***Note**:* This method uses {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules
     * enabled style processor rules} to normalize passed values.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    styles.setTo( 'margin:1px' );
     *
     *    styles.remove( 'margin-top' );
     *    styles.remove( 'margin-right' );
     *
     *    styles.toString(); // -> 'margin-bottom:1px;margin-left:1px;'
     */
    remove(name: string): void;

    /**
     * Returns a normalized style object or a single value.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    const styles = new Styles();
     *    styles.setTo( 'margin:1px 2px 3em;' );
     *
     *    styles.getNormalized( 'margin' );
     *    // will log:
     *    // {
     *    //     top: '1px',
     *    //     right: '2px',
     *    //     bottom: '3em',
     *    //     left: '2px'     // normalized value from margin shorthand
     *    // }
     *
     *    styles.getNormalized( 'margin-left' ); // -> '2px'
     *
     * **Note**: This method will only return normalized styles if a style processor was defined.
     */
    getNormalized(name: string): Record<string, string> | string | undefined;

    /**
     * Returns a normalized style string. Styles are sorted by name.
     *
     *    styles.set( 'margin' , '1px' );
     *    styles.set( 'background', '#f00' );
     *
     *    styles.toString(); // -> 'background:#f00;margin:1px;'
     *
     * **Note**: This method supports normalized styles if defined.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    styles.set( 'margin' , '1px' );
     *    styles.set( 'background', '#f00' );
     *    styles.remove( 'margin-top' );
     *    styles.remove( 'margin-right' );
     *
     *    styles.toString(); // -> 'background:#f00;margin-bottom:1px;margin-left:1px;'
     */
    toString(): string;

    /**
     * Returns property as a value string or undefined if property is not set.
     *
     *    // Enable 'margin' shorthand processing:
     *    editor.data.addStyleProcessorRules( addMarginRules );
     *
     *    const styles = new Styles();
     *    styles.setTo( 'margin:1px;' );
     *    styles.set( 'margin-bottom', '3em' );
     *
     *    styles.getAsString( 'margin' ); // -> 'margin: 1px 1px 3em;'
     *
     * Note, however, that all sub-values must be set for the longhand property name to return a value:
     *
     *    const styles = new Styles();
     *    styles.setTo( 'margin:1px;' );
     *    styles.remove( 'margin-bottom' );
     *
     *    styles.getAsString( 'margin' ); // -> undefined
     *
     * In the above scenario, it is not possible to return a `margin` value, so `undefined` is returned.
     * Instead, you should use:
     *
     *    const styles = new Styles();
     *    styles.setTo( 'margin:1px;' );
     *    styles.remove( 'margin-bottom' );
     *
     *    for ( const styleName of styles.getStyleNames() ) {
     *        console.log( styleName, styles.getAsString( styleName ) );
     *    }
     *    // 'margin-top', '1px'
     *    // 'margin-right', '1px'
     *    // 'margin-left', '1px'
     *
     * In general, it is recommend to iterate over style names like in the example above. This way, you will always get all
     * the currently set style values. So, if all the 4 margin values would be set
     * the for-of loop above would yield only `'margin'`, `'1px'`:
     *
     *    const styles = new Styles();
     *    styles.setTo( 'margin:1px;' );
     *
     *    for ( const styleName of styles.getStyleNames() ) {
     *        console.log( styleName, styles.getAsString( styleName ) );
     *    }
     *    // 'margin', '1px'
     *
     * **Note**: To get a normalized version of a longhand property use the {@link #getNormalized `#getNormalized()`} method.
     */
    getAsString(propertyName: string): string | undefined;

    /**
     * Returns style property names as they would appear when using {@link #toString `#toString()`}.
     */
    getStyleNames(): string[];

    /**
     * Removes all styles.
     */
    clear(): void;
}

/**
 * Style processor is responsible for writing and reading a normalized styles object.
 */
export class StylesProcessor {
    /**
     * Parse style string value to a normalized object and appends it to styles object.
     *
     *    const styles = {};
     *
     *    stylesProcessor.toNormalizedForm( 'margin', '1px', styles );
     *
     *    // styles will consist: { margin: { top: '1px', right: '1px', bottom: '1px', left: '1px; } }
     *
     * **Note**: To define normalizer callbacks use {@link #setNormalizer}.
     */
    toNormalizedForm(name: string, propertyValue: string, styles: Record<string, unknown>): void;

    /**
     * Returns a normalized version of a style property.
     *    const styles = {
     *        margin: { top: '1px', right: '1px', bottom: '1px', left: '1px; },
     *        background: { color: '#f00' }
     *    };
     *
     *    stylesProcessor.getNormalized( 'background' );
     *    // will return: { color: '#f00' }
     *
     *    stylesProcessor.getNormalized( 'margin-top' );
     *    // will return: '1px'
     *
     * **Note**: In some cases extracting single value requires defining an extractor callback {@link #setExtractor}.
     */
    getNormalized(name: string, styles: Record<string, string>): Record<string, string>;

    /**
     * Returns a reduced form of style property form normalized object.
     *
     * For default margin reducer, the below code:
     *
     *    stylesProcessor.getReducedForm( 'margin', {
     *        margin: { top: '1px', right: '1px', bottom: '2px', left: '1px; }
     *    } );
     *
     * will return:
     *
     *    [
     *        [ 'margin', '1px 1px 2px' ]
     *    ]
     *
     * because it might be represented as a shorthand 'margin' value. However if one of margin long hand values is missing it should return:
     *
     *    [
     *        [ 'margin-top', '1px' ],
     *        [ 'margin-right', '1px' ],
     *        [ 'margin-bottom', '2px' ]
     *        // the 'left' value is missing - cannot use 'margin' shorthand.
     *    ]
     *
     * **Note**: To define reducer callbacks use {@link #setReducer}.
     */
    getReducedForm(name: string, styles: string): PropertyDescriptor[];

    /**
     * Returns related style names.
     *
     *    stylesProcessor.getRelatedStyles( 'margin' );
     *    // will return: [ 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' ];
     *
     *    stylesProcessor.getRelatedStyles( 'margin-top' );
     *    // will return: [ 'margin' ];
     *
     * **Note**: To define new style relations load an existing style processor or use
     * {@link module:engine/view/stylesmap~StylesProcessor#setStyleRelation `StylesProcessor.setStyleRelation()`}.
     */
    getRelatedStyles(name: string): string[];

    /**
     * Adds a normalizer method for a style property.
     *
     * A normalizer returns describing how the value should be normalized.
     *
     * For instance 'margin' style is a shorthand for four margin values:
     *
     * - 'margin-top'
     * - 'margin-right'
     * - 'margin-bottom'
     * - 'margin-left'
     *
     * and can be written in various ways if some values are equal to others. For instance `'margin: 1px 2em;'` is a shorthand for
     * `'margin-top: 1px;margin-right: 2em;margin-bottom: 1px;margin-left: 2em'`.
     *
     * A normalizer should parse various margin notations as a single object:
     *
     *    const styles = {
     *        margin: {
     *            top: '1px',
     *            right: '2em',
     *            bottom: '1px',
     *            left: '2em'
     *        }
     *    };
     *
     * Thus a normalizer for 'margin' style should return an object defining style path and value to store:
     *
     *    const returnValue = {
     *        path: 'margin',
     *        value: {
     *            top: '1px',
     *            right: '2em',
     *            bottom: '1px',
     *            left: '2em'
     *        }
     *    };
     *
     * Additionally to fully support all margin notations there should be also defined 4 normalizers for longhand margin notations. Below
     * is an example for 'margin-top' style property normalizer:
     *
     *    stylesProcessor.setNormalizer( 'margin-top', valueString => {
     *        return {
     *            path: 'margin.top',
     *            value: valueString
     *        }
     *    } );
     */
    setNormalizer(name: string, callback: (value: string) => { path: string; value: string }): void;

    /**
     * Adds a extractor callback for a style property.
     *
     * Most normalized style values are stored as one level objects. It is assumed that `'margin-top'` style will be stored as:
     *
     *    const styles = {
     *        margin: {
     *            top: 'value'
     *        }
     *    }
     *
     * However, some styles can have conflicting notations and thus it might be harder to extract a style value from shorthand. For instance
     * the 'border-top-style' can be defined using `'border-top:solid'`, `'border-style:solid none none none'` or by `'border:solid'`
     * shorthands. The default border styles processors stores styles as:
     *
     *    const styles = {
     *        border: {
     *            style: {
     *                top: 'solid'
     *            }
     *        }
     *    }
     *
     * as it is better to modify border style independently from other values. On the other part the output of the border might be
     * desired as `border-top`, `border-left`, etc notation.
     *
     * In the above example a reducer should return a side border value that combines style, color and width:
     *
     *    styleProcessor.setExtractor( 'border-top', styles => {
     *        return {
     *            color: styles.border.color.top,
     *            style: styles.border.style.top,
     *            width: styles.border.width.top
     *        }
     *    } );
     */
    setExtractor(name: string, callbackOrPath: string | ((styles: unknown) => Record<string, unknown>)): void;

    /**
     * Adds a reducer callback for a style property.
     *
     * Reducer returns a minimal notation for given style name. For longhand properties it is not required to write a reducer as
     * by default the direct value from style path is taken.
     *
     * For shorthand styles a reducer should return minimal style notation either by returning single name-value tuple or multiple tuples
     * if a shorthand cannot be used. For instance for a margin shorthand a reducer might return:
     *
     *    const marginShortHandTuple = [
     *        [ 'margin', '1px 1px 2px' ]
     *    ];
     *
     * or a longhand tuples for defined values:
     *
     *    // Considering margin.bottom and margin.left are undefined.
     *    const marginLonghandsTuples = [
     *        [ 'margin-top', '1px' ],
     *        [ 'margin-right', '1px' ]
     *    ];
     *
     * A reducer obtains a normalized style value:
     *
     *    // Simplified reducer that always outputs 4 values which are always present:
     *    stylesProcessor.setReducer( 'margin', margin => {
     *        return [
     *            [ 'margin', `${ margin.top } ${ margin.right } ${ margin.bottom } ${ margin.left }` ]
     *        ]
     *    } );
     */
    setReducer(name: string, callback: (style: Record<string, unknown>) => Array<[string, string]>): void;

    /**
     * Defines a style shorthand relation to other style notations.
     *
     *    stylesProcessor.setStyleRelation( 'margin', [
     *        'margin-top',
     *        'margin-right',
     *        'margin-bottom',
     *        'margin-left'
     *    ] );
     *
     * This enables expanding of style names for shorthands. For instance, if defined,
     * {@link module:engine/conversion/viewconsumable~ViewConsumable view consumable} items are automatically created
     * for long-hand margin style notation alongside the `'margin'` item.
     *
     * This means that when an element being converted has a style `margin`, a converter for `margin-left` will work just
     * fine since the view consumable will contain a consumable `margin-left` item (thanks to the relation) and
     * `element.getStyle( 'margin-left' )` will work as well assuming that the style processor was correctly configured.
     * However, once `margin-left` is consumed, `margin` will not be consumable anymore.
     */
    setStyleRelation(shorthandName: string, styleNames: string[]): void;
}

/**
 * A CSS style property descriptor that contains tuplet of two strings:
 *
 * - first string describes property name
 * - second string describes property value
 *
 *    const marginDescriptor = [ 'margin', '2px 3em' ];
 *    const marginTopDescriptor = [ 'margin-top', '2px' ];
 */
type PropertyDescriptor = string | string[];

/**
 * An object describing values associated with the sides of a box, for instance margins, paddings,
 * border widths, border colors, etc.
 *
 *    const margin = {
 *        top: '1px',
 *        right: '3px',
 *        bottom: '3px',
 *        left: '7px'
 *    };
 *
 *    const borderColor = {
 *        top: 'red',
 *        right: 'blue',
 *        bottom: 'blue',
 *        left: 'red'
 *    };
 */
interface BoxSides {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export {};
