// Type definitions for jquery 3.3
// Project: https://jquery.com
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Boris Yankov <https://github.com/borisyankov>
//                 Christian Hoffmeister <https://github.com/choffmeister>
//                 Steve Fenton <https://github.com/Steve-Fenton>
//                 Diullei Gomes <https://github.com/Diullei>
//                 Tass Iliopoulos <https://github.com/tasoili>
//                 Jason Swearingen <https://github.com/jasons-novaleaf>
//                 Sean Hill <https://github.com/seanski>
//                 Guus Goossens <https://github.com/Guuz>
//                 Kelly Summerlin <https://github.com/ksummerlin>
//                 Basarat Ali Syed <https://github.com/basarat>
//                 Nicholas Wolverson <https://github.com/nwolverson>
//                 Derek Cicerone <https://github.com/derekcicerone>
//                 Andrew Gaspar <https://github.com/AndrewGaspar>
//                 Seikichi Kondo <https://github.com/seikichi>
//                 Benjamin Jackman <https://github.com/benjaminjackman>
//                 Poul Sorensen <https://github.com/s093294>
//                 Josh Strobl <https://github.com/JoshStrobl>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Dick van den Brink <https://github.com/DickvdBrink>
//                 Thomas Schulz <https://github.com/King2500>
//                 Terry Mun <https://github.com/terrymun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

/// <reference types="sizzle" />

declare module 'jquery' {
    export = jQuery;
}

declare module 'jquery/dist/jquery.slim' {
    export = jQuery;
}

declare const jQuery: JQueryStatic;
declare const $: JQueryStatic;

// Used by JQuery.Event
type _Event = Event;

interface JQueryStatic {
    /**
     * @see \`{@link https://api.jquery.com/jquery.ajax/#jQuery-ajax1 }\`
     * @deprecated ​ Deprecated. Use \`{@link ajaxSetup }\`.
     */
    ajaxSettings: JQuery.AjaxSettings;
    Callbacks: JQuery.CallbacksStatic;
    /**
     * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize
     * CSS property naming, or create custom properties.
     *
     * @see \`{@link https://api.jquery.com/jQuery.cssHooks/ }\`
     * @since 1.4.3
     */
    // Set to HTMLElement to minimize breaks but should probably be Element.
    cssHooks: JQuery.PlainObject<JQuery.CSSHook<HTMLElement>>;
    /**
     * An object containing all CSS properties that may be used without a unit. The .css() method uses this
     * object to see if it may append px to unitless values.
     *
     * @see \`{@link https://api.jquery.com/jQuery.cssNumber/ }\`
     * @since 1.4.3
     */
    cssNumber: JQuery.PlainObject<boolean>;
    Deferred: JQuery.DeferredStatic;
    easing: JQuery.Easings;
    Event: JQuery.EventStatic;
    /**
     * @see \`{@link https://learn.jquery.com/events/event-extensions/ }\`
     */
    event: JQuery.EventExtensions;
    expr: JQuery.Selectors;
    // Set to HTMLElement to minimize breaks but should probably be Element.
    readonly fn: JQuery;
    fx: JQuery.Effects;
    /**
     * A Promise-like object (or "thenable") that resolves when the document is ready.
     *
     * @see \`{@link https://api.jquery.com/jQuery.ready/ }\`
     * @since 1.8
     * @example ​ ````Listen for document ready using jQuery.when.
```javascript
$.when( $.ready ).then(function() {
  // Document is ready.
});
```
     * @example ​ ````Typical usage involving another promise, using jQuery.when.
```javascript
$.when(
  $.getJSON( "ajax/test.json" ),
  $.ready
).done(function( data ) {
  // Document is ready.
  // Value of test.json is passed as `data`.
});
```
     */
    ready: JQuery.Thenable<JQueryStatic>;
    /**
     * A collection of properties that represent the presence of different browser features or bugs.
     * Intended for jQuery's internal use; specific properties may be removed when they are no longer
     * needed internally to improve page startup performance. For your own project's feature-detection
     * needs, we strongly recommend the use of an external library such as Modernizr instead of dependency
     * on properties in jQuery.support.
     *
     * @see \`{@link https://api.jquery.com/jQuery.support/ }\`
     * @since 1.3
     * @deprecated ​ Deprecated since 1.9. See \`{@link https://api.jquery.com/jQuery.support/ }\`.
     */
    support: JQuery.PlainObject;
    // Set to HTMLElement to minimize breaks but should probably be Element.
    valHooks: JQuery.PlainObject<JQuery.ValHook<HTMLElement>>;
    // HACK: This is the factory function returned when importing jQuery without a DOM. Declaring it separately breaks using the type parameter on JQueryStatic.
    // HACK: The discriminator parameter handles the edge case of passing a Window object to JQueryStatic. It doesn't actually exist on the factory function.
    (window: Window, discriminator: boolean): JQueryStatic;
    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html _&#x40;param_ `html`
     * <br>
     * * `html (ownerDocument)` — A string of HTML to create on the fly. Note that this parses HTML, not XML. <br>
     * * `html (attributes)` — A string defining a single, standalone, HTML element (e.g. &lt;div/&gt; or &lt;div&gt;&lt;/div&gt;).
     * @param ownerDocument_attributes _&#x40;param_ `ownerDocument_attributes`
     * <br>
     * * `ownerDocument` — A document in which the new elements will be created. <br>
     * * `attributes` — An object of attributes, events, and methods to call on the newly-created element.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Create a div element (and all of its contents) dynamically and append it to the body element. Internally, an element is created and its innerHTML property set to the given markup.
```javascript
$( "<div><p>Hello</p></div>" ).appendTo( "body" )
```
     * @example ​ ````Create some DOM elements.
```javascript
$( "<div/>", {
  "class": "test",
  text: "Click me!",
  click: function() {
    $( this ).toggleClass( "test" );
  }
})
  .appendTo( "body" );
```
     */
    // tslint:disable-next-line:no-unnecessary-generics
    <TElement extends HTMLElement = HTMLElement>(html: JQuery.htmlString, ownerDocument_attributes?: Document | JQuery.PlainObject): JQuery<TElement>;
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     * @example ​ ````Find all p elements that are children of a div element and apply a border to them.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>one</p>
<div><p>two</p></div>
<p>three</p>
​
<script>
$( "div > p" ).css( "border", "1px solid gray" );
</script>
</body>
</html>
```
     * @example ​ ````Find all inputs of type radio within the first form in the document.
```javascript
$( "input:radio", document.forms[ 0 ] );
```
     * @example ​ ````Find all div elements within an XML document from an Ajax response.
```javascript
$( "div", xml.responseXML );
```
​
     */
    // tslint:disable-next-line:no-unnecessary-generics
    <TElement extends Element = HTMLElement>(selector: JQuery.Selector, context?: Element | Document | JQuery): JQuery<TElement>;
    /**
     * Return a collection of matched elements either found in the DOM based on passed argument(s) or created
     * by passing an HTML string.
     *
     * @param element A DOM element to wrap in a jQuery object.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     * @example ​ ````Set the background color of the page to black.
```javascript
$( document.body ).css( "background", "black" );
```
     */
    // Using a unified signature is not possible due to a TypeScript 2.4 bug (DefinitelyTyped#27810)
    // tslint:disable-next-line:unified-signatures
    <T extends Element>(element: T): JQuery<T>;
    /**
     * Return a collection of matched elements either found in the DOM based on passed argument(s) or created
     * by passing an HTML string.
     *
     * @param elementArray An array containing a set of DOM elements to wrap in a jQuery object.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     * @example ​ ````Hide all the input elements within a form.
```javascript
$( myForm.elements ).hide();
```
     */
    // Using a unified signature is not possible due to a TypeScript 2.4 bug (DefinitelyTyped#27810)
    // tslint:disable-next-line:unified-signatures
    <T extends Element>(elementArray: T[]): JQuery<T>;
    /**
     * Return a collection of matched elements either found in the DOM based on passed argument(s) or created
     * by passing an HTML string.
     *
     * @param selection An existing jQuery object to clone.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     */
    <T>(selection: JQuery<T>): JQuery<T>;
    /**
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param callback The function to execute when the DOM is ready.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     * @example ​ ````Execute the function when the DOM is ready to be used.
```javascript
$(function() {
  // Document is ready
});
```
     * @example ​ ````Use both the shortcut for $(document).ready() and the argument to write failsafe jQuery code using the $ alias, without relying on the global alias.
```javascript
jQuery(function( $ ) {
  // Your code using failsafe $ alias here...
});
```
     */
    // tslint:disable-next-line:no-unnecessary-generics unified-signatures
    <TElement = HTMLElement>(callback: ((this: Document, $: JQueryStatic) => void)): JQuery<TElement>;
    /**
     * Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
     *
     * @param object A plain object to wrap in a jQuery object.
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.0
     */
    <T extends JQuery.PlainObject>(object: T): JQuery<T>;
    /**
     * Returns an empty jQuery set.
     *
     * @see \`{@link https://api.jquery.com/jQuery/ }\`
     * @since 1.4
     */
    // tslint:disable-next-line:no-unnecessary-generics
    <TElement = HTMLElement>(): JQuery<TElement>;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
     * @see \`{@link https://api.jquery.com/jQuery.ajax/ }\`
     * @since 1.5
     */
    ajax(url: string, settings?: JQuery.AjaxSettings): JQuery.jqXHR;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup().
     * @see \`{@link https://api.jquery.com/jQuery.ajax/ }\`
     * @since 1.0
     * @example ​ ````Save some data to the server and notify the user once it&#39;s complete.
```javascript
$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
```
     * @example ​ ````Retrieve the latest version of an HTML page.
```javascript
$.ajax({
  url: "test.html",
  cache: false
})
  .done(function( html ) {
    $( "#results" ).append( html );
  });
```
     * @example ​ ````Send an xml document as data to the server. By setting the processData
    option to false, the automatic conversion of data to strings is prevented.
```javascript
var xmlDocument = [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
​
xmlRequest.done( handleResponse );
```
     * @example ​ ````Send an id as data to the server, save some data to the server, and notify the user once it&#39;s complete. If the request fails, alert the user.
```javascript
var menuId = $( "ul.nav" ).first().attr( "id" );
var request = $.ajax({
  url: "script.php",
  method: "POST",
  data: { id : menuId },
  dataType: "html"
});
​
request.done(function( msg ) {
  $( "#log" ).html( msg );
});
​
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
```
     * @example ​ ````Load and execute a JavaScript file.
```javascript
$.ajax({
  method: "GET",
  url: "test.js",
  dataType: "script"
});
```
     */
    ajax(settings?: JQuery.AjaxSettings): JQuery.jqXHR;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they
     * are processed by $.ajax().
     *
     * @param dataTypes An optional string containing one or more space-separated dataTypes
     * @param handler A handler to set default values for future Ajax requests.
     * @see \`{@link https://api.jquery.com/jQuery.ajaxPrefilter/ }\`
     * @since 1.5
     */
    ajaxPrefilter(dataTypes: string,
                  handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => string | void): void;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they
     * are processed by $.ajax().
     *
     * @param handler A handler to set default values for future Ajax requests.
     * @see \`{@link https://api.jquery.com/jQuery.ajaxPrefilter/ }\`
     * @since 1.5
     */
    ajaxPrefilter(handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => string | void): void;
    /**
     * Set default values for future Ajax requests. Its use is not recommended.
     *
     * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
     * @see \`{@link https://api.jquery.com/jQuery.ajaxSetup/ }\`
     * @since 1.1
     * @example ​ ````Sets the defaults for Ajax requests to the url &quot;/xmlhttp/&quot;, disables global handlers and uses POST instead of GET. The following Ajax requests then sends some data without having to set anything else.
```javascript
$.ajaxSetup({
  url: "/xmlhttp/",
  global: false,
  type: "POST"
});
$.ajax({ data: myData });
```
     */
    ajaxSetup(options: JQuery.AjaxSettings): JQuery.AjaxSettings;
    /**
     * Creates an object that handles the actual transmission of Ajax data.
     *
     * @param dataType A string identifying the data type to use
     * @param handler A handler to return the new transport object to use with the data type provided in the first argument.
     * @see \`{@link https://api.jquery.com/jQuery.ajaxTransport/ }\`
     * @since 1.5
     */
    ajaxTransport(dataType: string,
                  handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => JQuery.Transport | void): void;
    /**
     * @deprecated ​ Deprecated since 3.3. Internal. See \`{@link https://github.com/jquery/jquery/issues/3384 }\`.
     */
    camelCase(value: string): string;
    cleanData(elems: ArrayLike<Element | Document | Window | JQuery.PlainObject>): void;
    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     *
     * @param container The DOM element that may contain the other element.
     * @param contained The DOM element that may be contained by (a descendant of) the other element.
     * @see \`{@link https://api.jquery.com/jQuery.contains/ }\`
     * @since 1.4
     * @example ​ ````Check if an element is a descendant of another.
```javascript
$.contains( document.documentElement, document.body ); // true
$.contains( document.body, document.documentElement ); // false
```
     */
    contains(container: Element, contained: Element): boolean;
    css(elem: Element, name: string): any;
    /**
     * Store arbitrary data associated with the specified element. Returns the value that was set.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @param value The new data value; this can be any Javascript type except `undefined`.
     * @see \`{@link https://api.jquery.com/jQuery.data/ }\`
     * @since 1.2.3
     * @example ​ ````Get the data named &quot;blah&quot; stored at for an element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.data demo</title>
  <style>
  div {
    margin: 5px;
    background: yellow;
  }
  button {
    margin: 5px;
    font-size: 14px;
  }
  p {
    margin: 5px;
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>A div</div>
<button>Get "blah" from the div</button>
<button>Set "blah" to "hello"</button>
<button>Set "blah" to 86</button>
<button>Remove "blah" from the div</button>
<p>The "blah" value of this div is <span>?</span></p>
​
<script>
$( "button" ).click( function() {
  var value,
    div = $( "div" )[ 0 ];
  switch ( $( "button" ).index( this ) ) {
  case 0 :
    value = jQuery.data( div, "blah" );
    break;
  case 1 :
    jQuery.data( div, "blah", "hello" );
    value = "Stored!";
    break;
  case 2 :
    jQuery.data( div, "blah", 86 );
    value = "Stored!";
    break;
  case 3 :
    jQuery.removeData( div, "blah" );
    value = "Removed!";
    break;
  }
  $( "span" ).text( "" + value );
});
</script>
​
</body>
</html>
```
     */
    data<T extends string | number | boolean | symbol | object | null>(element: Element | Document | Window | JQuery.PlainObject, key: string, value: T): T;
    /**
     * Returns value at named data store for the element, as set by `jQuery.data(element, name, value)`, or
     * the full data store for the element.
     *
     * @param element The DOM element to query for the data.
     * @param key Name of the data stored.
     * @param value `undefined` is not recognized as a data value. Calls such as `jQuery.data( el, "name", undefined )`
     *              will return the corresponding data for "name", and is therefore the same as `jQuery.data( el, "name" )`
     * @see \`{@link https://api.jquery.com/jQuery.data/ }\`
     * @since 1.2.3
     */
    // `unified-signatures` is disabled so that behavior when passing `undefined` to `value` can be documented. Unifying the signatures
    // results in potential confusion for users from an unexpected parameter.
    // tslint:disable-next-line:unified-signatures
    data(element: Element | Document | Window | JQuery.PlainObject, key: string, value: undefined): any;
    /**
     * Returns value at named data store for the element, as set by `jQuery.data(element, name, value)`, or
     * the full data store for the element.
     *
     * @param element The DOM element to query for the data.
     * @param key Name of the data stored.
     * @see \`{@link https://api.jquery.com/jQuery.data/ }\`
     * @since 1.2.3
     * @since 1.4
     * @example ​ ````Store then retrieve a value from the div element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.data demo</title>
  <style>
  div {
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  The values stored were
  <span></span>
  and
  <span></span>
</div>
​
<script>
var div = $( "div" )[ 0 ];
jQuery.data( div, "test", {
  first: 16,
  last: "pizza!"
});
$( "span:first" ).text( jQuery.data( div, "test" ).first );
$( "span:last" ).text( jQuery.data( div, "test" ).last );
</script>
​
</body>
</html>
```
     */
    data(element: Element | Document | Window | JQuery.PlainObject, key?: string): any;
    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param element A DOM element from which to remove and execute a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see \`{@link https://api.jquery.com/jQuery.dequeue/ }\`
     * @since 1.3
     * @example ​ ````Use jQuery.dequeue() to end a custom queue function which allows the queue to keep going.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.dequeue demo</title>
  <style>
  div {
    margin: 3px;
    width: 50px;
    position: absolute;
    height: 50px;
    left: 10px;
    top: 30px;
    background-color: yellow;
  }
  div.red {
    background-color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Start</button>
<div></div>
​
<script>
$( "button" ).click(function() {
  $( "div" )
    .animate({ left: '+=200px' }, 2000 )
    .animate({ top: '0px' }, 600 )
    .queue(function() {
      $( this ).toggleClass( "red" );
      $.dequeue( this );
    })
    .animate({ left:'10px', top:'30px' }, 700 );
});
</script>
​
</body>
</html>
```
     */
    dequeue(element: Element, queueName?: string): void;
    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
     * Arrays and array-like objects with a length property (such as a function's arguments object) are
     * iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param array The array to iterate over.
     * @param callback The function that will be executed on every object.
     * @see \`{@link https://api.jquery.com/jQuery.each/ }\`
     * @since 1.0
     * @example ​ ````Iterates through the array displaying each number as both a word and numeral
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.each demo</title>
  <style>
  div {
    color: blue;
  }
  div#five {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
​
<script>
var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
​
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
​
  // Will stop running after "three"
  return ( val !== "three" );
});
​
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Iterates over items in an array, accessing both the current item and its index.
```javascript
$.each( [ "a", "b", "c" ], function( i, l ){
  alert( "Index #" + i + ": " + l );
});
```
     */
    each<T>(array: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => false | any): ArrayLike<T>;
    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
     * Arrays and array-like objects with a length property (such as a function's arguments object) are
     * iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param obj The object to iterate over.
     * @param callback The function that will be executed on every object.
     * @see \`{@link https://api.jquery.com/jQuery.each/ }\`
     * @since 1.0
     * @example ​ ````Iterates through the array displaying each number as both a word and numeral
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.each demo</title>
  <style>
  div {
    color: blue;
  }
  div#five {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
​
<script>
var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
​
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
​
  // Will stop running after "three"
  return ( val !== "three" );
});
​
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Iterates over the properties in an object, accessing both the current item and its key.
```javascript
$.each({ name: "John", lang: "JS" }, function( k, v ) {
  alert( "Key: " + k + ", Value: " + v );
});
```
     */
    each<T, K extends keyof T>(obj: T, callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => false | any): T;
    /**
     * Takes a string and throws an exception containing it.
     *
     * @param message The message to send out.
     * @see \`{@link https://api.jquery.com/jQuery.error/ }\`
     * @since 1.4.1
     * @example ​ ````Override jQuery.error for display in Firebug.
```javascript
jQuery.error = console.error;
```
     */
    error(message: string): any;
    /**
     * Escapes any character that has a special meaning in a CSS selector.
     *
     * @param selector A string containing a selector expression to escape.
     * @see \`{@link https://api.jquery.com/jQuery.escapeSelector/ }\`
     * @since 3.0
     * @example ​ ````Escape an ID containing a hash.
```javascript
$.escapeSelector( "#target" ); // "\#target"
```
     * @example ​ ````Select all the elements having a class name of .box inside a div.
```javascript
$( "div" ).find( "." + $.escapeSelector( ".box" ) );
```
     */
    escapeSelector(selector: JQuery.Selector): JQuery.Selector;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @param object5 An object containing additional properties to merge in.
     * @param object6 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X, Y, Z>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X, object5: Y, object6: Z): T & U & V & W & X & Y & Z;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @param object5 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X, Y>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X, object5: Y): T & U & V & W & X & Y;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W>(deep: true, target: T, object1: U, object2: V, object3: W): T & U & V & W;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V>(deep: true, target: T, object1: U, object2: V): T & U & V;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend<T, U>(deep: true, target: T, object1: U): T & U;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.1.4
     * @example ​ ````Merge two objects recursively, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     */
    extend(deep: true, target: any, object1: any, ...objectN: any[]): any;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @param object5 An object containing additional properties to merge in.
     * @param object6 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X, Y, Z>(target: T, object1: U, object2: V, object3: W, object4: X, object5: Y, object6: Z): T & U & V & W & X & Y & Z;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @param object5 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X, Y>(target: T, object1: U, object2: V, object3: W, object4: X, object5: Y): T & U & V & W & X & Y;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @param object4 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W, X>(target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @param object3 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V, W>(target: T, object1: U, object2: V, object3: W): T & U & V & W;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param object2 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U, V>(target: T, object1: U, object2: V): T & U & V;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend<T, U>(target: T, object1: U): T & U;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     * @see \`{@link https://api.jquery.com/jQuery.extend/ }\`
     * @since 1.0
     * @example ​ ````Merge two objects, modifying the first.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
​
// Merge object2 into object1
$.extend( object1, object2 );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
​
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
​
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
​
</body>
</html>
```
     */
    extend(target: any, object1: any, ...objectN: any[]): any;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if `dataType` is provided,
     *                but you can use `null` or \`{@link noop jQuery.noop}\` as a placeholder.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see \`{@link https://api.jquery.com/jQuery.get/ }\`
     * @since 1.0
     */
    get(url: string,
        data: JQuery.PlainObject | string,
        success: JQuery.jqXHR.DoneCallback | null,
        dataType?: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if `dataType` is provided,
     *                but you can use `null` or \`{@link noop jQuery.noop}\` as a placeholder.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see \`{@link https://api.jquery.com/jQuery.get/ }\`
     * @since 1.0
     * @example ​ ````Get the test.php page contents, which has been returned in json format (&lt;?php echo json_encode( array( &quot;name&quot;=&gt;&quot;John&quot;,&quot;time&quot;=&gt;&quot;2pm&quot; ) ); ?&gt;), and add it to the page.
```javascript
$.get( "test.php", function( data ) {
  $( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
}, "json" );
```
     */
    get(url: string,
        success: JQuery.jqXHR.DoneCallback | null,
        dataType: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data _&#x40;param_ `success_data`
     * <br>
     * * `success` — A callback function that is executed if the request succeeds. Required if `dataType` is provided,
     *               but you can use `null` or \`{@link noop jQuery.noop}\` as a placeholder. <br>
     * * `data` — A plain object or string that is sent to the server with the request.
     * @see \`{@link https://api.jquery.com/jQuery.get/ }\`
     * @since 1.0
     * @example ​ ````Request the test.php page and send some additional data along (while still ignoring the return results).
```javascript
$.get( "test.php", { name: "John", time: "2pm" } );
```
     * @example ​ ````Pass arrays of data to the server (while still ignoring the return results).
```javascript
$.get( "test.php", { "choices[]": ["Jon", "Susan"] } );
```
     * @example ​ ````Alert the results from requesting test.php (HTML or XML, depending on what was returned).
```javascript
$.get( "test.php", function( data ) {
  alert( "Data Loaded: " + data );
});
```
     * @example ​ ````Alert the results from requesting test.cgi with an additional payload of data (HTML or XML, depending on what was returned).
```javascript
$.get( "test.cgi", { name: "John", time: "2pm" } )
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
```
     */
    get(url: string,
        success_data: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url_settings _&#x40;param_ `url_settings`
     * <br>
     * * `url` — A string containing the URL to which the request is sent. <br>
     * * `settings` — A set of key/value pairs that configure the Ajax request. All properties except for `url` are
     *                optional. A default can be set for any option with \`{@link ajaxSetup $.ajaxSetup()}\`. See \`{@link https://api.jquery.com/jquery.ajax/#jQuery-ajax-settings jQuery.ajax( settings )}\`
     *                for a complete list of all settings. The type option will automatically be set to `GET`.
     * @see \`{@link https://api.jquery.com/jQuery.get/ }\`
     * @since 1.0
     * @since 1.12
     * @since 2.2
     * @example ​ ````Request the test.php page, but ignore the return results.
```javascript
$.get( "test.php" );
```
     */
    get(url_settings?: string | JQuery.UrlAjaxSettings): JQuery.jqXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @see \`{@link https://api.jquery.com/jQuery.getJSON/ }\`
     * @since 1.0
     */
    getJSON(url: string,
            data: JQuery.PlainObject | string,
            success: JQuery.jqXHR.DoneCallback): JQuery.jqXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data _&#x40;param_ `url_settings`
     * <br>
     * * `success` — A callback function that is executed if the request succeeds. <br>
     * * `data` — A plain object or string that is sent to the server with the request.
     * @see \`{@link https://api.jquery.com/jQuery.getJSON/ }\`
     * @since 1.0
     * @example ​ ````Loads the four most recent pictures of Mount Rainier from the Flickr JSONP API.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.getJSON demo</title>
  <style>
  img {
    height: 100px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="images"></div>
​
<script>
(function() {
  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
})();
</script>
​
</body>
</html>
```
     * @example ​ ````Load the JSON data from test.js and access a name from the returned JSON data.
```javascript
$.getJSON( "test.js", function( json ) {
  console.log( "JSON Data: " + json.users[ 3 ].name );
 });
 ```
     * @example ​ ````Load the JSON data from test.js, passing along additional data, and access a name from the returned JSON data.
      If an error occurs, log an error message instead.
```javascript
$.getJSON( "test.js", { name: "John", time: "2pm" } )
  .done(function( json ) {
    console.log( "JSON Data: " + json.users[ 3 ].name );
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
```
     */
    getJSON(url: string,
            success_data?: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @see \`{@link https://api.jquery.com/jQuery.getScript/ }\`
     * @since 1.0
     * @example ​ ````Define a $.cachedScript() method that allows fetching a cached script:
```javascript
jQuery.cachedScript = function( url, options ) {
​
  // Allow user to set any option except for dataType, cache, and url
  options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
​
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax( options );
};
​
// Usage
$.cachedScript( "ajax/test.js" ).done(function( script, textStatus ) {
  console.log( textStatus );
});
```
     * @example ​ ````Load the official jQuery Color Animation plugin dynamically and bind some color animations to occur once the new functionality is loaded.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.getScript demo</title>
  <style>
  .block {
     background-color: blue;
     width: 150px;
     height: 70px;
     margin: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="go">&raquo; Run</button>
<div class="block"></div>
​
<script>
var url = "https://code.jquery.com/color/jquery.color.js";
$.getScript( url, function() {
  $( "#go" ).click(function() {
    $( ".block" )
      .animate({
        backgroundColor: "rgb(255, 180, 180)"
      }, 1000 )
      .delay( 500 )
      .animate({
        backgroundColor: "olive"
      }, 1000 )
      .delay( 500 )
      .animate({
        backgroundColor: "#00f"
      }, 1000 );
  });
});
</script>
​
</body>
</html>
```
     */
    getScript(url: string,
              success?: JQuery.jqXHR.DoneCallback<string | undefined>): JQuery.jqXHR<string | undefined>;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @see \`{@link https://api.jquery.com/jQuery.getScript/ }\`
     * @since 1.12
     * @since 2.2
     */
    getScript(options: JQuery.UrlAjaxSettings): JQuery.jqXHR<string | undefined>;
    /**
     * Execute some JavaScript code globally.
     *
     * @param code The JavaScript code to execute.
     * @see \`{@link https://api.jquery.com/jQuery.globalEval/ }\`
     * @since 1.0.4
     * @example ​ ````Execute a script in the global context.
```javascript
function test() {
  jQuery.globalEval( "var newVar = true;" )
}
test();
// newVar === true
```
     */
    globalEval(code: string): void;
    /**
     * Finds the elements of an array which satisfy a filter function. The original array is not affected.
     *
     * @param array The array-like object to search through.
     * @param fn The function to process each item against. The first argument to the function is the item, and the
     *           second argument is the index. The function should return a Boolean value. this will be the global window object.
     * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements
     *               for which "callback" returns true. If "invert" is true, then the function returns an array
     *               consisting of all elements for which "callback" returns false.
     * @see \`{@link https://api.jquery.com/jQuery.grep/ }\`
     * @since 1.0
     * @example ​ ````Filters the original array of numbers leaving that are not 5 and have an index greater than 4.  Then it removes all 9s.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.grep demo</title>
  <style>
  div {
    color: blue;
  }
  p {
    color: green;
    margin: 0;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<p></p>
<span></span>
​
<script>
var arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
$( "div" ).text( arr.join( ", " ) );
​
arr = jQuery.grep(arr, function( n, i ) {
  return ( n !== 5 && i > 4 );
});
$( "p" ).text( arr.join( ", " ) );
​
arr = jQuery.grep(arr, function( a ) {
  return a !== 9;
});
​
$( "span" ).text( arr.join( ", " ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Filter an array of numbers to include only numbers bigger then zero.
```javascript
$.grep( [ 0, 1, 2 ], function( n, i ) {
  return n > 0;
});
```
     * @example ​ ````Filter an array of numbers to include numbers that are not bigger than zero.
```javascript
$.grep( [ 0, 1, 2 ], function( n, i ) {
    return n > 0;
}, true );
```
     */
    grep<T>(array: ArrayLike<T>,
            fn: (elementOfArray: T, indexInArray: number) => boolean,
            invert?: boolean): T[];
    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param element A DOM element to be checked for data.
     * @see \`{@link https://api.jquery.com/jQuery.hasData/ }\`
     * @since 1.5
     * @example ​ ````Set data on an element and see the results of hasData.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.hasData demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Results: </p>
​
<script>
var $p = jQuery( "p" ), p = $p[ 0 ];
$p.append( jQuery.hasData( p ) + " " ); // false
​
$.data( p, "testing", 123 );
$p.append( jQuery.hasData( p ) + " " ); // true
​
$.removeData( p, "testing" );
$p.append( jQuery.hasData( p ) + " " ); // false
​
$p.on( "click", function() {} );
$p.append( jQuery.hasData( p ) + " " ); // true
​
$p.off( "click" );
$p.append( jQuery.hasData( p ) + " " ); // false
</script>
​
</body>
</html>
```
     */
    hasData(element: Element | Document | Window | JQuery.PlainObject): boolean;
    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param hold Indicates whether the ready hold is being requested or released
     * @see \`{@link https://api.jquery.com/jQuery.holdReady/ }\`
     * @since 1.6
     * @deprecated ​ Deprecated since 3.2. See \`{@link https://github.com/jquery/jquery/issues/3288 }\`.
     *
     * **Cause**: The `jQuery.holdReady()` method has been deprecated due to its detrimental effect on the global performance of the page. This method can prevent all the code on the page from initializing for extended lengths of time.
     *
     * **Solution**: Rewrite the page so that it does not require all jQuery ready handlers to be delayed. This might be accomplished, for example, by late-loading only the code that requires the delay when it is safe to run. Due to the complexity of this method, jQuery Migrate does not attempt to fill the functionality. If the underlying version of jQuery used with jQuery Migrate no longer contains `jQuery.holdReady()` the code will fail shortly after this warning appears.
     * @example ​ ````Delay the ready event until a custom plugin has loaded.
```javascript
$.holdReady( true );
$.getScript( "myplugin.js", function() {
  $.holdReady( false );
});
```
     */
    holdReady(hold: boolean): void;
    /**
     * Modify and filter HTML strings passed through jQuery manipulation methods.
     *
     * @param html The HTML string on which to operate.
     * @see \`{@link https://api.jquery.com/jQuery.htmlPrefilter/ }\`
     * @since 1.12/2.2
     */
    htmlPrefilter(html: JQuery.htmlString): JQuery.htmlString;
    /**
     * Search for a specified value within an array and return its index (or -1 if not found).
     *
     * @param value The value to search for.
     * @param array An array through which to search.
     * @param fromIndex The index of the array at which to begin the search. The default is 0, which will search the whole array.
     * @see \`{@link https://api.jquery.com/jQuery.inArray/ }\`
     * @since 1.2
     * @example ​ ````Report the index of some elements in the array.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.inArray demo</title>
  <style>
  div {
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>"John" found at <span></span></div>
<div>4 found at <span></span></div>
<div>"Karl" not found, so <span></span></div>
<div>"Pete" is in the array, but not at or after index 2, so <span></span></div>
​
<script>
var arr = [ 4, "Pete", 8, "John" ];
var $spans = $( "span" );
$spans.eq( 0 ).text( jQuery.inArray( "John", arr ) );
$spans.eq( 1 ).text( jQuery.inArray( 4, arr ) );
$spans.eq( 2 ).text( jQuery.inArray( "Karl", arr ) );
$spans.eq( 3 ).text( jQuery.inArray( "Pete", arr, 2 ) );
</script>
​
</body>
</html>
```
     */
    inArray<T>(value: T, array: T[], fromIndex?: number): number;
    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     * @see \`{@link https://api.jquery.com/jQuery.isArray/ }\`
     * @since 1.3
     * @deprecated ​ Deprecated since 3.2. Use \`{@link ArrayConstructor.isArray Array.isArray}\`.
     * @example ​ ````Finds out if the parameter is an array.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.isArray demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Is [] an Array? <b></b>
​
<script>
$( "b" ).append( "" + $.isArray([]) );
</script>
​
</body>
</html>
```
     */
    isArray(obj: any): obj is any[];
    /**
     * Check to see if an object is empty (contains no enumerable properties).
     *
     * @param obj The object that will be checked to see if it's empty.
     * @see \`{@link https://api.jquery.com/jQuery.isEmptyObject/ }\`
     * @since 1.4
     * @example ​ ````Check an object to see if it&#39;s empty.
```javascript
jQuery.isEmptyObject({}); // true
jQuery.isEmptyObject({ foo: "bar" }); // false
```
     */
    isEmptyObject(obj: any): boolean;
    /**
     * Determine if the argument passed is a JavaScript function object.
     *
     * @param obj Object to test whether or not it is a function.
     * @see \`{@link https://api.jquery.com/jQuery.isFunction/ }\`
     * @since 1.2
     * @deprecated ​ Deprecated since 3.3. Use `typeof x === "function"`.
     * @example ​ ````Test a few parameter examples.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.isFunction demo</title>
  <style>
  div {
    color: blue;
    margin: 2px;
    font-size: 14px;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>jQuery.isFunction( objs[ 0 ] ) = <span></span></div>
<div>jQuery.isFunction( objs[ 1 ] ) = <span></span></div>
<div>jQuery.isFunction( objs[ 2 ] ) = <span></span></div>
<div>jQuery.isFunction( objs[ 3 ] ) = <span></span></div>
<div>jQuery.isFunction( objs[ 4 ] ) = <span></span></div>
​
<script>
function stub() {}
var objs = [
  function() {},
  { x:15, y:20 },
  null,
  stub,
  "function"
];
​
jQuery.each( objs, function( i ) {
  var isFunc = jQuery.isFunction( objs[ i ]);
  $( "span" ).eq( i ).text( isFunc );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Finds out if the parameter is a function.
```javascript
$.isFunction(function() {});
```
     */
    // tslint:disable-next-line:ban-types
    isFunction(obj: any): obj is Function;
    /**
     * Determines whether its argument represents a JavaScript number.
     *
     * @param value The value to be tested.
     * @see \`{@link https://api.jquery.com/jQuery.isNumeric/ }\`
     * @since 1.7
     * @deprecated ​ Deprecated since 3.3. Internal. See \`{@link https://github.com/jquery/jquery/issues/2960 }\`.
     * @example ​ ````Sample return values of $.isNumeric with various inputs.
```javascript
// true (numeric)
$.isNumeric( "-10" )
$.isNumeric( "0" )
$.isNumeric( 0xFF )
$.isNumeric( "0xFF" )
$.isNumeric( "8e5" )
$.isNumeric( "3.1415" )
$.isNumeric( +10 )
$.isNumeric( 0144 )
​
// false (non-numeric)
$.isNumeric( "-0x42" )
$.isNumeric( "7.2acdgs" )
$.isNumeric( "" )
$.isNumeric( {} )
$.isNumeric( NaN )
$.isNumeric( null )
$.isNumeric( true )
$.isNumeric( Infinity )
$.isNumeric( undefined )
```
     */
    isNumeric(value: any): boolean;
    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param obj The object that will be checked to see if it's a plain object.
     * @see \`{@link https://api.jquery.com/jQuery.isPlainObject/ }\`
     * @since 1.4
     * @example ​ ````Check an object to see if it&#39;s a plain object.
```javascript
jQuery.isPlainObject({}) // true
jQuery.isPlainObject( "test" ) // false
```
     */
    isPlainObject(obj: any): boolean;
    /**
     * Determine whether the argument is a window.
     *
     * @param obj Object to test whether or not it is a window.
     * @see \`{@link https://api.jquery.com/jQuery.isWindow/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Internal. See \`{@link https://github.com/jquery/jquery/issues/3629 }\`.
     *
     * **Cause**: This method returns `true` if its argument is thought to be a `window` element. It was created for internal use and is not a reliable way of detecting `window` for public needs.
     *
     * **Solution**: Remove any use of `jQuery.isWindow()` from code. If it is truly needed it can be replaced with a check for `obj != null && obj === obj.window` which was the test used inside this method.
     * @example ​ ````Finds out if the parameter is a window.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.isWindow demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Is 'window' a window? <b></b>
​
<script>
$( "b" ).append( "" + $.isWindow( window ) );
</script>
​
</body>
</html>
```
     */
    isWindow(obj: any): obj is Window;
    /**
     * Check to see if a DOM node is within an XML document (or is an XML document).
     *
     * @param node The DOM node that will be checked to see if it's in an XML document.
     * @see \`{@link https://api.jquery.com/jQuery.isXMLDoc/ }\`
     * @since 1.1.4
     * @example ​ ````Check an object to see if it&#39;s in an XML document.
```javascript
jQuery.isXMLDoc( document ) // false
jQuery.isXMLDoc( document.body ) // false
```
     */
    isXMLDoc(node: Node): boolean;
    /**
     * Convert an array-like object into a true JavaScript array.
     *
     * @param obj Any object to turn into a native Array.
     * @see \`{@link https://api.jquery.com/jQuery.makeArray/ }\`
     * @since 1.2
     * @example ​ ````Turn a collection of HTMLElements into an Array of them.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.makeArray demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>First</div>
<div>Second</div>
<div>Third</div>
<div>Fourth</div>
​
<script>
// Returns a NodeList
var elems = document.getElementsByTagName( "div" );
// Convert the NodeList to an Array
var arr = jQuery.makeArray( elems );
// Use an Array method on list of dom elements
arr.reverse();
$( arr ).appendTo( document.body );
</script>
​
</body>
</html>
```
     * @example ​ ````Turn a jQuery object into an array
```javascript
var obj = $( "li" );
var arr = $.makeArray( obj );
```
     */
    makeArray<T>(obj: ArrayLike<T>): T[];
    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param array The Array to translate.
     * @param callback The function to process each item against. The first argument to the function is the array item, the
     *                 second argument is the index in array The function can return any value. A returned array will be
     *                 flattened into the resulting array. Within the function, this refers to the global (window) object.
     * @see \`{@link https://api.jquery.com/jQuery.map/ }\`
     * @since 1.0
     * @example ​ ````Use $.map() to change the values of an array.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.map demo</title>
  <style>
  div {
    color: blue;
  }
  p {
    color: green;
    margin: 0;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<p></p>
<span></span>
​
<script>
var arr = [ "a", "b", "c", "d", "e" ];
$( "div" ).text( arr.join( ", " ) );
​
arr = jQuery.map( arr, function( n, i ) {
  return ( n.toUpperCase() + i );
});
$( "p" ).text( arr.join( ", " ) );
​
arr = jQuery.map( arr, function( a ) {
  return a + a;
});
$( "span" ).text( arr.join( ", " ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Map the original array to a new one and add 4 to each value.
```javascript
$.map( [ 0, 1, 2 ], function( n ) {
  return n + 4;
});
```
     * @example ​ ````Map the original array to a new one, adding 1 to each value if it is bigger then zero and removing it if not.
```javascript
$.map( [ 0, 1, 2 ], function( n ) {
  return n > 0 ? n + 1 : null;
});
```
     * @example ​ ````Map the original array to a new one; each element is added with its original value and the value plus one.
```javascript
$.map( [ 0, 1, 2 ], function( n ) {
    return [ n, n + 1 ];
});
```
     * @example ​ ````Map the original array to a new one; each element is squared.
```javascript
$.map( [ 0, 1, 2, 3 ], function( a ) {
  return a * a;
});
```
     * @example ​ ````Map the original array to a new one, removing numbers less than 50 by returning null and subtracting 45 from the rest.
```javascript
$.map( [ 0, 1, 52, 97 ], function( a ) {
  return (a > 50 ? a - 45 : null);
});
```
     * @example ​ ````Augment the resulting array by returning an array inside the function.
```javascript
var array = [ 0, 1, 52, 97 ];
array = $.map( array, function( a, index ) {
  return [ a - 45, index ];
});
```
     */
    map<T, TReturn>(array: T[], callback: (this: Window, elementOfArray: T, indexInArray: number) => JQuery.TypeOrArray<TReturn> | null | undefined): TReturn[];
    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param obj The Object to translate.
     * @param callback The function to process each item against. The first argument to the function is the value; the
     *                 second argument is the key of the object property. The function can return any value to add to the
     *                 array. A returned array will be flattened into the resulting array. Within the function, this refers
     *                 to the global (window) object.
     * @see \`{@link https://api.jquery.com/jQuery.map/ }\`
     * @since 1.6
     * @example ​ ````Map the original object to a new array and double each value.
```javascript
var dimensions = { width: 10, height: 15, length: 20 };
dimensions = $.map( dimensions, function( value, index ) {
  return value * 2;
});
```
     * @example ​ ````Map an object&#39;s keys to an array.
```javascript
var dimensions = { width: 10, height: 15, length: 20 };
var keys = $.map( dimensions, function( value, key ) {
  return key;
});
```
     */
    map<T, K extends keyof T, TReturn>(obj: T, callback: (this: Window, propertyOfObject: T[K], key: K) => JQuery.TypeOrArray<TReturn> | null | undefined): TReturn[];
    /**
     * Merge the contents of two arrays together into the first array.
     *
     * @param first The first array-like object to merge, the elements of second added.
     * @param second The second array-like object to merge into the first, unaltered.
     * @see \`{@link https://api.jquery.com/jQuery.merge/ }\`
     * @since 1.0
     * @example ​ ````Merges two arrays, altering the first argument.
```javascript
$.merge( [ 0, 1, 2 ], [ 2, 3, 4 ] )
```
     * @example ​ ````Merges two arrays, altering the first argument.
```javascript
$.merge( [ 3, 2, 1 ], [ 4, 3, 2 ] )
```
     * @example ​ ````Merges two arrays, but uses a copy, so the original isn&#39;t altered.
```javascript
var first = [ "a", "b", "c" ];
var second = [ "d", "e", "f" ];
$.merge( $.merge( [], first ), second );
```
     */
    merge<T, U>(first: ArrayLike<T>, second: ArrayLike<U>): Array<T | U>;
    /**
     * Relinquish jQuery's control of the $ variable.
     *
     * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
     * @see \`{@link https://api.jquery.com/jQuery.noConflict/ }\`
     * @since 1.0
     * @example ​ ````Map the original object that was referenced by $ back to $.
```javascript
jQuery.noConflict();
// Do something with jQuery
jQuery( "div p" ).hide();
// Do something with another library's $()
$( "content" ).style.display = "none";
```
     * @example ​ ````Revert the $ alias and then create and execute a function to provide the $ as a jQuery alias inside the function&#39;s scope. Inside the function the original $ object is not available. This works well for most plugins that don&#39;t rely on any other library.
```javascript
jQuery.noConflict();
(function( $ ) {
  $(function() {
    // More code using $ as alias to jQuery
  });
})(jQuery);
​
// Other code using $ as an alias to the other library
```
     * @example ​ ````Create a different alias instead of jQuery to use in the rest of the script.
```javascript
var j = jQuery.noConflict();
​
// Do something with jQuery
j( "div p" ).hide();
​
// Do something with another library's $()
$( "content" ).style.display = "none";
```
     * @example ​ ````Completely move jQuery to a new namespace in another object.
```javascript
var dom = {};
dom.query = jQuery.noConflict( true );
```
     * @example ​ ````Load two versions of jQuery (not recommended). Then, restore jQuery&#39;s globally scoped variables to the first loaded jQuery.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.noConflict demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log">
  <h3>Before $.noConflict(true)</h3>
</div>
<script src="https://code.jquery.com/jquery-1.6.2.js"></script>
​
<script>
var $log = $( "#log" );
​
$log.append( "2nd loaded jQuery version ($): " + $.fn.jquery + "<br>" );
​
// Restore globally scoped jQuery variables to the first version loaded
// (the newer version)
​
jq162 = jQuery.noConflict( true );
​
$log.append( "<h3>After $.noConflict(true)</h3>" );
$log.append( "1st loaded jQuery version ($): " + $.fn.jquery + "<br>" );
$log.append( "2nd loaded jQuery version (jq162): " + jq162.fn.jquery + "<br>" );
</script>
​
</body>
</html>
```
     */
    noConflict(removeAll?: boolean): this;
    /**
     * @deprecated ​ Deprecated since 3.2.
     *
     * **Cause**: This public but never-documented method has been deprecated as of jQuery 3.2.0.
     *
     * **Solution**: Replace calls such as `jQuery.nodeName( elem, "div" )` with a test such as `elem.nodeName.toLowerCase() === "div"`.
     */
    nodeName(elem: Node, name: string): boolean;
    /**
     * An empty function.
     *
     * @see \`{@link https://api.jquery.com/jQuery.noop/ }\`
     * @since 1.4
     */
    noop(): undefined;
    /**
     * Return a number representing the current time.
     *
     * @see \`{@link https://api.jquery.com/jQuery.now/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link DateConstructor.now Date.now}\`.
     */
    now(): number;
    /**
     * Create a serialized representation of an array, a plain object, or a jQuery object suitable for use
     * in a URL query string or Ajax request. In case a jQuery object is passed, it should contain input
     * elements with name/value properties.
     *
     * @param obj An array, a plain object, or a jQuery object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     * @see \`{@link https://api.jquery.com/jQuery.param/ }\`
     * @since 1.2
     * @since 1.4
     * @example ​ ````Serialize a key/value object.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.param demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="results"></div>
​
<script>
var params = { width:1680, height:1050 };
var str = jQuery.param( params );
$( "#results" ).text( str );
</script>
​
</body>
</html>
```
     * @example ​ ````Serialize a few complex objects
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.param demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​​
<script>
// <=1.3.2:
$.param({ a: [ 2, 3, 4 ] }); // "a=2&a=3&a=4"
// >=1.4:
$.param({ a: [ 2, 3, 4 ] }); // "a[]=2&a[]=3&a[]=4"
​
// <=1.3.2:
$.param({ a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] });
// "a=[object+Object]&d=3&d=4&d=[object+Object]"
​
// >=1.4:
$.param({ a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] });
// "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
</script>
​
</body>
</html>
```
     */
    param(obj: any[] | JQuery.PlainObject | JQuery, traditional?: boolean): string;
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context Document element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     * @see \`{@link https://api.jquery.com/jQuery.parseHTML/ }\`
     * @since 1.8
     */
    parseHTML(data: string, context: Document | null | undefined, keepScripts: boolean): JQuery.Node[];
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context_keepScripts _&#x40;param_ `context_keepScripts`
     * <br>
     * * `context` — Document element to serve as the context in which the HTML fragment will be created <br>
     * * `keepScripts` — A Boolean indicating whether to include scripts passed in the HTML string
     * @see \`{@link https://api.jquery.com/jQuery.parseHTML/ }\`
     * @since 1.8
     * @example ​ ````Create an array of DOM nodes using an HTML string and insert it into a div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.parseHTML demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log">
  <h3>Content:</h3>
</div>
​
<script>
var $log = $( "#log" ),
  str = "hello, <b>my name is</b> jQuery.",
  html = $.parseHTML( str ),
  nodeNames = [];
​
// Append the parsed HTML
$log.append( html );
​
// Gather the parsed HTML's node names
$.each( html, function( i, el ) {
  nodeNames[ i ] = "<li>" + el.nodeName + "</li>";
});
​
// Insert the node names
$log.append( "<h3>Node Names:</h3>" );
$( "<ol></ol>" )
  .append( nodeNames.join( "" ) )
  .appendTo( $log );
</script>
​
</body>
</html>
```
     */
    parseHTML(data: string, context_keepScripts?: Document | null | boolean): JQuery.Node[];
    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript value.
     *
     * @param json The JSON string to parse.
     * @see \`{@link https://api.jquery.com/jQuery.parseJSON/ }\`
     * @since 1.4.1
     * @deprecated ​ Deprecated since 3.0. Use \`{@link JSON.parse }\`.
     *
     * **Cause**: The `jQuery.parseJSON` method in recent jQuery is identical to the native `JSON.parse`. As of jQuery 3.0 `jQuery.parseJSON` is deprecated.
     *
     * **Solution**: Replace any use of `jQuery.parseJSON` with `JSON.parse`.
     * @example ​ ````Parse a JSON string.
```javascript
var obj = jQuery.parseJSON( '{ "name": "John" }' );
alert( obj.name === "John" );
```
     */
    parseJSON(json: string): any;
    /**
     * Parses a string into an XML document.
     *
     * @param data a well-formed XML string to be parsed
     * @see \`{@link https://api.jquery.com/jQuery.parseXML/ }\`
     * @since 1.5
     * @example ​ ````Create a jQuery object using an XML string and obtain the value of the title node.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.parseXML demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p id="someElement"></p>
<p id="anotherElement"></p>
​
<script>
var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>",
  xmlDoc = $.parseXML( xml ),
  $xml = $( xmlDoc ),
  $title = $xml.find( "title" );
​
// Append "RSS Title" to #someElement
$( "#someElement" ).append( $title.text() );
​
// Change the title to "XML Title"
$title.text( "XML Title" );
​
// Append "XML Title" to #anotherElement
$( "#anotherElement" ).append( $title.text() );
</script>
​
</body>
</html>
```
     */
    parseXML(data: string): XMLDocument;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see \`{@link https://api.jquery.com/jQuery.post/ }\`
     * @since 1.0
     * @example ​ ````Post to the test.php page and get content which has been returned in json format (&lt;?php echo json_encode(array(&quot;name&quot;=&gt;&quot;John&quot;,&quot;time&quot;=&gt;&quot;2pm&quot;)); ?&gt;).
```javascript
$.post( "test.php", { func: "getNameAndTime" }, function( data ) {
  console.log( data.name ); // John
  console.log( data.time ); // 2pm
}, "json");
```
     */
    post(url: string,
         data: JQuery.PlainObject | string,
         success: JQuery.jqXHR.DoneCallback | null,
         dataType?: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see \`{@link https://api.jquery.com/jQuery.post/ }\`
     * @since 1.0
     */
    post(url: string,
         success: JQuery.jqXHR.DoneCallback | null,
         dataType: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data _&#x40;param_ `success_data`
     * <br>
     * * `success` — A callback function that is executed if the request succeeds. Required if `dataType` is provided,
     *               but can be `null` in that case. <br>
     * * `data` — A plain object or string that is sent to the server with the request.
     * @see \`{@link https://api.jquery.com/jQuery.post/ }\`
     * @since 1.0
     * @example ​ ````Request the test.php page and send some additional data along (while still ignoring the return results).
```javascript
$.post( "test.php", { name: "John", time: "2pm" } );
```
     * @example ​ ````Pass arrays of data to the server (while still ignoring the return results).
```javascript
$.post( "test.php", { 'choices[]': [ "Jon", "Susan" ] } );
```
     * @example ​ ````Send form data using Ajax requests
```javascript
$.post( "test.php", $( "#testform" ).serialize() );
```
     * @example ​ ````Alert the results from requesting test.php (HTML or XML, depending on what was returned).
```javascript
$.post( "test.php", function( data ) {
  alert( "Data Loaded: " + data );
});
```
     * @example ​ ````Alert the results from requesting test.php with an additional payload of data (HTML or XML, depending on what was returned).
```javascript
$.post( "test.php", { name: "John", time: "2pm" })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
```
     * @example ​ ````Post a form using Ajax and put results in a div
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.post demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form action="/" id="searchForm">
  <input type="text" name="s" placeholder="Search...">
  <input type="submit" value="Search">
</form>
<!-- the result of the search will be rendered inside this div -->
<div id="result"></div>
​
<script>
// Attach a submit handler to the form
$( "#searchForm" ).submit(function( event ) {
​
  // Stop form from submitting normally
  event.preventDefault();
​
  // Get some values from elements on the page:
  var $form = $( this ),
    term = $form.find( "input[name='s']" ).val(),
    url = $form.attr( "action" );
​
  // Send the data using post
  var posting = $.post( url, { s: term } );
​
  // Put the results in a div
  posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
  });
});
</script>
​
</body>
</html>
```
     */
    post(url: string,
         success_data: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url_settings _&#x40;param_ `url_settings`
     * <br>
     * * `url` — A string containing the URL to which the request is sent. <br>
     * * `settings` — A set of key/value pairs that configure the Ajax request. All properties except for `url` are optional.
     *                A default can be set for any option with \`{@link ajaxSetup $.ajaxSetup()}\`. See \`{@link https://api.jquery.com/jquery.ajax/#jQuery-ajax-settings jQuery.ajax( settings )}\`
     *                for a complete list of all settings. Type will automatically be set to `POST`.
     * @see \`{@link https://api.jquery.com/jQuery.post/ }\`
     * @since 1.0
     * @since 1.12
     * @since 2.2
     * @example ​ ````Request the test.php page, but ignore the return results.
```javascript
$.post( "test.php" );
```
     */
    post(url_settings?: string | JQuery.UrlAjaxSettings): JQuery.jqXHR;

    // region proxy
    // #region proxy

    // region (fn, null | undefined)
    // #region (fn, null | undefined)

    // region 0 to 7 additional arguments
    // #region 0 to 7 additional arguments

    // region 0 parameters
    // #region 0 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D, e: E) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D>(fn: (a: A, b: B, c: C, d: D) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C>(fn: (a: A, b: B, c: C) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B>(fn: (a: A, b: B) => TReturn,
              context: null | undefined,
              a: A, b: B): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A>(fn: (a: A) => TReturn,
           context: null | undefined,
           a: A): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn>(fn: () => TReturn,
                   context: null | undefined): () => TReturn;

    // #endregion

    // region 1 parameters
    // #region 1 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E, f: F): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T>(fn: (a: A, b: B, c: C, d: D, e: E,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T>(fn: (a: A, b: B, c: C, d: D,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T>(fn: (a: A, b: B, c: C,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T>(fn: (a: A, b: B,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T>(fn: (a: A,
                t: T) => TReturn,
           context: null | undefined,
           a: A): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T>(fn: (t: T) => TReturn,
           context: null | undefined): (t: T) => TReturn;

    // #endregion

    // region 2 parameters
    // #region 2 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U>(fn: (a: A, b: B, c: C, d: D,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U>(fn: (a: A, b: B, c: C,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U>(fn: (a: A, b: B,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U>(fn: (a: A,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U>(fn: (t: T, u: U) => TReturn,
              context: null | undefined): (t: T, u: U) => TReturn;

    // #endregion

    // region 3 parameters
    // #region 3 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V>(fn: (a: A, b: B, c: C, d: D,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U, V>(fn: (a: A, b: B, c: C,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U, V>(fn: (a: A, b: B,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U, V>(fn: (a: A,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U, V>(fn: (t: T, u: U, v: V) => TReturn,
                 context: null | undefined): (t: T, u: U, v: V) => TReturn;

    // #endregion

    // region 4 parameters
    // #region 4 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W>(fn: (a: A, b: B, c: C,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U, V, W>(fn: (a: A, b: B,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U, V, W>(fn: (a: A,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U, V, W>(fn: (t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined): (t: T, u: U, v: V, w: W) => TReturn;

    // #endregion

    // region 5 parameters
    // #region 5 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X>(fn: (a: A, b: B, c: C,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X>(fn: (a: A, b: B,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U, V, W, X>(fn: (a: A,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U, V, W, X>(fn: (t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined): (t: T, u: U, v: V, w: W, x: X) => TReturn;

    // #endregion

    // region 6 parameters
    // #region 6 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X, Y>(fn: (a: A, b: B,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U, V, W, X, Y>(fn: (a: A,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U, V, W, X, Y>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;

    // #endregion

    // region 7+ parameters
    // #region 7+ parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        A,
        T, U, V, W, X, Y, Z>(fn: (a: A,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn,
        T, U, V, W, X, Y, Z>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;

    // #endregion

    // #endregion

    // region 8+ additional arguments
    // #region 8+ additional arguments

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.9
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     */
    proxy<TReturn>(fn: (...args: any[]) => TReturn,
                   context: null | undefined,
                   ...additionalArguments: any[]): (...args: any[]) => TReturn;

    // #endregion

    // #endregion

    // region (fn, context)
    // #region (fn, context)

    // region 0 to 7 additional arguments
    // #region 0 to 7 additional arguments

    // region 0 parameters
    // #region 0 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D, e: E) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D>(fn: (a: A, b: B, c: C, d: D) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C>(fn: (a: A, b: B, c: C) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B>(fn: (a: A, b: B) => TReturn,
              context: TContext,
              a: A, b: B): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4`
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A>(fn: (a: A) => TReturn,
           context: TContext,
           a: A): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn>(fn: () => TReturn,
                 context: TContext): (this: TContext) => TReturn;

    // #endregion

    // region 1 parameters
    // #region 1 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T>(fn: (a: A, b: B, c: C, d: D, e: E,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T>(fn: (a: A, b: B, c: C, d: D,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T>(fn: (a: A, b: B, c: C,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T>(fn: (a: A, b: B,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T>(fn: (a: A,
                t: T) => TReturn,
           context: TContext,
           a: A): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T>(fn: (t: T) => TReturn,
           context: TContext): (this: TContext, t: T) => TReturn;

    // #endregion

    // region 2 parameters
    // #region 2 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U>(fn: (a: A, b: B, c: C, d: D,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U>(fn: (a: A, b: B, c: C,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U>(fn: (a: A, b: B,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U>(fn: (a: A,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U>(fn: (t: T, u: U) => TReturn,
              context: TContext): (this: TContext, t: T, u: U) => TReturn;

    // #endregion

    // region 3 parameters
    // #region 3 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V>(fn: (a: A, b: B, c: C, d: D,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V>(fn: (a: A, b: B, c: C,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V>(fn: (a: A, b: B,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V>(fn: (a: A,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V>(fn: (t: T, u: U, v: V) => TReturn,
                 context: TContext): (this: TContext, t: T, u: U, v: V) => TReturn;

    // #endregion

    // region 4 parameters
    // #region 4 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W>(fn: (a: A, b: B, c: C,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W>(fn: (a: A, b: B,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W>(fn: (a: A,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W>(fn: (t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;

    // #endregion

    // region 5 parameters
    // #region 5 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X>(fn: (a: A, b: B, c: C,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X>(fn: (a: A, b: B,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X>(fn: (a: A,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X>(fn: (t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;

    // #endregion

    // region 6 parameters
    // #region 6 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X, Y>(fn: (a: A, b: B,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X, Y>(fn: (a: A,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X, Y>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;

    // #endregion

    // region 7+ parameters
    // #region 7+ parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X, Y, Z>(fn: (a: A,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X, Y, Z>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;

    // #endregion

    // #endregion

    // region 8+ additional arguments
    // #region 8+ additional arguments

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (`this`) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Change the context of functions bound to a click handler using the &quot;function, context&quot; signature. Unbind the first handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  type: "zombie",
  test: function( event ) {
    // Without proxy, `this` would refer to the event target
    // use event.target to reference that element.
    var element = event.target;
    $( element ).css( "background-color", "red" );
​
    // With proxy, `this` refers to the me object encapsulating
    // this function.
    $( "#log" ).append( "Hello " + this.type + "<br>" );
    $( "#test" ).off( "click", this.test );
  }
};
​
var you = {
  type: "person",
  test: function( event ) {
    $( "#log" ).append( this.type + " " );
  }
};
​
// Execute you.test() in the context of the `you` object
// no matter where it is called
// i.e. the `this` keyword will refer to `you`
var youClick = $.proxy( you.test, you );
​
// attach click handlers to #test
$( "#test" )
  // this === "zombie"; handler unbound after first click
  .on( "click", $.proxy( me.test, me ) )
​
  // this === "person"
  .on( "click", youClick )
​
  // this === "zombie"
  .on( "click", $.proxy( you.test, me ) )
​
  // this === "<button> element"
  .on( "click", you.test );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the context of a function bound to the click handler,
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button type="button" id="test">Test</button></p>
<div id="log"></div>
​
<script>
var me = {
  // I'm a dog
  type: "dog",
​
  // Note that event comes *after* one and two
  test: function( one, two, event ) {
    $( "#log" )
​
      // `one` maps to `you`, the 1st additional
      // argument in the $.proxy function call
      .append( "<h3>Hello " + one.type + ":</h3>" )
​
      // The `this` keyword refers to `me`
      // (the 2nd, context, argument of $.proxy)
      .append( "I am a " + this.type + ", " )
​
      // `two` maps to `they`, the 2nd additional
      // argument in the $.proxy function call
      .append( "and they are " + two.type + ".<br>" )
​
      // The event type is "click"
      .append( "Thanks for " + event.type + "ing." )
​
      // The clicked element is `event.target`,
      // and its type is "button"
      .append( "the " + event.target.type + "." );
  }
};
​
var you = { type: "cat" };
var they = { type: "fish" };
​
// Set up handler to execute me.test() in the context
// of `me`, with `you` and `they` as additional arguments
var proxy = $.proxy( me.test, me, you, they );
​
$( "#test" )
  .on( "click", proxy );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object,
        TReturn>(fn: (...args: any[]) => TReturn,
                 context: TContext,
                 ...additionalArguments: any[]): (this: TContext, ...args: any[]) => TReturn;

    // #endregion

    // #endregion

    // region (context, name)
    // #region (context, name)

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param context The object to which the context of the function should be set.
     * @param name The name of the function whose context will be changed (should be a property of the context object).
     * @param additionalArguments Any number of arguments to be passed to the function named in the name argument.
     * @see \`{@link https://api.jquery.com/jQuery.proxy/ }\`
     * @since 1.4
     * @since 1.6
     * @deprecated ​ Deprecated since 3.3. Use \`{@link Function#bind }\`.
     * @example ​ ````Enforce the context of the function using the &quot;context, function name&quot; signature. Unbind the handler after first click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.proxy demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <p><button id="test">Test</button></p>
  <p id="log"></p>
​
<script>
var obj = {
  name: "John",
  test: function() {
    $( "#log" ).append( this.name );
    $( "#test" ).off( "click", obj.test );
  }
};
$( "#test" ).on( "click", jQuery.proxy( obj, "test" ) );
</script>
​
</body>
</html>
```
     */
    proxy<TContext extends object>(context: TContext,
                                   name: keyof TContext,
                                   ...additionalArguments: any[]): (this: TContext, ...args: any[]) => any;

    // #endregion

    // #endregion

    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element where the array of queued functions is attached.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue The new function to add to the queue.
     *                 An array of functions to replace the current queue contents.
     * @see \`{@link https://api.jquery.com/jQuery.queue/ }\`
     * @since 1.3
     * @example ​ ````Show the length of the queue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="show">Show Length of Queue</button>
<span></span>
<div></div>
  ​
<script>
$( "#show" ).click(function() {
  var n = jQuery.queue( $( "div" )[ 0 ], "fx" );
  $( "span" ).text( "Queue length is: " + n.length );
});
​
function runIt() {
  $( "div" )
    .show( "slow" )
    .animate({
      left: "+=200"
    }, 2000 )
    .slideToggle( 1000 )
    .slideToggle( "fast" )
    .animate({
      left: "-=200"
    }, 1500 )
    .hide( "slow" )
    .show( 1200 )
    .slideUp( "normal", runIt );
}
​
runIt();
</script>
​
</body>
</html>
```
     * @example ​ ````Queue a custom function.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Click here...
<div></div>
​
<script>
$( document.body ).click(function() {
  var divs = $( "div" )
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 );
  jQuery.queue( divs[ 0 ], "fx", function() {
    $( this ).addClass( "newcolor" );
    jQuery.dequeue( this );
  });
  divs.animate({ left: "-=200" }, 500 );
  jQuery.queue( divs[ 0 ], "fx", function() {
    $( this ).removeClass( "newcolor" );
    jQuery.dequeue( this );
  });
  divs.slideUp();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Set a queue array to delete the queue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="start">Start</button>
<button id="stop">Stop</button>
<div></div>
​
<script>
$( "#start" ).click(function() {
  var divs = $( "div" )
    .show( "slow" )
    .animate({ left: "+=200" }, 5000 );
  jQuery.queue( divs[ 0 ], "fx", function() {
    $( this ).addClass( "newcolor" );
    jQuery.dequeue( this );
  });
  divs.animate({ left: "-=200" }, 1500 );
  jQuery.queue( divs[ 0 ], "fx", function() {
    $( this ).removeClass( "newcolor" );
    jQuery.dequeue( this );
  });
  divs.slideUp();
});
$( "#stop" ).click(function() {
  jQuery.queue( $( "div" )[ 0 ], "fx", [] );
  $( "div" ).stop();
});
</script>
​
</body>
</html>
```
     */
    queue<T extends Element>(element: T, queueName?: string, newQueue?: JQuery.TypeOrArray<JQuery.QueueFunction<T>>): JQuery.Queue<T>;
    /**
     * Handles errors thrown synchronously in functions wrapped in jQuery().
     *
     * @param error An error thrown in the function wrapped in jQuery().
     * @see \`{@link https://api.jquery.com/jQuery.readyException/ }\`
     * @since 3.1
     * @example ​ ````Pass the received error to console.error.
```javascript
jQuery.readyException = function( error ) {
  console.error( error );
};
```
     */
    readyException(error: Error): any;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param element A DOM element from which to remove data.
     * @param name A string naming the piece of data to remove.
     * @see \`{@link https://api.jquery.com/jQuery.removeData/ }\`
     * @since 1.2.3
     * @example ​ ````Set a data store for 2 names then remove one of them.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.removeData demo</title>
  <style>
  div {
    margin: 2px;
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>value1 before creation: <span></span></div>
<div>value1 after creation: <span></span></div>
<div>value1 after removal: <span></span></div>
<div>value2 after removal: <span></span></div>
​
<script>
var div = $( "div" )[ 0 ];
$( "span:eq(0)" ).text( "" + $( "div" ).data( "test1" ) );
jQuery.data( div, "test1", "VALUE-1" );
jQuery.data( div, "test2", "VALUE-2" );
$( "span:eq(1)" ).text( "" + jQuery.data( div, "test1" ) );
jQuery.removeData( div, "test1" );
$( "span:eq(2)" ).text( "" + jQuery.data( div, "test1" ) );
$( "span:eq(3)" ).text( "" + jQuery.data( div, "test2" ) );
</script>
​
</body>
</html>
```
     */
    removeData(element: Element | Document | Window | JQuery.PlainObject, name?: string): void;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/jQuery.speed/ }\`
     * @since 1.1
     */
    speed<TElement extends Element = HTMLElement>(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): JQuery.EffectsOptions<TElement>;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete _&#x40;param_ `easing_complete`
     * <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/jQuery.speed/ }\`
     * @since 1.0
     * @since 1.1
     */
    speed<TElement extends Element = HTMLElement>(duration: JQuery.Duration,
                                                  easing_complete: string | ((this: TElement) => void)): JQuery.EffectsOptions<TElement>;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration_complete_settings _&#x40;param_ `duration_complete_settings`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `settings` —
     * @see \`{@link https://api.jquery.com/jQuery.speed/ }\`
     * @since 1.0
     * @since 1.1
     */
    speed<TElement extends Element = HTMLElement>(duration_complete_settings?: JQuery.Duration | ((this: TElement) => void) | JQuery.SpeedSettings<TElement>): JQuery.EffectsOptions<TElement>;
    /**
     * Remove the whitespace from the beginning and end of a string.
     *
     * @param str The string to trim.
     * @see \`{@link https://api.jquery.com/jQuery.trim/ }\`
     * @since 1.0
     * @example ​ ````Remove the white spaces at the start and at the end of the string.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.trim demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<pre id="original"></pre>
<pre id="trimmed"></pre>
​
<script>
var str = "         lots of spaces before and after         ";
$( "#original" ).html( "Original String: '" + str + "'" );
$( "#trimmed" ).html( "$.trim()'ed: '" + $.trim(str) + "'" );
</script>
​
</body>
</html>
```
     * @example ​ ````Remove the white spaces at the start and at the end of the string.
```javascript
$.trim("    hello, how are you?    ");
```
     * @example ​ ````Remove the white spaces at the start and at the end of the string.
```javascript
$.trim("    hello, how are you?    ");
```
     */
    trim(str: string): string;
    /**
     * Determine the internal JavaScript [[Class]] of an object.
     *
     * @param obj Object to get the internal JavaScript [[Class]] of.
     * @see \`{@link https://api.jquery.com/jQuery.type/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. See \`{@link https://github.com/jquery/jquery/issues/3605 }`.
     * @example ​ ````Find out if the parameter is a RegExp.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.type demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Is it a RegExp? <b></b>
​
<script>
$( "b" ).append( "" + jQuery.type( /test/ ) );
</script>
​
</body>
</html>
```
     */
    type(obj: any): 'array' | 'boolean' | 'date' | 'error' | 'function' | 'null' | 'number' | 'object' | 'regexp' | 'string' | 'symbol' | 'undefined';
    /**
     * @description Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see \`{@link https://api.jquery.com/jQuery.unique/ }\`
     * @since 1.1.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link uniqueSort }\`.
     *
     * **Cause**: The fact that `jQuery.unique` sorted its results in DOM order was surprising to many who did not read the documentation carefully. As of jQuery 3.0 this function is being renamed to make it clear.
     *
     * **Solution**: Replace all uses of `jQuery.unique` with `jQuery.uniqueSort` which is the same function with a better name.
     * @example ​ ````Removes any duplicate elements from the array of divs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.unique demo</title>
  <style>
  div {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>There are 6 divs in this document.</div>
<div></div>
<div class="dup"></div>
<div class="dup"></div>
<div class="dup"></div>
<div></div>
​
<script>
// unique() must take a native array
var divs = $( "div" ).get();
​
// Add 3 elements of class dup too (they are divs)
divs = divs.concat( $( ".dup" ).get() );
$( "div:eq(1)" ).text( "Pre-unique there are " + divs.length + " elements." );
​
divs = jQuery.unique( divs );
$( "div:eq(2)" ).text( "Post-unique there are " + divs.length + " elements." )
  .css( "color", "red" );
</script>
​
</body>
</html>
```
     */
    unique<T extends Element>(array: T[]): T[];
    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see \`{@link https://api.jquery.com/jQuery.uniqueSort/ }\`
     * @since 1.12
     * @since 2.2
     * @example ​ ````Removes any duplicate elements from the array of divs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.uniqueSort demo</title>
  <style>
  div {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>There are 6 divs in this document.</div>
<div></div>
<div class="dup"></div>
<div class="dup"></div>
<div class="dup"></div>
<div></div>
​
<script>
// unique() must take a native array
var divs = $( "div" ).get();
​
// Add 3 elements of class dup too (they are divs)
divs = divs.concat( $( ".dup" ).get() );
$( "div:eq(1)" ).text( "Pre-unique there are " + divs.length + " elements." );
​
divs = jQuery.uniqueSort( divs );
$( "div:eq(2)" ).text( "Post-unique there are " + divs.length + " elements." )
  .css( "color", "red" );
</script>
​
</body>
</html>
```
     */
    uniqueSort<T extends Element>(array: T[]): T[];
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when<TR1, UR1, VR1,
        TJ1 = any, UJ1 = any, VJ1 = any>(
            deferredT: JQuery.Promise<TR1, TJ1> | JQuery.Thenable<TR1> | TR1,
            deferredU: JQuery.Promise<UR1, UJ1> | JQuery.Thenable<UR1> | UR1,
            deferredV: JQuery.Promise<VR1, VJ1> | JQuery.Thenable<VR1> | VR1,
    ): JQuery.Promise3<
        TR1, TJ1, never,
        UR1, UJ1, never,
        VR1, VJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when<TR1, UR1,
        TJ1 = any, UJ1 = any>(
            deferredT: JQuery.Promise<TR1, TJ1> | JQuery.Thenable<TR1> | TR1,
            deferredU: JQuery.Promise<UR1, UJ1> | JQuery.Thenable<UR1> | UR1,
    ): JQuery.Promise2<
        TR1, TJ1, never,
        UR1, UJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when<TR1, TJ1,
        TR2, TJ2,
        TR3 = never, TJ3 = never>(
            deferredT: JQuery.Promise3<TR1, TJ1, any, TR2, TJ2, any, TR3, TJ3, any> |
                       JQuery.Promise2<TR1, TJ1, any, TR2, TJ2, any>
    ): JQuery.Promise3<
        TR1, TJ1, never,
        TR2, TJ2, never,
        TR3, TJ3, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when<TR1, TJ1 = any>(deferred: JQuery.Promise<TR1, TJ1> | JQuery.Thenable<TR1> | TR1): JQuery.Promise<TR1, TJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @param deferreds Zero or more Thenable objects.
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when<TR1 = never, TJ1 = never>(...deferreds: Array<JQuery.Promise<TR1, TJ1> | JQuery.Thenable<TR1> | TR1>): JQuery.Promise<TR1, TJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @param deferreds Zero or more Thenable objects.
     * @see \`{@link https://api.jquery.com/jQuery.when/ }\`
     * @since 1.5
     * @example ​ ````Execute a function after two Ajax requests are successful. (See the jQuery.ajax() documentation for a complete description of success and error cases for an ajax request).
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
  // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
  // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
  var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
  if ( /Whip It/.test( data ) ) {
    alert( "We got what we came for!" );
  }
});
```
     * @example ​ ````Execute the function myFunc when both ajax requests are successful, or myFailure if either one has an error.
```javascript
$.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) )
  .then( myFunc, myFailure );
```
     */
    when(...deferreds: any[]): JQuery.Promise<any, any, never>;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    /**
     * A string containing the jQuery version number.
     *
     * @see \`{@link https://api.jquery.com/jquery-2/#jquery1 }\`
     * @since 1.0
     * @example ​ ````Determine if an object is a jQuery object
```javascript
var a = { what: "A regular JS object" },
  b = $( "body" );
​
if ( a.jquery ) { // Falsy, since it's undefined
  alert( "a is a jQuery object!" );
}
​
if ( b.jquery ) { // Truthy, since it's a string
    alert( "b is a jQuery object!" );
}
```
     * @example ​ ````Get the current version of jQuery running on the page
```javascript
alert( "You are running jQuery version: " + $.fn.jquery );
```
     */
    jquery: string;
    /**
     * The number of elements in the jQuery object.
     *
     * @see \`{@link https://api.jquery.com/length/ }\`
     * @since 1.0
     * @example ​ ````Count the divs.  Click to add more.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>length demo</title>
  <style>
  body {
    cursor: pointer;
  }
  div {
    width: 50px;
    height: 30px;
    margin: 5px;
    float: left;
    background: green;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​<span></span>
  <div></div>​
<script>
$( document.body )
  .click(function() {
    $( document.body ).append( $( "<div>" ) );
    var n = $( "div" ).length;
    $( "span" ).text( "There are " + n + " divs." +
      "Click to add more.");
  })
  // Trigger the click to start
  .trigger( "click" );
</script>
​
</body>
</html>
```
     */
    length: number;
    /**
     * Create a new jQuery object with elements added to the set of matched elements.
     *
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     * @param context The point in the document at which the selector should begin matching; similar to the context
     *                argument of the $(selector, context) method.
     * @see \`{@link https://api.jquery.com/add/ }\`
     * @since 1.4
     */
    add(selector: JQuery.Selector, context: Element): this;
    /**
     * Create a new jQuery object with elements added to the set of matched elements.
     *
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     *                 One or more elements to add to the set of matched elements.
     *                 An HTML fragment to add to the set of matched elements.
     *                 An existing jQuery object to add to the set of matched elements.
     * @see \`{@link https://api.jquery.com/add/ }\`
     * @since 1.0
     * @since 1.3.2
     * @example ​ ````Finds all divs and makes a border.  Then adds all paragraphs to the jQuery object to set their backgrounds yellow.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>add demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 10px;
    float: left;
  }
  p {
    clear: left;
    font-weight: bold;
    font-size: 16px;
    color: blue;
    margin: 0 10px;
    padding: 2px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
​
<p>Added this... (notice no border)</p>
​
<script>
$( "div" ).css( "border", "2px solid red" )
  .add( "p" )
  .css( "background", "yellow" );
</script>
​
</body>
</html>
```
     * @example ​ ````Adds more elements, matched by the given expression, to the set of matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>add demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<span>Hello Again</span>
​
<script>
$( "p" ).add( "span" ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     * @example ​ ````Adds more elements, created on the fly, to the set of matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>add demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
​
<script>
$( "p" ).clone().add( "<span>Again</span>" ).appendTo( document.body );
</script>
​
</body>
</html>
```
     * @example ​ ````Adds one or more Elements to the set of matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>add demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<span id="a">Hello Again</span>
​
<script>
$( "p" ).add( document.getElementById( "a" ) ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     * @example ​ ````Demonstrates how to add (or push) elements to an existing collection
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>add demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<span id="a">Hello Again</span>
​
<script>
var collection = $( "p" );
// Capture the new collection
collection = collection.add( document.getElementById( "a" ) );
collection.css( "background", "yellow" );
</script>
​
</body>
</html>
```
     */
    add(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery.htmlString | JQuery): this;
    /**
     * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     * @see \`{@link https://api.jquery.com/addBack/ }\`
     * @since 1.8
     * @example ​ ````The .addBack() method causes the previous set of DOM elements in the traversal stack to be added to the current set. In the first example, the top stack contains the set resulting from .find(&quot;p&quot;). In the second example, .addBack() adds the previous set of elements on the stack — in this case $(&quot;div.after-addback&quot;) — to the current set, selecting both the div and its enclosed paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>addBack demo</title>
  <style>
  p, div {
    margin: 5px;
    padding: 5px;
  }
  .border {
    border: 2px solid red;
  }
  .background {
    background: yellow;
  }
  .left, .right {
    width: 45%;
    float: left;
  }
  .right {
    margin-left: 3%;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="left">
  <p><strong>Before <code>addBack()</code></strong></p>
  <div class="before-addback">
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>
</div>
<div class="right">
  <p><strong>After <code>addBack()</code></strong></p>
  <div class="after-addback">
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>
</div>
​
<script>
$( "div.left, div.right" ).find( "div, div > p" ).addClass( "border" );
​
// First Example
$( "div.before-addback" ).find( "p" ).addClass( "background" );
​
// Second Example
$( "div.after-addback" ).find( "p" ).addBack().addClass( "background" );
</script>
​
</body>
</html>
```
     */
    addBack(selector?: JQuery.Selector): this;
    /**
     * Adds the specified class(es) to each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     *                  An array of classes to be added to the class attribute of each matched element.
     *                  A function returning one or more space-separated class names to be added to the existing class
     *                  name(s). Receives the index position of the element in the set and the existing class name(s) as
     *                  arguments. Within the function, this refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/addClass/ }\`
     * @since 1.0
     * @since 1.4
     * @since 3.3
     * @example ​ ````Add the class &quot;selected&quot; to the matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>addClass demo</title>
  <style>
  p {
    margin: 8px;
    font-size: 16px;
  }
  .selected {
    color: blue;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>and</p>
<p>Goodbye</p>
​
<script>
$( "p" ).last().addClass( "selected" );
</script>
​
</body>
</html>
```
     * @example ​ ````Add the classes &quot;selected&quot; and &quot;highlight&quot; to the matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>addClass demo</title>
  <style>
  p {
    margin: 8px;
    font-size: 16px;
  }
  .selected {
    color: red;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>and</p>
<p>Goodbye</p>
​
<script>
$( "p:last" ).addClass( "selected highlight" );
</script>
​
</body>
</html>
```
     * @example ​ ````Pass in a function to .addClass() to add the &quot;green&quot; class to a div that already has a &quot;red&quot; class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>addClass demo</title>
  <style>
  div {
    background: white;
  }
  .red {
    background: red;
  }
  .red.green {
    background: green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
 <div>This div should be white</div>
 <div class="red">This div will be green because it now has the "green" and "red" classes.
   It would be red if the addClass function failed.</div>
 <div>This div should be white</div>
 <p>There are zero green divs</p>
​
<script>
$( "div" ).addClass(function( index, currentClass ) {
  var addedClass;
​
  if ( currentClass === "red" ) {
    addedClass = "green";
    $( "p" ).text( "There is one green div" );
  }
​
  return addedClass;
});
</script>
​
</body>
</html>
```
     */
    addClass(className: JQuery.TypeOrArray<string> | ((this: TElement, index: number, currentClassName: string) => string)): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert after each element in the set of matched elements.
     * @see \`{@link https://api.jquery.com/after/ }\`
     * @since 1.0
     * @example ​ ````Inserts some HTML after all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>after demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>I would like to say: </p>
​
<script>
$( "p" ).after( "<b>Hello</b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Inserts a DOM element after all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>after demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>I would like to say: </p>
​
<script>
$( "p" ).after( document.createTextNode( "Hello" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Inserts a jQuery object (similar to an Array of DOM Elements) after all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>after demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<b>Hello</b>
<p>I would like to say: </p>
​
<script>
$( "p" ).after( $( "b" ) );
</script>
​
</body>
</html>
```
     */
    after(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert
     *           after each element in the set of matched elements. Receives the index position of the element in the
     *           set and the old HTML value of the element as arguments. Within the function, this refers to the
     *           current element in the set.
     * @see \`{@link https://api.jquery.com/after/ }\`
     * @since 1.4
     * @since 1.10
     */
    after(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxComplete/ }\`
     * @since 1.0
     * @example ​ ````Show a message when an Ajax request completes.
```javascript
$( document ).ajaxComplete(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Request Complete.</li>" );
});
```
     */
    ajaxComplete(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings) => void | false): this;
    /**
     * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxError/ }\`
     * @since 1.0
     * @example ​ ````Show a message when an Ajax request fails.
```javascript
$( document ).ajaxError(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Error requesting page " + settings.url + "</li>" );
});
```
     */
    ajaxError(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxSettings: JQuery.AjaxSettings, thrownError: string) => void | false): this;
    /**
     * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxSend/ }\`
     * @since 1.0
     * @example ​ ````Show a message before an Ajax request is sent.
```javascript
$( document ).ajaxSend(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Starting request at " + settings.url + "</li>" );
});
```
     */
    ajaxSend(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings) => void | false): this;
    /**
     * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxStart/ }\`
     * @since 1.0
     * @example ​ ````Show a loading message whenever an Ajax request starts (and none is already active).
```javascript
$( document ).ajaxStart(function() {
  $( "#loading" ).show();
});
```
     */
    ajaxStart(handler: (this: Document) => void | false): this;
    /**
     * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxStop/ }\`
     * @since 1.0
     * @example ​ ````Hide a loading message after all the Ajax requests have stopped.
```javascript
$( document ).ajaxStop(function() {
  $( "#loading" ).hide();
});
```
     */
    ajaxStop(handler: (this: Document) => void | false): this;
    /**
     * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see \`{@link https://api.jquery.com/ajaxSuccess/ }\`
     * @since 1.0
     * @example ​ ````Show a message when an Ajax request completes successfully.
```javascript
$( document ).ajaxSuccess(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Successful Request!</li>" );
});
```
     */
    ajaxSuccess(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings, data: JQuery.PlainObject) => void | false): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/animate/ }\`
     * @since 1.0
     * @example ​ ````An example of using an &#39;easing&#39; function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.  Note, this code will do nothing unless the paragraph element is hidden.
```javascript
$( "p" ).animate({
  opacity: "show"
}, "slow", "easein" );
```
     * @example ​ ````Animate all paragraphs and execute a callback function when the animation is complete.  The first argument is an object of CSS properties, the second specifies that the animation should take 1000 milliseconds to complete, the third states the easing type, and the fourth argument is an anonymous callback function.
```javascript
$( "p" ).animate({
  height: 200,
  width: 400,
  opacity: 0.5
}, 1000, "linear", function() {
  alert( "all done" );
});
```
     */
    animate(properties: JQuery.PlainObject,
            duration: JQuery.Duration,
            easing: string,
            complete?: (this: TElement) => void): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/animate/ }\`
     * @since 1.0
     * @example ​ ````Click the button to animate the div with a number of different properties.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animate demo</title>
  <style>
  div {
    background-color: #bca;
    width: 100px;
    border: 1px solid green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="go">&raquo; Run</button>
<div id="block">Hello!</div>
​
<script>
// Using multiple unit types within one animation.
​
$( "#go" ).click(function() {
  $( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animates a div&#39;s left property with a relative value. Click several times on the buttons to see the relative animations queued up.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animate demo</title>
  <style>
  div {
    position: absolute;
    background-color: #abc;
    left: 50px;
    width: 90px;
    height: 90px;
    margin: 5px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="left">&laquo;</button>
<button id="right">&raquo;</button>
<div class="block"></div>
​
<script>
$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "slow" );
});
​
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animate all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.
```javascript
$( "p" ).animate({
  height: "toggle",
  opacity: "toggle"
}, "slow" );
```
     * @example ​ ````Animate all paragraphs to a left style of 50 and opacity of 1 (opaque, visible), completing the animation within 500 milliseconds.
```javascript
$( "p" ).animate({
  left: 50,
  opacity: 1
}, 500 );
```
     */
    animate(properties: JQuery.PlainObject,
            duration_easing: JQuery.Duration | string,
            complete?: (this: TElement) => void): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param options A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/animate/ }\`
     * @since 1.0
     * @example ​ ````The first button shows how an unqueued animation works.  It expands the div out to 90% width while the font-size is increasing. Once the font-size change is complete, the border animation will begin.

The second button starts a traditional chained animation, where each animation will start once the previous animation on the element has completed.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animate demo</title>
  <style>
  div {
    background-color: #bca;
    width: 200px;
    height: 1.1em;
    text-align: center;
    border: 2px solid green;
    margin: 3px;
    font-size: 14px;
  }
  button {
    font-size: 14px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="go1">&raquo; Animate Block1</button>
<button id="go2">&raquo; Animate Block2</button>
<button id="go3">&raquo; Animate Both</button>
<button id="go4">&raquo; Reset</button>
<div id="block1">Block1</div>
<div id="block2">Block2</div>
​
<script>
$( "#go1" ).click(function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
​
$( "#go2" ).click(function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
​
$( "#go3" ).click(function() {
  $( "#go1" ).add( "#go2" ).click();
});
​
$( "#go4" ).click(function() {
  $( "div" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animates the first div&#39;s left property and synchronizes the remaining divs, using the step function to set their left properties at each stage of the animation.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>animate demo</title>
  <style>
  div {
    position: relative;
    background-color: #abc;
    width: 40px;
    height: 40px;
    float: left;
    margin: 5px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button id="go">Run »</button></p>
<div class="block"></div>
<div class="block"></div>
<div class="block"></div>
<div class="block"></div>
<div class="block"></div>
<div class="block"></div>
​
<script>
$( "#go" ).click(function() {
  $( ".block:first" ).animate({
    left: 100
  }, {
    duration: 1000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animate the left and opacity style properties of all paragraphs; run the animation outside the queue, so that it will automatically start without waiting for its turn.
```javascript
$( "p" ).animate({
  left: "50px",
  opacity: 1
}, {
  duration: 500,
  queue: false
});
```
     * @example ​ ````Animates all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.
```javascript
$( "p" ).animate({
  height: "toggle",
  opacity: "toggle"
}, {
  duration: "slow"
});
```
     * @example ​ ````Use an easing function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.
```javascript
$( "p" ).animate({
  opacity: "show"
}, {
  duration: "slow",
  easing: "easein"
});
```
     */
    animate(properties: JQuery.PlainObject,
            options: JQuery.EffectsOptions<TElement>): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/animate/ }\`
     * @since 1.0
     */
    animate(properties: JQuery.PlainObject,
            complete?: (this: TElement) => void): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the end of each element in the set of matched elements.
     * @see \`{@link https://api.jquery.com/append/ }\`
     * @since 1.0
     * @example ​ ````Appends some HTML to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>append demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>I would like to say: </p>
​
<script>
$( "p" ).append( "<strong>Hello</strong>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Appends an Element to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>append demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>I would like to say: </p>
​
<script>
$( "p" ).append( document.createTextNode( "Hello" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Appends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>append demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<strong>Hello world!!!</strong>
<p>I would like to say: </p>
​
<script>
$( "p" ).append( $( "strong" ) );
</script>
​
</body>
</html>
```
     */
    append(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert at
     *           the end of each element in the set of matched elements. Receives the index position of the element
     *           in the set and the old HTML value of the element as arguments. Within the function, this refers to
     *           the current element in the set.
     * @see \`{@link https://api.jquery.com/append/ }\`
     * @since 1.4
     */
    append(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the end of the element(s) specified by this parameter.
     * @see \`{@link https://api.jquery.com/appendTo/ }\`
     * @since 1.0
     * @example ​ ````Append all spans to the element with the ID &quot;foo&quot; (Check append() documentation for more examples)
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>appendTo demo</title>
  <style>
  #foo {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>I have nothing more to say... </span>
​
<div id="foo">FOO! </div>
​
<script>
$( "span" ).appendTo( "#foo" );
</script>
​
</body>
</html>
```
     */
    appendTo(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element | DocumentFragment> | JQuery): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute. If null, the specified attribute will be removed (as in .removeAttr()).
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old attribute value as arguments.
     * @see \`{@link https://api.jquery.com/attr/ }\`
     * @since 1.0
     * @since 1.1
     * @example ​ ````Set the id for divs based on the position in the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attr demo</title>
  <style>
  div {
    color: blue;
  }
  span {
    color: red;
  }
  b {
    font-weight: bolder;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>Zero-th <span></span></div>
<div>First <span></span></div>
<div>Second <span></span></div>
​
<script>
$( "div" )
  .attr( "id", function( arr ) {
    return "div-id" + arr;
  })
  .each(function() {
    $( "span", this ).html( "(id = '<b>" + this.id + "</b>')" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Set the src attribute from title attribute on the image.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attr demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<img title="hat.gif">
​
<script>
$( "img" ).attr( "src", function() {
  return "/resources/" + this.title;
});
</script>
​
</body>
</html>
```
     */
    attr(attributeName: string,
         value: string | number | null | ((this: TElement, index: number, attr: string) => string | number | void | undefined)): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     * @see \`{@link https://api.jquery.com/attr/ }\`
     * @since 1.0
     * @example ​ ````Set some attributes for all &lt;img&gt;s in the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attr demo</title>
  <style>
  img {
    padding: 10px;
  }
  div {
    color: red;
    font-size: 24px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<img>
<img>
<img>
​
<div><b>Attribute of Ajax</b></div>
​
<script>
$( "img" ).attr({
  src: "/resources/hat.gif",
  title: "jQuery",
  alt: "jQuery Logo"
});
$( "div" ).text( $( "img" ).attr( "alt" ) );
</script>
​
</body>
</html>
```
     */
    attr(attributes: JQuery.PlainObject): this;
    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @see \`{@link https://api.jquery.com/attr/ }\`
     * @since 1.0
     * @example ​ ````Display the checked attribute and property of a checkbox as it changes.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attr demo</title>
  <style>
  p {
    margin: 20px 0 0;
  }
  b {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input id="check1" type="checkbox" checked="checked">
<label for="check1">Check me</label>
<p></p>
​
<script>
$( "input" )
  .change(function() {
    var $input = $( this );
    $( "p" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
      ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
      ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
  })
  .change();
</script>
​
</body>
</html>
```
     * @example ​ ````Find the title attribute of the first &lt;em&gt; in the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attr demo</title>
  <style>
  em {
    color: blue;
    font-weight: bold;
  }
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Once there was a <em title="huge, gigantic">large</em> dinosaur...</p>
​
The title of the emphasis is:<div></div>
​
<script>
var title = $( "em" ).attr( "title" );
$( "div" ).text( title );
</script>
​
</body>
</html>
```
     */
    attr(attributeName: string): string | undefined;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert before each element in the set of matched elements.
     * @see \`{@link https://api.jquery.com/before/ }\`
     * @since 1.0
     * @example ​ ````Inserts some HTML before all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>before demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p> is what I said...</p>
​
<script>
$( "p" ).before( "<b>Hello</b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Inserts a DOM element before all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>before demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p> is what I said...</p>
​
<script>
$( "p" ).before( document.createTextNode( "Hello" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Inserts a jQuery object (similar to an Array of DOM Elements) before all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>before demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p> is what I said...</p><b>Hello</b>
​
<script>
$( "p" ).before( $( "b" ) );
</script>
​
</body>
</html>
```
     */
    before(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert
     *           before each element in the set of matched elements. Receives the index position of the element in
     *           the set and the old HTML value of the element as arguments. Within the function, this refers to the
     *           current element in the set.
     * @see \`{@link https://api.jquery.com/before/ }\`
     * @since 1.4
     * @since 1.10
     */
    before(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    // [bind() overloads] https://github.com/jquery/api.jquery.com/issues/1048
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/bind/ }\`
     * @since 1.0
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     */
    bind<TData>(eventType: string,
                eventData: TData,
                handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     *                Setting the second argument to false will attach a function that prevents the default action from
     *                occurring and stops the event from bubbling.
     * @see \`{@link https://api.jquery.com/bind/ }\`
     * @since 1.0
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````Handle click and double-click for the paragraph.  Note: the coordinates are window relative, so in this case relative to the demo iframe.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>bind demo</title>
  <style>
  p {
    background: yellow;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  p.over {
     background: #ccc;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Click or double click here.</p>
<span></span>
​
<script>
$( "p" ).bind( "click", function( event ) {
  var str = "( " + event.pageX + ", " + event.pageY + " )";
  $( "span" ).text( "Click happened! " + str );
});
$( "p" ).bind( "dblclick", function() {
  $( "span" ).text( "Double-click happened in " + this.nodeName );
});
$( "p" ).bind( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "over" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To display each paragraph&#39;s text in an alert box whenever it is clicked:
```javascript
$( "p" ).bind( "click", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Cancel a default action and prevent it from bubbling up by returning false:
```javascript
$( "form" ).bind( "submit", function() {
  return false;
})
```
     * @example ​ ````Cancel only the default action by using the .preventDefault() method.
```javascript
$( "form" ).bind( "submit", function( event ) {
  event.preventDefault();
});
```
     * @example ​ ````Stop an event from bubbling without preventing the default action by using the .stopPropagation() method.
```javascript
$( "form" ).bind( "submit", function( event ) {
  event.stopPropagation();
});
```
     * @example ​ ````Bind custom events.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>bind demo</title>
  <style>
  p {
    color: red;
  }
  span {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Has an attached custom event.</p>
<button>Trigger custom event</button>
<span style="display: none;"></span>
​
<script>
$( "p" ).bind( "myCustomEvent", function( e, myName, myValue ) {
  $( this ).text( myName + ", hi there!" );
  $( "span" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
  });
$( "button" ).click(function() {
  $( "p" ).trigger( "myCustomEvent", [ "John" ] );
});
</script>
​
</body>
</html>
```
     */
    bind(eventType: string,
         handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false | null | undefined): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param events An object containing one or more DOM event types and functions to execute for them.
     * @see \`{@link https://api.jquery.com/bind/ }\`
     * @since 1.4
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````Bind multiple events simultaneously.
```javascript
$( "div.test" ).bind({
  click: function() {
    $( this ).addClass( "active" );
  },
  mouseenter: function() {
    $( this ).addClass( "inside" );
  },
  mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});
```
     */
    bind(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/blur/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    blur<TData>(eventData: TData,
                handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/blur/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To trigger the blur event on all paragraphs:
```javascript
$( "p" ).blur();
```
     */
    blur(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/change/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    change<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/change/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Attaches a change event to the select that gets the text for each selected option and writes them in the div.  It then triggers the event for the initial text draw.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>change demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<select name="sweets" multiple="multiple">
  <option>Chocolate</option>
  <option selected="selected">Candy</option>
  <option>Taffy</option>
  <option selected="selected">Caramel</option>
  <option>Fudge</option>
  <option>Cookie</option>
</select>
<div></div>
​
<script>
$( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .change();
</script>
​
</body>
</html>
```
     * @example ​ ````To add a validity test to all text input elements:
```javascript
$( "input[type='text']" ).change(function() {
  // Check input( $( this ).val() ) for validity here
});
```
     */
    change(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/children/ }\`
     * @since 1.0
     * @example ​ ````Find all children of the clicked element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>children demo</title>
  <style>
  body {
    font-size: 16px;
    font-weight: bolder;
  }
  div {
    width: 130px;
    height: 82px;
    margin: 10px;
    float: left;
    border: 1px solid blue;
    padding: 4px;
  }
  #container {
    width: auto;
    height: 105px;
    margin: 0;
    float: none;
    border: none;
  }
  .hilite {
    border-color: red;
  }
  #results {
    display: block;
    color: red;
  }
  p, span, em, a, b, button {
    border: 1px solid transparent;
  }
  p {
    margin: 10px;
  }
  span {
    color: blue;
  }
  input {
    width: 100px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="container">
  <div>
    <p>This <span>is the <em>way</em> we</span>
      write <em>the</em> demo,</p>
  </div>
​
  <div>
    <a href="#"><b>w</b>rit<b>e</b></a> the <span>demo,</span> <button>write
    the</button> demo,
  </div>
​
  <div>
    This <span>the way we <em>write</em> the <em>demo</em> so</span>
    <input type="text" value="early"> in
  </div>
​
  <p>
    <span>t</span>he <span>m</span>orning.
    <span id="results">Found <span>0</span> children in <span>TAG</span>.</span>
  </p>
</div>
​
<script>
$( "#container" ).click(function ( event ) {
  $( "*" ).removeClass( "hilite" );
  var kids = $( event.target ).children();
  var len = kids.addClass( "hilite" ).length;
​
  $( "#results span:first" ).text( len );
  $( "#results span:last" ).text( event.target.tagName );
​
  event.preventDefault();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Find all children of each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>children demo</title>
  <style>
  body {
    font-size: 16px;
    font-weight: bolder;
  }
  span {
    color: blue;
  }
  p {
    margin: 5px 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello (this is a paragraph)</p>
​
<div><span>Hello Again (this span is a child of the a div)</span></div>
<p>And <span>Again</span> (in another paragraph)</p>
​
<div>And One Last <span>Time</span> (most text directly in a div)</div>
​
<script>
$( "div" ).children().css( "border-bottom", "3px double red" );
</script>
​
</body>
</html>
```
     * @example ​ ````Find all children with a class &quot;selected&quot; of each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>children demo</title>
  <style>
  body {
    font-size: 16px;
    font-weight: bolder;
  }
  p {
    margin: 5px 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  <span>Hello</span>
  <p class="selected">Hello Again</p>
  <div class="selected">And Again</div>
  <p>And One Last Time</p>
</div>
​
<script>
$( "div" ).children( ".selected" ).css( "color", "blue" );
</script>
​
</body>
</html>
```
     */
    children(selector?: JQuery.Selector): this;
    /**
     * Remove from the queue all items that have not yet been run.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see \`{@link https://api.jquery.com/clearQueue/ }\`
     * @since 1.4
     * @example ​ ````Empty the queue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>clearQueue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="start">Start</button>
<button id="stop">Stop</button>
<div></div>
​
<script>
$( "#start" ).click(function() {
  var myDiv = $( "div" );
  myDiv.show( "slow" );
  myDiv.animate({
    left:"+=200"
  }, 5000 );
​
  myDiv.queue(function() {
    var that = $( this );
    that.addClass( "newcolor" );
    that.dequeue();
  });
​
  myDiv.animate({
    left:"-=200"
  }, 1500 );
  myDiv.queue(function() {
    var that = $( this );
    that.removeClass( "newcolor" );
    that.dequeue();
  });
  myDiv.slideUp();
});
​
$( "#stop" ).click(function() {
  var myDiv = $( "div" );
  myDiv.clearQueue();
  myDiv.stop();
});
</script>
​
</body>
</html>
```
     */
    clearQueue(queueName?: string): this;
    /**
     * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/click/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    click<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/click/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Hide paragraphs on a page when they are clicked:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>click demo</title>
  <style>
  p {
    color: red;
    margin: 5px;
    cursor: pointer;
  }
  p:hover {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>First Paragraph</p>
<p>Second Paragraph</p>
<p>Yet one more Paragraph</p>
​
<script>
$( "p" ).click(function() {
  $( this ).slideUp();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Trigger the click event on all of the paragraphs on the page:
```javascript
$( "p" ).click();
```
     */
    click(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Create a deep copy of the set of matched elements.
     *
     * @param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The
     *                          default value is false. *In jQuery 1.5.0 the default value was incorrectly true; it was changed back
     *                          to false in 1.5.1 and up.
     * @param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should
     *                              be copied. By default its value matches the first argument's value (which defaults to false).
     * @see \`{@link https://api.jquery.com/clone/ }\`
     * @since 1.0
     * @since 1.5
     * @example ​ ````Clones all b elements (and selects the clones) and prepends them to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>clone demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<b>Hello</b><p>, how are you?</p>
​
<script>
$( "b" ).clone().prependTo( "p" );
</script>
​
</body>
</html>
```
     */
    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): this;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @param context A DOM element within which a matching element may be found.
     * @see \`{@link https://api.jquery.com/closest/ }\`
     * @since 1.4
     */
    closest(selector: JQuery.Selector, context: Element): this;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A jQuery object to match elements against.
     *                 An element to match elements against.
     * @see \`{@link https://api.jquery.com/closest/ }\`
     * @since 1.3
     * @since 1.6
     * @example ​ ````Show how event delegation can be done with closest. The closest list element toggles a yellow background when it or its descendent is clicked.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>closest demo</title>
  <style>
  li {
    margin: 3px;
    padding: 3px;
    background: #EEEEEE;
  }
  li.highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li><b>Click me!</b></li>
  <li>You can also <b>Click me!</b></li>
</ul>
​
<script>
$( document ).on( "click", function( event ) {
  $( event.target ).closest( "li" ).toggleClass( "highlight" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Pass a jQuery object to closest. The closest list element toggles a yellow background when it or its descendent is clicked.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>closest demo</title>
  <style>
  li {
    margin: 3px;
    padding: 3px;
    background: #EEEEEE;
  }
  li.highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li><b>Click me!</b></li>
  <li>You can also <b>Click me!</b></li>
</ul>
​
<script>
var listElements = $( "li" ).css( "color", "blue" );
$( document ).on( "click", function( event ) {
  $( event.target ).closest( listElements ).toggleClass( "highlight" );
});
</script>
​
</body>
</html>
```
     */
    closest(selector: JQuery.Selector | Element | JQuery): this;
    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     *
     * @see \`{@link https://api.jquery.com/contents/ }\`
     * @since 1.2
     * @example ​ ````Find all the text nodes inside a paragraph and wrap them with a bold tag.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>contents demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello <a href="https://johnresig.com/">John</a>, how are you doing?</p>
​
<script>
$( "p" )
  .contents()
  .filter(function(){
    return this.nodeType !== 1;
  })
  .wrap( "<b></b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the background color of links inside of an iframe.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>contents demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<iframe src="https://api.jquery.com/" width="80%" height="600" id="frameDemo"></iframe>
​
<script>
$( "#frameDemo" ).contents().find( "a" ).css( "background-color", "#BADA55" );
</script>
​
</body>
</html>
```
     */
    contents(): JQuery<TElement | Text | Comment>;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/contextmenu/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    contextmenu<TData>(eventData: TData,
                       handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/contextmenu/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To show a &quot;Hello World!&quot; alert box when the contextmenu event is triggered on a paragraph on the page:
```javascript
$( "p" ).contextmenu(function() {
  alert( "Hello World!" );
});
```
     * @example ​ ````Right click to toggle background color.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>contextmenu demo</title>
  <style>
  div {
    background: blue;
    color: white;
    height: 100px;
    width: 150px;
 }
  div.contextmenu {
    background: yellow;
    color: black;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<span>Right click the block</span>
​
<script>
var div = $( "div:first" );
div.contextmenu(function() {
  div.toggleClass( "contextmenu" );
});
</script>
​
</body>
</html>
```
     */
    contextmenu(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old value as arguments.
     * @see \`{@link https://api.jquery.com/css/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Change the color of any paragraph to red on mouseover event.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  p {
    color: blue;
    width: 200px;
    font-size: 14px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <p>Just roll the mouse over me.</p>
​
  <p>Or me to see a color change.</p>
​
<script>
$( "p" ).on( "mouseover", function() {
  $( this ).css( "color", "red" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Increase the width of #box by 200 pixels the first time it is clicked.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  #box {
    background: black;
    color: snow;
    width: 100px;
    padding: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="box">Click me to grow</div>
​
<script>
$( "#box" ).one( "click", function() {
  $( this ).css( "width", "+=200" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Highlight a clicked word in the paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  p {
    color: blue;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  Once upon a time there was a man
  who lived in a pizza parlor. This
  man just loved pizza and ate it all
  the time.  He went on to be the
  happiest man in the world.  The end.
</p>
​
<script>
var words = $( "p" ).first().text().split( /\s+/ );
var text = words.join( "</span> <span>" );
$( "p" ).first().html( "<span>" + text + "</span>" );
$( "span" ).on( "click", function() {
  $( this ).css( "background-color", "yellow" );
});
</script>
​
</body>
</html>
```
     */
    css(propertyName: string,
        value: string | number | ((this: TElement, index: number, value: string) => string | number | void | undefined)): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see \`{@link https://api.jquery.com/css/ }\`
     * @since 1.0
     * @example ​ ````Change the font weight and background color on mouseenter and mouseleave.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  p {
    color: green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Move the mouse over a paragraph.</p>
<p>Like this one or the one above.</p>
​
<script>
$( "p" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "yellow",
      "font-weight": "bolder"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "#ddd",
      fontWeight: ""
    };
    $( this ).css( styles );
  });
</script>
​
</body>
</html>
```
     * @example ​ ````Increase the size of a div when you click it.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  div {
    width: 20px;
    height: 15px;
    background-color: #f33;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>click</div>
<div>click</div>
​
<script>
$( "div" ).on( "click", function() {
  $( this ).css({
    width: function( index, value ) {
      return parseFloat( value ) * 1.2;
    },
    height: function( index, value ) {
      return parseFloat( value ) * 1.2;
    }
  });
});
</script>
​
</body>
</html>
```
     */
    css(properties: JQuery.PlainObject<string | number | ((this: TElement, index: number, value: string) => string | number | void | undefined)>): this;
    /**
     * Get the computed style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     *                     An array of one or more CSS properties.
     * @see \`{@link https://api.jquery.com/css/ }\`
     * @since 1.0
     * @example ​ ````Get the background color of a clicked div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span id="result">&nbsp;</span>
<div style="background-color:blue;"></div>
<div style="background-color:rgb(15,99,30);"></div>
<div style="background-color:#123456;"></div>
<div style="background-color:#f11;"></div>
​
<script>
$( "div" ).click(function() {
  var color = $( this ).css( "background-color" );
  $( "#result" ).html( "That div is <span style='color:" +
    color + ";'>" + color + "</span>." );
});
</script>
​
</body>
</html>
```
     */
    css(propertyName: string): string;
    /**
     * Get the computed style properties for the first element in the set of matched elements.
     *
     * @param propertyNames An array of one or more CSS properties.
     * @see \`{@link https://api.jquery.com/css/ }\`
     * @since 1.9
     * @example ​ ````Get the width, height, text color, and background color of a clicked div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>css demo</title>
  <style>
  div {
    height: 50px;
    margin: 5px;
    padding: 5px;
    float: left;
  }
  #box1 {
    width: 50px;
    color: yellow;
    background-color: blue;
  }
  #box2 {
    width: 80px;
    color: rgb(255, 255, 255);
    background-color: rgb(15, 99, 30);
  }
  #box3 {
    width: 40px;
    color: #fcc;
    background-color: #123456;
  }
  #box4 {
    width: 70px;
    background-color: #f11;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p id="result">&nbsp;</p>
<div id="box1">1</div>
<div id="box2">2</div>
<div id="box3">3</div>
<div id="box4">4</div>
​
<script>
$( "div" ).click(function() {
  var html = [ "The clicked div has the following styles:" ];
​
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value );
  });
​
  $( "#result" ).html( html.join( "<br>" ) );
});
</script>
​
</body>
</html>
```
     */
    css(propertyNames: string[]): JQuery.PlainObject<string>;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; this can be any Javascript type except `undefined`.
     * @see \`{@link https://api.jquery.com/data/ }\`
     * @since 1.2.3
     * @example ​ ````Store then retrieve a value from the div element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>data demo</title>
  <style>
  div {
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  The values stored were
  <span></span>
  and
  <span></span>
</div>
​
<script>
$( "div" ).data( "test", { first: 16, last: "pizza!" } );
$( "span:first" ).text( $( "div" ).data( "test" ).first );
$( "span:last" ).text( $( "div" ).data( "test" ).last );
</script>
​
</body>
</html>
```
     */
    data(key: string, value: string | number | boolean | symbol | object | null): this;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param obj An object of key-value pairs of data to update.
     * @see \`{@link https://api.jquery.com/data/ }\`
     * @since 1.4.3
     */
    data(obj: JQuery.PlainObject): this;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @param value `undefined` is not recognized as a data value. Calls such as `.data( "name", undefined )`
     *              will return the jQuery object that it was called on, allowing for chaining.
     * @see \`{@link https://api.jquery.com/data/ }\`
     * @since 1.2.3
     */
    // `unified-signatures` is disabled so that behavior when passing `undefined` to `value` can be documented. Unifying the signatures
    // results in potential confusion for users from an unexpected parameter.
    // tslint:disable-next-line:unified-signatures
    data(key: string, value: undefined): any;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @see \`{@link https://api.jquery.com/data/ }\`
     * @since 1.2.3
     * @example ​ ````Get the data named &quot;blah&quot; stored at for an element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>data demo</title>
  <style>
  div {
    margin: 5px;
    background: yellow;
  }
  button {
    margin: 5px;
    font-size: 14px;
  }
  p {
    margin: 5px;
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>A div</div>
<button>Get "blah" from the div</button>
<button>Set "blah" to "hello"</button>
<button>Set "blah" to 86</button>
<button>Remove "blah" from the div</button>
<p>The "blah" value of this div is <span>?</span></p>
​
<script>
$( "button" ).click(function() {
  var value;
​
  switch ( $( "button" ).index( this ) ) {
    case 0 :
      value = $( "div" ).data( "blah" );
      break;
    case 1 :
      $( "div" ).data( "blah", "hello" );
      value = "Stored!";
      break;
    case 2 :
      $( "div" ).data( "blah", 86 );
      value = "Stored!";
      break;
    case 3 :
      $( "div" ).removeData( "blah" );
      value = "Removed!";
      break;
  }
​
  $( "span" ).text( "" + value );
});
</script>
​
</body>
</html>
```
     */
    data(key: string): any;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @see \`{@link https://api.jquery.com/data/ }\`
     * @since 1.4
     */
    data(): JQuery.PlainObject;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/dblclick/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    dblclick<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/dblclick/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To bind a &quot;Hello World!&quot; alert box to the dblclick event on every paragraph on the page:
```javascript
$( "p" ).dblclick(function() {
  alert( "Hello World!" );
});
```
     * @example ​ ````Double click to toggle background color.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>dblclick demo</title>
  <style>
  div {
    background: blue;
    color: white;
    height: 100px;
    width: 150px;
 }
  div.dbl {
    background: yellow;
    color: black;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<span>Double click the block</span>
​
<script>
var divdbl = $( "div:first" );
divdbl.dblclick(function() {
  divdbl.toggleClass( "dbl" );
});
</script>
​
</body>
</html>
```
     */
    dblclick(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see \`{@link https://api.jquery.com/delay/ }\`
     * @since 1.4
     * @example ​ ````Animate the hiding and showing of two divs, delaying the first before showing it.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>delay demo</title>
  <style>
  div {
    position: absolute;
    width: 60px;
    height: 60px;
    float: left;
  }
  .first {
    background-color: #3f3;
    left: 0;
  }
  .second {
    background-color: #33f;
    left: 80px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button>Run</button></p>
<div class="first"></div>
<div class="second"></div>
​
<script>
$( "button" ).click(function() {
  $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
  $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
});
</script>
​
</body>
</html>
```
     */
    delay(duration: JQuery.Duration, queueName?: string): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param eventType A string containing one or more space-separated JavaScript event types, such as "click" or
     *                  "keydown," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/delegate/ }\`
     * @since 1.4.2
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     */
    delegate<TData>(selector: JQuery.Selector,
                    eventType: string,
                    eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param eventType A string containing one or more space-separated JavaScript event types, such as "click" or
     *                  "keydown," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/delegate/ }\`
     * @since 1.4.2
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````Click a paragraph to add another. Note that .delegate() attaches a click event handler to all paragraphs - even new ones.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>delegate demo</title>
  <style>
  p {
    background: yellow;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  p.over {
    background: #ccc;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Click me!</p>
​
<span></span>
​
<script>
$( "body" ).delegate( "p", "click", function() {
  $( this ).after( "<p>Another paragraph!</p>" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To display each paragraph&#39;s text in an alert box whenever it is clicked:
```javascript
$( "body" ).delegate( "p", "click", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````To cancel a default action and prevent it from bubbling up, return false:
```javascript
$( "body" ).delegate( "a", "click", function() {
  return false;
});
```
     * @example ​ ````To cancel only the default action by using the preventDefault method.
```javascript
$( "body" ).delegate( "a", "click", function( event ) {
  event.preventDefault();
});
```
     * @example ​ ````Can bind custom events too.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>delegate demo</title>
  <style>
  p {
    color: red;
  }
  span {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Has an attached custom event.</p>
<button>Trigger custom event</button>
<span style="display:none;"></span>
​
<script>
$( "body" ).delegate( "p", "myCustomEvent", function( e, myName, myValue ) {
  $( this ).text( "Hi there!" );
  $( "span" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
});
$( "button" ).click(function() {
  $( "p" ).trigger( "myCustomEvent" );
});
</script>
​
</body>
</html>
```
     */
    delegate(selector: JQuery.Selector,
             eventType: string,
             handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param events A plain object of one or more event types and functions to execute for them.
     * @see \`{@link https://api.jquery.com/delegate/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link on }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     */
    delegate(selector: JQuery.Selector,
             events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see \`{@link https://api.jquery.com/dequeue/ }\`
     * @since 1.2
     * @example ​ ````Use dequeue to end a custom queue function which allows the queue to keep going.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>dequeue demo</title>
  <style>
  div {
    margin: 3px;
    width: 50px;
    position: absolute;
    height: 50px;
    left: 10px;
    top: 30px;
    background-color: yellow;
  }
  div.red {
    background-color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Start</button>
<div></div>
​
<script>
$( "button" ).click(function() {
  $( "div" )
    .animate({ left:"+=200px" }, 2000 )
    .animate({ top:"0px" }, 600 )
    .queue(function() {
      $( this ).toggleClass( "red" ).dequeue();
    })
    .animate({ left:"10px", top:"30px" }, 700 );
});
</script>
​
</body>
</html>
```
     */
    dequeue(queueName?: string): this;
    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see \`{@link https://api.jquery.com/detach/ }\`
     * @since 1.4
     * @example ​ ````Detach all paragraphs from the DOM
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>detach demo</title>
  <style>
  p {
    background: yellow;
    margin: 6px 0;
  }
  p.off {
    background: black;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
how are
<p>you?</p>
<button>Attach/detach paragraphs</button>
​
<script>
$( "p" ).click(function() {
  $( this ).toggleClass( "off" );
});
var p;
$( "button" ).click(function() {
  if ( p ) {
    p.appendTo( "body" );
    p = null;
  } else {
    p = $( "p" ).detach();
  }
});
</script>
​
</body>
</html>
```
     */
    detach(selector?: JQuery.Selector): this;
    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     *
     * @param fn A function to execute for each matched element.
     * @see \`{@link https://api.jquery.com/each/ }\`
     * @since 1.0
     * @example ​ ````Iterate over three divs and sets their color property.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>each demo</title>
  <style>
  div {
    color: red;
    text-align: center;
    cursor: pointer;
    font-weight: bolder;
    width: 300px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>Click here</div>
<div>to iterate through</div>
<div>these divs.</div>
​
<script>
$( document.body ).click(function() {
  $( "div" ).each(function( i ) {
    if ( this.style.color !== "blue" ) {
      this.style.color = "blue";
    } else {
      this.style.color = "";
    }
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````To access a jQuery object instead of the regular DOM element, use $( this ). For example:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>each demo</title>
  <style>
  ul {
    font-size: 18px;
    margin: 0;
  }
  span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  .example {
    font-style: italic;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
To do list: <span>(click here to change)</span>
<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Be merry</li>
</ul>
​
<script>
$( "span" ).click(function() {
  $( "li" ).each(function() {
    $( this ).toggleClass( "example" );
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Use return false to break out of each() loops early.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>each demo</title>
  <style>
  div {
    width: 40px;
    height: 40px;
    margin: 5px;
    float: left;
    border: 2px blue solid;
    text-align: center;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Change colors</button>
<span></span>
<div></div>
<div></div>
<div></div>
<div></div>
<div id="stop">Stop here</div>
<div></div>
<div></div>
<div></div>
​
<script>
$( "button" ).click(function() {
  $( "div" ).each(function( index, element ) {
    // element == this
    $( element ).css( "backgroundColor", "yellow" );
    if ( $( this ).is( "#stop" ) ) {
      $( "span" ).text( "Stopped at div index #" + index );
      return false;
    }
  });
});
</script>
​
</body>
</html>
```
     */
    each(fn: (this: TElement, index: number, element: TElement) => void | false): this;
    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     *
     * @see \`{@link https://api.jquery.com/empty/ }\`
     * @since 1.0
     * @example ​ ````Removes all child nodes (including text nodes) from all paragraphs
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>empty demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  Hello, <span>Person</span> <em>and person</em>.
</p>
​
<button>Call empty() on above paragraph</button>
​
<script>
$( "button" ).click(function() {
  $( "p" ).empty();
});
</script>
​
</body>
</html>
```
     */
    empty(): this;
    /**
     * End the most recent filtering operation in the current chain and return the set of matched elements
     * to its previous state.
     *
     * @see \`{@link https://api.jquery.com/end/ }\`
     * @since 1.0
     * @example ​ ````Selects all paragraphs, finds span elements inside these, and reverts the selection back to the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>end demo</title>
  <style>
  p, div {
    margin: 1px;
    padding: 1px;
    font-weight: bold;
    font-size: 16px;
  }
  div {
    color: blue;
  }
  b {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  Hi there <span>how</span> are you <span>doing</span>?
</p>
​
<p>
  This <span>span</span> is one of
  several <span>spans</span> in this
  <span>sentence</span>.
</p>
​
<div>
  Tags in jQuery object initially: <b></b>
</div>
​
<div>
  Tags in jQuery object after find: <b></b>
</div>
​
<div>
  Tags in jQuery object after end: <b></b>
</div>
​
<script>
jQuery.fn.showTags = function( n ) {
  var tags = this.map(function() {
    return this.tagName;
  })
  .get()
  .join( ", " );
  $( "b:eq( " + n + " )" ).text( tags );
  return this;
};
​
$( "p" )
  .showTags( 0 )
  .find( "span" )
    .showTags( 1 )
    .css( "background", "yellow" )
  .end()
  .showTags( 2 )
  .css( "font-style", "italic" );
</script>
​
</body>
</html>
```
     * @example ​ ````Selects all paragraphs, finds span elements inside these, and reverts the selection back to the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>end demo</title>
  <style>
  p {
    margin: 10px;
    padding: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><span>Hello</span>, how are you?</p>
​
<script>
$( "p" )
  .find( "span" )
  .end()
  .css( "border", "2px red solid" );
</script>
​
</body>
</html>
```
     */
    end(): this;
    /**
     * Reduce the set of matched elements to the one at the specified index.
     *
     * @param index An integer indicating the 0-based position of the element.
     *              An integer indicating the position of the element, counting backwards from the last element in the set.
     * @see \`{@link https://api.jquery.com/eq/ }\`
     * @since 1.1.2
     * @since 1.4
     * @example ​ ````Turn the div with index 2 blue by adding an appropriate class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>eq demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 10px;
    float: left;
    border: 2px solid blue;
  }
  .blue {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
$( "body" ).find( "div" ).eq( 2 ).addClass( "blue" );
</script>
​
</body>
</html>
```
     */
    eq(index: number): this;
    /**
     * Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.
     *
     * @param obj An object to merge onto the jQuery prototype.
     * @see \`{@link https://api.jquery.com/jQuery.fn.extend/ }\`
     * @since 1.0
     * @example ​ ````Add two methods to the jQuery prototype ($.fn) object and then use one of them.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.fn.extend demo</title>
  <style>
  label {
    display: block;
    margin: .5em;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<label><input type="checkbox" name="foo"> Foo</label>
<label><input type="checkbox" name="bar"> Bar</label>
​
<script>
jQuery.fn.extend({
  check: function() {
    return this.each(function() {
      this.checked = true;
    });
  },
  uncheck: function() {
    return this.each(function() {
      this.checked = false;
    });
  }
});
​
// Use the newly created .check() method
$( "input[type='checkbox']" ).check();
</script>
​
</body>
</html>
```
     */
    extend(obj: object): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeIn/ }\`
     * @since 1.4.3
     */
    fadeIn(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeIn/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Fades a red block in over the text. Once the animation is done, it quickly fades in more text on top.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeIn demo</title>
  <style>
  p {
    position: relative;
    width: 400px;
    height: 90px;
  }
  div {
    position: absolute;
    width: 400px;
    height: 65px;
    font-size: 36px;
    text-align: center;
    color: yellow;
    background: red;
    padding-top: 25px;
    top: 0;
    left: 0;
    display: none;
  }
  span {
    display: none;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  Let it be known that the party of the first part
  and the party of the second part are henceforth
  and hereto directed to assess the allegations
  for factual correctness... (<a href="#">click!</a>)
  <div><span>CENSORED!</span></div>
</p>
​
<script>
$( "a" ).click(function() {
  $( "div" ).fadeIn( 3000, function() {
    $( "span" ).fadeIn( 100 );
  });
  return false;
});
</script>
​
</body>
</html>
```
     */
    fadeIn(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/fadeIn/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates hidden divs to fade in one by one, completing each animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeIn demo</title>
  <style>
  span {
    color: red;
    cursor: pointer;
  }
  div {
    margin: 3px;
    width: 80px;
    display: none;
    height: 80px;
    float: left;
  }
  #one {
    background: #f00;
  }
  #two {
    background: #0f0;
  }
  #three {
    background: #00f;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>Click here...</span>
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
​
<script>
$( document.body ).click(function() {
  $( "div:hidden:first" ).fadeIn( "slow" );
});
</script>
​
</body>
</html>
```
     */
    fadeIn(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeOut/ }\`
     * @since 1.4.3
     * @example ​ ````Fades out two divs, one with a &quot;linear&quot; easing and one with the default, &quot;swing,&quot; easing.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeOut demo</title>
  <style>
  .box,
  button {
    float: left;
    margin: 5px 10px 5px 0;
  }
  .box {
    height: 80px;
    width: 80px;
    background: #090;
  }
  #log {
    clear: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="btn1">fade out</button>
<button id="btn2">show</button>
​
<div id="log"></div>
​
<div id="box1" class="box">linear</div>
<div id="box2" class="box">swing</div>
​
<script>
$( "#btn1" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#box1" ).fadeOut( 1600, "linear", complete );
  $( "#box2" ).fadeOut( 1600, complete );
});
​
$( "#btn2" ).click(function() {
  $( "div" ).show();
  $( "#log" ).empty();
});
</script>
​
</body>
</html>
```
     */
    fadeOut(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeOut/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Fades out spans in one section that you click on.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeOut demo</title>
  <style>
  span {
    cursor: pointer;
  }
  span.hilite {
    background: yellow;
  }
  div {
    display: inline;
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<h3>Find the modifiers - <div></div></h3>
<p>
  If you <span>really</span> want to go outside
  <span>in the cold</span> then make sure to wear
  your <span>warm</span> jacket given to you by
  your <span>favorite</span> teacher.
</p>
​
<script>
$( "span" ).click(function() {
  $( this ).fadeOut( 1000, function() {
    $( "div" ).text( "'" + $( this ).text() + "' has faded!" );
    $( this ).remove();
  });
});
$( "span" ).hover(function() {
  $( this ).addClass( "hilite" );
}, function() {
  $( this ).removeClass( "hilite" );
});
</script>
​
</body>
</html>
```
     */
    fadeOut(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/fadeOut/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all paragraphs to fade out, completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeOut demo</title>
  <style>
  p {
    font-size: 150%;
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  If you click on this paragraph
  you'll see it just fade away.
</p>
​
<script>
$( "p" ).click(function() {
  $( "p" ).fadeOut( "slow" );
});
</script>
​
</body>
</html>
```
     */
    fadeOut(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeTo/ }\`
     * @since 1.4.3
     */
    fadeTo(duration: JQuery.Duration, opacity: number, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeTo/ }\`
     * @since 1.0
     * @example ​ ````Animates first paragraph to fade to an opacity of 0.33 (33%, about one third visible), completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeTo demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
Click this paragraph to see it fade.
</p>
​
<p>
Compare to this one that won't fade.
</p>
​
<script>
$( "p:first" ).click(function() {
  $( this ).fadeTo( "slow", 0.33 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Fade div to a random opacity on each click, completing the animation within 200 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeTo demo</title>
  <style>
  p {
    width: 80px;
    margin: 0;
    padding: 5px;
  }
  div {
    width: 40px;
    height: 40px;
    position: absolute;
  }
  #one {
    top: 0;
    left: 0;
    background: #f00;
  }
  #two {
    top: 20px;
    left: 20px;
    background: #0f0;
  }
  #three {
    top: 40px;
    left:40px;
    background:#00f;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>And this is the library that John built...</p>
​
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
​
<script>
$( "div" ).click(function() {
  $( this ).fadeTo( "fast", Math.random() );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Find the right answer! The fade will take 250 milliseconds and change various styles when it completes.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeTo demo</title>
  <style>
  div, p {
    width: 80px;
    height: 40px;
    top: 0;
    margin: 0;
    position: absolute;
    padding-top: 8px;
  }
  p {
    background: #fcc;
    text-align: center;
  }
  div {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Wrong</p>
<div></div>
<p>Wrong</p>
<div></div>
<p>Right!</p>
<div></div>
​
<script>
var getPos = function( n ) {
  return (Math.floor( n ) * 90) + "px";
};
$( "p" ).each(function( n ) {
  var r = Math.floor( Math.random() * 3 );
  var tmp = $( this ).text();
  $( this ).text( $( "p:eq(" + r + ")" ).text() );
  $( "p:eq(" + r + ")" ).text( tmp );
  $( this ).css( "left", getPos( n ) );
});
$( "div" )
  .each(function( n ) {
    $( this ).css( "left", getPos( n ) );
  })
  .css( "cursor", "pointer" )
  .click( function() {
    $( this ).fadeTo( 250, 0.25, function() {
      $( this )
        .css( "cursor", "" )
        .prev()
          .css({
            "font-weight": "bolder",
            "font-style": "italic"
          });
    });
  });
</script>
​
</body>
</html>
```
     */
    fadeTo(duration: JQuery.Duration, opacity: number, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeToggle/ }\`
     * @since 1.4.4
     * @example ​ ````Fades first paragraph in or out, completing the animation within 600 milliseconds and using a linear easing. Fades last paragraph in or out for 200 milliseconds, inserting a &quot;finished&quot; message upon completion.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeToggle demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>fadeToggle p1</button>
<button>fadeToggle p2</button>
<p>This paragraph has a slow, linear fade.</p>
<p>This paragraph has a fast animation.</p>
<div id="log"></div>
​
<script>
$( "button:first" ).click(function() {
  $( "p:first" ).fadeToggle( "slow", "linear" );
});
$( "button:last" ).click(function() {
  $( "p:last" ).fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  });
});
</script>
​
</body>
</html>
```
     */
    fadeToggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/fadeToggle/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Fades first paragraph in or out, completing the animation within 600 milliseconds and using a linear easing. Fades last paragraph in or out for 200 milliseconds, inserting a &quot;finished&quot; message upon completion.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>fadeToggle demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>fadeToggle p1</button>
<button>fadeToggle p2</button>
<p>This paragraph has a slow, linear fade.</p>
<p>This paragraph has a fast animation.</p>
<div id="log"></div>
​
<script>
$( "button:first" ).click(function() {
  $( "p:first" ).fadeToggle( "slow", "linear" );
});
$( "button:last" ).click(function() {
  $( "p:last" ).fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  });
});
</script>
​
</body>
</html>
```
     */
    fadeToggle(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/fadeToggle/ }\`
     * @since 1.0
     * @since 1.4.3
     */
    fadeToggle(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     *                 One or more DOM elements to match the current set of elements against.
     *                 An existing jQuery object to match the current set of elements against.
     *                 A function used as a test for each element in the set. this is the current DOM element.
     * @see \`{@link https://api.jquery.com/filter/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Change the color of all divs; then add a border to those with a &quot;middle&quot; class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>filter demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
    border: 2px white solid;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div class="middle"></div>
<div class="middle"></div>
<div class="middle"></div>
<div class="middle"></div>
<div></div>
​
<script>
$( "div" )
  .css( "background", "#c8ebcc" )
  .filter( ".middle" )
    .css( "border-color", "red" );
</script>
​
</body>
</html>
```
     * @example ​ ````Change the color of all divs; then add a border to the second one (index == 1) and the div with an id of &quot;fourth.&quot;
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>filter demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
    border: 3px white solid;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="first"></div>
<div id="second"></div>
<div id="third"></div>
<div id="fourth"></div>
<div id="fifth"></div>
<div id="sixth"></div>
​
<script>
$( "div" )
  .css( "background", "#b4b0da" )
  .filter(function( index ) {
    return index === 1 || $( this ).attr( "id" ) === "fourth";
  })
    .css( "border", "3px double red" );
</script>
​
</body>
</html>
```
     * @example ​ ````Select all divs and filter the selection with a DOM element, keeping only the one with an id of &quot;unique&quot;.
```javascript
$( "div" ).filter( document.getElementById( "unique" ) );
```
     * @example ​ ````Select all divs and filter the selection with a jQuery object, keeping only the one with an id of &quot;unique&quot;.
```javascript
$( "div" ).filter( $( "#unique" ) );
```
     */
    filter(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): this;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector,
     * jQuery object, or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 An element or a jQuery object to match elements against.
     * @see \`{@link https://api.jquery.com/find/ }\`
     * @since 1.0
     * @since 1.6
     * @example ​ ````Starts with all paragraphs and searches for descendant span elements, same as $( &quot;p span&quot; )
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>find demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><span>Hello</span>, how are you?</p>
<p>Me? I'm <span>good</span>.</p>
​
<script>
$( "p" ).find( "span" ).css( "color", "red" );
</script>
​
</body>
</html>
```
     * @example ​ ````A selection using a jQuery collection of all span tags. Only spans within p tags are changed to red while others are left blue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>find demo</title>
  <style>
  span {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><span>Hello</span>, how are you?</p>
<p>Me? I'm <span>good</span>.</p>
<div>Did you <span>eat</span> yet?</div>
​
<script>
var spans = $( "span" );
$( "p" ).find( spans ).css( "color", "red" );
</script>
​
</body>
</html>
```
     * @example ​ ````Add spans around each word then add a hover and italicize words with the letter t.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>find demo</title>
  <style>
  p {
    font-size: 20px;
    width: 200px;
    color: blue;
    font-weight: bold;
    margin: 0 10px;
  }
  .hilite {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  When the day is short
  find that which matters to you
  or stop believing
</p>
​
<script>
var newText = $( "p" ).text().split( " " ).join( "</span> <span>" );
newText = "<span>" + newText + "</span>";
​
$( "p" )
  .html( newText )
  .find( "span" )
    .hover(function() {
      $( this ).addClass( "hilite" );
    }, function() {
      $( this ).removeClass( "hilite" );
    })
  .end()
  .find( ":contains('t')" )
    .css({
      "font-style": "italic",
      "font-weight": "bolder"
    });
</script>
​
</body>
</html>
```
     */
    find(selector: JQuery.Selector | Element | JQuery): this;
    /**
     * Stop the currently-running animation, remove all queued animations, and complete all animations for
     * the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @see \`{@link https://api.jquery.com/finish/ }\`
     * @since 1.9
     * @example ​ ````Click the Go button once to start the animation, and then click the other buttons to see how they affect the current and queued animations.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>finish demo</title>
  <style>
  .box {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 15px;
    height: 15px;
    background: black;
  }
  #path {
    height: 244px;
    font-size: 70%;
    border-left: 2px dashed red;
    border-bottom: 2px dashed green;
    border-right: 2px dashed blue;
  }
  button {
    width: 12em;
    display: block;
    text-align: left;
    margin: 0 auto;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="box"></div>
<div id="path">
  <button id="go">Go</button>
  <br>
  <button id="bstt" class="b">.stop( true,true )</button>
  <button id="bcf" class="b">.clearQueue().finish()</button>
  <br>
  <button id="bstf" class="b">.stop( true, false )</button>
  <button id="bcs" class="b">.clearQueue().stop()</button>
  <br>
  <button id="bsff" class="b">.stop( false, false )</button>
  <button id="bs" class="b">.stop()</button>
  <br>
  <button id="bsft" class="b">.stop( false, true )</button>
  <br>
  <button id="bf" class="b">.finish()</button>
</div>
​
<script>
var horiz = $( "#path" ).width() - 20,
  vert = $( "#path" ).height() - 20;
​
var btns = {
  bstt: function() {
    $( "div.box" ).stop( true, true );
  },
  bs: function() {
    $( "div.box" ).stop();
  },
  bsft: function() {
    $( "div.box" ).stop( false, true );
  },
  bf: function() {
    $( "div.box" ).finish();
  },
  bcf: function() {
    $( "div.box" ).clearQueue().finish();
  },
  bsff: function() {
    $( "div.box" ).stop( false, false );
  },
  bstf: function() {
    $( "div.box" ).stop( true, false );
  },
  bcs: function() {
    $( "div.box" ).clearQueue().stop();
  }
};
​
$( "button.b" ).on( "click", function() {
  btns[ this.id ]();
});
​
$( "#go" ).on( "click", function() {
  $( ".box" )
    .clearQueue()
    .stop()
    .css({
      left: 10,
      top: 10
    })
    .animate({
      top: vert
    }, 3000 )
    .animate({
      left: horiz
    }, 3000 )
    .animate({
      top: 10
    }, 3000 );
});
</script>
​
</body>
</html>
```
     */
    finish(queue?: string): this;
    /**
     * Reduce the set of matched elements to the first in the set.
     *
     * @see \`{@link https://api.jquery.com/first/ }\`
     * @since 1.4
     * @example ​ ````Highlight the first span in a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>first demo</title>
  <style>
  .highlight{
    background-color: yellow
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  <span>Look:</span>
  <span>This is some text in a paragraph.</span>
  <span>This is a note about it.</span>
</p>
​
<script>
$( "p span" ).first().addClass( "highlight" );
</script>
​
</body>
</html>
```
     */
    first(): this;
    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focus/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    focus<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focus/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Fire focus.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>focus demo</title>
  <style>
  span {
    display: none;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><input type="text"> <span>focus fire</span></p>
<p><input type="password"> <span>focus fire</span></p>
​
<script>
$( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To stop people from writing in text input boxes, try:
```javascript
$( "input[type=text]" ).focus(function() {
  $( this ).blur();
});
```
     * @example ​ ````To focus on a login input box with id &#39;login&#39; on page startup, try:
```javascript
$( document ).ready(function() {
  $( "#login" ).focus();
});
```
     */
    focus(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focusin/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    focusin<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focusin/ }\`
     * @since 1.4
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Watch for a focus to occur within the paragraphs on the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>focusin demo</title>
  <style>
  span {
    display: none;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><input type="text"> <span>focusin fire</span></p>
<p><input type="password"> <span>focusin fire</span></p>
​
<script>
$( "p" ).focusin(function() {
  $( this ).find( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});
</script>
​
</body>
</html>
```
     */
    focusin(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focusout/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    focusout<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/focusout/ }\`
     * @since 1.4
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Watch for a loss of focus to occur inside paragraphs and note the difference between the focusout count and the blur count. (The blur count does not change because those events do not bubble.)
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>focusout demo</title>
  <style>
  .inputs {
    float: left;
    margin-right: 1em;
  }
  .inputs p {
    margin-top: 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="inputs">
  <p>
    <input type="text"><br>
    <input type="text">
  </p>
  <p>
    <input type="password">
  </p>
</div>
<div id="focus-count">focusout fire</div>
<div id="blur-count">blur fire</div>
​
<script>
var focus = 0,
  blur = 0;
$( "p" )
  .focusout(function() {
    focus++;
    $( "#focus-count" ).text( "focusout fired: " + focus + "x" );
  })
  .blur(function() {
    blur++;
    $( "#blur-count" ).text( "blur fired: " + blur + "x" );
  });
</script>
​
</body>
</html>
```
     */
    focusout(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Retrieve one of the elements matched by the jQuery object.
     *
     * @param index A zero-based integer indicating which element to retrieve.
     * @see \`{@link https://api.jquery.com/get/ }\`
     * @since 1.0
     * @example ​ ````Display the tag name of the click element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>get demo</title>
  <style>
  span {
    color: red;
  }
  div {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>&nbsp;</span>
<p>In this paragraph is an <span>important</span> section</p>
<div><input type="text"></div>
​
<script>
$( "*", document.body ).click(function( event ) {
  event.stopPropagation();
  var domElement = $( this ).get( 0 );
  $( "span:first" ).text( "Clicked on - " + domElement.nodeName );
});
</script>
​
</body>
</html>
```
     */
    get(index: number): TElement;
    /**
     * Retrieve the elements matched by the jQuery object.
     *
     * @see \`{@link https://api.jquery.com/get/ }\`
     * @since 1.0
     * @example ​ ````Select all divs in the document and return the DOM Elements as an Array; then use the built-in reverse() method to reverse that array.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>get demo</title>
  <style>
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Reversed - <span></span>
​
<div>One</div>
<div>Two</div>
<div>Three</div>
​
<script>
function display( divs ) {
  var a = [];
  for ( var i = 0; i < divs.length; i++ ) {
    a.push( divs[ i ].innerHTML );
  }
  $( "span" ).text( a.join(" ") );
}
display( $( "div" ).get().reverse() );
</script>
​
</body>
</html>
```
     */
    get(): TElement[];
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A DOM element to match elements against.
     * @see \`{@link https://api.jquery.com/has/ }\`
     * @since 1.4
     * @example ​ ````Check if an element is inside another.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>has demo</title>
  <style>
  .full {
    border: 1px solid red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul><li>Does the UL contain an LI?</li></ul>
​
<script>
$( "ul" ).append( "<li>" +
  ( $( "ul" ).has( "li" ).length ? "Yes" : "No" ) +
  "</li>" );
$( "ul" ).has( "li" ).addClass( "full" );
</script>
​
</body>
</html>
```
     */
    has(selector: string | Element): this;
    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param className The class name to search for.
     * @see \`{@link https://api.jquery.com/hasClass/ }\`
     * @since 1.2
     * @example ​ ````Looks for the paragraph that contains &#39;selected&#39; as a class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hasClass demo</title>
  <style>
  p {
    margin: 8px;
    font-size: 16px;
  }
  .selected {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>This paragraph is black and is the first paragraph.</p>
<p class="selected">This paragraph is red and is the second paragraph.</p>
<div id="result1">First paragraph has selected class: </div>
<div id="result2">Second paragraph has selected class: </div>
<div id="result3">At least one paragraph has selected class: </div>
​
<script>
$( "#result1" ).append( $( "p:first" ).hasClass( "selected" ).toString() );
$( "#result2" ).append( $( "p:last" ).hasClass( "selected" ).toString() );
$( "#result3" ).append( $( "p" ).hasClass( "selected" ).toString() ) ;
</script>
​
</body>
</html>
```
     */
    hasClass(className: string): boolean;
    /**
     * Set the CSS height of every matched element.
     *
     * @param value An integer representing the number of pixels, or an integer with an optional unit of measure
     *              appended (as a string).
     *              A function returning the height to set. Receives the index position of the element in the set and
     *              the old height as arguments. Within the function, this refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/height/ }\`
     * @since 1.0
     * @since 1.4.1
     * @example ​ ````To set the height of each div on click to 30px plus a color change.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>height demo</title>
  <style>
  div {
    width: 50px;
    height: 70px;
    float: left;
    margin: 5px;
    background: rgb(255,140,0);
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
$( "div" ).one( "click", function() {
  $( this ).height( 30 ).css({
    cursor: "auto",
    backgroundColor: "green"
  });
});
</script>
​
</body>
</html>
```
     */
    height(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements.
     *
     * @see \`{@link https://api.jquery.com/height/ }\`
     * @since 1.0
     * @example ​ ````Show various heights.  Note the values are from the iframe so might be smaller than you expected.  The yellow highlight shows the iframe body.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>height demo</title>
  <style>
  body {
    background: yellow;
  }
  button {
    font-size: 12px;
    margin: 2px;
  }
  p {
    width: 150px;
    border: 1px red solid;
  }
  div {
    color: red;
    font-weight: bold;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="getp">Get Paragraph Height</button>
<button id="getd">Get Document Height</button>
<button id="getw">Get Window Height</button>
​
<div>&nbsp;</div>
<p>
  Sample paragraph to test height
</p>
​
<script>
function showHeight( element, height ) {
  $( "div" ).text( "The height for the " + element + " is " + height + "px." );
}
$( "#getp" ).click(function() {
  showHeight( "paragraph", $( "p" ).height() );
});
$( "#getd" ).click(function() {
  showHeight( "document", $( document ).height() );
});
$( "#getw" ).click(function() {
  showHeight( "window", $( window ).height() );
});
</script>
​
</body>
</html>
```
     */
    height(): number | undefined;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/hide/ }\`
     * @since 1.4.3
     */
    hide(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete _&#x40;param_ `easing_complete`
     * <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/hide/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all spans (words in this case) to hide fastly, completing each animation within 200 milliseconds. Once each animation is done, it starts the next one.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hide demo</title>
  <style>
  span {
    background: #def3ca;
    padding: 3px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="hider">Hide</button>
<button id="shower">Show</button>
<div>
  <span>Once</span> <span>upon</span> <span>a</span>
  <span>time</span> <span>there</span> <span>were</span>
  <span>three</span> <span>programmers...</span>
</div>
​
<script>
$( "#hider" ).click(function() {
  $( "span:last-child" ).hide( "fast", function() {
    // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
  });
});
$( "#shower" ).click(function() {
  $( "span" ).show( 2000 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Hides the divs when clicked over 2 seconds, then removes the div element when its hidden.  Try clicking on more than one box at a time.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hide demo</title>
  <style>
  div {
    background: #ece023;
    width: 30px;
    height: 40px;
    margin: 2px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
​
<script>
for ( var i = 0; i < 5; i++ ) {
  $( "<div>" ).appendTo( document.body );
}
$( "div" ).click(function() {
  $( this ).hide( 2000, function() {
    $( this ).remove();
  });
});
</script>
​
</body>
</html>
```
     */
    hide(duration: JQuery.Duration, easing_complete: string | ((this: TElement) => void)): this;
    /**
     * Hide the matched elements.
     *
     * @param duration_complete_options _&#x40;param_ `duration_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/hide/ }\`
     * @since 1.0
     * @example ​ ````Hides all paragraphs then the link on click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hide demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<a href="#">Click to hide me too</a>
<p>Here is another paragraph</p>
​
<script>
$( "p" ).hide();
$( "a" ).click(function( event ) {
  event.preventDefault();
  $( this ).hide();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animates all shown paragraphs to hide slowly, completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hide demo</title>
  <style>
  p {
    background: #dad;
    font-weight: bold;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Hide 'em</button>
<p>Hiya</p>
<p>Such interesting text, eh?</p>
​
<script>
$( "button" ).click(function() {
  $( "p" ).hide( "slow" );
});
</script>
​
</body>
</html>
```
     */
    hide(duration_complete_options?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and
     * leaves the elements.
     *
     * @param handlerInOut A function to execute when the mouse pointer enters or leaves the element.
     * @param handlerOut A function to execute when the mouse pointer leaves the element.
     * @see \`{@link https://api.jquery.com/hover/ }\`
     * @since 1.0
     * @since 1.4
     * @deprecated ​ Deprecated.
     *
     * **Cause**: The `.hover()` method is a shorthand for the use of the `mouseover`/`mouseout` events. It is often a poor user interface choice because it does not allow for any small amounts of delay between when the mouse enters or exits an area and when the event fires. This can make it quite difficult to use with UI widgets such as drop-down menus. For more information on the problems of hovering, see the \`{@link http://cherne.net/brian/resources/jquery.hoverIntent.html hoverIntent plugin}\`.
     *
     * **Solution**: Review uses of `.hover()` to determine if they are appropriate, and consider use of plugins such as `hoverIntent` as an alternative. The direct replacement for `.hover(fn1, fn2)`, is `.on("mouseenter", fn1).on("mouseleave", fn2)`.
     * @example ​ ````To add a special style to list items that are being hovered over, try:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hover demo</title>
  <style>
  ul {
    margin-left: 20px;
    color: blue;
  }
  li {
    cursor: default;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li class="fade">Chips</li>
  <li class="fade">Socks</li>
</ul>
​
<script>
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
​
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To add a special style to table cells that are being hovered over, try:
```javascript
$( "td" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
```
     * @example ​ ````To unbind the above example use:
```javascript
$( "td" ).off( "mouseenter mouseleave" );
```
     * @example ​ ````Slide the next sibling LI up or down on hover, and toggle a class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hover demo</title>
  <style>
  ul {
    margin-left: 20px;
    color: blue;
  }
  li {
    cursor: default;
  }
  li.active {
    background: black;
    color: white;
  }
  span {
    color:red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li>Milk</li>
  <li>White</li>
  <li>Carrots</li>
  <li>Orange</li>
  <li>Broccoli</li>
  <li>Green</li>
</ul>
​
<script>
$( "li" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });
</script>
​
</body>
</html>
```
     */
    // HACK: The type parameter T is not used but ensures the 'event' callback parameter is typed correctly.
    // tslint:disable-next-line:no-unnecessary-generics
    hover<T>(handlerInOut: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false,
             handlerOut?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     *                   A function returning the HTML content to set. Receives the index position of the element in the set
     *                   and the old HTML value as arguments. jQuery empties the element before calling the function; use the
     *                   oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/html/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Add some html to each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>html demo</title>
  <style>
  .red {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>Hello</span>
<div></div>
<div></div>
<div></div>
​
<script>
$( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Add some html to each div then immediately do further manipulations to the inserted html.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>html demo</title>
  <style>
  div {
    color: blue;
    font-size: 18px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
​
<script>
$( "div" ).html( "<b>Wow!</b> Such excitement..." );
$( "div b" )
  .append( document.createTextNode( "!!!" ) )
  .css( "color", "red" );
</script>
​
</body>
</html>
```
     */
    html(htmlString: JQuery.htmlString | ((this: TElement, index: number, oldhtml: JQuery.htmlString) => JQuery.htmlString)): this;
    /**
     * Get the HTML contents of the first element in the set of matched elements.
     *
     * @see \`{@link https://api.jquery.com/html/ }\`
     * @since 1.0
     * @example ​ ````Click a paragraph to convert it from html to text.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>html demo</title>
  <style>
  p {
    margin: 8px;
    font-size: 20px;
    color: blue;
    cursor: pointer;
  }
  b {
    text-decoration: underline;
  }
  button {
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  <b>Click</b> to change the <span id="tag">html</span>
</p>
<p>
  to a <span id="text">text</span> node.
</p>
<p>
  This <button name="nada">button</button> does nothing.
</p>
​
<script>
$( "p" ).click(function() {
  var htmlString = $( this ).html();
  $( this ).text( htmlString );
});
</script>
​
</body>
</html>
```
     */
    html(): string;
    /**
     * Search for a given element from among the matched elements.
     *
     * @param element The DOM element or first element within the jQuery object to look for.
     *                A selector representing a jQuery collection in which to look for an element.
     * @see \`{@link https://api.jquery.com/index/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````On click, returns the index (zero-based) of that div in the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    background: yellow;
    margin: 5px;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>Click a div!</span>
<div>First div</div>
<div>Second div</div>
<div>Third div</div>
​
<script>
$( "div" ).click(function() {
  // `this` is the DOM element that was clicked
  var index = $( "div" ).index( this );
  $( "span" ).text( "That was div index #" + index );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Returns the index for the element with ID bar.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    font-weight: bold;
    color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
<div></div>
​
<script>
var listItem = $( "#bar" );
$( "div" ).html( "Index: " + $( "li" ).index( listItem ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Returns the index for the first item in the jQuery collection.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    font-weight: bold;
    color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
<div></div>
​
<script>
var listItems = $( "li:gt(0)" );
$( "div" ).html( "Index: " + $( "li" ).index( listItems ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Returns the index for the element with ID bar in relation to all &lt;li&gt; elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    font-weight: bold;
    color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
<div></div>
​
<script>
$( "div" ).html( "Index: " +  $( "#bar" ).index( "li" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Returns the index for the element with ID bar in relation to its siblings.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    font-weight: bold;
    color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
<div></div>
​
<script>
var barIndex = $( "#bar" ).index();
$( "div" ).html( "Index: " +  barIndex );
</script>
​
</body>
</html>
```
     * @example ​ ````Returns -1, as there is no element with ID foobar.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>index demo</title>
  <style>
  div {
    font-weight: bold;
    color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
<div></div>
​
<script>
var foobar = $( "li" ).index( $( "#foobar" ) );
$( "div" ).html( "Index: " + foobar );
</script>
​
</body>
</html>
```
     */
    index(element?: JQuery.Selector | Element | JQuery): number;
    /**
     * Set the CSS inner height of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the inner height (including padding but not border) to set. Receives the index
     *              position of the element in the set and the old inner height as arguments. Within the function, this
     *              refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/innerHeight/ }\`
     * @since 1.8.0
     * @example ​ ````Change the inner height of each div the first time it is clicked (and change its color).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>innerHeight demo</title>
  <style>
div {
  width: 60px;
  padding: 10px;
  height: 70px;
  float: left;
  margin: 5px;
  background: red;
  cursor: pointer;
}
.mod {
  background: blue;
  cursor: default;
}
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
​
<script>
var modHeight = 70;
$( "div" ).one( "click", function() {
  $( this ).innerHeight( modHeight ).addClass( "mod" );
  modHeight -= 8;
});
</script>
​
</body>
</html>
```
     */
    innerHeight(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see \`{@link https://api.jquery.com/innerHeight/ }\`
     * @since 1.2.6
     * @example ​ ````Get the innerHeight of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>innerHeight demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text( "innerHeight:" + p.innerHeight() );
</script>
​
</body>
</html>
```
     */
    innerHeight(): number | undefined;
    /**
     * Set the CSS inner width of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the inner width (including padding but not border) to set. Receives the index
     *              position of the element in the set and the old inner width as arguments. Within the function, this
     *              refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/innerWidth/ }\`
     * @since 1.8.0
     * @example ​ ````Change the inner width of each div the first time it is clicked (and change its color).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>innerWidth demo</title>
  <style>
div {
width: 60px;
padding: 10px;
height: 50px;
float: left;
margin: 5px;
background: red;
cursor: pointer;
}
.mod {
background: blue;
cursor: default;
}
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
​
<script>
var modWidth = 60;
$( "div" ).one( "click", function() {
$( this ).innerWidth( modWidth ).addClass( "mod" );
modWidth -= 8;
});
</script>
​
</body>
</html>
```
     */
    innerWidth(value: string | number | ((this: TElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed inner width for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see \`{@link https://api.jquery.com/innerWidth/ }\`
     * @since 1.2.6
     * @example ​ ````Get the innerWidth of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>innerWidth demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text( "innerWidth:" + p.innerWidth() );
</script>
​
</body>
</html>
```
     */
    innerWidth(): number | undefined;
    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted after the element(s) specified by this parameter.
     * @see \`{@link https://api.jquery.com/insertAfter/ }\`
     * @since 1.0
     * @example ​ ````Insert all paragraphs after an element with id of &quot;foo&quot;. Same as $( &quot;#foo&quot; ).after( &quot;p&quot; )
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>insertAfter demo</title>
  <style>
  #foo {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p> is what I said... </p>
<div id="foo">FOO!</div>
​
<script>
$( "p" ).insertAfter( "#foo" );
</script>
​
</body>
</html>
```
     */
    insertAfter(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Node> | JQuery<Node>): this;
    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted before the element(s) specified by this parameter.
     * @see \`{@link https://api.jquery.com/insertBefore/ }\`
     * @since 1.0
     * @example ​ ````Insert all paragraphs before an element with id of &quot;foo&quot;. Same as $( &quot;#foo&quot; ).before( &quot;p&quot; )
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>insertBefore demo</title>
  <style>
  #foo {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="foo">FOO!</div>
<p>I would like to say: </p>
​
<script>
$( "p" ).insertBefore( "#foo" );
</script>
​
</body>
</html>
```
     */
    insertBefore(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Node> | JQuery<Node>): this;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return
     * true if at least one of these elements matches the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A function used as a test for every element in the set. It accepts two arguments, index, which is
     *                 the element's index in the jQuery collection, and element, which is the DOM element. Within the
     *                 function, this refers to the current DOM element.
     *                 An existing jQuery object to match the current set of elements against.
     *                 One or more elements to match the current set of elements against.
     * @see \`{@link https://api.jquery.com/is/ }\`
     * @since 1.0
     * @since 1.6
     * @example ​ ````Shows a few ways is() can be used inside an event handler.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>is demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
    border: 4px outset;
    background: green;
    text-align: center;
    font-weight: bolder;
    cursor: pointer;
  }
  .blue {
    background: blue;
  }
  .red {
    background: red;
  }
  span {
    color: white;
    font-size: 16px;
  }
  p {
    color: red;
    font-weight: bolder;
    background: yellow;
    margin: 3px;
    clear: left;
    display: none;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div class="blue"></div>
<div></div>
<div class="red"></div>
<div><br/><span>Peter</span></div>
<div class="blue"></div>
<p>&nbsp;</p>
​
<script>
$( "div" ).one( "click", function() {
  if ( $( this ).is( ":first-child" ) ) {
    $( "p" ).text( "It's the first div." );
  } else if ( $( this ).is( ".blue,.red" ) ) {
    $( "p" ).text( "It's a blue or red div." );
  } else if ( $( this ).is( ":contains('Peter')" ) ) {
    $( "p" ).text( "It's Peter!" );
  } else {
    $( "p" ).html( "It's nothing <em>special</em>." );
  }
  $( "p" ).hide().slideDown( "slow" );
  $( this ).css({
    "border-style": "inset",
    cursor: "default"
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Returns true, because the parent of the input is a form element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>is demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <input type="checkbox">
</form>
<div></div>
​
<script>
var isFormParent = $( "input[type='checkbox']" ).parent().is( "form" );
$( "div" ).text( "isFormParent = " + isFormParent );
</script>
​
</body>
</html>
```
     * @example ​ ````Returns false, because the parent of the input is a p element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>is demo</title>
  <style>
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <p><input type="checkbox"></p>
</form>
<div></div>
​
<script>
var isFormParent = $( "input[type='checkbox']" ).parent().is( "form" );
$( "div" ).text( "isFormParent = " + isFormParent );
</script>
​
</body>
</html>
```
     * @example ​ ````Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>is demo</title>
  <style>
  li {
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul id="browsers">
  <li>Chrome</li>
  <li>Safari</li>
  <li>Firefox</li>
  <li>Opera</li>
</ul>
​
<script>
var alt = $( "#browsers li:nth-child(2n)" ).css( "background", "#0ff" );
$( "li" ).click(function() {
  var li = $( this );
  if ( li.is( alt ) ) {
    li.slideUp();
  } else {
    li.css( "background", "red" );
  }
});
</script>
​
</body>
</html>
```
     * @example ​ ````An alternate way to achieve the above example using an element rather than a jQuery object. Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>is demo</title>
  <style>
  li {
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul id="browsers">
  <li>Chrome</li>
  <li>Safari</li>
  <li>Firefox</li>
  <li>Opera</li>
</ul>
​
<script>
var alt = $( "#browsers li:nth-child(2n)" ).css( "background", "#0ff" );
$( "li" ).click(function() {
  if ( alt.is( this ) ) {
    $( this ).slideUp();
  } else {
    $( this ).css( "background", "red" );
  }
});
</script>
​
</body>
</html>
```
     */
    is(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): boolean;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keydown/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    keydown<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keydown/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the event object for the keydown handler when a key is pressed in the input.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>keydown demo</title>
  <style>
  fieldset {
    margin-bottom: 1em;
  }
  input {
    display: block;
    margin-bottom: .25em;
  }
  #print-output {
    width: 100%;
  }
  .print-output-line {
    white-space: pre;
    padding: 5px;
    font-family: monaco, monospace;
    font-size: .7em;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <fieldset>
    <label for="target">Type Something:</label>
    <input id="target" type="text">
  </fieldset>
</form>
<button id="other">
  Trigger the handler
</button>
<script type="text/javascript" src="/resources/events.js"></script>
​
<script>
var xTriggered = 0;
$( "#target" ).keydown(function( event ) {
  if ( event.which == 13 ) {
   event.preventDefault();
  }
  xTriggered++;
  var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  $.print( event );
});
​
$( "#other" ).click(function() {
  $( "#target" ).keydown();
});
</script>
​
</body>
</html>
```
     */
    keydown(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keypress/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    keypress<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keypress/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the event object when a key is pressed in the input. Note: This demo relies on a simple $.print() plugin (https://api.jquery.com/resources/events.js) for the event object&#39;s output.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>keypress demo</title>
  <style>
  fieldset {
    margin-bottom: 1em;
  }
  input {
    display: block;
    margin-bottom: .25em;
  }
  #print-output {
    width: 100%;
  }
  .print-output-line {
    white-space: pre;
    padding: 5px;
    font-family: monaco, monospace;
    font-size: .7em;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <fieldset>
    <label for="target">Type Something:</label>
    <input id="target" type="text">
  </fieldset>
</form>
<button id="other">
  Trigger the handler
</button>
<script src="/resources/events.js"></script>
​
<script>
var xTriggered = 0;
$( "#target" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  xTriggered++;
  var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  $.print( event );
});
​
$( "#other" ).click(function() {
  $( "#target" ).keypress();
});
</script>
​
</body>
</html>
```
     */
    keypress(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keyup/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    keyup<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/keyup/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the event object for the keyup handler (using a simple $.print plugin) when a key is released in the input.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>keyup demo</title>
  <style>
  fieldset {
    margin-bottom: 1em;
  }
  input {
    display: block;
    margin-bottom: .25em;
  }
  #print-output {
    width: 100%;
  }
  .print-output-line {
    white-space: pre;
    padding: 5px;
    font-family: monaco, monospace;
    font-size: .7em;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <fieldset>
    <label for="target">Type Something:</label>
    <input id="target" type="text">
  </fieldset>
</form>
<button id="other">
  Trigger the handler
</button>
<script type="text/javascript" src="/resources/events.js"></script>
​
<script>
var xTriggered = 0;
$( "#target" ).keyup(function( event ) {
  xTriggered++;
  var msg = "Handler for .keyup() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  $.print( event );
}).keydown(function( event ) {
  if ( event.which == 13 ) {
    event.preventDefault();
  }
});
​
$( "#other").click(function() {
  $( "#target" ).keyup();
});
</script>
​
</body>
</html>
```
     */
    keyup(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Reduce the set of matched elements to the final one in the set.
     *
     * @see \`{@link https://api.jquery.com/last/ }\`
     * @since 1.4
     * @example ​ ````Highlight the last span in a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>last demo</title>
  <style>
  .highlight {
    background-color: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><span>Look:</span> <span>This is some text in a paragraph.</span> <span>This is a note about it.</span></p>
​
<script>
$( "p span" ).last().addClass( "highlight" );
</script>
​
</body>
</html>
```
     */
    last(): this;
    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param complete A callback function that is executed when the request completes.
     * @see \`{@link https://api.jquery.com/load/ }\`
     * @since 1.0
     * @example ​ ````Same as above, but will POST the additional parameters to the server and a callback that is executed when the server is finished responding.
```javascript
$( "#feeds" ).load( "feeds.php", { limit: 25 }, function() {
  alert( "The last 25 entries in the feed have been loaded" );
});
```
     */
    load(url: string,
         data: string | JQuery.PlainObject,
         complete: (this: TElement, responseText: string, textStatus: JQuery.Ajax.TextStatus, jqXHR: JQuery.jqXHR) => void): this;
    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param complete_data _&#x40;param_ `complete_data`
     * <br>
     * * `complete` — A callback function that is executed when the request completes. <br>
     * * `data` — A plain object or string that is sent to the server with the request.
     * @see \`{@link https://api.jquery.com/load/ }\`
     * @since 1.0
     * @example ​ ````Load another page&#39;s list items into an ordered list.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>load demo</title>
  <style>
  body {
    font-size: 12px;
    font-family: Arial;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<b>Projects:</b>
<ol id="new-projects"></ol>
​
<script>
$( "#new-projects" ).load( "/resources/load.html #projects li" );
</script>
​
</body>
</html>
```
     * @example ​ ````Display a notice if the Ajax request encounters an error.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>load demo</title>
  <style>
  body {
    font-size: 12px;
    font-family: Arial;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<b>Successful Response (should be blank):</b>
<div id="success"></div>
<b>Error Response:</b>
<div id="error"></div>
​
<script>
$( "#success" ).load( "/not-here.php", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
  }
});
</script>
​
</body>
</html>
```
     * @example ​ ````Load the feeds.html file into the div with the ID of feeds.
```javascript
$( "#feeds" ).load( "feeds.html" );
```
     * @example ​ ````pass arrays of data to the server.
```javascript
$( "#objectID" ).load( "test.php", { "choices[]": [ "Jon", "Susan" ] } );
```
     */
    load(url: string,
         complete_data?: ((this: TElement, responseText: string, textStatus: JQuery.Ajax.TextStatus, jqXHR: JQuery.jqXHR) => void) | string | JQuery.PlainObject): this;
    /**
     * Pass each element in the current matched set through a function, producing a new jQuery object
     * containing the return values.
     *
     * @param callback A function object that will be invoked for each element in the current set.
     * @see \`{@link https://api.jquery.com/map/ }\`
     * @since 1.2
     * @example ​ ````Build a list of all the values within a form.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>map demo</title>
  <style>
  p {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><b>Values: </b></p>
<form>
  <input type="text" name="name" value="John">
  <input type="text" name="password" value="password">
  <input type="text" name="url" value="https://johnresig.com/">
</form>
​
<script>
$( "p" )
  .append( $( "input" ).map(function() {
    return $( this ).val();
  })
  .get()
  .join( ", " ) );
</script>
​
</body>
</html>
```
     * @example ​ ````A contrived example to show some functionality.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>map demo</title>
  <style>
  body {
    font-size: 16px;
  }
  ul {
    float: left;
    margin: 0 30px;
    color: blue;
  }
  #results {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ul>
<ul id="results">
</ul>
​
<script>
var mappedItems = $( "li" ).map(function( index ) {
  var replacement = $( "<li>" ).text( $( this ).text() ).get( 0 );
  if ( index === 0 ) {
​
    // Make the first item all caps
    $( replacement ).text( $( replacement ).text().toUpperCase() );
  } else if ( index === 1 || index === 3 ) {
​
    // Delete the second and fourth items
    replacement = null;
  } else if ( index === 2 ) {
​
    // Make two of the third item and add some text
    replacement = [ replacement, $( "<li>" ).get( 0 ) ];
    $( replacement[ 0 ] ).append( "<b> - A</b>" );
    $( replacement[ 1 ] ).append( "Extra <b> - B</b>" );
  }
​
  // Replacement will be a dom element, null,
  // or an array of dom elements
  return replacement;
});
$( "#results" ).append( mappedItems );
</script>
​
</body>
</html>
```
     * @example ​ ````Equalize the heights of the divs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>map demo</title>
  <style>
  div {
    width: 40px;
    float: left;
  }
  input {
    clear: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input type="button" value="equalize div heights">
<div style="background: red; height: 40px; "></div>
<div style="background: green; height: 70px;"></div>
<div style="background: blue; height: 50px; "></div>
​
<script>
$.fn.equalizeHeights = function() {
  var maxHeight = this.map(function( i, e ) {
    return $( e ).height();
  }).get();
  return this.height( Math.max.apply( this, maxHeight ) );
};
​
$( "input" ).click(function() {
  $( "div" ).equalizeHeights();
});
</script>
​
</body>
</html>
```
     */
    map<TReturn>(callback: (this: TElement, index: number, domElement: TElement) => JQuery.TypeOrArray<TReturn> | null | undefined): JQuery<TReturn>;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mousedown/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mousedown<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mousedown/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show texts when mouseup and mousedown event triggering.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mousedown demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Press mouse and release here.</p>
​
<script>
$( "p" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });
</script>
​
</body>
</html>
```
     */
    mousedown(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseenter/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mouseenter<TData>(eventData: TData,
                      handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseenter/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show texts when mouseenter and mouseout event triggering.
    mouseover fires when the pointer moves into the child element as well, while mouseenter fires only when the pointer moves into the bound element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mouseenter demo</title>
  <style>
  div.out {
    width: 40%;
    height: 120px;
    margin: 0 15px;
    background-color: #d6edfc;
    float: left;
  }
  div.in {
    width: 60%;
    height: 60%;
    background-color: #fc0;
    margin: 10px auto;
  }
  p {
    line-height: 1em;
    margin: 0;
    padding: 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="out overout">
  <p>move your mouse</p>
  <div class="in overout"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
​
<div class="out enterleave">
  <p>move your mouse</p>
  <div class="in enterleave"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
​
<script>
var i = 0;
$( "div.overout" )
  .mouseover(function() {
    $( "p:first", this ).text( "mouse over" );
    $( "p:last", this ).text( ++i );
  })
  .mouseout(function() {
    $( "p:first", this ).text( "mouse out" );
  });
​
var n = 0;
$( "div.enterleave" )
  .mouseenter(function() {
    $( "p:first", this ).text( "mouse enter" );
    $( "p:last", this ).text( ++n );
  })
  .mouseleave(function() {
    $( "p:first", this ).text( "mouse leave" );
  });
</script>
​
</body>
</html>
```
     */
    mouseenter(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseleave/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mouseleave<TData>(eventData: TData,
                      handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseleave/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show number of times mouseout and mouseleave events are triggered. mouseout fires when the pointer moves out of child element as well, while mouseleave fires only when the pointer moves out of the bound element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mouseleave demo</title>
  <style>
  div.out {
    width: 40%;
    height: 120px;
    margin: 0 15px;
    background-color: #d6edfc;
    float: left;
  }
  div.in {
    width: 60%;
    height: 60%;
    background-color: #fc0;
    margin: 10px auto;
  }
  p {
    line-height: 1em;
    margin: 0;
    padding: 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="out overout">
  <p>move your mouse</p>
  <div class="in overout"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
<div class="out enterleave">
  <p>move your mouse</p>
  <div class="in enterleave"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
​
<script>
var i = 0;
$( "div.overout" )
  .mouseover(function() {
    $( "p:first", this ).text( "mouse over" );
  })
  .mouseout(function() {
    $( "p:first", this ).text( "mouse out" );
    $( "p:last", this ).text( ++i );
  });
​
var n = 0;
$( "div.enterleave" )
  .mouseenter(function() {
    $( "p:first", this ).text( "mouse enter" );
  })
  .mouseleave(function() {
    $( "p:first", this ).text( "mouse leave" );
    $( "p:last", this ).text( ++n );
  });
</script>
​
</body>
</html>
```
     */
    mouseleave(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mousemove/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mousemove<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mousemove/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the mouse coordinates when the mouse is moved over the yellow div.  Coordinates are relative to the window, which in this case is the iframe.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mousemove demo</title>
  <style>
  div {
    width: 220px;
    height: 170px;
    margin: 10px 50px 10px 10px;
    background: yellow;
    border: 2px groove;
    float: right;
  }
  p {
    margin: 0;
    margin-left: 10px;
    color: red;
    width: 220px;
    height: 120px;
    padding-top: 70px;
    float: left;
    font-size: 14px;
  }
  span {
    display: block;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  <span>Move the mouse over the div.</span>
  <span>&nbsp;</span>
</p>
<div></div>
​
<script>
$( "div" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( "span:first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( "span:last" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
});
</script>
​
</body>
</html>
```
     */
    mousemove(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseout/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mouseout<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseout/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the number of times mouseout and mouseleave events are triggered.
  mouseout fires when the pointer moves out of the child element as well, while mouseleave fires only when the pointer moves out of the bound element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mouseout demo</title>
  <style>
  div.out {
    width: 40%;
    height: 120px;
    margin: 0 15px;
    background-color: #d6edfc;
    float: left;
  }
  div.in {
    width: 60%;
    height: 60%;
    background-color: #fc0;
    margin: 10px auto;
  }
  p {
    line-height: 1em;
    margin: 0;
    padding: 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="out overout">
  <p>move your mouse</p>
  <div class="in overout"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
​
<div class="out enterleave">
  <p>move your mouse</p>
  <div class="in enterleave"><p>move your mouse</p><p>0</p></div>
  <p>0</p>
</div>
​
<script>
var i = 0;
$( "div.overout" )
  .mouseout(function() {
    $( "p:first", this ).text( "mouse out" );
    $( "p:last", this ).text( ++i );
  })
  .mouseover(function() {
    $( "p:first", this ).text( "mouse over" );
  });
​
var n = 0;
$( "div.enterleave" )
  .on( "mouseenter", function() {
    $( "p:first", this ).text( "mouse enter" );
  })
  .on( "mouseleave", function() {
    $( "p:first", this ).text( "mouse leave" );
    $( "p:last", this ).text( ++n );
  });
</script>
​
</body>
</html>
```
     */
    mouseout(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseover/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mouseover<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseover/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show the number of times mouseover and mouseenter events are triggered.
mouseover fires when the pointer moves into the child element as well, while mouseenter fires only when the pointer moves into the bound element.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mouseover demo</title>
  <style>
  div.out {
    width: 40%;
    height: 120px;
    margin: 0 15px;
    background-color: #d6edfc;
    float: left;
  }
  div.in {
    width: 60%;
    height: 60%;
    background-color: #fc0;
    margin: 10px auto;
  }
  p {
    line-height: 1em;
    margin: 0;
    padding: 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="out overout">
  <span>move your mouse</span>
  <div class="in">
  </div>
</div>
​
<div class="out enterleave">
  <span>move your mouse</span>
  <div class="in">
  </div>
</div>
​
<script>
var i = 0;
$( "div.overout" )
  .mouseover(function() {
    i += 1;
    $( this ).find( "span" ).text( "mouse over x " + i );
  })
  .mouseout(function() {
    $( this ).find( "span" ).text( "mouse out " );
  });
​
var n = 0;
$( "div.enterleave" )
  .mouseenter(function() {
    n += 1;
    $( this ).find( "span" ).text( "mouse enter x " + n );
  })
  .mouseleave(function() {
    $( this ).find( "span" ).text( "mouse leave" );
  });
</script>
​
</body>
</html>
```
     */
    mouseover(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseup/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    mouseup<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/mouseup/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````Show texts when mouseup and mousedown event triggering.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>mouseup demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Press mouse and release here.</p>
​
<script>
$( "p" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });
</script>
​
</body>
</html>
```
     */
    mouseup(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/next/ }\`
     * @since 1.0
     * @example ​ ````Find the very next sibling of each disabled button and change its text &quot;this button is disabled&quot;.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>next demo</title>
  <style>
  span {
    color: blue;
    font-weight: bold;
  }
  button {
    width: 100px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div><button disabled="disabled">First</button> - <span></span></div>
<div><button>Second</button> - <span></span></div>
<div><button disabled="disabled">Third</button> - <span></span></div>
​
<script>
$( "button[disabled]" ).next().text( "this button is disabled" );
</script>
​
</body>
</html>
```
     * @example ​ ````Find the very next sibling of each paragraph. Keep only the ones with a class &quot;selected&quot;.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>next demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p class="selected">Hello Again</p>
<div><span>And Again</span></div>
​
<script>
$( "p" ).next( ".selected" ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     */
    next(selector?: JQuery.Selector): this;
    /**
     * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/nextAll/ }\`
     * @since 1.2
     * @example ​ ````Locate all the divs after the first and give them a class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>nextAll demo</title>
  <style>
  div {
    width: 80px;
    height: 80px;
    background: #abc;
    border: 2px solid black;
    margin: 10px;
    float: left;
  }
  div.after {
    border-color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>first</div>
<div>sibling<div>child</div></div>
<div>sibling</div>
<div>sibling</div>​
<script>
$( "div:first" ).nextAll().addClass( "after" );
</script>
​
</body>
</html>
```
     * @example ​ ````Locate all the paragraphs after the second child in the body and give them a class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>nextAll demo</title>
  <style>
  div, p {
    width: 60px;
    height: 60px;
    background: #abc;
    border: 2px solid black;
    margin: 10px;
    float: left;
  }
  .after {
    border-color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>p</p>
<div>div</div>
<p>p</p>
<p>p</p>
<div>div</div>
<p>p</p>
<div>div</div>
​
<script>
$( ":nth-child(1)" ).nextAll( "p" ).addClass( "after" );
</script>
​
</body>
</html>
```
     */
    nextAll(selector?: string): this;
    /**
     * Get all following siblings of each element up to but not including the element matched by the
     * selector, DOM node, or jQuery object passed.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
     *                 A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/nextUntil/ }\`
     * @since 1.4
     * @since 1.6
     * @example ​ ````Find the siblings that follow &lt;dt id=&quot;term-2&quot;&gt; up to the next &lt;dt&gt; and give them a red background color. Also, find &lt;dd&gt; siblings that follow &lt;dt id=&quot;term-1&quot;&gt; up to &lt;dt id=&quot;term-3&quot;&gt; and give them a green text color.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>nextUntil demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<dl>
  <dt id="term-1">term 1</dt>
  <dd>definition 1-a</dd>
  <dd>definition 1-b</dd>
  <dd>definition 1-c</dd>
  <dd>definition 1-d</dd>
  <dt id="term-2">term 2</dt>
  <dd>definition 2-a</dd>
  <dd>definition 2-b</dd>
  <dd>definition 2-c</dd>
  <dt id="term-3">term 3</dt>
  <dd>definition 3-a</dd>
  <dd>definition 3-b</dd>
</dl>
​
<script>
$( "#term-2" )
  .nextUntil( "dt" )
    .css( "background-color", "red" );
var term3 = document.getElementById( "term-3" );
$( "#term-1" )
  .nextUntil( term3, "dd" )
    .css( "color", "green" );
</script>
​
</body>
</html>
```
     */
    nextUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Remove elements from the set of matched elements.
     *
     * @param selector A string containing a selector expression, a DOM element, or an array of elements to match against the set.
     *                 A function used as a test for each element in the set. It accepts two arguments, index, which is the
     *                 element's index in the jQuery collection, and element, which is the DOM element. Within the
     *                 function, this refers to the current DOM element.
     *                 An existing jQuery object to match the current set of elements against.
     * @see \`{@link https://api.jquery.com/not/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Adds a border to divs that are not green or blue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>not demo</title>
  <style>
  div {
    width: 50px;
    height: 50px;
    margin: 10px;
    float: left;
    background: yellow;
    border: 2px solid white;
  }
  .green {
    background: #8f8;
  }
  .gray {
    background: #ccc;
  }
  #blueone {
    background: #99f;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div id="blueone"></div>
<div></div>
<div class="green"></div>
<div class="green"></div>
<div class="gray"></div>
<div></div>
​
<script>
$( "div" ).not( ".green, #blueone" )
  .css( "border-color", "red" );
</script>
​
</body>
</html>
```
     * @example ​ ````Removes the element with the ID &quot;selected&quot; from the set of all paragraphs.
```javascript
$( "p" ).not( $( "#selected" )[ 0 ] );
```
     * @example ​ ````Removes the element with the ID &quot;selected&quot; from the set of all paragraphs.
```javascript
$( "p" ).not( "#selected" );
```
     * @example ​ ````Removes all elements that match &quot;div p.selected&quot; from the total set of all paragraphs.
```javascript
$( "p" ).not( $( "div p.selected" ) );
```
     */
    not(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as
     *               "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/off/ }\`
     * @since 1.7
     * @example ​ ````Add and remove event handlers on the colored button.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>off demo</title>
  <style>
  button {
    margin: 5px;
  }
  button#theone {
    color: red;
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="theone">Does nothing...</button>
<button id="bind">Add Click</button>
<button id="unbind">Remove Click</button>
<div style="display:none;">Click!</div>
​
<script>
function flash() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .on( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "body" )
    .off( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Does nothing..." );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Remove just one previously bound handler by passing it as the third argument:
```javascript
var foo = function() {
  // Code to handle some kind of event
};
​
// ... Now foo will be called when paragraphs are clicked ...
$( "body" ).on( "click", "p", foo );
​
// ... Foo will no longer be called.
$( "body" ).off( "click", "p", foo );
```
     */
    off(events: string, selector: JQuery.Selector, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as
     *               "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector_handler _&#x40;param_ `selector_handler`
     * <br>
     * * `selector` — A selector which should match the one originally passed to `.on()` when attaching event handlers. <br>
     * * `handler` — A handler function previously attached for the event(s), or the special value `false`.
     * @see \`{@link https://api.jquery.com/off/ }\`
     * @since 1.7
     * @example ​ ````Remove all delegated click handlers from all paragraphs:
```javascript
$( "p" ).off( "click", "**" );
```
     * @example ​ ````Unbind all delegated event handlers by their namespace:
```javascript
var validate = function() {
  // Code to validate form entries
};
​
// Delegate events under the ".validator" namespace
$( "form" ).on( "click.validator", "button", validate );
​
$( "form" ).on( "keypress.validator", "input[type='text']", validate );
​
// Remove event handlers in the ".validator" namespace
$( "form" ).off( ".validator" );
```
     */
    off(events: string, selector_handler?: JQuery.Selector | JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @see \`{@link https://api.jquery.com/off/ }\`
     * @since 1.7
     */
    off(events: JQuery.PlainObject<JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false>, selector?: JQuery.Selector): this;
    /**
     * Remove an event handler.
     *
     * @param event A jQuery.Event object.
     * @see \`{@link https://api.jquery.com/off/ }\`
     * @since 1.7
     * @example ​ ````Remove all event handlers from all paragraphs:
```javascript
$( "p" ).off();
```
     */
    off(event?: JQuery.Event<TElement>): this;
    /**
     * Set the current coordinates of every element in the set of matched elements, relative to the document.
     *
     * @param coordinates An object containing the properties top and left, which are numbers indicating the new top and left
     *                    coordinates for the elements.
     *                    A function to return the coordinates to set. Receives the index of the element in the collection as
     *                    the first argument and the current coordinates as the second argument. The function should return an
     *                    object with the new top and left properties.
     * @see \`{@link https://api.jquery.com/offset/ }\`
     * @since 1.4
     * @example ​ ````Set the offset of the second paragraph:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>offset demo</title>
  <style>
  p {
    margin-left: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p>2nd Paragraph</p>
​
<script>
$( "p:last" ).offset({ top: 10, left: 30 });
</script>
​
</body>
</html>
```
     */
    offset(coordinates: JQuery.CoordinatesPartial | ((this: TElement, index: number, coords: JQuery.Coordinates) => JQuery.CoordinatesPartial)): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the document.
     *
     * @see \`{@link https://api.jquery.com/offset/ }\`
     * @since 1.2
     * @example ​ ````Access the offset of the second paragraph:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>offset demo</title>
  <style>
  p {
    margin-left: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p>2nd Paragraph</p>
​
<script>
var p = $( "p:last" );
var offset = p.offset();
p.html( "left: " + offset.left + ", top: " + offset.top );
</script>
​
</body>
</html>
```
     * @example ​ ````Click to see the offset.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>offset demo</title>
  <style>
  p {
    margin-left: 10px;
    color: blue;
    width: 200px;
    cursor: pointer;
  }
  span {
    color: red;
    cursor: pointer;
  }
  div.abs {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 220px;
    top: 35px;
    background-color: green;
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="result">Click an element.</div>
<p>
  This is the best way to <span>find</span> an offset.
</p>
<div class="abs">
</div>
​
<script>
$( "*", document.body ).click(function( event ) {
  var offset = $( this ).offset();
  event.stopPropagation();
  $( "#result" ).text( this.tagName +
    " coords ( " + offset.left + ", " + offset.top + " )" );
});
</script>
​
</body>
</html>
```
     */
    offset(): JQuery.Coordinates | undefined;
    /**
     * Get the closest ancestor element that is positioned.
     *
     * @see \`{@link https://api.jquery.com/offsetParent/ }\`
     * @since 1.2.6
     * @example ​ ````Find the offsetParent of item &quot;A.&quot;
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>offsetParent demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul class="level-1">
  <li class="item-i">I</li>
  <li class="item-ii" style="position: relative;">II
    <ul class="level-2">
      <li class="item-a">A</li>
      <li class="item-b">B
        <ul class="level-3">
          <li class="item-1">1</li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
        </ul>
      </li>
      <li class="item-c">C</li>
    </ul>
  </li>
  <li class="item-iii">III</li>
</ul>
​
<script>$( "li.item-a" ).offsetParent().css( "background-color", "red" );</script>
​
</body>
</html>
```
     */
    offsetParent(): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     */
    on<TData>(events: string,
              selector: JQuery.Selector | null,
              data: TData,
              handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     */
    on(events: string,
       selector: JQuery.Selector | null,
       data: any,
       handler: ((event: JQueryEventObject) => void)): this; // tslint:disable-line:unified-signatures
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Click any paragraph to add another after it. Note that .on() allows a click event on any paragraph--even new ones--since the event is handled by the ever-present body element after it bubbles to there.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>on demo</title>
  <style>
  p {
    background: yellow;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  p.over {
    background: #ccc;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Click me!</p>
<span></span>
​
<script>
var count = 0;
$( "body" ).on( "click", "p", function() {
  $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Display each paragraph&#39;s text in an alert box whenever it is clicked:
```javascript
$( "body" ).on( "click", "p", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Cancel a link&#39;s default action using the .preventDefault() method:
```javascript
$( "body" ).on( "click", "a", function( event ) {
  event.preventDefault();
});
```
     */
    on(events: string,
       selector: JQuery.Selector,
       handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Click any paragraph to add another after it. Note that .on() allows a click event on any paragraph--even new ones--since the event is handled by the ever-present body element after it bubbles to there.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>on demo</title>
  <style>
  p {
    background: yellow;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  p.over {
    background: #ccc;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Click me!</p>
<span></span>
​
<script>
var count = 0;
$( "body" ).on( "click", "p", function() {
  $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Display each paragraph&#39;s text in an alert box whenever it is clicked:
```javascript
$( "body" ).on( "click", "p", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Cancel a link&#39;s default action using the .preventDefault() method:
```javascript
$( "body" ).on( "click", "a", function( event ) {
  event.preventDefault();
});
```
     */
    on(events: string,
       selector: JQuery.Selector,
       handler: ((event: JQueryEventObject) => void)): this; // tslint:disable-line:unified-signatures
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Pass data to the event handler, which is specified here by name:
```javascript
function myHandler( event ) {
  alert( event.data.foo );
}
$( "p" ).on( "click", { foo: "bar" }, myHandler );
```
     */
    on<TData>(events: string,
              data: TData,
              handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Pass data to the event handler, which is specified here by name:
```javascript
function myHandler( event ) {
  alert( event.data.foo );
}
$( "p" ).on( "click", { foo: "bar" }, myHandler );
```
     */
    on(events: string,
       data: any, // tslint:disable-line:unified-signatures
       handler: ((event: JQueryEventObject) => void)): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Display a paragraph&#39;s text in an alert when it is clicked:
```javascript
$( "p" ).on( "click", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Cancel a form submit action and prevent the event from bubbling up by returning false:
```javascript
$( "form" ).on( "submit", false );
```
     * @example ​ ````Cancel only the default action by using .preventDefault().
```javascript
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
});
```
     * @example ​ ````Stop submit events from bubbling without preventing form submit, using .stopPropagation().
```javascript
$( "form" ).on( "submit", function( event ) {
  event.stopPropagation();
});
```
     * @example ​ ````Pass data to the event handler using the second argument to .trigger()
```javascript
$( "div" ).on( "click", function( event, person ) {
  alert( "Hello, " + person.name );
});
$( "div" ).trigger( "click", { name: "Jim" } );
```
     * @example ​ ````Use the the second argument of .trigger() to pass an array of data to the event handler
```javascript
$( "div" ).on( "click", function( event, salutation, name ) {
  alert( salutation + ", " + name );
});
$( "div" ).trigger( "click", [ "Goodbye", "Jim" ] );
```
     * @example ​ ````Attach and trigger custom (non-browser) events.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>on demo</title>
  <style>
  p {
    color: red;
  }
  span {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Has an attached custom event.</p>
<button>Trigger custom event</button>
<span style="display:none;"></span>
​
<script>
$( "p" ).on( "myCustomEvent", function( event, myName ) {
  $( this ).text( myName + ", hi there!" );
  $( "span" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
});
$( "button" ).click(function () {
  $( "p" ).trigger( "myCustomEvent", [ "John" ] );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Attach multiple events—one on mouseenter and one on mouseleave to the same element:
```javascript
$( "#cart" ).on( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "active" );
});
```
     */
    on(events: string,
       handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Display a paragraph&#39;s text in an alert when it is clicked:
```javascript
$( "p" ).on( "click", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Cancel a form submit action and prevent the event from bubbling up by returning false:
```javascript
$( "form" ).on( "submit", false );
```
     * @example ​ ````Cancel only the default action by using .preventDefault().
```javascript
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
});
```
     * @example ​ ````Stop submit events from bubbling without preventing form submit, using .stopPropagation().
```javascript
$( "form" ).on( "submit", function( event ) {
  event.stopPropagation();
});
```
     * @example ​ ````Pass data to the event handler using the second argument to .trigger()
```javascript
$( "div" ).on( "click", function( event, person ) {
  alert( "Hello, " + person.name );
});
$( "div" ).trigger( "click", { name: "Jim" } );
```
     * @example ​ ````Use the the second argument of .trigger() to pass an array of data to the event handler
```javascript
$( "div" ).on( "click", function( event, salutation, name ) {
  alert( salutation + ", " + name );
});
$( "div" ).trigger( "click", [ "Goodbye", "Jim" ] );
```
     * @example ​ ````Attach and trigger custom (non-browser) events.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>on demo</title>
  <style>
  p {
    color: red;
  }
  span {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Has an attached custom event.</p>
<button>Trigger custom event</button>
<span style="display:none;"></span>
​
<script>
$( "p" ).on( "myCustomEvent", function( event, myName ) {
  $( this ).text( myName + ", hi there!" );
  $( "span" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
});
$( "button" ).click(function () {
  $( "p" ).trigger( "myCustomEvent", [ "John" ] );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Attach multiple events—one on mouseenter and one on mouseleave to the same element:
```javascript
$( "#cart" ).on( "mouseenter mouseleave", function( event ) {
  $( this ).toggleClass( "active" );
});
```
     */
    on(events: string,
       handler: ((event: JQueryEventObject) => void)): this; // tslint:disable-line:unified-signatures
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     */
    on<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
              selector: JQuery.Selector | null,
              data: TData): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     */
    on(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>,
       selector: JQuery.Selector): this; // tslint:disable-line:unified-signatures
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     */
    on<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
              data: TData): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @see \`{@link https://api.jquery.com/on/ }\`
     * @since 1.7
     * @example ​ ````Attach multiple event handlers simultaneously using a plain object.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>on demo</title>
  <style>
  .test {
    color: #000;
    padding: .5em;
    border: 1px solid #444;
  }
  .active {
    color: #900;
  }
  .inside {
    background-color: aqua;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="test">test div</div>
​
<script>
$( "div.test" ).on({
  click: function() {
    $( this ).toggleClass( "active" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});
</script>
​
</body>
</html>
```
     */
    on(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one<TData>(events: string,
               selector: JQuery.Selector | null,
               data: TData,
               handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one(events: string,
        selector: JQuery.Selector,
        handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one<TData>(events: string,
               data: TData,
               handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     * @example ​ ````Tie a one-time click to each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>one demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 5px;
    float: left;
    background: green;
    border: 10px outset;
    cursor:pointer;
  }
  p {
    color: red;
    margin: 0;
    clear: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<p>Click a green square...</p>
​
<script>
var n = 0;
$( "div" ).one( "click", function() {
  var index = $( "div" ).index( this );
  $( this ).css({
    borderStyle: "inset",
    cursor: "auto"
  });
  $( "p" ).text( "Div at index #" + index + " clicked." +
    " That's " + (++n) + " total clicks." );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To display the text of all paragraphs in an alert box the first time each of them is clicked:
```javascript
$( "p" ).one( "click", function() {
  alert( $( this ).text() );
});
```
     * @example ​ ````Event handlers will trigger once per element per event type
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>one demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="count">0</div>
<div class="target">Hover/click me</div>
​
<script>
var n = 0;
$(".target").one("click mouseenter", function() {
  $(".count").html(++n);
});
</script>
​
</body>
</html>
```
     */
    one(events: string,
        handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
               selector: JQuery.Selector | null,
               data: TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>,
        selector: JQuery.Selector): this; // tslint:disable-line:unified-signatures
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
               data: TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @see \`{@link https://api.jquery.com/one/ }\`
     * @since 1.7
     */
    one(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Set the CSS outer height of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     * @see \`{@link https://api.jquery.com/outerHeight/ }\`
     * @since 1.8.0
     * @example ​ ````Change the outer height of each div the first time it is clicked (and change its color).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>outerHeight demo</title>
  <style>
  div {
    width: 50px;
    padding: 10px;
    height: 60px;
    float: left;
    margin: 5px;
    background: red;
    cursor: pointer;
  }
  .mod {
    background: blue;
    cursor: default;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
​
<script>
var modHeight = 60;
$( "div" ).one( "click", function() {
  $( this ).outerHeight( modHeight ).addClass( "mod" );
  modHeight -= 8;
});
</script>
​
</body>
</html>
```
     */
    outerHeight(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed outer height (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see \`{@link https://api.jquery.com/outerHeight/ }\`
     * @since 1.2.6
     * @example ​ ````Get the outerHeight of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>outerHeight demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text(
  "outerHeight:" + p.outerHeight() +
  " , outerHeight( true ):" + p.outerHeight( true ) );
</script>
​
</body>
</html>
```
     */
    outerHeight(includeMargin?: boolean): number | undefined;
    /**
     * Set the CSS outer width of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the outer width to set. Receives the index position of the element in the set
     *              and the old outer width as arguments. Within the function, this refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/outerWidth/ }\`
     * @since 1.8.0
     * @example ​ ````Change the outer width of each div the first time it is clicked (and change its color).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>outerWidth demo</title>
  <style>
  div {
    width: 60px;
    padding: 10px;
    height: 50px;
    float: left;
    margin: 5px;
    background: red;
    cursor: pointer;
  }
  .mod {
    background: blue;
    cursor: default;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
​
<script>
var modWidth = 60;
$( "div" ).one( "click", function() {
  $( this ).outerWidth( modWidth ).addClass( "mod" );
  modWidth -= 8;
});
</script>
​
</body>
</html>
```
     */
    outerWidth(value: string | number | ((this: TElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed outer width (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see \`{@link https://api.jquery.com/outerWidth/ }\`
     * @since 1.2.6
     * @example ​ ````Get the outerWidth of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>outerWidth demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text(
  "outerWidth:" + p.outerWidth() +
  " , outerWidth( true ):" + p.outerWidth( true ) );
</script>
​
</body>
</html>
```
     */
    outerWidth(includeMargin?: boolean): number | undefined;
    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/parent/ }\`
     * @since 1.0
     * @example ​ ````Shows the parent of each element as (parent &gt; child).  Check the View Source to see the raw html.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>parent demo</title>
  <style>
  div, p {
    margin: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>div,
  <span>span, </span>
  <b>b </b>
</div>
​
<p>p,
  <span>span,
    <em>em </em>
  </span>
</p>
​
<div>div,
  <strong>strong,
    <span>span, </span>
    <em>em,
      <b>b, </b>
    </em>
  </strong>
  <b>b </b>
</div>
​
<script>
$( "*", document.body ).each(function() {
  var parentTag = $( this ).parent().get( 0 ).tagName;
  $( this ).prepend( document.createTextNode( parentTag + " > " ) );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Find the parent element of each paragraph with a class &quot;selected&quot;.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>parent demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div><p>Hello</p></div>
<div class="selected"><p>Hello Again</p></div>
​
<script>
$( "p" ).parent( ".selected" ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     */
    parent(selector?: JQuery.Selector): this;
    /**
     * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/parents/ }\`
     * @since 1.0
     * @example ​ ````Find all parent elements of each b.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>parents demo</title>
  <style>
  b, span, p, html body {
    padding: .5em;
    border: 1px solid;
  }
  b {
    color: blue;
  }
  strong {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  <p>
    <span>
      <b>My parents are: </b>
    </span>
  </p>
</div>
​
<script>
var parentEls = $( "b" ).parents()
  .map(function() {
    return this.tagName;
  })
  .get()
  .join( ", " );
$( "b" ).append( "<strong>" + parentEls + "</strong>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Click to find all unique div parent elements of each span.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>parents demo</title>
  <style>
  p, div, span {
    margin: 2px;
    padding: 1px;
  }
  div {
    border: 2px white solid;
  }
  span {
    cursor: pointer;
    font-size: 12px;
  }
  .selected {
    color: blue;
  }
  b {
    color: red;
    display: block;
    font-size: 14px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  <div>
    <div><span>Hello</span></div>
      <span>Hello Again</span>
    </div>
    <div>
      <span>And Hello Again</span>
    </div>
  </p>
  <b>Click Hellos to toggle their parents.</b>
​
<script>
function showParents() {
  $( "div" ).css( "border-color", "white" );
  var len = $( "span.selected" )
    .parents( "div" )
      .css( "border", "2px red solid" )
      .length;
  $( "b" ).text( "Unique div parents: " + len );
}
$( "span" ).click(function() {
  $( this ).toggleClass( "selected" );
  showParents();
});
</script>
​
</body>
</html>
```
     */
    parents(selector?: JQuery.Selector): this;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including
     * the element matched by the selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
     *                 A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/parentsUntil/ }\`
     * @since 1.4
     * @since 1.6
     * @example ​ ````Find the ancestors of &lt;li class=&quot;item-a&quot;&gt; up to &lt;ul class=&quot;level-1&quot;&gt; and give them a red background color. Also, find ancestors of &lt;li class=&quot;item-2&quot;&gt; that have a class of &quot;yes&quot; up to &lt;ul class=&quot;level-1&quot;&gt; and give them a green border.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>parentsUntil demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul class="level-1 yes">
  <li class="item-i">I</li>
  <li class="item-ii">II
    <ul class="level-2 yes">
      <li class="item-a">A</li>
      <li class="item-b">B
        <ul class="level-3">
          <li class="item-1">1</li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
        </ul>
      </li>
      <li class="item-c">C</li>
    </ul>
  </li>
  <li class="item-iii">III</li>
</ul>
​
<script>
$( "li.item-a" )
  .parentsUntil( ".level-1" )
    .css( "background-color", "red" );
​
$( "li.item-2" )
  .parentsUntil( $( "ul.level-1" ), ".yes" )
    .css( "border", "3px solid green" );
</script>
​
</body>
</html>
```
     */
    parentsUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     *
     * @see \`{@link https://api.jquery.com/position/ }\`
     * @since 1.2
     * @example ​ ````Access the position of the second paragraph:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>position demo</title>
  <style>
  div {
    padding: 15px;
  }
  p {
    margin-left: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  <p>Hello</p>
</div>
<p></p>
​
<script>
var p = $( "p:first" );
var position = p.position();
$( "p:last" ).text( "left: " + position.left + ", top: " + position.top );
</script>
​
</body>
</html>
```
     */
    position(): JQuery.Coordinates;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the beginning of each element in the set of matched elements.
     * @see \`{@link https://api.jquery.com/prepend/ }\`
     * @since 1.0
     * @example ​ ````Prepends some HTML to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prepend demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>there, friend!</p>
<p>amigo!</p>
​
<script>
$( "p" ).prepend( "<b>Hello </b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Prepends a DOM Element to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prepend demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>is what I'd say</p>
<p>is what I said</p>
​
<script>
$( "p" ).prepend( document.createTextNode( "Hello " ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Prepends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prepend demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p> is what was said.</p><b>Hello</b>
​
<script>
$( "p" ).prepend( $( "b" ) );
</script>
​
</body>
</html>
```
     */
    prepend(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert at
     *           the beginning of each element in the set of matched elements. Receives the index position of the
     *           element in the set and the old HTML value of the element as arguments. Within the function, this
     *           refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/prepend/ }\`
     * @since 1.4
     */
    prepend(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the beginning of the element(s) specified by this parameter.
     * @see \`{@link https://api.jquery.com/prependTo/ }\`
     * @since 1.0
     * @example ​ ````Prepend all spans to the element with the ID &quot;foo&quot; (Check .prepend() documentation for more examples)
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prependTo demo</title>
  <style>
  div {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="foo">FOO!</div>
<span>I have something to say... </span>
​
<script>
$( "span" ).prependTo( "#foo" );
</script>
​
</body>
</html>
```
     */
    prependTo(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element | DocumentFragment> | JQuery): this;
    /**
     * Get the immediately preceding sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the previous sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/prev/ }\`
     * @since 1.0
     * @example ​ ````Find the very previous sibling of each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prev demo</title>
  <style>
  div {
    width: 40px;
    height: 40px;
    margin: 10px;
    float: left;
    border: 2px blue solid;
    padding: 2px;
  }
  span {
    font-size: 14px;
  }
  p {
    clear: left;
    margin: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div><span>has child</span></div>
<div></div>
<div></div>
<div></div>
<div id="start"></div>
<div></div>
<p><button>Go to Prev</button></p>
​
<script>
var $curr = $( "#start" );
$curr.css( "background", "#f99" );
$( "button" ).click(function() {
  $curr = $curr.prev();
  $( "div" ).css( "background", "" );
  $curr.css( "background", "#f99" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````For each paragraph, find the very previous sibling that has a class &quot;selected&quot;.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prev demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div><span>Hello</span></div>
<p class="selected">Hello Again</p>
<p>And Again</p>
​
<script>
$( "p" ).prev( ".selected" ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     */
    prev(selector?: JQuery.Selector): this;
    /**
     * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/prevAll/ }\`
     * @since 1.2
     * @example ​ ````Locate all the divs preceding the last div and give them a class.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prevAll demo</title>
  <style>
  div {
    width: 70px;
    height: 70px;
    background: #abc;
    border: 2px solid black;
    margin: 10px;
    float: left;
  }
  div.before {
    border-color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
$( "div:last" ).prevAll().addClass( "before" );
</script>
​
</body>
</html>
```
     */
    prevAll(selector?: JQuery.Selector): this;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the
     * selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
     *                 A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/prevUntil/ }\`
     * @since 1.4
     * @since 1.6
     * @example ​ ````Find the siblings that precede &lt;dt id=&quot;term-2&quot;&gt; up to the preceding &lt;dt&gt; and give them a red background color. Also, find previous &lt;dd&gt; siblings of &lt;dt id=&quot;term-3&quot;&gt; up to &lt;dt id=&quot;term-1&quot;&gt; and give them a green text color.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prevUntil demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<dl>
  <dt id="term-1">term 1</dt>
  <dd>definition 1-a</dd>
  <dd>definition 1-b</dd>
  <dd>definition 1-c</dd>
  <dd>definition 1-d</dd>
​
  <dt id="term-2">term 2</dt>
  <dd>definition 2-a</dd>
  <dd>definition 2-b</dd>
  <dd>definition 2-c</dd>
​
  <dt id="term-3">term 3</dt>
  <dd>definition 3-a</dd>
  <dd>definition 3-b</dd>
</dl>
​
<script>
$( "#term-2" ).prevUntil( "dt" )
  .css( "background-color", "red" );
​
var term1 = document.getElementById( "term-1" );
$( "#term-3" ).prevUntil( term1, "dd" )
  .css( "color", "green" );
</script>
​
</body>
</html>
```
     */
    prevUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @param target Object onto which the promise methods have to be attached
     * @see \`{@link https://api.jquery.com/promise/ }\`
     * @since 1.6
     */
    promise<T extends object>(type: string, target: T): T & JQuery.Promise<this>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param target Object onto which the promise methods have to be attached
     * @see \`{@link https://api.jquery.com/promise/ }\`
     * @since 1.6
     */
    promise<T extends object>(target: T): T & JQuery.Promise<this>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @see \`{@link https://api.jquery.com/promise/ }\`
     * @since 1.6
     * @example ​ ````Using .promise() on a collection with no active animation returns a resolved Promise:
```javascript
var div = $( "<div>" );
​
div.promise().done(function( arg1 ) {
  // Will fire right away and alert "true"
  alert( this === div && arg1 === div );
});
```
     * @example ​ ````Resolve the returned Promise when all animations have ended (including those initiated in the animation callback or added later on):
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>promise demo</title>
  <style>
  div {
    height: 50px;
    width: 50px;
    float: left;
    margin-right: 10px;
    display: none;
    background-color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Go</button>
<p>Ready...</p>
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
$( "button" ).on( "click", function() {
  $( "p" ).append( "Started..." );
​
  $( "div" ).each(function( i ) {
    $( this ).fadeIn().fadeOut( 1000 * ( i + 1 ) );
  });
​
  $( "div" ).promise().done(function() {
    $( "p" ).append( " Finished! " );
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Resolve the returned Promise using a $.when() statement (the .promise() method makes it possible to do this with jQuery collections):
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>promise demo</title>
  <style>
  div {
    height: 50px;
    width: 50px;
    float: left;
    margin-right: 10px;
    display: none;
    background-color: #090;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Go</button>
<p>Ready...</p>
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
var effect = function() {
  return $( "div" ).fadeIn( 800 ).delay( 1200 ).fadeOut();
};
​
$( "button" ).on( "click", function() {
  $( "p" ).append( " Started... " );
​
  $.when( effect() ).done(function() {
    $( "p" ).append( " Finished! " );
  });
});
</script>
​
</body>
</html>
```
     */
    promise(type?: string): JQuery.Promise<this>;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A function returning the value to set. Receives the index position of the element in the set and the
     *              old property value as arguments. Within the function, the keyword this refers to the current element.
     * @see \`{@link https://api.jquery.com/prop/ }\`
     * @since 1.6
     */
    prop(propertyName: string, value: (this: TElement, index: number, oldPropertyValue: any) => any): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     * @see \`{@link https://api.jquery.com/prop/ }\`
     * @since 1.6
     */
    prop(propertyName: string, value: any): this; // tslint:disable-line:unified-signatures
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see \`{@link https://api.jquery.com/prop/ }\`
     * @since 1.6
     * @example ​ ````Disable all checkboxes on the page.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prop demo</title>
  <style>
  img {
    padding: 10px;
  }
  div {
    color: red;
    font-size: 24px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <input type="checkbox" checked="checked">
  <input type="checkbox">
  <input type="checkbox">
  <input type="checkbox" checked="checked">
​
<script>
$( "input[type='checkbox']" ).prop({
  disabled: true
});
</script>
​
</body>
</html>
```
     */
    prop(properties: JQuery.PlainObject): this;
    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     * @see \`{@link https://api.jquery.com/prop/ }\`
     * @since 1.6
     * @example ​ ````Display the checked property and attribute of a checkbox as it changes.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>prop demo</title>
  <style>
  p {
    margin: 20px 0 0;
  }
  b {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input id="check1" type="checkbox" checked="checked">
<label for="check1">Check me</label>
<p></p>
​
<script>
$( "input" ).change(function() {
  var $input = $( this );
  $( "p" ).html(
    ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
    ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
    ".is( \":checked\" ): <b>" + $input.is( ":checked" ) + "</b>" );
}).change();
</script>
​
</body>
</html>
```
     */
    prop(propertyName: string): any | undefined;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @param name The name of a jQuery method that generated the array of elements.
     * @param args The arguments that were passed in to the jQuery method (for serialization).
     * @see \`{@link https://api.jquery.com/pushStack/ }\`
     * @since 1.3
     */
    pushStack(elements: ArrayLike<Element>, name: string, args: any[]): this;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @see \`{@link https://api.jquery.com/pushStack/ }\`
     * @since 1.0
     * @example ​ ````Add some elements onto the jQuery stack, then pop back off again.
```javascript
jQuery([])
  .pushStack( document.getElementsByTagName( "div" ) )
  .remove()
  .end();
```
     */
    pushStack(elements: ArrayLike<Element>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see \`{@link https://api.jquery.com/queue/ }\`
     * @since 1.2
     * @example ​ ````Set a queue array to delete the queue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="start">Start</button>
<button id="stop">Stop</button>
<div></div>
​
<script>
$( "#start" ).click(function() {
  $( "div" )
    .show( "slow" )
    .animate({ left: "+=200" }, 5000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate({ left: '-=200' }, 1500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    })
    .slideUp();
});
$( "#stop" ).click(function() {
  $( "div" )
    .queue( "fx", [] )
    .stop();
});
</script>
​
</body>
</html>
```
     */
    queue(queueName: string, newQueue: JQuery.TypeOrArray<JQuery.QueueFunction<TElement>>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see \`{@link https://api.jquery.com/queue/ }\`
     * @since 1.2
     * @example ​ ````Queue a custom function.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 30px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Click here...
<div></div>
​
<script>
$( document.body ).click(function() {
  $( "div" )
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate({ left: "-=200" }, 500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    })
    .slideUp();
});
</script>
​
</body>
</html>
```
     */
    queue(newQueue: JQuery.TypeOrArray<JQuery.QueueFunction<TElement>>): this;
    /**
     * Show the queue of functions to be executed on the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see \`{@link https://api.jquery.com/queue/ }\`
     * @since 1.2
     * @example ​ ````Show the length of the queue.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>queue demo</title>
  <style>
  div {
    margin: 3px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 60px;
    background: green;
    display: none;
  }
  div.newcolor {
    background: blue;
  }
  p {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>The queue length is: <span></span></p>
<div></div>
​
<script>
var div = $( "div" );
​
function runIt() {
  div
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .slideToggle( 1000 )
    .slideToggle( "fast" )
    .animate({ left: "-=200" }, 1500 )
    .hide( "slow" )
    .show( 1200 )
    .slideUp( "normal", runIt );
}
​
function showIt() {
  var n = div.queue( "fx" );
  $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}
​
runIt();
showIt();
</script>
​
</body>
</html>
```
     */
    queue(queueName?: string): JQuery.Queue<Node>;
    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @see \`{@link https://api.jquery.com/ready/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.0. Use `jQuery(function() { })`.
     * @example ​ ````Display a message when the DOM is loaded.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ready demo</title>
  <style>
  p {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script>
​
  $(function() {
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
  });
​
  </script>
</head>
<body>
​
<p>Not loaded yet.</p>
​
</body>
</html>
```
     */
    ready(handler: ($: JQueryStatic) => void): this;
    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see \`{@link https://api.jquery.com/remove/ }\`
     * @since 1.0
     * @example ​ ````Removes all paragraphs from the DOM
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>remove demo</title>
  <style>
  p {
    background: yellow;
    margin: 6px 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
how are
<p>you?</p>
<button>Call remove() on paragraphs</button>
​
<script>
$( "button" ).click(function() {
  $( "p" ).remove();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Removes all paragraphs that contain &quot;Hello&quot; from the DOM.  Analogous to doing $(&quot;p&quot;).filter(&quot;:contains(&#39;Hello&#39;)&quot;).remove().
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>remove demo</title>
  <style>
  p {
    background: yellow;
    margin: 6px 0;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="hello">Hello</p>
how are
<p>you?</p>
<button>Call remove( ":contains('Hello')" ) on paragraphs</button>
​
<script>
$( "button" ).click(function() {
  $( "p" ).remove( ":contains('Hello')" );
});
</script>
​
</body>
</html>
```
     */
    remove(selector?: string): this;
    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
     * @see \`{@link https://api.jquery.com/removeAttr/ }\`
     * @since 1.0
     * @example ​ ````Clicking the button changes the title of the input next to it. Move the mouse pointer over the text input to see the effect of adding and removing the title attribute.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeAttr demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Change title</button>
<input type="text" title="hello there">
<div id="log"></div>
​
<script>
(function() {
  var inputTitle = $( "input" ).attr( "title" );
  $( "button" ).click(function() {
    var input = $( this ).next();
​
    if ( input.attr( "title" ) === inputTitle ) {
      input.removeAttr( "title" )
    } else {
      input.attr( "title", inputTitle );
    }
​
    $( "#log" ).html( "input title is now " + input.attr( "title" ) );
  });
})();
</script>
​
</body>
</html>
```
     */
    removeAttr(attributeName: string): this;
    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     *                  An array of classes to be removed from the class attribute of each matched element.
     *                  A function returning one or more space-separated class names to be removed. Receives the index
     *                  position of the element in the set and the old class value as arguments.
     * @see \`{@link https://api.jquery.com/removeClass/ }\`
     * @since 1.0
     * @since 1.4
     * @since 3.3
     * @example ​ ````Remove the class &#39;blue&#39; from the matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeClass demo</title>
  <style>
  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bolder;
  }
  .blue {
    color: blue;
  }
  .under {
    text-decoration: underline;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="blue under">Hello</p>
<p class="blue under highlight">and</p>
<p class="blue under">then</p>
<p class="blue under">Goodbye</p>
​
<script>
$( "p:even" ).removeClass( "blue" );
</script>
​
</body>
</html>
```
     * @example ​ ````Remove the class &#39;blue&#39; and &#39;under&#39; from the matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeClass demo</title>
  <style>
  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bolder;
  }
  .blue {
    color: blue;
  }
  .under {
    text-decoration: underline;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="blue under">Hello</p>
<p class="blue under highlight">and</p>
<p class="blue under">then</p>
<p class="blue under">Goodbye</p>
​
<script>
$( "p:odd" ).removeClass( "blue under" );
</script>
​
</body>
</html>
```
     * @example ​ ````Remove all the classes from the matched elements.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeClass demo</title>
  <style>
  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bolder;
  }
  .blue {
    color: blue;
  }
  .under {
    text-decoration: underline;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="blue under">Hello</p>
<p class="blue under highlight">and</p>
<p class="blue under">then</p>
<p class="blue under">Goodbye</p>
​
<script>
$( "p:eq(1)" ).removeClass();
</script>
​
</body>
</html>
```
     */
    removeClass(className?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete.
     *             An array or space-separated string naming the pieces of data to delete.
     * @see \`{@link https://api.jquery.com/removeData/ }\`
     * @since 1.2.3
     * @since 1.7
     * @example ​ ````Set a data store for 2 names then remove one of them.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeData demo</title>
  <style>
  div {
    margin: 2px;
    color: blue;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>value1 before creation: <span></span></div>
<div>value1 after creation: <span></span></div>
<div>value1 after removal: <span></span></div>
<div>value2 after removal: <span></span></div>
​
<script>
$( "span:eq(0)" ).text( "" + $( "div" ).data( "test1" ) );
$( "div" ).data( "test1", "VALUE-1" );
$( "div" ).data( "test2", "VALUE-2" );
$( "span:eq(1)" ).text( "" + $( "div").data( "test1" ) );
$( "div" ).removeData( "test1" );
$( "span:eq(2)" ).text( "" + $( "div" ).data( "test1" ) );
$( "span:eq(3)" ).text( "" + $( "div" ).data( "test2" ) );
</script>
​
</body>
</html>
```
     */
    removeData(name?: JQuery.TypeOrArray<string>): this;
    /**
     * Remove a property for the set of matched elements.
     *
     * @param propertyName The name of the property to remove.
     * @see \`{@link https://api.jquery.com/removeProp/ }\`
     * @since 1.6
     * @example ​ ````Set a numeric property on a paragraph and then remove it.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>removeProp demo</title>
  <style>
  img {
    padding: 10px;
  }
  div {
    color: red;
    font-size: 24px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <p></p>
​
<script>
para = $( "p" );
para
  .prop( "luggageCode", 1234 )
  .append( "The secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " )
  .removeProp( "luggageCode" )
  .append( "Now the secret luggage code is: ", String( para.prop( "luggageCode" ) ), ". " );
</script>
​
</body>
</html>
```
     */
    removeProp(propertyName: string): this;
    /**
     * Replace each target element with the set of matched elements.
     *
     * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
     * @see \`{@link https://api.jquery.com/replaceAll/ }\`
     * @since 1.2
     * @example ​ ````Replace all the paragraphs with bold words.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>replaceAll demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "<b>Paragraph. </b>" ).replaceAll( "p" );
</script>
​
</body>
</html>
```
     */
    replaceAll(target: JQuery.Selector | JQuery | JQuery.TypeOrArray<Element>): this;
    /**
     * Replace each element in the set of matched elements with the provided new content and return the set
     * of elements that was removed.
     *
     * @param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     *                   A function that returns content with which to replace the set of matched elements.
     * @see \`{@link https://api.jquery.com/replaceWith/ }\`
     * @since 1.2
     * @since 1.4
     * @example ​ ````On click, replace the button with a div containing the same word.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>replaceWith demo</title>
  <style>
  button {
    display: block;
    margin: 3px;
    color: red;
    width: 200px;
  }
  div {
    color: red;
    border: 2px solid blue;
    width: 200px;
    margin: 3px;
    text-align: center;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>First</button>
<button>Second</button>
<button>Third</button>
​
<script>
$( "button" ).click(function() {
  $( this ).replaceWith( "<div>" + $( this ).text() + "</div>" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Replace all paragraphs with bold words.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>replaceWith demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).replaceWith( "<b>Paragraph. </b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````On click, replace each paragraph with a div that is already in the DOM and selected with the $() function. Notice it doesn&#39;t clone the object but rather moves it to replace the paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>replaceWith demo</title>
  <style>
  div {
    border: 2px solid blue;
    color: red;
    margin: 3px;
  }
  p {
    border: 2px solid red;
    color: blue;
    margin: 3px;
    cursor: pointer;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <p>Hello</p>
  <p>cruel</p>
  <p>World</p>
  <div>Replaced!</div>
​
<script>
$( "p" ).click(function() {
  $( this ).replaceWith( $( "div" ) );
});
</script>
​
</body>
</html>
```
     * @example ​ ````On button click, replace the containing div with its child divs and append the class name of the selected element to the paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>replaceWith demo</title>
  <style>
  .container {
    background-color: #991;
  }
  .inner {
    color: #911;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>
  <button>Replace!</button>
</p>
<div class="container">
  <div class="inner">Scooby</div>
  <div class="inner">Dooby</div>
  <div class="inner">Doo</div>
</div>
​
<script>
$( "button" ).on( "click", function() {
  var $container = $( "div.container" ).replaceWith(function() {
    return $( this ).contents();
  });
​
  $( "p" ).append( $container.attr( "class" ) );
});
</script>
​
</body>
</html>
```
     */
    replaceWith(newContent: JQuery.htmlString | JQuery | JQuery.TypeOrArray<Element> | ((this: TElement) => any)): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/resize/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    resize<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/resize/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To see the window width while (or after) it is resized, try:
```javascript
$( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
});
```
     */
    resize(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/scroll/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    scroll<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/scroll/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To do something when your page is scrolled:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scroll demo</title>
  <style>
  div {
    color: blue;
  }
  p {
    color: green;
  }
  span {
    color: red;
    display: none;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>Try scrolling the iframe.</div>
<p>Paragraph - <span>Scroll happened!</span></p>
​
<script>
$( "p" ).clone().appendTo( document.body );
$( "p" ).clone().appendTo( document.body );
$( "p" ).clone().appendTo( document.body );
$( window ).scroll(function() {
  $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
});
</script>
​
</body>
</html>
```
     */
    scroll(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the current horizontal position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     * @see \`{@link https://api.jquery.com/scrollLeft/ }\`
     * @since 1.2.6
     * @example ​ ````Set the scrollLeft of a div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scrollLeft demo</title>
  <style>
  div.demo {
    background: #ccc none repeat scroll 0 0;
    border: 3px solid #666;
    margin: 5px;
    padding: 5px;
    position: relative;
    width: 200px;
    height: 100px;
    overflow: auto;
  }
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
    width: 1000px;
    height: 1000px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="demo"><h1>lalala</h1><p>Hello</p></div>
​
<script>
$( "div.demo" ).scrollLeft( 300 );
</script>
​
</body>
</html>
```
     */
    scrollLeft(value: number): this;
    /**
     * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
     *
     * @see \`{@link https://api.jquery.com/scrollLeft/ }\`
     * @since 1.2.6
     * @example ​ ````Get the scrollLeft of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scrollLeft demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text( "scrollLeft:" + p.scrollLeft() );
</script>
​
</body>
</html>
```
     */
    scrollLeft(): number | undefined;
    /**
     * Set the current vertical position of the scroll bar for each of the set of matched elements.
     *
     * @param value A number indicating the new position to set the scroll bar to.
     * @see \`{@link https://api.jquery.com/scrollTop/ }\`
     * @since 1.2.6
     * @example ​ ````Set the scrollTop of a div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scrollTop demo</title>
  <style>
  div.demo {
    background: #ccc none repeat scroll 0 0;
    border: 3px solid #666;
    margin: 5px;
    padding: 5px;
    position: relative;
    width: 200px;
    height: 100px;
    overflow: auto;
  }
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
    width: 1000px;
    height: 1000px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="demo"><h1>lalala</h1><p>Hello</p></div>
​
<script>
$( "div.demo" ).scrollTop( 300 );
</script>
​
</body>
</html>
```
     */
    scrollTop(value: number): this;
    /**
     * Get the current vertical position of the scroll bar for the first element in the set of matched
     * elements or set the vertical position of the scroll bar for every matched element.
     *
     * @see \`{@link https://api.jquery.com/scrollTop/ }\`
     * @since 1.2.6
     * @example ​ ````Get the scrollTop of a paragraph.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scrollTop demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p><p></p>
​
<script>
var p = $( "p:first" );
$( "p:last" ).text( "scrollTop:" + p.scrollTop() );
</script>
​
</body>
</html>
```
     */
    scrollTop(): number | undefined;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/select/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    select<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/select/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````To do something when text in input boxes is selected:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>select demo</title>
  <style>
  p {
    color: blue;
  }
  div {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
  <p>Click and drag the mouse to select text in the inputs.</p>
  <input type="text" value="Some text">
  <input type="text" value="to test on">
  <div></div>
  ​
<script>
$( ":input" ).select(function() {
  $( "div" ).text( "Something was selected" ).show().fadeOut( 1000 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To trigger the select event on all input elements, try:
```javascript
$( "input" ).select();
```
     */
    select(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Encode a set of form elements as a string for submission.
     *
     * @see \`{@link https://api.jquery.com/serialize/ }\`
     * @since 1.0
     * @example ​ ````Serialize a form to a query string that could be sent to a server in an Ajax request.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>serialize demo</title>
  <style>
  body, select {
    font-size: 12px;
  }
  form {
    margin: 5px;
  }
  p {
    color: red;
    margin: 5px;
    font-size: 14px;
  }
  b {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<form>
  <select name="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
​
  <br>
  <select name="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select>
​
  <br>
  <input type="checkbox" name="check" value="check1" id="ch1">
  <label for="ch1">check1</label>
  <input type="checkbox" name="check" value="check2" checked="checked" id="ch2">
  <label for="ch2">check2</label>
​
  <br>
  <input type="radio" name="radio" value="radio1" checked="checked" id="r1">
  <label for="r1">radio1</label>
  <input type="radio" name="radio" value="radio2" id="r2">
  <label for="r2">radio2</label>
</form>
​
<p><tt id="results"></tt></p>
​
<script>
  function showValues() {
    var str = $( "form" ).serialize();
    $( "#results" ).text( str );
  }
  $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
  $( "select" ).on( "change", showValues );
  showValues();
</script>
​
</body>
</html>
```
     */
    serialize(): string;
    /**
     * Encode a set of form elements as an array of names and values.
     *
     * @see \`{@link https://api.jquery.com/serializeArray/ }\`
     * @since 1.2
     * @example ​ ````Get the values from a form, iterate through them, and append them to a results display.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>serializeArray demo</title>
  <style>
  body, select {
    font-size: 14px;
  }
  form {
    margin: 5px;
  }
  p {
    color: red;
    margin: 5px;
  }
  b {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><b>Results:</b> <span id="results"></span></p>
<form>
  <select name="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
  <select name="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select>
  <br>
  <input type="checkbox" name="check" value="check1" id="ch1">
  <label for="ch1">check1</label>
  <input type="checkbox" name="check" value="check2" checked="checked" id="ch2">
  <label for="ch2">check2</label>
  <input type="radio" name="radio" value="radio1" checked="checked" id="r1">
  <label for="r1">radio1</label>
  <input type="radio" name="radio" value="radio2" id="r2">
  <label for="r2">radio2</label>
</form>
​
<script>
  function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }
​
  $( ":checkbox, :radio" ).click( showValues );
  $( "select" ).change( showValues );
  showValues();
</script>
​
</body>
</html>
```
     */
    serializeArray(): JQuery.NameValuePair[];
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/show/ }\`
     * @since 1.4.3
     */
    show(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete _&#x40;param_ `easing_complete`
     * <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/show/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Show the first div, followed by each next adjacent sibling div in order, with a 200ms animation. Each animation starts when the previous sibling div&#39;s animation ends.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>show demo</title>
  <style>
  div {
    background: #def3ca;
    margin: 3px;
    width: 80px;
    display: none;
    float: left;
    text-align: center;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="showr">Show</button>
<button id="hidr">Hide</button>
<div>Hello 3,</div>
<div>how</div>
<div>are</div>
<div>you?</div>
​
<script>
$( "#showr" ).click(function() {
  $( "div" ).first().show( "fast", function showNext() {
    $( this ).next( "div" ).show( "fast", showNext );
  });
});
​
$( "#hidr" ).click(function() {
  $( "div" ).hide( 1000 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Show all span and input elements with an animation. Change the text once the animation is done.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>show demo</title>
  <style>
  span {
    display: none;
  }
  div {
    display: none;
  }
  p {
    font-weight: bold;
    background-color: #fcd;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Do it!</button>
<span>Are you sure? (type 'yes' if you are) </span>
<div>
  <form>
    <input type="text"  value="as;ldkfjalsdf">
  </form>
</div>
<p style="display:none;">I'm hidden...</p>
​
<script>
function doIt() {
  $( "span,div" ).show( "slow" );
}
// Can pass in function name
$( "button" ).click( doIt );
​
$( "form" ).submit(function( event ) {
  if ( $( "input" ).val() === "yes" ) {
    $( "p" ).show( 4000, function() {
      $( this ).text( "Ok, DONE! (now showing)" );
    });
  }
  $( "span,div" ).hide( "fast" );
​
  // Prevent form submission
  event.preventDefault();
});
</script>
​
</body>
</html>
```
     */
    show(duration: JQuery.Duration, easing_complete: string | ((this: TElement) => void)): this;
    /**
     * Display the matched elements.
     *
     * @param duration_complete_options _&#x40;param_ `duration_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/show/ }\`
     * @since 1.0
     * @example ​ ````Animates all hidden paragraphs to show slowly, completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>show demo</title>
  <style>
  p {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Show it</button>
<p style="display: none">Hello  2</p>
​
<script>
$( "button" ).click(function() {
  $( "p" ).show( "slow" );
});
</script>
​
</body>
</html>
```
     */
    show(duration_complete_options?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see \`{@link https://api.jquery.com/siblings/ }\`
     * @since 1.0
     * @example ​ ````Find the unique siblings of all yellow li elements in the 3 lists (including other yellow li elements if appropriate).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>siblings demo</title>
  <style>
  ul {
    float: left;
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    color: blue;
    margin: 10px 20px;
    font-size: 16px;
    padding: 5px;
    font-weight: bolder;
  }
  .hilite {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li>One</li>
  <li>Two</li>
  <li class="hilite">Three</li>
  <li>Four</li>
</ul>
​
<ul>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
</ul>
​
<ul>
  <li>Eight</li>
  <li class="hilite">Nine</li>
  <li>Ten</li>
  <li class="hilite">Eleven</li>
</ul>
​
<p>Unique siblings: <b></b></p>
​
<script>
var len = $( ".hilite" ).siblings()
  .css( "color", "red" )
  .length;
$( "b" ).text( len );
</script>
​
</body>
</html>
```
     * @example ​ ````Find all siblings with a class &quot;selected&quot; of each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>siblings demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div><span>Hello</span></div>
<p class="selected">Hello Again</p>
<p>And Again</p>
​
<script>
$( "p" ).siblings( ".selected" ).css( "background", "yellow" );
</script>
​
</body>
</html>
```
     */
    siblings(selector?: JQuery.Selector): this;
    /**
     * Reduce the set of matched elements to a subset specified by a range of indices.
     *
     * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative,
     *              it indicates an offset from the end of the set.
     * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative,
     *            it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
     * @see \`{@link https://api.jquery.com/slice/ }\`
     * @since 1.1.4
     * @example ​ ````Turns divs yellow based on a random slice.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slice demo</title>
  <style>
  div {
    width: 40px;
    height: 40px;
    margin: 10px;
    float: left;
    border: 2px solid blue;
  }
  span {
    color: red;
    font-weight: bold;
  }
  button {
    margin: 5px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><button>Turn slice yellow</button>
  <span>Click the button!</span></p>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  ​
<script>
function colorEm() {
  var $div = $( "div" );
  var start = Math.floor( Math.random() * $div.length );
  var end = Math.floor( Math.random() * ( $div.length - start ) ) +
    start + 1;
  if ( end === $div.length ) {
    end = undefined;
  }
  $div.css( "background", "" );
  if ( end ) {
    $div.slice( start, end ).css( "background", "yellow" );
  } else {
    $div.slice( start ).css( "background", "yellow" );
  }
  $( "span" ).text( "$( 'div' ).slice( " + start +
    (end ? ", " + end : "") +
    ").css( 'background', 'yellow' );" );
}
​
$( "button" ).click( colorEm );
</script>
​
</body>
</html>
```
     * @example ​ ````Selects all paragraphs, then slices the selection to include only the first element.
```javascript
$( "p" ).slice( 0, 1 ).wrapInner( "<b></b>" );
```
     * @example ​ ````Selects all paragraphs, then slices the selection to include only the first and second element.
```javascript
$( "p" ).slice( 0, 2 ).wrapInner( "<b></b>" );
```
     * @example ​ ````Selects all paragraphs, then slices the selection to include only the second element.
```javascript
$( "p" ).slice( 1, 2 ).wrapInner( "<b></b>" );
```
     * @example ​ ````Selects all paragraphs, then slices the selection to include only the second and third element.
```javascript
$( "p" ).slice( 1 ).wrapInner( "<b></b>" );
```
     * @example ​ ````Selects all paragraphs, then slices the selection to include only the third element.
```javascript
$( "p" ).slice( -1 ).wrapInner( "<b></b>" );
```
     */
    slice(start: number, end?: number): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideDown/ }\`
     * @since 1.4.3
     */
    slideDown(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideDown/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all inputs to slide down, completing the animation within 1000 milliseconds. Once the animation is done, the input look is changed especially if it is the middle input which gets the focus.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideDown demo</title>
  <style>
  div {
    background: #cfd;
    margin: 3px;
    width: 50px;
    text-align: center;
    float: left;
    cursor: pointer;
    border: 2px outset black;
    font-weight: bolder;
  }
  input {
    display: none;
    width: 120px;
    float: left;
    margin: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>Push!</div>
<input type="text">
<input type="text" class="middle">
<input type="text">
  ​
<script>
$( "div" ).click(function() {
  $( this ).css({
    borderStyle: "inset",
    cursor: "wait"
  });
  $( "input" ).slideDown( 1000, function() {
    $( this )
      .css( "border", "2px red inset" )
      .filter( ".middle" )
        .css( "background", "yellow" )
        .focus();
    $( "div" ).css( "visibility", "hidden" );
  });
});
​
</script>
​
</body>
</html>
```
     */
    slideDown(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/slideDown/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all divs to slide down and show themselves over 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideDown demo</title>
  <style>
  div {
    background: #de9a44;
    margin: 3px;
    width: 80px;
    height: 40px;
    display: none;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Click me!
<div></div>
<div></div>
<div></div>
​
<script>
$( document.body ).click(function () {
  if ( $( "div:first" ).is( ":hidden" ) ) {
    $( "div" ).slideDown( "slow" );
  } else {
    $( "div" ).hide();
  }
});
</script>
​
</body>
</html>
```
     */
    slideDown(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideToggle/ }\`
     * @since 1.4.3
     */
    slideToggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideToggle/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates divs between dividers with a toggle that makes some appear and some disappear.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideToggle demo</title>
  <style>
  div {
    background: #b977d1;
    margin: 3px;
    width: 60px;
    height: 60px;
    float: left;
  }
  div.still {
    background: #345;
    width: 5px;
  }
  div.hider {
    display: none;
  }
  span {
    color: red;
  }
  p {
    clear: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div></div>
<div class="still"></div>
<div style="display:none;">
</div><div class="still"></div>
<div></div>
<div class="still"></div>
<div class="hider"></div>
<div class="still"></div>
<div class="hider"></div>
<div class="still"></div>
<div></div>
<p><button id="aa">Toggle</button> There have been <span>0</span> toggled divs.</p>
​
<script>
$( "#aa" ).click(function() {
  $( "div:not(.still)" ).slideToggle( "slow", function() {
    var n = parseInt( $( "span" ).text(), 10 );
    $( "span" ).text( n + 1 );
  });
});
</script>
​
</body>
</html>
```
     */
    slideToggle(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/slideToggle/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all paragraphs to slide up or down, completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideToggle demo</title>
  <style>
  p {
    width: 400px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Toggle</button>
<p>
  This is the paragraph to end all paragraphs.  You
  should feel <em>lucky</em> to have seen such a paragraph in
  your life.  Congratulations!
</p>
​
<script>
$( "button" ).click(function() {
  $( "p" ).slideToggle( "slow" );
});
</script>
​
</body>
</html>
```
     */
    slideToggle(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideUp/ }\`
     * @since 1.4.3
     */
    slideUp(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration_easing _&#x40;param_ `duration_easing`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/slideUp/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates the parent paragraph to slide up, completing the animation within 200 milliseconds. Once the animation is done, it displays an alert.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideUp demo</title>
  <style>
 div {
   margin: 2px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  <button>Hide One</button>
  <input type="text" value="One">
</div>
​
<div>
  <button>Hide Two</button>
  <input type="text" value="Two">
</div>
​
<div>
  <button>Hide Three</button>
  <input type="text" value="Three">
</div>
​
<div id="msg"></div>
​
<script>
$( "button" ).click(function() {
  $( this ).parent().slideUp( "slow", function() {
    $( "#msg" ).text( $( "button", this ).text() + " has completed." );
  });
});
</script>
​
</body>
</html>
```
     */
    slideUp(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options _&#x40;param_ `duration_easing_complete_options`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `easing` — A string indicating which easing function to use for the transition. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method.
     * @see \`{@link https://api.jquery.com/slideUp/ }\`
     * @since 1.0
     * @since 1.4.3
     * @example ​ ````Animates all divs to slide up, completing the animation within 400 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideUp demo</title>
  <style>
  div {
    background: #3d9a44;
    margin: 3px;
    width: 80px;
    height: 40px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Click me!
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
​
<script>
$( document.body ).click(function() {
  if ( $( "div:first" ).is( ":hidden" ) ) {
    $( "div" ).show( "slow" );
  } else {
    $( "div" ).slideUp();
  }
});
</script>
​
</body>
</html>
```
     */
    slideUp(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see \`{@link https://api.jquery.com/stop/ }\`
     * @since 1.7
     */
    stop(queue: string, clearQueue?: boolean, jumpToEnd?: boolean): this;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see \`{@link https://api.jquery.com/stop/ }\`
     * @since 1.2
     * @example ​ ````Click the Go button once to start the animation, then click the STOP button to stop it where it&#39;s currently positioned.  Another option is to click several buttons to queue them up and see that stop just kills the currently playing one.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>stop demo</title>
  <style>
  div {
    position: absolute;
    background-color: #abc;
    left: 0px;
    top: 30px;
    width: 60px;
    height: 60px;
    margin: 5px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="go">Go</button>
<button id="stop">STOP!</button>
<button id="back">Back</button>
<div class="block"></div>
​
<script>
// Start animation
$( "#go" ).click(function() {
  $( ".block" ).animate({ left: "+=100px" }, 2000 );
});
​
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
​
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( ".block" ).animate({ left: "-=100px" }, 2000 );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Click the slideToggle button to start the animation, then click again before the animation is completed. The animation will toggle the other direction from the saved starting point.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>stop demo</title>
  <style>
  .block {
    background-color: #abc;
    border: 2px solid black;
    width: 200px;
    height: 80px;
    margin: 10px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="toggle">slideToggle</button>
<div class="block"></div>
​
<script>
var $block = $( ".block" );
​
// Toggle a sliding animation animation
$( "#toggle" ).on( "click", function() {
  $block.stop().slideToggle( 1000 );
});
</script>
​
</body>
</html>
```
     */
    stop(clearQueue?: boolean, jumpToEnd?: boolean): this;
    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/submit/ }\`
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     */
    submit<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/submit/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.3. Use \`{@link on }\` or \`{@link trigger }\`.
     *
     * **Cause**: The `.on()` and `.trigger()` methods can set an event handler or generate an event for any event type, and should be used instead of the shortcut methods. This message also applies to the other event shorthands, including: blur, focus, focusin, focusout, resize, scroll, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, and contextmenu.
     *
     * **Solution**: Instead of `.click(fn)` use `.on("click", fn)`. Instead of `.click()` use `.trigger("click")`.
     * @example ​ ````If you&#39;d like to prevent forms from being submitted unless a flag variable is set, try:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>submit demo</title>
  <style>
  p {
    margin: 0;
    color: blue;
  }
  div,p {
    margin-left: 10px;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Type 'correct' to validate.</p>
<form action="javascript:alert( 'success!' );">
  <div>
    <input type="text">
    <input type="submit">
  </div>
</form>
<span></span>
​
<script>
$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
​
  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});
</script>
​
</body>
</html>
```
     * @example ​ ````If you&#39;d like to prevent forms from being submitted unless a flag variable is set, try:
```javascript
$( "form" ).submit(function() {
  return this.some_flag_variable;
});
```
     * @example ​ ````To trigger the submit event on the first form on the page, try:
```javascript
$( "form:first" ).submit();
```
     */
    submit(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will
     *             be converted to a String representation.
     *             A function returning the text content to set. Receives the index position of the element in the set
     *             and the old text value as arguments.
     * @see \`{@link https://api.jquery.com/text/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Add text to the paragraph (notice the bold tag is escaped).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>text demo</title>
  <style>
  p {
    color: blue;
    margin: 8px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Test Paragraph.</p>
​
<script>
$( "p" ).text( "<b>Some</b> new text." );
</script>
​
</body>
</html>
```
     */
    text(text: string | number | boolean | ((this: TElement, index: number, text: string) => string | number | boolean)): this;
    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     *
     * @see \`{@link https://api.jquery.com/text/ }\`
     * @since 1.0
     * @example ​ ````Find the text in the first paragraph (stripping out the html), then set the html of the last paragraph to show it is just text (the red bold is gone).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>text demo</title>
  <style>
  p {
    color: blue;
    margin: 8px;
  }
  b {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><b>Test</b> Paragraph.</p>
<p></p>
​
<script>
var str = $( "p:first" ).text();
$( "p:last" ).html( str );
</script>
​
</body>
</html>
```
     */
    text(): string;
    /**
     * Retrieve all the elements contained in the jQuery set, as an array.
     *
     * @see \`{@link https://api.jquery.com/toArray/ }\`
     * @since 1.4
     * @example ​ ````Select all divs in the document and return the DOM Elements as an Array; then use the built-in reverse() method to reverse that array.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toArray demo</title>
  <style>
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Reversed - <span></span>
​
<div>One</div>
<div>Two</div>
<div>Three</div>​
<script>
function disp( divs ) {
  var a = [];
  for ( var i = 0; i < divs.length; i++ ) {
    a.push( divs[ i ].innerHTML );
  }
  $( "span" ).text( a.join( " " ) );
}
​
disp( $( "div" ).toArray().reverse() );
</script>
​
</body>
</html>
```
     */
    toArray(): TElement[];
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/toggle/ }\`
     * @since 1.4.3
     */
    toggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see \`{@link https://api.jquery.com/toggle/ }\`
     * @since 1.0
     */
    toggle(duration: JQuery.Duration, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param duration_complete_options_display _&#x40;param_ `duration_complete_options_display`
     * <br>
     * * `duration` — A string or number determining how long the animation will run. <br>
     * * `complete` — A function to call once the animation is complete, called once per matched element. <br>
     * * `options` — A map of additional options to pass to the method. <br>
     * * `display` — Use true to show the element or false to hide it.
     * @see \`{@link https://api.jquery.com/toggle/ }\`
     * @since 1.0
     * @since 1.3
     * @example ​ ````Toggles all paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggle demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Toggle</button>
<p>Hello</p>
<p style="display: none">Good Bye</p>
​
<script>
$( "button" ).click(function() {
  $( "p" ).toggle();
});
</script>
​
</body>
</html>
```
     * @example ​ ````Animates all paragraphs to be shown if they are hidden and hidden if they are visible, completing the animation within 600 milliseconds.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggle demo</title>
  <style>
  p {
    background: #dad;
    font-weight: bold;
    font-size: 16px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Toggle 'em</button>
<p>Hiya</p>
<p>Such interesting text, eh?</p>
​
<script>
$( "button" ).click(function() {
  $( "p" ).toggle( "slow" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Shows all paragraphs, then hides them all, back and forth.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggle demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Toggle</button>
<p>Hello</p>
<p style="display: none">Good Bye</p>
​
<script>
var flip = 0;
$( "button" ).click(function() {
  $( "p" ).toggle( flip++ % 2 === 0 );
});
</script>
​
</body>
</html>
```
     */
    toggle(duration_complete_options_display?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement> | boolean): this;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on
     * either the class's presence or the value of the state argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     *                  An array of classes to be toggled for each element in the matched set.
     *                  A function that returns class names to be toggled in the class attribute of each element in the
     *                  matched set. Receives the index position of the element in the set, the old class value, and the state as arguments.
     * @param state A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     * @see \`{@link https://api.jquery.com/toggleClass/ }\`
     * @since 1.0
     * @since 1.3
     * @since 1.4
     * @since 3.3
     * @example ​ ````Toggle the class &#39;highlight&#39; when a paragraph is clicked.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggleClass demo</title>
  <style>
  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bolder;
    cursor: pointer;
  }
  .blue {
    color: blue;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="blue">Click to toggle</p>
<p class="blue highlight">highlight</p>
<p class="blue">on these</p>
<p class="blue">paragraphs</p>
​
<script>
$( "p" ).click(function() {
  $( this ).toggleClass( "highlight" );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Add the &quot;highlight&quot; class to the clicked paragraph on every third click of that paragraph, remove it every first and second click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggleClass demo</title>
  <style>
  p {
    margin: 4px;
    font-size: 16px;
    font-weight: bolder;
    cursor: pointer;
  }
  .blue {
    color: blue;
  }
  .highlight {
    background: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p class="blue">Click to toggle (<span>clicks: 0</span>)</p>
<p class="blue highlight">highlight (<span>clicks: 0</span>)</p>
<p class="blue">on these (<span>clicks: 0</span>)</p>
<p class="blue">paragraphs (<span>clicks: 0</span>)</p>
​
<script>
var count = 0;
$( "p" ).each(function() {
  var $thisParagraph = $( this );
  var count = 0;
  $thisParagraph.click(function() {
    count++;
    $thisParagraph.find( "span" ).text( "clicks: " + count );
    $thisParagraph.toggleClass( "highlight", count % 3 === 0 );
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Toggle the class name(s) indicated on the buttons for each div.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>toggleClass demo</title>
  <style>
  .wrap > div {
    float: left;
    width: 100px;
    margin: 1em 1em 0 0;
    padding-left: 3px;
    border: 1px solid #abc;
  }
  div.a {
    background-color: aqua;
  }
  div.b {
    background-color: burlywood;
  }
  div.c {
    background-color: cornsilk;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div class="buttons">
  <button>toggle</button>
  <button class="a">toggle a</button>
  <button class="a b">toggle a b</button>
  <button class="a b c">toggle a b c</button>
  <a href="#">reset</a>
</div>
<div class="wrap">
  <div></div>
  <div class="b"></div>
  <div class="a b"></div>
  <div class="a c"></div>
</div>
​
<script>
var cls = [ "", "a", "a b", "a b c" ];
var divs = $( "div.wrap" ).children();
var appendClass = function() {
  divs.append(function() {
    return "<div>" + ( this.className || "none" ) + "</div>";
  });
};
​
appendClass();
​
$( "button" ).on( "click", function() {
  var tc = this.className || undefined;
  divs.toggleClass( tc );
  appendClass();
});
​
$( "a" ).on( "click", function( event ) {
  event.preventDefault();
  divs.empty().each(function( i ) {
    this.className = cls[ i ];
  });
  appendClass();
});
</script>
​
</body>
</html>
```
     */
    toggleClass<TState extends boolean>(className: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string, state: TState) => string),
                                        state?: TState): this;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on
     * either the class's presence or the value of the state argument.
     *
     * @param state A boolean value to determine whether the class should be added or removed.
     * @see \`{@link https://api.jquery.com/toggleClass/ }\`
     * @since 1.4
     * @deprecated ​ Deprecated since 3.0. See \`{@link https://github.com/jquery/jquery/pull/2618 }\`.
     *
     * **Cause**: Calling `.toggleClass()` with no arguments, or with a single Boolean `true` or `false` argument, has been deprecated. Its behavior was poorly documented, but essentially the method saved away the current class value in a data item when the class was removed and restored the saved value when it was toggled back. If you do not believe you are specificially trying to use this form of the method, it is possible you are accidentally doing so via an inadvertent undefined value, as `.toggleClass( undefined )` toggles all classes.
     *
     * **Solution**: If this functionality is still needed, save the current full `.attr( "class" )` value in a data item and restore it when required.
     */
    toggleClass(state?: boolean): this;
    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     *                  A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see \`{@link https://api.jquery.com/trigger/ }\`
     * @since 1.0
     * @since 1.3
     * @example ​ ````Clicks to button #2 also trigger a click for button #1.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>trigger demo</title>
  <style>
  button {
    margin: 10px;
  }
  div {
    color: blue;
    font-weight: bold;
  }
  span {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Button #1</button>
<button>Button #2</button>
<div><span>0</span> button #1 clicks.</div>
<div><span>0</span> button #2 clicks.</div>
​
<script>
$( "button:first" ).click(function() {
  update( $( "span:first" ) );
});
​
$( "button:last" ).click(function() {
  $( "button:first" ).trigger( "click" );
  update( $( "span:last" ) );
});
​
function update( j ) {
  var n = parseInt( j.text(), 10 );
  j.text( n + 1 );
}
</script>
​
</body>
</html>
```
     * @example ​ ````To submit the first form without using the submit() function, try:
```javascript
$( "form:first" ).trigger( "submit" );
```
     * @example ​ ````To submit the first form without using the submit() function, try:
```javascript
var event = jQuery.Event( "submit" );
$( "form:first" ).trigger( event );
if ( event.isDefaultPrevented() ) {
  // Perform an action...
}
```
     * @example ​ ````To pass arbitrary data to an event:
```javascript
$( "p" )
  .click(function( event, a, b ) {
    // When a normal click fires, a and b are undefined
    // for a trigger like below a refers to "foo" and b refers to "bar"
  })
  .trigger( "click", [ "foo", "bar" ] );
```
     * @example ​ ````To pass arbitrary data through an event object:
```javascript
var event = jQuery.Event( "logged" );
event.user = "foo";
event.pass = "bar";
$( "body" ).trigger( event );
```
     * @example ​ ````Alternative way to pass data through an event object:
```javascript
$( "body" ).trigger({
  type:"logged",
  user:"foo",
  pass:"bar"
});
```
     */
    trigger(eventType: string | JQuery.Event<TElement>, extraParameters?: any[] | JQuery.PlainObject | string | number | boolean): this;
    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     *                  A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see \`{@link https://api.jquery.com/triggerHandler/ }\`
     * @since 1.2
     * @since 1.3
     * @example ​ ````If you called .triggerHandler() on a focus event - the browser&#39;s default focus action would not be triggered, only the event handlers bound to the focus event.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>triggerHandler demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="old">.trigger( "focus" )</button>
<button id="new">.triggerHandler( "focus" )</button><br><br>
​
<input type="text" value="To Be Focused">
​
<script>
$( "#old" ).click(function() {
  $( "input" ).trigger( "focus" );
});
$( "#new" ).click(function() {
  $( "input" ).triggerHandler( "focus" );
});
$( "input" ).focus(function() {
  $( "<span>Focused!</span>" ).appendTo( "body" ).fadeOut( 1000 );
});
</script>
​
</body>
</html>
```
     */
    triggerHandler(eventType: string | JQuery.Event<TElement>, extraParameters?: any[] | JQuery.PlainObject | string | number | boolean): undefined | any;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param event A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/unbind/ }\`
     * @since 1.0
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link off }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````Can bind and unbind events to the colored button.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>unbind demo</title>
  <style>
  button {
    margin: 5px;
  }
  button#theone {
    color: red;
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="theone">Does nothing...</button>
<button id="bind">Bind Click</button>
<button id="unbind">Unbind Click</button>
<div style="display:none;">Click!</div>
​
<script>
function aClick() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "#theone" )
    .bind( "click", aClick )
    .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "#theone" )
    .unbind( "click", aClick )
    .text( "Does nothing..." );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To unbind just one previously bound handler, pass the function in as the second argument:
```javascript
var foo = function() {
  // Code to handle some kind of event
};
​
$( "p" ).bind( "click", foo ); // ... Now foo will be called when paragraphs are clicked ...
​
$( "p" ).unbind( "click", foo ); // ... foo will no longer be called.
```
     */
    unbind(event: string, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param event A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     *              A jQuery.Event object.
     * @see \`{@link https://api.jquery.com/unbind/ }\`
     * @since 1.0
     * @deprecated ​ Deprecated since 3.0. Use \`{@link off }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````To unbind all events from all paragraphs, write:
```javascript
$( "p" ).unbind();
```
     * @example ​ ````To unbind all click events from all paragraphs, write:
```javascript
$( "p" ).unbind( "click" );
```
     */
    unbind(event?: string | JQuery.Event<TElement>): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
     * @param handler A function to execute each time the event is triggered.
     * @see \`{@link https://api.jquery.com/undelegate/ }\`
     * @since 1.4.2
     * @deprecated ​ Deprecated since 3.0. Use \`{@link off }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````Can bind and unbind events to the colored button.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>undelegate demo</title>
  <style>
  button {
    margin: 5px;
  }
  button#theone {
    color: red;
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="theone">Does nothing...</button>
<button id="bind">Bind Click</button>
<button id="unbind">Unbind Click</button>
<div style="display:none;">Click!</div>
​
<script>
function aClick() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .delegate( "#theone", "click", aClick )
    .find( "#theone" ).text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "body" )
    .undelegate( "#theone", "click", aClick )
    .find( "#theone" ).text( "Does nothing..." );
});
</script>
​
</body>
</html>
```
     * @example ​ ````To undelegate just one previously bound handler, pass the function in as the third argument:
```javascript
var foo = function () {
  // Code to handle some kind of event
};
​
// ... Now foo will be called when paragraphs are clicked ...
$( "body" ).delegate( "p", "click", foo );
​
// ... foo will no longer be called.
$( "body" ).undelegate( "p", "click", foo );
```
     */
    undelegate(selector: JQuery.Selector, eventType: string, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param eventTypes A string containing a JavaScript event type, such as "click" or "keydown"
     *                   An object of one or more event types and previously bound functions to unbind from them.
     * @see \`{@link https://api.jquery.com/undelegate/ }\`
     * @since 1.4.2
     * @since 1.4.3
     * @deprecated ​ Deprecated since 3.0. Use \`{@link off }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     */
    undelegate(selector: JQuery.Selector, eventTypes: string | JQuery.PlainObject<JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false>): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param namespace A selector which will be used to filter the event results.
     * @see \`{@link https://api.jquery.com/undelegate/ }\`
     * @since 1.4.2
     * @since 1.6
     * @deprecated ​ Deprecated since 3.0. Use \`{@link off }\`.
     *
     * **Cause**: These event binding methods have been deprecated in favor of the `.on()` and `.off()` methods which can handle both delegated and direct event binding. Although the older methods are still present in jQuery 3.0, they may be removed as early as the next major-version update.
     *
     * **Solution**: Change the method call to use `.on()` or `.off()`, the documentation for the old methods include specific instructions. In general, the `.bind()` and `.unbind()` methods can be renamed directly to `.on()` and `.off()` respectively since the argument orders are identical.
     * @example ​ ````To unbind all delegated events from all paragraphs, write:
```javascript
$( "p" ).undelegate();
```
     * @example ​ ````To unbind all delegated click events from all paragraphs, write:
```javascript
$( "p" ).undelegate( "click" );
```
     * @example ​ ````To unbind all delegated events by their namespace:
```javascript
var foo = function() {
  // Code to handle some kind of event
};
​
// Delegate events under the ".whatever" namespace
$( "form" ).delegate( ":button", "click.whatever", foo );
​
$( "form" ).delegate( "input[type='text'] ", "keypress.whatever", foo );
​
// Unbind all events delegated under the ".whatever" namespace
$( "form" ).undelegate( ".whatever" );
```
     */
    undelegate(namespace?: string): this;
    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     *
     * @param selector A selector to check the parent element against. If an element's parent does not match the selector,
     *                 the element won't be unwrapped.
     * @see \`{@link https://api.jquery.com/unwrap/ }\`
     * @since 1.4
     * @since 3.0
     * @example ​ ````Wrap/unwrap a div around each of the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>unwrap demo</title>
  <style>
  div {
    border: 2px solid blue;
  }
  p {
    background: yellow;
    margin: 4px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​<button>wrap/unwrap</button>
<p>Hello</p>
<p>cruel</p>
<p>World</p>​
<script>
var pTags = $( "p" );
$( "button" ).click(function() {
  if ( pTags.parent().is( "div" ) ) {
    pTags.unwrap();
  } else {
    pTags.wrap( "<div></div>" );
  }
});
</script>
​
</body>
</html>
```
     */
    unwrap(selector?: string): this;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, a number, or an array of strings corresponding to the value of each matched
     *              element to set as selected/checked.
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old value as arguments.
     * @see \`{@link https://api.jquery.com/val/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Set the value of an input box.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>val demo</title>
  <style>
  button {
    margin: 4px;
    cursor: pointer;
  }
  input {
    margin: 4px;
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>
  <button>Feed</button>
  <button>the</button>
  <button>Input</button>
</div>
<input type="text" value="click a button">
​
<script>
$( "button" ).click(function() {
  var text = $( this ).text();
  $( "input" ).val( text );
});
</script>
​
</body>
</html>
```
     * @example ​ ````Use the function argument to modify the value of an input box.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>val demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Type something and then click or tab out of the input.</p>
<input type="text" value="type something">
​
<script>
$( "input" ).on( "blur", function() {
  $( this ).val(function( i, val ) {
    return val.toUpperCase();
  });
});
</script>
​
</body>
</html>
```
     * @example ​ ````Set a single select, a multiple select, checkboxes and a radio button .
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>val demo</title>
  <style>
  body {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<select id="single">
  <option>Single</option>
  <option>Single2</option>
</select>
​
<select id="multiple" multiple="multiple">
  <option selected="selected">Multiple</option>
  <option>Multiple2</option>
  <option selected="selected">Multiple3</option>
</select>
​
<br>
<input type="checkbox" name="checkboxname" value="check1"> check1
<input type="checkbox" name="checkboxname" value="check2"> check2
<input type="radio" name="r" value="radio1"> radio1
<input type="radio" name="r" value="radio2"> radio2
​
<script>
$( "#single" ).val( "Single2" );
$( "#multiple" ).val([ "Multiple2", "Multiple3" ]);
$( "input").val([ "check1", "check2", "radio1" ]);
</script>
​
</body>
</html>
```
     */
    val(value: string | number | string[] | ((this: TElement, index: number, value: string) => string)): this;
    /**
     * Get the current value of the first element in the set of matched elements.
     *
     * @see \`{@link https://api.jquery.com/val/ }\`
     * @since 1.0
     * @example ​ ````Get the single value from a single select and an array of values from a multiple select and display their values.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>val demo</title>
  <style>
  p {
    color: red;
    margin: 4px;
  }
  b {
    color: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p></p>
​
<select id="single">
  <option>Single</option>
  <option>Single2</option>
</select>
​
<select id="multiple" multiple="multiple">
  <option selected="selected">Multiple</option>
  <option>Multiple2</option>
  <option selected="selected">Multiple3</option>
</select>
​
<script>
function displayVals() {
  var singleValues = $( "#single" ).val();
  var multipleValues = $( "#multiple" ).val() || [];
  // When using jQuery 3:
  // var multipleValues = $( "#multiple" ).val();
  $( "p" ).html( "<b>Single:</b> " + singleValues +
    " <b>Multiple:</b> " + multipleValues.join( ", " ) );
}
​
$( "select" ).change( displayVals );
displayVals();
</script>
​
</body>
</html>
```
     * @example ​ ````Find the value of an input box.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>val demo</title>
  <style>
  p {
    color: blue;
    margin: 8px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input type="text" value="some text">
<p></p>
​
<script>
$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();
</script>
​
</body>
</html>
```
     */
    val(): string | number | string[] | undefined;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the width to set. Receives the index position of the element in the set and the
     *              old width as arguments. Within the function, this refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/width/ }\`
     * @since 1.0
     * @since 1.4.1
     * @example ​ ````Change the width of each div the first time it is clicked (and change its color).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>width demo</title>
  <style>
  div {
    width: 70px;
    height: 50px;
    float: left;
    margin: 5px;
    background: red;
    cursor: pointer;
  }
  .mod {
    background: blue;
    cursor: default;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
<div>d</div>
​
<script>
var modWidth = 50;
$( "div" ).one( "click", function() {
  $( this ).width( modWidth ).addClass( "mod" );
  modWidth -= 8;
});
</script>
​
</body>
</html>
```
     */
    width(value: string | number | ((this: TElement, index: number, value: number) => string | number)): this;
    /**
     * Get the current computed width for the first element in the set of matched elements.
     *
     * @see \`{@link https://api.jquery.com/width/ }\`
     * @since 1.0
     * @example ​ ````Show various widths.  Note the values are from the iframe so might be smaller than you expected.  The yellow highlight shows the iframe body.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>width demo</title>
  <style>
  body {
    background: yellow;
  }
  button {
    font-size: 12px;
    margin: 2px;
  }
  p {
    width: 150px;
    border: 1px red solid;
  }
  div {
    color: red;
    font-weight: bold;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button id="getp">Get Paragraph Width</button>
<button id="getd">Get Document Width</button>
<button id="getw">Get Window Width</button>
<div>&nbsp;</div>
<p>
  Sample paragraph to test width
</p>
​
<script>
function showWidth( ele, w ) {
  $( "div" ).text( "The width for the " + ele + " is " + w + "px." );
}
$( "#getp" ).click(function() {
  showWidth( "paragraph", $( "p" ).width() );
});
$( "#getd" ).click(function() {
  showWidth( "document", $( document ).width() );
});
$("#getw").click(function() {
  showWidth( "window", $( window ).width() );
});
</script>
​
</body>
</html>
```
     */
    width(): number | undefined;
    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the
     *                        matched elements. When you pass a jQuery collection containing more than one element, or a selector
     *                        matching more than one element, the first element will be used.
     *                        A callback function returning the HTML content or jQuery object to wrap around the matched elements.
     *                        Receives the index position of the element in the set as an argument. Within the function, this
     *                        refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/wrap/ }\`
     * @since 1.0
     * @since 1.4
     * @example ​ ````Wrap a new div around all of the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrap demo</title>
  <style>
  div {
    border: 2px solid blue;
  }
  p {
    background: yellow;
    margin: 4px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrap( "<div></div>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Wraps a newly created tree of objects around the spans.  Notice anything in between the spans gets left out like the &lt;strong&gt; (red text) in this example.  Even the white space between spans is left out.  Click View Source to see the original html.&gt;
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrap demo</title>
  <style>
  div {
    border: 2px blue solid;
    margin: 2px;
    padding: 2px;
  }
  p {
    background: yellow;
    margin: 2px;
    padding: 2px;
  }
  strong {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>Span Text</span>
<strong>What about me?</strong>
<span>Another One</span>
​
<script>
$( "span" ).wrap( "<div><div><p><em><b></b></em></p></div></div>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Wrap a new div around all of the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrap demo</title>
  <style>
  div {
    border: 2px solid blue;
  }
  p {
    background: yellow;
    margin: 4px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrap( document.createElement( "div" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Wrap a jQuery object double depth div around all of the paragraphs.  Notice it doesn&#39;t move the object but just clones it to wrap around its target.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrap demo</title>
  <style>
  div {
    border: 2px solid blue;
    margin: 2px;
    padding: 2px;
  }
  .doublediv {
    border-color: red;
  }
  p {
    background: yellow;
    margin: 4px;
    font-size: 14px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
<div class="doublediv"><div></div></div>
​
<script>
$( "p" ).wrap( $( ".doublediv" ) );
</script>
​
</body>
</html>
```
     */
    wrap(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement, index: number) => string | JQuery)): this;
    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     *                        A callback function returning the HTML content or jQuery object to wrap around all the matched
     *                        elements. Within the function, this refers to the first element in the set. Prior to jQuery 3.0, the
     *                        callback was incorrectly called for every element in the set and received the index position of the
     *                        element in the set as an argument.
     * @see \`{@link https://api.jquery.com/wrapAll/ }\`
     * @since 1.2
     * @since 1.4
     * @example ​ ````Wrap a new div around all of the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapAll demo</title>
  <style>
  div {
    border: 2px solid blue;
  }
  p {
    background: yellow;
    margin: 4px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrapAll( "<div></div>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Wraps a newly created tree of objects around the spans.  Notice anything in between the spans gets left out like the &lt;strong&gt; (red text) in this example.  Even the white space between spans is left out.  Click View Source to see the original html.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapAll demo</title>
  <style>
  div {
    border: 2px blue solid;
    margin: 2px;
    padding: 2px;
  }
  p {
    background: yellow;
    margin: 2px;
    padding: 2px;
  }
  strong {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<span>Span Text</span>
<strong>What about me?</strong>
<span>Another One</span>
​
<script>
$( "span").wrapAll( "<div><div><p><em><b></b></em></p></div></div>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Wrap a new div around all of the paragraphs.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapAll demo</title>
  <style>
  div {
    border: 2px solid blue;
  }
  p {
    background: yellow;
    margin: 4px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrapAll( document.createElement( "div" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Wrap a jQuery object double depth div around all of the paragraphs.  Notice it doesn&#39;t move the object but just clones it to wrap around its target.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapAll demo</title>
  <style>
  div {
    border: 2px solid blue;
    margin: 2px;
    padding: 2px;
  }
  .doublediv {
    border-color: red;
  }
  p {
    background: yellow;
    margin: 4px;
    font-size: 14px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
<div class="doublediv"><div></div></div>
​
<script>
$( "p" ).wrapAll( $( ".doublediv" ) );
</script>
​
</body>
</html>
```
     */
    wrapAll(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement) => string | JQuery)): this;
    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     *
     * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap
     *                        around the content of the matched elements.
     *                        A callback function which generates a structure to wrap around the content of the matched elements.
     *                        Receives the index position of the element in the set as an argument. Within the function, this
     *                        refers to the current element in the set.
     * @see \`{@link https://api.jquery.com/wrapInner/ }\`
     * @since 1.2
     * @since 1.4
     * @example ​ ````Selects all paragraphs and wraps a bold tag around each of its contents.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapInner demo</title>
  <style>
  p {
    background: #bbf;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrapInner( "<b></b>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Wraps a newly created tree of objects around the inside of the body.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapInner demo</title>
  <style>
  div {
    border: 2px green solid;
    margin: 2px;
    padding: 2px;
  }
  p {
    background: yellow;
    margin: 2px;
    padding: 2px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
Plain old text, or is it?
​
<script>
$( "body" ).wrapInner( "<div><div><p><em><b></b></em></p></div></div>" );
</script>
​
</body>
</html>
```
     * @example ​ ````Selects all paragraphs and wraps a bold tag around each of its contents.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapInner demo</title>
  <style>
  p {
    background: #9f9;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrapInner( document.createElement( "b" ) );
</script>
​
</body>
</html>
```
     * @example ​ ````Selects all paragraphs and wraps a jQuery object around each of its contents.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>wrapInner demo</title>
  <style>
  p {
    background: #9f9;
  }
  .red {
    color: red;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>Hello</p>
<p>cruel</p>
<p>World</p>
​
<script>
$( "p" ).wrapInner( $( "<span class='red'></span>" ) );
</script>
​
</body>
</html>
```
     */
    wrapInner(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement, index: number) => string | JQuery | Element)): this;

    [n: number]: TElement;
}

// region ES5 compatibility
// #region ES5 compatibility

// tslint:disable-next-line:no-empty-interface
interface Iterable<T> { }

interface SymbolConstructor {
    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */
    readonly toStringTag: symbol;
}

declare var Symbol: SymbolConstructor;

// #endregion

declare namespace JQuery {
    type TypeOrArray<T> = T | T[];
    type Node = Element | Text | Comment | DocumentFragment;

    /**
     * A string is designated htmlString in jQuery documentation when it is used to represent one or more
     * DOM elements, typically to be created and inserted in the document. When passed as an argument of
     * the jQuery() function, the string is identified as HTML if it starts with <tag ... >) and is parsed
     * as such until the final > character. Prior to jQuery 1.9, a string was considered to be HTML if it
     * contained <tag ... > anywhere within the string.
     */
    type htmlString = string;
    /**
     * A selector is used in jQuery to select DOM elements from a DOM document. That document is, in most
     * cases, the DOM document present in all browsers, but can also be an XML document received via Ajax.
     */
    type Selector = string;

    /**
     * The PlainObject type is a JavaScript object containing zero or more key-value pairs. The plain
     * object is, in other words, an Object object. It is designated "plain" in jQuery documentation to
     * distinguish it from other kinds of JavaScript objects: for example, null, user-defined arrays, and
     * host objects such as document, all of which have a typeof value of "object."
     *
     * **Note**: The type declaration of PlainObject is imprecise. It includes host objects and user-defined
     *           arrays which do not match jQuery's definition.
     */
    interface PlainObject<T = any> {
        [key: string]: T;
    }

    interface Selectors extends Sizzle.Selectors {
        /**
         * @deprecated ​ Deprecated since 3.0. Use \`{@link Selectors#pseudos }\`.
         *
         * **Cause**: The standard way to add new custom selectors through jQuery is `jQuery.expr.pseudos`. These two other aliases are deprecated, although they still work as of jQuery 3.0.
         *
         * **Solution**: Rename any of the older usage to `jQuery.expr.pseudos`. The functionality is identical.
         */
        ':': Sizzle.Selectors.PseudoFunctions;
        /**
         * @deprecated ​ Deprecated since 3.0. Use \`{@link Selectors#pseudos }\`.
         *
         * **Cause**: The standard way to add new custom selectors through jQuery is `jQuery.expr.pseudos`. These two other aliases are deprecated, although they still work as of jQuery 3.0.
         *
         * **Solution**: Rename any of the older usage to `jQuery.expr.pseudos`. The functionality is identical.
         */
        filter: Sizzle.Selectors.FilterFunctions;
    }

    // region Ajax
    // #region Ajax

    interface AjaxSettings<TContext = any> extends Ajax.AjaxSettingsBase<TContext> {
        /**
         * A string containing the URL to which the request is sent.
         */
        url?: string;
        /**
         * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
         * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
         * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
         * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
         * of the type of request.
         */
        beforeSend?(this: TContext, jqXHR: jqXHR, settings: AjaxSettings<TContext>): false | void;
    }

    interface UrlAjaxSettings<TContext = any> extends Ajax.AjaxSettingsBase<TContext> {
        /**
         * A string containing the URL to which the request is sent.
         */
        url: string;
        /**
         * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
         * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
         * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
         * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
         * of the type of request.
         */
        beforeSend?(this: TContext, jqXHR: jqXHR, settings: UrlAjaxSettings<TContext>): false | void;
    }

    namespace Ajax {
        type SuccessTextStatus = 'success' | 'notmodified' | 'nocontent';
        type ErrorTextStatus = 'timeout' | 'error' | 'abort' | 'parsererror';
        type TextStatus = SuccessTextStatus | ErrorTextStatus;

        interface SuccessCallback<TContext> {
            (this: TContext, data: any, textStatus: SuccessTextStatus, jqXHR: jqXHR): void;
        }

        interface ErrorCallback<TContext> {
            (this: TContext, jqXHR: jqXHR, textStatus: ErrorTextStatus, errorThrown: string): void;
        }

        interface CompleteCallback<TContext> {
            (this: TContext, jqXHR: jqXHR, textStatus: TextStatus): void;
        }

        /**
         * @see \`{@link https://api.jquery.com/jquery.ajax/#jQuery-ajax-settings }\`
         */
        interface AjaxSettingsBase<TContext> {
            /**
             * A set of key/value pairs that map a given dataType to its MIME type, which gets sent in the Accept
             * request header. This header tells the server what kind of response it will accept in return.
             */
            accepts?: PlainObject<string>;
            /**
             * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need
             * synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests
             * do not support synchronous operation. Note that synchronous requests may temporarily lock the
             * browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async:
             * false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback
             * options instead of the corresponding methods of the jqXHR object such as jqXHR.done().
             */
            async?: boolean;
            /**
             * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
             * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
             * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
             * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
             * of the type of request.
             */
            beforeSend?(this: TContext, jqXHR: jqXHR, settings: AjaxSettingsBase<TContext>): false | void;
            /**
             * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache
             * to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}"
             * to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a
             * POST is made to a URL that has already been requested by a GET.
             */
            cache?: boolean;
            /**
             * A function to be called when the request finishes (after success and error callbacks are executed).
             * The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a
             * string categorizing the status of the request ("success", "notmodified", "nocontent", "error",
             * "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of
             * functions. Each function will be called in turn. This is an Ajax Event.
             */
            complete?: TypeOrArray<CompleteCallback<TContext>>;
            /**
             * An object of string/regular-expression pairs that determine how jQuery will parse the response,
             * given its content type.
             */
            contents?: PlainObject<RegExp>;
            /**
             * When sending data to the server, use this content type. Default is
             * "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly
             * pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent).
             * As of jQuery 1.6 you can pass false to tell jQuery to not set any content type header. Note: The W3C
             * XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset
             * will not force the browser to change the encoding. Note: For cross-domain requests, setting the
             * content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or
             * text/plain will trigger the browser to send a preflight OPTIONS request to the server.
             */
            contentType?: string | false;
            /**
             * This object will be the context of all Ajax-related callbacks. By default, the context is an object
             * that represents the Ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
             */
            context?: TContext;
            /**
             * An object containing dataType-to-dataType converters. Each converter's value is a function that
             * returns the transformed value of the response.
             */
            converters?: PlainObject<((value: any) => any) | true>;
            /**
             * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of
             * crossDomain to true. This allows, for example, server-side redirection to another domain.
             */
            crossDomain?: boolean;
            /**
             * Data to be sent to the server. It is converted to a query string, if not already a string. It's
             * appended to the url for GET-requests. See processData option to prevent this automatic processing.
             * Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same
             * key based on the value of the traditional setting (described below).
             */
            data?: PlainObject | string;
            /**
             * A function to be used to handle the raw response data of XMLHttpRequest. This is a pre-filtering
             * function to sanitize the response. You should return the sanitized data. The function accepts two
             * arguments: The raw data returned from the server and the 'dataType' parameter.
             */
            dataFilter?(data: string, type: string): any;
            /**
             * The type of data that you're expecting back from the server. If none is specified, jQuery will try
             * to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON
             * will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be
             * returned as a string). The available types (and the result passed as the first argument to your
             * success callback) are:
             *
             * "xml": Returns a XML document that can be processed via jQuery.
             *
             * "html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.
             *
             * "script": Evaluates the response as JavaScript and returns it as plain text. Disables caching by
             * appending a query string parameter, _=[TIMESTAMP], to the URL unless the cache option is set to
             * true. Note: This will turn POSTs into GETs for remote-domain requests.
             *
             * "json": Evaluates the response as JSON and returns a JavaScript object. Cross-domain "json" requests
             * are converted to "jsonp" unless the request includes jsonp: false in its request options. The JSON
             * data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. As of
             * jQuery 1.9, an empty response is also rejected; the server should return a response of null or {}
             * instead. (See json.org for more information on proper JSON formatting.)
             *
             * "jsonp": Loads in a JSON block using JSONP. Adds an extra "?callback=?" to the end of your URL to
             * specify the callback. Disables caching by appending a query string parameter, "_=[TIMESTAMP]", to
             * the URL unless the cache option is set to true.
             *
             * "text": A plain text string.
             *
             * multiple, space-separated values: As of jQuery 1.5, jQuery can convert a dataType from what it
             * received in the Content-Type header to what you require. For example, if you want a text response to
             * be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it
             * received as text, and interpreted by jQuery as XML: "jsonp text xml". Similarly, a shorthand string
             * such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from
             * jsonp to text, and then from text to xml.
             */
            dataType?: 'xml' | 'html' | 'script' | 'json' | 'jsonp' | 'text' | string;
            /**
             * A function to be called if the request fails. The function receives three arguments: The jqXHR (in
             * jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an
             * optional exception object, if one occurred. Possible values for the second argument (besides null)
             * are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives
             * the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery
             * 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note:
             * This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
             */
            error?: TypeOrArray<ErrorCallback<TContext>>;
            /**
             * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to
             * prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to
             * control various Ajax Events.
             */
            global?: boolean;
            /**
             * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest
             * transport. The header X-Requested-With: XMLHttpRequest is always added, but its default
             * XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from
             * within the beforeSend function.
             */
            headers?: PlainObject<string | null | undefined>;
            /**
             * Allow the request to be successful only if the response has changed since the last request. This is
             * done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery
             * 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
             */
            ifModified?: boolean;
            /**
             * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery
             * does not recognize it as such by default. The following protocols are currently recognized as local:
             * file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so
             * once in the $.ajaxSetup() method.
             */
            isLocal?: boolean;
            /**
             * Override the callback function name in a JSONP request. This value will be used instead of
             * 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would
             * result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false
             * prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for
             * transformation. In this case, you should also explicitly set the jsonpCallback setting. For example,
             * { jsonp: false, jsonpCallback: "callbackName" }. If you don't trust the target of your Ajax
             * requests, consider setting the jsonp property to false for security reasons.
             */
            jsonp?: string | false;
            /**
             * Specify the callback function name for a JSONP request. This value will be used instead of the
             * random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name
             * as it'll make it easier to manage the requests and provide callbacks and error handling. You may
             * want to specify the callback when you want to enable better browser caching of GET requests. As of
             * jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback
             * is set to the return value of that function.
             */
            jsonpCallback?: string | ((this: TContext) => string);
            /**
             * The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
             */
            method?: string;
            /**
             * A mime type to override the XHR mime type.
             */
            mimeType?: string;
            /**
             * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
             */
            password?: string;
            /**
             * By default, data passed in to the data option as an object (technically, anything other than a
             * string) will be processed and transformed into a query string, fitting to the default content-type
             * "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data,
             * set this option to false.
             */
            processData?: boolean;
            /**
             * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or
             * "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request.
             * Used when the character set on the local page is not the same as the one on the remote script.
             */
            scriptCharset?: string;
            /**
             * An object of numeric HTTP codes and functions to be called when the response has the corresponding
             * code.
             *
             * If the request is successful, the status code functions take the same parameters as the success
             * callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback.
             */
            statusCode?: StatusCodeCallbacks<TContext>;
            /**
             * A function to be called if the request succeeds. The function gets passed three arguments: The data
             * returned from the server, formatted according to the dataType parameter or the dataFilter callback
             * function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x,
             * XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each
             * function will be called in turn. This is an Ajax Event.
             */
            success?: TypeOrArray<SuccessCallback<TContext>>;
            /**
             * Set a timeout (in milliseconds) for the request. A value of 0 means there will be no timeout. This
             * will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the
             * $.ajax call is made; if several other requests are in progress and the browser has no connections
             * available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and
             * below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any
             * object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be
             * cancelled by a timeout; the script will run even if it arrives after the timeout period.
             */
            timeout?: number;
            /**
             * Set this to true if you wish to use the traditional style of param serialization.
             */
            traditional?: boolean;
            /**
             * An alias for method. You should use type if you're using versions of jQuery prior to 1.9.0.
             */
            type?: string;
            /**
             * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
             */
            username?: string;
            // ActiveXObject requires "lib": ["scripthost"] which consumers would also require
            /**
             * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE),
             * the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or
             * enhancements to the factory.
             */
            xhr?(): XMLHttpRequest;
            /**
             * An object of fieldName-fieldValue pairs to set on the native XHR object.
             *
             * In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS
             * requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+
             * should you require the use of it.
             */
            xhrFields?: XHRFields;
        }

        type StatusCodeCallbacks<TContext> = {
            // region Success Status Codes
            // #region Success Status Codes

            // jQuery treats 2xx and 304 status codes as a success

            200?: SuccessCallback<TContext>;
            201?: SuccessCallback<TContext>;
            202?: SuccessCallback<TContext>;
            203?: SuccessCallback<TContext>;
            204?: SuccessCallback<TContext>;
            205?: SuccessCallback<TContext>;
            206?: SuccessCallback<TContext>;
            207?: SuccessCallback<TContext>;
            208?: SuccessCallback<TContext>;
            209?: SuccessCallback<TContext>;
            210?: SuccessCallback<TContext>;
            211?: SuccessCallback<TContext>;
            212?: SuccessCallback<TContext>;
            213?: SuccessCallback<TContext>;
            214?: SuccessCallback<TContext>;
            215?: SuccessCallback<TContext>;
            216?: SuccessCallback<TContext>;
            217?: SuccessCallback<TContext>;
            218?: SuccessCallback<TContext>;
            219?: SuccessCallback<TContext>;
            220?: SuccessCallback<TContext>;
            221?: SuccessCallback<TContext>;
            222?: SuccessCallback<TContext>;
            223?: SuccessCallback<TContext>;
            224?: SuccessCallback<TContext>;
            225?: SuccessCallback<TContext>;
            226?: SuccessCallback<TContext>;
            227?: SuccessCallback<TContext>;
            228?: SuccessCallback<TContext>;
            229?: SuccessCallback<TContext>;
            230?: SuccessCallback<TContext>;
            231?: SuccessCallback<TContext>;
            232?: SuccessCallback<TContext>;
            233?: SuccessCallback<TContext>;
            234?: SuccessCallback<TContext>;
            235?: SuccessCallback<TContext>;
            236?: SuccessCallback<TContext>;
            237?: SuccessCallback<TContext>;
            238?: SuccessCallback<TContext>;
            239?: SuccessCallback<TContext>;
            240?: SuccessCallback<TContext>;
            241?: SuccessCallback<TContext>;
            242?: SuccessCallback<TContext>;
            243?: SuccessCallback<TContext>;
            244?: SuccessCallback<TContext>;
            245?: SuccessCallback<TContext>;
            246?: SuccessCallback<TContext>;
            247?: SuccessCallback<TContext>;
            248?: SuccessCallback<TContext>;
            249?: SuccessCallback<TContext>;
            250?: SuccessCallback<TContext>;
            251?: SuccessCallback<TContext>;
            252?: SuccessCallback<TContext>;
            253?: SuccessCallback<TContext>;
            254?: SuccessCallback<TContext>;
            255?: SuccessCallback<TContext>;
            256?: SuccessCallback<TContext>;
            257?: SuccessCallback<TContext>;
            258?: SuccessCallback<TContext>;
            259?: SuccessCallback<TContext>;
            260?: SuccessCallback<TContext>;
            261?: SuccessCallback<TContext>;
            262?: SuccessCallback<TContext>;
            263?: SuccessCallback<TContext>;
            264?: SuccessCallback<TContext>;
            265?: SuccessCallback<TContext>;
            266?: SuccessCallback<TContext>;
            267?: SuccessCallback<TContext>;
            268?: SuccessCallback<TContext>;
            269?: SuccessCallback<TContext>;
            270?: SuccessCallback<TContext>;
            271?: SuccessCallback<TContext>;
            272?: SuccessCallback<TContext>;
            273?: SuccessCallback<TContext>;
            274?: SuccessCallback<TContext>;
            275?: SuccessCallback<TContext>;
            276?: SuccessCallback<TContext>;
            277?: SuccessCallback<TContext>;
            278?: SuccessCallback<TContext>;
            279?: SuccessCallback<TContext>;
            280?: SuccessCallback<TContext>;
            281?: SuccessCallback<TContext>;
            282?: SuccessCallback<TContext>;
            283?: SuccessCallback<TContext>;
            284?: SuccessCallback<TContext>;
            285?: SuccessCallback<TContext>;
            286?: SuccessCallback<TContext>;
            287?: SuccessCallback<TContext>;
            288?: SuccessCallback<TContext>;
            289?: SuccessCallback<TContext>;
            290?: SuccessCallback<TContext>;
            291?: SuccessCallback<TContext>;
            292?: SuccessCallback<TContext>;
            293?: SuccessCallback<TContext>;
            294?: SuccessCallback<TContext>;
            295?: SuccessCallback<TContext>;
            296?: SuccessCallback<TContext>;
            297?: SuccessCallback<TContext>;
            298?: SuccessCallback<TContext>;
            299?: SuccessCallback<TContext>;
            304?: SuccessCallback<TContext>;

            // #endregion

            // region Error Status Codes
            // #region Error Status Codes

            300?: ErrorCallback<TContext>;
            301?: ErrorCallback<TContext>;
            302?: ErrorCallback<TContext>;
            303?: ErrorCallback<TContext>;
            305?: ErrorCallback<TContext>;
            306?: ErrorCallback<TContext>;
            307?: ErrorCallback<TContext>;
            308?: ErrorCallback<TContext>;
            309?: ErrorCallback<TContext>;
            310?: ErrorCallback<TContext>;
            311?: ErrorCallback<TContext>;
            312?: ErrorCallback<TContext>;
            313?: ErrorCallback<TContext>;
            314?: ErrorCallback<TContext>;
            315?: ErrorCallback<TContext>;
            316?: ErrorCallback<TContext>;
            317?: ErrorCallback<TContext>;
            318?: ErrorCallback<TContext>;
            319?: ErrorCallback<TContext>;
            320?: ErrorCallback<TContext>;
            321?: ErrorCallback<TContext>;
            322?: ErrorCallback<TContext>;
            323?: ErrorCallback<TContext>;
            324?: ErrorCallback<TContext>;
            325?: ErrorCallback<TContext>;
            326?: ErrorCallback<TContext>;
            327?: ErrorCallback<TContext>;
            328?: ErrorCallback<TContext>;
            329?: ErrorCallback<TContext>;
            330?: ErrorCallback<TContext>;
            331?: ErrorCallback<TContext>;
            332?: ErrorCallback<TContext>;
            333?: ErrorCallback<TContext>;
            334?: ErrorCallback<TContext>;
            335?: ErrorCallback<TContext>;
            336?: ErrorCallback<TContext>;
            337?: ErrorCallback<TContext>;
            338?: ErrorCallback<TContext>;
            339?: ErrorCallback<TContext>;
            340?: ErrorCallback<TContext>;
            341?: ErrorCallback<TContext>;
            342?: ErrorCallback<TContext>;
            343?: ErrorCallback<TContext>;
            344?: ErrorCallback<TContext>;
            345?: ErrorCallback<TContext>;
            346?: ErrorCallback<TContext>;
            347?: ErrorCallback<TContext>;
            348?: ErrorCallback<TContext>;
            349?: ErrorCallback<TContext>;
            350?: ErrorCallback<TContext>;
            351?: ErrorCallback<TContext>;
            352?: ErrorCallback<TContext>;
            353?: ErrorCallback<TContext>;
            354?: ErrorCallback<TContext>;
            355?: ErrorCallback<TContext>;
            356?: ErrorCallback<TContext>;
            357?: ErrorCallback<TContext>;
            358?: ErrorCallback<TContext>;
            359?: ErrorCallback<TContext>;
            360?: ErrorCallback<TContext>;
            361?: ErrorCallback<TContext>;
            362?: ErrorCallback<TContext>;
            363?: ErrorCallback<TContext>;
            364?: ErrorCallback<TContext>;
            365?: ErrorCallback<TContext>;
            366?: ErrorCallback<TContext>;
            367?: ErrorCallback<TContext>;
            368?: ErrorCallback<TContext>;
            369?: ErrorCallback<TContext>;
            370?: ErrorCallback<TContext>;
            371?: ErrorCallback<TContext>;
            372?: ErrorCallback<TContext>;
            373?: ErrorCallback<TContext>;
            374?: ErrorCallback<TContext>;
            375?: ErrorCallback<TContext>;
            376?: ErrorCallback<TContext>;
            377?: ErrorCallback<TContext>;
            378?: ErrorCallback<TContext>;
            379?: ErrorCallback<TContext>;
            380?: ErrorCallback<TContext>;
            381?: ErrorCallback<TContext>;
            382?: ErrorCallback<TContext>;
            383?: ErrorCallback<TContext>;
            384?: ErrorCallback<TContext>;
            385?: ErrorCallback<TContext>;
            386?: ErrorCallback<TContext>;
            387?: ErrorCallback<TContext>;
            388?: ErrorCallback<TContext>;
            389?: ErrorCallback<TContext>;
            390?: ErrorCallback<TContext>;
            391?: ErrorCallback<TContext>;
            392?: ErrorCallback<TContext>;
            393?: ErrorCallback<TContext>;
            394?: ErrorCallback<TContext>;
            395?: ErrorCallback<TContext>;
            396?: ErrorCallback<TContext>;
            397?: ErrorCallback<TContext>;
            398?: ErrorCallback<TContext>;
            399?: ErrorCallback<TContext>;
            400?: ErrorCallback<TContext>;
            401?: ErrorCallback<TContext>;
            402?: ErrorCallback<TContext>;
            403?: ErrorCallback<TContext>;
            404?: ErrorCallback<TContext>;
            405?: ErrorCallback<TContext>;
            406?: ErrorCallback<TContext>;
            407?: ErrorCallback<TContext>;
            408?: ErrorCallback<TContext>;
            409?: ErrorCallback<TContext>;
            410?: ErrorCallback<TContext>;
            411?: ErrorCallback<TContext>;
            412?: ErrorCallback<TContext>;
            413?: ErrorCallback<TContext>;
            414?: ErrorCallback<TContext>;
            415?: ErrorCallback<TContext>;
            416?: ErrorCallback<TContext>;
            417?: ErrorCallback<TContext>;
            418?: ErrorCallback<TContext>;
            419?: ErrorCallback<TContext>;
            420?: ErrorCallback<TContext>;
            421?: ErrorCallback<TContext>;
            422?: ErrorCallback<TContext>;
            423?: ErrorCallback<TContext>;
            424?: ErrorCallback<TContext>;
            425?: ErrorCallback<TContext>;
            426?: ErrorCallback<TContext>;
            427?: ErrorCallback<TContext>;
            428?: ErrorCallback<TContext>;
            429?: ErrorCallback<TContext>;
            430?: ErrorCallback<TContext>;
            431?: ErrorCallback<TContext>;
            432?: ErrorCallback<TContext>;
            433?: ErrorCallback<TContext>;
            434?: ErrorCallback<TContext>;
            435?: ErrorCallback<TContext>;
            436?: ErrorCallback<TContext>;
            437?: ErrorCallback<TContext>;
            438?: ErrorCallback<TContext>;
            439?: ErrorCallback<TContext>;
            440?: ErrorCallback<TContext>;
            441?: ErrorCallback<TContext>;
            442?: ErrorCallback<TContext>;
            443?: ErrorCallback<TContext>;
            444?: ErrorCallback<TContext>;
            445?: ErrorCallback<TContext>;
            446?: ErrorCallback<TContext>;
            447?: ErrorCallback<TContext>;
            448?: ErrorCallback<TContext>;
            449?: ErrorCallback<TContext>;
            450?: ErrorCallback<TContext>;
            451?: ErrorCallback<TContext>;
            452?: ErrorCallback<TContext>;
            453?: ErrorCallback<TContext>;
            454?: ErrorCallback<TContext>;
            455?: ErrorCallback<TContext>;
            456?: ErrorCallback<TContext>;
            457?: ErrorCallback<TContext>;
            458?: ErrorCallback<TContext>;
            459?: ErrorCallback<TContext>;
            460?: ErrorCallback<TContext>;
            461?: ErrorCallback<TContext>;
            462?: ErrorCallback<TContext>;
            463?: ErrorCallback<TContext>;
            464?: ErrorCallback<TContext>;
            465?: ErrorCallback<TContext>;
            466?: ErrorCallback<TContext>;
            467?: ErrorCallback<TContext>;
            468?: ErrorCallback<TContext>;
            469?: ErrorCallback<TContext>;
            470?: ErrorCallback<TContext>;
            471?: ErrorCallback<TContext>;
            472?: ErrorCallback<TContext>;
            473?: ErrorCallback<TContext>;
            474?: ErrorCallback<TContext>;
            475?: ErrorCallback<TContext>;
            476?: ErrorCallback<TContext>;
            477?: ErrorCallback<TContext>;
            478?: ErrorCallback<TContext>;
            479?: ErrorCallback<TContext>;
            480?: ErrorCallback<TContext>;
            481?: ErrorCallback<TContext>;
            482?: ErrorCallback<TContext>;
            483?: ErrorCallback<TContext>;
            484?: ErrorCallback<TContext>;
            485?: ErrorCallback<TContext>;
            486?: ErrorCallback<TContext>;
            487?: ErrorCallback<TContext>;
            488?: ErrorCallback<TContext>;
            489?: ErrorCallback<TContext>;
            490?: ErrorCallback<TContext>;
            491?: ErrorCallback<TContext>;
            492?: ErrorCallback<TContext>;
            493?: ErrorCallback<TContext>;
            494?: ErrorCallback<TContext>;
            495?: ErrorCallback<TContext>;
            496?: ErrorCallback<TContext>;
            497?: ErrorCallback<TContext>;
            498?: ErrorCallback<TContext>;
            499?: ErrorCallback<TContext>;
            500?: ErrorCallback<TContext>;
            501?: ErrorCallback<TContext>;
            502?: ErrorCallback<TContext>;
            503?: ErrorCallback<TContext>;
            504?: ErrorCallback<TContext>;
            505?: ErrorCallback<TContext>;
            506?: ErrorCallback<TContext>;
            507?: ErrorCallback<TContext>;
            508?: ErrorCallback<TContext>;
            509?: ErrorCallback<TContext>;
            510?: ErrorCallback<TContext>;
            511?: ErrorCallback<TContext>;
            512?: ErrorCallback<TContext>;
            513?: ErrorCallback<TContext>;
            514?: ErrorCallback<TContext>;
            515?: ErrorCallback<TContext>;
            516?: ErrorCallback<TContext>;
            517?: ErrorCallback<TContext>;
            518?: ErrorCallback<TContext>;
            519?: ErrorCallback<TContext>;
            520?: ErrorCallback<TContext>;
            521?: ErrorCallback<TContext>;
            522?: ErrorCallback<TContext>;
            523?: ErrorCallback<TContext>;
            524?: ErrorCallback<TContext>;
            525?: ErrorCallback<TContext>;
            526?: ErrorCallback<TContext>;
            527?: ErrorCallback<TContext>;
            528?: ErrorCallback<TContext>;
            529?: ErrorCallback<TContext>;
            530?: ErrorCallback<TContext>;
            531?: ErrorCallback<TContext>;
            532?: ErrorCallback<TContext>;
            533?: ErrorCallback<TContext>;
            534?: ErrorCallback<TContext>;
            535?: ErrorCallback<TContext>;
            536?: ErrorCallback<TContext>;
            537?: ErrorCallback<TContext>;
            538?: ErrorCallback<TContext>;
            539?: ErrorCallback<TContext>;
            540?: ErrorCallback<TContext>;
            541?: ErrorCallback<TContext>;
            542?: ErrorCallback<TContext>;
            543?: ErrorCallback<TContext>;
            544?: ErrorCallback<TContext>;
            545?: ErrorCallback<TContext>;
            546?: ErrorCallback<TContext>;
            547?: ErrorCallback<TContext>;
            548?: ErrorCallback<TContext>;
            549?: ErrorCallback<TContext>;
            550?: ErrorCallback<TContext>;
            551?: ErrorCallback<TContext>;
            552?: ErrorCallback<TContext>;
            553?: ErrorCallback<TContext>;
            554?: ErrorCallback<TContext>;
            555?: ErrorCallback<TContext>;
            556?: ErrorCallback<TContext>;
            557?: ErrorCallback<TContext>;
            558?: ErrorCallback<TContext>;
            559?: ErrorCallback<TContext>;
            560?: ErrorCallback<TContext>;
            561?: ErrorCallback<TContext>;
            562?: ErrorCallback<TContext>;
            563?: ErrorCallback<TContext>;
            564?: ErrorCallback<TContext>;
            565?: ErrorCallback<TContext>;
            566?: ErrorCallback<TContext>;
            567?: ErrorCallback<TContext>;
            568?: ErrorCallback<TContext>;
            569?: ErrorCallback<TContext>;
            570?: ErrorCallback<TContext>;
            571?: ErrorCallback<TContext>;
            572?: ErrorCallback<TContext>;
            573?: ErrorCallback<TContext>;
            574?: ErrorCallback<TContext>;
            575?: ErrorCallback<TContext>;
            576?: ErrorCallback<TContext>;
            577?: ErrorCallback<TContext>;
            578?: ErrorCallback<TContext>;
            579?: ErrorCallback<TContext>;
            580?: ErrorCallback<TContext>;
            581?: ErrorCallback<TContext>;
            582?: ErrorCallback<TContext>;
            583?: ErrorCallback<TContext>;
            584?: ErrorCallback<TContext>;
            585?: ErrorCallback<TContext>;
            586?: ErrorCallback<TContext>;
            587?: ErrorCallback<TContext>;
            588?: ErrorCallback<TContext>;
            589?: ErrorCallback<TContext>;
            590?: ErrorCallback<TContext>;
            591?: ErrorCallback<TContext>;
            592?: ErrorCallback<TContext>;
            593?: ErrorCallback<TContext>;
            594?: ErrorCallback<TContext>;
            595?: ErrorCallback<TContext>;
            596?: ErrorCallback<TContext>;
            597?: ErrorCallback<TContext>;
            598?: ErrorCallback<TContext>;
            599?: ErrorCallback<TContext>;

            // #endregion
        } & {
            // Status codes not listed require type annotations when defining the callback
            [index: number]: SuccessCallback<TContext> | ErrorCallback<TContext>;
        };

        // Writable properties on XMLHttpRequest
        interface XHRFields extends Partial<Pick<XMLHttpRequest, 'onreadystatechange' | 'responseType' | 'timeout' | 'withCredentials'>> {
            msCaching?: string;
        }
    }

    interface Transport {
        send(headers: PlainObject, completeCallback: Transport.SuccessCallback): void;
        abort(): void;
    }

    namespace Transport {
        interface SuccessCallback {
            (status: number, statusText: Ajax.TextStatus, responses?: PlainObject, headers?: string): void;
        }
    }

    /**
     * @see \`{@link https://api.jquery.com/jquery.ajax/#jqXHR }\`
     */
    interface jqXHR<TResolve = any> extends Promise3<TResolve, jqXHR<TResolve>, never,
        Ajax.SuccessTextStatus, Ajax.ErrorTextStatus, never,
        jqXHR<TResolve>, string, never>,
        Pick<XMLHttpRequest, 'abort' | 'getAllResponseHeaders' | 'getResponseHeader' | 'overrideMimeType' | 'readyState' | 'responseText' |
            'setRequestHeader' | 'status' | 'statusText'>,
        Partial<Pick<XMLHttpRequest, 'responseXML'>> {
        responseJSON?: any;

        /**
         * Determine the current state of a Deferred object.
         *
         * @see \`{@link https://api.jquery.com/deferred.state/ }\`
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';
        statusCode(map: Ajax.StatusCodeCallbacks<any>): void;
    }

    namespace jqXHR {
        interface DoneCallback<TResolve = any, TjqXHR = jqXHR<TResolve>> extends Deferred.Callback3<TResolve, Ajax.SuccessTextStatus, TjqXHR> { }

        interface FailCallback<TjqXHR> extends Deferred.Callback3<TjqXHR, Ajax.ErrorTextStatus, string> { }

        interface AlwaysCallback<TResolve = any, TjqXHR = jqXHR<TResolve>> extends Deferred.Callback3<TResolve | TjqXHR, Ajax.TextStatus, TjqXHR | string> { }
    }

    // #endregion

    // region Callbacks
    // #region Callbacks

    interface CallbacksStatic {
        /**
         * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
         *
         * @param flags An optional list of space-separated flags that change how the callback list behaves.
         * @see \`{@link https://api.jquery.com/jQuery.Callbacks/ }\`
         * @since 1.7
         */
        // tslint:disable-next-line:ban-types no-unnecessary-generics
        <T extends Function>(flags?: string): Callbacks<T>;
    }

    // tslint:disable-next-line:ban-types
    interface Callbacks<T extends Function = Function> {
        /**
         * Add a callback or a collection of callbacks to a callback list.
         *
         * @param callback A function, or array of functions, that are to be added to the callback list.
         * @param callbacks A function, or array of functions, that are to be added to the callback list.
         * @see \`{@link https://api.jquery.com/callbacks.add/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.add() to add new callbacks to a callback list:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo: " + value );
};
​
// Another function to also be added to the list
var bar = function( value ) {
  console.log( "bar: " + value );
};
​
var callbacks = $.Callbacks();
​
// Add the function "foo" to the list
callbacks.add( foo );
​
// Fire the items on the list
callbacks.fire( "hello" );
// Outputs: "foo: hello"
​
// Add the function "bar" to the list
callbacks.add( bar );
​
// Fire the items on the list again
callbacks.fire( "world" );
​
// Outputs:
// "foo: world"
// "bar: world"
```
         */
        add(callback: TypeOrArray<T>, ...callbacks: Array<TypeOrArray<T>>): this;
        /**
         * Disable a callback list from doing anything more.
         *
         * @see \`{@link https://api.jquery.com/callbacks.disable/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.disable() to disable further calls to a callback list:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( value );
};
​
var callbacks = $.Callbacks();
​
// Add the above function to the list
callbacks.add( foo );
​
// Fire the items on the list
callbacks.fire( "foo" );
// Outputs: foo
​
// Disable further calls being possible
callbacks.disable();
​
// Attempt to fire with "foobar" as an argument
callbacks.fire( "foobar" );
// foobar isn't output
```
         */
        disable(): this;
        /**
         * Determine if the callbacks list has been disabled.
         *
         * @see \`{@link https://api.jquery.com/callbacks.disabled/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.disabled() to determine if the callbacks list has been disabled:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo:" + value );
};
​
var callbacks = $.Callbacks();
​
// Add the logging function to the callback list
callbacks.add( foo );
​
// Fire the items on the list, passing an argument
callbacks.fire( "hello" );
// Outputs "foo: hello"
​
// Disable the callbacks list
callbacks.disable();
​
// Test the disabled state of the list
console.log ( callbacks.disabled() );
// Outputs: true
```
         */
        disabled(): boolean;
        /**
         * Remove all of the callbacks from a list.
         *
         * @see \`{@link https://api.jquery.com/callbacks.empty/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.empty() to empty a list of callbacks:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value1, value2 ) {
  console.log( "foo: " + value1 + "," + value2 );
};
​
// Another function to also be added to the list
var bar = function( value1, value2 ) {
  console.log( "bar: " + value1 + "," + value2 );
};
​
var callbacks = $.Callbacks();
​
// Add the two functions
callbacks.add( foo );
callbacks.add( bar );
​
// Empty the callbacks list
callbacks.empty();
​
// Check to ensure all callbacks have been removed
console.log( callbacks.has( foo ) );
// false
console.log( callbacks.has( bar ) );
// false
```
         */
        empty(): this;
        /**
         * Call all of the callbacks with the given arguments.
         *
         * @param args The argument or list of arguments to pass back to the callback list.
         * @see \`{@link https://api.jquery.com/callbacks.fire/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.fire() to invoke the callbacks in a list with any arguments that have been passed:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo:" + value );
};
​
var callbacks = $.Callbacks();
​
// Add the function "foo" to the list
callbacks.add( foo );
​
// Fire the items on the list
callbacks.fire( "hello" ); // Outputs: "foo: hello"
callbacks.fire( "world" ); // Outputs: "foo: world"
​
// Add another function to the list
var bar = function( value ){
  console.log( "bar:" + value );
};
​
// Add this function to the list
callbacks.add( bar );
​
// Fire the items on the list again
callbacks.fire( "hello again" );
// Outputs:
// "foo: hello again"
// "bar: hello again"
```
         */
        fire(...args: any[]): this;
        /**
         * Determine if the callbacks have already been called at least once.
         *
         * @see \`{@link https://api.jquery.com/callbacks.fired/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.fired() to determine if the callbacks in a list have been called at least once:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo:" + value );
};
​
var callbacks = $.Callbacks();
​
// Add the function "foo" to the list
callbacks.add( foo );
​
// Fire the items on the list
callbacks.fire( "hello" ); // Outputs: "foo: hello"
callbacks.fire( "world" ); // Outputs: "foo: world"
​
// Test to establish if the callbacks have been called
console.log( callbacks.fired() );
```
         */
        fired(): boolean;
        /**
         * Call all callbacks in a list with the given context and arguments.
         *
         * @param context A reference to the context in which the callbacks in the list should be fired.
         * @param args An argument, or array of arguments, to pass to the callbacks in the list.
         * @see \`{@link https://api.jquery.com/callbacks.fireWith/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.fireWith() to fire a list of callbacks with a specific context and an array of arguments:
```javascript
// A sample logging function to be added to a callbacks list
var log = function( value1, value2 ) {
  console.log( "Received: " + value1 + "," + value2 );
};
​
var callbacks = $.Callbacks();
​
// Add the log method to the callbacks list
callbacks.add( log );
​
// Fire the callbacks on the list using the context "window"
// and an arguments array
​
callbacks.fireWith( window, [ "foo","bar" ] );
// Outputs: "Received: foo, bar"
```
         */
        fireWith(context: object, args?: ArrayLike<any>): this;
        /**
         * Determine whether or not the list has any callbacks attached. If a callback is provided as an
         * argument, determine whether it is in a list.
         *
         * @param callback The callback to search for.
         * @see \`{@link https://api.jquery.com/callbacks.has/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.has() to check if a callback list contains a specific callback:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value1, value2 ) {
  console.log( "Received: " + value1 + "," + value2 );
};
​
// A second function which will not be added to the list
var bar = function( value1, value2 ) {
  console.log( "foobar" );
};
​
var callbacks = $.Callbacks();
​
// Add the log method to the callbacks list
callbacks.add( foo );
​
// Determine which callbacks are in the list
console.log( callbacks.has( foo ) );
// true
console.log( callbacks.has( bar ) );
// false
```
         */
        has(callback?: T): boolean;
        /**
         * Lock a callback list in its current state.
         *
         * @see \`{@link https://api.jquery.com/callbacks.lock/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.lock() to lock a callback list to avoid further changes being made to the list state:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo:" + value );
};
​
var callbacks = $.Callbacks();
​
// Add the logging function to the callback list
callbacks.add( foo );
​
// Fire the items on the list, passing an argument
callbacks.fire( "hello" );
// Outputs "foo: hello"
​
// Lock the callbacks list
callbacks.lock();
​
// Try firing the items again
callbacks.fire( "world" );
​
// As the list was locked, no items were called,
// so "world" isn't logged
```
         * @example ​ ````Use callbacks.lock() to lock a callback list with &quot;memory,&quot; and then resume using the list:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>callbacks.lock demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
// Simple function for logging results
var log = function( value ) {
  $( "#log" ).append( "<p>" + value + "</p>" );
};
​
// Two sample functions to be added to a callbacks list
var foo = function( value ) {
  log( "foo: " + value );
};
var bar = function( value ) {
  log( "bar: " + value );
};
​
// Create the callbacks object with the "memory" flag
var callbacks = $.Callbacks( "memory" );
​
// Add the foo logging function to the callback list
callbacks.add( foo );
​
// Fire the items on the list, passing an argument
callbacks.fire( "hello" );
// Outputs "foo: hello"
​
// Lock the callbacks list
callbacks.lock();
​
// Try firing the items again
callbacks.fire( "world" );
// As the list was locked, no items were called,
// so "foo: world" isn't logged
​
// Add the foo function to the callback list again
callbacks.add( foo );
​
// Try firing the items again
callbacks.fire( "silentArgument" );
// Outputs "foo: hello" because the argument value was stored in memory
​
// Add the bar function to the callback list
callbacks.add( bar );
​
callbacks.fire( "youHadMeAtHello" );
// Outputs "bar: hello" because the list is still locked,
// and the argument value is still stored in memory
</script>
​
</body>
</html>
```
         */
        lock(): this;
        /**
         * Determine if the callbacks list has been locked.
         *
         * @see \`{@link https://api.jquery.com/callbacks.locked/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.locked() to determine the lock-state of a callback list:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo: " + value );
};
​
var callbacks = $.Callbacks();
​
// Add the logging function to the callback list
callbacks.add( foo );
​
// Fire the items on the list, passing an argument
callbacks.fire( "hello" );
// Outputs "foo: hello"
​
// Lock the callbacks list
callbacks.lock();
​
// Test the lock-state of the list
console.log ( callbacks.locked() );
// true
```
         */
        locked(): boolean;
        /**
         * Remove a callback or a collection of callbacks from a callback list.
         *
         * @param callbacks A function, or array of functions, that are to be removed from the callback list.
         * @see \`{@link https://api.jquery.com/callbacks.remove/ }\`
         * @since 1.7
         * @example ​ ````Use callbacks.remove() to remove callbacks from a callback list:
```javascript
// A sample logging function to be added to a callbacks list
var foo = function( value ) {
  console.log( "foo: " + value );
};
​
var callbacks = $.Callbacks();
​
// Add the function "foo" to the list
callbacks.add( foo );
​
// Fire the items on the list
callbacks.fire( "hello" );
// Outputs: "foo: hello"
​
// Remove "foo" from the callback list
callbacks.remove( foo );
​
// Fire the items on the list again
callbacks.fire( "world" );
​
// Nothing output as "foo" is no longer in the list
```
         */
        remove(...callbacks: T[]): this;
    }

    // #endregion

    // region CSS
    // #region CSS

    interface CSSHook<TElement> {
        get(this: this, elem: TElement, computed: any, extra: any): any;
        set(this: this, elem: TElement, value: any): void;
    }

    // #endregion

    // region Deferred
    // #region Deferred

    /**
     * Any object that has a then method.
     */
    interface Thenable<T> extends PromiseLike<T> { }

    // NOTE: This is a private copy of the global Promise interface. It is used by JQuery.PromiseBase to indicate compatibility with other Promise implementations.
    //       The global Promise interface cannot be used directly as it may be modified, as in the case of @types/bluebird-global.
    /**
     * Represents the completion of an asynchronous operation
     */
    interface _Promise<T> {
        readonly [Symbol.toStringTag]: "Promise";
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
                                             onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): _Promise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): _Promise<T | TResult>;
    }

    // Type parameter guide
    // --------------------
    // Each type parameter represents a parameter in one of the three possible callbacks.
    //
    // The first letter indicates which position the parameter is in.
    //
    // T = A = 1st position
    // U = B = 2nd position
    // V = C = 3rd position
    // S = R = rest position
    //
    // The second letter indicates which whether it is a [R]esolve, Re[J]ect, or [N]otify value.
    //
    // The third letter indicates whether the value is returned in the [D]one filter, [F]ail filter, or [P]rogress filter.

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see \`{@link https://api.jquery.com/Types/#Promise }\`
     */
    interface PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN,
        SR, SJ, SN> extends _Promise<TR>, PromiseLike<TR> {
        /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         *
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see \`{@link https://api.jquery.com/deferred.always/ }\`
         * @since 1.6
         * @example ​ ````Since the jQuery.get() method returns a jqXHR object, which is derived from a Deferred object, we can attach a callback for both success and error using the deferred.always() method.
```javascript
$.get( "test.php" ).always(function() {
  alert( "$.get completed with success or error callback arguments" );
});
```
         */
        always(alwaysCallback: TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>,
               ...alwaysCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         *
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see \`{@link https://api.jquery.com/deferred.done/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach a success callback using the .done() method.
```javascript
$.get( "test.php" ).done(function() {
  alert( "$.get succeeded" );
});
```
         * @example ​ ````Resolve a Deferred object when the user clicks a button, triggering a number of callback functions:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.done demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Go</button>
<p>Ready...</p>
​
<script>
// 3 functions to call when the Deferred object is resolved
function fn1() {
  $( "p" ).append( " 1 " );
}
function fn2() {
  $( "p" ).append( " 2 " );
}
function fn3( n ) {
  $( "p" ).append( n + " 3 " + n );
}
​
// Create a deferred object
var dfd = $.Deferred();
​
// Add handlers to be called when dfd is resolved
dfd
// .done() can take any number of functions or arrays of functions
  .done( [ fn1, fn2 ], fn3, [ fn2, fn1 ] )
// We can chain done methods, too
  .done(function( n ) {
    $( "p" ).append( n + " we're done." );
  });
​
// Resolve the Deferred object when the button is clicked
$( "button" ).on( "click", function() {
  dfd.resolve( "and" );
});
</script>
​
</body>
</html>
```
         */
        done(doneCallback: TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>,
             ...doneCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.fail/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred, you can attach a success and failure callback using the deferred.done() and deferred.fail() methods.
```javascript
$.get( "test.php" )
  .done(function() {
    alert( "$.get succeeded" );
  })
  .fail(function() {
    alert( "$.get failed!" );
  });
```
         */
        fail(failCallback: TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>,
             ...failCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         *
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see \`{@link https://api.jquery.com/deferred.progress/ }\`
         * @since 1.7
         */
        progress(progressCallback: TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>,
                 ...progressCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>>): this;
        /**
         * Return a Deferred's Promise object.
         *
         * @param target Object onto which the promise methods have to be attached
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Create a Deferred and set two timer-based functions to either resolve or reject the Deferred after a random interval. Whichever one fires first &quot;wins&quot; and will call one of the callbacks. The second timeout has no effect since the Deferred is already complete (in a resolved or rejected state) from the first timeout action. Also set a timer-based progress notification function, and call a progress handler that adds &quot;working...&quot; to the document body.
```javascript
function asyncEvent() {
  var dfd = jQuery.Deferred();
​
  // Resolve after a random interval
  setTimeout(function() {
    dfd.resolve( "hurray" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Reject after a random interval
  setTimeout(function() {
    dfd.reject( "sorry" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Show a "working..." message every half-second
  setTimeout(function working() {
    if ( dfd.state() === "pending" ) {
      dfd.notify( "working... " );
      setTimeout( working, 500 );
    }
  }, 1 );
​
  // Return the Promise so caller can't change the Deferred
  return dfd.promise();
}
​
// Attach a done, fail, and progress handler for the asyncEvent
$.when( asyncEvent() ).then(
  function( status ) {
    alert( status + ", things are going well" );
  },
  function( status ) {
    alert( status + ", you fail this time" );
  },
  function( status ) {
    $( "body" ).append( status );
  }
);
```
         */
        promise<TTarget extends object>(target: TTarget): this & TTarget;
        /**
         * Return a Deferred's Promise object.
         *
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Use the target argument to promote an existing object to a Promise:
```javascript
// Existing object
var obj = {
    hello: function( name ) {
      alert( "Hello " + name );
    }
  },
  // Create a Deferred
  defer = $.Deferred();
​
// Set object as a promise
defer.promise( obj );
​
// Resolve the deferred
defer.resolve( "John" );
​
// Use the object as a Promise
obj.done(function( name ) {
  obj.hello( name ); // Will alert "Hello John"
}).hello( "Karl" ); // Will alert "Hello Karl"
```
         */
        promise(): this;
        /**
         * Determine the current state of a Deferred object.
         *
         * @see \`{@link https://api.jquery.com/deferred.state/ }\`
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';

        // region pipe
        // #region pipe

        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        // region then
        // #region then

        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.catch/ }\`
         * @since 3.0
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can rejection handlers using the .catch method.
```javascript
$.get( "test.php" )
  .then( function() {
    alert( "$.get succeeded" );
  } )
  .catch( function() {
    alert( "$.get failed!" );
  } );
```
         */
        catch<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                failFilter?: ((t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF) | null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
    }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see \`{@link https://api.jquery.com/Types/#Promise }\`
     */
    interface Promise3<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN> extends PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN,
        never, never, never> { }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see \`{@link https://api.jquery.com/Types/#Promise }\`
     */
    interface Promise2<TR, TJ, TN,
        UR, UJ, UN> extends PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        never, never, never,
        never, never, never> { }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see \`{@link https://api.jquery.com/Types/#Promise }\`
     */
    interface Promise<TR, TJ = any, TN = any> extends PromiseBase<TR, TJ, TN,
        TR, TJ, TN,
        TR, TJ, TN,
        TR, TJ, TN> { }

    interface DeferredStatic {
        // https://jquery.com/upgrade-guide/3.0/#callback-exit
        exceptionHook: any;
        /**
         * A factory function that returns a chainable utility object with methods to register multiple
         * callbacks into callback queues, invoke callback queues, and relay the success or failure state of
         * any synchronous or asynchronous function.
         *
         * @param beforeStart A function that is called just before the constructor returns.
         * @see \`{@link https://api.jquery.com/jQuery.Deferred/ }\`
         * @since 1.5
         */
        <TR = any, TJ = any, TN = any>(beforeStart?: (this: Deferred<TR, TJ, TN>, deferred: Deferred<TR, TJ, TN>) => void): Deferred<TR, TJ, TN>;
    }

    interface Deferred<TR, TJ = any, TN = any> {
        /**
         * Call the progressCallbacks on a Deferred object with the given args.
         *
         * @param args Optional arguments that are passed to the progressCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.notify/ }\`
         * @since 1.7
         */
        notify(...args: TN[]): this;
        /**
         * Call the progressCallbacks on a Deferred object with the given context and args.
         *
         * @param context Context passed to the progressCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the progressCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.notifyWith/ }\`
         * @since 1.7
         */
        notifyWith(context: object, args?: ArrayLike<TN>): this;
        /**
         * Reject a Deferred object and call any failCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the failCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.reject/ }\`
         * @since 1.5
         */
        reject(...args: TJ[]): this;
        /**
         * Reject a Deferred object and call any failCallbacks with the given context and args.
         *
         * @param context Context passed to the failCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the failCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.rejectWith/ }\`
         * @since 1.5
         */
        rejectWith(context: object, args?: ArrayLike<TJ>): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the doneCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.resolve/ }\`
         * @since 1.5
         */
        resolve(...args: TR[]): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given context and args.
         *
         * @param context Context passed to the doneCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the doneCallbacks.
         * @see \`{@link https://api.jquery.com/deferred.resolveWith/ }\`
         * @since 1.5
         */
        resolveWith(context: object, args?: ArrayLike<TR>): this;

        /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         *
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see \`{@link https://api.jquery.com/deferred.always/ }\`
         * @since 1.6
         * @example ​ ````Since the jQuery.get() method returns a jqXHR object, which is derived from a Deferred object, we can attach a callback for both success and error using the deferred.always() method.
```javascript
$.get( "test.php" ).always(function() {
  alert( "$.get completed with success or error callback arguments" );
});
```
         */
        always(alwaysCallback: TypeOrArray<Deferred.Callback<TR | TJ>>,
               ...alwaysCallbacks: Array<TypeOrArray<Deferred.Callback<TR | TJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         *
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see \`{@link https://api.jquery.com/deferred.done/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach a success callback using the .done() method.
```javascript
$.get( "test.php" ).done(function() {
  alert( "$.get succeeded" );
});
```
         * @example ​ ````Resolve a Deferred object when the user clicks a button, triggering a number of callback functions:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.done demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Go</button>
<p>Ready...</p>
​
<script>
// 3 functions to call when the Deferred object is resolved
function fn1() {
  $( "p" ).append( " 1 " );
}
function fn2() {
  $( "p" ).append( " 2 " );
}
function fn3( n ) {
  $( "p" ).append( n + " 3 " + n );
}
​
// Create a deferred object
var dfd = $.Deferred();
​
// Add handlers to be called when dfd is resolved
dfd
// .done() can take any number of functions or arrays of functions
  .done( [ fn1, fn2 ], fn3, [ fn2, fn1 ] )
// We can chain done methods, too
  .done(function( n ) {
    $( "p" ).append( n + " we're done." );
  });
​
// Resolve the Deferred object when the button is clicked
$( "button" ).on( "click", function() {
  dfd.resolve( "and" );
});
</script>
​
</body>
</html>
```
         */
        done(doneCallback: TypeOrArray<Deferred.Callback<TR>>,
             ...doneCallbacks: Array<TypeOrArray<Deferred.Callback<TR>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.fail/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred, you can attach a success and failure callback using the deferred.done() and deferred.fail() methods.
```javascript
$.get( "test.php" )
  .done(function() {
    alert( "$.get succeeded" );
  })
  .fail(function() {
    alert( "$.get failed!" );
  });
```
         */
        fail(failCallback: TypeOrArray<Deferred.Callback<TJ>>,
             ...failCallbacks: Array<TypeOrArray<Deferred.Callback<TJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         *
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see \`{@link https://api.jquery.com/deferred.progress/ }\`
         * @since 1.7
         */
        progress(progressCallback: TypeOrArray<Deferred.Callback<TN>>,
                 ...progressCallbacks: Array<TypeOrArray<Deferred.Callback<TN>>>): this;
        /**
         * Return a Deferred's Promise object.
         *
         * @param target Object onto which the promise methods have to be attached
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Use the target argument to promote an existing object to a Promise:
```javascript
// Existing object
var obj = {
    hello: function( name ) {
      alert( "Hello " + name );
    }
  },
  // Create a Deferred
  defer = $.Deferred();
​
// Set object as a promise
defer.promise( obj );
​
// Resolve the deferred
defer.resolve( "John" );
​
// Use the object as a Promise
obj.done(function( name ) {
  obj.hello( name ); // Will alert "Hello John"
}).hello( "Karl" ); // Will alert "Hello Karl"
```
         */
        promise<TTarget extends object>(target: TTarget): Promise<TR, TJ, TN> & TTarget;
        /**
         * Return a Deferred's Promise object.
         *
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Create a Deferred and set two timer-based functions to either resolve or reject the Deferred after a random interval. Whichever one fires first &quot;wins&quot; and will call one of the callbacks. The second timeout has no effect since the Deferred is already complete (in a resolved or rejected state) from the first timeout action. Also set a timer-based progress notification function, and call a progress handler that adds &quot;working...&quot; to the document body.
```javascript
function asyncEvent() {
  var dfd = jQuery.Deferred();
​
  // Resolve after a random interval
  setTimeout(function() {
    dfd.resolve( "hurray" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Reject after a random interval
  setTimeout(function() {
    dfd.reject( "sorry" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Show a "working..." message every half-second
  setTimeout(function working() {
    if ( dfd.state() === "pending" ) {
      dfd.notify( "working... " );
      setTimeout( working, 500 );
    }
  }, 1 );
​
  // Return the Promise so caller can't change the Deferred
  return dfd.promise();
}
​
// Attach a done, fail, and progress handler for the asyncEvent
$.when( asyncEvent() ).then(
  function( status ) {
    alert( status + ", things are going well" );
  },
  function( status ) {
    alert( status + ", you fail this time" );
  },
  function( status ) {
    $( "body" ).append( status );
  }
);
```
         */
        promise(): Promise<TR, TJ, TN>;
        /**
         * Determine the current state of a Deferred object.
         *
         * @see \`{@link https://api.jquery.com/deferred.state/ }\`
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';

        // region pipe
        // #region pipe

        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        // region then
        // #region then

        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.catch/ }\`
         * @since 3.0
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can rejection handlers using the .catch method.
```javascript
$.get( "test.php" )
  .then( function() {
    alert( "$.get succeeded" );
  } )
  .catch( function() {
    alert( "$.get failed!" );
  } );
```
         */
        catch<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                failFilter?: ((...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF) | null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
    }

    namespace Deferred {
        interface CallbackBase<T, U, V, R> {
            (t: T, u: U, v: V, ...r: R[]): void;
        }

        interface Callback3<T, U, V> extends CallbackBase<T, U, V, never> { }

        interface Callback<T> {
            (...args: T[]): void;
        }

        /**
         * @deprecated ​ Deprecated. Use \`{@link Callback }\`.
         */
        interface DoneCallback<TResolve> extends Callback<TResolve> { }

        /**
         * @deprecated ​ Deprecated. Use \`{@link Callback }\`.
         */
        interface FailCallback<TReject> extends Callback<TReject> { }

        /**
         * @deprecated ​ Deprecated. Use \`{@link Callback }\`.
         */
        interface AlwaysCallback<TResolve, TReject> extends Callback<TResolve | TReject> { }

        /**
         * @deprecated ​ Deprecated. Use \`{@link Callback }\`.
         */
        interface ProgressCallback<TNotify> extends Callback<TNotify> { }
    }

    // #endregion

    // region Effects
    // #region Effects

    interface Effects {
        /**
         * The rate (in milliseconds) at which animations fire.
         *
         * @see \`{@link https://api.jquery.com/jQuery.fx.interval/ }\`
         * @since 1.4.3
         * @deprecated ​ Deprecated since 3.0. See \`{@link https://api.jquery.com/jQuery.fx.interval/ }\`.
         *
         * **Cause**: As of jQuery 3.0 the `jQuery.fx.interval` property can be used to change the animation interval only on browsers that do not support the `window.requestAnimationFrame()` method. That is currently only Internet Explorer 9 and the Android Browser. Once support is dropped for these browsers, the property will serve no purpose and it will be removed.
         *
         * **Solution**: Find and remove code that changes or uses `jQuery.fx.interval`. If the value is being used by code in your page or a plugin, the code may be making assumptions that are no longer valid. The default value of `jQuery.fx.interval` is `13` (milliseconds), which could be used instead of accessing this property.
         * @example ​ ````Cause all animations to run with less frames.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.fx.interval demo</title>
  <style>
  div {
    width: 50px;
    height: 30px;
    margin: 5px;
    float: left;
    background: green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p><input type="button" value="Run"></p>
<div></div>
​
<script>
jQuery.fx.interval = 100;
$( "input" ).click(function() {
  $( "div" ).toggle( 3000 );
});
</script>
</body>
</html>
```
        */
        interval: number;
        /**
         * Globally disable all animations.
         *
         * @see \`{@link https://api.jquery.com/jQuery.fx.off/ }\`
         * @since 1.3
         * @example ​ ````Toggle animation on and off
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.fx.off demo</title>
  <style>
  div {
    width: 50px;
    height: 30px;
    margin: 5px;
    float: left;
    background: green;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input type="button" value="Run">
<button>Toggle fx</button>
<div></div>
​
<script>
var toggleFx = function() {
  $.fx.off = !$.fx.off;
};
toggleFx();
$( "button" ).click( toggleFx );
$( "input" ).click(function() {
  $( "div" ).toggle( "slow" );
});
</script>
</body>
</html>
```
        */
        off: boolean;
        step: PlainObject<AnimationHook<Node>>;
    }

    type Duration = number | 'fast' | 'slow';
    // TODO: Is the first element always a string or is that specific to the 'fx' queue?
    type Queue<TElement> = { 0: string; } & Array<QueueFunction<TElement>>;

    interface QueueFunction<TElement> {
        (this: TElement, next: () => void): void;
    }

    /**
     * @see \`{@link https://api.jquery.com/animate/#animate-properties-options }\`
     */
    interface EffectsOptions<TElement> {
        /**
         * A function to be called when the animation on an element completes or stops without completing (its
         * Promise object is either resolved or rejected).
         */
        always?(this: TElement, animation: Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function that is called once the animation on an element is complete.
         */
        complete?(this: TElement): void;
        /**
         * A function to be called when the animation on an element completes (its Promise object is resolved).
         */
        done?(this: TElement, animation: Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to be called when the animation on an element fails to complete (its Promise object is rejected).
         */
        fail?(this: TElement, animation: Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function to be called after each step of the animation, only once per animated element regardless
         * of the number of animated properties.
         */
        progress?(this: TElement, animation: Promise<any>, progress: number, remainingMs: number): void;
        /**
         * A Boolean indicating whether to place the animation in the effects queue. If false, the animation
         * will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case
         * the animation is added to the queue represented by that string. When a custom queue name is used the
         * animation does not automatically start; you must call .dequeue("queuename") to start it.
         */
        queue?: boolean | string;
        /**
         * An object containing one or more of the CSS properties defined by the properties argument and their
         * corresponding easing functions.
         */
        specialEasing?: PlainObject<string>;
        /**
         * A function to call when the animation on an element begins.
         */
        start?(this: TElement, animation: Promise<any>): void;
        /**
         * A function to be called for each animated property of each animated element. This function provides
         * an opportunity to modify the Tween object to change the value of the property before it is set.
         */
        step?(this: TElement, now: number, tween: Tween<TElement>): void;
    }

    interface SpeedSettings<TElement> {
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to call once the animation is complete.
         */
        complete?(this: TElement): void;
    }

    // This should be a class but doesn't work correctly under the JQuery namespace. Tween should be an inner class of jQuery.
    // Undocumented
    // https://github.com/jquery/api.jquery.com/issues/391
    // https://github.com/jquery/api.jquery.com/issues/61
    interface Tween<TElement> {
        easing: string;
        elem: TElement;
        end: number;
        now: number;
        options: EffectsOptions<TElement>;
        pos: number;
        prop: string;
        start: number;
        unit: string;
    }

    interface AnimationHook<TElement> {
        (fx: Tween<TElement>): void;
    }

    type EasingMethod = (percent: number) => number;

    interface Easings {
        [name: string]: EasingMethod;
    }

    // #endregion

    // region Events
    // #region Events

    // region Event
    // #region Event

    // This should be a class but doesn't work correctly under the JQuery namespace. Event should be an inner class of jQuery.

    // Static members
    interface EventStatic {
        // tslint:disable-next-line:no-unnecessary-generics
        <T extends object, TTarget extends EventTarget = HTMLElement>(event: string, properties?: T): Event<TTarget> & T;
        // tslint:disable-next-line:no-unnecessary-generics
        <T extends EventLike, TTarget extends EventTarget = HTMLElement>(properties: T): Event<TTarget> & T;
        // tslint:disable-next-line:no-unnecessary-generics
        new <T extends object, TTarget extends EventTarget = HTMLElement>(event: string, properties?: T): Event<TTarget> & T;
        // tslint:disable-next-line:no-unnecessary-generics
        new <T extends EventLike, TTarget extends EventTarget = HTMLElement>(properties: T): Event<TTarget> & T;
    }

    // Instance members
    interface Event {
        // region Copied properties
        // #region Copied properties

        // region Event
        // #region Event

        bubbles?: boolean;
        cancelable?: boolean;
        eventPhase?: number;

        // #endregion

        // region UIEvent
        // #region UIEvent

        detail?: number;
        view?: Window;

        // #endregion

        // region MouseEvent
        // #region MouseEvent

        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        offsetX?: number;
        offsetY?: number;
        /**
         * The mouse position relative to the left edge of the document.
         *
         * @see \`{@link https://api.jquery.com/event.pageX/ }\`
         * @since 1.0.4
         * @example ​ ````Show the mouse position relative to the left and top edges of the document (within this iframe).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.pageX demo</title>
  <style>
  body {
    background-color: #eef;
  }
  div {
    padding: 20px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});
</script>
​
</body>
</html>
```
         */
        pageX: number;
        /**
         * The mouse position relative to the top edge of the document.
         *
         * @see \`{@link https://api.jquery.com/event.pageY/ }\`
         * @since 1.0.4
         * @example ​ ````Show the mouse position relative to the left and top edges of the document (within this iframe).
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.pageY demo</title>
  <style>
  body {
    background-color: #eef;
  }
  div {
    padding: 20px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
​
<script>
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});
</script>
​
</body>
</html>
```
         */
        pageY: number;
        screenX?: number;
        screenY?: number;
        /** @deprecated */
        toElement?: Element;

        // #endregion

        // region PointerEvent
        // #region PointerEvent

        pointerId?: number;
        pointerType?: string;

        // #endregion

        // region KeyboardEvent
        // #region KeyboardEvent

        /** @deprecated */
        char?: string;
        /** @deprecated */
        charCode?: number;
        key?: string;
        /** @deprecated */
        keyCode?: number;

        // #endregion

        // region TouchEvent
        // #region TouchEvent

        changedTouches?: TouchList;
        targetTouches?: TouchList;
        touches?: TouchList;

        // #endregion

        // region MouseEvent, KeyboardEvent, TouchEvent
        // #region MouseEvent, KeyboardEvent, TouchEvent

        altKey?: boolean;
        ctrlKey?: boolean;
        /**
         * Indicates whether the META key was pressed when the event fired.
         *
         * @see \`{@link https://api.jquery.com/event.metaKey/ }\`
         * @since 1.0.4
         * @example ​ ````Determine whether the META key was pressed when the event fired.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.metaKey demo</title>
  <style>
  body {
    background-color: #eef;
  }
  div {
    padding: 20px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button value="Test" name="Test" id="checkMetaKey">Click me!</button>
<div id="display"></div>
​
<script>
$( "#checkMetaKey" ).click(function( event ) {
  $( "#display" ).text( event.metaKey );
});
</script>
​
</body>
</html>
```
         */
        metaKey: boolean;
        shiftKey?: boolean;

        // #endregion

        // #endregion

        /**
         * The namespace specified when the event was triggered.
         *
         * @see \`{@link https://api.jquery.com/event.namespace/ }\`
         * @since 1.4.3
         * @example ​ ````Determine the event namespace used.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.namespace demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>display event.namespace</button>
<p></p>
​
<script>
$( "p" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( "button" ).click(function( event ) {
  $( "p" ).trigger( "test.something" );
});
</script>
​
</body>
</html>
```
         */
        namespace: string;
        /**
         * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
         *
         * @see \`{@link https://api.jquery.com/event.result/ }\`
         * @since 1.3
         * @example ​ ````Display previous handler&#39;s return value
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.result demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>display event.result</button>
<p></p>
​
<script>
$( "button" ).click(function( event ) {
  return "hey";
});
$( "button" ).click(function( event ) {
  $( "p" ).html( event.result );
});
</script>
​
</body>
</html>
```
         */
        result: any;
        /**
         * The difference in milliseconds between the time the browser created the event and January 1, 1970.
         *
         * @see \`{@link https://api.jquery.com/event.timeStamp/ }\`
         * @since 1.2.6
         * @example ​ ````Display the time since the click handler last executed.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.timeStamp demo</title>
  <style>
  div {
    height: 100px;
    width: 300px;
    margin: 10px;
    background-color: #ffd;
    overflow: auto;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div>Click.</div>
​
<script>
var last, diff;
$( "div" ).click(function( event ) {
  if ( last ) {
    diff = event.timeStamp - last;
    $( "div" ).append( "time since last event: " + diff + "<br>" );
  } else {
    $( "div" ).append( "Click again.<br>" );
  }
  last = event.timeStamp;
});
</script>
​
</body>
</html>
```
         */
        timeStamp: number;
        /**
         * Describes the nature of the event.
         *
         * @see \`{@link https://api.jquery.com/event.type/ }\`
         * @since 1.0
         * @example ​ ````On all anchor clicks, alert the event type.
```javascript
$( "a" ).click(function( event ) {
  alert( event.type ); // "click"
});
```
         */
        type: string;
        /**
         * For key or mouse events, this property indicates the specific key or button that was pressed.
         *
         * @see \`{@link https://api.jquery.com/event.which/ }\`
         * @since 1.1.3
         * @example ​ ````Log which key was depressed.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.which demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input id="whichkey" value="type something">
<div id="log"></div>
​
<script>
$( "#whichkey" ).on( "keydown", function( event ) {
  $( "#log" ).html( event.type + ": " +  event.which );
});
</script>
​
</body>
</html>
```
         * @example ​ ````Log which mouse button was depressed.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.which demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<input id="whichkey" value="click here">
<div id="log"></div>
​
<script>
$( "#whichkey" ).on( "mousedown", function( event ) {
  $( "#log" ).html( event.type + ": " +  event.which );
});
</script>
​
</body>
</html>
```
         */
        which: number;
        /**
         * Returns whether event.preventDefault() was ever called on this event object.
         *
         * @see \`{@link https://api.jquery.com/event.isDefaultPrevented/ }\`
         * @since 1.3
         * @example ​ ````Checks whether event.preventDefault() was called.
```javascript
$( "a" ).click(function( event ) {
  alert( event.isDefaultPrevented() ); // false
  event.preventDefault();
  alert( event.isDefaultPrevented() ); // true
});
```
         */
        isDefaultPrevented(): boolean;
        /**
         * Returns whether event.stopImmediatePropagation() was ever called on this event object.
         *
         * @see \`{@link https://api.jquery.com/event.isImmediatePropagationStopped/ }\`
         * @since 1.3
         * @example ​ ````Checks whether event.stopImmediatePropagation() was called.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.isImmediatePropagationStopped demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>click me</button>
<div id="stop-log"></div>
  ​
<script>
function immediatePropStopped( event ) {
  var msg = "";
  if ( event.isImmediatePropagationStopped() ) {
    msg = "called";
  } else {
    msg = "not called";
  }
  $( "#stop-log" ).append( "<div>" + msg + "</div>" );
}
​
$( "button" ).click(function( event ) {
  immediatePropStopped( event );
  event.stopImmediatePropagation();
  immediatePropStopped( event );
});
</script>
​
</body>
</html>
```
         */
        isImmediatePropagationStopped(): boolean;
        /**
         * Returns whether event.stopPropagation() was ever called on this event object.
         *
         * @see \`{@link https://api.jquery.com/event.isPropagationStopped/ }\`
         * @since 1.3
         * @example ​ ````Checks whether event.stopPropagation() was called
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.isPropagationStopped demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>click me</button>
<div id="stop-log"></div>
  ​
<script>
function propStopped( event ) {
  var msg = "";
  if ( event.isPropagationStopped() ) {
    msg = "called";
  } else {
    msg = "not called";
  }
  $( "#stop-log" ).append( "<div>" + msg + "</div>" );
}
​
$( "button" ).click(function(event) {
  propStopped( event );
  event.stopPropagation();
  propStopped( event );
});
</script>
​
</body>
</html>
```
         */
        isPropagationStopped(): boolean;
        /**
         * If this method is called, the default action of the event will not be triggered.
         *
         * @see \`{@link https://api.jquery.com/event.preventDefault/ }\`
         * @since 1.0
         * @example ​ ````Cancel the default action (navigation) of the click.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.preventDefault demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<a href="https://jquery.com">default click action is prevented</a>
<div id="log"></div>
​
<script>
$( "a" ).click(function( event ) {
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});
</script>
​
</body>
</html>
```
         */
        preventDefault(): void;
        /**
         * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
         *
         * @see \`{@link https://api.jquery.com/event.stopImmediatePropagation/ }\`
         * @since 1.3
         * @example ​ ````Prevents other event handlers from being called.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.stopImmediatePropagation demo</title>
  <style>
  p {
    height: 30px;
    width: 150px;
    background-color: #ccf;
  }
  div {
    height: 30px;
    width: 150px;
    background-color: #cfc;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<p>paragraph</p>
<div>division</div>
​
<script>
$( "p" ).click(function( event ) {
  event.stopImmediatePropagation();
});
$( "p" ).click(function( event ) {
  // This function won't be executed
  $( this ).css( "background-color", "#f00" );
});
$( "div" ).click(function( event ) {
  // This function will be executed
  $( this ).css( "background-color", "#f00" );
});
</script>
​
</body>
</html>
```
         */
        stopImmediatePropagation(): void;
        /**
         * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
         *
         * @see \`{@link https://api.jquery.com/event.stopPropagation/ }\`
         * @since 1.0
         * @example ​ ````Kill the bubbling on the click event.
```javascript
$( "p" ).click(function( event ) {
  event.stopPropagation();
  // Do something
});
```
         */
        stopPropagation(): void;
    }

    // Generic members
    interface Event<
        TTarget = EventTarget,
        TData = null
    > {
        /**
         * The current DOM element within the event bubbling phase.
         *
         * @see \`{@link https://api.jquery.com/event.currentTarget/ }\`
         * @since 1.3
         * @example ​ ````Alert that currentTarget matches the `this` keyword.
```javascript
$( "p" ).click(function( event ) {
  alert( event.currentTarget === this ); // true
});
```
         */
        currentTarget: TTarget;
        /**
         * An optional object of data passed to an event method when the current executing handler is bound.
         *
         * @see \`{@link https://api.jquery.com/event.data/ }\`
         * @since 1.1
         * @example ​ ````Within a for loop, pass the value of i to the .on() method so that the current iteration&#39;s value is preserved.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.data demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button> 0 </button>
<button> 1 </button>
<button> 2 </button>
<button> 3 </button>
<button> 4 </button>
​
<div id="log"></div>
​
<script>
var logDiv = $( "#log" );
​
for ( var i = 0; i < 5; i++ ) {
  $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
    var msgs = [
      "button = " + $( this ).index(),
      "event.data.value = " + event.data.value,
      "i = " + i
    ];
    logDiv.append( msgs.join( ", " ) + "<br>" );
  });
}
</script>
​
</body>
</html>
```
         */
        data: TData;
        /**
         * The element where the currently-called jQuery event handler was attached.
         *
         * @see \`{@link https://api.jquery.com/event.delegateTarget/ }\`
         * @since 1.7
         * @example ​ ````When a button in any box class is clicked, change the box&#39;s background color to red.
```javascript
$( ".box" ).on( "click", "button", function( event ) {
  $( event.delegateTarget ).css( "background-color", "red" );
});
```
         */
        delegateTarget: TTarget;
        originalEvent: _Event;
        /**
         * The other DOM element involved in the event, if any.
         *
         * @see \`{@link https://api.jquery.com/event.relatedTarget/ }\`
         * @since 1.1.4
         * @example ​ ````On mouseout of anchors, alert the element type being entered.
```javascript
$( "a" ).mouseout(function( event ) {
  alert( event.relatedTarget.nodeName ); // "DIV"
});
```
         */
        relatedTarget: TTarget | null;
        /**
         * The DOM element that initiated the event.
         *
         * @see \`{@link https://api.jquery.com/event.target/ }\`
         * @since 1.0
         * @example ​ ````Display the tag&#39;s name on click
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.target demo</title>
  <style>
  span, strong, p {
    padding: 8px;
    display: block;
    border: 1px solid #999;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<div id="log"></div>
<div>
  <p>
    <strong><span>click</span></strong>
  </p>
</div>
​
<script>
$( "body" ).click(function( event ) {
  $( "#log" ).html( "clicked: " + event.target.nodeName );
});
</script>
​
</body>
</html>
```
         * @example ​ ````Implements a simple event delegation: The click handler is added to an unordered list, and the children of its li children are hidden. Clicking one of the li children toggles (see toggle()) their children.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>event.target demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<ul>
  <li>item 1
    <ul>
      <li>sub item 1-a</li>
      <li>sub item 1-b</li>
    </ul>
  </li>
  <li>item 2
    <ul>
      <li>sub item 2-a</li>
      <li>sub item 2-b</li>
    </ul>
  </li>
</ul>
​
<script>
function handler( event ) {
  var target = $( event.target );
  if ( target.is( "li" ) ) {
    target.children().toggle();
  }
}
$( "ul" ).click( handler ).find( "ul" ).hide();
</script>
​
</body>
</html>
```
         */
        target: TTarget;
    }

    interface EventLike {
        type: string;
    }

    // #endregion

    interface EventHandler<TCurrentTarget, TData = null> extends EventHandlerBase<TCurrentTarget, Event<TCurrentTarget, TData>> { }

    interface EventHandlerBase<TContext, T> {
        // Extra parameters can be passed from trigger()
        (this: TContext, t: T, ...args: any[]): void | false | any;
    }

    // region Event extensions
    // #region Event extensions

    interface EventExtensions {
        /**
         * jQuery defines an \`@{link https://api.jquery.com/category/events/event-object/ Event object}\` that
         * represents a cross-browser subset of the information available when an event occurs. The `jQuery.event.props`
         * property is an array of string names for properties that are always copied when jQuery processes a
         * native browser event. (Events fired in code by `.trigger()` do not use this list, since the code can
         * construct a `jQuery.Event` object with the needed values and trigger using that object.)
         *
         * To add a property name to this list, use `jQuery.event.props.push( "newPropertyName" )`. However, be
         * aware that every event processed by jQuery will now attempt to copy this property name from the native
         * browser event to jQuery's constructed event. If the property does not exist for that event type, it
         * will get an undefined value. Adding many properties to this list can significantly reduce event
         * delivery performance, so for infrequently-needed properties it is more efficient to use the value
         * directly from `event.originalEvent` instead. If properties must be copied, you are strongly advised
         * to use `jQuery.event.fixHooks` as of version 1.7.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#jquery-event-props-array }\`
         */
        props: string[];
        /**
         * The `fixHooks` interface provides a per-event-type way to extend or normalize the event object that
         * jQuery creates when it processes a _native_ browser event.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#jquery-event-fixhooks-object }\`
         */
        fixHooks: FixHooks;
        /**
         * The jQuery special event hooks are a set of per-event-name functions and properties that allow code
         * to control the behavior of event processing within jQuery. The mechanism is similar to `fixHooks` in
         * that the special event information is stored in `jQuery.event.special.NAME`, where `NAME` is the
         * name of the special event. Event names are case sensitive.
         *
         * As with `fixHooks`, the special event hooks design assumes it will be very rare that two unrelated
         * pieces of code want to process the same event name. Special event authors who need to modify events
         * with existing hooks will need to take precautions to avoid introducing unwanted side-effects by
         * clobbering those hooks.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#special-event-hooks }\`
         */
        special: SpecialEventHooks;
    }

    interface FixHook {
        /**
         * Strings representing properties that should be copied from the browser's event object to the jQuery
         * event object. If omitted, no additional properties are copied beyond the standard ones that jQuery
         * copies and normalizes (e.g. `event.target` and `event.relatedTarget`).
         */
        props?: string[];
        /**
         * jQuery calls this function after it constructs the `jQuery.Event` object, copies standard properties
         * from `jQuery.event.props`, and copies the `fixHooks`-specific props (if any) specified above. The
         * function can create new properties on the event object or modify existing ones. The second argument
         * is the browser's native event object, which is also available in `event.originalEvent`.
         *
         * Note that for all events, the browser's native event object is available in `event.originalEvent`;
         * if the jQuery event handler examines the properties there instead of jQuery's normalized `event`
         * object, there is no need to create a `fixHooks` entry to copy or modify the properties.
         *
         * @example ​ ````For example, to set a hook for the "drop" event that copies the `dataTransfer` property, assign an object to `jQuery.event.fixHooks.drop`:
```javascript
jQuery.event.fixHooks.drop = {
    props: [ "dataTransfer" ]
};
```

Since fixHooks is an advanced feature and rarely used externally, jQuery does not include code or
interfaces to deal with conflict resolution. If there is a chance that some other code may be assigning
`fixHooks` to the same events, the code should check for an existing hook and take appropriate measures.
A simple solution might look like this:

```javascript
if ( jQuery.event.fixHooks.drop ) {
    throw new Error( "Someone else took the jQuery.event.fixHooks.drop hook!" );
}

jQuery.event.fixHooks.drop = {
    props: [ "dataTransfer" ]
};
```

When there are known cases of different plugins wanting to attach to the drop hook, this solution might be more appropriate:

```javascript
var existingHook = jQuery.event.fixHooks.drop;

if ( !existingHook ) {
    jQuery.event.fixHooks.drop = {
        props: [ "dataTransfer" ]
    };
} else {
    if ( existingHook.props ) {
        existingHook.props.push( "dataTransfer" );
    } else {
        existingHook.props = [ "dataTransfer" ];
    }
}
```
         */
        filter?(event: Event, originalEvent: _Event): void;
    }

    /**
     * The `fixHooks` interface provides a per-event-type way to extend or normalize the event object that
     * jQuery creates when it processes a _native_ browser event.
     *
     * @see \`{@link https://learn.jquery.com/events/event-extensions/#jquery-event-fixhooks-object }\`
     */
    interface FixHooks {
        [event: string]: FixHook;
    }

    // region Special event hooks
    // #region Special event hooks

    /**
     * The jQuery special event hooks are a set of per-event-name functions and properties that allow code
     * to control the behavior of event processing within jQuery. The mechanism is similar to `fixHooks` in
     * that the special event information is stored in `jQuery.event.special.NAME`, where `NAME` is the
     * name of the special event. Event names are case sensitive.
     *
     * As with `fixHooks`, the special event hooks design assumes it will be very rare that two unrelated
     * pieces of code want to process the same event name. Special event authors who need to modify events
     * with existing hooks will need to take precautions to avoid introducing unwanted side-effects by
     * clobbering those hooks.
     *
     * @see \`{@link https://learn.jquery.com/events/event-extensions/#special-event-hooks }\`
     */
    interface SpecialEventHook<TTarget, TData> {
        /**
         * Indicates whether this event type should be bubbled when the `.trigger()` method is called; by
         * default it is `false`, meaning that a triggered event will bubble to the element's parents up to the
         * document (if attached to a document) and then to the window. Note that defining `noBubble` on an
         * event will effectively prevent that event from being used for delegated events with `.trigger()`.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#nobubble-boolean }\`
         */
        noBubble?: boolean;
        /**
         * When defined, these string properties specify that a special event should be handled like another
         * event type until the event is delivered. The `bindType` is used if the event is attached directly,
         * and the `delegateType` is used for delegated events. These types are generally DOM event types,
         * and _should not_ be a special event themselves.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#bindtype-string-delegatetype-string }\`
         */
        bindType?: string;
        /**
         * When defined, these string properties specify that a special event should be handled like another
         * event type until the event is delivered. The `bindType` is used if the event is attached directly,
         * and the `delegateType` is used for delegated events. These types are generally DOM event types,
         * and _should not_ be a special event themselves.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#bindtype-string-delegatetype-string }\`
         */
        delegateType?: string;
        /**
         * The setup hook is called the first time an event of a particular type is attached to an element;
         * this provides the hook an opportunity to do processing that will apply to all events of this type on
         * this element. The `this` keyword will be a reference to the element where the event is being attached
         * and `eventHandle` is jQuery's event handler function. In most cases the `namespaces` argument should
         * not be used, since it only represents the namespaces of the _first_ event being attached; subsequent
         * events may not have this same namespaces.
         *
         * This hook can perform whatever processing it desires, including attaching its own event handlers to
         * the element or to other elements and recording setup information on the element using the `jQuery.data()`
         * method. If the setup hook wants jQuery to add a browser event (via `addEventListener` or `attachEvent`,
         * depending on browser) it should return `false`. In all other cases, jQuery will not add the browser
         * event, but will continue all its other bookkeeping for the event. This would be appropriate, for
         * example, if the event was never fired by the browser but invoked by `.trigger()`. To attach the jQuery
         * event handler in the setup hook, use the `eventHandle` argument.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#setup-function-data-object-namespaces-eventhandle-function }\`
         */
        setup?(this: TTarget, data: TData, namespaces: string, eventHandle: EventHandler<TTarget, TData>): void | false;
        /**
         * The teardown hook is called when the final event of a particular type is removed from an element.
         * The `this` keyword will be a reference to the element where the event is being cleaned up. This hook
         * should return `false` if it wants jQuery to remove the event from the browser's event system (via
         * `removeEventListener` or `detachEvent`). In most cases, the setup and teardown hooks should return
         * the same value.
         *
         * If the setup hook attached event handlers or added data to an element through a mechanism such as
         * `jQuery.data()`, the teardown hook should reverse the process and remove them. jQuery will generally
         * remove the data and events when an element is totally removed from the document, but failing to
         * remove data or events on teardown will cause a memory leak if the element stays in the document.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#teardown-function }\`
         */
        teardown?(this: TTarget): void | false;
        /**
         * Each time an event handler is added to an element through an API such as `.on()`, jQuery calls this
         * hook. The `this` keyword will be the element to which the event handler is being added, and the
         * `handleObj` argument is as described in the section above. The return value of this hook is ignored.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#add-function-handleobj }\`
         */
        add?(this: TTarget, handleObj: HandleObject<TTarget, TData>): void;
        /**
         * When an event handler is removed from an element using an API such as `.off()`, this hook is called.
         * The `this` keyword will be the element where the handler is being removed, and the `handleObj`
         * argument is as described in the section above. The return value of this hook is ignored.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#remove-function-handleobj }\`
         */
        remove?(this: TTarget, handleObj: HandleObject<TTarget, TData>): void;
        /**
         * Called when the `.trigger()` or `.triggerHandler()` methods are used to trigger an event for the
         * special type from code, as opposed to events that originate from within the browser. The `this`
         * keyword will be the element being triggered, and the event argument will be a `jQuery.Event` object
         * constructed from the caller's input. At minimum, the event type, data, namespace, and target
         * properties are set on the event. The data argument represents additional data passed by `.trigger()`
         * if present.
         *
         * The trigger hook is called early in the process of triggering an event, just after the `jQuery.Event`
         * object is constructed and before any handlers have been called. It can process the triggered event
         * in any way, for example by calling `event.stopPropagation()` or `event.preventDefault()` before
         * returning. If the hook returns `false`, jQuery does not perform any further event triggering actions
         * and returns immediately. Otherwise, it performs the normal trigger processing, calling any event
         * handlers for the element and bubbling the event (unless propagation is stopped in advance or `noBubble`
         * was specified for the special event) to call event handlers attached to parent elements.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#trigger-function-event-jquery-event-data-object }\`
         */
        trigger?(this: TTarget, event: Event<TTarget, TData>, data: TData): void | false;
        /**
         * When the `.trigger()` method finishes running all the event handlers for an event, it also looks for
         * and runs any method on the target object by the same name unless of the handlers called `event.preventDefault()`.
         * So, `.trigger( "submit" )` will execute the `submit()` method on the element if one exists. When a
         * `_default` hook is specified, the hook is called just prior to checking for and executing the element's
         * default method. If this hook returns the value `false` the element's default method will be called;
         * otherwise it is not.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#_default-function-event-jquery-event-data-object }\`
         */
        _default?(event: Event<TTarget, TData>, data: TData): void | false;
        /**
         * jQuery calls a handle hook when the event has occurred and jQuery would normally call the user's event
         * handler specified by `.on()` or another event binding method. If the hook exists, jQuery calls it
         * _instead_ of that event handler, passing it the event and any data passed from `.trigger()` if it was
         * not a native event. The `this` keyword is the DOM element being handled, and `event.handleObj`
         * property has the detailed event information.
         *
         * Based in the information it has, the handle hook should decide whether to call the original handler
         * function which is in `event.handleObj.handler`. It can modify information in the event object before
         * calling the original handler, but _must restore_ that data before returning or subsequent unrelated
         * event handlers may act unpredictably. In most cases, the handle hook should return the result of the
         * original handler, but that is at the discretion of the hook. The handle hook is unique in that it is
         * the only special event function hook that is called under its original special event name when the
         * type is mapped using `bindType` and `delegateType`. For that reason, it is almost always an error to
         * have anything other than a handle hook present if the special event defines a `bindType` and
         * `delegateType`, since those other hooks will never be called.
         *
         * @see \`{@link https://learn.jquery.com/events/event-extensions/#handle-function-event-jquery-event-data-object }\`
         */
        handle?(this: TTarget, event: Event<TTarget, TData> & { handleObj: HandleObject<TTarget, TData>; }, ...data: TData[]): void;
    }

    interface SpecialEventHooks {
        [event: string]: SpecialEventHook<EventTarget, any>;
    }

    /**
     * Many of the special event hook functions below are passed a `handleObj` object that provides more
     * information about the event, how it was attached, and its current state. This object and its contents
     * should be treated as read-only data, and only the properties below are documented for use by special
     * event handlers.
     *
     * @see \`{@link https://learn.jquery.com/events/event-extensions/#the-handleobj-object }\`
     */
    interface HandleObject<TTarget, TData> {
        /**
         * The type of event, such as `"click"`. When special event mapping is used via `bindType` or
         * `delegateType`, this will be the mapped type.
         */
        readonly type: string;
        /**
         * The original type name regardless of whether it was mapped via `bindType` or `delegateType`. So when
         * a "pushy" event is mapped to "click" its `origType` would be "pushy".
         */
        readonly origType: string;
        /**
         * Namespace(s), if any, provided when the event was attached, such as `"myPlugin"`. When multiple
         * namespaces are given, they are separated by periods and sorted in ascending alphabetical order. If
         * no namespaces are provided, this property is an empty string.
         */
        readonly namespace: string;
        /**
         * For delegated events, this is the selector used to filter descendant elements and determine if the
         * handler should be called. For directly bound events, this property is `null`.
         */
        readonly selector: string | undefined | null;
        /**
         * The data, if any, passed to jQuery during event binding, e.g. `{ myData: 42 }`. If the data argument
         * was omitted or `undefined`, this property is `undefined` as well.
         */
        readonly data: TData;
        /**
         * Event handler function passed to jQuery during event binding. If `false` was passed during event
         * binding, the handler refers to a single shared function that simply returns `false`.
         */
        readonly handler: EventHandler<TTarget, TData>;
    }

    // #endregion

    // #endregion

    // #endregion

    interface NameValuePair {
        name: string;
        value: string;
    }

    interface Coordinates {
        left: number;
        top: number;
    }

    // Workaround for TypeScript 2.3 which does not have support for weak types handling.
    type CoordinatesPartial =
        Pick<Coordinates, 'left'> |
        Pick<Coordinates, 'top'> |
        { [key: string]: never; };

    interface ValHook<TElement> {
        get?(elem: TElement): any;
        set?(elem: TElement, value: any): any;
    }
}

// region Legacy types
// #region Legacy types

// tslint:disable-next-line:no-empty-interface
interface JQueryCallback extends JQuery.Callbacks { }
interface JQueryDeferred<T> extends JQuery.Deferred<T> { }
// tslint:disable-next-line:no-empty-interface
interface JQueryEventConstructor extends JQuery.EventStatic { }
interface JQueryDeferred<T> extends JQuery.Deferred<T> { }
// tslint:disable-next-line:no-empty-interface
interface JQueryAjaxSettings extends JQuery.AjaxSettings { }
interface JQueryAnimationOptions extends JQuery.EffectsOptions<Element> { }
// tslint:disable-next-line:no-empty-interface
interface JQueryCoordinates extends JQuery.Coordinates { }
interface JQueryGenericPromise<T> extends JQuery.Thenable<T> { }
// tslint:disable-next-line:no-empty-interface
interface JQueryXHR extends JQuery.jqXHR { }
interface JQueryPromise<T> extends JQuery.Promise<T> { }
// tslint:disable-next-line:no-empty-interface
interface JQuerySerializeArrayElement extends JQuery.NameValuePair { }

/**
 * @deprecated ​ Deprecated since 1.9. See \`{@link https://api.jquery.com/jQuery.support/ }\`.
 */
// tslint:disable-next-line:no-empty-interface
interface JQuerySupport extends JQuery.PlainObject { }

// Legacy types that are not represented in the current type definitions are marked deprecated.

/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Deferred.Callback }\` or \`{@link JQuery.Deferred.CallbackBase }\`.
 */
interface JQueryPromiseCallback<T> {
    (value?: T, ...args: any[]): void;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQueryStatic.param JQueryStatic&#91;'param'&#93;}\`.
 */
interface JQueryParam {
    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     *
     * @param obj An array or object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     */
    (obj: any, traditional?: boolean): string;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Event }\`.
 */
interface BaseJQueryEventObject extends Event {
    /**
     * The current DOM element within the event bubbling phase.
     * @see \`{@link https://api.jquery.com/event.currentTarget/ }\`
     */
    currentTarget: Element;
    /**
     * An optional object of data passed to an event method when the current executing handler is bound.
     * @see \`{@link https://api.jquery.com/event.data/ }\`
     */
    data: any;
    /**
     * The element where the currently-called jQuery event handler was attached.
     * @see \`{@link https://api.jquery.com/event.delegateTarget/ }\`
     */
    delegateTarget: Element;
    /**
     * Returns whether event.preventDefault() was ever called on this event object.
     * @see \`{@link https://api.jquery.com/event.isDefaultPrevented/ }\`
     */
    isDefaultPrevented(): boolean;
    /**
     * Returns whether event.stopImmediatePropagation() was ever called on this event object.
     * @see \`{@link https://api.jquery.com/event.isImmediatePropagationStopped/ }\`
     */
    isImmediatePropagationStopped(): boolean;
    /**
     * Returns whether event.stopPropagation() was ever called on this event object.
     * @see \`{@link https://api.jquery.com/event.isPropagationStopped/ }\`
     */
    isPropagationStopped(): boolean;
    /**
     * The namespace specified when the event was triggered.
     * @see \`{@link https://api.jquery.com/event.namespace/ }\`
     */
    namespace: string;
    /**
     * The browser's original Event object.
     * @see \`{@link https://api.jquery.com/category/events/event-object/ }\`
     */
    originalEvent: Event;
    /**
     * If this method is called, the default action of the event will not be triggered.
     * @see \`{@link https://api.jquery.com/event.preventDefault/ }\`
     */
    preventDefault(): any;
    /**
     * The other DOM element involved in the event, if any.
     * @see \`{@link https://api.jquery.com/event.relatedTarget/ }\`
     */
    relatedTarget: Element;
    /**
     * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
     * @see \`{@link https://api.jquery.com/event.result/ }\`
     */
    result: any;
    /**
     * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
     * @see \`{@link https://api.jquery.com/event.stopImmediatePropagation/ }\`
     */
    stopImmediatePropagation(): void;
    /**
     * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
     * @see \`{@link https://api.jquery.com/event.stopPropagation/ }\`
     */
    stopPropagation(): void;
    /**
     * The DOM element that initiated the event.
     * @see \`{@link https://api.jquery.com/event.target/ }\`
     */
    target: Element;
    /**
     * The mouse position relative to the left edge of the document.
     * @see \`{@link https://api.jquery.com/event.pageX/ }\`
     */
    pageX: number;
    /**
     * The mouse position relative to the top edge of the document.
     * @see \`{@link https://api.jquery.com/event.pageY/ }\`
     */
    pageY: number;
    /**
     * For key or mouse events, this property indicates the specific key or button that was pressed.
     * @see \`{@link https://api.jquery.com/event.which/ }\`
     */
    which: number;
    /**
     * Indicates whether the META key was pressed when the event fired.
     * @see \`{@link https://api.jquery.com/event.metaKey/ }\`
     */
    metaKey: boolean;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Event }\`.
 */
interface JQueryInputEventObject extends BaseJQueryEventObject {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Event }\`.
 */
interface JQueryMouseEventObject extends JQueryInputEventObject {
    button: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Event }\`.
 */
interface JQueryKeyEventObject extends JQueryInputEventObject {
    char: any;
    charCode: number;
    key: any;
    keyCode: number;
}
/**
 * @deprecated ​ Deprecated. Use \`{@link JQuery.Event }\`.
 */
interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject { }
/**
 * @deprecated ​ Deprecated.
 */
interface JQueryPromiseOperator<T, U> {
    (callback1: JQuery.TypeOrArray<JQueryPromiseCallback<T>>,
     ...callbacksN: Array<JQuery.TypeOrArray<JQueryPromiseCallback<any>>>): JQueryPromise<U>;
}
/**
 * @deprecated ​ Deprecated. Internal. See \`{@link https://github.com/jquery/api.jquery.com/issues/912 }\`.
 */
interface JQueryEasingFunction {
    (percent: number): number;
}
/**
 * @deprecated ​ Deprecated. Internal. See \`{@link https://github.com/jquery/api.jquery.com/issues/912 }\`.
 */
interface JQueryEasingFunctions {
    [name: string]: JQueryEasingFunction;
    linear: JQueryEasingFunction;
    swing: JQueryEasingFunction;
}

// #endregion
