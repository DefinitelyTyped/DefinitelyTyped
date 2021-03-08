import DocumentFragment from "./documentfragment";
import Text from "./text";
/**
 * `TextProxy` represents a part of {@link module:engine/model/text~Text text node}.
 *
 * Since {@link module:engine/model/position~Position positions} can be placed between characters of a text node,
 * {@link module:engine/model/range~Range ranges} may contain only parts of text nodes. When {@link module:engine/model/range~Range#getItems
 * getting items}
 * contained in such range, we need to represent a part of that text node, since returning the whole text node would be incorrect.
 * `TextProxy` solves this issue.
 *
 * `TextProxy` has an API similar to {@link module:engine/model/text~Text Text} and allows to do most of the common tasks performed
 * on model nodes.
 *
 * **Note:** Some `TextProxy` instances may represent whole text node, not just a part of it.
 * See {@link module:engine/model/textproxy~TextProxy#isPartial}.
 *
 * **Note:** `TextProxy` is not an instance of {@link module:engine/model/node~Node node}. Keep this in mind when using it as a
 * parameter of methods.
 *
 * **Note:** `TextProxy` is a readonly interface. If you want to perform changes on model data represented by a `TextProxy`
 * use {@link module:engine/model/writer~Writer model writer API}.
 *
 * **Note:** `TextProxy` instances are created on the fly, basing on the current state of model. Because of this, it is
 * highly unrecommended to store references to `TextProxy` instances. `TextProxy` instances are not refreshed when
 * model changes, so they might get invalidated. Instead, consider creating {@link module:engine/model/liveposition~LivePosition live
 * position}.
 *
 * `TextProxy` instances are created by {@link module:engine/model/treewalker~TreeWalker model tree walker}. You should not need to create
 * an instance of this class by your own.
 */
export default class TextProxy {
    /**
     * Offset at which this text proxy starts in it's parent.
     */
    get startOffset(): number;
    /**
     * Offset size of this text proxy. Equal to the number of characters represented by the text proxy.
     */
    get offsetSize(): number;
    /**
     * Offset at which this text proxy ends in it's parent.
     */
    get endOffset(): number;
    /**
     * Flag indicating whether `TextProxy` instance covers only part of the original {@link module:engine/model/text~Text text node}
     * (`true`) or the whole text node (`false`).
     *
     * This is `false` when text proxy starts at the very beginning of {@link module:engine/model/textproxy~TextProxy#textNode textNode}
     * ({@link module:engine/model/textproxy~TextProxy#offsetInText offsetInText} equals `0`) and text proxy sizes is equal to
     * text node size.
     *
     */
    get isPartial(): boolean;
    /**
     * Parent of this text proxy, which is same as parent of text node represented by this text proxy.
     */
    get parent(): DocumentFragment | null;
    /**
     * Root of this text proxy, which is same as root of text node represented by this text proxy.
     */
    get root(): DocumentFragment;
    /**
     * Checks whether this object is of the given.
     *
     *        textProxy.is( '$textProxy' ); // -> true
     *        textProxy.is( 'model:$textProxy' ); // -> true
     *
     *        textProxy.is( 'view:$textProxy' ); // -> false
     *        textProxy.is( 'range' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     *
     * **Note:** Until version 20.0.0 this method wasn't accepting `'$textProxy'` type. The legacy `'textProxt'` type is still
     * accepted for backward compatibility.
     */
    is(type: string): boolean;
    /**
     * Gets path to this text proxy.
     */
    getPath(): number[];
    /**
     * Returns ancestors array of this text proxy.
     *
     */
    getAncestors(options?: { includeSelf: boolean; parentFirst: boolean }): Node[];
    /**
     * Checks if this text proxy has an attribute for given key.
     */
    hasAttribute(key: string): boolean;
    /**
     * Gets an attribute value for given key or `undefined` if that attribute is not set on text proxy.
     *
     */
    getAttribute(key: string): string | undefined;
    /**
     * Returns iterator that iterates over this node's attributes. Attributes are returned as arrays containing two
     * items. First one is attribute key and second is attribute value.
     *
     * This format is accepted by native `Map` object and also can be passed in `Node` constructor.
     *
     */
    getAttributes(): Iterable<[string, string]>;
    /**
     * Returns iterator that iterates over this node's attribute keys.
     *
     */
    getAttributeKeys(): Iterable<string>;
}
