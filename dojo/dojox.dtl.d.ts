// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
/// <reference path="dijit.d.ts" />
declare module dojox {
    
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl.html
     *
     * Deprecated.  Should require dojox/dtl modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface dtl {
    }
    module dtl {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_Templated.html
         *
         * The base-class for DTL-templated widgets.
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified, replace srcNodeRef with my generated DOM tree.     
         */
        class _Templated extends dijit._TemplatedMixin {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
            /**
             * Object to which attach points and events will be scoped.  Defaults
             * to 'this'.
             * 
             */
            "attachScope": Object;
            /**
             * 
             */
            "searchContainerNode": boolean;
            /**
             * Path to template (HTML file) for this widget relative to dojo.baseUrl.
             * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
             * 
             */
            "templatePath": string;
            /**
             * A string that represents the widget template.
             * Use in conjunction with dojo.cache() to load from a file.
             * 
             */
            "templateString": string;
            /**
             * 
             */
            buildRendering(): void;
            /**
             * 
             */
            destroyRendering(): void;
            /**
             * Layer for dijit._Templated.getCachedTemplate
             * 
             * @param templatePath             
             * @param templateString             
             * @param alwaysUseString             
             */
            getCachedTemplate(templatePath: any, templateString: any, alwaysUseString: any): any;
            /**
             * Renders the widget.
             * 
             */
            render(): void;
            /**
             * 
             */
            startup(): void;
            /**
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.html
         *
         * 
         */
        interface _base {
            /**
             * 
             */
            BOOLS: Object;
            /**
             * 
             */
            data: Object;
            /**
             * 
             */
            date: Object;
            /**
             * 
             */
            dates: Object;
            /**
             * 
             */
            dijit: Object;
            /**
             * 
             */
            dom: Object;
            /**
             * 
             */
            html: Object;
            /**
             * 
             */
            htmlstrings: Object;
            /**
             * 
             */
            integers: Object;
            /**
             * 
             */
            lists: Object;
            /**
             * 
             */
            loader: Object;
            /**
             * 
             */
            logic: Object;
            /**
             * 
             */
            loop: Object;
            /**
             * 
             */
            misc: Object;
            /**
             * 
             */
            objects: Object;
            /**
             * A register for filters and tags.
             * 
             */
            register: Object;
            /**
             * 
             */
            strings: Object;
            /**
             * 
             */
            text: Object;
            /**
             * 
             */
            TOKEN_ATTR: number;
            /**
             * 
             */
            TOKEN_BLOCK: number;
            /**
             * 
             */
            TOKEN_CHANGE: number;
            /**
             * 
             */
            TOKEN_COMMENT: number;
            /**
             * 
             */
            TOKEN_CUSTOM: number;
            /**
             * 
             */
            TOKEN_NODE: number;
            /**
             * 
             */
            TOKEN_TEXT: number;
            /**
             * 
             */
            TOKEN_VAR: number;
            /**
             * 
             * @param key             
             * @param value             
             */
            AttributeNode(key: any, value: any): void;
            /**
             * Changes the parent during render/unrender
             * 
             * @param node             
             * @param up               Optional            
             * @param root             
             */
            ChangeNode(node: any, up: boolean, root: boolean): void;
            /**
             * Represents a runtime context used by DTL templates.
             * 
             * @param dict             
             */
            Context(dict: Object): void;
            /**
             * Allows the manipulation of DOM
             * Use this to append a child, change the parent, or
             * change the attribute of the current node.
             * 
             * @param parent The parent node.             
             */
            DomBuffer(parent: HTMLElement): void;
            /**
             * 
             * @param args             
             * @param node             
             */
            DomInline(args: any, node: any): void;
            /**
             * The template class for DOM templating.
             * 
             * @param obj             
             */
            DomTemplate(obj: String): void;
            /**
             * The template class for DOM templating.
             * 
             * @param obj             
             */
            DomTemplate(obj: HTMLElement): void;
            /**
             * The template class for DOM templating.
             * 
             * @param obj             
             */
            DomTemplate(obj:  dojo._base.url): void;
            /**
             * 
             * @param args             
             * @param node             
             */
            Inline(args: any, node: any): void;
            /**
             * 
             * @param value             
             */
            mark_safe(value: any): void;
            /**
             * 
             * @param str             
             */
            quickFilter(str: any): void;
            /**
             * The base class for text-based templates.
             * 
             * @param template The string or location of the string touse as a template             
             * @param isString Indicates whether the template is a string or a url.             
             */
            Template(template: String, isString: boolean): void;
            /**
             * The base class for text-based templates.
             * 
             * @param template The string or location of the string touse as a template             
             * @param isString Indicates whether the template is a string or a url.             
             */
            Template(template:  dojo._base.url, isString: boolean): void;
        }
        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base._base.html
             *
             * 
             */
            interface _base {
                /**
                 * Escapes a string's HTML
                 * 
                 * @param value             
                 */
                escape(value: any): void;
                /**
                 * 
                 * @param value             
                 */
                safe(value: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.BOOLS.html
             *
             * 
             */
            interface BOOLS {
                /**
                 * 
                 */
                checked: number;
                /**
                 * 
                 */
                disabled: number;
                /**
                 * 
                 */
                readonly: number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.date.html
             *
             * 
             */
            interface date {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.data.html
             *
             * 
             */
            interface data {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.dates.html
             *
             * 
             */
            interface dates {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.dijit.html
             *
             * 
             */
            interface dijit {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.dom.html
             *
             * 
             */
            interface dom {
                /**
                 * 
                 * @param text             
                 */
                getTemplate(text: any): Object;
                /**
                 * 
                 * @param nodes             
                 */
                tokenize(nodes: HTMLElement): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.html.html
             *
             * 
             */
            interface html {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.htmlstrings.html
             *
             * 
             */
            interface htmlstrings {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.integers.html
             *
             * 
             */
            interface integers {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.loader.html
             *
             * 
             */
            interface loader {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.lists.html
             *
             * 
             */
            interface lists {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.loop.html
             *
             * 
             */
            interface loop {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.logic.html
             *
             * 
             */
            interface logic {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.misc.html
             *
             * 
             */
            interface misc {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.objects.html
             *
             * 
             */
            interface objects {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.register.html
             *
             * A register for filters and tags.
             * 
             */
            interface register {
                /**
                 * Register the specified filter libraries.
                 * The locations parameter defines the contents of each library as a hash whose keys are the library names and values 
                 * an array of the filters exported by the library. For example, the filters exported by the date library would be:
                 * 
                 * { "dates": ["date", "time", "timesince", "timeuntil"] }
                 * 
                 * @param base The base path of the libraries.             
                 * @param locations An object defining the filters for each library as a hash whose keys are the library names and values an array of the filters exported by the library.             
                 */
                filters(base: String, locations: Object): void;
                /**
                 * Register the specified tag libraries.
                 * The locations parameter defines the contents of each library as a hash whose keys are the library names and values 
                 * an array of the tags exported by the library. For example, the tags exported by the logic library would be:
                 * 
                 * { logic: ["if", "for", "ifequal", "ifnotequal"] }
                 * 
                 * @param base The base path of the libraries.             
                 * @param locations An object defining the tags for each library as a hash whose keys are the library names and values an array of the tags or filters exported by the library.             
                 */
                tags(base: String, locations: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.strings.html
             *
             * 
             */
            interface strings {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_base.text.html
             *
             * 
             */
            interface text {
                /**
                 * 
                 * @param name             
                 * @param errorless             
                 */
                getFilter(name: any, errorless: any): any;
                /**
                 * 
                 * @param name             
                 * @param errorless             
                 */
                getTag(name: any, errorless: any): any;
                /**
                 * 
                 * @param file             
                 */
                getTemplate(file: any): any;
                /**
                 * 
                 * @param file             
                 */
                getTemplateString(file: any): String;
                /**
                 * 
                 * @param str             
                 */
                tokenize(str: any): any;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/dom.html
         *
         * 
         */
        interface dom {
            /**
             * 
             * @param text             
             */
            getTemplate(text: any): Object;
            /**
             * 
             * @param nodes             
             */
            tokenize(nodes: HTMLElement): any[];
        }
        module dom {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/dom._uppers.html
             *
             * 
             */
            interface _uppers {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/dom._attributes.html
             *
             * 
             */
            interface _attributes {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/_DomTemplated.html
         *
         * The base class for DOM-based templating.
         * 
         */
        interface _DomTemplated{(): void}
        module _DomTemplated {
            /**
             * Constructs the DOM representation.
             * 
             */
            interface buildRendering{(): void}
            /**
             * Renders this template.
             * 
             * @param context               OptionalThe runtime context.             
             * @param tpl               OptionalThe template to render. Optional.             
             */
            interface render{(context: dojox.dtl.Context, tpl: dojox.dtl._DomTemplated): void}
            /**
             * Quickly switch between templated by location
             * 
             * @param template The new template.             
             * @param context               OptionalThe runtime context.             
             */
            interface setTemplate{(template: String, context: dojox.dtl.Context): void}
            /**
             * Quickly switch between templated by location
             * 
             * @param template The new template.             
             * @param context               OptionalThe runtime context.             
             */
            interface setTemplate{(template:  dojo._base.url, context: dojox.dtl.Context): void}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/Context.html
         *
         * Represents a runtime context used by DTL templates.
         * 
         * @param dict     
         */
        interface Context{(dict: Object): void}
        module Context {
            /**
             * Returns a clone of this context object, with the items from the passed objecct mixed in.
             * 
             * @param obj The object to extend.             
             */
            interface extend{(obj: dojox.dtl.Context ): any}
            /**
             * Returns a clone of this context object, with the items from the passed objecct mixed in.
             * 
             * @param obj The object to extend.             
             */
            interface extend{(obj: Object): any}
            /**
             * Returns a clone of this context, only containing the items defined in the filter.
             * 
             * @param filter             
             */
            interface filter{(filter: dojox.dtl.Context ): any}
            /**
             * Returns a clone of this context, only containing the items defined in the filter.
             * 
             * @param filter             
             */
            interface filter{(filter: Object): any}
            /**
             * Returns a clone of this context, only containing the items defined in the filter.
             * 
             * @param filter             
             */
            interface filter{(filter: String[]): any}
            /**
             * 
             * @param key             
             * @param otherwise             
             */
            interface get{(key: any, otherwise: any): any}
            /**
             * Returns the set of keys exported by this context.
             * 
             */
            interface getKeys{(): any[]}
            /**
             * Gets the object on which to perform operations. 
             * 
             */
            interface getThis{(): any}
            /**
             * Indicates whether the specified key is defined on this context.
             * 
             * @param key The key to look up.             
             */
            interface hasKey{(key: String): boolean}
            /**
             * 
             */
            interface pop{(): void}
            /**
             * 
             */
            interface push{(): any}
            /**
             * Sets the object on which to perform operations. 
             * 
             * @param scope the this ref.             
             */
            interface setThis{(scope: Object): void}
            /**
             * 
             * @param dict             
             */
            interface update{(dict: any): any}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/DomInline.html
         *
         * 
         * @param args     
         * @param node     
         */
        class DomInline {
            constructor(args: Object, node: HTMLElement);
            /**
             * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
             * for each XXX attribute to be mapped to the DOM.
             * 
             * attributeMap sets up a "binding" between attributes (aka properties)
             * of the widget and the widget's DOM.
             * Changes to widget attributes listed in attributeMap will be
             * reflected into the DOM.
             * 
             * For example, calling set('title', 'hello')
             * on a TitlePane will automatically cause the TitlePane's DOM to update
             * with the new title.
             * 
             * attributeMap is a hash where the key is an attribute of the widget,
             * and the value reflects a binding to a:
             * 
             * DOM node attribute
             *   focus: {node: "focusNode", type: "attribute"}
             * Maps this.focus to this.focusNode.focus
             * 
             * DOM node innerHTML
             *   title: { node: "titleNode", type: "innerHTML" }
             * Maps this.title to this.titleNode.innerHTML
             * 
             * DOM node innerText
             *   title: { node: "titleNode", type: "innerText" }
             * Maps this.title to this.titleNode.innerText
             * 
             * DOM node CSS class
             *   myClass: { node: "domNode", type: "class" }
             * Maps this.myClass to this.domNode.className
             * 
             * If the value is an array, then each element in the array matches one of the
             * formats of the above list.
             * 
             * There are also some shorthands for backwards compatibility:
             * 
             * string --> { node: string, type: "attribute" }, for example:
             * "focusNode" ---> { node: "focusNode", type: "attribute" }
             * "" --> { node: "domNode", type: "attribute" }
             * 
             */
            attributeMap: Object
            /**
             * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
             * widget state.
             * 
             */
            baseClass: string
            /**
             * 
             */
            "class": string
            /**
             * Designates where children of the source DOM node will be placed.
             * "Children" in this case refers to both DOM nodes and widgets.
             * For example, for myWidget:
             * 
             * <div data-dojo-type=myWidget>
             *     <b> here's a plain DOM node
             *     <span data-dojo-type=subWidget>and a widget</span>
             *     <i> and another plain DOM node </i>
             * </div>
             * containerNode would point to:
             * 
             * <b> here's a plain DOM node
             * <span data-dojo-type=subWidget>and a widget</span>
             * <i> and another plain DOM node </i>
             * In templated widgets, "containerNode" is set via a
             * data-dojo-attach-point assignment.
             * 
             * containerNode must be defined for any widget that accepts innerHTML
             * (like ContentPane or BorderContainer or even Button), and conversely
             * is null for widgets that don't, like TextBox.
             * 
             */
            containerNode: HTMLElement
            /**
             * 
             */
            context: Object
            /**
             * 
             */
            declaredClass: string
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             * 
             */
            dir: string
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             * 
             */
            domNode: HTMLElement
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             * 
             */
            focused: boolean
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             * 
             */
            id: string
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             * 
             */
            lang: string
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            ownerDocument: Object
            /**
             * pointer to original DOM node
             * 
             */
            srcNodeRef: HTMLElement
            /**
             * HTML style attributes as cssText string or name/value hash
             * 
             */
            style: string
            /**
             * HTML title attribute.
             * 
             * For form widgets this specifies a tooltip to display when hovering over
             * the widget (just like the native HTML title attribute).
             * 
             * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
             * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
             * interpreted as HTML.
             * 
             */
            title: string
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             * 
             */
            tooltip: string
            /**
             * 
             */
             buildRendering(): void
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: Object, event: String, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: any, event: String, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: Object, event: Function, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: any, event: Function, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: Object, event: String, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: any, event: String, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: Object, event: Function, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
             connect(obj: any, event: Function, method: Function): any
            /**
             * Wrapper to setTimeout to avoid deferred functions executing
             * after the originating widget has been destroyed.
             * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
             * 
             * @param fcn Function reference.             
             * @param delay               OptionalDelay, defaults to 0.             
             */
             defer(fcn: Function, delay: number): Object
            /**
             * Destroy this widget, but not its descendants.  Descendants means widgets inside of
             * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
             * 
             * This method will also destroy internal widgets such as those created from a template,
             * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
             * 
             * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
             * depend on the current ability to destroy a widget without destroying its descendants.   Generally
             * they should use destroyRecursive() for widgets with children.
             * 
             * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
             */
             destroy(preserveDom: boolean): void
            /**
             * Recursively destroy the children of this widget and their
             * descendants.
             * 
             * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
             */
             destroyDescendants(preserveDom: boolean): void
            /**
             * Destroy this widget and its descendants
             * This is the generic "destructor" function that all widget users
             * should call to cleanly discard with a widget. Once a widget is
             * destroyed, it is removed from the manager object.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
             */
             destroyRecursive(preserveDom: boolean): void
            /**
             * Destroys the DOM nodes associated with this widget.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
             */
             destroyRendering(preserveDom: boolean): void
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Disconnects handle created by connect.
             * 
             * @param handle             
             */
             disconnect(handle: any): void
            /**
             * Used by widgets to signal that a synthetic event occurred, ex:
             * 
             * myWidget.emit("attrmodified-selectedChildWidget", ).
             * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
             * Also calls onType() method, if present, and returns value from that method.
             * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
             * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
             * 
             * @param type             
             * @param eventObj               Optional            
             * @param callbackArgs               Optional            
             */
             emit(type: String, eventObj: Object, callbackArgs: any[]): any
            /**
             * Get a property from a widget.
             * Get a named property from a widget. The property may
             * potentially be retrieved via a getter method. If no getter is defined, this
             * just retrieves the object's property.
             * 
             * For example, if the widget has properties foo and bar
             * and a method named _getFooAttr(), calling:
             * myWidget.get("foo") would be equivalent to calling
             * widget._getFooAttr() and myWidget.get("bar")
             * would be equivalent to the expression
             * widget.bar2
             * 
             * @param name The property to get.             
             */
             get(name: any): any
            /**
             * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
             * is this widget.   Note that it does not return all descendants, but rather just direct children.
             * Analogous to Node.childNodes,
             * except containing widgets rather than DOMNodes.
             * 
             * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
             * outside of this.containerNode.
             * 
             * Note that the array returned is a simple array.  Application code should not assume
             * existence of methods like forEach().
             * 
             */
             getChildren(): any[]
            /**
             * Returns the parent widget of this widget.
             * 
             */
             getParent(): any
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
             isFocusable(): any
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
             isLeftToRight(): any
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function() ... ).
             * Call specified function when event type occurs, ex: myWidget.on("click", function() ... ).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
             * @param func             
             */
             on(type: String, func: Function): any
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function() ... ).
             * Call specified function when event type occurs, ex: myWidget.on("click", function() ... ).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
             * @param func             
             */
             on(type: Function, func: Function): any
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             * 
             */
             own(): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: String, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: HTMLElement, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: dijit._WidgetBase, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: String, position: number): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: HTMLElement, position: number): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
             placeAt(reference: dijit._WidgetBase, position: number): any
            /**
             * Processing after the DOM fragment is created
             * Called after the DOM fragment has been created, but not necessarily
             * added to the document.  Do not include any operations which rely on
             * node dimensions or placement.
             * 
             */
             postCreate(): void
            /**
             * 
             */
             postMixInProperties(): void
            /**
             * 
             * @param context               Optional            
             */
             render(context: dojox.dtl.Context): void
            /**
             * Set a property on a widget
             * Sets named properties on a widget which may potentially be handled by a
             * setter in the widget.
             * 
             * For example, if the widget has properties foo and bar
             * and a method named _setFooAttr(), calling
             * myWidget.set("foo", "Howdy!") would be equivalent to calling
             * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
             * would be equivalent to the statement widget.bar = 3;
             * 
             * set() may also be called with a hash of name/value pairs, ex:
             * 
             * myWidget.set({
             *     foo: "Howdy",
             *     bar: 3
             * });
             * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
             * 
             * @param name The property to set.             
             * @param value The value to set in the property.             
             */
             set(name: any, value: any): any
            /**
             * Processing after the DOM fragment is added to the document
             * Called after a widget and its children have been created and added to the page,
             * and all related widgets have finished their create() cycle, up through postCreate().
             * 
             * Note that startup() may be called while the widget is still hidden, for example if the widget is
             * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
             * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
             * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
             * 
             */
             startup(): void
            /**
             * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
             * 
             * Subscribes to the specified topic and calls the specified method
             * of this object and registers for unsubscribe() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.subscribe, except with the
             * implicit use of this widget as the target object.
             * 
             * @param t The topic             
             * @param method The callback             
             */
             subscribe(t: String, method: Function): any
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
             toString(): string
            /**
             * Deprecated. Override destroy() instead to implement custom widget tear-down
             * behavior.
             * 
             */
             uninitialize(): boolean
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Unsubscribes handle created by this.subscribe.
             * Also removes handle from this widget's list of subscriptions
             * 
             * @param handle             
             */
             unsubscribe(handle: Object): void
            /**
             * Watches a property for changes
             * 
             * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
             * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
             */
             watch(name: String, callback: Function): any
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/Inline.html
         *
         * 
         * @param args     
         * @param node     
         */
        class Inline {
            constructor(args:Object, node:HTMLElement);
            /**
             * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
             * for each XXX attribute to be mapped to the DOM.
             * 
             * attributeMap sets up a "binding" between attributes (aka properties)
             * of the widget and the widget's DOM.
             * Changes to widget attributes listed in attributeMap will be
             * reflected into the DOM.
             * 
             * For example, calling set('title', 'hello')
             * on a TitlePane will automatically cause the TitlePane's DOM to update
             * with the new title.
             * 
             * attributeMap is a hash where the key is an attribute of the widget,
             * and the value reflects a binding to a:
             * 
             * DOM node attribute
             *   focus: {node: "focusNode", type: "attribute"}
             * Maps this.focus to this.focusNode.focus
             * 
             * DOM node innerHTML
             *   title: { node: "titleNode", type: "innerHTML" }
             * Maps this.title to this.titleNode.innerHTML
             * 
             * DOM node innerText
             *   title: { node: "titleNode", type: "innerText" }
             * Maps this.title to this.titleNode.innerText
             * 
             * DOM node CSS class
             *   myClass: { node: "domNode", type: "class" }
             * Maps this.myClass to this.domNode.className
             * 
             * If the value is an array, then each element in the array matches one of the
             * formats of the above list.
             * 
             * There are also some shorthands for backwards compatibility:
             * 
             * string --> { node: string, type: "attribute" }, for example:
             * "focusNode" ---> { node: "focusNode", type: "attribute" }
             * "" --> { node: "domNode", type: "attribute" }
             * 
             */
            attributeMap: Object
            /**
             * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
             * widget state.
             * 
             */
            baseClass: string
            /**
             * 
             */
            class: string
            /**
             * Designates where children of the source DOM node will be placed.
             * "Children" in this case refers to both DOM nodes and widgets.
             * For example, for myWidget:
             * 
             * <div data-dojo-type=myWidget>
             *     <b> here's a plain DOM node
             *     <span data-dojo-type=subWidget>and a widget</span>
             *     <i> and another plain DOM node </i>
             * </div>
             * containerNode would point to:
             * 
             * <b> here's a plain DOM node
             * <span data-dojo-type=subWidget>and a widget</span>
             * <i> and another plain DOM node </i>
             * In templated widgets, "containerNode" is set via a
             * data-dojo-attach-point assignment.
             * 
             * containerNode must be defined for any widget that accepts innerHTML
             * (like ContentPane or BorderContainer or even Button), and conversely
             * is null for widgets that don't, like TextBox.
             * 
             */
            containerNode: HTMLElement
            /**
             * 
             */
            context: Object
            /**
             * 
             */
            declaredClass: string
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             * 
             */
            dir: string
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             * 
             */
            domNode: HTMLElement
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             * 
             */
            focused: boolean
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             * 
             */
            id: string
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             * 
             */
            lang: string
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            ownerDocument: Object
            /**
             * pointer to original DOM node
             * 
             */
            srcNodeRef: HTMLElement
            /**
             * HTML style attributes as cssText string or name/value hash
             * 
             */
            style: string
            /**
             * HTML title attribute.
             * 
             * For form widgets this specifies a tooltip to display when hovering over
             * the widget (just like the native HTML title attribute).
             * 
             * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
             * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
             * interpreted as HTML.
             * 
             */
            title: string
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             * 
             */
            tooltip: string
            /**
             * 
             */
            buildRendering(): void
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: Object, event: String, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: any, event: String, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: Object, event: Function, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: any, event: Function, method: String): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: Object, event: String, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: any, event: String, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: Object, event: Function, method: Function): any
            /**
             * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
             * 
             * Connects specified obj/event to specified method of this object
             * and registers for disconnect() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.connect, except with the
             * implicit use of this widget as the target object.
             * Events connected with this.connect are disconnected upon
             * destruction.
             * 
             * @param obj             
             * @param event             
             * @param method             
             */
            connect(obj: any, event: Function, method: Function): any
            /**
             * Wrapper to setTimeout to avoid deferred functions executing
             * after the originating widget has been destroyed.
             * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
             * 
             * @param fcn Function reference.             
             * @param delay               OptionalDelay, defaults to 0.             
             */
            defer(fcn: Function, delay: number): Object
            /**
             * Destroy this widget, but not its descendants.  Descendants means widgets inside of
             * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
             * 
             * This method will also destroy internal widgets such as those created from a template,
             * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
             * 
             * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
             * depend on the current ability to destroy a widget without destroying its descendants.   Generally
             * they should use destroyRecursive() for widgets with children.
             * 
             * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
             */
            destroy(preserveDom: boolean): void
            /**
             * Recursively destroy the children of this widget and their
             * descendants.
             * 
             * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
             */
            destroyDescendants(preserveDom: boolean): void
            /**
             * Destroy this widget and its descendants
             * This is the generic "destructor" function that all widget users
             * should call to cleanly discard with a widget. Once a widget is
             * destroyed, it is removed from the manager object.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
             */
            destroyRecursive(preserveDom: boolean): void
            /**
             * Destroys the DOM nodes associated with this widget.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
             */
            destroyRendering(preserveDom: boolean): void
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Disconnects handle created by connect.
             * 
             * @param handle             
             */
            disconnect(handle: any): void
            /**
             * Used by widgets to signal that a synthetic event occurred, ex:
             * 
             * myWidget.emit("attrmodified-selectedChildWidget", {}).
             * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
             * Also calls onType() method, if present, and returns value from that method.
             * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
             * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
             * 
             * @param type             
             * @param eventObj               Optional            
             * @param callbackArgs               Optional            
             */
            emit(type: String, eventObj: Object, callbackArgs: any[]): any
            /**
             * Get a property from a widget.
             * Get a named property from a widget. The property may
             * potentially be retrieved via a getter method. If no getter is defined, this
             * just retrieves the object's property.
             * 
             * For example, if the widget has properties foo and bar
             * and a method named _getFooAttr(), calling:
             * myWidget.get("foo") would be equivalent to calling
             * widget._getFooAttr() and myWidget.get("bar")
             * would be equivalent to the expression
             * widget.bar2
             * 
             * @param name The property to get.             
             */
            get(name: any): any
            /**
             * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
             * is this widget.   Note that it does not return all descendants, but rather just direct children.
             * Analogous to Node.childNodes,
             * except containing widgets rather than DOMNodes.
             * 
             * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
             * outside of this.containerNode.
             * 
             * Note that the array returned is a simple array.  Application code should not assume
             * existence of methods like forEach().
             * 
             */
            getChildren(): any[]
            /**
             * Returns the parent widget of this widget.
             * 
             */
            getParent(): any
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
            isFocusable(): any
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
            isLeftToRight(): any
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
             * @param func             
             */
            on(type: String, func: Function): any
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             * 
             * @param type Name of event (ex: "click") or extension event like touch.press.             
             * @param func             
             */
            on(type: Function, func: Function): any
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             * 
             */
            own(): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: String, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: HTMLElement, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: dijit._WidgetBase, position: String): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: String, position: number): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: HTMLElement, position: number): any
            /**
             * Place this widget somewhere in the DOM based
             * on standard domConstruct.place() conventions.
             * A convenience function provided in all _Widgets, providing a simple
             * shorthand mechanism to put an existing (or newly created) Widget
             * somewhere in the dom, and allow chaining.
             * 
             * @param reference Widget, DOMNode, or id of widget or DOMNode             
             * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
             */
            placeAt(reference: dijit._WidgetBase, position: number): any
            /**
             * Processing after the DOM fragment is created
             * Called after the DOM fragment has been created, but not necessarily
             * added to the document.  Do not include any operations which rely on
             * node dimensions or placement.
             * 
             */
            postCreate(): void
            /**
             * 
             */
            postMixInProperties(): void
            /**
             * 
             * @param context               Optional            
             */
            render(context: Object): void
            /**
             * 
             * @param context               Optional            
             */
            render(context:  dojox.dtl.Context): void
            /**
             * Set a property on a widget
             * Sets named properties on a widget which may potentially be handled by a
             * setter in the widget.
             * 
             * For example, if the widget has properties foo and bar
             * and a method named _setFooAttr(), calling
             * myWidget.set("foo", "Howdy!") would be equivalent to calling
             * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
             * would be equivalent to the statement widget.bar = 3;
             * 
             * set() may also be called with a hash of name/value pairs, ex:
             * 
             * myWidget.set({
             *     foo: "Howdy",
             *     bar: 3
             * });
             * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
             * 
             * @param name The property to set.             
             * @param value The value to set in the property.             
             */
            set(name: any, value: any): any
            /**
             * Processing after the DOM fragment is added to the document
             * Called after a widget and its children have been created and added to the page,
             * and all related widgets have finished their create() cycle, up through postCreate().
             * 
             * Note that startup() may be called while the widget is still hidden, for example if the widget is
             * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
             * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
             * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
             * 
             */
            startup(): void
            /**
             * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
             * 
             * Subscribes to the specified topic and calls the specified method
             * of this object and registers for unsubscribe() on widget destroy.
             * 
             * Provide widget-specific analog to dojo.subscribe, except with the
             * implicit use of this widget as the target object.
             * 
             * @param t The topic             
             * @param method The callback             
             */
            subscribe(t: String, method: Function): any
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
            toString(): string
            /**
             * Deprecated. Override destroy() instead to implement custom widget tear-down
             * behavior.
             * 
             */
            uninitialize(): boolean
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Unsubscribes handle created by this.subscribe.
             * Also removes handle from this widget's list of subscriptions
             * 
             * @param handle             
             */
            unsubscribe(handle: Object): void
            /**
             * Watches a property for changes
             * 
             * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
             * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
             */
            watch(name: String, callback: Function): any
        }

        module contrib {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/contrib/objects.html
             *
             * 
             */
            interface objects {
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                key(value: any, arg: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/contrib/dijit.html
             *
             * 
             */
            interface dijit {
                /**
                 * 
                 */
                widgetsInTemplate: boolean;
                /**
                 * 
                 * @param keys             
                 * @param object             
                 */
                AttachNode(keys: any, object: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                data_dojo_attach_event(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                data_dojo_attach_point(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                data_dojo_type(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                dojoAttachEvent(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                dojoAttachPoint(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                dojoType(parser: any, token: any): any;
                /**
                 * 
                 * @param node             
                 * @param parsed             
                 */
                DojoTypeNode(node: any, parsed: any): void;
                /**
                 * 
                 * @param command             
                 * @param obj             
                 */
                EventNode(command: any, obj: any): void;
                /**
                 * Associates an event type to a function (on the current widget) by name
                 * 
                 * @param parser             
                 * @param token             
                 */
                on(parser: any, token: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/contrib/data.html
             *
             * 
             */
            interface data {
                /**
                 * Turns a list of data store items into DTL compatible items
                 * 
                 * @param parser             
                 * @param token             
                 */
                bind_data(parser: any, token: any): any;
                /**
                 * Queries a data store and makes the returned items DTL compatible
                 * 
                 * @param parser             
                 * @param token             
                 */
                bind_query(parser: any, token: any): any;
                /**
                 * 
                 * @param items             
                 * @param query             
                 * @param store             
                 * @param alias             
                 */
                BindDataNode(items: any, query: any, store: any, alias: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/contrib/dom.html
             *
             * 
             */
            interface dom {
                /**
                 * Buffer large DOM manipulations during re-render.
                 * When using DomTemplate, wrap any content
                 * that you expect to change often during
                 * re-rendering. It will then remove its parent
                 * from the main document while it re-renders that
                 * section of code. It will only remove it from
                 * the main document if a mainpulation of somes sort
                 * happens. ie It won't swap out if it diesn't have to.
                 * 
                 * @param parser             
                 * @param token             
                 */
                buffer(parser: any, token: any): any;
                /**
                 * 
                 * @param nodelist             
                 * @param options             
                 */
                BufferNode(nodelist: any, options: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                html(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                style_(parser: any, token: any): any;
                /**
                 * 
                 * @param styles             
                 */
                StyleNode(styles: any): void;
            }
        }

        module ext_dojo {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/ext-dojo/NodeList.html
             *
             * Array-like object which adds syntactic
             * sugar for chaining, common iteration operations, animation, and
             * node manipulation. NodeLists are most often returned as the
             * result of dojo/query() calls.
             * NodeList instances provide many utilities that reflect
             * core Dojo APIs for Array iteration and manipulation, DOM
             * manipulation, and event handling. Instead of needing to dig up
             * functions in the dojo package, NodeLists generally make the
             * full power of Dojo available for DOM manipulation tasks in a
             * simple, chainable way.
             * 
             * @param array     
             */
            interface NodeList{(array: any): void}
            module NodeList {
                /**
                 * 
                 */
                var events: any[]
                /**
                 * adds the specified class to every node in the list
                 * 
                 * @param className A String class name to add, or several space-separated class names,or an array of class names.             
                 */
                interface addClass{(className: String): void}
                /**
                 * adds the specified class to every node in the list
                 * 
                 * @param className A String class name to add, or several space-separated class names,or an array of class names.             
                 */
                interface addClass{(className: any[]): void}
                /**
                 * Animate the effects of adding a class to all nodes in this list.
                 * see dojox.fx.addClass
                 * 
                 * @param cssClass             
                 * @param args             
                 */
                interface addClassFx{(cssClass: any, args: any): {type:Function;value:any}}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: String, position: String): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: HTMLElement, position: String): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: Object, position: String): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content:  dojo.NodeList, position: String): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: String, position: number): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: HTMLElement, position: number): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content: Object, position: number): Function}
                /**
                 * add a node, NodeList or some HTML as a string to every item in the
                 * list.  Returns the original list.
                 * a copy of the HTML content is added to each item in the
                 * list, with an optional position argument. If no position
                 * argument is provided, the content is appended to the end of
                 * each item.
                 * 
                 * @param content the content to be set on the parent element.This can be an html string, a node reference or a NodeList, dojo/NodeList, Array or other enumerable list of nodes             
                 * @param position               Optionalcan be one of:"last"||"end" (default)"first||"start""before""after""replace" (replaces nodes in this NodeList with new content)"only" (removes other children of the nodes so new content is the only child)or an offset in the childNodes property             
                 */
                interface addContent{(content:  dojo.NodeList, position: number): Function}
                /**
                 * places any/all elements in queryOrListOrNode at a
                 * position relative to the first element in this list.
                 * Returns a dojo/NodeList of the adopted elements.
                 * 
                 * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
                 * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
                 */
                interface adopt{(queryOrListOrNode: String, position: String): any}
                /**
                 * places any/all elements in queryOrListOrNode at a
                 * position relative to the first element in this list.
                 * Returns a dojo/NodeList of the adopted elements.
                 * 
                 * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
                 * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
                 */
                interface adopt{(queryOrListOrNode: any[], position: String): any}
                /**
                 * places any/all elements in queryOrListOrNode at a
                 * position relative to the first element in this list.
                 * Returns a dojo/NodeList of the adopted elements.
                 * 
                 * @param queryOrListOrNode a DOM node or a query string or a query result.Represents the nodes to be adopted relative to thefirst element of this NodeList.             
                 * @param position               Optionalcan be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
                 */
                interface adopt{(queryOrListOrNode: HTMLElement, position: String): any}
                /**
                 * Places the content after every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface after{(content: String): any}
                /**
                 * Places the content after every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface after{(content: HTMLElement): any}
                /**
                 * Places the content after every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface after{(content: NodeList): any}
                /**
                 * Adds the nodes from the previous dojo/NodeList to the current dojo/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 */
                interface andSelf{(): any}
                /**
                 * Animate one or more CSS properties for all nodes in this list.
                 * The returned animation object will already be playing when it
                 * is returned. See the docs for dojo.anim for full details.
                 * 
                 * @param properties the properties to animate. does NOT support the auto parameter like otherNodeList-fx methods.             
                 * @param duration               OptionalOptional. The time to run the animations for             
                 * @param easing               OptionalOptional. The easing function to use.             
                 * @param onEnd               OptionalA function to be called when the animation ends             
                 * @param delay               Optionalhow long to delay playing the returned animation             
                 */
                interface anim{(properties: Object, duration: number, easing: Function, onEnd: Function, delay: number): any}
                /**
                 * Animate all elements of this NodeList across the properties specified.
                 * syntax identical to dojo.animateProperty
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface animateProperty{(args: Object): any}
                /**
                 * appends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface append{(content: String): any}
                /**
                 * appends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface append{(content: HTMLElement): any}
                /**
                 * appends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface append{(content: NodeList): any}
                /**
                 * appends nodes in this NodeList to the nodes matched by
                 * the query passed to appendTo.
                 * The nodes in this NodeList will be cloned if the query
                 * matches more than one element. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param query             
                 */
                interface appendTo{(query: String): any}
                /**
                 * Returns a new NodeList comprised of items in this NodeList
                 * at the given index or indices.
                 * 
                 * @param index One or more 0-based indices of items in the currentNodeList. A negative index will start at the end of thelist and go backwards.             
                 */
                interface at{(index: number[]): any}
                /**
                 * gets or sets the DOM attribute for every element in the
                 * NodeList. See also dojo/dom-attr
                 * 
                 * @param property the attribute to get/set             
                 * @param value               Optionaloptional. The value to set the property to             
                 */
                interface attr{(property: String, value: String): any}
                /**
                 * Places the content before every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface before{(content: String): any}
                /**
                 * Places the content before every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface before{(content: HTMLElement): any}
                /**
                 * Places the content before every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface before{(content: NodeList): any}
                /**
                 * Returns all immediate child elements for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the child elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface children{(query: String): any}
                /**
                 * Clones all the nodes in this NodeList and returns them as a new NodeList.
                 * Only the DOM nodes are cloned, not any attached event handlers.
                 * 
                 */
                interface clone{(): any}
                /**
                 * Returns closest parent that matches query, including current node in this
                 * dojo/NodeList if it matches the query.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query a CSS selector.             
                 * @param root               OptionalIf specified, query is relative to "root" rather than document body.             
                 */
                interface closest{(query: String, root: String): any}
                /**
                 * Returns closest parent that matches query, including current node in this
                 * dojo/NodeList if it matches the query.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query a CSS selector.             
                 * @param root               OptionalIf specified, query is relative to "root" rather than document body.             
                 */
                interface closest{(query: String, root: HTMLElement): any}
                /**
                 * Returns a new NodeList comprised of items in this NodeList
                 * as well as items passed in as parameters
                 * This method behaves exactly like the Array.concat method
                 * with the caveat that it returns a NodeList and not a
                 * raw Array. For more details, see the Array.concat
                 * docs
                 * 
                 * @param item               OptionalAny number of optional parameters may be passed in to bespliced into the NodeList             
                 */
                interface concat{(item: Object): any}
                /**
                 * Attach event handlers to every item of the NodeList. Uses dojo.connect()
                 * so event properties are normalized.
                 * 
                 * Application must manually require() "dojo/_base/connect" before using this method.
                 * 
                 * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
                 * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
                 * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
                 */
                interface connect{(methodName: String, objOrFunc: Object, funcName: String): void}
                /**
                 * Attach event handlers to every item of the NodeList. Uses dojo.connect()
                 * so event properties are normalized.
                 * 
                 * Application must manually require() "dojo/_base/connect" before using this method.
                 * 
                 * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
                 * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
                 * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
                 */
                interface connect{(methodName: String, objOrFunc: Function, funcName: String): void}
                /**
                 * Attach event handlers to every item of the NodeList. Uses dojo.connect()
                 * so event properties are normalized.
                 * 
                 * Application must manually require() "dojo/_base/connect" before using this method.
                 * 
                 * @param methodName the name of the method to attach to. For DOM events, this should bethe lower-case name of the event             
                 * @param objOrFunc if 2 arguments are passed (methodName, objOrFunc), objOrFunc shouldreference a function or be the name of the function in the globalnamespace to attach. If 3 arguments are provided(methodName, objOrFunc, funcName), objOrFunc must be the scope tolocate the bound function in             
                 * @param funcName               Optionaloptional. A string naming the function in objOrFunc to bind to theevent. May also be a function reference.             
                 */
                interface connect{(methodName: String, objOrFunc: String, funcName: String): void}
                /**
                 * Deprecated: Use position() for border-box x/y/w/h
                 * or marginBox() for margin-box w/h/l/t.
                 * Returns the box objects of all elements in a node list as
                 * an Array (not a NodeList). Acts like domGeom.coords, though assumes
                 * the node passed is each node in this list.
                 * 
                 */
                interface coords{(): void}
                /**
                 * stash or get some arbitrary data on/from these nodes.
                 * Stash or get some arbitrary data on/from these nodes. This private _data function is
                 * exposed publicly on dojo/NodeList, eg: as the result of a dojo/query call.
                 * DIFFERS from jQuery.data in that when used as a getter, the entire list is ALWAYS
                 * returned. EVEN WHEN THE LIST IS length == 1.
                 * 
                 * A single-node version of this function is provided as dojo._nodeData, which follows
                 * the same signature, though expects a String ID or DomNode reference in the first
                 * position, before key/value arguments.
                 * 
                 * @param key               OptionalIf an object, act as a setter and iterate over said object setting data items as defined.If a string, and value present, set the data for defined key to valueIf a string, and value absent, act as a getter, returning the data associated with said key             
                 * @param value               OptionalThe value to set for said key, provided key is a string (and not an object)             
                 */
                interface data{(key: Object, value: any): any}
                /**
                 * stash or get some arbitrary data on/from these nodes.
                 * Stash or get some arbitrary data on/from these nodes. This private _data function is
                 * exposed publicly on dojo/NodeList, eg: as the result of a dojo/query call.
                 * DIFFERS from jQuery.data in that when used as a getter, the entire list is ALWAYS
                 * returned. EVEN WHEN THE LIST IS length == 1.
                 * 
                 * A single-node version of this function is provided as dojo._nodeData, which follows
                 * the same signature, though expects a String ID or DomNode reference in the first
                 * position, before key/value arguments.
                 * 
                 * @param key               OptionalIf an object, act as a setter and iterate over said object setting data items as defined.If a string, and value present, set the data for defined key to valueIf a string, and value absent, act as a getter, returning the data associated with said key             
                 * @param value               OptionalThe value to set for said key, provided key is a string (and not an object)             
                 */
                interface data{(key: String, value: any): any}
                /**
                 * Monitor nodes in this NodeList for [bubbled] events on nodes that match selector.
                 * Calls fn(evt) for those events, where (inside of fn()), this == the node
                 * that matches the selector.
                 * Sets up event handlers that can catch events on any subnodes matching a given selector,
                 * including nodes created after delegate() has been called.
                 * 
                 * This allows an app to setup a single event handler on a high level node, rather than many
                 * event handlers on subnodes. For example, one onclick handler for a Tree widget, rather than separate
                 * handlers for each node in the tree.
                 * Since setting up many event handlers is expensive, this can increase performance.
                 * 
                 * Note that delegate() will not work for events that don't bubble, like focus.
                 * onmouseenter/onmouseleave also don't currently work.
                 * 
                 * @param selector CSS selector valid to dojo.query, like ".foo" or "div > span".  Theselector is relative to the nodes in this NodeList, not the document root.For example myNodeList.delegate("> a", "onclick", ...) will catch events onanchor nodes which are (immediate) children of the nodes in myNodeList.             
                 * @param eventName Standard event name used as an argument to dojo.connect, like "onclick".             
                 * @param fn Callback function passed the event object, and where this == the node that matches the selector.That means that for example, after setting up a handler viadojo.query("body").delegate("fieldset", "onclick", ...)clicking on a fieldset or any nodes inside of a fieldset will be reportedas a click on the fieldset itself.             
                 */
                interface delegate{(selector: String, eventName: String, fn: Function): any}
                /**
                 * Renders the specified template in each of the NodeList entries.
                 * 
                 * @param template The template string or location             
                 * @param context The context object or location             
                 */
                interface dtl{(template: String, context: Object): Function}
                /**
                 * clears all content from each node in the list. Effectively
                 * equivalent to removing all child nodes from every item in
                 * the list.
                 * 
                 */
                interface empty{(): any}
                /**
                 * Ends use of the current NodeList by returning the previous NodeList
                 * that generated the current NodeList.
                 * Returns the NodeList that generated the current NodeList. If there
                 * is no parent NodeList, an empty NodeList is returned.
                 * 
                 */
                interface end{(): any}
                /**
                 * Returns the even nodes in this dojo/NodeList as a dojo/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 */
                interface even{(): any}
                /**
                 * see dojo/_base/array.every() and the Array.every
                 * docs.
                 * Takes the same structure of arguments and returns as
                 * dojo/_base/array.every() with the caveat that the passed array is
                 * implicitly this NodeList
                 * 
                 * @param callback the callback             
                 * @param thisObject               Optionalthe context             
                 */
                interface every{(callback: Function, thisObject: Object): any}
                /**
                 * fade in all elements of this NodeList via dojo.fadeIn
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface fadeIn{(args: Object): any}
                /**
                 * fade out all elements of this NodeList via dojo.fadeOut
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface fadeOut{(args: Object): any}
                /**
                 * "masks" the built-in javascript filter() method (supported
                 * in Dojo via dojo.filter) to support passing a simple
                 * string filter in addition to supporting filtering function
                 * objects.
                 * 
                 * @param filter If a string, a CSS rule like ".thinger" or "div > span".             
                 */
                interface filter{(filter: String): any}
                /**
                 * "masks" the built-in javascript filter() method (supported
                 * in Dojo via dojo.filter) to support passing a simple
                 * string filter in addition to supporting filtering function
                 * objects.
                 * 
                 * @param filter If a string, a CSS rule like ".thinger" or "div > span".             
                 */
                interface filter{(filter: Function): any}
                /**
                 * Returns the first node in this dojo/NodeList as a dojo/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 */
                interface first{(): any}
                /**
                 * see dojo/_base/array.forEach(). The primary difference is that the acted-on
                 * array is implicitly this NodeList. If you want the option to break out
                 * of the forEach loop, use every() or some() instead.
                 * 
                 * @param callback             
                 * @param thisObj             
                 */
                interface forEach{(callback: any, thisObj: any): Function}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface html{(value: String): any}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface html{(value: HTMLElement): any}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface html{(value: NodeList): any}
                /**
                 * see dojo/_base/array.indexOf(). The primary difference is that the acted-on
                 * array is implicitly this NodeList
                 * For more details on the behavior of indexOf, see Mozilla's
                 * indexOf
                 * docs
                 * 
                 * @param value The value to search for.             
                 * @param fromIndex               OptionalThe location to start searching from. Optional. Defaults to 0.             
                 */
                interface indexOf{(value: Object, fromIndex: number): any}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface innerHTML{(value: String): any}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface innerHTML{(value: HTMLElement): any}
                /**
                 * allows setting the innerHTML of each node in the NodeList,
                 * if there is a value passed in, otherwise, reads the innerHTML value of the first node.
                 * This method is simpler than the dojo/NodeList.html() method provided by
                 * dojo/NodeList-html. This method just does proper innerHTML insertion of HTML fragments,
                 * and it allows for the innerHTML to be read for the first node in the node list.
                 * Since dojo/NodeList-html already took the "html" name, this method is called
                 * "innerHTML". However, if dojo/NodeList-html has not been loaded yet, this
                 * module will define an "html" method that can be used instead. Be careful if you
                 * are working in an environment where it is possible that dojo/NodeList-html could
                 * have been loaded, since its definition of "html" will take precedence.
                 * The nodes represented by the value argument will be cloned if more than one
                 * node is in this NodeList. The nodes in this NodeList are returned in the "set"
                 * usage of this method, not the HTML that was inserted.
                 * 
                 * @param value               Optional            
                 */
                interface innerHTML{(value: NodeList): any}
                /**
                 * The nodes in this NodeList will be placed after the nodes
                 * matched by the query passed to insertAfter.
                 * The nodes in this NodeList will be cloned if the query
                 * matches more than one element. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param query             
                 */
                interface insertAfter{(query: String): any}
                /**
                 * The nodes in this NodeList will be placed after the nodes
                 * matched by the query passed to insertAfter.
                 * The nodes in this NodeList will be cloned if the query
                 * matches more than one element. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param query             
                 */
                interface insertBefore{(query: String): any}
                /**
                 * Create a new instance of a specified class, using the
                 * specified properties and each node in the NodeList as a
                 * srcNodeRef.
                 * 
                 * @param declaredClass             
                 * @param properties               Optional            
                 */
                interface instantiate{(declaredClass: String, properties: Object): any}
                /**
                 * Create a new instance of a specified class, using the
                 * specified properties and each node in the NodeList as a
                 * srcNodeRef.
                 * 
                 * @param declaredClass             
                 * @param properties               Optional            
                 */
                interface instantiate{(declaredClass: Object, properties: Object): any}
                /**
                 * Returns the last node in this dojo/NodeList as a dojo/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 */
                interface last{(): any}
                /**
                 * see dojo/_base/array.lastIndexOf(). The primary difference is that the
                 * acted-on array is implicitly this NodeList
                 * For more details on the behavior of lastIndexOf, see
                 * Mozilla's lastIndexOf
                 * docs
                 * 
                 * @param value The value to search for.             
                 * @param fromIndex               OptionalThe location to start searching from. Optional. Defaults to 0.             
                 */
                interface lastIndexOf{(value: Object, fromIndex: number): any}
                /**
                 * see dojo/_base/array.map(). The primary difference is that the acted-on
                 * array is implicitly this NodeList and the return is a
                 * NodeList (a subclass of Array)
                 * 
                 * @param func             
                 * @param obj               Optional            
                 */
                interface map{(func: Function, obj: Function): any}
                /**
                 * Returns margin-box size of nodes
                 * 
                 */
                interface marginBox{(): void}
                /**
                 * Returns the next element for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the next elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface next{(query: String): any}
                /**
                 * Returns all sibling elements that come after the nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the sibling elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface nextAll{(query: String): any}
                /**
                 * Returns the odd nodes in this dojo/NodeList as a dojo/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 */
                interface odd{(): any}
                /**
                 * Listen for events on the nodes in the NodeList. Basic usage is:
                 * 
                 * @param eventName             
                 * @param listener             
                 */
                interface on{(eventName: any, listener: any): any}
                /**
                 * removes elements in this list that match the filter
                 * from their parents and returns them as a new NodeList.
                 * 
                 * @param filter               OptionalCSS selector like ".foo" or "div > span"             
                 */
                interface orphan{(filter: String): any}
                /**
                 * Returns immediate parent elements for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the parent elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface parent{(query: String): any}
                /**
                 * Returns all parent elements for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the child elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface parents{(query: String): any}
                /**
                 * places elements of this node list relative to the first element matched
                 * by queryOrNode. Returns the original NodeList. See: dojo/dom-construct.place
                 * 
                 * @param queryOrNode may be a string representing any valid CSS3 selector or a DOM node.In the selector case, only the first matching element will be usedfor relative positioning.             
                 * @param position can be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
                 */
                interface place{(queryOrNode: String, position: String): any}
                /**
                 * places elements of this node list relative to the first element matched
                 * by queryOrNode. Returns the original NodeList. See: dojo/dom-construct.place
                 * 
                 * @param queryOrNode may be a string representing any valid CSS3 selector or a DOM node.In the selector case, only the first matching element will be usedfor relative positioning.             
                 * @param position can be one of:"last" (default)"first""before""after""only""replace"or an offset in the childNodes property             
                 */
                interface place{(queryOrNode: HTMLElement, position: String): any}
                /**
                 * Returns border-box objects (x/y/w/h) of all elements in a node list
                 * as an Array (not a NodeList). Acts like dojo/dom-geometry-position, though
                 * assumes the node passed is each node in this list.
                 * 
                 */
                interface position{(): any}
                /**
                 * prepends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface prepend{(content: String): any}
                /**
                 * prepends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface prepend{(content: HTMLElement): any}
                /**
                 * prepends the content to every node in the NodeList.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface prepend{(content: NodeList): any}
                /**
                 * prepends nodes in this NodeList to the nodes matched by
                 * the query passed to prependTo.
                 * The nodes in this NodeList will be cloned if the query
                 * matches more than one element. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param query             
                 */
                interface prependTo{(query: String): any}
                /**
                 * Returns the previous element for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the previous elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface prev{(query: String): any}
                /**
                 * Returns all sibling elements that come before the nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the sibling elements.
                 * The returned nodes will be in reverse DOM order -- the first node in the list will
                 * be the node closest to the original node/NodeList.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface prevAll{(query: String): any}
                /**
                 * Returns a new list whose members match the passed query,
                 * assuming elements of the current NodeList as the root for
                 * each search.
                 * 
                 * @param queryStr             
                 */
                interface query{(queryStr: String): any}
                /**
                 * removes elements in this list that match the filter
                 * from their parents and returns them as a new NodeList.
                 * 
                 * @param filter               OptionalCSS selector like ".foo" or "div > span"             
                 */
                interface remove{(filter: String): any}
                /**
                 * Removes an attribute from each node in the list.
                 * 
                 * @param name the name of the attribute to remove             
                 */
                interface removeAttr{(name: String): void}
                /**
                 * removes the specified class from every node in the list
                 * 
                 * @param className               OptionalAn optional String class name to remove, or several space-separatedclass names, or an array of class names. If omitted, all class nameswill be deleted.             
                 */
                interface removeClass{(className: String): any}
                /**
                 * removes the specified class from every node in the list
                 * 
                 * @param className               OptionalAn optional String class name to remove, or several space-separatedclass names, or an array of class names. If omitted, all class nameswill be deleted.             
                 */
                interface removeClass{(className: any[]): any}
                /**
                 * Animate the effect of removing a class to all nodes in this list.
                 * see dojox.fx.removeClass
                 * 
                 * @param cssClass             
                 * @param args             
                 */
                interface removeClassFx{(cssClass: any, args: any): {type:Function;value:any}}
                /**
                 * Remove the data associated with these nodes.
                 * 
                 * @param key               OptionalIf omitted, clean all data for this node.If passed, remove the data item found at key             
                 */
                interface removeData{(key: String): void}
                /**
                 * replaces nodes matched by the query passed to replaceAll with the nodes
                 * in this NodeList.
                 * The nodes in this NodeList will be cloned if the query
                 * matches more than one element. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param query             
                 */
                interface replaceAll{(query: String): any}
                /**
                 * Replaces one or more classes on a node if not present.
                 * Operates more quickly than calling removeClass() and addClass()
                 * 
                 * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
                 * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
                 */
                interface replaceClass{(addClassStr: String, removeClassStr: String): void}
                /**
                 * Replaces one or more classes on a node if not present.
                 * Operates more quickly than calling removeClass() and addClass()
                 * 
                 * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
                 * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
                 */
                interface replaceClass{(addClassStr: any[], removeClassStr: String): void}
                /**
                 * Replaces one or more classes on a node if not present.
                 * Operates more quickly than calling removeClass() and addClass()
                 * 
                 * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
                 * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
                 */
                interface replaceClass{(addClassStr: String, removeClassStr: any[]): void}
                /**
                 * Replaces one or more classes on a node if not present.
                 * Operates more quickly than calling removeClass() and addClass()
                 * 
                 * @param addClassStr A String class name to add, or several space-separated class names,or an array of class names.             
                 * @param removeClassStr               OptionalA String class name to remove, or several space-separated class names,or an array of class names.             
                 */
                interface replaceClass{(addClassStr: any[], removeClassStr: any[]): void}
                /**
                 * Replaces each node in ths NodeList with the content passed to replaceWith.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface replaceWith{(content: String): any}
                /**
                 * Replaces each node in ths NodeList with the content passed to replaceWith.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface replaceWith{(content: HTMLElement): any}
                /**
                 * Replaces each node in ths NodeList with the content passed to replaceWith.
                 * The content will be cloned if the length of NodeList
                 * is greater than 1. Only the DOM nodes are cloned, not
                 * any attached event handlers.
                 * 
                 * @param content             
                 */
                interface replaceWith{(content: NodeList): any}
                /**
                 * Returns all sibling elements for nodes in this dojo/NodeList.
                 * Optionally takes a query to filter the sibling elements.
                 * .end() can be used on the returned dojo/NodeList to get back to the
                 * original dojo/NodeList.
                 * 
                 * @param query               Optionala CSS selector.             
                 */
                interface siblings{(query: String): any}
                /**
                 * Returns a new NodeList, maintaining this one in place
                 * This method behaves exactly like the Array.slice method
                 * with the caveat that it returns a dojo/NodeList and not a
                 * raw Array. For more details, see Mozilla's slice
                 * documentation
                 * 
                 * @param begin Can be a positive or negative integer, with positiveintegers noting the offset to begin at, and negativeintegers denoting an offset from the end (i.e., to the leftof the end)             
                 * @param end               OptionalOptional parameter to describe what position relative tothe NodeList's zero index to end the slice at. Like begin,can be positive or negative.             
                 */
                interface slice{(begin: number, end: number): any}
                /**
                 * slide all elements of the node list to the specified place via dojo/fx.slideTo()
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface slideTo{(args: Object): any}
                /**
                 * Takes the same structure of arguments and returns as
                 * dojo/_base/array.some() with the caveat that the passed array is
                 * implicitly this NodeList.  See dojo/_base/array.some() and Mozilla's
                 * Array.some
                 * documentation.
                 * 
                 * @param callback the callback             
                 * @param thisObject               Optionalthe context             
                 */
                interface some{(callback: Function, thisObject: Object): any}
                /**
                 * Returns a new NodeList, manipulating this NodeList based on
                 * the arguments passed, potentially splicing in new elements
                 * at an offset, optionally deleting elements
                 * This method behaves exactly like the Array.splice method
                 * with the caveat that it returns a dojo/NodeList and not a
                 * raw Array. For more details, see Mozilla's splice
                 * documentation
                 * For backwards compatibility, calling .end() on the spliced NodeList
                 * does not return the original NodeList -- splice alters the NodeList in place.
                 * 
                 * @param index begin can be a positive or negative integer, with positiveintegers noting the offset to begin at, and negativeintegers denoting an offset from the end (i.e., to the leftof the end)             
                 * @param howmany               OptionalOptional parameter to describe what position relative tothe NodeList's zero index to end the slice at. Like begin,can be positive or negative.             
                 * @param item               OptionalAny number of optional parameters may be passed in to bespliced into the NodeList             
                 */
                interface splice{(index: number, howmany: number, item: Object[]): any}
                /**
                 * gets or sets the CSS property for every element in the NodeList
                 * 
                 * @param property the CSS property to get/set, in JavaScript notation("lineHieght" instead of "line-height")             
                 * @param value               Optionaloptional. The value to set the property to             
                 */
                interface style{(property: String, value: String): any}
                /**
                 * allows setting the text value of each node in the NodeList,
                 * if there is a value passed in, otherwise, returns the text value for all the
                 * nodes in the NodeList in one string.
                 * 
                 * @param value             
                 */
                interface text{(value: String): any}
                /**
                 * Adds a class to node if not present, or removes if present.
                 * Pass a boolean condition if you want to explicitly add or remove.
                 * 
                 * @param className the CSS class to add             
                 * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
                 */
                interface toggleClass{(className: String, condition: boolean): void}
                /**
                 * Animate the effect of adding or removing a class to all nodes in this list.
                 * see dojox.fx.toggleClass
                 * 
                 * @param cssClass             
                 * @param force             
                 * @param args             
                 */
                interface toggleClassFx{(cssClass: any, force: any, args: any): {type:Function;value:any}}
                /**
                 * 
                 */
                interface toString{(): any}
                /**
                 * If a value is passed, allows seting the value property of form elements in this
                 * NodeList, or properly selecting/checking the right value for radio/checkbox/select
                 * elements. If no value is passed, the value of the first node in this NodeList
                 * is returned.
                 * 
                 * @param value             
                 */
                interface val{(value: String): any}
                /**
                 * If a value is passed, allows seting the value property of form elements in this
                 * NodeList, or properly selecting/checking the right value for radio/checkbox/select
                 * elements. If no value is passed, the value of the first node in this NodeList
                 * is returned.
                 * 
                 * @param value             
                 */
                interface val{(value: any[]): any}
                /**
                 * wipe in all elements of this NodeList via dojo/fx.wipeIn()
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface wipeIn{(args: Object): any}
                /**
                 * wipe out all elements of this NodeList via dojo/fx.wipeOut()
                 * 
                 * @param args               OptionalAdditional dojo/_base/fx.Animation arguments to mix into this set with the addition ofan auto parameter.             
                 */
                interface wipeOut{(args: Object): any}
                /**
                 * Wrap each node in the NodeList with html passed to wrap.
                 * html will be cloned if the NodeList has more than one
                 * element. Only DOM nodes are cloned, not any attached
                 * event handlers.
                 * 
                 * @param html             
                 */
                interface wrap{(html: String): any}
                /**
                 * Wrap each node in the NodeList with html passed to wrap.
                 * html will be cloned if the NodeList has more than one
                 * element. Only DOM nodes are cloned, not any attached
                 * event handlers.
                 * 
                 * @param html             
                 */
                interface wrap{(html: HTMLElement): any}
                /**
                 * Insert html where the first node in this NodeList lives, then place all
                 * nodes in this NodeList as the child of the html.
                 * 
                 * @param html             
                 */
                interface wrapAll{(html: String): any}
                /**
                 * Insert html where the first node in this NodeList lives, then place all
                 * nodes in this NodeList as the child of the html.
                 * 
                 * @param html             
                 */
                interface wrapAll{(html: HTMLElement): any}
                /**
                 * For each node in the NodeList, wrap all its children with the passed in html.
                 * html will be cloned if the NodeList has more than one
                 * element. Only DOM nodes are cloned, not any attached
                 * event handlers.
                 * 
                 * @param html             
                 */
                interface wrapInner{(html: String): any}
                /**
                 * For each node in the NodeList, wrap all its children with the passed in html.
                 * html will be cloned if the NodeList has more than one
                 * element. Only DOM nodes are cloned, not any attached
                 * event handlers.
                 * 
                 * @param html             
                 */
                interface wrapInner{(html: HTMLElement): any}
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/ext-dojo/NodeList._nodeDataCache.html
                 *
                 * 
                 */
                interface _nodeDataCache {
                }
            }

        }

        module filter {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/dates.html
             *
             * 
             */
            interface dates {
                /**
                 * Formats a date according to the given format
                 * 
                 * @param value             
                 * @param arg             
                 */
                date(value: any, arg: any): String;
                /**
                 * Formats a time according to the given format
                 * 
                 * @param value             
                 * @param arg             
                 */
                time(value: any, arg: any): String;
                /**
                 * Formats a date as the time since that date (i.e. "4 days, 6 hours")
                 * 
                 * @param value             
                 * @param arg             
                 */
                timesince(value: any, arg: any): String;
                /**
                 * Formats a date as the time until that date (i.e. "4 days, 6 hours")
                 * 
                 * @param value             
                 * @param arg             
                 */
                timeuntil(value: any, arg: any): String;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/htmlstrings.html
             *
             * 
             */
            interface htmlstrings {
                /**
                 * Converts newlines into <p> and <br />s
                 * 
                 * @param value             
                 */
                linebreaks(value: any): any;
                /**
                 * Converts newlines into <br />s
                 * 
                 * @param value             
                 */
                linebreaksbr(value: any): any;
                /**
                 * Removes a space separated list of [X]HTML tags from the output"
                 * 
                 * @param value             
                 * @param arg             
                 */
                removetags(value: any, arg: any): any;
                /**
                 * Strips all [X]HTML tags
                 * 
                 * @param value             
                 */
                striptags(value: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/integers.html
             *
             * 
             */
            interface integers {
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                add(value: any, arg: any): number;
                /**
                 * Given a whole number, returns the 1-based requested digit of it
                 * 
                 * @param value             
                 * @param arg             
                 */
                get_digit(value: any, arg: any): number;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/logic.html
             *
             * 
             */
            interface logic {
                /**
                 * If value is unavailable, use given default
                 * 
                 * @param value             
                 * @param arg             
                 */
                default_(value: any, arg: any): String;
                /**
                 * If value is null, use given default
                 * 
                 * @param value             
                 * @param arg             
                 */
                default_if_none(value: any, arg: any): String;
                /**
                 * Returns true if the value is divisible by the argument"
                 * 
                 * @param value             
                 * @param arg             
                 */
                divisibleby(value: any, arg: any): boolean;
                /**
                 * arg being a comma-delimited string, value of true/false/none
                 * chooses the appropriate item from the string
                 * 
                 * @param value             
                 * @param arg             
                 */
                yesno(value: any, arg: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/misc.html
             *
             * 
             */
            interface misc {
                /**
                 * Format the value like a 'human-readable' file size (i.e. 13 KB, 4.1 MB, 102bytes, etc).
                 * 
                 * @param value             
                 */
                filesizeformat(value: any): String;
                /**
                 * Takes a phone number and converts it in to its numerical equivalent
                 * 
                 * @param value             
                 */
                phone2numeric(value: any): String;
                /**
                 * Returns a plural suffix if the value is not 1, for '1 vote' vs. '2 votes'
                 * By default, 's' is used as a suffix; if an argument is provided, that string
                 * is used instead. If the provided argument contains a comma, the text before
                 * the comma is used for the singular case.
                 * 
                 * @param value             
                 * @param arg             
                 */
                pluralize(value: any, arg: any): String;
                /**
                 * A wrapper around toJson unless something better comes along
                 * 
                 * @param value             
                 */
                pprint(value: any): any;
            }
            module misc {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/misc._phone2numeric.html
                 *
                 * 
                 */
                interface _phone2numeric {
                    /**
                     * 
                     */
                    a: number;
                    /**
                     * 
                     */
                    b: number;
                    /**
                     * 
                     */
                    c: number;
                    /**
                     * 
                     */
                    d: number;
                    /**
                     * 
                     */
                    e: number;
                    /**
                     * 
                     */
                    f: number;
                    /**
                     * 
                     */
                    g: number;
                    /**
                     * 
                     */
                    h: number;
                    /**
                     * 
                     */
                    i: number;
                    /**
                     * 
                     */
                    j: number;
                    /**
                     * 
                     */
                    k: number;
                    /**
                     * 
                     */
                    l: number;
                    /**
                     * 
                     */
                    m: number;
                    /**
                     * 
                     */
                    n: number;
                    /**
                     * 
                     */
                    o: number;
                    /**
                     * 
                     */
                    p: number;
                    /**
                     * 
                     */
                    r: number;
                    /**
                     * 
                     */
                    s: number;
                    /**
                     * 
                     */
                    t: number;
                    /**
                     * 
                     */
                    u: number;
                    /**
                     * 
                     */
                    v: number;
                    /**
                     * 
                     */
                    w: number;
                    /**
                     * 
                     */
                    x: number;
                    /**
                     * 
                     */
                    y: number;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/lists.html
             *
             * 
             */
            interface lists {
                /**
                 * Takes a list of dicts, returns that list sorted by the property given in the argument.
                 * 
                 * @param value             
                 * @param arg             
                 */
                dictsort(value: any, arg: any): any;
                /**
                 * Takes a list of dicts, returns that list sorted in reverse order by the property given in the argument.
                 * 
                 * @param value             
                 * @param arg             
                 */
                dictsortreversed(value: any, arg: any): any;
                /**
                 * Returns the first item in a list
                 * 
                 * @param value             
                 */
                first(value: any): String;
                /**
                 * Joins a list with a string, like Python's str.join(list)
                 * Django throws a compile error, but JS can't do arg checks
                 * so we're left with run time errors, which aren't wise for something
                 * as trivial here as an empty arg.
                 * 
                 * @param value             
                 * @param arg             
                 */
                join(value: any, arg: any): any;
                /**
                 * Returns the length of the value - useful for lists
                 * 
                 * @param value             
                 */
                length(value: any): any;
                /**
                 * Returns a boolean of whether the value's length is the argument
                 * 
                 * @param value             
                 * @param arg             
                 */
                length_is(value: any, arg: any): boolean;
                /**
                 * Returns a random item from the list
                 * 
                 * @param value             
                 */
                random(value: any): any;
                /**
                 * Returns a slice of the list.
                 * Uses the same syntax as Python's list slicing; see
                 * http://www.diveintopython.net/native_data_types/lists.html#odbchelper.list.slice
                 * for an introduction.
                 * Also uses the optional third value to denote every X item.
                 * 
                 * @param value             
                 * @param arg             
                 */
                slice(value: any, arg: any): any;
                /**
                 * Recursively takes a self-nested list and returns an HTML unordered list --
                 * WITHOUT opening and closing <ul> tags.
                 * The list is assumed to be in the proper format. For example, if var contains
                 * ['States', [['Kansas', [['Lawrence', []], ['Topeka', []]]], ['Illinois', []]]],
                 * then {{ var|unordered_list }} would return::
                 * 
                 * <li>States
                 * <ul>
                 *     <li>Kansas
                 *     <ul>
                 *         <li>Lawrence</li>
                 *         <li>Topeka</li>
                 *     </ul>
                 *     </li>
                 *     <li>Illinois</li>
                 * </ul>
                 * </li>
                 * 
                 * @param value             
                 */
                unordered_list(value: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/strings.html
             *
             * 
             */
            interface strings {
                /**
                 * Adds slashes - useful for passing strings to JavaScript, for example.
                 * 
                 * @param value             
                 */
                addslashes(value: any): any;
                /**
                 * Capitalizes the first character of the value
                 * 
                 * @param value             
                 */
                capfirst(value: any): number;
                /**
                 * Centers the value in a field of a given width
                 * 
                 * @param value             
                 * @param arg             
                 */
                center(value: any, arg: any): String;
                /**
                 * Removes all values of arg from the given string
                 * 
                 * @param value             
                 * @param arg             
                 */
                cut(value: any, arg: any): any;
                /**
                 * Replaces ampersands with &amp; entities
                 * 
                 * @param value             
                 */
                fix_ampersands(value: any): any;
                /**
                 * Format a number according to arg
                 * If called without an argument, displays a floating point
                 * number as 34.2 -- but only if there's a point to be displayed.
                 * With a positive numeric argument, it displays that many decimal places
                 * always.
                 * With a negative numeric argument, it will display that many decimal
                 * places -- but only if there's places to be displayed.
                 * 
                 * @param value             
                 * @param arg             
                 */
                floatformat(value: any, arg: any): any;
                /**
                 * 
                 * @param value             
                 */
                iriencode(value: any): any;
                /**
                 * Displays text with line numbers
                 * 
                 * @param value             
                 */
                linenumbers(value: any): any;
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                ljust(value: any, arg: any): String;
                /**
                 * Converts a string into all lowercase
                 * 
                 * @param value             
                 */
                lower(value: any): any;
                /**
                 * Returns the value turned into a list. For an integer, it's a list of
                 * digits. For a string, it's a list of characters.
                 * 
                 * @param value             
                 */
                make_list(value: any): any[];
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                rjust(value: any, arg: any): String;
                /**
                 * Converts to lowercase, removes
                 * non-alpha chars and converts spaces to hyphens
                 * 
                 * @param value             
                 */
                slugify(value: any): any;
                /**
                 * Formats the variable according to the argument, a string formatting specifier.
                 * This specifier uses Python string formatting syntax, with the exception that
                 * the leading "%" is dropped.
                 * 
                 * @param value             
                 * @param arg             
                 */
                stringformat(value: any, arg: any): any;
                /**
                 * Converts a string into titlecase
                 * 
                 * @param value             
                 */
                title(value: any): String;
                /**
                 * Truncates a string after a certain number of words
                 * 
                 * @param value             
                 * @param arg Number of words to truncate after             
                 */
                truncatewords(value: any, arg: number): any;
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                truncatewords_html(value: any, arg: any): String;
                /**
                 * 
                 * @param value             
                 */
                upper(value: any): any;
                /**
                 * 
                 * @param value             
                 */
                urlencode(value: any): any;
                /**
                 * 
                 * @param value             
                 */
                urlize(value: any): any;
                /**
                 * 
                 * @param value             
                 * @param arg             
                 */
                urlizetrunc(value: any, arg: any): any;
                /**
                 * 
                 * @param value             
                 */
                wordcount(value: any): number;
                /**
                 * 
                 * @param value alias name: 'cent', 'pound' ..             
                 * @param arg             
                 */
                wordwrap(value: String, arg: any): any;
            }
            module strings {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/strings._strings.html
                 *
                 * 
                 */
                interface _strings {
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/filter/strings._truncate_singlets.html
                 *
                 * 
                 */
                interface _truncate_singlets {
                    /**
                     * 
                     */
                    area: boolean;
                    /**
                     * 
                     */
                    base: boolean;
                    /**
                     * 
                     */
                    br: boolean;
                    /**
                     * 
                     */
                    col: boolean;
                    /**
                     * 
                     */
                    hr: boolean;
                    /**
                     * 
                     */
                    img: boolean;
                    /**
                     * 
                     */
                    input: boolean;
                    /**
                     * 
                     */
                    link: boolean;
                    /**
                     * 
                     */
                    param: boolean;
                }
            }

        }

        module render {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/render/dom.html
             *
             * 
             */
            interface dom {
                /**
                 * 
                 * @param attachPoint               Optional            
                 * @param tpl               Optional            
                 */
                Render(attachPoint: HTMLElement, tpl: dojox.dtl._DomTemplated): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/render/html.html
             *
             * 
             */
            interface html {
                /**
                 * 
                 * @param attachPoint               Optional            
                 * @param tpl               Optional            
                 */
                Render(attachPoint: HTMLElement, tpl: dojox.dtl._DomTemplated): void;
            }
        }

        module tag {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/tag/date.html
             *
             * 
             */
            interface date {
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                now(parser: any, token: any): void;
                /**
                 * 
                 * @param format             
                 * @param node             
                 */
                NowNode(format: any, node: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/tag/logic.html
             *
             * 
             */
            interface logic {
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                for_(parser: any, token: any): any;
                /**
                 * 
                 * @param assign             
                 * @param loop             
                 * @param reversed             
                 * @param nodelist             
                 */
                ForNode(assign: any, loop: any, reversed: any, nodelist: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                if_(parser: any, token: any): any;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                ifequal(parser: any, token: any): any;
                /**
                 * 
                 * @param var1             
                 * @param var2             
                 * @param trues             
                 * @param falses             
                 * @param negate             
                 */
                IfEqualNode(var1: any, var2: any, trues: any, falses: any, negate: any): void;
                /**
                 * 
                 * @param bools             
                 * @param trues             
                 * @param falses             
                 * @param type             
                 */
                IfNode(bools: any, trues: any, falses: any, type: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                ifnotequal(parser: any, token: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/tag/loader.html
             *
             * 
             */
            interface loader {
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                block(parser: any, token: any): any;
                /**
                 * 
                 * @param name             
                 * @param nodelist             
                 */
                BlockNode(name: any, nodelist: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                extends_(parser: any, token: any): any;
                /**
                 * 
                 * @param getTemplate             
                 * @param nodelist             
                 * @param shared             
                 * @param parent             
                 * @param key             
                 */
                ExtendsNode(getTemplate: any, nodelist: any, shared: any, parent: any, key: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                include(parser: any, token: any): any;
                /**
                 * 
                 * @param path             
                 * @param constant             
                 * @param getTemplate             
                 * @param text             
                 * @param parsed             
                 */
                IncludeNode(path: any, constant: any, getTemplate: any, text: any, parsed: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                ssi(parser: any, token: any): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/tag/loop.html
             *
             * 
             */
            interface loop {
                /**
                 * Cycle among the given strings each time this tag is encountered
                 * 
                 * @param parser             
                 * @param token             
                 */
                cycle(parser: any, token: any): any;
                /**
                 * 
                 * @param cyclevars             
                 * @param name             
                 * @param text             
                 * @param shared             
                 */
                CycleNode(cyclevars: any, name: any, text: any, shared: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                ifchanged(parser: any, token: any): any;
                /**
                 * 
                 * @param nodes             
                 * @param vars             
                 * @param shared             
                 */
                IfChangedNode(nodes: any, vars: any, shared: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                regroup(parser: any, token: any): any;
                /**
                 * 
                 * @param expression             
                 * @param key             
                 * @param alias             
                 */
                RegroupNode(expression: any, key: any, alias: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/tag/misc.html
             *
             * 
             */
            interface misc {
                /**
                 * Ignore everything between {% comment %} and {% endcomment %}
                 * 
                 * @param parser             
                 * @param token             
                 */
                comment(parser: any, token: any): any;
                /**
                 * Output the current context, maybe add more stuff later.
                 * 
                 * @param parser             
                 * @param token             
                 */
                debug(parser: any, token: any): any;
                /**
                 * 
                 * @param text             
                 */
                DebugNode(text: any): void;
                /**
                 * Filter the contents of the blog through variable filters.
                 * 
                 * @param parser             
                 * @param token             
                 */
                filter(parser: any, token: any): any;
                /**
                 * 
                 * @param varnode             
                 * @param nodelist             
                 */
                FilterNode(varnode: any, nodelist: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                firstof(parser: any, token: any): any;
                /**
                 * 
                 * @param vars             
                 * @param text             
                 */
                FirstOfNode(vars: any, text: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                spaceless(parser: any, token: any): any;
                /**
                 * 
                 * @param nodelist             
                 * @param text             
                 */
                SpacelessNode(nodelist: any, text: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                templatetag(parser: any, token: any): any;
                /**
                 * 
                 * @param tag             
                 * @param text             
                 */
                TemplateTagNode(tag: any, text: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                widthratio(parser: any, token: any): any;
                /**
                 * 
                 * @param current             
                 * @param max             
                 * @param width             
                 * @param text             
                 */
                WidthRatioNode(current: any, max: any, width: any, text: any): void;
                /**
                 * 
                 * @param parser             
                 * @param token             
                 */
                with_(parser: any, token: any): any;
                /**
                 * 
                 * @param target             
                 * @param alias             
                 * @param nodelist             
                 */
                WithNode(target: any, alias: any, nodelist: any): void;
            }
        }

        module utils {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/dtl/utils/date.html
             *
             * 
             */
            interface date {
                /**
                 * Format the internal date object
                 * 
                 * @param format             
                 */
                DateFormat(format: String): void;
            }
        }

    }

}

declare module "dojox/dtl" {
    var exp: dojox.dtl
    export=exp;
}
declare module "dojox/dtl/_Templated" {
    var exp: dojox.dtl._Templated
    export=exp;
}
declare module "dojox/dtl/Context" {
    var exp: dojox.dtl.Context
    export=exp;
}
declare module "dojox/dtl/_DomTemplated" {
    var exp: dojox.dtl._DomTemplated
    export=exp;
}
declare module "dojox/dtl/DomInline" {
    var exp: dojox.dtl.DomInline
    export=exp;
}
declare module "dojox/dtl/Inline" {
    var exp: dojox.dtl.Inline
    export=exp;
}
declare module "dojox/dtl/_base" {
    var exp: dojox.dtl._base
    export=exp;
}
declare module "dojox/dtl/_base._base" {
    var exp: dojox.dtl._base._base
    export=exp;
}
declare module "dojox/dtl/_base.BOOLS" {
    var exp: dojox.dtl._base.BOOLS
    export=exp;
}
declare module "dojox/dtl/_base.data" {
    var exp: dojox.dtl._base.data
    export=exp;
}
declare module "dojox/dtl/_base.date" {
    var exp: dojox.dtl._base.date
    export=exp;
}
declare module "dojox/dtl/_base.dates" {
    var exp: dojox.dtl._base.dates
    export=exp;
}
declare module "dojox/dtl/_base.dijit" {
    var exp: dojox.dtl._base.dijit
    export=exp;
}
declare module "dojox/dtl/_base.html" {
    var exp: dojox.dtl._base.html
    export=exp;
}
declare module "dojox/dtl/_base.htmlstrings" {
    var exp: dojox.dtl._base.htmlstrings
    export=exp;
}
declare module "dojox/dtl/_base.dom" {
    var exp: dojox.dtl._base.dom
    export=exp;
}
declare module "dojox/dtl/_base.integers" {
    var exp: dojox.dtl._base.integers
    export=exp;
}
declare module "dojox/dtl/_base.logic" {
    var exp: dojox.dtl._base.logic
    export=exp;
}
declare module "dojox/dtl/_base.loader" {
    var exp: dojox.dtl._base.loader
    export=exp;
}
declare module "dojox/dtl/_base.loop" {
    var exp: dojox.dtl._base.loop
    export=exp;
}
declare module "dojox/dtl/_base.misc" {
    var exp: dojox.dtl._base.misc
    export=exp;
}
declare module "dojox/dtl/_base.objects" {
    var exp: dojox.dtl._base.objects
    export=exp;
}
declare module "dojox/dtl/_base.strings" {
    var exp: dojox.dtl._base.strings
    export=exp;
}
declare module "dojox/dtl/_base.register" {
    var exp: dojox.dtl._base.register
    export=exp;
}
declare module "dojox/dtl/_base.text" {
    var exp: dojox.dtl._base.text
    export=exp;
}
declare module "dojox/dtl/dom" {
    var exp: dojox.dtl.dom
    export=exp;
}
declare module "dojox/dtl/dom._uppers" {
    var exp: dojox.dtl.dom._uppers
    export=exp;
}
declare module "dojox/dtl/dom._attributes" {
    var exp: dojox.dtl.dom._attributes
    export=exp;
}
declare module "dojox/dtl/contrib/data" {
    var exp: dojox.dtl.contrib.data
    export=exp;
}
declare module "dojox/dtl/contrib/objects" {
    var exp: dojox.dtl.contrib.objects
    export=exp;
}
declare module "dojox/dtl/contrib/dom" {
    var exp: dojox.dtl.contrib.dom
    export=exp;
}
declare module "dojox/dtl/contrib/dijit" {
    var exp: dojox.dtl.contrib.dijit
    export=exp;
}
declare module "dojox/dtl/ext-dojo/NodeList" {
    var exp: dojox.dtl.ext_dojo.NodeList
    export=exp;
}
declare module "dojox/dtl/ext-dojo/NodeList._nodeDataCache" {
    var exp: dojox.dtl.ext_dojo.NodeList._nodeDataCache
    export=exp;
}
declare module "dojox/dtl/filter/dates" {
    var exp: dojox.dtl.filter.dates
    export=exp;
}
declare module "dojox/dtl/filter/htmlstrings" {
    var exp: dojox.dtl.filter.htmlstrings
    export=exp;
}
declare module "dojox/dtl/filter/integers" {
    var exp: dojox.dtl.filter.integers
    export=exp;
}
declare module "dojox/dtl/filter/logic" {
    var exp: dojox.dtl.filter.logic
    export=exp;
}
declare module "dojox/dtl/filter/misc" {
    var exp: dojox.dtl.filter.misc
    export=exp;
}
declare module "dojox/dtl/filter/misc._phone2numeric" {
    var exp: dojox.dtl.filter.misc._phone2numeric
    export=exp;
}
declare module "dojox/dtl/filter/lists" {
    var exp: dojox.dtl.filter.lists
    export=exp;
}
declare module "dojox/dtl/filter/strings" {
    var exp: dojox.dtl.filter.strings
    export=exp;
}
declare module "dojox/dtl/filter/strings._strings" {
    var exp: dojox.dtl.filter.strings._strings
    export=exp;
}
declare module "dojox/dtl/filter/strings._truncate_singlets" {
    var exp: dojox.dtl.filter.strings._truncate_singlets
    export=exp;
}
declare module "dojox/dtl/render/html" {
    var exp: dojox.dtl.render.html
    export=exp;
}
declare module "dojox/dtl/render/dom" {
    var exp: dojox.dtl.render.dom
    export=exp;
}
declare module "dojox/dtl/tag/date" {
    var exp: dojox.dtl.tag.date
    export=exp;
}
declare module "dojox/dtl/tag/loader" {
    var exp: dojox.dtl.tag.loader
    export=exp;
}
declare module "dojox/dtl/tag/logic" {
    var exp: dojox.dtl.tag.logic
    export=exp;
}
declare module "dojox/dtl/tag/loop" {
    var exp: dojox.dtl.tag.loop
    export=exp;
}
declare module "dojox/dtl/tag/misc" {
    var exp: dojox.dtl.tag.misc
    export=exp;
}
declare module "dojox/dtl/utils/date" {
    var exp: dojox.dtl.utils.date
    export=exp;
}
