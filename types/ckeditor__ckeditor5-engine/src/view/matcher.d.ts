import ViewElement from "./element";

type StringOrRegExp = string | RegExp;

interface ResultMatch {
    element: ViewElement;
    pattern: MatcherPattern;
    match?: {
        name?: boolean;
        attributes?: string[];
        classes?: string[];
        styles?: string[];
    };
}

/**
 * View matcher class.
 * Instance of this class can be used to find {@link module:engine/view/element~Element elements} that match given pattern.
 */
export default class Matcher {
    /**
     * Creates new instance of Matcher.
     */
    constructor(...pattern: MatcherPattern[]);

    /**
     * Adds pattern or patterns to matcher instance.
     *
     *        // String.
     *        matcher.add( 'div' );
     *
     *        // Regular expression.
     *        matcher.add( /^\w/ );
     *
     *        // Single class.
     *        matcher.add( {
     *            classes: 'foobar'
     *        } );
     *
     * See {@link module:engine/view/matcher~MatcherPattern} for more examples.
     *
     * Multiple patterns can be added in one call:
     *
     *         matcher.add( 'div', { classes: 'foobar' } );
     */
    add(...pattern: MatcherPattern[]): void;

    /**
     * Matches elements for currently stored patterns. Returns match information about first found
     * {@link module:engine/view/element~Element element}, otherwise returns `null`.
     *
     * Example of returned object:
     *
     *        {
     *            element: <instance of found element>,
     *            pattern: <pattern used to match found element>,
     *            match: {
     *                name: true,
     *                attributes: [ 'title', 'href' ],
     *                classes: [ 'foo' ],
     *                styles: [ 'color', 'position' ]
     *            }
     *        }
     *
     * @see module:engine/view/matcher~Matcher#add
     * @see module:engine/view/matcher~Matcher#matchAll
     */
    match(...element: ViewElement[]): ResultMatch | null;

    /**
     * Matches elements for currently stored patterns. Returns array of match information with all found
     * {@link module:engine/view/element~Element elements}. If no element is found - returns `null`.
     *
     * @see module:engine/view/matcher~Matcher#add
     * @see module:engine/view/matcher~Matcher#match
     */
    matchAll(...element: ViewElement[]): ResultMatch[] | null;

    /**
     * Returns the name of the element to match if there is exactly one pattern added to the matcher instance
     * and it matches element name defined by `string` (not `RegExp`). Otherwise, returns `null`.
     */
    getElementName(): string | null;
}

/**
 * An entity that is a valid pattern recognized by a matcher. `MatcherPattern` is used by {@link ~Matcher} to recognize
 * if a view element fits in a group of view elements described by the pattern.
 *
 * `MatcherPattern` can be given as a `String`, a `RegExp`, an `Object` or a `Function`.
 *
 * If `MatcherPattern` is given as a `String` or `RegExp`, it will match any view element that has a matching name:
 *
 *        // Match any element with name equal to 'div'.
 *        const pattern = 'div';
 *
 *        // Match any element which name starts on 'p'.
 *        const pattern = /^p/;
 *
 * If `MatcherPattern` is given as an `Object`, all the object's properties will be matched with view element properties.
 *
 *        // Match view element's name.
 *        const pattern = { name: /^p/ };
 *
 *        // Match view element which has matching attributes.
 *        const pattern = {
 *            attributes: {
 *                title: 'foobar',    // Attribute title should equal 'foobar'.
 *                foo: /^\w+/,        // Attribute foo should match /^\w+/ regexp.
 *                bar: true            // Attribute bar should be set (can be empty).
 *            }
 *        };
 *
 *        // Match view element which has given class.
 *        const pattern = {
 *            classes: 'foobar'
 *        };
 *
 *        // Match view element class using regular expression.
 *        const pattern = {
 *            classes: /foo.../
 *        };
 *
 *        // Multiple classes to match.
 *        const pattern = {
 *            classes: [ 'baz', 'bar', /foo.../ ]
 *        };
 *
 *        // Match view element which has given styles.
 *        const pattern = {
 *            styles: {
 *                position: 'absolute',
 *                color: /^\w*blue$/
 *            }
 *        };
 *
 *        // Pattern with multiple properties.
 *        const pattern = {
 *            name: 'span',
 *            styles: {
 *                'font-weight': 'bold'
 *            },
 *            classes: 'highlighted'
 *        };
 *
 * If `MatcherPattern` is given as a `Function`, the function takes a view element as a first and only parameter and
 * the function should decide whether that element matches. If so, it should return what part of the view element has been matched.
 * Otherwise, the function should return `null`. The returned result will be included in `match` property of the object
 * returned by {@link ~Matcher#match} call.
 *
 *        // Match an empty <div> element.
 *        const pattern = element => {
 *            if ( element.name == 'div' && element.childCount > 0 ) {
 *                // Return which part of the element was matched.
 *                return { name: true };
 *            }
 *
 *            return null;
 *        };
 *
 *        // Match a <p> element with big font ("heading-like" element).
 *        const pattern = element => {
 *            if ( element.name == 'p' ) {
 *                const fontSize = element.getStyle( 'font-size' );
 *                const size = fontSize.match( /(\d+)/px );
 *
 *                if ( size && Number( size[ 1 ] ) > 26 ) {
 *                    return { name: true, attribute: [ 'font-size' ] };
 *                }
 *            }
 *
 *            return null;
 *        };
 *
 * `MatcherPattern` is defined in a way that it is a superset of {@link module:engine/view/elementdefinition~ElementDefinition},
 * that is, every `ElementDefinition` also can be used as a `MatcherPattern`.
 */
export type MatcherPattern =
    | ((element: ViewElement) => ResultMatch | null)
    | StringOrRegExp
    | {
          name?: StringOrRegExp[];
          attributes: StringOrRegExp[];
          classes: StringOrRegExp[];
          styles: Record<string, StringOrRegExp>;
      };

export {};
