import View from "./view";

/**
 * Set of utils related to block and inline fillers handling.
 *
 * Browsers do not allow to put caret in elements which does not have height. Because of it, we need to fill all
 * empty elements which should be selectable with elements or characters called "fillers". Unfortunately there is no one
 * universal filler, this is why two types are uses:
 *
 * * Block filler is an element which fill block elements, like `<p>`. CKEditor uses `<br>` as a block filler during the editing,
 * as browsers do natively. So instead of an empty `<p>` there will be `<p><br></p>`. The advantage of block filler is that
 * it is transparent for the selection, so when the caret is before the `<br>` and user presses right arrow he will be
 * moved to the next paragraph, not after the `<br>`. The disadvantage is that it breaks a block, so it can not be used
 * in the middle of a line of text. The {@link module:engine/view/filler~BR_FILLER `<br>` filler} can be replaced with any other
 * character in the data output, for instance {@link module:engine/view/filler~NBSP_FILLER non-breaking space}.
 *
 * * Inline filler is a filler which does not break a line of text, so it can be used inside the text, for instance in the empty
 * `<b>` surrendered by text: `foo<b></b>bar`, if we want to put the caret there. CKEditor uses a sequence of the zero-width
 * spaces as an {@link module:engine/view/filler~INLINE_FILLER inline filler} having the predetermined
 * {@link module:engine/view/filler~INLINE_FILLER_LENGTH length}. A sequence is used, instead of a single character to
 * avoid treating random zero-width spaces as the inline filler. Disadvantage of the inline filler is that it is not
 * transparent for the selection. The arrow key moves the caret between zero-width spaces characters, so the additional
 * code is needed to handle the caret.
 *
 * Both inline and block fillers are handled by the {@link module:engine/view/renderer~Renderer renderer} and are not present in the
 * view.
 *
 * @module engine/view/filler
 */

/**
 * Non-breaking space filler creator. This is a function which creates `&nbsp;` text node.
 * It defines how the filler is created.
 *
 * @see module:engine/view/filler~BR_FILLER
 */

export function NBSP_FILLER(domDocument: Document): Text;

/**
 * `<br>` filler creator. This is a function which creates `<br data-cke-filler="true">` element.
 * It defines how the filler is created.
 *
 * @see module:engine/view/filler~NBSP_FILLER
 */
export function BR_FILLER(domDocument: Document): HTMLBRElement;

/**
 * Length of the {@link module:engine/view/filler~INLINE_FILLER INLINE_FILLER}.
 */
export const INLINE_FILLER_LENGTH = 7;

/**
 * Inline filler which is a sequence of the zero width spaces.
 *
 * @type {String}
 */
export const INLINE_FILLER: string;

/**
 * Checks if the node is a text node which starts with the {@link module:engine/view/filler~INLINE_FILLER inline filler}.
 *
 *        startsWithFiller( document.createTextNode( INLINE_FILLER ) ); // true
 *        startsWithFiller( document.createTextNode( INLINE_FILLER + 'foo' ) ); // true
 *        startsWithFiller( document.createTextNode( 'foo' ) ); // false
 *        startsWithFiller( document.createElement( 'p' ) ); // false
 */
export function startsWithFiller(domNode: Node): boolean;

/**
 * Checks if the text node contains only the {@link module:engine/view/filler~INLINE_FILLER inline filler}.
 *
 *        isInlineFiller( document.createTextNode( INLINE_FILLER ) ); // true
 *        isInlineFiller( document.createTextNode( INLINE_FILLER + 'foo' ) ); // false
 */
export function isInlineFiller(domText: Text): void;

/**
 * Get string data from the text node, removing an {@link module:engine/view/filler~INLINE_FILLER inline filler} from it,
 * if text node contains it.
 *
 *        getDataWithoutFiller( document.createTextNode( INLINE_FILLER + 'foo' ) ) == 'foo' // true
 *        getDataWithoutFiller( document.createTextNode( 'foo' ) ) == 'foo' // true
 *
 * @param {Text} domText DOM text node, possible with inline filler.
 * @returns {String} Data without filler.
 */
export function getDataWithoutFiller(domText: Text): string;

/**
 * Assign key observer which move cursor from the end of the inline filler to the beginning of it when
 * the left arrow is pressed, so the filler does not break navigation.
 */
export function injectQuirksHandling(view: View): void;
