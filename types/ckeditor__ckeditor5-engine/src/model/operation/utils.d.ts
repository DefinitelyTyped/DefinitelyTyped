import TextProxy from "../textproxy";
import DocumentFragment from "../documentfragment";
import NodeList from "../nodelist";

/**
 * Value that can be normalized to an array of {@link module:engine/model/node~Node nodes}.
 *
 * Non-arrays are normalized as follows:
 * * {@link module:engine/model/node~Node Node} is left as is,
 * * {@link module:engine/model/textproxy~TextProxy TextProxy} and `String` are normalized to {@link module:engine/model/text~Text Text},
 * * {@link module:engine/model/nodelist~NodeList NodeList} is normalized to an array containing all nodes that are in that node list,
 * * {@link module:engine/model/documentfragment~DocumentFragment DocumentFragment} is normalized to an array containing all of it's
 * * children.
 *
 * Arrays are processed item by item like non-array values and flattened to one array. Normalization always results in
 * a flat array of {@link module:engine/model/node~Node nodes}. Consecutive text nodes (or items normalized to text nodes) will be
 * merged if they have same attributes.
 */

export type NodeSet = TextProxy | string | NodeList | DocumentFragment;
