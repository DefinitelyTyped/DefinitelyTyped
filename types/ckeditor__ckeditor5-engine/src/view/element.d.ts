import Node from "./node";
import Text from "./text";
import TextProxy from "./textproxy";
import toMap from "@ckeditor/ckeditor5-utils/src/tomap";
import toArray from "@ckeditor/ckeditor5-utils/src/toarray";
import isIterable from "@ckeditor/ckeditor5-utils/src/isiterable";
import Matcher, { MatcherPattern } from "./matcher";
import StylesMap from "./stylesmap";
import Document from "./document";

type Attributes = Record<string, unknown> | Array<[string, unknown]> | Map<string, unknown>;

/**
 * View element.
 *
 * The editing engine does not define a fixed semantics of its elements (it is "DTD-free").
 * This is why the type of the {@link module:engine/view/element~Element} need to
 * be defined by the feature developer. When creating an element you should use one of the following methods:
 *
 * * {@link module:engine/view/downcastwriter~DowncastWriter#createContainerElement `downcastWriter#createContainerElement()`}
 * in order to create a {@link module:engine/view/containerelement~ContainerElement},
 * * {@link module:engine/view/downcastwriter~DowncastWriter#createAttributeElement `downcastWriter#createAttributeElement()`}
 * in order to create a {@link module:engine/view/attributeelement~AttributeElement},
 * * {@link module:engine/view/downcastwriter~DowncastWriter#createEmptyElement `downcastWriter#createEmptyElement()`}
 * in order to create a {@link module:engine/view/emptyelement~EmptyElement}.
 * * {@link module:engine/view/downcastwriter~DowncastWriter#createUIElement `downcastWriter#createUIElement()`}
 * in order to create a {@link module:engine/view/uielement~UIElement}.
 * * {@link module:engine/view/downcastwriter~DowncastWriter#createEditableElement `downcastWriter#createEditableElement()`}
 * in order to create a {@link module:engine/view/editableelement~EditableElement}.
 *
 * Note that for view elements which are not created from the model, like elements from mutations, paste or
 * {@link module:engine/controller/datacontroller~DataController#set data.set} it is not possible to define the type of the element.
 * In such cases the {@link module:engine/view/upcastwriter~UpcastWriter#createElement `UpcastWriter#createElement()`} method
 * should be used to create generic view elements.
 */
export default class Element extends Node {
    /**
     * Creates a view element.
     *
     * Attributes can be passed in various formats:
     *
     *        new Element( viewDocument, 'div', { class: 'editor', contentEditable: 'true' } ); // object
     *        new Element( viewDocument, 'div', [ [ 'class', 'editor' ], [ 'contentEditable', 'true' ] ] ); // map-like iterator
     *        new Element( viewDocument, 'div', mapOfAttributes ); // map
     */
    constructor(document: Document, name: string, attrs: Attributes, children: Node | Iterable<Node>);

    readonly name: string;

    /**
     * Number of element's children.
     */
    readonly childCount: number;

    /**
     * Is `true` if there are no nodes inside this element, `false` otherwise.
     */
    readonly isEmpty: boolean;

    /**
     * Checks whether this object is of the given.
     *
     *        element.is( 'element' ); // -> true
     *        element.is( 'node' ); // -> true
     *        element.is( 'view:element' ); // -> true
     *        element.is( 'view:node' ); // -> true
     *
     *        element.is( 'model:element' ); // -> false
     *        element.is( 'documentSelection' ); // -> false
     *
     * Assuming that the object being checked is an element, you can also check its
     * {@link module:engine/view/element~Element#name name}:
     *
     *        element.is( 'element', 'img' ); // -> true if this is an <img> element
     *        text.is( 'element', 'img' ); -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string, name?: string): boolean;

    /**
     * Gets child at the given index.
     */
    getChild(index: number): Node;

    /**
     * Gets index of the given child node. Returns `-1` if child node is not found.
     */
    getChildIndex(node: Node): number;

    /**
     * Gets child nodes iterator.
     */
    getChildren(): Iterable<Node>;

    /**
     * Returns an iterator that contains the keys for attributes. Order of inserting attributes is not preserved.
     */
    getAttributeKeys(): Iterable<string>;

    /**
     * Returns iterator that iterates over this element's attributes.
     *
     * Attributes are returned as arrays containing two items. First one is attribute key and second is attribute value.
     * This format is accepted by native `Map` object and also can be passed in `Node` constructor.
     */
    getAttributes(): Iterable<Record<string, string>>;

    /**
     * Gets attribute by key. If attribute is not present - returns undefined.
     */
    getAttribute(key: string): string | undefined;

    /**
     * Returns a boolean indicating whether an attribute with the specified key exists in the element.
     *
     */
    hasAttribute(key: string): boolean;

    /**
     * Checks if this element is similar to other element.
     * Both elements should have the same name and attributes to be considered as similar. Two similar elements
     * can contain different set of children nodes.
     */
    isSimilar(otherElement: Element): boolean;

    /**
     * Returns true if class is present.
     * If more then one class is provided - returns true only when all classes are present.
     *
     *        element.hasClass( 'foo' ); // Returns true if 'foo' class is present.
     *        element.hasClass( 'foo', 'bar' ); // Returns true if 'foo' and 'bar' classes are both present.
     */
    hasClass(...classname: string[]): boolean;

    /**
     * Returns iterator that contains all class names.
     */
    getClassNames(): Iterable<string>;

    /**
     * Returns style value for the given property mae.
     * If the style does not exist `undefined` is returned.
     *
     * **Note**: This method can work with normalized style names if
     * {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules a particular style processor rule is enabled}.
     * See {@link module:engine/view/stylesmap~StylesMap#getAsString `StylesMap#getAsString()`} for details.
     *
     * For an element with style set to `'margin:1px'`:
     *
     *        // Enable 'margin' shorthand processing:
     *        editor.data.addStyleProcessorRules( addMarginRules );
     *
     *        const element = view.change( writer => {
     *            const element = writer.createElement();
     *            writer.setStyle( 'margin', '1px' );
     *            writer.setStyle( 'margin-bottom', '3em' );
     *
     *            return element;
     *        } );
     *
     *        element.getStyle( 'margin' ); // -> 'margin: 1px 1px 3em;'
     */
    getStyle(property: string): string | undefined;

    /**
     * Returns a normalized style object or single style value.
     *
     * For an element with style set to: margin:1px 2px 3em;
     *
     *        element.getNormalizedStyle( 'margin' ) );
     *
     * will return:
     *
     *        {
     *            top: '1px',
     *            right: '2px',
     *            bottom: '3em',
     *            left: '2px'    // a normalized value from margin shorthand
     *        }
     *
     * and reading for single style value:
     *
     *        styles.getNormalizedStyle( 'margin-left' );
     *
     * Will return a `2px` string.
     *
     * **Note**: This method will return normalized values only if
     * {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules a particular style processor rule is enabled}.
     * See {@link module:engine/view/stylesmap~StylesMap#getNormalized `StylesMap#getNormalized()`} for details.
     */
    getNormalizedStyle(property: string): string | undefined | Record<string, string>;

    /**
     * Returns iterator that contains all style names.
     */
    getStyleNames(): Iterable<string>;

    /**
     * Returns true if style keys are present.
     * If more then one style property is provided - returns true only when all properties are present.
     *
     *        element.hasStyle( 'color' ); // Returns true if 'border-top' style is present.
     *        element.hasStyle( 'color', 'border-top' ); // Returns true if 'color' and 'border-top' styles are both present.
     */
    hasStyle(...property: string[]): boolean;

    /**
     * Returns ancestor element that match specified pattern.
     * Provided patterns should be compatible with {@link module:engine/view/matcher~Matcher Matcher} as it is used internally.
     *
     * @see module:engine/view/matcher~Matcher
     */
    findAncestor(...patterns: MatcherPattern[]): Element | null;

    /**
     * Returns the custom property value for the given key.
     */
    getCustomProperty(key: string): unknown;

    /**
     * Returns an iterator which iterates over this element's custom properties.
     * Iterator provides `[ key, value ]` pairs for each stored property.
     */
    getCustomProperties(): Iterable<Record<string, unknown>>;

    /**
     * Returns identity string based on element's name, styles, classes and other attributes.
     * Two elements that {@link #isSimilar are similar} will have same identity string.
     * It has the following format:
     *
     *        'name class="class1,class2" style="style1:value1;style2:value2" attr1="val1" attr2="val2"'
     *
     * For example:
     *
     *        const element = writer.createContainerElement( 'foo', {
     *            banana: '10',
     *            apple: '20',
     *            style: 'color: red; border-color: white;',
     *            class: 'baz'
     *        } );
     *
     *        // returns 'foo class="baz" style="border-color:white;color:red" apple="20" banana="10"'
     *        element.getIdentity();
     *
     * **Note**: Classes, styles and other attributes are sorted alphabetically.
     */
    getIdentity(): string;

    /**
     * Returns block {@link module:engine/view/filler filler} offset or `null` if block filler is not needed.
     */
    getFillerOffset(): number | null;
}

export {};
