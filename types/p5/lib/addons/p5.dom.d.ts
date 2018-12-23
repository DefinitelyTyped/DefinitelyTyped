// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  class MediaElement {
    /**
     *   Extends p5.Element to handle audio and video. In
     *   addition to the methods of p5.Element, it also
     *   contains methods for controlling media. It is not
     *   called directly, but p5.MediaElements are created
     *   by calling createVideo, createAudio, and
     *   createCapture.
     *
     *   @param elt DOM node that is wrapped
     */
    constructor(
      elt: string
    );

    /**
     *   Play an HTML5 media element.
     *   @chainable
     */
    play(): MediaElement;

    /**
     *   Stops an HTML5 media element (sets current time to
     *   zero).
     *   @chainable
     */
    stop(): MediaElement;

    /**
     *   Pauses an HTML5 media element.
     *   @chainable
     */
    pause(): MediaElement;

    /**
     *   Set 'loop' to true for an HTML5 media element, and
     *   starts playing.
     *   @chainable
     */
    loop(): MediaElement;

    /**
     *   Set 'loop' to false for an HTML5 media element.
     *   Element will stop when it reaches the end.
     *   @chainable
     */
    noLoop(): MediaElement;

    /**
     *   Set HTML5 media element to autoplay or not.
     *   @param autoplay whether the element should
     *   autoplay
     *   @chainable
     */
    autoplay(
      autoplay: boolean
    ): MediaElement;

    /**
     *   Sets volume for this HTML5 media element. If no
     *   argument is given, returns the current volume.
     *   @return current volume
     */
    volume(): number;

    /**
     *   Sets volume for this HTML5 media element. If no
     *   argument is given, returns the current volume.
     *   @param val volume between 0.0 and 1.0
     *   @chainable
     */
    volume(
      val: number
    ): MediaElement;

    /**
     *   If no arguments are given, returns the current
     *   playback speed of the element. The speed parameter
     *   sets the speed where 2.0 will play the element
     *   twice as fast, 0.5 will play at half the speed,
     *   and -1 will play the element in normal speed in
     *   reverse.(Note that not all browsers support
     *   backward playback and even if they do, playback
     *   might not be smooth.)
     *   @return current playback speed of the element
     */
    speed(): number;

    /**
     *   If no arguments are given, returns the current
     *   playback speed of the element. The speed parameter
     *   sets the speed where 2.0 will play the element
     *   twice as fast, 0.5 will play at half the speed,
     *   and -1 will play the element in normal speed in
     *   reverse.(Note that not all browsers support
     *   backward playback and even if they do, playback
     *   might not be smooth.)
     *   @param speed speed multiplier for element playback
     *   @chainable
     */
    speed(
      speed: number
    ): MediaElement;

    /**
     *   If no arguments are given, returns the current
     *   time of the element. If an argument is given the
     *   current time of the element is set to it.
     *   @return current time (in seconds)
     */
    time(): number;

    /**
     *   If no arguments are given, returns the current
     *   time of the element. If an argument is given the
     *   current time of the element is set to it.
     *   @param time time to jump to (in seconds)
     *   @chainable
     */
    time(
      time: number
    ): MediaElement;

    /**
     *   Returns the duration of the HTML5 media element.
     *   @return duration
     */
    duration(): number;

    /**
     *   Schedule an event to be called when the audio or
     *   video element reaches the end. If the element is
     *   looping, this will not be called. The element is
     *   passed in as the argument to the onended callback.
     *   @param callback function to call when the
     *   soundfile has ended. The media element will be
     *   passed in as the argument to the callback.
     *   @chainable
     */
    onended(
      callback: (
        ...args: any[]
      ) => any
    ): MediaElement;

    /**
     *   Send the audio output of this element to a
     *   specified audioNode or p5.sound object. If no
     *   element is provided, connects to p5's master
     *   output. That connection is established when this
     *   method is first called. All connections are
     *   removed by the .disconnect() method. This method
     *   is meant to be used with the p5.sound.js addon
     *   library.
     *   @param audioNode AudioNode from the Web Audio API,
     *   or an object from the p5.sound library
     */
    connect(
      audioNode:
        | AudioNode
        | object
    ): void;

    /**
     *   Disconnect all Web Audio routing, including to
     *   master output. This is useful if you want to
     *   re-route the output through audio effects, for
     *   example.
     */
    disconnect(): void;

    /**
     *   Show the default MediaElement controls, as
     *   determined by the web browser.
     */
    showControls(): void;

    /**
     *   Hide the default mediaElement controls.
     */
    hideControls(): void;

    /**
     *   Schedule events to trigger every time a
     *   MediaElement (audio/video) reaches a playback cue
     *   point. Accepts a callback function, a time (in
     *   seconds) at which to trigger the callback, and an
     *   optional parameter for the callback.
     *
     *   Time will be passed as the first parameter to the
     *   callback function, and param will be the second
     *   parameter.
     *   @param time Time in seconds, relative to this
     *   media element's playback. For example, to trigger
     *   an event every time playback reaches two seconds,
     *   pass in the number 2. This will be passed as the
     *   first parameter to the callback function.
     *   @param callback Name of a function that will be
     *   called at the given time. The callback will
     *   receive time and (optionally) param as its two
     *   parameters.
     *   @param [value] An object to be passed as the
     *   second parameter to the callback function.
     *   @return id ID of this cue, useful for
     *   removeCue(id)
     */
    addCue(
      time: number,
      callback: (
        ...args: any[]
      ) => any,
      value?: object
    ): number;

    /**
     *   Remove a callback based on its ID. The ID is
     *   returned by the addCue method.
     *   @param id ID of the cue, as returned by addCue
     */
    removeCue(
      id: number
    ): void;

    /**
     *   Remove all of the callbacks that had originally
     *   been scheduled via the addCue method.
     *   @param id ID of the cue, as returned by addCue
     */
    clearCues(
      id: number
    ): void;

    /**
     *   Path to the media element source.
     */
    src: any;
  }
  class File {
    /**
     *   Base class for a file Using this for
     *   createFileInput
     *
     *   @param file File that is wrapped
     */
    constructor(
      file: File
    );

    /**
     *   Underlying File object. All normal File methods
     *   can be called on this.
     */
    file: any;

    /**
     *   File type (image, text, etc.)
     */
    type: any;

    /**
     *   File subtype (usually the file extension jpg, png,
     *   xml, etc.)
     */
    subtype: any;

    /**
     *   File name
     */
    name: any;

    /**
     *   File size
     */
    size: any;

    /**
     *   URL string containing image data.
     */
    data: any;
  }
  interface p5InstanceExtensions {
    /**
     *   Searches the page for an element with the given
     *   ID, class, or tag name (using the '#' or '.'
     *   prefixes to specify an ID or class respectively,
     *   and none for a tag) and returns it as a
     *   p5.Element. If a class or tag name is given with
     *   more than 1 element, only the first element will
     *   be returned. The DOM node itself can be accessed
     *   with .elt. Returns null if none found. You can
     *   also specify a container to search within.
     *   @param name id, class, or tag name of element to
     *   search for
     *   @param [container] id, p5.Element, or HTML element
     *   to search within
     *   @return p5.Element containing node found
     */
    select(
      name: string,
      container?:
        | string
        | Element
        | HTMLElement
    ): Element | null;

    /**
     *   Searches the page for elements with the given
     *   class or tag name (using the '.' prefix to specify
     *   a class and no prefix for a tag) and returns them
     *   as p5.Elements in an array. The DOM node itself
     *   can be accessed with .elt. Returns an empty array
     *   if none found. You can also specify a container to
     *   search within.
     *   @param name class or tag name of elements to
     *   search for
     *   @param [container] id, p5.Element, or HTML element
     *   to search within
     *   @return Array of p5.Elements containing nodes
     *   found
     */
    selectAll(
      name: string,
      container?: string
    ): Element[];

    /**
     *   Removes all elements created by p5, except any
     *   canvas / graphics elements created by createCanvas
     *   or createGraphics. Event handlers are removed, and
     *   element is removed from the DOM.
     */
    removeElements(): void;

    /**
     *   Creates a <div></div> element in the DOM with
     *   given inner HTML. Appends to the container node if
     *   one is specified, otherwise appends to body.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    createDiv(
      html?: string
    ): Element;

    /**
     *   Creates a <p></p> element in the DOM with given
     *   inner HTML. Used for paragraph length text.
     *   Appends to the container node if one is specified,
     *   otherwise appends to body.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    createP(
      html?: string
    ): Element;

    /**
     *   Creates a <span></span> element in the DOM with
     *   given inner HTML. Appends to the container node if
     *   one is specified, otherwise appends to body.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    createSpan(
      html?: string
    ): Element;

    /**
     *   Creates an <img> element in the DOM with given src
     *   and alternate text. Appends to the container node
     *   if one is specified, otherwise appends to body.
     *   @param src src path or url for image
     *   @param [alt] alternate text to be used if image
     *   does not load
     *   @param [successCallback] callback to be called
     *   once image data is loaded
     *   @return pointer to p5.Element holding created node
     */
    createImg(
      src: string,
      alt?: string,
      successCallback?: (
        ...args: any[]
      ) => any
    ): Element;

    /**
     *   Creates an <img> element in the DOM with given src
     *   and alternate text. Appends to the container node
     *   if one is specified, otherwise appends to body.
     *   @param src src path or url for image
     *   @param successCallback callback to be called once
     *   image data is loaded
     */
    createImg(
      src: string,
      successCallback: (
        ...args: any[]
      ) => any
    ):
      | object
      | Element;

    /**
     *   Creates an <a></a> element in the DOM for
     *   including a hyperlink. Appends to the container
     *   node if one is specified, otherwise appends to
     *   body.
     *   @param href url of page to link to
     *   @param html inner html of link element to display
     *   @param [target] target where new link should open,
     *   could be _blank, _self, _parent, _top.
     *   @return pointer to p5.Element holding created node
     */
    createA(
      href: string,
      html: string,
      target?: string
    ): Element;

    /**
     *   Creates a slider <input></input> element in the
     *   DOM. Use .size() to set the display length of the
     *   slider. Appends to the container node if one is
     *   specified, otherwise appends to body.
     *   @param min minimum value of the slider
     *   @param max maximum value of the slider
     *   @param [value] default value of the slider
     *   @param [step] step size for each tick of the
     *   slider (if step is set to 0, the slider will move
     *   continuously from the minimum to the maximum
     *   value)
     *   @return pointer to p5.Element holding created node
     */
    createSlider(
      min: number,
      max: number,
      value?: number,
      step?: number
    ): Element;

    /**
     *   Creates a <button></button> element in the DOM.
     *   Use .size() to set the display size of the button.
     *   Use .mousePressed() to specify behavior on press.
     *   Appends to the container node if one is specified,
     *   otherwise appends to body.
     *   @param label label displayed on the button
     *   @param [value] value of the button
     *   @return pointer to p5.Element holding created node
     */
    createButton(
      label: string,
      value?: string
    ): Element;

    /**
     *   Creates a checkbox <input></input> element in the
     *   DOM. Calling .checked() on a checkbox returns if
     *   it is checked or not
     *   @param [label] label displayed after checkbox
     *   @param [value] value of the checkbox; checked is
     *   true, unchecked is false
     *   @return pointer to p5.Element holding created node
     */
    createCheckbox(
      label?: string,
      value?: boolean
    ): Element;

    /**
     *   Creates a dropdown menu <select></select> element
     *   in the DOM. It also helps to assign select-box
     *   methods to p5.Element when selecting existing
     *   select box
     *   @param [multiple] true if dropdown should support
     *   multiple selections
     */
    createSelect(
      multiple?: boolean
    ): Element;

    /**
     *   Creates a dropdown menu <select></select> element
     *   in the DOM. It also helps to assign select-box
     *   methods to p5.Element when selecting existing
     *   select box
     *   @param existing DOM select element
     */
    createSelect(
      existing: object
    ): Element;

    /**
     *   Creates a radio button <input></input> element in
     *   the DOM. The .option() method can be used to set
     *   options for the radio after it is created. The
     *   .value() method will return the currently selected
     *   option.
     *   @param [divId] the id and name of the created div
     *   and input field respectively
     *   @return pointer to p5.Element holding created node
     */
    createRadio(
      divId?: string
    ): Element;

    /**
     *   Creates a colorPicker element in the DOM for color
     *   input. The .value() method will return a hex
     *   string (#rrggbb) of the color. The .color() method
     *   will return a p5.Color object with the current
     *   chosen color.
     *   @param [value] default color of element
     *   @return pointer to p5.Element holding created node
     */
    createColorPicker(
      value?:
        | string
        | Color
    ): Element;

    /**
     *   Creates an <input></input> element in the DOM for
     *   text input. Use .size() to set the display length
     *   of the box. Appends to the container node if one
     *   is specified, otherwise appends to body.
     *   @param [value] default value of the input box
     *   @param [type] type of text, ie text, password etc.
     *   Defaults to text
     *   @return pointer to p5.Element holding created node
     */
    createInput(
      value?: string,
      type?: string
    ): Element;

    /**
     *   Creates an <input></input> element in the DOM of
     *   type 'file'. This allows users to select local
     *   files for use in a sketch.
     *   @param [callback] callback function for when a
     *   file loaded
     *   @param [multiple] optional to allow multiple files
     *   selected
     *   @return pointer to p5.Element holding created DOM
     *   element
     */
    createFileInput(
      callback?: (
        ...args: any[]
      ) => any,
      multiple?: string
    ): Element;

    /**
     *   Creates an HTML5 <video> element in the DOM for
     *   simple playback of audio/video. Shown by default,
     *   can be hidden with .hide() and drawn into canvas
     *   using video(). Appends to the container node if
     *   one is specified, otherwise appends to body. The
     *   first parameter can be either a single string path
     *   to a video file, or an array of string paths to
     *   different formats of the same video. This is
     *   useful for ensuring that your video can play
     *   across different browsers, as each supports
     *   different formats. See this page for further
     *   information about supported formats.
     *   @param src path to a video file, or array of paths
     *   for supporting different browsers
     *   @param [callback] callback function to be called
     *   upon 'canplaythrough' event fire, that is, when
     *   the browser can play the media, and estimates that
     *   enough data has been loaded to play the media up
     *   to its end without having to stop for further
     *   buffering of content
     *   @return pointer to video p5.Element
     */
    createVideo(
      src:
        | string
        | string[],
      callback?: (
        ...args: any[]
      ) => any
    ): MediaElement;

    /**
     *   Creates a hidden HTML5 <audio> element in the DOM
     *   for simple audio playback. Appends to the
     *   container node if one is specified, otherwise
     *   appends to body. The first parameter can be either
     *   a single string path to a audio file, or an array
     *   of string paths to different formats of the same
     *   audio. This is useful for ensuring that your audio
     *   can play across different browsers, as each
     *   supports different formats. See this page for
     *   further information about supported formats.
     *   @param [src] path to an audio file, or array of
     *   paths for supporting different browsers
     *   @param [callback] callback function to be called
     *   upon 'canplaythrough' event fire, that is, when
     *   the browser can play the media, and estimates that
     *   enough data has been loaded to play the media up
     *   to its end without having to stop for further
     *   buffering of content
     *   @return pointer to audio p5.Element
     */
    createAudio(
      src?:
        | string
        | string[],
      callback?: (
        ...args: any[]
      ) => any
    ): MediaElement;

    /**
     *   Creates a new HTML5 <video> element that contains
     *   the audio/video feed from a webcam. The element is
     *   separate from the canvas and is displayed by
     *   default. The element can be hidden using .hide().
     *   The feed can be drawn onto the canvas using
     *   image(). The loadedmetadata property can be used
     *   to detect when the element has fully loaded (see
     *   second example). More specific properties of the
     *   feed can be passing in a Constraints object. See
     *   the  W3C spec for possible properties. Note that
     *   not all of these are supported by all browsers.
     *
     *   Security note: A new browser security
     *   specification requires that getUserMedia, which is
     *   behind createCapture(), only works when you're
     *   running the code locally, or on HTTPS. Learn more
     *   here and here.
     *   @param type type of capture, either VIDEO or AUDIO
     *   if none specified, default both, or a Constraints
     *   object
     *   @param [callback] function to be called once
     *   stream has loaded
     *   @return capture video p5.Element
     */
    createCapture(
      type:
        | string
        | TYPE
        | object,
      callback?: (
        ...args: any[]
      ) => any
    ): Element;

    /**
     *   Creates element with given tag in the DOM with
     *   given content. Appends to the container node if
     *   one is specified, otherwise appends to body.
     *   @param tag tag for the new element
     *   @param [content] html content to be inserted into
     *   the element
     *   @return pointer to p5.Element holding created node
     */
    createElement(
      tag: string,
      content?: string
    ): Element;
    readonly VIDEO: VIDEO;
    readonly AUDIO: AUDIO;
  }
  interface Element {
    /**
     *   Adds specified class to the element.
     *   @param class name of class to add
     *   @chainable
     */
    addClass(
      theClass: string
    ): Element;

    /**
     *   Removes specified class from the element.
     *   @param class name of class to remove
     *   @chainable
     */
    removeClass(
      theClass: string
    ): Element;

    /**
     *   Attaches the element as a child to the parent
     *   specified. Accepts either a string ID, DOM node,
     *   or p5.Element. If no argument is specified, an
     *   array of children DOM nodes is returned.
     *   @return an array of child nodes
     */
    child(): Node[];

    /**
     *   Attaches the element as a child to the parent
     *   specified. Accepts either a string ID, DOM node,
     *   or p5.Element. If no argument is specified, an
     *   array of children DOM nodes is returned.
     *   @param [child] the ID, DOM node, or p5.Element to
     *   add to the current element
     *   @chainable
     */
    child(
      child?:
        | string
        | Element
    ): Element;

    /**
     *   Centers a p5 Element either vertically,
     *   horizontally, or both, relative to its parent or
     *   according to the body if the Element has no
     *   parent. If no argument is passed the Element is
     *   aligned both vertically and horizontally.
     *   @param [align] passing 'vertical', 'horizontal'
     *   aligns element accordingly
     *   @chainable
     */
    center(
      align?: string
    ): Element;

    /**
     *   If an argument is given, sets the inner HTML of
     *   the element, replacing any existing html. If true
     *   is included as a second argument, html is appended
     *   instead of replacing existing html. If no
     *   arguments are given, returns the inner HTML of the
     *   element.
     *   @return the inner HTML of the element
     */
    html(): string;

    /**
     *   If an argument is given, sets the inner HTML of
     *   the element, replacing any existing html. If true
     *   is included as a second argument, html is appended
     *   instead of replacing existing html. If no
     *   arguments are given, returns the inner HTML of the
     *   element.
     *   @param [html] the HTML to be placed inside the
     *   element
     *   @param [append] whether to append HTML to existing
     *   @chainable
     */
    html(
      html?: string,
      append?: boolean
    ): Element;

    /**
     *   Sets the position of the element relative to (0,
     *   0) of the window. Essentially, sets
     *   position:absolute and left and top properties of
     *   style. If no arguments given returns the x and y
     *   position of the element in an object.
     *   @return the x and y position of the element in an
     *   object
     */
    position(): object;

    /**
     *   Sets the position of the element relative to (0,
     *   0) of the window. Essentially, sets
     *   position:absolute and left and top properties of
     *   style. If no arguments given returns the x and y
     *   position of the element in an object.
     *   @param [x] x-position relative to upper left of
     *   window
     *   @param [y] y-position relative to upper left of
     *   window
     *   @chainable
     */
    position(
      x?: number,
      y?: number
    ): Element;

    /**
     *   Sets the given style (css) property (1st arg) of
     *   the element with the given value (2nd arg). If a
     *   single argument is given, .style() returns the
     *   value of the given property; however, if the
     *   single argument is given in css syntax
     *   ('text-align:center'), .style() sets the css
     *   appropriatly. .style() also handles 2d and 3d css
     *   transforms. If the 1st arg is 'rotate',
     *   'translate', or 'position', the following
     *   arguments accept Numbers as values. ('translate',
     *   10, 100, 50);
     *   @param property property to be set
     *   @return value of property
     */
    style(
      property: string
    ): string;

    /**
     *   Sets the given style (css) property (1st arg) of
     *   the element with the given value (2nd arg). If a
     *   single argument is given, .style() returns the
     *   value of the given property; however, if the
     *   single argument is given in css syntax
     *   ('text-align:center'), .style() sets the css
     *   appropriatly. .style() also handles 2d and 3d css
     *   transforms. If the 1st arg is 'rotate',
     *   'translate', or 'position', the following
     *   arguments accept Numbers as values. ('translate',
     *   10, 100, 50);
     *   @param property property to be set
     *   @param value value to assign to property (only
     *   String|Number for rotate/translate)
     *   @param [value2] position can take a 2nd value
     *   @param [value3] translate can take a 2nd & 3rd
     *   value
     *   @chainable
     */
    style(
      property: string,
      value:
        | string
        | number
        | Color,
      value2?:
        | string
        | number
        | Color,
      value3?:
        | string
        | number
        | Color
    ): Element;

    /**
     *   Adds a new attribute or changes the value of an
     *   existing attribute on the specified element. If no
     *   value is specified, returns the value of the given
     *   attribute, or null if attribute is not set.
     *   @return value of attribute
     */
    attribute(): string;

    /**
     *   Adds a new attribute or changes the value of an
     *   existing attribute on the specified element. If no
     *   value is specified, returns the value of the given
     *   attribute, or null if attribute is not set.
     *   @param attr attribute to set
     *   @param value value to assign to attribute
     *   @chainable
     */
    attribute(
      attr: string,
      value: string
    ): Element;

    /**
     *   Removes an attribute on the specified element.
     *   @param attr attribute to remove
     *   @chainable
     */
    removeAttribute(
      attr: string
    ): Element;

    /**
     *   Either returns the value of the element if no
     *   arguments given, or sets the value of the element.
     *   @return value of the element
     */
    value():
      | string
      | number;

    /**
     *   Either returns the value of the element if no
     *   arguments given, or sets the value of the element.
     *   @chainable
     */
    value(
      value:
        | string
        | number
    ): Element;

    /**
     *   Shows the current element. Essentially, setting
     *   display:block for the style.
     *   @chainable
     */
    show(): Element;

    /**
     *   Hides the current element. Essentially, setting
     *   display:none for the style.
     *   @chainable
     */
    hide(): Element;

    /**
     *   Sets the width and height of the element. AUTO can
     *   be used to only adjust one dimension. If no
     *   arguments given returns the width and height of
     *   the element in an object.
     *   @return the width and height of the element in an
     *   object
     */
    size(): object;

    /**
     *   Sets the width and height of the element. AUTO can
     *   be used to only adjust one dimension. If no
     *   arguments given returns the width and height of
     *   the element in an object.
     *   @param w width of the element, either AUTO, or a
     *   number
     *   @param [h] height of the element, either AUTO, or
     *   a number
     *   @chainable
     */
    size(
      w:
        | number
        | SIZE_W,
      h?:
        | number
        | SIZE_H
    ): Element;

    /**
     *   Removes the element and deregisters all listeners.
     */
    remove(): void;
  }
}
