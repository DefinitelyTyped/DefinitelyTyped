// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/image.html
     *
     * Deprecated.  Should require dojox/image modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface image {
    }
    module image {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/FlickrBadge.html
         *
         * 
         */
        class FlickrBadge {
            constructor();
            /**
             * 
             */
            "apikey": string;
            /**
             * 
             */
            "children": string;
            /**
             * Free text search.  Photos who's title, description, or tags contain the text will be displayed
             * 
             */
            "searchText": string;
            /**
             * The id of the set to display
             * 
             */
            "setid": string;
            /**
             * A comma separated list of tags or an array of tags to grab from Flickr
             * 
             */
            "tags": string;
            /**
             * Where to display the pictures when clicked on.  Valid values are the same as the target attribute
             * of the A tag.
             * 
             */
            "target": string;
            /**
             * If you know your Flickr userid, you can set it to prevent a call to fetch the id
             * 
             */
            "userid": string;
            /**
             * Your Flickr username
             * 
             */
            "username": string;
            /**
             * 
             */
            postCreate(): void;
            /**
             * 
             */
            startup(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/Badge.html
         *
         * A simple grid of Images that loops through thumbnails
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
         */
        class Badge extends dijit._Widget implements dijit._TemplatedMixin {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
            /**
             * Object to which attach points and events will be scoped.  Defaults
             * to 'this'.
             * 
             */
            "attachScope": Object;
            set(property:"attachScope", value: Object): void;
            get(property:"attachScope"): Object;
            watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
            "attributeMap": Object;
            set(property:"attributeMap", value: Object): void;
            get(property:"attributeMap"): Object;
            watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * 
             */
            "baseClass": string;
            set(property:"baseClass", value: string): void;
            get(property:"baseClass"): string;
            watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Size in PX to adjust for cell margins
             * 
             */
            "cellMargin": number;
            set(property:"cellMargin", value: number): void;
            get(property:"cellMargin"): number;
            watch(property:"cellMargin", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * Size in PX of each thumbnail
             * 
             */
            "cellSize": number;
            set(property:"cellSize", value: number): void;
            get(property:"cellSize"): number;
            watch(property:"cellSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * A CSS3 Selector that determines the node to become a child
             * 
             */
            "children": string;
            set(property:"children", value: string): void;
            get(property:"children"): string;
            watch(property:"children", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "class": string;
            set(property:"class", value: string): void;
            get(property:"class"): string;
            watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Number of Columns to display
             * 
             */
            "cols": number;
            set(property:"cols", value: number): void;
            get(property:"cols"): number;
            watch(property:"cols", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
            "containerNode": HTMLElement;
            set(property:"containerNode", value: HTMLElement): void;
            get(property:"containerNode"): HTMLElement;
            watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * Time (in ms) to show the image before sizing down again
             * 
             */
            "delay": number;
            set(property:"delay", value: number): void;
            get(property:"delay"): number;
            watch(property:"delay", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             * 
             */
            "dir": string;
            set(property:"dir", value: string): void;
            get(property:"dir"): string;
            watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             * 
             */
            "domNode": HTMLElement;
            set(property:"domNode", value: HTMLElement): void;
            get(property:"domNode"): HTMLElement;
            watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * An easing function to use when showing the node (does not apply to shrinking)
             * 
             */
            "easing": Function;
            set(property:"easing", value: Function): void;
            get(property:"easing"): Function;
            watch(property:"easing", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             * 
             */
            "focused": boolean;
            set(property:"focused", value: boolean): void;
            get(property:"focused"): boolean;
            watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             * 
             */
            "id": string;
            set(property:"id", value: string): void;
            get(property:"id"): string;
            watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             * 
             */
            "lang": string;
            set(property:"lang", value: string): void;
            get(property:"lang"): string;
            watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "observer": string;
            set(property:"observer", value: string): void;
            get(property:"observer"): string;
            watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Number of Rows to display
             * 
             */
            "rows": number;
            set(property:"rows", value: number): void;
            get(property:"rows"): number;
            watch(property:"rows", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * 
             */
            "searchContainerNode": boolean;
            set(property:"searchContainerNode", value: boolean): void;
            get(property:"searchContainerNode"): boolean;
            watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * pointer to original DOM node
             * 
             */
            "srcNodeRef": HTMLElement;
            set(property:"srcNodeRef", value: HTMLElement): void;
            get(property:"srcNodeRef"): HTMLElement;
            watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * HTML style attributes as cssText string or name/value hash
             * 
             */
            "style": string;
            set(property:"style", value: string): void;
            get(property:"style"): string;
            watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Path to template (HTML file) for this widget relative to dojo.baseUrl.
             * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
             * 
             */
            "templatePath": string;
            set(property:"templatePath", value: string): void;
            get(property:"templatePath"): string;
            watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "templateString": string;
            set(property:"templateString", value: string): void;
            get(property:"templateString"): string;
            watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * how many cycles will be going "simultaneously" (>2 not reccommended)
             * 
             */
            "threads": number;
            set(property:"threads", value: number): void;
            get(property:"threads"): number;
            watch(property:"threads", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
            "title": string;
            set(property:"title", value: string): void;
            get(property:"title"): string;
            watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             * 
             */
            "tooltip": string;
            set(property:"tooltip", value: string): void;
            get(property:"tooltip"): string;
            watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: String, value: Object): any;
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: Object, value: Object): any;
            /**
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             * 
             */
            buildRendering(): void;
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
            connect(obj: Object, event: String, method: String): any;
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
            connect(obj: any, event: String, method: String): any;
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
            connect(obj: Object, event: Function, method: String): any;
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
            connect(obj: any, event: Function, method: String): any;
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
            connect(obj: Object, event: String, method: Function): any;
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
            connect(obj: any, event: String, method: Function): any;
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
            connect(obj: Object, event: Function, method: Function): any;
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
            connect(obj: any, event: Function, method: Function): any;
            /**
             * Wrapper to setTimeout to avoid deferred functions executing
             * after the originating widget has been destroyed.
             * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
             * 
             * @param fcn Function reference.             
             * @param delay               OptionalDelay, defaults to 0.             
             */
            defer(fcn: Function, delay: number): Object;
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
            destroy(preserveDom?: boolean): void;
            /**
             * Recursively destroy the children of this widget and their
             * descendants.
             * 
             * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
             */
            destroyDescendants(preserveDom: boolean): void;
            /**
             * Destroy this widget and its descendants
             * This is the generic "destructor" function that all widget users
             * should call to cleanly discard with a widget. Once a widget is
             * destroyed, it is removed from the manager object.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
             */
            destroyRecursive(preserveDom: boolean): void;
            /**
             * Destroys the DOM nodes associated with this widget.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
             */
            destroyRendering(preserveDom?: boolean): void;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Disconnects handle created by connect.
             * 
             * @param handle             
             */
            disconnect(handle: any): void;
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
            emit(type: String, eventObj: Object, callbackArgs: any[]): any;
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
            get(name: any): any;
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
            getChildren(): any[];
            /**
             * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
             * This method should generally be avoided as it returns widgets declared in templates, which are
             * supposed to be internal/hidden, but it's left here for back-compat reasons.
             * 
             */
            getDescendants(): any[];
            /**
             * Returns the parent widget of this widget.
             * 
             */
            getParent(): any;
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
            isFocusable(): any;
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
            isLeftToRight(): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: String, func: Function): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: Function, func: Function): any;
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             * 
             */
            own(): any;
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
            placeAt(reference: String, position: String): any;
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
            placeAt(reference: HTMLElement, position: String): any;
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
            placeAt(reference: dijit._WidgetBase, position: String): any;
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
            placeAt(reference: String, position: number): any;
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
            placeAt(reference: HTMLElement, position: number): any;
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
            placeAt(reference: dijit._WidgetBase, position: number): any;
            /**
             * 
             */
            postCreate(): void;
            /**
             * Called after the parameters to the widget have been read-in,
             * but before the widget template is instantiated. Especially
             * useful to set properties that are referenced in the widget
             * template.
             * 
             */
            postMixInProperties(): void;
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
            set(name: any, value: any): any;
            /**
             * Deprecated.  Use set() instead.
             * 
             * @param attr             
             * @param value             
             */
            setAttribute(attr: String, value: any): void;
            /**
             * 
             */
            startup(): void;
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
            subscribe(t: String, method: Function): any;
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
            toString(): string;
            /**
             * Deprecated. Override destroy() instead to implement custom widget tear-down
             * behavior.
             * 
             */
            uninitialize(): boolean;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Unsubscribes handle created by this.subscribe.
             * Also removes handle from this widget's list of subscriptions
             * 
             * @param handle             
             */
            unsubscribe(handle: Object): void;
            /**
             * Watches a property for changes
             * 
             * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
             * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
             */
            watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
            /**
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
            /**
             * Called when the widget stops being "active" because
             * focus moved to something outside of it, or the user
             * clicked somewhere outside of it, or the widget was
             * hidden.
             * 
             */
            onBlur(): void;
            /**
             * Connect to this function to receive notifications of mouse click events.
             * 
             * @param event mouse Event             
             */
            onClick(event: any): void;
            /**
             * Called when this widget is being displayed as a popup (ex: a Calendar popped
             * up from a DateTextBox), and it is hidden.
             * This is called from the dijit.popup code, and should not be called directly.
             * 
             * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
             * Callback if a user tries to close the child.   Child will be closed if this function returns true.
             * 
             */
            onClose(): boolean;
            /**
             * Connect to this function to receive notifications of mouse double click events.
             * 
             * @param event mouse Event             
             */
            onDblClick(event: any): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             * 
             */
            onFocus(): void;
            /**
             * Called when another widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onHide(): void;
            /**
             * Connect to this function to receive notifications of keys being pressed down.
             * 
             * @param event key Event             
             */
            onKeyDown(event: any): void;
            /**
             * Connect to this function to receive notifications of printable keys being typed.
             * 
             * @param event key Event             
             */
            onKeyPress(event: any): void;
            /**
             * Connect to this function to receive notifications of keys being released.
             * 
             * @param event key Event             
             */
            onKeyUp(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is pressed down.
             * 
             * @param event mouse Event             
             */
            onMouseDown(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto this widget.
             * 
             * @param event mouse Event             
             */
            onMouseEnter(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of this widget.
             * 
             * @param event mouse Event             
             */
            onMouseLeave(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseMove(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOut(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOver(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is released.
             * 
             * @param event mouse Event             
             */
            onMouseUp(event: any): void;
            /**
             * Called when this widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onShow(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/Lightbox.html
         *
         * A dojo-based Lightbox implementation.
         * An Elegant, keyboard accessible, markup and store capable Lightbox widget to show images
         * in a modal dialog-esque format. Can show individual images as Modal dialog, or can group
         * images with multiple entry points, all using a single "master" Dialog for visualization
         * 
         * key controls:
         * 
         * ESC - close
         * Down Arrow / Rt Arrow / N - Next Image
         * Up Arrow / Lf Arrow / P - Previous Image
         * 
         */
        class Lightbox {
            constructor();
            /**
             * Generic time in MS to adjust the feel of widget. could possibly add various
             * durations for the various actions (dialog fadein, sizeing, img fadein ...)
             * 
             */
            "duration": number;
            /**
             * Grouping images in a page with similar tags will provide a 'slideshow' like grouping of images
             * 
             */
            "group": string;
            /**
             * 
             */
            "href": string;
            /**
             * If true, this Dialog instance will be truly modal and prevent closing until
             * explicitly told to by calling hide() or clicking the (x) - Defaults to false
             * to preserve previous behaviors. (aka: enable click-to-close on the underlay)
             * 
             */
            "modal": boolean;
            /**
             * A string of text to be shown in the Lightbox beneath the image (empty if using a store)
             * 
             */
            "title": string;
            /**
             * 
             */
            destroy(): void;
            /**
             * Disables event clobbering and dialog, and follows natural link
             * 
             */
            disable(): void;
            /**
             * Enables the dialog (prevents default link)
             * 
             */
            enable(): void;
            /**
             * Hide the Lightbox currently showing
             * 
             */
            hide(): void;
            /**
             * 
             */
            LightboxDialog(): void;
            /**
             * Show the Lightbox with this instance as the starting point
             * 
             */
            show(): void;
            /**
             * 
             */
            startup(): void;
            /**
             * Stub fired when the image in the lightbox is clicked.
             * 
             */
            onClick(): void;
        }
        module Lightbox {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/Lightbox.LightboxDialog.html
             *
             * The "dialog" shared  between any Lightbox instances on the page, publically available
             * for programmatic manipulation.
             * A widget that intercepts anchor links (typically around images)
             * and displays a modal Dialog. this is the actual Dialog, which you can
             * create and populate manually, though should use simple Lightbox's
             * unless you need the direct access.
             * 
             * There should only be one of these on a page, so all dojox.image.Lightbox's will us it
             * (the first instance of a Lightbox to be show()'n will create me If i do not exist)
             * 
             * @param args     
             */
            class LightboxDialog {
                constructor(args: any);
                /**
                 * If true, ensure the image always stays within the viewport
                 * more difficult than necessary to disable, but enabled by default
                 * seems sane in most use cases.
                 * 
                 */
                "adjust": boolean;
                /**
                 * Path to the image used when a 404 is encountered
                 * 
                 */
                "errorImg": Object;
                /**
                 * The text to display when an unreachable image is linked
                 * 
                 */
                "errorMessage": string;
                /**
                 * The classname to apply to the image node in the dialog (for extra styling)
                 * 
                 */
                "imageClass": string;
                /**
                 * The src="" attribute of our imageNode (can be null at statup)
                 * 
                 */
                "imgUrl": string;
                /**
                 * Array of objects. this is populated by from the JSON object _groups, and
                 * should not be populate manually. it is a placeholder for the currently
                 * showing group of images in this master dialog
                 * 
                 */
                "inGroup": any[];
                /**
                 * If true, this Dialog instance will be truly modal and prevent closing until
                 * explicitly told to by calling hide() or clicking the (x) - Defaults to false
                 * to preserve previous behaviors. (aka: enable click-to-close on the underlay)
                 * 
                 */
                "modal": boolean;
                /**
                 * 
                 */
                "templateString": string;
                /**
                 * The current title, read from object passed to show()
                 * 
                 */
                "title": string;
                /**
                 * Add an image to this Master Lightbox
                 * 
                 * @param child The image information to add.href: String - link to image (required)title: String - title to display             
                 * @param group               Optionalattach to group of similar tag or null for individual image instance             
                 */
                addImage(child: Object, group: String): void;
                /**
                 * Hide the Master Lightbox
                 * 
                 */
                hide(): void;
                /**
                 * Remove all images in a passed group
                 * 
                 * @param group             
                 */
                removeGroup(group: any): void;
                /**
                 * Remove an image instance from this LightboxDialog.
                 * 
                 * @param child A reference to the Lightbox child that was added (or an object literal)only the .href member is compared for uniqueness. The object may containa .group member as well.             
                 */
                removeImage(child: Object): void;
                /**
                 * Resize our dialog container, and fire _showImage
                 * 
                 * @param size             
                 * @param forceTitle             
                 */
                resizeTo(size: Object, forceTitle: any): void;
                /**
                 * Show the Master Dialog. Starts the chain of events to show
                 * an image in the dialog, including showing the dialog if it is
                 * not already visible
                 * 
                 * @param groupData needs href and title attributes. the values for this image.             
                 */
                show(groupData: Object): void;
                /**
                 * Add some extra event handlers, and startup our superclass.
                 * 
                 */
                startup(): any;
                /**
                 * a stub function, called with the currently displayed image as the only argument
                 * 
                 * @param groupData             
                 */
                onClick(groupData: any): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/LightboxNano.html
         *
         * A simple "nano" version of the lightbox.
         * Very lightweight lightbox which only displays a larger image.  There is
         * no support for a caption or description.  The lightbox can be closed by
         * clicking any where or pressing any key.  This widget is intended to be
         * used on <a> and <img> tags.  Upon creation, if the domNode is <img> tag,
         * then it is wrapped in an <a> tag, then a <div class="enlarge"> is placed
         * inside the <a> and can be styled to display an icon that the original
         * can be enlarged.
         * 
         * @param p       Optional    
         * @param n       Optional    
         */
        class LightboxNano {
            constructor(p?: Object, n?: HTMLElement);
            /**
             * The delay in milliseconds of the LightboxNano open and close animation.
             * 
             */
            "duration": number;
            /**
             * URL to the large image to show in the lightbox.
             * 
             */
            "href": string;
            /**
             * The delay in milliseconds after the LightboxNano is created before preloading the larger image.
             * 
             */
            "preloadDelay": number;
            /**
             * Destroys the LightboxNano and it's DOM node
             * 
             */
            destroy(): void;
            /**
             * Shows this LightboxNano programatically. Allows passing a new href and
             * a programmatic origin.
             * 
             * @param args               OptionalAn object with optional members of href and origin.origin can be be a String|Id of a DomNode to use whenanimating the opening of the image (the 'box' effect startsfrom this origin point. eg: { origin: e.target })If there's no origin, it will use the center of the viewport.The href member is a string URL for the image to bedisplayed. Omitting either of these members will revert tothe default href (which could be absent in some cases) andthe original srcNodeRef for the widget.             
             */
            show(args: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/Magnifier.html
         *
         * Adds magnification on a portion of an image element, using dojox.gfx
         * An unobtrusive way to add an unstyled overlay
         * above the srcNode image element. The overlay/glass is a
         * scaled version of the src image (so larger images sized down
         * are clearer).
         * 
         * over-ride the _createGlass method to create your custom surface,
         * being sure to create an img node on that surface.
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
         */
        class Magnifier extends dojox.image.MagnifierLite {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
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
            "attributeMap": Object;
            set(property:"attributeMap", value: Object): void;
            get(property:"attributeMap"): Object;
            watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
             * widget state.
             * 
             */
            "baseClass": string;
            set(property:"baseClass", value: string): void;
            get(property:"baseClass"): string;
            watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "class": string;
            set(property:"class", value: string): void;
            get(property:"class"): string;
            watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
            "containerNode": HTMLElement;
            set(property:"containerNode", value: HTMLElement): void;
            get(property:"containerNode"): HTMLElement;
            watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             * 
             */
            "dir": string;
            set(property:"dir", value: string): void;
            get(property:"dir"): string;
            watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             * 
             */
            "domNode": HTMLElement;
            set(property:"domNode", value: HTMLElement): void;
            get(property:"domNode"): HTMLElement;
            watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             * 
             */
            "focused": boolean;
            set(property:"focused", value: boolean): void;
            get(property:"focused"): boolean;
            watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * the width and height of the bounding box
             * 
             */
            "glassSize": number;
            set(property:"glassSize", value: number): void;
            get(property:"glassSize"): number;
            watch(property:"glassSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             * 
             */
            "id": string;
            set(property:"id", value: string): void;
            get(property:"id"): string;
            watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             * 
             */
            "lang": string;
            set(property:"lang", value: string): void;
            get(property:"lang"): string;
            watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "observer": string;
            set(property:"observer", value: string): void;
            get(property:"observer"): string;
            watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * the multiplier of the Mangification.
             * 
             */
            "scale": Object;
            set(property:"scale", value: Object): void;
            get(property:"scale"): Object;
            watch(property:"scale", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * pointer to original DOM node
             * 
             */
            "srcNodeRef": HTMLElement;
            set(property:"srcNodeRef", value: HTMLElement): void;
            get(property:"srcNodeRef"): HTMLElement;
            watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * HTML style attributes as cssText string or name/value hash
             * 
             */
            "style": string;
            set(property:"style", value: string): void;
            get(property:"style"): string;
            watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
            "title": string;
            set(property:"title", value: string): void;
            get(property:"title"): string;
            watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             * 
             */
            "tooltip": string;
            set(property:"tooltip", value: string): void;
            get(property:"tooltip"): string;
            watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: String, value: Object): any;
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: Object, value: Object): any;
            /**
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             * 
             */
            buildRendering(): void;
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
            connect(obj: Object, event: String, method: String): any;
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
            connect(obj: any, event: String, method: String): any;
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
            connect(obj: Object, event: Function, method: String): any;
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
            connect(obj: any, event: Function, method: String): any;
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
            connect(obj: Object, event: String, method: Function): any;
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
            connect(obj: any, event: String, method: Function): any;
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
            connect(obj: Object, event: Function, method: Function): any;
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
            connect(obj: any, event: Function, method: Function): any;
            /**
             * Wrapper to setTimeout to avoid deferred functions executing
             * after the originating widget has been destroyed.
             * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
             * 
             * @param fcn Function reference.             
             * @param delay               OptionalDelay, defaults to 0.             
             */
            defer(fcn: Function, delay: number): Object;
            /**
             * 
             * @param finalize             
             */
            destroy(finalize: any): void;
            /**
             * Recursively destroy the children of this widget and their
             * descendants.
             * 
             * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
             */
            destroyDescendants(preserveDom: boolean): void;
            /**
             * Destroy this widget and its descendants
             * This is the generic "destructor" function that all widget users
             * should call to cleanly discard with a widget. Once a widget is
             * destroyed, it is removed from the manager object.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
             */
            destroyRecursive(preserveDom: boolean): void;
            /**
             * Destroys the DOM nodes associated with this widget.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
             */
            destroyRendering(preserveDom?: boolean): void;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Disconnects handle created by connect.
             * 
             * @param handle             
             */
            disconnect(handle: any): void;
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
            emit(type: String, eventObj: Object, callbackArgs: any[]): any;
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
            get(name: any): any;
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
            getChildren(): any[];
            /**
             * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
             * This method should generally be avoided as it returns widgets declared in templates, which are
             * supposed to be internal/hidden, but it's left here for back-compat reasons.
             * 
             */
            getDescendants(): any[];
            /**
             * Returns the parent widget of this widget.
             * 
             */
            getParent(): any;
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
            isFocusable(): any;
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
            isLeftToRight(): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: String, func: Function): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: Function, func: Function): any;
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             * 
             */
            own(): any;
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
            placeAt(reference: String, position: String): any;
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
            placeAt(reference: HTMLElement, position: String): any;
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
            placeAt(reference: dijit._WidgetBase, position: String): any;
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
            placeAt(reference: String, position: number): any;
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
            placeAt(reference: HTMLElement, position: number): any;
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
            placeAt(reference: dijit._WidgetBase, position: number): any;
            /**
             * 
             */
            postCreate(): void;
            /**
             * Called after the parameters to the widget have been read-in,
             * but before the widget template is instantiated. Especially
             * useful to set properties that are referenced in the widget
             * template.
             * 
             */
            postMixInProperties(): void;
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
            set(name: any, value: any): any;
            /**
             * Deprecated.  Use set() instead.
             * 
             * @param attr             
             * @param value             
             */
            setAttribute(attr: String, value: any): void;
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
            startup(): void;
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
            subscribe(t: String, method: Function): any;
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
            toString(): string;
            /**
             * Deprecated. Override destroy() instead to implement custom widget tear-down
             * behavior.
             * 
             */
            uninitialize(): boolean;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Unsubscribes handle created by this.subscribe.
             * Also removes handle from this widget's list of subscriptions
             * 
             * @param handle             
             */
            unsubscribe(handle: Object): void;
            /**
             * Watches a property for changes
             * 
             * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
             * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
             */
            watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
            /**
             * Called when the widget stops being "active" because
             * focus moved to something outside of it, or the user
             * clicked somewhere outside of it, or the widget was
             * hidden.
             * 
             */
            onBlur(): void;
            /**
             * Connect to this function to receive notifications of mouse click events.
             * 
             * @param event mouse Event             
             */
            onClick(event: any): void;
            /**
             * Called when this widget is being displayed as a popup (ex: a Calendar popped
             * up from a DateTextBox), and it is hidden.
             * This is called from the dijit.popup code, and should not be called directly.
             * 
             * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
             * Callback if a user tries to close the child.   Child will be closed if this function returns true.
             * 
             */
            onClose(): boolean;
            /**
             * Connect to this function to receive notifications of mouse double click events.
             * 
             * @param event mouse Event             
             */
            onDblClick(event: any): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             * 
             */
            onFocus(): void;
            /**
             * Called when another widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onHide(): void;
            /**
             * Connect to this function to receive notifications of keys being pressed down.
             * 
             * @param event key Event             
             */
            onKeyDown(event: any): void;
            /**
             * Connect to this function to receive notifications of printable keys being typed.
             * 
             * @param event key Event             
             */
            onKeyPress(event: any): void;
            /**
             * Connect to this function to receive notifications of keys being released.
             * 
             * @param event key Event             
             */
            onKeyUp(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is pressed down.
             * 
             * @param event mouse Event             
             */
            onMouseDown(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto this widget.
             * 
             * @param event mouse Event             
             */
            onMouseEnter(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of this widget.
             * 
             * @param event mouse Event             
             */
            onMouseLeave(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseMove(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOut(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOver(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is released.
             * 
             * @param event mouse Event             
             */
            onMouseUp(event: any): void;
            /**
             * Called when this widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onShow(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/image/MagnifierLite.html
         *
         * Adds magnification on a portion of an image element
         * An unobtrusive way to add an unstyled overlay
         * above the srcNode image element. The overlay/glass is a
         * scaled version of the src image (so larger images sized down
         * are clearer).
         * 
         * The logic behind requiring the src image to be large is
         * "it's going to be downloaded, anyway" so this method avoids
         * having to make thumbnails and 2 http requests among other things.
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
         */
        class MagnifierLite extends dijit._Widget {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
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
            "attributeMap": Object;
            set(property:"attributeMap", value: Object): void;
            get(property:"attributeMap"): Object;
            watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
             * widget state.
             * 
             */
            "baseClass": string;
            set(property:"baseClass", value: string): void;
            get(property:"baseClass"): string;
            watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "class": string;
            set(property:"class", value: string): void;
            get(property:"class"): string;
            watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
            "containerNode": HTMLElement;
            set(property:"containerNode", value: HTMLElement): void;
            get(property:"containerNode"): HTMLElement;
            watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * Bi-directional support, as defined by the HTML DIR
             * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
             * default direction.
             * 
             */
            "dir": string;
            set(property:"dir", value: string): void;
            get(property:"dir"): string;
            watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This is our visible representation of the widget! Other DOM
             * Nodes may by assigned to other properties, usually through the
             * template system's data-dojo-attach-point syntax, but the domNode
             * property is the canonical "top level" node in widget UI.
             * 
             */
            "domNode": HTMLElement;
            set(property:"domNode", value: HTMLElement): void;
            get(property:"domNode"): HTMLElement;
            watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * This widget or a widget it contains has focus, or is "active" because
             * it was recently clicked.
             * 
             */
            "focused": boolean;
            set(property:"focused", value: boolean): void;
            get(property:"focused"): boolean;
            watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * the width and height of the bounding box
             * 
             */
            "glassSize": number;
            set(property:"glassSize", value: number): void;
            get(property:"glassSize"): number;
            watch(property:"glassSize", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * A unique, opaque ID string that can be assigned by users or by the
             * system. If the developer passes an ID which is known not to be
             * unique, the specified ID is ignored and the system-generated ID is
             * used instead.
             * 
             */
            "id": string;
            set(property:"id", value: string): void;
            get(property:"id"): string;
            watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Rarely used.  Overrides the default Dojo locale used to render this widget,
             * as defined by the HTML LANG attribute.
             * Value must be among the list of locales specified during by the Dojo bootstrap,
             * formatted according to RFC 3066 (like en-us).
             * 
             */
            "lang": string;
            set(property:"lang", value: string): void;
            get(property:"lang"): string;
            watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * 
             */
            "observer": string;
            set(property:"observer", value: string): void;
            get(property:"observer"): string;
            watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             * 
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * the multiplier of the Mangification.
             * 
             */
            "scale": Object;
            set(property:"scale", value: Object): void;
            get(property:"scale"): Object;
            watch(property:"scale", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * pointer to original DOM node
             * 
             */
            "srcNodeRef": HTMLElement;
            set(property:"srcNodeRef", value: HTMLElement): void;
            get(property:"srcNodeRef"): HTMLElement;
            watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * HTML style attributes as cssText string or name/value hash
             * 
             */
            "style": string;
            set(property:"style", value: string): void;
            get(property:"style"): string;
            watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
            "title": string;
            set(property:"title", value: string): void;
            get(property:"title"): string;
            watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
             * this specifies the tooltip to appear when the mouse is hovered over that text.
             * 
             */
            "tooltip": string;
            set(property:"tooltip", value: string): void;
            get(property:"tooltip"): string;
            watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: String, value: Object): any;
            /**
             * This method is deprecated, use get() or set() directly.
             * 
             * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
             * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
             */
            attr(name: Object, value: Object): any;
            /**
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             * 
             */
            buildRendering(): void;
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
            connect(obj: Object, event: String, method: String): any;
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
            connect(obj: any, event: String, method: String): any;
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
            connect(obj: Object, event: Function, method: String): any;
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
            connect(obj: any, event: Function, method: String): any;
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
            connect(obj: Object, event: String, method: Function): any;
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
            connect(obj: any, event: String, method: Function): any;
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
            connect(obj: Object, event: Function, method: Function): any;
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
            connect(obj: any, event: Function, method: Function): any;
            /**
             * Wrapper to setTimeout to avoid deferred functions executing
             * after the originating widget has been destroyed.
             * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
             * 
             * @param fcn Function reference.             
             * @param delay               OptionalDelay, defaults to 0.             
             */
            defer(fcn: Function, delay: number): Object;
            /**
             * 
             * @param finalize             
             */
            destroy(finalize: any): void;
            /**
             * Recursively destroy the children of this widget and their
             * descendants.
             * 
             * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
             */
            destroyDescendants(preserveDom: boolean): void;
            /**
             * Destroy this widget and its descendants
             * This is the generic "destructor" function that all widget users
             * should call to cleanly discard with a widget. Once a widget is
             * destroyed, it is removed from the manager object.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
             */
            destroyRecursive(preserveDom: boolean): void;
            /**
             * Destroys the DOM nodes associated with this widget.
             * 
             * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
             */
            destroyRendering(preserveDom?: boolean): void;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Disconnects handle created by connect.
             * 
             * @param handle             
             */
            disconnect(handle: any): void;
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
            emit(type: String, eventObj: Object, callbackArgs: any[]): any;
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
            get(name: any): any;
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
            getChildren(): any[];
            /**
             * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
             * This method should generally be avoided as it returns widgets declared in templates, which are
             * supposed to be internal/hidden, but it's left here for back-compat reasons.
             * 
             */
            getDescendants(): any[];
            /**
             * Returns the parent widget of this widget.
             * 
             */
            getParent(): any;
            /**
             * Return true if this widget can currently be focused
             * and false if not
             * 
             */
            isFocusable(): any;
            /**
             * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
             * 
             */
            isLeftToRight(): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: String, func: Function): any;
            /**
             * 
             * @param type protected             
             * @param func             
             */
            on(type: Function, func: Function): any;
            /**
             * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
             * already removed/destroyed manually.
             * 
             */
            own(): any;
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
            placeAt(reference: String, position: String): any;
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
            placeAt(reference: HTMLElement, position: String): any;
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
            placeAt(reference: dijit._WidgetBase, position: String): any;
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
            placeAt(reference: String, position: number): any;
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
            placeAt(reference: HTMLElement, position: number): any;
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
            placeAt(reference: dijit._WidgetBase, position: number): any;
            /**
             * 
             */
            postCreate(): void;
            /**
             * Called after the parameters to the widget have been read-in,
             * but before the widget template is instantiated. Especially
             * useful to set properties that are referenced in the widget
             * template.
             * 
             */
            postMixInProperties(): void;
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
            set(name: any, value: any): any;
            /**
             * Deprecated.  Use set() instead.
             * 
             * @param attr             
             * @param value             
             */
            setAttribute(attr: String, value: any): void;
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
            startup(): void;
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
            subscribe(t: String, method: Function): any;
            /**
             * Returns a string that represents the widget.
             * When a widget is cast to a string, this method will be used to generate the
             * output. Currently, it does not implement any sort of reversible
             * serialization.
             * 
             */
            toString(): string;
            /**
             * Deprecated. Override destroy() instead to implement custom widget tear-down
             * behavior.
             * 
             */
            uninitialize(): boolean;
            /**
             * Deprecated, will be removed in 2.0, use handle.remove() instead.
             * 
             * Unsubscribes handle created by this.subscribe.
             * Also removes handle from this widget's list of subscriptions
             * 
             * @param handle             
             */
            unsubscribe(handle: Object): void;
            /**
             * Watches a property for changes
             * 
             * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
             * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
             */
            watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
            /**
             * Called when the widget stops being "active" because
             * focus moved to something outside of it, or the user
             * clicked somewhere outside of it, or the widget was
             * hidden.
             * 
             */
            onBlur(): void;
            /**
             * Connect to this function to receive notifications of mouse click events.
             * 
             * @param event mouse Event             
             */
            onClick(event: any): void;
            /**
             * Called when this widget is being displayed as a popup (ex: a Calendar popped
             * up from a DateTextBox), and it is hidden.
             * This is called from the dijit.popup code, and should not be called directly.
             * 
             * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
             * Callback if a user tries to close the child.   Child will be closed if this function returns true.
             * 
             */
            onClose(): boolean;
            /**
             * Connect to this function to receive notifications of mouse double click events.
             * 
             * @param event mouse Event             
             */
            onDblClick(event: any): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             * 
             */
            onFocus(): void;
            /**
             * Called when another widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onHide(): void;
            /**
             * Connect to this function to receive notifications of keys being pressed down.
             * 
             * @param event key Event             
             */
            onKeyDown(event: any): void;
            /**
             * Connect to this function to receive notifications of printable keys being typed.
             * 
             * @param event key Event             
             */
            onKeyPress(event: any): void;
            /**
             * Connect to this function to receive notifications of keys being released.
             * 
             * @param event key Event             
             */
            onKeyUp(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is pressed down.
             * 
             * @param event mouse Event             
             */
            onMouseDown(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto this widget.
             * 
             * @param event mouse Event             
             */
            onMouseEnter(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of this widget.
             * 
             * @param event mouse Event             
             */
            onMouseLeave(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseMove(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOut(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
             * 
             * @param event mouse Event             
             */
            onMouseOver(event: any): void;
            /**
             * Connect to this function to receive notifications of when the mouse button is released.
             * 
             * @param event mouse Event             
             */
            onMouseUp(event: any): void;
            /**
             * Called when this widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onShow(): void;
        }
        module _base {
        }

    }

}

declare module "dojox/image" {
    var exp: dojox.image
    export=exp;
}
declare module "dojox/image/FlickrBadge" {
    var exp: dojox.image.FlickrBadge
    export=exp;
}
declare module "dojox/image/Lightbox" {
    var exp: dojox.image.Lightbox
    export=exp;
}
declare module "dojox/image/Lightbox.LightboxDialog" {
    var exp: dojox.image.Lightbox.LightboxDialog
    export=exp;
}
declare module "dojox/image/LightboxNano" {
    var exp: dojox.image.LightboxNano
    export=exp;
}
declare module "dojox/image/Badge" {
    var exp: dojox.image.Badge
    export=exp;
}
declare module "dojox/image/Magnifier" {
    var exp: dojox.image.Magnifier
    export=exp;
}
declare module "dojox/image/MagnifierLite" {
    var exp: dojox.image.MagnifierLite
    export=exp;
}
