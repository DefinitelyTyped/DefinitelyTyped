
/// <reference types="jquery" />

// main.js
var client = new ZeroClipboard( document.getElementById("copy-button"), {
  moviePath: "/path/to/ZeroClipboard.swf"
} );

client.on( "load", function(client) {
  // alert( "movie is loaded" );

  client.on( "complete", function(client, args) {
    // `this` is the element that was clicked
    this.style.display = "none";
    alert("Copied text to clipboard: " + args.text );
  } );
} );

ZeroClipboard.config( { moviePath: 'http://YOURSERVER/path/ZeroClipboard.swf' } );

var client = new ZeroClipboard();

var client = new ZeroClipboard($(".copy-button"));

var _globalConfig = {
  // NOTE: For versions >= v1.3.x and < v2.x, you must use `swfPath` by setting `moviePath`:
  //   `ZeroClipboard.config({ moviePath: ZeroClipboard.config("swfPath") });`
  // URL to movie, relative to the page. Default value will be "ZeroClipboard.swf" under the
  // same path as the ZeroClipboard JS file.
  swfPath: "path/to/ZeroClipboard.swf",

  // SWF inbound scripting policy: page domains that the SWF should trust. (single string or array of strings)
  trustedDomains: [window.location.host],

  // Include a "nocache" query parameter on requests for the SWF
  cacheBust: true,

  // Forcibly set the hand cursor ("pointer") for all clipped elements
  forceHandCursor: false,

  // The z-index used by the Flash object. Max value (32-bit): 2147483647
  zIndex: 999999999,

  // Debug enabled: send `console` messages with deprecation warnings, etc.
  debug: true,

  // Sets the title of the `div` encapsulating the Flash object
  title: 'div',

  // Setting this to `false` would allow users to handle calling `ZeroClipboard.activate(...);`
  // themselves instead of relying on our per-element `mouseover` handler
  autoActivate: true,


  /** @deprecated */
  // The class used to indicate that a clipped element is being hovered over
  hoverClass: "zeroclipboard-is-hover",

  /** @deprecated */
  // The class used to indicate that a clipped element is active (is being clicked)
  activeClass: "zeroclipboard-is-active",

  /** @deprecated */
  // DEPRECATED!!! Use `trustedDomains` instead!
  // SWF inbound scripting policy: page origins that the SWF should trust. (single string or array of strings)
  trustedOrigins: ['origin'],

  /** @deprecated */
  // SWF outbound scripting policy. Possible values: "never", "sameDomain", "always"
  allowScriptAccess: 'always',

  /** @deprecated */
  // Include a "nocache" query parameter on requests for the SWF
  useNoCache: true,

  /** @deprecated */
  // URL to movie
  moviePath: "ZeroClipboard.swf"
};

ZeroClipboard.config(_globalConfig);

ZeroClipboard.config({ moviePath: "new/path" });

var client = new ZeroClipboard($("#d_clip_button"), { moviePath: "new/path" });
client.on( 'dataRequested', function (client, args) {
    client.setText( "Copy me!" );
 });

client.setText( "Copy me!" );

client.clip( document.getElementById('d_clip_button') );

var client = new ZeroClipboard( $("button#my-button") );

function my_load_handler() {

}

client.on( 'load', my_load_handler );

client.off( 'load', my_load_handler );

client.on( 'load', function ( client, args ) {
  alert( "movie has loaded" );
});

client.on( 'mouseover', function ( client, args ) {
  alert( "mouse is over movie" );
});

client.on( 'mouseout', function ( client, args ) {
  alert( "mouse has left movie" );
} );

client.on( 'mousedown', function ( client, args ) {
  alert( "mouse button is down" );
} );

client.on( 'mouseup', function ( client, args ) {
  alert( "mouse button is up" );
} );

client.on( 'complete', function ( client, args ) {
  alert("Copied text to clipboard: " + args.text );
} );

client.on( 'noflash', function ( client, args ) {
  alert("You don't support flash");
} );

client.on( 'wrongflash', function ( client, args ) {
  alert("Your flash is too old " + args.flashVersion);
} );

client.on( 'dataRequested', function ( client, args ) {
  client.setText( 'Copied to clipboard.' );
} );

var client = new ZeroClipboard( $('.clip_button') );

client.on( 'load', function(client) {
  // alert( "movie is loaded" );

  client.on( 'datarequested', function(client) {
    client.setText(this.innerHTML);
  } );

  client.on( 'complete', function(client, args) {
    alert("Copied text to clipboard: " + args.text );
  } );
} );

client.on( 'wrongflash noflash', function() {
  ZeroClipboard.destroy();
});

ZeroClipboard.config({ debug: false });
