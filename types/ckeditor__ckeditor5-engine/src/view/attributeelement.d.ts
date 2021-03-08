import Element from "./element";

/**
 * Attribute elements are used to represent formatting elements in the view (think – `<b>`, `<span style="font-size: 2em">`, etc.).
 * Most often they are created when downcasting model text attributes.
 *
 * Editing engine does not define a fixed HTML DTD. This is why a feature developer needs to choose between various
 * types (container element, {@link module:engine/view/attributeelement~AttributeElement attribute element},
 * {@link module:engine/view/emptyelement~EmptyElement empty element}, etc) when developing a feature.
 *
 * To create a new attribute element instance use the
 * {@link module:engine/view/downcastwriter~DowncastWriter#createAttributeElement `DowncastWriter#createAttributeElement()`} method.
 */
export default class AttributeElement extends Element {
    /**
     * Returns block {@link module:engine/view/filler filler} offset or `null` if block filler is not needed.
     */
    getFillerOffset(): number | null;

    /**
     * Element priority. Decides in what order elements are wrapped by {@link module:engine/view/downcastwriter~DowncastWriter}.
     */
    readonly priority: number;

    /**
     * Element identifier. If set, it is used by {@link module:engine/view/element~Element#isSimilar},
     * and then two elements are considered similar if, and only if they have the same `id`.
     */
    readonly id: string | number;

    /**
     * Returns all {@link module:engine/view/attributeelement~AttributeElement attribute elements} that has the
     * same {@link module:engine/view/attributeelement~AttributeElement#id id} and are in the view tree (were not removed).
     *
     * Note: If this element has been removed from the tree, returned set will not include it.
     *
     * Throws {@link module:utils/ckeditorerror~CKEditorError attribute-element-get-elements-with-same-id-no-id}
     * if this element has no `id`.
     */
    getElementsWithSameId(): Set<AttributeElement>;

    /**
     * Checks whether this object is of the given.
     *
     *        attributeElement.is( 'attributeElement' ); // -> true
     *        attributeElement.is( 'element' ); // -> true
     *        attributeElement.is( 'node' ); // -> true
     *        attributeElement.is( 'view:attributeElement' ); // -> true
     *        attributeElement.is( 'view:element' ); // -> true
     *        attributeElement.is( 'view:node' ); // -> true
     *
     *        attributeElement.is( 'model:element' ); // -> false
     *        attributeElement.is( 'documentFragment' ); // -> false
     *
     * Assuming that the object being checked is an attribute element, you can also check its
     * {@link module:engine/view/attributeelement~AttributeElement#name name}:
     *
     *        attributeElement.is( 'element', 'b' ); // -> true if this is a bold element
     *        attributeElement.is( 'attributeElement', 'b' ); // -> same as above
     *        text.is( 'element', 'b' ); -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     *
     * @param {String} type Type to check.
     * @param {String} [name] Element name.
     * @returns {Boolean}
     */
    is(type: string, name?: string): boolean;

    /**
     * Checks if this element is similar to other element.
     *
     * If none of elements has set {@link module:engine/view/attributeelement~AttributeElement#id}, then both elements
     * should have the same name, attributes and priority to be considered as similar. Two similar elements can contain
     * different set of children nodes.
     *
     * If at least one element has {@link module:engine/view/attributeelement~AttributeElement#id} set, then both
     * elements have to have the same {@link module:engine/view/attributeelement~AttributeElement#id} value to be
     * considered similar.
     *
     * Similarity is important for {@link module:engine/view/downcastwriter~DowncastWriter}. For example:
     *
     * * two following similar elements can be merged together into one, longer element,
     * * {@link module:engine/view/downcastwriter~DowncastWriter#unwrap} checks similarity of passed element and processed element to
     * decide whether processed element should be unwrapped,
     * * etc.
     *
     */
    isSimilar(otherElement: Element): boolean;
}
