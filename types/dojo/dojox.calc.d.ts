// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




 declare namespace dojox {

    namespace calc {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/GraphPro.html
         *
         * The dialog widget for a graphing, scientific calculator
         *
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
         */
        class GraphPro extends dojox.calc.Standard {
            constructor(params?: Object, srcNodeRef?: HTMLElement);
            /**
             *
             */
            "aFloatingPane": Object;
            set(property:"aFloatingPane", value: Object): void;
            get(property:"aFloatingPane"): Object;
            watch(property:"aFloatingPane", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * Used to provide a context require to the dojo/parser in order to be
             * able to use relative MIDs (e.g. ./Widget) in the widget's template.
             *
             */
            "contextRequire": Function;
            set(property:"contextRequire", value: Function): void;
            get(property:"contextRequire"): Function;
            watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
             *
             */
            "funcMaker": Object;
            set(property:"funcMaker", value: Object): void;
            get(property:"funcMaker"): Object;
            watch(property:"funcMaker", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             *
             */
            "functions": any[];
            set(property:"functions", value: any[]): void;
            get(property:"functions"): any[];
            watch(property:"functions", callback:{(property?:string, oldValue?:any[], newValue?: any[]):void}) :{unwatch():void}
            /**
             *
             */
            "grapher": Object;
            set(property:"grapher", value: Object): void;
            get(property:"grapher"): Object;
            watch(property:"grapher", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             *
             */
            "hasDisplay": boolean;
            set(property:"hasDisplay", value: boolean): void;
            get(property:"hasDisplay"): boolean;
            watch(property:"hasDisplay", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             *
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             *
             */
            "readStore": Object;
            set(property:"readStore", value: Object): void;
            get(property:"readStore"): Object;
            watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * Should we parse the template to find widgets that might be
             * declared in markup inside it?  (Remove for 2.0 and assume true)
             *
             */
            "widgetsInTemplate": boolean;
            set(property:"widgetsInTemplate", value: boolean): void;
            get(property:"widgetsInTemplate"): boolean;
            watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             *
             */
            "writeStore": Object;
            set(property:"writeStore", value: Object): void;
            get(property:"writeStore"): Object;
            watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             *
             */
            buildRendering(): void;
            /**
             * this clears the input box if it has content, but if it does not it clears the display
             *
             */
            clearText(): void;
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
             * cycle down through the list of commands the user has entered already
             *
             */
            cycleCommandDown(): void;
            /**
             * Cycle through the commands that the user has entered.
             * It does not wrap around.
             *
             * @param count
             * @param node
             * @param event
             */
            cycleCommands(count: any, node: any, event: any): void;
            /**
             * cycle up through the list of commands the user has entered already
             *
             */
            cycleCommandUp(): void;
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
             * when executor loads check to see if the writestore is there
             *
             */
            executorLoaded(): void;
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
             * Returns the parent widget of this widget.
             *
             */
            getParent(): any;
            /**
             * insert a minus sign when they press (-) in the combo button
             *
             */
            insertMinus(): void;
            /**
             * insert an operator with a button
             *
             * @param newText
             */
            insertOperator(newText: any): void;
            /**
             *
             * @param newText
             */
            insertText(newText: any): void;
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
             * load an entire store, and make it publicly editable/viewable based on isReadOnly
             *
             * @param store
             * @param isReadOnly
             */
            loadStore(store: any, isReadOnly: any): void;
            /**
             * use this function to create a function window (with the button on the layout)
             *
             */
            makeFunctionWindow(): void;
            /**
             * use this to make a Grapher window appear with a button
             *
             */
            makeGrapherWindow(): void;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             *
             * @param type Name of event (ex: "click") or extension event like touch.press.
             * @param func
             */
            on(type: String, func: Function): any;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             *
             * @param type Name of event (ex: "click") or extension event like touch.press.
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
             * parse the contents of the textboxWidget and display the answer somewhere (depending on the layout)
             *
             */
            parseTextbox(): void;
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
             * run startup, see if there is an upper display box, etc
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
             * print the answer (typically) to the display or the input box
             *
             * @param text
             * @param isRight
             */
            print(text: any, isRight: any): void;
            /**
             * try seeing if the textbox is highlighted completely so you know if Ans should be put in for an operator like +
             *
             * @param node
             */
            putInAnsIfTextboxIsHighlighted(node: any): boolean;
            /**
             * make the function with executor
             *
             * @param name
             * @param args
             * @param body
             */
            saveFunction(name: any, args: any, body: any): void;
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
             * set a widget's value
             *
             * @param widget
             * @param val
             */
            setTextboxValue(widget: any, val: any): void;
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
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
            /**
             * IE is lacking in function when it comes to the text boxes, so here, make it work like other browsers do by forcing a node.selectionStart and End onto it
             *
             */
            onBlur(): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             *
             */
            onFocus(): void;
            /**
             * handle key input for Enter and operators
             *
             * @param e
             */
            onKeyPress(e: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/Standard.html
         *
         * The dialog layout for a standard 4 function/algebraic calculator
         *
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
         */
        class Standard extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
             * Used to provide a context require to the dojo/parser in order to be
             * able to use relative MIDs (e.g. ./Widget) in the widget's template.
             *
             */
            "contextRequire": Function;
            set(property:"contextRequire", value: Function): void;
            get(property:"contextRequire"): Function;
            watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
             *
             */
            "functions": any[];
            set(property:"functions", value: any[]): void;
            get(property:"functions"): any[];
            watch(property:"functions", callback:{(property?:string, oldValue?:any[], newValue?: any[]):void}) :{unwatch():void}
            /**
             *
             */
            "hasDisplay": boolean;
            set(property:"hasDisplay", value: boolean): void;
            get(property:"hasDisplay"): boolean;
            watch(property:"hasDisplay", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
             * The document this widget belongs to.  If not specified to constructor, will default to
             * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
             *
             */
            "ownerDocument": Object;
            set(property:"ownerDocument", value: Object): void;
            get(property:"ownerDocument"): Object;
            watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             *
             */
            "readStore": Object;
            set(property:"readStore", value: Object): void;
            get(property:"readStore"): Object;
            watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * Should we parse the template to find widgets that might be
             * declared in markup inside it?  (Remove for 2.0 and assume true)
             *
             */
            "widgetsInTemplate": boolean;
            set(property:"widgetsInTemplate", value: boolean): void;
            get(property:"widgetsInTemplate"): boolean;
            watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             *
             */
            "writeStore": Object;
            set(property:"writeStore", value: Object): void;
            get(property:"writeStore"): Object;
            watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Construct the UI for this widget, setting this.domNode.
             * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
             *
             */
            buildRendering(): void;
            /**
             * this clears the input box if it has content, but if it does not it clears the display
             *
             */
            clearText(): void;
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
             * cycle down through the list of commands the user has entered already
             *
             */
            cycleCommandDown(): void;
            /**
             * Cycle through the commands that the user has entered.
             * It does not wrap around.
             *
             * @param count
             * @param node
             * @param event
             */
            cycleCommands(count: any, node: any, event: any): void;
            /**
             * cycle up through the list of commands the user has entered already
             *
             */
            cycleCommandUp(): void;
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
             * load in the stores after executor is loaded (the stores need executor to be loaded because it parses them)
             *
             */
            executorLoaded(): void;
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
             * Returns the parent widget of this widget.
             *
             */
            getParent(): any;
            /**
             * insert a minus sign when they press (-) in the combo button
             *
             */
            insertMinus(): void;
            /**
             * insert an operator with a button
             *
             * @param newText
             */
            insertOperator(newText: any): void;
            /**
             *
             * @param newText
             */
            insertText(newText: any): void;
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
             * load an entire store, and make it publicly editable/viewable based on isReadOnly
             *
             * @param store
             * @param isReadOnly
             */
            loadStore(store: any, isReadOnly: any): void;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             *
             * @param type Name of event (ex: "click") or extension event like touch.press.
             * @param func
             */
            on(type: String, func: Function): any;
            /**
             * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
             * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
             * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
             * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
             *
             * @param type Name of event (ex: "click") or extension event like touch.press.
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
             * parse the contents of the textboxWidget and display the answer somewhere (depending on the layout)
             *
             */
            parseTextbox(): void;
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
             * run startup, see if there is an upper display box, etc
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
             * print the answer (typically) to the display or the input box
             *
             * @param text
             * @param isRight
             */
            print(text: any, isRight: any): void;
            /**
             * try seeing if the textbox is highlighted completely so you know if Ans should be put in for an operator like +
             *
             * @param node
             */
            putInAnsIfTextboxIsHighlighted(node: any): boolean;
            /**
             * make the function with executor
             *
             * @param name
             * @param args
             * @param body
             */
            saveFunction(name: any, args: any, body: any): void;
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
             * set a widget's value
             *
             * @param widget
             * @param val
             */
            setTextboxValue(widget: any, val: any): void;
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
             * Static method to get a template based on the templatePath or
             * templateString key
             */
            getCachedTemplate(): any;
            /**
             * IE is lacking in function when it comes to the text boxes, so here, make it work like other browsers do by forcing a node.selectionStart and End onto it
             *
             */
            onBlur(): void;
            /**
             * Called when the widget becomes "active" because
             * it or a widget inside of it either has focus, or has recently
             * been clicked.
             *
             */
            onFocus(): void;
            /**
             * handle key input for Enter and operators
             *
             * @param e
             */
            onKeyPress(e: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/_Executor.html
         *
         *
         */
        interface _Executor {
            /**
             * Return a less exact approximation of r such that approx(r * (1 +- eps)) == approx(r)
             *
             * @param r
             */
            approx(r: number): number;
            /**
             * graph a chart with the given function.
             *
             * @param chart
             * @param functionToGraph Function with one numeric parameter (x or y typically)
             * @param params can contain the number of the graph in the chart it is (an integer), a boolean saying if the functionToGraph is a function of x (otherwise y)and the color, which is an object with a stroke with a color's name eg: color:{stroke:"black"}
             */
            draw(chart: dojox.charting.Chart2D, functionToGraph: Function, params: Object): any;
            /**
             *
             */
            FuncGen(): void;
            /**
             * create the points with information about the graph.
             *
             * @param funcToGraph A function with one numeric parameter (x or y typically)
             * @param x x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param y x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param width pixel width of the chart
             * @param minX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param minY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             */
            generatePoints(funcToGraph: Function, x: String, y: String, width: number, minX: number, maxX: number, minY: number, maxY: number): Object;
            /**
             *
             */
            Grapher(): void;
            /**
             *
             * @param base
             * @param exponent
             */
            pow(base: any, exponent: any): any;
            /**
             *
             * @param number
             */
            toFrac(number: any): any;
        }
        module _Executor {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/_Executor._Executor.html
             *
             * A graphing, scientific calculator
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class _Executor extends dijit._WidgetBase implements dijit._TemplatedMixin {
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 *
                 */
                destroy(): void;
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
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param text the user input that needs to be parsed
                 */
                eval(text: String): any;
                /**
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param name this argument is simply a String that represents the name of the function being evaluated. It can be undefined, but in that case the function is a one time use.
                 * @param args the function arguments
                 * @param body the function body
                 */
                Function(name: any, args: String, body: String): any;
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
                 * @param name
                 * @param args
                 * @param body
                 */
                normalizedFunction(name: any, args: any, body: any): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * this should be overwritten and become a great place for making user predefined functions
                 *
                 */
                onLoad(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/_Executor.FuncGen.html
             *
             * The dialog layout for making functions
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class FuncGen extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "functions": Object;
                set(property:"functions", value: Object): void;
                get(property:"functions"): Object;
                watch(property:"functions", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 *
                 */
                "readStore": Object;
                set(property:"readStore", value: Object): void;
                get(property:"readStore"): Object;
                watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "writeStore": Object;
                set(property:"writeStore", value: Object): void;
                get(property:"writeStore"): Object;
                watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * clear the name, arguments, and body
                 *
                 */
                clear(): void;
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 * delete an item in the writestore
                 *
                 * @param item
                 */
                deleteThing(item: any): void;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * set the status in the template to ready
                 *
                 */
                readyStatus(): void;
                /**
                 * set the arguments and body to match a function selected if it exists in the function list
                 *
                 */
                reset(): void;
                /**
                 *
                 * @param name
                 * @param args
                 * @param body
                 */
                saveFunction(name: any, args: any, body: any): void;
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
                 * make sure the parent has a close button if it needs to be able to close
                 * link the write store too
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
                 * The clear button in the template calls this.
                 * Clear the name, arguments, and body if the user says yes.
                 *
                 */
                onClear(): void;
                /**
                 * (Delete button on click event) delete a function if the user clicks yes
                 *
                 */
                onDelete(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * (Reset button on click event) reset the arguments and body to their previously saved state if the user says yes
                 *
                 */
                onReset(): void;
                /**
                 *
                 */
                onSaved(): void;
                /**
                 * if they select something in the name combobox, then change the body and arguments to correspond to the function they selected
                 *
                 */
                onSelect(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/_Executor.Grapher.html
             *
             * The dialog layout for making graphs
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class Grapher extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                "chartIndex": number;
                set(property:"chartIndex", value: number): void;
                get(property:"chartIndex"): number;
                watch(property:"chartIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "checkboxIndex": number;
                set(property:"checkboxIndex", value: number): void;
                get(property:"checkboxIndex"): number;
                watch(property:"checkboxIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorBoxFieldsetIndex": number;
                set(property:"colorBoxFieldsetIndex", value: number): void;
                get(property:"colorBoxFieldsetIndex"): number;
                watch(property:"colorBoxFieldsetIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorIndex": number;
                set(property:"colorIndex", value: number): void;
                get(property:"colorIndex"): number;
                watch(property:"colorIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "dropDownIndex": number;
                set(property:"dropDownIndex", value: number): void;
                get(property:"dropDownIndex"): number;
                watch(property:"dropDownIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "evaluatedExpression": number;
                set(property:"evaluatedExpression", value: number): void;
                get(property:"evaluatedExpression"): number;
                watch(property:"evaluatedExpression", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "expressionIndex": number;
                set(property:"expressionIndex", value: number): void;
                get(property:"expressionIndex"): number;
                watch(property:"expressionIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "funcNumberIndex": number;
                set(property:"funcNumberIndex", value: number): void;
                get(property:"funcNumberIndex"): number;
                watch(property:"funcNumberIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionMode": number;
                set(property:"functionMode", value: number): void;
                get(property:"functionMode"): number;
                watch(property:"functionMode", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionRef": number;
                set(property:"functionRef", value: number): void;
                get(property:"functionRef"): number;
                watch(property:"functionRef", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 *
                 */
                "statusIndex": number;
                set(property:"statusIndex", value: number): void;
                get(property:"statusIndex"): number;
                watch(property:"statusIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "tooltipIndex": number;
                set(property:"tooltipIndex", value: number): void;
                get(property:"tooltipIndex"): number;
                watch(property:"tooltipIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * add or re-add the default x/y axes to the Chart provided
                 *
                 * @param chart
                 */
                addXYAxes(chart: dojox.charting.Chart2D): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * Make the color of the chart the new color.
                 * The context is changed to the colorPalette, and a reference to chart was added to it a an attribute.
                 *
                 */
                changedColor(): void;
                /**
                 * adjust all charts in this.array according to any changes in window options
                 *
                 */
                checkDirty(): void;
                /**
                 * to stay in sync with onChange, checkDirty is called with a timeout
                 *
                 */
                checkDirty1(): void;
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
                 * create a new row in the table with all of the dojo objects.
                 *
                 */
                createFunction(): void;
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
                 * deselect all checkboxes inside the function table
                 *
                 */
                deselectAll(): void;
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
                 *
                 * @param i
                 */
                drawOne(i: any): void;
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
                 * erase the chart inside this.array with the index i
                 *
                 * @param i index to this.array that represents the current row number in the table
                 */
                erase(i: number): void;
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
                 * if something in the window options is changed, this is called
                 *
                 */
                makeDirty(): void;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * add Event handlers, some additional attributes, etc
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
                 * select all checkboxes inside the function table
                 *
                 */
                selectAll(): void;
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
                 * set the status of the row i to be status
                 *
                 * @param i index of this.array as well as a row index
                 * @param status either Error, Hidden, or Drawn
                 */
                setStatus(i: number, status: String): void;
                /**
                 * make sure the parent has a close button if it needs to be able to close
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
                 * The delete button's onClick method.
                 * Delete all of the selected rows.
                 *
                 */
                onDelete(): void;
                /**
                 *
                 */
                onDraw(): void;
                /**
                 * the erase button's onClick method
                 * it see's if the checkbox is checked and then erases it if it is.
                 *
                 */
                onErase(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/FuncGen.html
         *
         *
         */
        interface FuncGen {
            /**
             * Return a less exact approximation of r such that approx(r * (1 +- eps)) == approx(r)
             *
             * @param r
             */
            approx(r: number): number;
            /**
             * graph a chart with the given function.
             *
             * @param chart
             * @param functionToGraph Function with one numeric parameter (x or y typically)
             * @param params can contain the number of the graph in the chart it is (an integer), a boolean saying if the functionToGraph is a function of x (otherwise y)and the color, which is an object with a stroke with a color's name eg: color:{stroke:"black"}
             */
            draw(chart: dojox.charting.Chart2D, functionToGraph: Function, params: Object): any;
            /**
             *
             */
            FuncGen(): void;
            /**
             * create the points with information about the graph.
             *
             * @param funcToGraph A function with one numeric parameter (x or y typically)
             * @param x x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param y x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param width pixel width of the chart
             * @param minX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param minY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             */
            generatePoints(funcToGraph: Function, x: String, y: String, width: number, minX: number, maxX: number, minY: number, maxY: number): Object;
            /**
             *
             */
            Grapher(): void;
            /**
             *
             * @param base
             * @param exponent
             */
            pow(base: any, exponent: any): any;
            /**
             *
             * @param number
             */
            toFrac(number: any): any;
        }
        namespace FuncGen {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/FuncGen._Executor.html
             *
             * A graphing, scientific calculator
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class _Executor extends dijit._WidgetBase implements dijit._TemplatedMixin {
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 *
                 */
                destroy(): void;
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
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param text the user input that needs to be parsed
                 */
                eval(text: String): any;
                /**
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param name this argument is simply a String that represents the name of the function being evaluated. It can be undefined, but in that case the function is a one time use.
                 * @param args the function arguments
                 * @param body the function body
                 */
                Function(name: any, args: String, body: String): any;
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
                 * @param name
                 * @param args
                 * @param body
                 */
                normalizedFunction(name: any, args: any, body: any): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * this should be overwritten and become a great place for making user predefined functions
                 *
                 */
                onLoad(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/FuncGen.FuncGen.html
             *
             * The dialog layout for making functions
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class FuncGen extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "functions": Object;
                set(property:"functions", value: Object): void;
                get(property:"functions"): Object;
                watch(property:"functions", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 *
                 */
                "readStore": Object;
                set(property:"readStore", value: Object): void;
                get(property:"readStore"): Object;
                watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "writeStore": Object;
                set(property:"writeStore", value: Object): void;
                get(property:"writeStore"): Object;
                watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * clear the name, arguments, and body
                 *
                 */
                clear(): void;
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 * delete an item in the writestore
                 *
                 * @param item
                 */
                deleteThing(item: any): void;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * set the status in the template to ready
                 *
                 */
                readyStatus(): void;
                /**
                 * set the arguments and body to match a function selected if it exists in the function list
                 *
                 */
                reset(): void;
                /**
                 *
                 * @param name
                 * @param args
                 * @param body
                 */
                saveFunction(name: any, args: any, body: any): void;
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
                 * make sure the parent has a close button if it needs to be able to close
                 * link the write store too
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
                 * The clear button in the template calls this.
                 * Clear the name, arguments, and body if the user says yes.
                 *
                 */
                onClear(): void;
                /**
                 * (Delete button on click event) delete a function if the user clicks yes
                 *
                 */
                onDelete(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * (Reset button on click event) reset the arguments and body to their previously saved state if the user says yes
                 *
                 */
                onReset(): void;
                /**
                 *
                 */
                onSaved(): void;
                /**
                 * if they select something in the name combobox, then change the body and arguments to correspond to the function they selected
                 *
                 */
                onSelect(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/FuncGen.Grapher.html
             *
             * The dialog layout for making graphs
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class Grapher extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                "chartIndex": number;
                set(property:"chartIndex", value: number): void;
                get(property:"chartIndex"): number;
                watch(property:"chartIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "checkboxIndex": number;
                set(property:"checkboxIndex", value: number): void;
                get(property:"checkboxIndex"): number;
                watch(property:"checkboxIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorBoxFieldsetIndex": number;
                set(property:"colorBoxFieldsetIndex", value: number): void;
                get(property:"colorBoxFieldsetIndex"): number;
                watch(property:"colorBoxFieldsetIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorIndex": number;
                set(property:"colorIndex", value: number): void;
                get(property:"colorIndex"): number;
                watch(property:"colorIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "dropDownIndex": number;
                set(property:"dropDownIndex", value: number): void;
                get(property:"dropDownIndex"): number;
                watch(property:"dropDownIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "evaluatedExpression": number;
                set(property:"evaluatedExpression", value: number): void;
                get(property:"evaluatedExpression"): number;
                watch(property:"evaluatedExpression", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "expressionIndex": number;
                set(property:"expressionIndex", value: number): void;
                get(property:"expressionIndex"): number;
                watch(property:"expressionIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "funcNumberIndex": number;
                set(property:"funcNumberIndex", value: number): void;
                get(property:"funcNumberIndex"): number;
                watch(property:"funcNumberIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionMode": number;
                set(property:"functionMode", value: number): void;
                get(property:"functionMode"): number;
                watch(property:"functionMode", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionRef": number;
                set(property:"functionRef", value: number): void;
                get(property:"functionRef"): number;
                watch(property:"functionRef", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 *
                 */
                "statusIndex": number;
                set(property:"statusIndex", value: number): void;
                get(property:"statusIndex"): number;
                watch(property:"statusIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "tooltipIndex": number;
                set(property:"tooltipIndex", value: number): void;
                get(property:"tooltipIndex"): number;
                watch(property:"tooltipIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * add or re-add the default x/y axes to the Chart provided
                 *
                 * @param chart
                 */
                addXYAxes(chart: dojox.charting.Chart2D): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * Make the color of the chart the new color.
                 * The context is changed to the colorPalette, and a reference to chart was added to it a an attribute.
                 *
                 */
                changedColor(): void;
                /**
                 * adjust all charts in this.array according to any changes in window options
                 *
                 */
                checkDirty(): void;
                /**
                 * to stay in sync with onChange, checkDirty is called with a timeout
                 *
                 */
                checkDirty1(): void;
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
                 * create a new row in the table with all of the dojo objects.
                 *
                 */
                createFunction(): void;
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
                 * deselect all checkboxes inside the function table
                 *
                 */
                deselectAll(): void;
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
                 *
                 * @param i
                 */
                drawOne(i: any): void;
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
                 * erase the chart inside this.array with the index i
                 *
                 * @param i index to this.array that represents the current row number in the table
                 */
                erase(i: number): void;
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
                 * if something in the window options is changed, this is called
                 *
                 */
                makeDirty(): void;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * add Event handlers, some additional attributes, etc
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
                 * select all checkboxes inside the function table
                 *
                 */
                selectAll(): void;
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
                 * set the status of the row i to be status
                 *
                 * @param i index of this.array as well as a row index
                 * @param status either Error, Hidden, or Drawn
                 */
                setStatus(i: number, status: String): void;
                /**
                 * make sure the parent has a close button if it needs to be able to close
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
                 * The delete button's onClick method.
                 * Delete all of the selected rows.
                 *
                 */
                onDelete(): void;
                /**
                 *
                 */
                onDraw(): void;
                /**
                 * the erase button's onClick method
                 * it see's if the checkbox is checked and then erases it if it is.
                 *
                 */
                onErase(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/Grapher.html
         *
         *
         */
        interface Grapher {
            /**
             * Return a less exact approximation of r such that approx(r * (1 +- eps)) == approx(r)
             *
             * @param r
             */
            approx(r: number): number;
            /**
             * graph a chart with the given function.
             *
             * @param chart
             * @param functionToGraph Function with one numeric parameter (x or y typically)
             * @param params can contain the number of the graph in the chart it is (an integer), a boolean saying if the functionToGraph is a function of x (otherwise y)and the color, which is an object with a stroke with a color's name eg: color:{stroke:"black"}
             */
            draw(chart: dojox.charting.Chart2D, functionToGraph: Function, params: Object): any;
            /**
             *
             */
            FuncGen(): void;
            /**
             * create the points with information about the graph.
             *
             * @param funcToGraph A function with one numeric parameter (x or y typically)
             * @param x x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param y x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param width pixel width of the chart
             * @param minX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param minY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             */
            generatePoints(funcToGraph: Function, x: String, y: String, width: number, minX: number, maxX: number, minY: number, maxY: number): Object;
            /**
             *
             */
            Grapher(): void;
            /**
             *
             * @param base
             * @param exponent
             */
            pow(base: any, exponent: any): any;
            /**
             *
             * @param number
             */
            toFrac(number: any): any;
        }
        namespace Grapher {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/Grapher._Executor.html
             *
             * A graphing, scientific calculator
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class _Executor extends dijit._WidgetBase implements dijit._TemplatedMixin {
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 *
                 */
                destroy(): void;
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
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param text the user input that needs to be parsed
                 */
                eval(text: String): any;
                /**
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param name this argument is simply a String that represents the name of the function being evaluated. It can be undefined, but in that case the function is a one time use.
                 * @param args the function arguments
                 * @param body the function body
                 */
                Function(name: any, args: String, body: String): any;
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
                 * @param name
                 * @param args
                 * @param body
                 */
                normalizedFunction(name: any, args: any, body: any): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * this should be overwritten and become a great place for making user predefined functions
                 *
                 */
                onLoad(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/Grapher.FuncGen.html
             *
             * The dialog layout for making functions
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class FuncGen extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "functions": Object;
                set(property:"functions", value: Object): void;
                get(property:"functions"): Object;
                watch(property:"functions", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 *
                 */
                "readStore": Object;
                set(property:"readStore", value: Object): void;
                get(property:"readStore"): Object;
                watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "writeStore": Object;
                set(property:"writeStore", value: Object): void;
                get(property:"writeStore"): Object;
                watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * clear the name, arguments, and body
                 *
                 */
                clear(): void;
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 * delete an item in the writestore
                 *
                 * @param item
                 */
                deleteThing(item: any): void;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * set the status in the template to ready
                 *
                 */
                readyStatus(): void;
                /**
                 * set the arguments and body to match a function selected if it exists in the function list
                 *
                 */
                reset(): void;
                /**
                 *
                 * @param name
                 * @param args
                 * @param body
                 */
                saveFunction(name: any, args: any, body: any): void;
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
                 * make sure the parent has a close button if it needs to be able to close
                 * link the write store too
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
                 * The clear button in the template calls this.
                 * Clear the name, arguments, and body if the user says yes.
                 *
                 */
                onClear(): void;
                /**
                 * (Delete button on click event) delete a function if the user clicks yes
                 *
                 */
                onDelete(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * (Reset button on click event) reset the arguments and body to their previously saved state if the user says yes
                 *
                 */
                onReset(): void;
                /**
                 *
                 */
                onSaved(): void;
                /**
                 * if they select something in the name combobox, then change the body and arguments to correspond to the function they selected
                 *
                 */
                onSelect(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/Grapher.Grapher.html
             *
             * The dialog layout for making graphs
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class Grapher extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                "chartIndex": number;
                set(property:"chartIndex", value: number): void;
                get(property:"chartIndex"): number;
                watch(property:"chartIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "checkboxIndex": number;
                set(property:"checkboxIndex", value: number): void;
                get(property:"checkboxIndex"): number;
                watch(property:"checkboxIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorBoxFieldsetIndex": number;
                set(property:"colorBoxFieldsetIndex", value: number): void;
                get(property:"colorBoxFieldsetIndex"): number;
                watch(property:"colorBoxFieldsetIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorIndex": number;
                set(property:"colorIndex", value: number): void;
                get(property:"colorIndex"): number;
                watch(property:"colorIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "dropDownIndex": number;
                set(property:"dropDownIndex", value: number): void;
                get(property:"dropDownIndex"): number;
                watch(property:"dropDownIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "evaluatedExpression": number;
                set(property:"evaluatedExpression", value: number): void;
                get(property:"evaluatedExpression"): number;
                watch(property:"evaluatedExpression", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "expressionIndex": number;
                set(property:"expressionIndex", value: number): void;
                get(property:"expressionIndex"): number;
                watch(property:"expressionIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "funcNumberIndex": number;
                set(property:"funcNumberIndex", value: number): void;
                get(property:"funcNumberIndex"): number;
                watch(property:"funcNumberIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionMode": number;
                set(property:"functionMode", value: number): void;
                get(property:"functionMode"): number;
                watch(property:"functionMode", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionRef": number;
                set(property:"functionRef", value: number): void;
                get(property:"functionRef"): number;
                watch(property:"functionRef", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 *
                 */
                "statusIndex": number;
                set(property:"statusIndex", value: number): void;
                get(property:"statusIndex"): number;
                watch(property:"statusIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "tooltipIndex": number;
                set(property:"tooltipIndex", value: number): void;
                get(property:"tooltipIndex"): number;
                watch(property:"tooltipIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * add or re-add the default x/y axes to the Chart provided
                 *
                 * @param chart
                 */
                addXYAxes(chart: dojox.charting.Chart2D): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * Make the color of the chart the new color.
                 * The context is changed to the colorPalette, and a reference to chart was added to it a an attribute.
                 *
                 */
                changedColor(): void;
                /**
                 * adjust all charts in this.array according to any changes in window options
                 *
                 */
                checkDirty(): void;
                /**
                 * to stay in sync with onChange, checkDirty is called with a timeout
                 *
                 */
                checkDirty1(): void;
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
                 * create a new row in the table with all of the dojo objects.
                 *
                 */
                createFunction(): void;
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
                 * deselect all checkboxes inside the function table
                 *
                 */
                deselectAll(): void;
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
                 *
                 * @param i
                 */
                drawOne(i: any): void;
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
                 * erase the chart inside this.array with the index i
                 *
                 * @param i index to this.array that represents the current row number in the table
                 */
                erase(i: number): void;
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
                 * if something in the window options is changed, this is called
                 *
                 */
                makeDirty(): void;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * add Event handlers, some additional attributes, etc
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
                 * select all checkboxes inside the function table
                 *
                 */
                selectAll(): void;
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
                 * set the status of the row i to be status
                 *
                 * @param i index of this.array as well as a row index
                 * @param status either Error, Hidden, or Drawn
                 */
                setStatus(i: number, status: String): void;
                /**
                 * make sure the parent has a close button if it needs to be able to close
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
                 * The delete button's onClick method.
                 * Delete all of the selected rows.
                 *
                 */
                onDelete(): void;
                /**
                 *
                 */
                onDraw(): void;
                /**
                 * the erase button's onClick method
                 * it see's if the checkbox is checked and then erases it if it is.
                 *
                 */
                onErase(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/toFrac.html
         *
         *
         */
        interface toFrac {
            /**
             * Return a less exact approximation of r such that approx(r * (1 +- eps)) == approx(r)
             *
             * @param r
             */
            approx(r: number): number;
            /**
             * graph a chart with the given function.
             *
             * @param chart
             * @param functionToGraph Function with one numeric parameter (x or y typically)
             * @param params can contain the number of the graph in the chart it is (an integer), a boolean saying if the functionToGraph is a function of x (otherwise y)and the color, which is an object with a stroke with a color's name eg: color:{stroke:"black"}
             */
            draw(chart: dojox.charting.Chart2D, functionToGraph: Function, params: Object): any;
            /**
             *
             */
            FuncGen(): void;
            /**
             * create the points with information about the graph.
             *
             * @param funcToGraph A function with one numeric parameter (x or y typically)
             * @param x x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param y x and y are Strings which always have the values of "x" or "y".  If y="x" and x="y" then it is creating points for the function as though it was a function of y
             * @param width pixel width of the chart
             * @param minX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxX minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param minY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             * @param maxY minX, maxX, minY, and maxY are all bounds of the chart.  If x="y" then maxY should be the maximum bound of x rather than y
             */
            generatePoints(funcToGraph: Function, x: String, y: String, width: number, minX: number, maxX: number, minY: number, maxY: number): Object;
            /**
             *
             */
            Grapher(): void;
            /**
             *
             * @param base
             * @param exponent
             */
            pow(base: any, exponent: any): any;
            /**
             *
             * @param number
             */
            toFrac(number: any): any;
        }
        namespace toFrac {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/toFrac._Executor.html
             *
             * A graphing, scientific calculator
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class _Executor extends dijit._WidgetBase implements dijit._TemplatedMixin {
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 *
                 */
                destroy(): void;
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
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param text the user input that needs to be parsed
                 */
                eval(text: String): any;
                /**
                 * create an anonymous function to run the code the parser generates from the user input.
                 *
                 * @param name this argument is simply a String that represents the name of the function being evaluated. It can be undefined, but in that case the function is a one time use.
                 * @param args the function arguments
                 * @param body the function body
                 */
                Function(name: any, args: String, body: String): any;
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
                 * @param name
                 * @param args
                 * @param body
                 */
                normalizedFunction(name: any, args: any, body: any): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * this should be overwritten and become a great place for making user predefined functions
                 *
                 */
                onLoad(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/toFrac.FuncGen.html
             *
             * The dialog layout for making functions
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class FuncGen extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "functions": Object;
                set(property:"functions", value: Object): void;
                get(property:"functions"): Object;
                watch(property:"functions", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 *
                 */
                "readStore": Object;
                set(property:"readStore", value: Object): void;
                get(property:"readStore"): Object;
                watch(property:"readStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 *
                 */
                "writeStore": Object;
                set(property:"writeStore", value: Object): void;
                get(property:"writeStore"): Object;
                watch(property:"writeStore", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * clear the name, arguments, and body
                 *
                 */
                clear(): void;
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
                 * @param name
                 */
                deleteFunction(name: any): void;
                /**
                 * delete an item in the writestore
                 *
                 * @param item
                 */
                deleteThing(item: any): void;
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
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * Processing after the DOM fragment is created
                 * Called after the DOM fragment has been created, but not necessarily
                 * added to the document.  Do not include any operations which rely on
                 * node dimensions or placement.
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
                 * set the status in the template to ready
                 *
                 */
                readyStatus(): void;
                /**
                 * set the arguments and body to match a function selected if it exists in the function list
                 *
                 */
                reset(): void;
                /**
                 *
                 * @param name
                 * @param args
                 * @param body
                 */
                saveFunction(name: any, args: any, body: any): void;
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
                 * make sure the parent has a close button if it needs to be able to close
                 * link the write store too
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
                 * The clear button in the template calls this.
                 * Clear the name, arguments, and body if the user says yes.
                 *
                 */
                onClear(): void;
                /**
                 * (Delete button on click event) delete a function if the user clicks yes
                 *
                 */
                onDelete(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
                /**
                 * (Reset button on click event) reset the arguments and body to their previously saved state if the user says yes
                 *
                 */
                onReset(): void;
                /**
                 *
                 */
                onSaved(): void;
                /**
                 * if they select something in the name combobox, then change the body and arguments to correspond to the function they selected
                 *
                 */
                onSelect(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/calc/toFrac.Grapher.html
             *
             * The dialog layout for making graphs
             *
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree
             */
            class Grapher extends dijit._WidgetBase implements dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin {
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
                "chartIndex": number;
                set(property:"chartIndex", value: number): void;
                get(property:"chartIndex"): number;
                watch(property:"chartIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "checkboxIndex": number;
                set(property:"checkboxIndex", value: number): void;
                get(property:"checkboxIndex"): number;
                watch(property:"checkboxIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorBoxFieldsetIndex": number;
                set(property:"colorBoxFieldsetIndex", value: number): void;
                get(property:"colorBoxFieldsetIndex"): number;
                watch(property:"colorBoxFieldsetIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "colorIndex": number;
                set(property:"colorIndex", value: number): void;
                get(property:"colorIndex"): number;
                watch(property:"colorIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 *
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
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
                 *
                 */
                "dropDownIndex": number;
                set(property:"dropDownIndex", value: number): void;
                get(property:"dropDownIndex"): number;
                watch(property:"dropDownIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "evaluatedExpression": number;
                set(property:"evaluatedExpression", value: number): void;
                get(property:"evaluatedExpression"): number;
                watch(property:"evaluatedExpression", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "expressionIndex": number;
                set(property:"expressionIndex", value: number): void;
                get(property:"expressionIndex"): number;
                watch(property:"expressionIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "funcNumberIndex": number;
                set(property:"funcNumberIndex", value: number): void;
                get(property:"funcNumberIndex"): number;
                watch(property:"funcNumberIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionMode": number;
                set(property:"functionMode", value: number): void;
                get(property:"functionMode"): number;
                watch(property:"functionMode", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 *
                 */
                "functionRef": number;
                set(property:"functionRef", value: number): void;
                get(property:"functionRef"): number;
                watch(property:"functionRef", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 *
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
                 *
                 */
                "statusIndex": number;
                set(property:"statusIndex", value: number): void;
                get(property:"statusIndex"): number;
                watch(property:"statusIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 *
                 */
                "tooltipIndex": number;
                set(property:"tooltipIndex", value: number): void;
                get(property:"tooltipIndex"): number;
                watch(property:"tooltipIndex", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  (Remove for 2.0 and assume true)
                 *
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * add or re-add the default x/y axes to the Chart provided
                 *
                 * @param chart
                 */
                addXYAxes(chart: dojox.charting.Chart2D): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 *
                 */
                buildRendering(): void;
                /**
                 * Make the color of the chart the new color.
                 * The context is changed to the colorPalette, and a reference to chart was added to it a an attribute.
                 *
                 */
                changedColor(): void;
                /**
                 * adjust all charts in this.array according to any changes in window options
                 *
                 */
                checkDirty(): void;
                /**
                 * to stay in sync with onChange, checkDirty is called with a timeout
                 *
                 */
                checkDirty1(): void;
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
                 * create a new row in the table with all of the dojo objects.
                 *
                 */
                createFunction(): void;
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
                 * deselect all checkboxes inside the function table
                 *
                 */
                deselectAll(): void;
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
                 *
                 * @param i
                 */
                drawOne(i: any): void;
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
                 * erase the chart inside this.array with the index i
                 *
                 * @param i index to this.array that represents the current row number in the table
                 */
                erase(i: number): void;
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
                 * if something in the window options is changed, this is called
                 *
                 */
                makeDirty(): void;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
                 * @param func
                 */
                on(type: String, func: Function): any;
                /**
                 * Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                 * Call specified function when event type occurs, ex: myWidget.on("click", function(){ ... }).
                 * Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                 * widget's scope you must do myWidget.on("click", lang.hitch(myWidget, func)).
                 *
                 * @param type Name of event (ex: "click") or extension event like touch.press.
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
                 * add Event handlers, some additional attributes, etc
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
                 * select all checkboxes inside the function table
                 *
                 */
                selectAll(): void;
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
                 * set the status of the row i to be status
                 *
                 * @param i index of this.array as well as a row index
                 * @param status either Error, Hidden, or Drawn
                 */
                setStatus(i: number, status: String): void;
                /**
                 * make sure the parent has a close button if it needs to be able to close
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
                 * The delete button's onClick method.
                 * Delete all of the selected rows.
                 *
                 */
                onDelete(): void;
                /**
                 *
                 */
                onDraw(): void;
                /**
                 * the erase button's onClick method
                 * it see's if the checkbox is checked and then erases it if it is.
                 *
                 */
                onErase(): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 *
                 */
                onFocus(): void;
            }
        }

    }

}

declare module "dojox/calc/_Executor" {
    var exp: dojox.calc._Executor
    export=exp;
}
declare module "dojox/calc/_Executor._Executor" {
    var exp: dojox.calc._Executor._Executor
    export=exp;
}
declare module "dojox/calc/_Executor.FuncGen" {
    var exp: dojox.calc._Executor.FuncGen
    export=exp;
}
declare module "dojox/calc/_Executor.Grapher" {
    var exp: dojox.calc._Executor.Grapher
    export=exp;
}
declare module "dojox/calc/FuncGen" {
    var exp: dojox.calc.FuncGen
    export=exp;
}
declare module "dojox/calc/FuncGen._Executor" {
    var exp: dojox.calc.FuncGen._Executor
    export=exp;
}
declare module "dojox/calc/FuncGen.FuncGen" {
    var exp: dojox.calc.FuncGen.FuncGen
    export=exp;
}
declare module "dojox/calc/FuncGen.Grapher" {
    var exp: dojox.calc.FuncGen.Grapher
    export=exp;
}
declare module "dojox/calc/Grapher" {
    var exp: dojox.calc.Grapher
    export=exp;
}
declare module "dojox/calc/Grapher._Executor" {
    var exp: dojox.calc.Grapher._Executor
    export=exp;
}
declare module "dojox/calc/Grapher.FuncGen" {
    var exp: dojox.calc.Grapher.FuncGen
    export=exp;
}
declare module "dojox/calc/Grapher.Grapher" {
    var exp: dojox.calc.Grapher.Grapher
    export=exp;
}
declare module "dojox/calc/toFrac" {
    var exp: dojox.calc.toFrac
    export=exp;
}
declare module "dojox/calc/toFrac._Executor" {
    var exp: dojox.calc.toFrac._Executor
    export=exp;
}
declare module "dojox/calc/toFrac.FuncGen" {
    var exp: dojox.calc.toFrac.FuncGen
    export=exp;
}
declare module "dojox/calc/toFrac.Grapher" {
    var exp: dojox.calc.toFrac.Grapher
    export=exp;
}
declare module "dojox/calc/GraphPro" {
    var exp: dojox.calc.GraphPro
    export=exp;
}
declare module "dojox/calc/Standard" {
    var exp: dojox.calc.Standard
    export=exp;
}
