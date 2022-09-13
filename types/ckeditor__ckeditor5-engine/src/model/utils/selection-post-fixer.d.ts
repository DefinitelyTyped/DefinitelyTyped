import Model from '../model';
import Range from '../range';

/**
 * Injects selection post-fixer to the model.
 *
 * The role of the selection post-fixer is to ensure that the selection is in a correct place
 * after a {@link module:engine/model/model~Model#change `change()`} block was executed.
 *
 * The correct position means that:
 *
 * * All collapsed selection ranges are in a place where the {@link module:engine/model/schema~Schema}
 * allows a `$text`.
 * * None of the selection's non-collapsed ranges crosses a {@link module:engine/model/schema~Schema#isLimit limit element}
 * boundary (a range must be rooted within one limit element).
 * * Only {@link module:engine/model/schema~Schema#isSelectable selectable elements} can be selected from the outside
 * (e.g. `[<paragraph>foo</paragraph>]` is invalid). This rule applies independently to both selection ends, so this
 * selection is correct: `<paragraph>f[oo</paragraph><imageBlock></imageBlock>]`.
 *
 * If the position is not correct, the post-fixer will automatically correct it.
 *
 * ## Fixing a non-collapsed selection
 *
 * See as an example a selection that starts in a P1 element and ends inside the text of a TD element
 * (`[` and `]` are range boundaries and `(l)` denotes an element defined as `isLimit=true`):
 *
 *    root
 *     |- element P1
 *     |   |- "foo"                                      root
 *     |- element TABLE (l)                   P1         TABLE             P2
 *     |   |- element TR (l)                 f o[o     TR      TR         b a r
 *     |   |   |- element TD (l)                       TD      TD
 *     |   |       |- "aaa"                          a]a a    b b b
 *     |   |- element TR (l)
 *     |   |   |- element TD (l)                           ||
 *     |   |       |- "bbb"                                ||
 *     |- element P2                                       VV
 *     |   |- "bar"
 *                                                       root
 *                                            P1         TABLE]            P2
 *                                           f o[o     TR      TR         b a r
 *                                                     TD      TD
 *                                                   a a a    b b b
 *
 * In the example above, the TABLE, TR and TD are defined as `isLimit=true` in the schema. The range which is not contained within
 * a single limit element must be expanded to select the outermost limit element. The range end is inside the text node of the TD element.
 * As the TD element is a child of the TR and TABLE elements, where both are defined as `isLimit=true` in the schema, the range must be
 * expanded to select the whole TABLE element.
 *
 * **Note** If the selection contains multiple ranges, the method returns a minimal set of ranges that are not intersecting after expanding
 * them to select `isLimit=true` elements.
 */
export function injectSelectionPostFixer(model: Model): void;

/**
 * Returns a minimal non-intersecting array of ranges without duplicates.
 */
export function mergeIntersectingRanges(ranges: Range[]): Range[];
