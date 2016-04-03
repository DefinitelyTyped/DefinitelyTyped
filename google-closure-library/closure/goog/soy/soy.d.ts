declare module goog {
    function require(name: 'goog.soy'): typeof goog.soy;
}

declare module goog.soy {

    /**
     * Renders a Soy template and then set the output string as
     * the innerHTML of an element. It is recommended to use this helper function
     * instead of directly setting innerHTML in your hand-written code, so that it
     * will be easier to audit the code for cross-site scripting vulnerabilities.
     *
     * @param {Element} element The element whose content we are rendering into.
     * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @template ARG_TYPES
     */
    function renderElement<ARG_TYPES>(element: Element, template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES, opt_injectedData?: Object): void;

    /**
     * Renders a Soy template into a single node or a document
     * fragment. If the rendered HTML string represents a single node, then that
     * node is returned (note that this is *not* a fragment, despite them name of
     * the method). Otherwise a document fragment is returned containing the
     * rendered nodes.
     *
     * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to {@code goog.dom.getDomHelper}.
     * @return {!Node} The resulting node or document fragment.
     * @template ARG_TYPES
     */
    function renderAsFragment<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Node;

    /**
     * Renders a Soy template into a single node. If the rendered
     * HTML string represents a single node, then that node is returned. Otherwise,
     * a DIV element is returned containing the rendered nodes.
     *
     * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to {@code goog.dom.getDomHelper}.
     * @return {!Element} Rendered template contents, wrapped in a parent DIV
     *     element if necessary.
     * @template ARG_TYPES
     */
    function renderAsElement<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Element;
}
