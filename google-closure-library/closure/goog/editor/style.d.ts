declare module goog {
    function require(name: 'goog.editor.style'): typeof goog.editor.style;
}

declare module goog.editor.style {

    /**
     * Checks whether the given element inherits display: block.
     * @param {!Node} node The Node to check.
     * @return {boolean} Whether the element inherits CSS display: block.
     */
    function isDisplayBlock(node: Node): boolean;

    /**
     * Returns true if the element is a container of other non-inline HTML
     * Note that span, strong and em tags, being inline can only contain
     * other inline elements and are thus, not containers. Containers are elements
     * that should not be broken up when wrapping selections with a node of an
     * inline block styling.
     * @param {Node} element The element to check.
     * @return {boolean} Whether the element is a container.
     */
    function isContainer(element: Node): boolean;

    /**
     * Return the first ancestor of this node that is a container, inclusive.
     * @see isContainer
     * @param {Node} node Node to find the container of.
     * @return {Element} The element which contains node.
     */
    function getContainer(node: Node): Element;

    /**
     * Makes the given element unselectable, as well as all of its children, except
     * for text areas, text, file and url inputs.
     * @param {Element} element The element to make unselectable.
     * @param {goog.events.EventHandler} eventHandler An EventHandler to register
     *     the event with. Assumes when the node is destroyed, the eventHandler's
     *     listeners are destroyed as well.
     */
    function makeUnselectable(element: Element, eventHandler: goog.events.EventHandler<any>): void;

    /**
     * Make the given element selectable.
     *
     * For IE this simply turns off the "unselectable" property.
     *
     * Under FF no descendent of an unselectable node can be selectable:
     *
     * https://bugzilla.mozilla.org/show_bug.cgi?id=203291
     *
     * So we make each ancestor of node selectable, while trying to preserve the
     * unselectability of other nodes along that path
     *
     * This may cause certain text nodes which should be unselectable, to become
     * selectable. For example:
     *
     * <div id=div1 style="-moz-user-select: none">
     *   Text1
     *   <span id=span1>Text2</span>
     * </div>
     *
     * If we call makeSelectable on span1, then it will cause "Text1" to become
     * selectable, since it had to make div1 selectable in order for span1 to be
     * selectable.
     *
     * If "Text1" were enclosed within a <p> or <span>, then this problem would
     * not arise.  Text nodes do not have styles, so its style can't be set to
     * unselectable.
     *
     * @param {Element} element The element to make selectable.
     */
    function makeSelectable(element: Element): void;
}
