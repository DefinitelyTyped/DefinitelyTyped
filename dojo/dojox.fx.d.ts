// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx.html
     *
     * Deprecated.  Should require dojox/fx modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface fx {
    }
    module fx {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/Shadow.html
         *
         * Adds a drop-shadow to a node.
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
         */
        class Shadow extends dijit._Widget {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
            /**
             * A toggle to disable animated transitions
             * 
             */
            "animate": boolean;
            set(property:"animate", value: boolean): void;
            get(property:"animate"): boolean;
            watch(property:"animate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
             * The node we will be applying this shadow to
             * 
             */
            "node": HTMLElement;
            set(property:"node", value: HTMLElement): void;
            get(property:"node"): HTMLElement;
            watch(property:"node", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
            /**
             * 
             */
            "observer": string;
            set(property:"observer", value: string): void;
            get(property:"observer"): string;
            watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Overall opacity of the shadow
             * 
             */
            "opacity": number;
            set(property:"opacity", value: number): void;
            get(property:"opacity"): number;
            watch(property:"opacity", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
             * How deep to make the shadow appear to be
             * 
             */
            "shadowOffset": number;
            set(property:"shadowOffset", value: number): void;
            get(property:"shadowOffset"): number;
            watch(property:"shadowOffset", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * Base location for drop-shadow images
             * 
             */
            "shadowPng": string;
            set(property:"shadowPng", value: string): void;
            get(property:"shadowPng"): string;
            watch(property:"shadowPng", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * How wide (in px) to make the shadow
             * 
             */
            "shadowThickness": number;
            set(property:"shadowThickness", value: number): void;
            get(property:"shadowThickness"): number;
            watch(property:"shadowThickness", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
             * Resizes the shadow based on width and height.
             * 
             * @param args             
             */
            resize(args: Object): void;
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
             * enable / disable the shadow
             * 
             * @param disabled             
             */
            setDisabled(disabled: boolean): void;
            /**
             * set the opacity of the underlay
             * 
             * @param n             
             * @param animArgs               Optional            
             */
            setOpacity(n: number, animArgs: Object): void;
            /**
             * Initializes the shadow.
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
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_base.html
         *
         * Experimental and extended Animations beyond Dojo Core / Base functionality.
         * Provides advanced Lines, Animations, and convenience aliases.
         * 
         */
        interface _base {
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: String, cssClass: String, args: Object): any;
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: HTMLElement, cssClass: String, args: Object): any;
            /**
             * An add-on to dojo.fx that provides the ability to create
             * a complex property animation based on an array of "keyframes".
             * The Timeline is a replacement for the default dojo._Line.
             * Instead of _Line.getValue returning a float between 0-1,
             * _Timeline.getValue returns an object with all properties and
             * their current values.
             * A property does not have to appear in every keyframe.
             * As in the example below, "height" is transitioned from the first
             * keyframe to the third. "width" is transitioned from the first
             * to the second to the third.
             * Each keyframe can accept the following custom properties:
             * 
             * step: String:
             * The start, finish or percentage that this keyframe represents.
             * Allowed parameters are:
             * 0%-100%
             * from (same as 0%, used to conform with the Webkit animation spec)
             * to (same as 100%, used to conform with the Webkit animation spec)
             * 
             * ease: String:
             * The string name of a dojo.fx.easing ease. Defaults to "linear". Use
             * the suffix name of the ease, like: "quadIn", not: "dojo.fx.quadIn".
             * 
             * @param options The parameters passed to the timeline animation. Includes:keys: Array: An array of objects, with style properties and values.duration: Duration of the animation in milliseconds.  Defaults to 1000.             
             * @param node The node to manipulate             
             */
            animateTimeline(options: Object, node: HTMLElement): void;
            /**
             * Animate a node flipping following a specific direction
             * Returns an animation that will flip the
             * node around a central axis:
             * 
             * if args.dir is "left" or "right" --> y axis
             * 
             * if args.dir is "top" or "bottom" --> x axis
             * 
             * This effect is obtained using a border distortion applied to a helper node.
             * 
             * The user can specify three background colors for the helper node:
             * 
             * darkColor: the darkest color reached during the animation
             * lightColor: the brightest color
             * endColor: the final backgroundColor for the node
             * Other arguments:
             * 
             * depth: Float
             * 0 <= depth <= 1 overrides the computed "depth"
             * (0: min distortion, 1: max distortion)
             * 
             * 
             * whichAnim: String
             * "first"            : the first half animation
             * "last"             : the second one
             * "both" (default) : both
             * 
             * axis: String
             * "center" (default)      : the node is flipped around his center
             * "shortside"             : the node is flipped around his "short" (in perspective) side
             * "longside"              : the node is flipped around his "long" (in perspective) side
             * "cube"                  : the node flips around the central axis of the cube
             * 
             * shift: Integer:
             *   node translation, perpendicular to the rotation axis
             * 
             * 
             * @param args             
             */
            flip(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a more 3d-like rotation
             * An extension to dojox.fx.flip providing a more 3d-like rotation.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipCube(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a decomposition in rows * cols flipping elements
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties and
             * 
             * cols: Integer columns
             * rows: Integer rows
             * duration: the single flip duration
             * 
             * @param args             
             */
            flipGrid(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a page flip like animation.
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipPage(args: Object): void;
            /**
             * Animate the effects of removing a class from a node
             * Creates an animation that will animate the properties of a
             * node (args.node) to the properties calculated after removing
             * a standard CSS className from a that node.
             * 
             * calls dojo.removeClass(args.cssClass) onEnd of animation
             * 
             * standard dojo.Animation object rules apply.
             * 
             * @param node             
             * @param cssClass             
             * @param args             
             */
            removeClass(node: any, cssClass: any, args: any): any;
            /**
             * Returns an animation that will smooth-scroll to a node
             * This implementation support either horizontal or vertical scroll, as well as
             * both. In addition, element in iframe can be scrolled to correctly.
             * 
             * @param args offset: {x: int, y: int} this will be added to the target positionduration: Duration of the animation in milliseconds.win: a node or window object to scroll             
             */
            smoothScroll(args: Object): void;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/easing.html
         *
         * An Alias to dojo.fx.easing. Moved to Core in Dojo 1.2.
         * 
         */
        interface easing {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_arg.html
         *
         * 
         */
        interface _arg {
            /**
             * The odd way to document object parameters.
             * 
             * @param args             
             */
            ShadowResizeArgs: {
                (args: Object): {
                    x: number
                    y: number
                }
            };
            /**
             * The node and CSS class to use for style manipulations.
             * 
             * @param args             
             */
            StyleArgs: {
                (args: Object): {
                    node: HTMLElement
                    cssClass: string
                }
            };
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/flip.html
         *
         * Experimental and extended Animations beyond Dojo Core / Base functionality.
         * Provides advanced Lines, Animations, and convenience aliases.
         * 
         */
        interface flip {
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: String, cssClass: String, args: Object): any;
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: HTMLElement, cssClass: String, args: Object): any;
            /**
             * An add-on to dojo.fx that provides the ability to create
             * a complex property animation based on an array of "keyframes".
             * The Timeline is a replacement for the default dojo._Line.
             * Instead of _Line.getValue returning a float between 0-1,
             * _Timeline.getValue returns an object with all properties and
             * their current values.
             * A property does not have to appear in every keyframe.
             * As in the example below, "height" is transitioned from the first
             * keyframe to the third. "width" is transitioned from the first
             * to the second to the third.
             * Each keyframe can accept the following custom properties:
             * 
             * step: String:
             * The start, finish or percentage that this keyframe represents.
             * Allowed parameters are:
             * 0%-100%
             * from (same as 0%, used to conform with the Webkit animation spec)
             * to (same as 100%, used to conform with the Webkit animation spec)
             * 
             * ease: String:
             * The string name of a dojo.fx.easing ease. Defaults to "linear". Use
             * the suffix name of the ease, like: "quadIn", not: "dojo.fx.quadIn".
             * 
             * @param options The parameters passed to the timeline animation. Includes:keys: Array: An array of objects, with style properties and values.duration: Duration of the animation in milliseconds.  Defaults to 1000.             
             * @param node The node to manipulate             
             */
            animateTimeline(options: Object, node: HTMLElement): void;
            /**
             * Animate a node flipping following a specific direction
             * Returns an animation that will flip the
             * node around a central axis:
             * 
             * if args.dir is "left" or "right" --> y axis
             * 
             * if args.dir is "top" or "bottom" --> x axis
             * 
             * This effect is obtained using a border distortion applied to a helper node.
             * 
             * The user can specify three background colors for the helper node:
             * 
             * darkColor: the darkest color reached during the animation
             * lightColor: the brightest color
             * endColor: the final backgroundColor for the node
             * Other arguments:
             * 
             * depth: Float
             * 0 <= depth <= 1 overrides the computed "depth"
             * (0: min distortion, 1: max distortion)
             * 
             * 
             * whichAnim: String
             * "first"            : the first half animation
             * "last"             : the second one
             * "both" (default) : both
             * 
             * axis: String
             * "center" (default)      : the node is flipped around his center
             * "shortside"             : the node is flipped around his "short" (in perspective) side
             * "longside"              : the node is flipped around his "long" (in perspective) side
             * "cube"                  : the node flips around the central axis of the cube
             * 
             * shift: Integer:
             *   node translation, perpendicular to the rotation axis
             * 
             * 
             * @param args             
             */
            flip(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a more 3d-like rotation
             * An extension to dojox.fx.flip providing a more 3d-like rotation.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipCube(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a decomposition in rows * cols flipping elements
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties and
             * 
             * cols: Integer columns
             * rows: Integer rows
             * duration: the single flip duration
             * 
             * @param args             
             */
            flipGrid(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a page flip like animation.
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipPage(args: Object): void;
            /**
             * Animate the effects of removing a class from a node
             * Creates an animation that will animate the properties of a
             * node (args.node) to the properties calculated after removing
             * a standard CSS className from a that node.
             * 
             * calls dojo.removeClass(args.cssClass) onEnd of animation
             * 
             * standard dojo.Animation object rules apply.
             * 
             * @param node             
             * @param cssClass             
             * @param args             
             */
            removeClass(node: any, cssClass: any, args: any): any;
            /**
             * Returns an animation that will smooth-scroll to a node
             * This implementation support either horizontal or vertical scroll, as well as
             * both. In addition, element in iframe can be scrolled to correctly.
             * 
             * @param args offset: {x: int, y: int} this will be added to the target positionduration: Duration of the animation in milliseconds.win: a node or window object to scroll             
             */
            smoothScroll(args: Object): void;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/style.html
         *
         * dojox.fx CSS Class Animations
         * a set of functions to animate properties based on
         * normalized CSS class definitions.
         * 
         */
        interface style {
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: String, cssClass: String, args: Object): any;
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: HTMLElement, cssClass: String, args: Object): any;
            /**
             * Animate the effects of removing a class from a node
             * Creates an animation that will animate the properties of a
             * node (args.node) to the properties calculated after removing
             * a standard CSS className from a that node.
             * 
             * calls dojo.removeClass(args.cssClass) onEnd of animation
             * 
             * standard dojo.Animation object rules apply.
             * 
             * @param node             
             * @param cssClass             
             * @param args             
             */
            removeClass(node: any, cssClass: any, args: any): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/split.html
         *
         * Experimental and extended Animations beyond Dojo Core / Base functionality.
         * Provides advanced Lines, Animations, and convenience aliases.
         * 
         */
        interface split {
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: String, cssClass: String, args: Object): any;
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: HTMLElement, cssClass: String, args: Object): any;
            /**
             * An add-on to dojo.fx that provides the ability to create
             * a complex property animation based on an array of "keyframes".
             * The Timeline is a replacement for the default dojo._Line.
             * Instead of _Line.getValue returning a float between 0-1,
             * _Timeline.getValue returns an object with all properties and
             * their current values.
             * A property does not have to appear in every keyframe.
             * As in the example below, "height" is transitioned from the first
             * keyframe to the third. "width" is transitioned from the first
             * to the second to the third.
             * Each keyframe can accept the following custom properties:
             * 
             * step: String:
             * The start, finish or percentage that this keyframe represents.
             * Allowed parameters are:
             * 0%-100%
             * from (same as 0%, used to conform with the Webkit animation spec)
             * to (same as 100%, used to conform with the Webkit animation spec)
             * 
             * ease: String:
             * The string name of a dojo.fx.easing ease. Defaults to "linear". Use
             * the suffix name of the ease, like: "quadIn", not: "dojo.fx.quadIn".
             * 
             * @param options The parameters passed to the timeline animation. Includes:keys: Array: An array of objects, with style properties and values.duration: Duration of the animation in milliseconds.  Defaults to 1000.             
             * @param node The node to manipulate             
             */
            animateTimeline(options: Object, node: HTMLElement): void;
            /**
             * Animate a node flipping following a specific direction
             * Returns an animation that will flip the
             * node around a central axis:
             * 
             * if args.dir is "left" or "right" --> y axis
             * 
             * if args.dir is "top" or "bottom" --> x axis
             * 
             * This effect is obtained using a border distortion applied to a helper node.
             * 
             * The user can specify three background colors for the helper node:
             * 
             * darkColor: the darkest color reached during the animation
             * lightColor: the brightest color
             * endColor: the final backgroundColor for the node
             * Other arguments:
             * 
             * depth: Float
             * 0 <= depth <= 1 overrides the computed "depth"
             * (0: min distortion, 1: max distortion)
             * 
             * 
             * whichAnim: String
             * "first"            : the first half animation
             * "last"             : the second one
             * "both" (default) : both
             * 
             * axis: String
             * "center" (default)      : the node is flipped around his center
             * "shortside"             : the node is flipped around his "short" (in perspective) side
             * "longside"              : the node is flipped around his "long" (in perspective) side
             * "cube"                  : the node flips around the central axis of the cube
             * 
             * shift: Integer:
             *   node translation, perpendicular to the rotation axis
             * 
             * 
             * @param args             
             */
            flip(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a more 3d-like rotation
             * An extension to dojox.fx.flip providing a more 3d-like rotation.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipCube(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a decomposition in rows * cols flipping elements
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties and
             * 
             * cols: Integer columns
             * rows: Integer rows
             * duration: the single flip duration
             * 
             * @param args             
             */
            flipGrid(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a page flip like animation.
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipPage(args: Object): void;
            /**
             * Animate the effects of removing a class from a node
             * Creates an animation that will animate the properties of a
             * node (args.node) to the properties calculated after removing
             * a standard CSS className from a that node.
             * 
             * calls dojo.removeClass(args.cssClass) onEnd of animation
             * 
             * standard dojo.Animation object rules apply.
             * 
             * @param node             
             * @param cssClass             
             * @param args             
             */
            removeClass(node: any, cssClass: any, args: any): any;
            /**
             * Returns an animation that will smooth-scroll to a node
             * This implementation support either horizontal or vertical scroll, as well as
             * both. In addition, element in iframe can be scrolled to correctly.
             * 
             * @param args offset: {x: int, y: int} this will be added to the target positionduration: Duration of the animation in milliseconds.win: a node or window object to scroll             
             */
            smoothScroll(args: Object): void;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/text.html
         *
         * 
         */
        interface text {
            /**
             * Split a block of text into words or letters and backspace them in sequence
             * Returns an animation that will split the text into spans of words
             * or characters that appear as if they were being backspaced (or typed) in real-time.
             * 
             * @param args args.interval: Float - The number of milliseconds between each piece's animation(default is determined by text length and args.duration);args.wordDelay: Integer - The number of milliseconds between each word(only effective when args.unhide = true)args.fixed: Boolean - If true, only style.opacity changes; otherwise, style.displaychanges between none and inline, adding realism (default = false)args.random: Float - If true, pieces have a random delay. The value defines how muchrandomness is introduced (only effective when args.unhide = true)args.unhide: Boolean - If true, the animation is reversed             
             */
            backspace(args: Object): void;
            /**
             * 
             * @param args             
             */
            blockFadeIn(args: Object): void;
            /**
             * Split a block of text into words or letters and fade them
             * Returns an animation that will split the text into spans of words
             * or characters that fade in or out.
             * 
             * @param args args.words: Boolean - If true, text will be split into words rather than charactersargs.interval: Float - The number of milliseconds between each piece's animation (default is 0)args.random: Float - If true, pieces have a random delay. The value defines how much                 randomness is introducedargs.reverseOrder: Boolean - If true, pieces animate in reversed orderargs.unhide: Boolean - If true, the animation is reversed             
             */
            blockFadeOut(args: Object): void;
            /**
             * 
             * @param args             
             */
            build(args: Object): void;
            /**
             * 
             * @param args             
             */
            converge(args: Object): void;
            /**
             * Split a block of text into words or letters and let them fall
             * Returns an animation that will split the text into spans of words
             * or characters that drop.
             * 
             * @param args args.crop: Boolean - If true, pieces will be positioned relatively rather than absolutelyargs.words: Boolean - If true, text will be split into words rather than charactersargs.interval: Float - The number of milliseconds between each piece's animationargs.distance: Float - The number of the node's heights to drop (default is 1.5)args.fade: Boolean - If true, pieces fade out while in motion (default is true)args.random: Float - If set, pieces fall in random order. The value defines how much                 randomness is introducedargs.reverseOrder: Boolean - If true, pieces animate in reversed orderargs.unhide: Boolean - If true, the peices fall from above and land in place             
             */
            disintegrate(args: Object): void;
            /**
             * Explode a block of text into words or letters
             * Returns an animation that will split the text into a spans
             * of words or characters that fly away from the center.
             * 
             * @param args args.crop: Boolean - If true, pieces will be positioned relatively rather than absolutelyargs.words: Boolean - If true, text will be split into words rather than charactersargs.random: Float - If set, pieces fly to random distances, for random durations,                 and in slightly random directions. The value defines how much                 randomness is introduced.args.distance: Float - Multiplier for the distance the pieces fly (even when random)args.fade: Boolean - If true, pieces fade out while in motion (default is true)args.fadeEasing: Function - If args.fade is true, the fade animations use this easing functionargs.unhide: Boolean - If true, the animation is reversedargs.sync: Boolean - If args.unhide is true, all the pieces converge at the same time                 (default is true)             
             */
            explode(args: Object): void;
            /**
             * 
             * @param args             
             */
            type(args: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/Timeline.html
         *
         * Experimental and extended Animations beyond Dojo Core / Base functionality.
         * Provides advanced Lines, Animations, and convenience aliases.
         * 
         */
        interface Timeline {
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: String, cssClass: String, args: Object): any;
            /**
             * Animate the effects of adding a class to a node
             * Creates an animation that will animate
             * the properties of a node to the properties
             * defined in a standard CSS .class definition.
             * (calculating the differences itself)
             * 
             * @param node A String ID or DomNode referce to animate             
             * @param cssClass The CSS class name to add to the node             
             * @param args               OptionalAdditional optional dojo.animateProperty arguments, such asduration, easing and so on.             
             */
            addClass(node: HTMLElement, cssClass: String, args: Object): any;
            /**
             * An add-on to dojo.fx that provides the ability to create
             * a complex property animation based on an array of "keyframes".
             * The Timeline is a replacement for the default dojo._Line.
             * Instead of _Line.getValue returning a float between 0-1,
             * _Timeline.getValue returns an object with all properties and
             * their current values.
             * A property does not have to appear in every keyframe.
             * As in the example below, "height" is transitioned from the first
             * keyframe to the third. "width" is transitioned from the first
             * to the second to the third.
             * Each keyframe can accept the following custom properties:
             * 
             * step: String:
             * The start, finish or percentage that this keyframe represents.
             * Allowed parameters are:
             * 0%-100%
             * from (same as 0%, used to conform with the Webkit animation spec)
             * to (same as 100%, used to conform with the Webkit animation spec)
             * 
             * ease: String:
             * The string name of a dojo.fx.easing ease. Defaults to "linear". Use
             * the suffix name of the ease, like: "quadIn", not: "dojo.fx.quadIn".
             * 
             * @param options The parameters passed to the timeline animation. Includes:keys: Array: An array of objects, with style properties and values.duration: Duration of the animation in milliseconds.  Defaults to 1000.             
             * @param node The node to manipulate             
             */
            animateTimeline(options: Object, node: HTMLElement): void;
            /**
             * Animate a node flipping following a specific direction
             * Returns an animation that will flip the
             * node around a central axis:
             * 
             * if args.dir is "left" or "right" --> y axis
             * 
             * if args.dir is "top" or "bottom" --> x axis
             * 
             * This effect is obtained using a border distortion applied to a helper node.
             * 
             * The user can specify three background colors for the helper node:
             * 
             * darkColor: the darkest color reached during the animation
             * lightColor: the brightest color
             * endColor: the final backgroundColor for the node
             * Other arguments:
             * 
             * depth: Float
             * 0 <= depth <= 1 overrides the computed "depth"
             * (0: min distortion, 1: max distortion)
             * 
             * 
             * whichAnim: String
             * "first"            : the first half animation
             * "last"             : the second one
             * "both" (default) : both
             * 
             * axis: String
             * "center" (default)      : the node is flipped around his center
             * "shortside"             : the node is flipped around his "short" (in perspective) side
             * "longside"              : the node is flipped around his "long" (in perspective) side
             * "cube"                  : the node flips around the central axis of the cube
             * 
             * shift: Integer:
             *   node translation, perpendicular to the rotation axis
             * 
             * 
             * @param args             
             */
            flip(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a more 3d-like rotation
             * An extension to dojox.fx.flip providing a more 3d-like rotation.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipCube(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a decomposition in rows * cols flipping elements
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties and
             * 
             * cols: Integer columns
             * rows: Integer rows
             * duration: the single flip duration
             * 
             * @param args             
             */
            flipGrid(args: Object): void;
            /**
             * An extension to dojox.fx.flip providing a page flip like animation.
             * An extension to dojox.fx.flip providing a page flip effect.
             * Behaves the same as dojox.fx.flip, using the same attributes and
             * other standard dojo.Animation properties.
             * 
             * @param args             
             */
            flipPage(args: Object): void;
            /**
             * Animate the effects of removing a class from a node
             * Creates an animation that will animate the properties of a
             * node (args.node) to the properties calculated after removing
             * a standard CSS className from a that node.
             * 
             * calls dojo.removeClass(args.cssClass) onEnd of animation
             * 
             * standard dojo.Animation object rules apply.
             * 
             * @param node             
             * @param cssClass             
             * @param args             
             */
            removeClass(node: any, cssClass: any, args: any): any;
            /**
             * Returns an animation that will smooth-scroll to a node
             * This implementation support either horizontal or vertical scroll, as well as
             * both. In addition, element in iframe can be scrolled to correctly.
             * 
             * @param args offset: {x: int, y: int} this will be added to the target positionduration: Duration of the animation in milliseconds.win: a node or window object to scroll             
             */
            smoothScroll(args: Object): void;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any;
            /**
             * Animate the effects of Toggling a class on a Node
             * creates an animation that will animate the effect of
             * toggling a class on or off of a node.
             * Adds a class to node if not present, or removes if present.
             * Pass a boolean condition if you want to explicitly add or remove.
             * 
             * @param node The domNode (or string of the id) to toggle             
             * @param cssClass String of the classname to add to the node             
             * @param condition               OptionalIf passed, true means to add the class, false means to remove.             
             * @param args               OptionalAdditional dojo.Animation args to pass along.             
             */
            toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_core.html
         *
         * a custom _Line to accommodate multi-dimensional values
         * a normal dojo._Line is the curve, and does Line(start,end)
         * for propertyAnimation. as we make more complicatied animations, we realize
         * some properties can have 2, or 4 values relevant (x,y) or (t,l,r,b) for example
         * 
         * this function provides support for those Lines, and is ported directly from 0.4
         * this is a lot of extra code for something so seldom used, so we'll put it here as
         * and optional core addition. you can create a new line, and use it during onAnimate
         * as you see fit.
         * 
         * @param start An Integer (or an Array of integers) to use as a starting point     
         * @param end An Integer (or an Array of integers) to use as an ending point     
         */
        interface _core{(start: number, end: number): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_core.html
         *
         * a custom _Line to accommodate multi-dimensional values
         * a normal dojo._Line is the curve, and does Line(start,end)
         * for propertyAnimation. as we make more complicatied animations, we realize
         * some properties can have 2, or 4 values relevant (x,y) or (t,l,r,b) for example
         * 
         * this function provides support for those Lines, and is ported directly from 0.4
         * this is a lot of extra code for something so seldom used, so we'll put it here as
         * and optional core addition. you can create a new line, and use it during onAnimate
         * as you see fit.
         * 
         * @param start An Integer (or an Array of integers) to use as a starting point     
         * @param end An Integer (or an Array of integers) to use as an ending point     
         */
        interface _core{(start: any[], end: number): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_core.html
         *
         * a custom _Line to accommodate multi-dimensional values
         * a normal dojo._Line is the curve, and does Line(start,end)
         * for propertyAnimation. as we make more complicatied animations, we realize
         * some properties can have 2, or 4 values relevant (x,y) or (t,l,r,b) for example
         * 
         * this function provides support for those Lines, and is ported directly from 0.4
         * this is a lot of extra code for something so seldom used, so we'll put it here as
         * and optional core addition. you can create a new line, and use it during onAnimate
         * as you see fit.
         * 
         * @param start An Integer (or an Array of integers) to use as a starting point     
         * @param end An Integer (or an Array of integers) to use as an ending point     
         */
        interface _core{(start: number, end: any[]): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/_core.html
         *
         * a custom _Line to accommodate multi-dimensional values
         * a normal dojo._Line is the curve, and does Line(start,end)
         * for propertyAnimation. as we make more complicatied animations, we realize
         * some properties can have 2, or 4 values relevant (x,y) or (t,l,r,b) for example
         * 
         * this function provides support for those Lines, and is ported directly from 0.4
         * this is a lot of extra code for something so seldom used, so we'll put it here as
         * and optional core addition. you can create a new line, and use it during onAnimate
         * as you see fit.
         * 
         * @param start An Integer (or an Array of integers) to use as a starting point     
         * @param end An Integer (or an Array of integers) to use as an ending point     
         */
        interface _core{(start: any[], end: any[]): void}
        module _core {
            /**
             * An Integer (or an Array of integers) to use as an ending point
             * 
             */
            var end: number
            /**
             * An Integer (or an Array of integers) to use as a starting point
             * 
             */
            var start: number
            /**
             * Returns the point on the line, or an array of points
             * 
             * @param n a floating point number greater than 0 and less than 1             
             */
            interface getValue{(n: number): any}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/scroll.html
         *
         * Returns an animation that will smooth-scroll to a node
         * This implementation support either horizontal or vertical scroll, as well as
         * both. In addition, element in iframe can be scrolled to correctly.
         * 
         * @param args offset: {x: int, y: int} this will be added to the target positionduration: Duration of the animation in milliseconds.win: a node or window object to scroll     
         */
        interface scroll{(args: Object): void}
        module ext_dojo {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/ext-dojo/reverse.html
             *
             * A generic animation class that fires callbacks into its handlers
             * object at various states.
             * A generic animation class that fires callbacks into its handlers
             * object at various states. Nearly all dojo animation functions
             * return an instance of this method, usually without calling the
             * .play() method beforehand. Therefore, you will likely need to
             * call .play() on instances of Animation when one is
             * returned.
             * 
             */
            interface reverse{(): void}
            module reverse {
                /**
                 * Synthetic event fired before a Animation begins playing (synchronous)
                 * 
                 */
                var beforeBegin: Object
                /**
                 * A two element array of start and end values, or a _Line instance to be
                 * used in the Animation.
                 * 
                 */
                var curve: Object
                /**
                 * 
                 */
                var curve: Object
                /**
                 * The time in milliseconds to wait before starting animation after it
                 * has been .play()'ed
                 * 
                 */
                var delay: Object
                /**
                 * The time in milliseconds the animation will take to run
                 * 
                 */
                var duration: number
                /**
                 * A Function to adjust the acceleration (or deceleration) of the progress
                 * across a _Line
                 * 
                 */
                var easing: Object
                /**
                 * Synthetic event fired at each interval of the Animation
                 * 
                 */
                var onAnimate: Object
                /**
                 * Synthetic event fired as a Animation begins playing (useful?)
                 * 
                 */
                var onBegin: Object
                /**
                 * Synthetic event fired after the final frame of the Animation
                 * 
                 */
                var onEnd: Object
                /**
                 * Synthetic event fired when the Animation is paused
                 * 
                 */
                var onPause: Object
                /**
                 * Synthetic event fired any time the Animation is play()'ed
                 * 
                 */
                var onPlay: Object
                /**
                 * Synthetic event fires when the Animation is stopped
                 * 
                 */
                var onStop: Object
                /**
                 * the time in milliseconds to wait before advancing to next frame
                 * (used as a fps timer: 1000/rate = fps)
                 * 
                 */
                var rate: Object
                /**
                 * The number of times to loop the animation
                 * 
                 */
                var repeat: Object
                /**
                 * Sets the progress of the animation.
                 * 
                 * @param percent A percentage in decimal notation (between and including 0.0 and 1.0).             
                 * @param andPlay               OptionalIf true, play the animation after setting the progress.             
                 */
                interface gotoPercent{(percent: number, andPlay: boolean): Function}
                /**
                 * Pauses a running animation.
                 * 
                 */
                interface pause{(): Function}
                /**
                 * Start the animation.
                 * 
                 * @param delay               OptionalHow many milliseconds to delay before starting.             
                 * @param gotoStart               OptionalIf true, starts the animation from the beginning; otherwise,starts it from its current position.             
                 */
                interface play{(delay: number, gotoStart: boolean): any}
                /**
                 * The key method added to an animation to enable reversal.
                 * 
                 * @param keepPaused By default, calling reverse() will play the animation ifit was paused. Pass in true to keep it paused (will haveno effect if reverse is called while animation is playing).             
                 * @param reverseEase               OptionalA function to use for the reverse easing. This allows forthe possibility of custom eases that are not in the dojo.fxlibrary.             
                 */
                interface reverse{(keepPaused: boolean, reverseEase: Function): Function}
                /**
                 * Returns a string token representation of the status of
                 * the animation, one of: "paused", "playing", "stopped"
                 * 
                 */
                interface status{(): String}
                /**
                 * Stops a running animation.
                 * 
                 * @param gotoEnd               OptionalIf true, the animation will end.             
                 */
                interface stop{(gotoEnd: boolean): Function}
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/ext-dojo/complex.html
             *
             * Extends dojo/_base/fx.animateProperty to animate a "complex property". The primary example is the
             * clip style: rect(10px 30px 10px 50px).
             * Note this can also be used with (and is actually intended for)
             * CSS3 properties, such as transform:
             * transform: rotate(10deg) translateX(0px)
             * The standard animation doesn't know what to do with something like
             * rect(...). This class identifies complex properties by they being a
             * string and having parenthesis. If so, that property is made into a
             * dojox.fx._Complex object and the getValue() is obtained from
             * there.
             * 
             */
            interface complex {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/ext-dojo/NodeList.html
             *
             * Core extensions to dojo/NodeList providing additional fx to dojo.NodeList-fx
             * A Package to extend dojo base NodeList with fx provided by the dojox.fx project.
             * These are experimental animations, in an experimental
             * 
             */
            interface NodeList {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/fx/ext-dojo/NodeList-style.html
             *
             * Core extensions to dojo.NodeList providing additional fx to dojo.NodeList-fx
             * from dojox.fx.style
             * A Package to extend dojo base NodeList with fx provided by the dojox.fx project.
             * These are experimental animations, in an experimental
             * 
             */
            interface NodeList_style {
            }
        }

    }

}

declare module "dojox/fx" {
    var exp: dojox.fx
    export=exp;
}
declare module "dojox/fx/Shadow" {
    var exp: dojox.fx.Shadow
    export=exp;
}
declare module "dojox/fx/_core" {
    var exp: dojox.fx._core
    export=exp;
}
declare module "dojox/fx/scroll" {
    var exp: dojox.fx.scroll
    export=exp;
}
declare module "dojox/fx/_arg" {
    var exp: dojox.fx._arg
    export=exp;
}
declare module "dojox/fx/easing" {
    var exp: dojox.fx.easing
    export=exp;
}
declare module "dojox/fx/_base" {
    var exp: dojox.fx._base
    export=exp;
}
declare module "dojox/fx/flip" {
    var exp: dojox.fx.flip
    export=exp;
}
declare module "dojox/fx/style" {
    var exp: dojox.fx.style
    export=exp;
}
declare module "dojox/fx/text" {
    var exp: dojox.fx.text
    export=exp;
}
declare module "dojox/fx/split" {
    var exp: dojox.fx.split
    export=exp;
}
declare module "dojox/fx/Timeline" {
    var exp: dojox.fx.Timeline
    export=exp;
}
declare module "dojox/fx/ext-dojo/reverse" {
    var exp: dojox.fx.ext_dojo.reverse
    export=exp;
}
declare module "dojox/fx/ext-dojo/complex" {
    var exp: dojox.fx.ext_dojo.complex
    export=exp;
}
declare module "dojox/fx/ext-dojo/NodeList" {
    var exp: dojox.fx.ext_dojo.NodeList
    export=exp;
}
declare module "dojox/fx/ext-dojo/NodeList-style" {
    var exp: dojox.fx.ext_dojo.NodeList_style
    export=exp;
}
