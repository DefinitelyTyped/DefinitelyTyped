import Observable from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Range from "./range";
import Node from "./node";
import Position from "./position";
import Element from "./element";
import Selection from "./selection";
import DocumentSelection from "./documentselection";
import Writer from "./writer";

/**
 * A definition of a {@link module:engine/model/schema~Schema schema} item.
 *
 * You can define the following rules:
 *
 * * {@link ~SchemaItemDefinition#allowIn `allowIn`} &ndash; Defines in which other items this item will be allowed.
 * * {@link ~SchemaItemDefinition#allowAttributes `allowAttributes`} &ndash; Defines allowed attributes of the given item.
 * * {@link ~SchemaItemDefinition#allowContentOf `allowContentOf`} &ndash; Inherits "allowed children" from other items.
 * * {@link ~SchemaItemDefinition#allowWhere `allowWhere`} &ndash; Inherits "allowed in" from other items.
 * * {@link ~SchemaItemDefinition#allowAttributesOf `allowAttributesOf`} &ndash; Inherits attributes from other items.
 * * {@link ~SchemaItemDefinition#inheritTypesFrom `inheritTypesFrom`} &ndash; Inherits `is*` properties of other items.
 * * {@link ~SchemaItemDefinition#inheritAllFrom `inheritAllFrom`} &ndash;
 * A shorthand for `allowContentOf`, `allowWhere`, `allowAttributesOf`, `inheritTypesFrom`.
 *
 * # The `is*` properties
 *
 * There are a couple commonly used `is*` properties. Their role is to assign additional semantics to schema items.
 * You can define more properties but you will also need to implement support for them in the existing editor features.
 *
 * * {@link ~SchemaItemDefinition#isBlock `isBlock`} &ndash; Whether this item is paragraph-like.
 * Generally speaking, content is usually made out of blocks like paragraphs, list items, images, headings, etc.
 * * {@link ~SchemaItemDefinition#isInline `isInline`} &ndash; Whether an item is "text-like" and should be treated as an inline node.
 * Examples of inline elements: `$text`, `softBreak` (`<br>`), etc.
 * * {@link ~SchemaItemDefinition#isLimit `isLimit`} &ndash; It can be understood as whether this element
 * should not be split by <kbd>Enter</kbd>. Examples of limit elements: `$root`, table cell, image caption, etc.
 * In other words, all actions that happen inside a limit element are limited to its content.
 * All objects are treated as limit elements, too.
 * * {@link ~SchemaItemDefinition#isObject `isObject`} &ndash; Whether an item is "self-contained" and should be treated as a whole.
 * Examples of object elements: `image`, `table`, `video`, etc. An object is also a limit, so
 * {@link module:engine/model/schema~Schema#isLimit `isLimit()`} returns `true` for object elements automatically.
 *
 * Read more about the meaning of these types in the
 * {@glink framework/guides/deep-dive/schema#defining-additional-semantics dedicated section of the Schema deep dive} guide.
 *
 * # Generic items
 *
 * There are three basic generic items: `$root`, `$block` and `$text`.
 * They are defined as follows:
 *
 *        this.schema.register( '$root', {
 *            isLimit: true
 *        } );
 *        this.schema.register( '$block', {
 *            allowIn: '$root',
 *            isBlock: true
 *        } );
 *        this.schema.register( '$text', {
 *            allowIn: '$block',
 *            isInline: true
 *        } );
 *
 * They reflect typical editor content that is contained within one root, consists of several blocks
 * (paragraphs, lists items, headings, images) which, in turn, may contain text inside.
 *
 * By inheriting from the generic items you can define new items which will get extended by other editor features.
 * Read more about generic types in the {@glink framework/guides/deep-dive/schema Schema deep dive} guide.
 *
 * # Example definitions
 *
 * Allow `paragraph` in roots and block quotes:
 *
 *        schema.register( 'paragraph', {
 *            allowIn: [ '$root', 'blockQuote' ],
 *            isBlock: true
 *        } );
 *
 * Allow `paragraph` everywhere where `$block` is allowed (i.e. in `$root`):
 *
 *        schema.register( 'paragraph', {
 *            allowWhere: '$block',
 *            isBlock: true
 *        } );
 *
 * Make `image` a block object, which is allowed everywhere where `$block` is.
 * Also, allow `src` and `alt` attributes in it:
 *
 *        schema.register( 'image', {
 *            allowWhere: '$block',
 *            allowAttributes: [ 'src', 'alt' ],
 *            isBlock: true,
 *            isObject: true
 *        } );
 *
 * Make `caption` allowed in `image` and make it allow all the content of `$block`s (usually, `$text`).
 * Also, mark it as a limit element so it cannot be split:
 *
 *        schema.register( 'caption', {
 *            allowIn: 'image',
 *            allowContentOf: '$block',
 *            isLimit: true
 *        } );
 *
 * Make `listItem` inherit all from `$block` but also allow additional attributes:
 *
 *        schema.register( 'listItem', {
 *            inheritAllFrom: '$block',
 *            allowAttributes: [ 'listType', 'listIndent' ]
 *        } );
 *
 * Which translates to:
 *
 *        schema.register( 'listItem', {
 *            allowWhere: '$block',
 *            allowContentOf: '$block',
 *            allowAttributesOf: '$block',
 *            inheritTypesFrom: '$block',
 *            allowAttributes: [ 'listType', 'listIndent' ]
 *        } );
 *
 * # Tips
 *
 * * Check schema definitions of existing features to see how they are defined.
 * * If you want to publish your feature so other developers can use it, try to use
 * generic items as much as possible.
 * * Keep your model clean. Limit it to the actual data and store information in a normalized way.
 * * Remember about defining the `is*` properties. They do not affect the allowed structures, but they can
 * affect how the editor features treat your elements.
 */

interface SchemaItemDefinition {
    allowIn?: string | string[];
    allowAttributes?: string | string[];
    allowContentOf?: string | string[];
    allowWhere?: string | string[];
    allowAttributesOf?: string | string[];
    inheritTypesFrom?: string | string[];
    inheritAllFrom?: string;
    isBlock?: boolean;
    isInline?: boolean;
    isLimit?: boolean;
    isObject?: boolean;
    isSelectable?: boolean;
    isContent?: boolean;
}

/**
 * A simplified version of {@link module:engine/model/schema~SchemaItemDefinition} after
 * compilation by the {@link module:engine/model/schema~Schema schema}.
 * Rules fed to the schema by {@link module:engine/model/schema~Schema#register}
 * and {@link module:engine/model/schema~Schema#extend} methods are defined in the
 * {@link module:engine/model/schema~SchemaItemDefinition} format.
 * Later on, they are compiled to `SchemaCompiledItemDefinition` so when you use e.g.
 * the {@link module:engine/model/schema~Schema#getDefinition} method you get the compiled version.
 *
 * The compiled version contains only the following properties:
 *
 * * The `name` property,
 * * The `is*` properties,
 * * The `allowIn` array,
 * * The `allowAttributes` array.
 */
interface SchemaCompiledItemDefinition {
    name: string;
    isBlock: boolean;
    isInline: boolean;
    isLimit: boolean;
    isObject: boolean;
    isSelectable: boolean;
    isContent: boolean;
    allowIn: string[];
    allowAttributes: string[];
}

/**
 * An item of the {@link module:engine/model/schema~SchemaContext schema context}.
 *
 * It contains 3 properties:
 *
 * * `name` – the name of this item,
 * * `* getAttributeKeys()` – a generator of keys of item attributes,
 * * `getAttribute( keyName )` – a method to get attribute values.
 *
 * The context item interface is a highly simplified version of {@link module:engine/model/node~Node} and its role
 * is to expose only the information which schema checks are able to provide (which is the name of the node and
 * node's attributes).
 *
 *        schema.on( 'checkChild', ( evt, args ) => {
 *            const ctx = args[ 0 ];
 *            const firstItem = ctx.getItem( 0 );
 *
 *            console.log( firstItem.name ); // -> '$root'
 *            console.log( firstItem.getAttribute( 'foo' ) ); // -> 'bar'
 *            console.log( Array.from( firstItem.getAttributeKeys() ) ); // -> [ 'foo', 'faa' ]
 *        } );
 */

interface SchemaContextItem {
    name: string;
    getAttribute(key: string): unknown;
    getAttributeKeys(): Iterator<string>;
}

/**
 * The definition of a {@link module:engine/model/schema~SchemaContext schema context}.
 *
 * Contexts can be created in multiple ways:
 *
 * * By defining a **node** – in this cases this node and all its ancestors will be used.
 * * By defining a **position** in the document – in this case all its ancestors will be used.
 * * By defining an **array of nodes** – in this case this array defines the entire context.
 * * By defining a **name of node** - in this case node will be "mocked". It is not recommended because context
 * will be unrealistic (e.g. attributes of these nodes are not specified). However, at times this may be the only
 * way to define the context (e.g. when checking some hypothetical situation).
 * * By defining an **array of node names** (potentially, mixed with real nodes) – The same as **name of node**
 * but it is possible to create a path.
 * * By defining a {@link module:engine/model/schema~SchemaContext} instance - in this case the same instance as provided
 * will be return.
 *
 * Examples of context definitions passed to the {@link module:engine/model/schema~Schema#checkChild `Schema#checkChild()`}
 * method:
 *
 *        // Assuming that we have a $root > blockQuote > paragraph structure, the following code
 *        // will check node 'foo' in the following context:
 *        // [ rootElement, blockQuoteElement, paragraphElement ]
 *        const contextDefinition = paragraphElement;
 *         const childToCheck = 'foo';
 *        schema.checkChild( contextDefinition, childToCheck );
 *
 *        // Also check in [ rootElement, blockQuoteElement, paragraphElement ].
 *        schema.checkChild( model.createPositionAt( paragraphElement, 0 ), 'foo' );
 *
 *        // Check in [ rootElement, paragraphElement ].
 *        schema.checkChild( [ rootElement, paragraphElement ], 'foo' );
 *
 *        // Check only fakeParagraphElement.
 *        schema.checkChild( 'paragraph', 'foo' );
 *
 *        // Check in [ fakeRootElement, fakeBarElement, paragraphElement ].
 *        schema.checkChild( [ '$root', 'bar', paragraphElement ], 'foo' );
 *
 * All these `checkChild()` calls will fire {@link module:engine/model/schema~Schema#event:checkChild `Schema#checkChild`}
 * events in which `args[ 0 ]` is an instance of the context. Therefore, you can write a listener like this:
 *
 *        schema.on( 'checkChild', ( evt, args ) => {
 *            const ctx = args[ 0 ];
 *
 *            console.log( Array.from( ctx.getNames() ) );
 *        } );
 *
 * Which will log the following:
 *
 *        [ '$root', 'blockQuote', 'paragraph' ]
 *        [ '$root', 'paragraph' ]
 *        [ '$root', 'bar', 'paragraph' ]
 *
 * Note: When using the {@link module:engine/model/schema~Schema#checkAttribute `Schema#checkAttribute()`} method
 * you may want to check whether a text node may have an attribute. A {@link module:engine/model/text~Text} is a
 * correct way to define a context so you can do this:
 *
 *        schema.checkAttribute( textNode, 'bold' );
 *
 * But sometimes you want to check whether a text at a given position might've had some attribute,
 * in which case you can create a context by mixing in an array of elements with a `'$text'` string:
 *
 *        // Check in [ rootElement, paragraphElement, textNode ].
 *        schema.checkChild( [ ...positionInParagraph.getAncestors(), '$text' ], 'bold' );
 */

export type SchemaContextDefinition = Node | Position | SchemaContext | string | Node[];

/**
 * A structure containing additional metadata describing the attribute.
 *
 * See {@link module:engine/model/schema~Schema#setAttributeProperties `Schema#setAttributeProperties()`} for usage examples.
 */
interface AttributeProperties {
    isFormatting?: boolean;
    copyOnEnter?: boolean;
}

/**
 * The model's schema. It defines allowed and disallowed structures of nodes as well as nodes' attributes.
 * The schema is usually defined by features and based on them the editing framework and features
 * make decisions how to change and process the model.
 *
 * The instance of schema is available in {@link module:engine/model/model~Model#schema `editor.model.schema`}.
 *
 * Read more about the schema in:
 *
 * * {@glink framework/guides/architecture/editing-engine#schema Schema} section of the
 * {@glink framework/guides/architecture/editing-engine Introduction to the Editing engine architecture}.
 * * {@glink framework/guides/deep-dive/schema Schema deep dive} guide.
 */
export default class Schema extends Observable {
    /**
     * Creates schema instance.
     */
    constructor();
    /**
     * Registers schema item. Can only be called once for every item name.
     *
     *        schema.register( 'paragraph', {
     *            inheritAllFrom: '$block'
     *        } );
     */
    register(itemName: string, definition: SchemaItemDefinition): void;
    /**
     * Extends a {@link #register registered} item's definition.
     *
     * Extending properties such as `allowIn` will add more items to the existing properties,
     * while redefining properties such as `isBlock` will override the previously defined ones.
     *
     *        schema.register( 'foo', {
     *            allowIn: '$root',
     *            isBlock: true;
     *        } );
     *        schema.extend( 'foo', {
     *            allowIn: 'blockQuote',
     *            isBlock: false
     *        } );
     *
     *        schema.getDefinition( 'foo' );
     *        //    {
     *        //        allowIn: [ '$root', 'blockQuote' ],
     *        //         isBlock: false
     *        //    }
     */
    extend(itemName: string, definition: SchemaItemDefinition): void;
    /**
     * Returns data of all registered items.
     *
     * This method should normally be used for reflection purposes (e.g. defining a clone of a certain element,
     * checking a list of all block elements, etc).
     * Use specific methods (such as {@link #checkChild `checkChild()`} or {@link #isLimit `isLimit()`})
     * in other cases.
     */
    getDefinitions(): Record<string, SchemaCompiledItemDefinition>;
    /**
     * Returns a definition of the given item or `undefined` if an item is not registered.
     *
     * This method should normally be used for reflection purposes (e.g. defining a clone of a certain element,
     * checking a list of all block elements, etc).
     * Use specific methods (such as {@link #checkChild `checkChild()`} or {@link #isLimit `isLimit()`})
     * in other cases.
     */
    getDefinition(item: SchemaContextItem | string): SchemaCompiledItemDefinition;
    /**
     * Returns `true` if the given item is registered in the schema.
     *
     *        schema.isRegistered( 'paragraph' ); // -> true
     *        schema.isRegistered( editor.model.document.getRoot() ); // -> true
     *        schema.isRegistered( 'foo' ); // -> false
     */
    isRegistered(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item is defined to be
     * a block by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isBlock` property.
     *
     *        schema.isBlock( 'paragraph' ); // -> true
     *        schema.isBlock( '$root' ); // -> false
     *
     *        const paragraphElement = writer.createElement( 'paragraph' );
     *        schema.isBlock( paragraphElement ); // -> true
     *
     * See the {@glink framework/guides/deep-dive/schema#block-elements Block elements} section of the Schema deep dive
     * guide for more details.
     */
    isBlock(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item should be treated as a limit element.
     *
     * It considers an item to be a limit element if its
     * {@link module:engine/model/schema~SchemaItemDefinition}'s
     * {@link module:engine/model/schema~SchemaItemDefinition#isLimit `isLimit`} or
     * {@link module:engine/model/schema~SchemaItemDefinition#isObject `isObject`} property
     * was set to `true`.
     *
     *        schema.isLimit( 'paragraph' ); // -> false
     *        schema.isLimit( '$root' ); // -> true
     *        schema.isLimit( editor.model.document.getRoot() ); // -> true
     *        schema.isLimit( 'image' ); // -> true
     *
     * See the {@glink framework/guides/deep-dive/schema#limit-elements Limit elements} section of the Schema deep dive
     * guide for more details.
     */
    isLimit(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item should be treated as an object element.
     *
     * It considers an item to be an object element if its
     * {@link module:engine/model/schema~SchemaItemDefinition}'s
     * {@link module:engine/model/schema~SchemaItemDefinition#isObject `isObject`} property
     * was set to `true`.
     *
     *        schema.isObject( 'paragraph' ); // -> false
     *        schema.isObject( 'image' ); // -> true
     *
     *        const imageElement = writer.createElement( 'image' );
     *        schema.isObject( imageElement ); // -> true
     *
     * See the {@glink framework/guides/deep-dive/schema#object-elements Object elements} section of the Schema deep dive
     * guide for more details.
     */
    isObject(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item is defined to be
     * an inline element by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isInline` property.
     *
     *        schema.isInline( 'paragraph' ); // -> false
     *        schema.isInline( 'softBreak' ); // -> true
     *
     *        const text = writer.createText( 'foo' );
     *        schema.isInline( text ); // -> true
     *
     * See the {@glink framework/guides/deep-dive/schema#inline-elements Inline elements} section of the Schema deep dive
     * guide for more details.
     */
    isInline(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item is defined to be
     * a selectable element by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isSelectable` property.
     *
     *        schema.isSelectable( 'paragraph' ); // -> false
     *        schema.isSelectable( 'heading1' ); // -> false
     *        schema.isSelectable( 'image' ); // -> true
     *        schema.isSelectable( 'tableCell' ); // -> true
     *
     *        const text = writer.createText( 'foo' );
     *        schema.isSelectable( text ); // -> false
     *
     * See the {@glink framework/guides/deep-dive/schema#selectable-elements Selectable elements} section of the Schema deep dive}
     * guide for more details.
     */
    isSelectable(item: SchemaContextItem | string): boolean;
    /**
     * Returns `true` if the given item is defined to be
     * a content by the {@link module:engine/model/schema~SchemaItemDefinition}'s `isContent` property.
     *
     *        schema.isContent( 'paragraph' ); // -> false
     *        schema.isContent( 'heading1' ); // -> false
     *        schema.isContent( 'image' ); // -> true
     *        schema.isContent( 'horizontalLine' ); // -> true
     *
     *        const text = writer.createText( 'foo' );
     *        schema.isContent( text ); // -> true
     *
     * See the {@glink framework/guides/deep-dive/schema#content-elements Content elements} section of the Schema deep dive}
     * guide for more details.
     */
    isContent(item: SchemaContextItem | string): boolean;
    /**
     * Checks whether the given node (`child`) can be a child of the given context.
     *
     *        schema.checkChild( model.document.getRoot(), paragraph ); // -> false
     *
     *        schema.register( 'paragraph', {
     *            allowIn: '$root'
     *        } );
     *        schema.checkChild( model.document.getRoot(), paragraph ); // -> true
     *
     * Note: When verifying whether the given node can be a child of the given context, the
     * schema also verifies the entire context &mdash; from its root to its last element. Therefore, it is possible
     * for `checkChild()` to return `false` even though the context's last element can contain the checked child.
     * It happens if one of the context's elements does not allow its child.
     *
     * @fires checkChild
     */
    checkChild(context: SchemaContextDefinition, def: Node | string): boolean;
    /**
     * Checks whether the given attribute can be applied in the given context (on the last
     * item of the context).
     *
     *        schema.checkAttribute( textNode, 'bold' ); // -> false
     *
     *        schema.extend( '$text', {
     *            allowAttributes: 'bold'
     *        } );
     *        schema.checkAttribute( textNode, 'bold' ); // -> true
     *
     * @fires checkAttribute
     */
    checkAttribute(context: SchemaContextDefinition, attributeName: string): boolean;
    /**
     * Checks whether the given element (`elementToMerge`) can be merged with the specified base element (`positionOrBaseElement`).
     *
     * In other words &mdash; whether `elementToMerge`'s children {@link #checkChild are allowed} in the `positionOrBaseElement`.
     *
     * This check ensures that elements merged with {@link module:engine/model/writer~Writer#merge `Writer#merge()`}
     * will be valid.
     *
     * Instead of elements, you can pass the instance of the {@link module:engine/model/position~Position} class as the
     * `positionOrBaseElement`. It means that the elements before and after the position will be checked whether they can be merged.
     *
     */
    checkMerge(positionOrBaseElement: Position, elementToMerge?: null): boolean;
    checkMerge(positionOrBaseElement: Element, elementToMerge: Element): boolean;
    /**
     * Allows registering a callback to the {@link #checkChild} method calls.
     *
     * Callbacks allow you to implement rules which are not otherwise possible to achieve
     * by using the declarative API of {@link module:engine/model/schema~SchemaItemDefinition}.
     * For example, by using this method you can disallow elements in specific contexts.
     *
     * This method is a shorthand for using the {@link #event:checkChild} event. For even better control,
     * you can use that event instead.
     *
     * Example:
     *
     *        // Disallow heading1 directly inside a blockQuote.
     *        schema.addChildCheck( ( context, childDefinition ) => {
     *            if ( context.endsWith( 'blockQuote' ) && childDefinition.name == 'heading1' ) {
     *                return false;
     *            }
     *        } );
     *
     * Which translates to:
     *
     *        schema.on( 'checkChild', ( evt, args ) => {
     *            const context = args[ 0 ];
     *            const childDefinition = args[ 1 ];
     *
     *            if ( context.endsWith( 'blockQuote' ) && childDefinition && childDefinition.name == 'heading1' ) {
     *                // Prevent next listeners from being called.
     *                evt.stop();
     *                // Set the checkChild()'s return value.
     *                evt.return = false;
     *            }
     *        }, { priority: 'high' } );
     *
     */
    addChildCheck(callback: (context: SchemaContext, def: SchemaCompiledItemDefinition) => boolean): void;
    /**
     * Allows registering a callback to the {@link #checkAttribute} method calls.
     *
     * Callbacks allow you to implement rules which are not otherwise possible to achieve
     * by using the declarative API of {@link module:engine/model/schema~SchemaItemDefinition}.
     * For example, by using this method you can disallow attribute if node to which it is applied
     * is contained within some other element (e.g. you want to disallow `bold` on `$text` within `heading1`).
     *
     * This method is a shorthand for using the {@link #event:checkAttribute} event. For even better control,
     * you can use that event instead.
     *
     * Example:
     *
     *        // Disallow bold on $text inside heading1.
     *        schema.addAttributeCheck( ( context, attributeName ) => {
     *            if ( context.endsWith( 'heading1 $text' ) && attributeName == 'bold' ) {
     *                return false;
     *            }
     *        } );
     *
     * Which translates to:
     *
     *        schema.on( 'checkAttribute', ( evt, args ) => {
     *            const context = args[ 0 ];
     *            const attributeName = args[ 1 ];
     *
     *            if ( context.endsWith( 'heading1 $text' ) && attributeName == 'bold' ) {
     *                // Prevent next listeners from being called.
     *                evt.stop();
     *                // Set the checkAttribute()'s return value.
     *                evt.return = false;
     *            }
     *        }, { priority: 'high' } );
     */
    addAttributeCheck(callback: (context: SchemaContext, name: string) => boolean): void;
    /**
     * This method allows assigning additional metadata to the model attributes. For example,
     * {@link module:engine/model/schema~AttributeProperties `AttributeProperties#isFormatting` property} is
     * used to mark formatting attributes (like `bold` or `italic`).
     *
     *        // Mark bold as a formatting attribute.
     *        schema.setAttributeProperties( 'bold', {
     *            isFormatting: true
     *        } );
     *
     *        // Override code not to be considered a formatting markup.
     *        schema.setAttributeProperties( 'code', {
     *            isFormatting: false
     *        } );
     *
     * Properties are not limited to members defined in the
     * {@link module:engine/model/schema~AttributeProperties `AttributeProperties` type} and you can also use custom properties:
     *
     *        schema.setAttributeProperties( 'blockQuote', {
     *            customProperty: 'value'
     *        } );
     *
     * Subsequent calls with the same attribute will extend its custom properties:
     *
     *        schema.setAttributeProperties( 'blockQuote', {
     *            one: 1
     *        } );
     *
     *        schema.setAttributeProperties( 'blockQuote', {
     *            two: 2
     *        } );
     *
     *        console.log( schema.getAttributeProperties( 'blockQuote' ) );
     *        // Logs: { one: 1, two: 2 }
     */
    setAttributeProperties(attributeName: string, properties: AttributeProperties): void;
    /**
     * Returns properties associated with a given model attribute. See {@link #setAttributeProperties `setAttributeProperties()`}.
     */
    getAttributeProperties(attributeName: string): AttributeProperties;
    /**
     * Returns the lowest {@link module:engine/model/schema~Schema#isLimit limit element} containing the entire
     * selection/range/position or the root otherwise.
     */
    getLimitElement(selectionOrRangeOrPosition: Selection | Range | Position): Element;
    /**
     * Checks whether the attribute is allowed in selection:
     *
     * * if the selection is not collapsed, then checks if the attribute is allowed on any of nodes in that range,
     * * if the selection is collapsed, then checks if on the selection position there's a text with the
     * specified attribute allowed.
     */
    checkAttributeInSelection(selection: Selection | DocumentSelection, attribute: string): boolean;
    /**
     * Transforms the given set of ranges into a set of ranges where the given attribute is allowed (and can be applied).
     */
    getValidRanges(ranges: Range[], attribute: string): Iterable<Range>;
    /**
     * Basing on given `position`, finds and returns a {@link module:engine/model/range~Range range} which is
     * nearest to that `position` and is a correct range for selection.
     *
     * The correct selection range might be collapsed when it is located in a position where the text node can be placed.
     * Non-collapsed range is returned when selection can be placed around element marked as an "object" in
     * the {@link module:engine/model/schema~Schema schema}.
     *
     * Direction of searching for the nearest correct selection range can be specified as:
     *
     * * `both` - searching will be performed in both ways,
     * * `forward` - searching will be performed only forward,
     * * `backward` - searching will be performed only backward.
     *
     * When valid selection range cannot be found, `null` is returned.
     */
    getNearestSelectionRange(position: Position, direction?: "both" | "forward" | "backward"): Range | null;
    /**
     * Tries to find position ancestors that allow to insert a given node.
     * It starts searching from the given position and goes node by node to the top of the model tree
     * as long as a {@link module:engine/model/schema~Schema#isLimit limit element}, an
     * {@link module:engine/model/schema~Schema#isObject object element} or a topmost ancestor is not reached.
     */
    findAllowedParent(position: Position, node: Node | string): Element | null;
    /**
     * Removes attributes disallowed by the schema.
     */
    removeDisallowedAttributes(nodes: Iterable<Node>, writer: Writer): void;
    /**
     * Creates an instance of the schema context.
     */
    createContext(context: SchemaContextDefinition): SchemaContext;
}

/**
 * A schema context &mdash; a list of ancestors of a given position in the document.
 *
 * Considering such position:
 *
 *        <$root>
 *            <blockQuote>
 *                <paragraph>
 *                    ^
 *                </paragraph>
 *            </blockQuote>
 *        </$root>
 *
 * The context of this position is its {@link module:engine/model/position~Position#getAncestors lists of ancestors}:
 *
 *        [ rootElement, blockQuoteElement, paragraphElement ]
 *
 * Contexts are used in the {@link module:engine/model/schema~Schema#event:checkChild `Schema#checkChild`} and
 * {@link module:engine/model/schema~Schema#event:checkAttribute `Schema#checkAttribute`} events as a definition
 * of a place in the document where the check occurs. The context instances are created based on the first arguments
 * of the {@link module:engine/model/schema~Schema#checkChild `Schema#checkChild()`} and
 * {@link module:engine/model/schema~Schema#checkAttribute `Schema#checkAttribute()`} methods so when
 * using these methods you need to use {@link module:engine/model/schema~SchemaContextDefinition}s.
 */
export class SchemaContext implements Iterable<SchemaContextItem> {
    /**
     * Creates an instance of the context.
     */
    constructor(context: SchemaContextDefinition);
    /**
     * The number of items.
     */
    readonly length: number;
    /**
     * The last item (the lowest node).
     */
    readonly last: SchemaContextItem;
    /**
     * Iterable interface.
     *
     * Iterates over all context items.
     */
    [Symbol.iterator](): Iterator<SchemaContextItem>;
    /**
     * Returns a new schema context instance with an additional item.
     *
     * Item can be added as:
     *
     *         const context = new SchemaContext( [ '$root' ] );
     *
     *         // An element.
     *         const fooElement = writer.createElement( 'fooElement' );
     *         const newContext = context.push( fooElement ); // [ '$root', 'fooElement' ]
     *
     *         // A text node.
     *         const text = writer.createText( 'foobar' );
     *         const newContext = context.push( text ); // [ '$root', '$text' ]
     *
     *         // A string (element name).
     *         const newContext = context.push( 'barElement' ); // [ '$root', 'barElement' ]
     *
     * **Note** {@link module:engine/model/node~Node} that is already in the model tree will be added as the only item
     * (without ancestors).
     */
    push(item: string | Node | Array<string | Node>): SchemaContext;
    /**
     * Gets an item on the given index.
     */
    getItem(index: number): SchemaContextItem;
    /**
     * Returns the names of items.
     */
    getNames(): Iterable<string>;
    /**
     * Checks whether the context ends with the given nodes.
     *
     *        const ctx = new SchemaContext( [ rootElement, paragraphElement, textNode ] );
     *
     *        ctx.endsWith( '$text' ); // -> true
     *        ctx.endsWith( 'paragraph $text' ); // -> true
     *        ctx.endsWith( '$root' ); // -> false
     *        ctx.endsWith( 'paragraph' ); // -> false
     */
    endsWith(query: string): boolean;
    /**
     * Checks whether the context starts with the given nodes.
     *
     *        const ctx = new SchemaContext( [ rootElement, paragraphElement, textNode ] );
     *
     *        ctx.endsWith( '$root' ); // -> true
     *        ctx.endsWith( '$root paragraph' ); // -> true
     *        ctx.endsWith( '$text' ); // -> false
     *        ctx.endsWith( 'paragraph' ); // -> false
     */
    startsWith(query: string): boolean;
}

export {};
