import ViewDocument from "./document";
import ViewDocumentFragment from "./documentfragment";
import ViewNode from "./node";
import ViewText from "./text";

/**
 * TextProxy is a wrapper for substring of {@link module:engine/view/text~Text}. Instance of this class is created by
 * {@link module:engine/view/treewalker~TreeWalker} when only a part of {@link module:engine/view/text~Text} needs to be returned.
 *
 * `TextProxy` has an API similar to {@link module:engine/view/text~Text Text} and allows to do most of the common tasks performed
 * on view nodes.
 *
 * **Note:** Some `TextProxy` instances may represent whole text node, not just a part of it.
 * See {@link module:engine/view/textproxy~TextProxy#isPartial}.
 *
 * **Note:** `TextProxy` is a readonly interface.
 *
 * **Note:** `TextProxy` instances are created on the fly basing on the current state of parent {@link module:engine/view/text~Text}.
 * Because of this it is highly unrecommended to store references to `TextProxy instances because they might get
 * invalidated due to operations on Document. Also TextProxy is not a {@link module:engine/view/node~Node} so it can not be
 * inserted as a child of {@link module:engine/view/element~Element}.
 *
 * `TextProxy` instances are created by {@link module:engine/view/treewalker~TreeWalker view tree walker}. You should not need to create
 * an instance of this class by your own.
 */
export default class TextProxy {
    /**
     * Creates a text proxy.
     */
    constructor(textNode: ViewText, offsetInText: number, length: number);
    readonly textNode: ViewText;
    readonly data: string;
    readonly offsetInText: number;

    /**
     * Offset size of this node.
     */
    readonly offsetSize: number;

    /**
     * Flag indicating whether `TextProxy` instance covers only part of the original {@link module:engine/view/text~Text text node}
     * (`true`) or the whole text node (`false`).
     *
     * This is `false` when text proxy starts at the very beginning of {@link module:engine/view/textproxy~TextProxy#textNode textNode}
     * ({@link module:engine/view/textproxy~TextProxy#offsetInText offsetInText} equals `0`) and text proxy sizes is equal to
     * text node size.
     */
    readonly isPartial: boolean;

    /**
     * Parent of this text proxy, which is same as parent of text node represented by this text proxy.
     */
    readonly parent: ViewDocumentFragment | null;

    /**
     * Root of this text proxy, which is same as root of text node represented by this text proxy.
     */
    readonly root: ViewNode | ViewDocumentFragment;

    /**
     * {@link module:engine/view/document~Document View document} that owns this text proxy, or `null` if the text proxy is inside
     * {@link module:engine/view/documentfragment~DocumentFragment document fragment}.
     */
    readonly document: ViewDocument | null;

    /**
     * Checks whether this object is of the given type.
     *
     *    textProxy.is( '$textProxy' ); // -> true
     *    textProxy.is( 'view:$textProxy' ); // -> true
     *
     *    textProxy.is( 'model:$textProxy' ); // -> false
     *    textProxy.is( 'element' ); // -> false
     *    textProxy.is( 'range' ); // -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     *
     * **Note:** Until version 20.0.0 this method wasn't accepting `'$textProxy'` type. The legacy `'textProxy'` type is still
     * accepted for backward compatibility.
     */
    is(type: string): boolean;

    /**
     * Returns ancestors array of this text proxy.
     */
    getAncestors(options?: { includeSelf?: boolean; parentFirst?: boolean }): ViewNode[];
}
