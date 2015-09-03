// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    
    module av {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/_Media.html
         *
         * Used as a mixin for dojox and AIR media
         * Calculates the current status of the playing media and fires
         * the appropriate events.
         * 
         */
        class _Media {
            constructor();
            /**
             * Whether to allow the SWF to go to fullscreen
             * 
             */
            "allowFullScreen": boolean;
            /**
             * Whether SWF is restricted to a domain
             * 
             */
            "allowNetworking": string;
            /**
             * Whether the SWF can access the container JS
             * 
             */
            "allowScriptAccess": string;
            /**
             * Whether the video automatically plays on load or not.
             * 
             */
            "autoPlay": Object;
            /**
             * Time in milliseconds that the video should be loaded before it will
             * play. May pause and resume to build up buffer. Prevents stuttering.
             * 
             * Note: Older FLVs, without a duration, cannot be buffered.
             * 
             */
            "bufferTime": Object;
            /**
             * The SWF object. Methods are passed to this.
             * 
             */
            "flashMedia": Object;
            /**
             * The id of this widget and the id of the SWF movie.
             * 
             */
            "id": Object;
            /**
             * The initial volume setting of the player. Acccepts between 0 and 1.
             * 
             */
            "initialVolume": Object;
            /**
             * Setting to true tells the SWF to output log messages to Firebug.
             * 
             */
            "isDebug": Object;
            /**
             * 
             */
            "mediaUrl": string;
            /**
             * Time in milliseconds between the playhead time and loaded time that
             * will trigger the buffer. When buffer is triggered, video will pause
             * until the bufferTime amount is buffered.
             * Note: Should be a small number, greater than zero.
             * 
             */
            "minBufferTime": number;
            /**
             * The percentage the media has downloaded; from 0-100
             * 
             */
            "percentDownloaded": number;
            /**
             * How often, in milliseconds to get an update of the video position.
             * 
             */
            "updateTime": number;
            /**
             * The render type of the SWF
             * 
             */
            "wmode": string;
            /**
             * destroys flash
             * 
             */
            destroy(): void;
            /**
             * Returns the current time of the video
             * 
             */
            getTime(): any;
            /**
             * Fires a boolean to tell if media
             * is paused for buffering or if buffering
             * has finished
             * 
             * @param isBuffering             
             */
            onBuffer(isBuffering: boolean): void;
            /**
             * Fires when the player is clicked
             * Could be used to toggle play/pause, or
             * do an external activity, like opening a new
             * window.
             * 
             * @param evt             
             */
            onClick(evt: Object): void;
            /**
             * Fires the amount of that the media has been
             * downloaded. Number, 0-100
             * 
             * @param percent             
             */
            onDownloaded(percent: number): void;
            /**
             * Fires when video ends
             * Could be used to change pause button to play
             * or show a post video graphic, like YouTube
             * 
             * @param data             
             */
            onEnd(data: Object): void;
            /**
             * Fired when the player encounters an error
             * 
             * @param data             
             * @param url             
             */
            onError(data: Object, url: String): void;
            /**
             * Fired when the SWF player has loaded
             * NOT when the video has loaded
             * 
             * @param mov             
             */
            onLoad(mov: Object): void;
            /**
             * The video properties. Width, height, duration, etc.
             * 
             * @param data             
             * @param evt             
             */
            onMetaData(data: Object, evt: Object): void;
            /**
             * Fires when the pause button is clicked
             * 
             * @param data             
             */
            onPause(data: Object): void;
            /**
             * Fires when video starts and resumes
             * 
             * @param data             
             */
            onPlay(data: Object): void;
            /**
             * The status of the video from the SWF
             * playing, stopped, bufering, etc.
             * 
             * @param data             
             */
            onPlayerStatus(data: Object): void;
            /**
             * The position of the playhead in seconds
             * 
             * @param time             
             */
            onPosition(time: number): void;
            /**
             * 
             */
            onResize(): void;
            /**
             * Fires when video starts
             * Good for setting the play button to pause
             * during an autoPlay for example
             * 
             * @param data             
             */
            onStart(data: Object): void;
            /**
             * Simple status
             * 
             * @param data             
             */
            onStatus(data: Object): void;
            /**
             * Fire when the Stop button is clicked
             * 
             */
            onStop(): void;
            /**
             * Fired on SWF resize, or when its
             * toggled between fullscreen.
             * 
             * @param data             
             */
            onSwfSized(data: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/FLAudio.html
         *
         * Play MP3 files through the Flash SWF built in the
         * DEFT project.
         * This class is brand new, so there is a lot of
         * functionality not yet available. The initial
         * purpose is for playing "event" sounds like button
         * clicks, and for loading and controlling multiple
         * sounds at once. As of yet, streaming is not supported
         * and polling the sounds for events during playback
         * may still be missing information. Markup is not
         * supported, as it may not be needed.
         * 
         * TODO:
         * Streaming, playback events, crossdomain, CDN support,
         * (alternate SWF location), global volume, ID3 tag,
         * factor out doLater, onLoadStatus needs work,
         * play(position) / seek()
         * 
         * @param options     
         */
        class FLAudio {
            constructor(options: Object);
            /**
             * Whether SWF is restricted to a domain
             * 
             */
            "allowNetworking": string;
            /**
             * Whether the SWF can access the container JS
             * 
             */
            "allowScriptAccess": string;
            /**
             * The id of this widget and the id of the SWF movie.
             * 
             */
            "id": Object;
            /**
             * From -1 to 1 (-1 is left, 1 is right, 0 is middle)
             * Sets pan for all files unless changed with play
             * or setPan
             * 
             */
            "initialPan": number;
            /**
             * From 0-1
             * Sets volume for all files unless changed with doPlay
             * or setVolume
             * 
             */
            "initialVolume": number;
            /**
             * Setting to true tells the SWF to output log messages to Firebug.
             * 
             */
            "isDebug": Object;
            /**
             * How often in milliseconds that the status of the
             * player is checked - both load and play
             * 
             */
            "statusInterval": number;
            /**
             * destroys flash
             * 
             */
            destroy(): void;
            /**
             * Tell media to play, based on
             * the options passed.
             * 
             * @param options volume: Number:  Sets the volumepan: Number:  Sets left/right panindex:Number OR id:String OR url:String:  Choose one of the above to identify  the media you wish to control. id is  set by you. index is the order in which  media was added (zero based)  NOTE: lack of an identifier will default  to first (or only) item.             
             */
            doPlay(options: Object): void;
            /**
             * Set media pan, based on identifier in
             * the options passed.
             * 
             * @param options index:Number OR id:String OR url:String.See doPlay().             
             */
            getPan(options: Object): any;
            /**
             * Get the current time.
             * 
             * @param options index:Number OR id:String OR url:String.See doPlay().             
             */
            getPosition(options: Object): any;
            /**
             * Get media volume, based on identifier in
             * the options passed.
             * 
             * @param options index:Number OR id:String OR url:String.See doPlay().             
             */
            getVolume(options: Object): any;
            /**
             * Initialize the media.
             * 
             */
            init(): void;
            /**
             * Adds a media object to the playlist
             * *This can be called repeatedly to add multiple items.
             * 
             * @param options url: String:  (required) path to MP3 media  url must be absolute or relative to SWF,  not dojo or the html. An effort will be made  to fix incorrect paths.id: String:  (optional) an identifier to later determine  which media to control.             
             */
            load(options: Object): any;
            /**
             * Tell media to pause, based on identifier in
             * the options passed.
             * 
             * @param options index:Number OR id:String OR url:String.See doPlay().             
             */
            pause(options: Object): void;
            /**
             * Set media pan, based on identifier in
             * the options passed.
             * 
             * @param options pan:Number (from -1 to 1)index:Number OR id:String OR url:String (see doPlay())             
             */
            setPan(options: Object): void;
            /**
             * Set media volume, based on identifier in
             * the options passed.
             * 
             * @param options volume: Number0 to 1index:Number OR id:String OR url:String.See doPlay().             
             */
            setVolume(options: Object): void;
            /**
             * Tell media to stop, based on identifier in
             * the options passed.
             * 
             * @param options index:Number OR id:String OR url:String.See doPlay().             
             */
            stop(options: Object): void;
            /**
             * stub fired
             * 
             */
            onAllLoaded(): void;
            /**
             * Fired at the end of a media file.
             * 
             * @param events             
             */
            onComplete(events: any[]): void;
            /**
             * stub fired when an error occurs
             * 
             * @param msg             
             */
            onError(msg: any): void;
            /**
             * Fired when the ID3 data is received.
             * 
             * @param evt             
             */
            onID3(evt: any): void;
            /**
             * stub fired when SWF is ready
             * 
             */
            onLoad(): void;
            /**
             * 
             * @param events             
             */
            onLoadStatus(events: any[]): void;
            /**
             * 
             * @param events             
             */
            onPlayStatus(events: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/FLVideo.html
         *
         * Inserts a Flash FLV video into the HTML page and provides methods
         * and events for controlling the video. Also plays the H264/M4V codec
         * with a little trickery: change the '.M4V' extension to '.flv'.
         * 
         * @param options     
         */
        class FLVideo extends dijit._Widget implements dojox.av._Media {
            constructor(options: Object);
            /**
             * Whether to allow the SWF to go to fullscreen
             * 
             */
            "allowFullScreen": boolean;
            set(property:"allowFullScreen", value: boolean): void;
            get(property:"allowFullScreen"): boolean;
            watch(property:"allowFullScreen", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
            /**
             * Whether SWF is restricted to a domain
             * 
             */
            "allowNetworking": string;
            set(property:"allowNetworking", value: string): void;
            get(property:"allowNetworking"): string;
            watch(property:"allowNetworking", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Whether the SWF can access the container JS
             * 
             */
            "allowScriptAccess": string;
            set(property:"allowScriptAccess", value: string): void;
            get(property:"allowScriptAccess"): string;
            watch(property:"allowScriptAccess", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
             * Whether the video automatically plays on load or not.
             * 
             */
            "autoPlay": Object;
            set(property:"autoPlay", value: Object): void;
            get(property:"autoPlay"): Object;
            watch(property:"autoPlay", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * Time in milliseconds that the video should be loaded before it will
             * play. May pause and resume to build up buffer. Prevents stuttering.
             * 
             * Note: Older FLVs, without a duration, cannot be buffered.
             * 
             */
            "bufferTime": Object;
            set(property:"bufferTime", value: Object): void;
            get(property:"bufferTime"): Object;
            watch(property:"bufferTime", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * The SWF object. Methods are passed to this.
             * 
             */
            "flashMedia": Object;
            set(property:"flashMedia", value: Object): void;
            get(property:"flashMedia"): Object;
            watch(property:"flashMedia", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
             * The initial volume setting of the player. Acccepts between 0 and 1.
             * 
             */
            "initialVolume": Object;
            set(property:"initialVolume", value: Object): void;
            get(property:"initialVolume"): Object;
            watch(property:"initialVolume", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
            /**
             * Setting to true tells the SWF to output log messages to Firebug.
             * 
             */
            "isDebug": Object;
            set(property:"isDebug", value: Object): void;
            get(property:"isDebug"): Object;
            watch(property:"isDebug", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
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
            "mediaUrl": string;
            set(property:"mediaUrl", value: string): void;
            get(property:"mediaUrl"): string;
            watch(property:"mediaUrl", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
            /**
             * Time in milliseconds between the playhead time and loaded time that
             * will trigger the buffer. When buffer is triggered, video will pause
             * until the bufferTime amount is buffered.
             * Note: Should be a small number, greater than zero.
             * 
             */
            "minBufferTime": number;
            set(property:"minBufferTime", value: number): void;
            get(property:"minBufferTime"): number;
            watch(property:"minBufferTime", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
             * The percentage the media has downloaded; from 0-100
             * 
             */
            "percentDownloaded": number;
            set(property:"percentDownloaded", value: number): void;
            get(property:"percentDownloaded"): number;
            watch(property:"percentDownloaded", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
             * How often, in milliseconds to get an update of the video position.
             * 
             */
            "updateTime": number;
            set(property:"updateTime", value: number): void;
            get(property:"updateTime"): number;
            watch(property:"updateTime", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
            /**
             * The render type of the SWF
             * 
             */
            "wmode": string;
            set(property:"wmode", value: string): void;
            get(property:"wmode"): string;
            watch(property:"wmode", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
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
             * Returns the current time of the video
             * 
             */
            getTime(): any;
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
             * Pauses the video
             * 
             */
            pause(): void;
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
             * Plays the video. If an url is passed in, plays the new link.
             * 
             * @param newUrl               Optional            
             */
            play(newUrl: String): void;
            /**
             * Initialize the media.
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
             * Goes to the time passed in the argument
             * 
             * @param time             
             */
            seek(time: number): void;
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
             * Sets the volume of the video to the time in the
             * 
             * @param vol between 0 - 1.             
             */
            volume(vol: number): any;
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
             * Fires a boolean to tell if media
             * is paused for buffering or if buffering
             * has finished
             * 
             * @param isBuffering             
             */
            onBuffer(isBuffering: any): void;
            /**
             * Fires when the player is clicked
             * Could be used to toggle play/pause, or
             * do an external activity, like opening a new
             * window.
             * 
             * @param evt             
             */
            onClick(evt: any): void;
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
             * Fires the amount of that the media has been
             * downloaded. Number, 0-100
             * 
             * @param percent             
             */
            onDownloaded(percent: any): void;
            /**
             * Fires when video ends
             * Could be used to change pause button to play
             * or show a post video graphic, like YouTube
             * 
             * @param data             
             */
            onEnd(data: any): void;
            /**
             * Fired when the player encounters an error
             * 
             * @param data             
             * @param url             
             */
            onError(data: any, url: any): void;
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
             * Fired when the SWF player has loaded
             * NOT when the video has loaded
             * 
             * @param mov             
             */
            onLoad(mov: any): void;
            /**
             * The video properties. Width, height, duration, etc.
             * 
             * NOTE: if data is empty, this is an older FLV with no meta data.
             * Duration cannot be determined. In original FLVs, duration
             * could only be obtained with Flash Media Server.
             * 
             * NOTE: Older FLVs can still return width and height
             * and will do so on a second event call
             * 
             * @param data             
             * @param evt             
             */
            onMetaData(data: any, evt: any): void;
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
             * Fires when the pause button is clicked
             * 
             * @param data             
             */
            onPause(data: any): void;
            /**
             * Fires when video starts and resumes
             * 
             * @param data             
             */
            onPlay(data: any): void;
            /**
             * The status of the video from the SWF
             * playing, stopped, bufering, etc.
             * 
             * @param data             
             */
            onPlayerStatus(data: any): void;
            /**
             * The position of the playhead in seconds
             * 
             * @param time             
             */
            onPosition(time: any): void;
            /**
             * Fired on page resize
             * 
             */
            onResize(): void;
            /**
             * Called when this widget becomes the selected pane in a
             * dijit/layout/TabContainer, dijit/layout/StackContainer,
             * dijit/layout/AccordionContainer, etc.
             * 
             * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
             * 
             */
            onShow(): void;
            /**
             * Fires when video starts
             * Good for setting the play button to pause
             * during an autoPlay for example
             * 
             * @param data             
             */
            onStart(data: any): void;
            /**
             * Simple status
             * 
             * @param data             
             */
            onStatus(data: any): void;
            /**
             * Fire when the Stop button is clicked
             * 
             */
            onStop(): void;
            /**
             * Fired on SWF resize, or when its
             * toggled between fullscreen.
             * 
             * @param data             
             */
            onSwfSized(data: any): void;
        }
        module widget {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/widget/PlayButton.html
             *
             * A Play/Pause button widget to use with dojox.av.widget.Player
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class PlayButton extends dijit._Widget implements dijit._TemplatedMixin {
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
                 * Initialize button.
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
                 * A common method to set the media in all Player widgets.
                 * May do connections and initializations.
                 * 
                 * @param med             
                 */
                setMedia(med: Object): void;
                /**
                 * Toggles the play button invisible and the pause
                 * button visible.
                 * 
                 */
                showPause(): void;
                /**
                 * Toggles the pause button invisible and the play
                 * button visible..
                 * 
                 */
                showPlay(): void;
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
                 * Fired on play or pause click.
                 * 
                 */
                onClick(): void;
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
                 * Fired on pause click.
                 * 
                 */
                onPause(): void;
                /**
                 * Fired on play click.
                 * 
                 */
                onPlay(): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/widget/ProgressSlider.html
             *
             * A custom slider widget to use with dojox.av.widget.Player.
             * Displays the current playhead position of the media. Has two
             * progress bars: one for playhead position, and one for download
             * progress.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class ProgressSlider extends dijit._Widget implements dijit._TemplatedMixin {
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
                 * Fired on document.onmouseup.
                 * 
                 */
                endDrag(): void;
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
                 * Unhighlights handle onmouseover, or on endDrag.
                 * 
                 */
                handleOut(): void;
                /**
                 * Highlights the slider handle on mouseover, and
                 * stays highlighted during drag.
                 * 
                 */
                handleOver(): void;
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
                 * Initialize slider.
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
                 * Sets the slider handle (when it is not being dragged)
                 * 
                 * @param time             
                 */
                setHandle(time: any): void;
                /**
                 * Sets the download progress bar to the percentage of how much
                 * the media has been downloaded.
                 * 
                 * @param decimal             
                 */
                setLoadedPosition(decimal: any): void;
                /**
                 * A common method to set the media in all Player widgets.
                 * May do connections and initializations.
                 * 
                 * @param med             
                 * @param playerWidget             
                 */
                setMedia(med: Object, playerWidget: any): void;
                /**
                 * Fired onmousedown of the slider handle.
                 * 
                 */
                startDrag(): void;
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
                 * Fired when the mouse is moved. Sets the slider.
                 * 
                 * @param evt             
                 */
                onDrag(evt: Event): void;
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
                 * Handles player resize. Need to recalculate the width of
                 * position an download bars.
                 * 
                 * @param playerDimensions             
                 */
                onResize(playerDimensions: any): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/widget/Player.html
             *
             * A Media Player UI widget for all types of dojox.av and AIR media.
             * Currently for markup only. All controls should reside as child
             * nodes within the Player node. 'controlType' is used to determine
             * the placement of the control. If no type or an unrecognized type
             * is used, it will be left-aligned in the same row as the volume.
             * 
             * Note:
             * Be sure to use 'controlType' as a node attribute. It is not a
             * property of the widget.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Player extends dijit._Widget implements dijit._TemplatedMixin {
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
                 * Sets the width of the player (not the video size)
                 * Number will be converted to pixels
                 * String will be used literally. EX: "320px" or "100%"
                 * 
                 */
                "playerWidth": number;
                set(property:"playerWidth", value: number): void;
                get(property:"playerWidth"): number;
                watch(property:"playerWidth", callback:{(property?:string, oldValue?:number, newValue?: number):void}) :{unwatch():void}
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
                 * 
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
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
                 * Do player styling, and place child widgets in the proper location.
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
                 * Fired when all children are ready. Set the media in
                 * all children with setMedia()
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
                 * If a player size is a percentage, this will fire an onResize
                 * event for all children, passing the size of the player.
                 * 
                 * @param evt             
                 */
                onResize(evt: any): void;
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
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/widget/Status.html
             *
             * A Status widget to use with dojox.av.widget.Player
             * Displays the name of the media file, and it's current status
             * (playing, paused, buffering, etc.) in the middle. Displays
             * the playhead time on the left and the duration on the right.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Status extends dijit._Widget implements dijit._TemplatedMixin {
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
                 * A common method to set the media in all Player widgets.
                 * May do connections and initializations.
                 * 
                 * @param med             
                 */
                setMedia(med: Object): void;
                /**
                 * 
                 * @param str             
                 * @param isError             
                 */
                setStatus(str: any, isError: any): void;
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
                 * 
                 * @param time             
                 */
                toSeconds(time: any): any;
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
                 * 
                 * @param isBuffering             
                 */
                onBuffer(isBuffering: any): void;
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
                 * 
                 */
                onEnd(): void;
                /**
                 * 
                 * @param evt             
                 */
                onError(evt: any): void;
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
                 * 
                 */
                onLoad(): void;
                /**
                 * 
                 * @param data             
                 */
                onMetaData(data: any): void;
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
                 * 
                 */
                onPaused(): void;
                /**
                 * 
                 */
                onPlay(): void;
                /**
                 * 
                 * @param time             
                 */
                onPosition(time: any): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
                /**
                 * 
                 */
                onStart(): void;
                /**
                 * 
                 */
                onStop(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/av/widget/VolumeButton.html
             *
             * A volume widget to use with dojox.av.widget.Player
             * Controls and displays the volume of the media. This widget
             * opens a slider on click that is used to adjust the volume.
             * The icon changes according to the volume level.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class VolumeButton extends dijit._Widget implements dijit._TemplatedMixin {
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
                 * Fired on mouseup of the slider handle.
                 * 
                 */
                endDrag(): void;
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
                 * Unhighlights handle onmouseover, or on endDrag.
                 * 
                 */
                handleOut(): void;
                /**
                 * Highlights the slider handle on mouseover, and
                 * stays highlighted during drag.
                 * 
                 */
                handleOver(): void;
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
                 * Initialize the widget.
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
                 * A common method to set the media in all Player widgets.
                 * May do connections and initializations.
                 * 
                 * @param med             
                 */
                setMedia(med: Object): void;
                /**
                 * Fired on mousedown of the slider handle.
                 * 
                 */
                startDrag(): void;
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
                 * Changes the icon on the button according to volume level.
                 * 
                 * @param vol             
                 */
                updateIcon(vol: number): void;
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
                 * Fired on document.onmousedown. Checks if clicked inside
                 * of this widget or not.
                 * 
                 * @param evt             
                 */
                onDocClick(evt: Event): void;
                /**
                 * Fired on mousemove. Updates volume and position of
                 * slider handle.
                 * 
                 * @param evt             
                 */
                onDrag(evt: Event): void;
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
                 * Hides volume slider.
                 * 
                 */
                onHideVolume(): void;
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
                 * Fired on player resize. Zeros dimensions
                 * so that it can be calculated again.
                 * 
                 * @param playerDimensions             
                 */
                onResize(playerDimensions: Object): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
                /**
                 * Shows the volume slider.
                 * 
                 * @param evt             
                 */
                onShowVolume(evt: Event): void;
            }
        }

    }

}

declare module "dojox/av/_Media" {
    var exp: dojox.av._Media
    export=exp;
}
declare module "dojox/av/FLAudio" {
    var exp: dojox.av.FLAudio
    export=exp;
}
declare module "dojox/av/FLVideo" {
    var exp: dojox.av.FLVideo
    export=exp;
}
declare module "dojox/av/widget/Player" {
    var exp: dojox.av.widget.Player
    export=exp;
}
declare module "dojox/av/widget/ProgressSlider" {
    var exp: dojox.av.widget.ProgressSlider
    export=exp;
}
declare module "dojox/av/widget/PlayButton" {
    var exp: dojox.av.widget.PlayButton
    export=exp;
}
declare module "dojox/av/widget/Status" {
    var exp: dojox.av.widget.Status
    export=exp;
}
declare module "dojox/av/widget/VolumeButton" {
    var exp: dojox.av.widget.VolumeButton
    export=exp;
}
