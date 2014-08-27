// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    module embed {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/embed/Quicktime.html
         *
         * Returns a reference to the HTMLObject/HTMLEmbed that is created to
         * place the movie in the document.  You can use this either with or
         * without the new operator.  Note that with any other DOM manipulation,
         * you must wait until the document is finished loading before trying
         * to use this.
         * 
         * @param kwArgs     
         * @param node     
         */
        interface Quicktime{(kwArgs: Object, node: HTMLElement): void}
        module Quicktime {
            /**
             * 
             */
            var initialized: boolean
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/embed/Flash.html
         *
         * Create a wrapper object around a Flash movie; this is the DojoX equivilent
         * to SWFObject.
         * Creates a wrapper object around a Flash movie.  Wrapper object will
         * insert the movie reference in node; when the browser first starts
         * grabbing the movie, onReady will be fired; when the movie has finished
         * loading, it will fire onLoad.
         * 
         * If your movie uses ExternalInterface, you should use the onLoad event
         * to do any kind of proxy setup (see dojox.embed.Flash.proxy); this seems
         * to be the only consistent time calling EI methods are stable (since the
         * Flash movie will shoot several methods into the window object before
         * EI callbacks can be used properly).
         * 
         * @param kwArgs The various arguments that will be used to help define the Flash movie.     
         * @param node The node where the embed object will be placed     
         */
        interface Flash{(kwArgs: Object, node: HTMLElement): void}
        module Flash {
            /**
             * Used as both a detection (i.e. if(dojox.embed.Flash.available){ })
             * and as a variable holding the major version of the player installed.
             * 
             */
            var available: number
            /**
             * 
             */
            var domNode: Object
            /**
             * 
             */
            var id: Object
            /**
             * Whether or not the Flash engine is available for use.
             * 
             */
            var initialized: boolean
            /**
             * 
             */
            var minimumRequired: Object
            /**
             * 
             */
            var minimumVersion: number
            /**
             * The minimum supported version of the Flash Player, defaults to 8.
             * 
             */
            var minSupported: number
            /**
             * 
             */
            var movie: Object
            /**
             * Whether or not the Flash Player installed is supported by dojox.embed.
             * 
             */
            var supported: boolean
            /**
             * The version of the installed Flash Player; takes the form of
             * { major, minor, rev }.  To get the major version, you'd do this:
             * var v=dojox.embed.Flash.version.major;
             * 
             */
            var version: Object
            /**
             * Gets Flash movie by id.
             * Probably includes methods for outdated
             * browsers, but this should catch all cases.
             * 
             * @param movieName The name of the SWF             
             * @param doc The document, if not current window(not fully supported)             
             */
            interface byId{(movieName: String, doc: Object): any}
            /**
             * Public interface for destroying all the properties in this object.
             * Will also clean all proxied methods.
             * 
             */
            interface destroy{(): void}
            /**
             * Initialize (i.e. place and load) the movie based on kwArgs.
             * 
             * @param kwArgs An object with the following properties:path (String): The URL of the movie to embed.id (String, optional): A unique key that will be used as the id of the created markup.  If you don'tprovide this, a unique key will be generated.width (Number, optional): The width of the embedded movie; the default value is 320px.height (Number, optional): The height of the embedded movie; the default value is 240pxminimumVersion (Number, optional): The minimum targeted version of the Flash Player (defaults to 9)style (String, optional): Any CSS style information (i.e. style="background-color:transparent") you wantto define on the markup.params (Object, optional): A set of key/value pairs that you want to define in the resultant markup.vars (Object, optional): A set of key/value pairs that the Flash movie will interpret as FlashVars.expressInstall (Boolean, optional): Whether or not to include any kind of expressInstall info. Default is false.redirect (String, optional): A url to redirect the browser to if the current Flash version is not supported.            
             * @param node               Optional            
             */
            interface init{(kwArgs: Object, node: HTMLElement): void}
            /**
             * 
             * @param kwArgs             
             * @param node             
             */
            interface place{(kwArgs: any, node: any): void}
            /**
             * Create the set of passed methods on the Flash object
             * so that you can call that object directly, as opposed to having to
             * delve into the internal movie to do this.  Intended to make working
             * with Flash movies that use ExternalInterface much easier to use.
             * 
             * @param obj             
             * @param methods             
             */
            interface proxy{(obj: dojox.embed.Flash, methods: any[]): void}
            /**
             * Create the set of passed methods on the Flash object
             * so that you can call that object directly, as opposed to having to
             * delve into the internal movie to do this.  Intended to make working
             * with Flash movies that use ExternalInterface much easier to use.
             * 
             * @param obj             
             * @param methods             
             */
            interface proxy{(obj: dojox.embed.Flash, methods: String): void}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/embed/Object.html
         *
         * A widget you can use to embed either a Flash or Quicktime
         * movie.
         * 
         * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
         * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
         */
        class Object_ extends dijit._Widget {
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
             * The height of the movie. If not provided, the height of this.domNode is used.
             * 
             */
            "height": Object;
            set(property:"height", value: Object): void;
            get(property:"height"): Object;
            watch(property:"height", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * The eventual reference to the movie embedded.  If you are looking to script
             * control over the movie, you'd access it this way.
             * 
             */
            "movie": Object;
            set(property:"movie", value: Object): void;
            get(property:"movie"): Object;
            watch(property:"movie", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * A property bag that is created postCreate.  Any additional attributes you
             * define on your domNode will be collected and placed into this, which will
             * then be passed to the movie constructor.
             * 
             */
            "params": Object;
            set(property:"params", value: Object): void;
            get(property:"params"): Object;
            watch(property:"params", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Expression used on the src property to determine if this is Flash or Quicktime.
             * 
             */
            "reFlash": RegExp;
            set(property:"reFlash", value: RegExp): void;
            get(property:"reFlash"): RegExp;
            watch(property:"reFlash", callback:{(property?:string, oldValue?:RegExp, newValue?: RegExp):void}) :{unwatch():void}
            /**
             * Expression used on the src property to determine if this is Flash or Quicktime.
             * 
             */
            "reQtAudio": RegExp;
            set(property:"reQtAudio", value: RegExp): void;
            get(property:"reQtAudio"): RegExp;
            watch(property:"reQtAudio", callback:{(property?:string, oldValue?:RegExp, newValue?: RegExp):void}) :{unwatch():void}
            /**
             * Expression used on the src property to determine if this is Flash or Quicktime.
             * 
             */
            "reQtMovie": RegExp;
            set(property:"reQtMovie", value: RegExp): void;
            get(property:"reQtMovie"): RegExp;
            watch(property:"reQtMovie", callback:{(property?:string, oldValue?:RegExp, newValue?: RegExp):void}) :{unwatch():void}
            /**
             * The URL of the movie to embed.
             * 
             */
            "src": string;
            set(property:"src", value: string): void;
            get(property:"src"): string;
            watch(property:"src", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
             * The width of the movie. If not provided, the width of this.domNode is used.
             * 
             */
            "width": Object;
            set(property:"width", value: Object): void;
            get(property:"width"): Object;
            watch(property:"width", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * Constructs the movie and places it in the document.
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
            toString(): String;
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
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/embed/flashVars.html
         *
         * Handles flashvar serialization
         * Converting complex objects into a simple, clear string that can be appended
         * to the swf as a query: myMovie.swf?flashvars=foo.
         * Note this needs to work with the SWF, which must know what variables to expect.
         * Therefore this is something of an "internal" class - unless you know how to
         * modify or create SWFs.
         * JSON could be done, but Deft does not yet have a JSON parser, and quotes are
         * very problematic since Flash cannot use eval(); JSON parsing was successful
         * when it was fully escaped, but that made it very large anyway. flashvar
         * serialization at most is 200% larger than JSON.
         * 
         */
        interface flashVars {
            /**
             * Deft/common/flashVars.as
             * 
             */
            See: Object;
            /**
             * Key method. Serializes an object.
             * 
             * @param n The name for the object, such as: "button"             
             * @param o The object to serialize             
             */
            serialize(n: String, o: Object): any;
        }
    }
}