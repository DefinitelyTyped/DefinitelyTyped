
/// <reference types="jquery" />

import ZeroClipboard = require("zeroclipboard");
// import * as ZeroClipboard from "zeroclipboard";

namespace SimpleExample {
  ZeroClipboard.config( { swfPath: "http://YOURSERVER/path/ZeroClipboard.swf" } );

  let client = new ZeroClipboard(document.getElementById("copy-button"));
  let client2 = new ZeroClipboard(jQuery('.copy-button'));

  client.on( "ready", function( readyEvent ) {
    // alert( "ZeroClipboard SWF is ready!" );

    client.on( "aftercopy", function( event ) {
      this === client;
      event.target === document.getElementById('el')
      event.target.style.display = "none";
      alert("Copied text to clipboard: " + event.data["text/plain"] );
    });
  });

  client.on( "copy", function (event) {
    var clipboard = event.clipboardData;
    clipboard.setData( "text/plain", "Copy me!" );
    clipboard.setData( "text/html", "<b>Copy me!</b>" );
    clipboard.setData( "application/rtf", "{\\rtf1\\ansi\n{\\b Copy me!}}" );
  });

  ZeroClipboard.setData( "text/plain", "Copy me!" );

  client.setText( "Copy me!" );

  client.clip( document.getElementById("d_clip_button") );

  var $client = new ZeroClipboard( $("button#my-button") );

  function example() {
    var client = new ZeroClipboard( $('.clip_button') );

    client.on( 'ready', function(event) {
      // console.log( 'movie is loaded' );

      client.on( 'copy', function(event) {
        event.clipboardData.setData('text/plain', event.target.innerHTML);
      } );

      client.on( 'aftercopy', function(event) {
        console.log('Copied text to clipboard: ' + event.data['text/plain']);
      } );
    } );

    client.on( 'error', function(event) {
      // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
      ZeroClipboard.destroy();
    } );
  }

  ZeroClipboard.config({
      fixLineEndings: false
  });

  ZeroClipboard.config({
    forceEnhancedClipboard: true
  });

}

namespace Static {
  var version:String = ZeroClipboard.version;

  var config = ZeroClipboard.config();

  var swfPath:String = ZeroClipboard.config("swfPath");

  ZeroClipboard.config({});

  ZeroClipboard.destroy();

  ZeroClipboard.setData("text/plain", "Blah");

  ZeroClipboard.setData({
    "text/plain": "Blah",
    "text/html": "<b>Blah</b>"
  });

  ZeroClipboard.clearData("text/plain");

  var text:String = ZeroClipboard.getData("text/plain");

  var dataObj = ZeroClipboard.getData();

  ZeroClipboard.focus(document.getElementById("d_clip_button"));

  ZeroClipboard.blur();

  var el = document.getElementById("d_clip_button");
  ZeroClipboard.focus(el);
  var activeEl = ZeroClipboard.activeElement();
  activeEl === el;

  ZeroClipboard.state();

  let b:boolean = ZeroClipboard.isFlashUnusable();

  var listenerFn = function(e: Object) { var ZeroClipboard = this; /* ... */ };
  ZeroClipboard.on("ready", listenerFn);

  var listenerObj = {
    handleEvent: function(e: Object) { var listenerObj = this; /* ... */ }
  };
  ZeroClipboard.on("error", listenerObj);

  ZeroClipboard.on("ready error", function(e) { /* ... */ });

  ZeroClipboard.on({
    "ready": function(e) { /* ... */ },
    "error": function(e) { /* ... */ }
  });

  ZeroClipboard.off("ready", listenerFn);
  ZeroClipboard.off("error", listenerObj);

  ZeroClipboard.off("ready error", listenerFn);

  ZeroClipboard.off({
    "ready": function(e) { /* ... */ },
    "error": function(e) { /* ... */ }
  });

  ZeroClipboard.off("ready");

  ZeroClipboard.off();

  ZeroClipboard.emit("ready");
  ZeroClipboard.emit({
    type: "error",
    name: "flash-disabled"
  });

  var pendingCopyData = ZeroClipboard.emit("copy");

  var listener = ZeroClipboard.handlers("ready");

  var listeners = ZeroClipboard.handlers();

  var currentlyActivatedElementOrNull = document.getElementById('currentlyActivatedElementOrNull');
  var dataClipboardElementTargetOfCurrentlyActivatedElementOrNull = document.getElementById('dataClipboardElementTargetOfCurrentlyActivatedElementOrNull')
  var flashSwfObjectRef = document.getElementById('flashSwfObjectRef') as HTMLObjectElement;

  ZeroClipboard.on("ready", function(e) {
    e = {
      type: "ready",
      message: "Flash communication is established",
      target: currentlyActivatedElementOrNull,
      relatedTarget: dataClipboardElementTargetOfCurrentlyActivatedElementOrNull,
      currentTarget: flashSwfObjectRef,
      version: "11.2.202",
      timeStamp: Date.now()
    };
  });

  ZeroClipboard.on("beforecopy", function(e) {
    e = {
      type: "beforecopy",
      target: currentlyActivatedElementOrNull,
      relatedTarget: dataClipboardElementTargetOfCurrentlyActivatedElementOrNull,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now()
    };
  });

  ZeroClipboard.on("copy", function(e) {
    e.clipboardData.setData('text/html','<br>');
    e.clipboardData.setData({'text/html':'<br>'});
    e = {
      type: "copy",
      target: currentlyActivatedElementOrNull,
      relatedTarget: dataClipboardElementTargetOfCurrentlyActivatedElementOrNull,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      clipboardData: {
        setData: ZeroClipboard.setData,
        clearData: ZeroClipboard.clearData
      }
    };
  });


  ZeroClipboard.on("aftercopy", function(e) {
    e = {
      type: "aftercopy",
      target: currentlyActivatedElementOrNull,
      relatedTarget: dataClipboardElementTargetOfCurrentlyActivatedElementOrNull,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      success: {
        "text/plain": true,
        "text/html": true,
        "application/rtf": false
      },
      data: {
        "text/plain": "Blah",
        "text/html": "<b>Blah</b>",
        "application/rtf": "{\\rtf1\\ansi\n{\\b Blah}}"
      },
      errors: [
        {
          name: "SecurityError",
          message: "Clipboard security error OMG",
          errorID: 7320,
          stack: null,
          format: "application/rtf",
          clipboard: "desktop"
        }
      ]
    };
  });

  ZeroClipboard.on("destroy", function(e) {
    e = {
      type: "destroy",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      success: {
        "text/plain": true,
        "text/html": true,
        "application/rtf": false
      },
      data: {
        "text/plain": "Blah",
        "text/html": "<b>Blah</b>",
        "application/rtf": "{\\rtf1\\ansi\n{\\b Blah}}"
      }
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-disabled",
      message: "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-sandboxed",
      message: "Attempting to run Flash in a sandboxed iframe, which is impossible",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0",
      version: "11.2.202"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-unavailable",
      message: "Flash is unable to communicate bidirectionally with JavaScript",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0",
      version: "11.2.202"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-degraded",
      message: "Flash is unable to preserve data fidelity when communicating with JavaScript",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0",
      version: "11.2.202"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-deactivated",
      message: "Flash is too outdated for your browser and/or is configured as click-to-activate. This may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0",
      version: "11.2.202"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "flash-overdue",
      message: "Flash communication was established but NOT within the acceptable time limit",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      minimumVersion: "11.0.0",
      version: "11.2.202"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "version-mismatch",
      message: "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      jsVersion: "2.2.1",
      swfVersion: "2.2.0"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "clipboard-error",
      message: "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
      target: currentlyActivatedElementOrNull,
      relatedTarget: dataClipboardElementTargetOfCurrentlyActivatedElementOrNull,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      data: {
        "text/plain": "Blah",
        "text/html": "<b>Blah</b>",
        "application/rtf": "{\\rtf1\\ansi\n{\\b Blah}}"
      },
      errors: [
        {
          name: "SecurityError",
          message: "Clipboard security error OMG",
          errorID: 7320,
          stack: null,
          format: "application/rtf",
          clipboard: "desktop"
        }
      ]
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "config-mismatch",
      message: "ZeroClipboard configuration does not match Flash's reality",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now(),
      property: "swfObjectId",
      configuredValue: "my-zeroclipboard-object",
      actualValue: "global-zeroclipboard-flash-bridge"
    };
  });

  ZeroClipboard.on("error", function(e) {
    e = {
      type: "error",
      name: "swf-not-found",
      message: "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity",
      target: null,
      relatedTarget: null,
      currentTarget: flashSwfObjectRef,
      timeStamp: Date.now()
    };
  });
}

namespace Instance {
  var clippedEl = document.getElementById("d_clip_button");
  var client = new ZeroClipboard(clippedEl);

  client.setText("Blah");

  client.setHtml("<b>Blah</b>");

  client.setRichText("{\\rtf1\\ansi\n{\\b Blah}}");

  client.setData("text/plain", "Blah");
  client.setData({
    "text/plain": "Blah",
    "text/html": "<b>Blah</b>"
  });

  client.clearData("text/plain");
  client.clearData();

  var text:String = client.getData("text/plain");
  var dataObj = client.getData();

  client.clip(document.getElementById("d_clip_button"))
  client.clip(document.querySelectorAll(".clip_button"));
  client.clip(jQuery(".clip_button"));

  client.unclip(document.getElementById("d_clip_button"))
  client.unclip(document.querySelectorAll(".clip_button"));
  client.unclip(jQuery(".clip_button"));
  client.unclip();

  var els:HTMLElement[] = client.elements();

  var listenerFn = function(e: Object) { var client = this; /* ... */ };
  client.on("ready", listenerFn);

  var listenerObj = {
    handleEvent: function(e: Object) { var listenerObj = this; /* ... */ }
  };
  client.on("error", listenerObj);

  client.on("ready error", function(e) { /* ... */ });

  client.on({
    "ready": function(e) { /* ... */ },
    "error": function(e) { /* ... */ }
  });

  client.off("ready", listenerFn);
  client.off("error", listenerObj);

  client.off("ready error", listenerFn);

  client.off({
    "ready": function(e) { /* ... */ },
    "error": function(e) { /* ... */ }
  });

  client.off("ready");

  client.off();

  client.emit("ready");
  client.emit({
    type: "error",
    name: "flash-disabled"
  });

  var readyListeners = client.handlers("ready");

  var listeners = client.handlers();

  var client = new ZeroClipboard();
  client.on("ready", function(e) {
    if (e.client === client && client === this) {
      console.log("This client instance is ready!");
    }
  });
}

namespace GlobalConfig {
  var _globalConfig = {

    // SWF URL, relative to the page. Default value will be "ZeroClipboard.swf"
    // under the same path as the ZeroClipboard JS file.
    swfPath: '_swfPath',

    // SWF inbound scripting policy: page domains that the SWF should trust.
    // (single string, or array of strings)
    trustedDomains: window.location.host ? [window.location.host] : [],

    // Include a "noCache" query parameter on requests for the SWF.
    cacheBust: true,

    // Enable use of the fancy "Desktop" clipboard, even on Linux where it is
    // known to suck.
    forceEnhancedClipboard: false,

    // How many milliseconds to wait for the Flash SWF to load and respond before assuming that
    // Flash is deactivated (e.g. click-to-play) in the user's browser. If you don't care about
    // how long it takes to load the SWF, you can set this to `null`.
    flashLoadTimeout: 30000,

    // Setting this to `false` would allow users to handle calling `ZeroClipboard.focus(...);`
    // themselves instead of relying on our per-element `mouseover` handler.
    autoActivate: true,

    // Bubble synthetic events in JavaScript after they are received by the Flash object.
    bubbleEvents: true,

    // Ensure OS-compliant line endings, i.e. "\r\n" on Windows, "\n" elsewhere
    fixLineEndings: true,

    // Sets the ID of the `div` encapsulating the Flash object.
    // Value is validated against the [HTML4 spec for `ID` tokens][valid_ids].
    containerId: "global-zeroclipboard-html-bridge",

    // Sets the class of the `div` encapsulating the Flash object.
    containerClass: "global-zeroclipboard-container",

    // Sets the ID and name of the Flash `object` element.
    // Value is validated against the [HTML4 spec for `ID` and `Name` tokens][valid_ids].
    swfObjectId: "global-zeroclipboard-flash-bridge",

    // The class used to indicate that a clipped element is being hovered over.
    hoverClass: "zeroclipboard-is-hover",

    // The class used to indicate that a clipped element is active (is being clicked).
    activeClass: "zeroclipboard-is-active",



    // Forcibly set the hand cursor ("pointer") for all clipped elements.
    // IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
    forceHandCursor: false,

    // Sets the title of the `div` encapsulating the Flash object.
    // IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
    title: 'title',

    // The z-index used by the Flash object.
    // Max value (32-bit): 2147483647.
    // IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
    zIndex: 999999999

  };

  ZeroClipboard.config(_globalConfig);

}
