declare module goog {
    function require(name: 'goog.soy.Renderer'): typeof goog.soy.Renderer;
}

declare module goog.soy {

    /**
     * Creates a new soy renderer. Note that the renderer will only be
     * guaranteed to work correctly within the document scope provided in
     * the DOM helper.
     *
     * @param {goog.soy.InjectedDataSupplier=} opt_injectedDataSupplier A supplier
     *     that provides an injected data.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper;
     *     defaults to that provided by {@code goog.dom.getDomHelper()}.
     * @constructor
     */
    class Renderer {
        constructor(opt_injectedDataSupplier?: goog.soy.InjectedDataSupplier, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Renders a Soy template into a single node or a document fragment.
         * Delegates to {@code goog.soy.renderAsFragment}.
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Node} The resulting node or document fragment.
         * @template ARG_TYPES
         */
        renderAsFragment<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): Node;
        
        /**
         * Renders a Soy template into a single node. If the rendered HTML
         * string represents a single node, then that node is returned.
         * Otherwise, a DIV element is returned containing the rendered nodes.
         * Delegates to {@code goog.soy.renderAsElement}.
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Element} Rendered template contents, wrapped in a parent DIV
         *     element if necessary.
         * @template ARG_TYPES
         */
        renderAsElement<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): Element;
        
        /**
         * Renders a Soy template and then set the output string as the
         * innerHTML of the given element. Delegates to {@code goog.soy.renderElement}.
         *
         * @param {Element} element The element whose content we are rendering.
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @template ARG_TYPES
         */
        renderElement<ARG_TYPES>(element: Element, template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): void;
        
        /**
         * Renders a Soy template and returns the output string.
         * If the template is strict, it must be of kind HTML. To render strict
         * templates of other kinds, use {@code renderText} (for {@code kind="text"}) or
         * {@code renderStrict}.
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        render<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): string;
        
        /**
         * Renders a strict Soy template of kind="text" and returns the output string.
         * It is an error to use renderText on non-strict templates, or strict templates
         * of kinds other than "text".
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):
         *     goog.soy.data.SanitizedContent} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        renderText<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedContent), opt_templateData?: ARG_TYPES): string;
        
        /**
         * Renders a strict Soy template and returns the output SanitizedContent object.
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):RETURN_TYPE}
         *     template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @param {goog.soy.data.SanitizedContentKind=} opt_kind The output kind to
         *     assert. If null, the template must be of kind="html" (i.e., opt_kind
         *     defaults to goog.soy.data.SanitizedContentKind.HTML).
         * @return {RETURN_TYPE} The SanitizedContent object. This return type is
         *     generic based on the return type of the template, such as
         *     soy.SanitizedHtml.
         * @template ARG_TYPES, RETURN_TYPE
         */
        renderStrict<ARG_TYPES, RETURN_TYPE>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => RETURN_TYPE), opt_templateData?: ARG_TYPES, opt_kind?: goog.soy.data.SanitizedContentKind): RETURN_TYPE;
        
        /**
         * Renders a strict Soy template of kind="html" and returns the result as
         * a goog.html.SafeHtml object.
         *
         * Rendering a template that is not a strict template of kind="html" results in
         * a runtime error.
         *
         * @param {null|function(ARG_TYPES, null=, Object<string, *>=):
         *     goog.soy.data.SanitizedContent} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.html.SafeHtml}
         * @template ARG_TYPES
         */
        renderSafeHtml<ARG_TYPES>(template: void|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedContent), opt_templateData?: ARG_TYPES): goog.html.SafeHtml;
        
        /**
         * @return {!goog.soy.Renderer.SavedTemplateRender} Saved template data for
         *     the renders that have happened so far.
         */
        getSavedTemplateRenders(): goog.soy.Renderer.SavedTemplateRender;
        
        /**
         * Observes rendering of templates by this renderer.
         * @param {Node=} opt_node Relevant node, if available. The node may or may
         *     not be in the document, depending on whether Soy is creating an element
         *     or writing into an existing one.
         * @protected
         */
        handleRender(opt_node?: Node): void;
    }

    /**
     * An interface for a supplier that provides Soy injected data.
     * @interface
     */
    interface InjectedDataSupplier {
        
        /**
         * Gets the injected data. Implementation may assume that
         * {@code goog.soy.Renderer} will treat the returned data as
         * immutable.  The renderer will call this every time one of its
         * {@code render*} methods is called.
         * @return {Object} A key-value pair representing the injected data.
         */
        getData(): Object;
    }
}

declare module goog.soy.Renderer {

    /**
     * @typedef {Array<{template: string, data: Object, ijData: Object}>}
     */
    type SavedTemplateRender = Array<{template: string; data: Object; ijData: Object}>;
}
