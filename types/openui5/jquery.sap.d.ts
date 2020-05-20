// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: Lukas May <https://www.dscsag.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

/// <reference types="jquery" />

declare interface Ui5Logger {
  //Allows to add a new LogListener that will be notified for new log entries.
  addLogListener(oListener: any): void;
  //Creates a new debug-level entry in the log with the given message, details and calling component.
  debug(sMessage: string, sDetails?: string, sComponent?: string): void;
  //Creates a new error-level entry in the log with the given message, details and calling component.
  error(sMessage: string, sDetails?: string, sComponent?: string): void;
  //Creates a new fatal-level entry in the log with the given message, details and calling component.
  fatal(sMessage: string, sDetails?: string, sComponent?: string): void;
  //Returns the log level currently effective for the given component.
  getLevel(sComponent?: string): void;
  //Returns the logged entries recorded so far as an array.
  getLogEntries(): void;
  //Returns a jQuery.sap.log.Logger for the given component.
  getLogger(sComponent: string, iDefaultLogLevel?: any): void;
  //Creates a new info-level entry in the log with the given message, details and calling component.
  info(sMessage: string, sDetails?: string, sComponent?: string): void;
  //Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
  isLoggable(iLevel?: any, sComponent?: string): void;
  //Allows to remove a registered LogListener.
  removeLogListener(oListener: any): void;
  //Defines the maximum jQuery.sap.log.Level of log entries that will be recorded.
  setLevel(iLogLevel: any, sComponent?: string): void;
  //Creates a new trace-level entry in the log with the given message, details and calling component.
  trace(sMessage: string, sDetails?: string, sComponent?: string): void;
  //Creates a new warning-level entry in the log with the given message, details and calling component.
  warning(sMessage: string, sDetails?: string, sComponent?: string): void;
}
declare interface JquerySap {
  log: Ui5Logger
  // Adds a whitelist entry for URL valiadtion 
  addUrlWhitelist(protocol: any, host: any, port: any, path: any): void;
  // Calculate delta of old list and new list This implements the algorithm described in "A Technique for Isolating Differences Between Files" (Commun. 
  arrayDiff(aOld: any, aNew: any, fnCompare?: any, bUniqueEntries?: any): void;
  // A simple assertion mechanism that logs a message when a given condition is not met. 
  assert(bResult: any, sMessage: any): void;
  // Binds all events for listening with the given callback function. 
  bindAnyEvent(fnCallback: any): void;
  // Shortcut for jQuery("#" + id) with additionally the id being escaped properly. 
  byId(sId: any, oContext: any): void;
  // Transforms a hyphen separated string to an camel case string. 
  camelCase(sString: any): void;
  // Converts a character of the string to upper case. 
  charToUpperCase(sString: any, iPos: any): void;
  // Checks a given mouseover or mouseout event whether it is equivalent to a mouseenter or mousleave event regarding the given DOM reference. 
  checkMouseEnterOrLeave(oEvent: any, oDomRef: any): void;
  // Stops the delayed call. 
  clearDelayedCall(sDelayedCallId: any): void;
  // Stops the interval call. 
  clearIntervalCall(sIntervalCallId: any): void;
  // clears the whitelist for URL valiadtion 
  clearUrlWhitelist(): void;
  // Returns whether oDomRefChild is oDomRefContainer or is contained in oDomRefContainer. 
  containsOrEquals(oDomRefContainer: any, oDomRefChild: any): void;
  // Declares a module as existing. 
  declare(sModuleName: any, bCreateNamespace?: any): void;
  // Calls a method after a given delay and returns an id for this timer 
  delayedCall(iDelay: any, oObject: any, method: any, aParameters?: any): void;
  // For the given scroll position measured from the "beginning" of a container (the right edge in RTL mode) this method returns the scrollLeft value as understood by the current browser in RTL mode. 
  denormalizeScrollBeginRTL(iNormalizedScrollBegin: any, oDomRef: any): void;
  // For the given scrollLeft value this method returns the scrollLeft value as understood by the current browser in RTL mode. 
  denormalizeScrollLeftRTL(iNormalizedScrollLeft: any, oDomRef: any): void;
  // Disable touch to mouse handling 
  disableTouchToMouseHandling(): void;
  // Shortcut for document.getElementById(), including a bug fix for older IE versions. 
  domById(sId: any, oWindow?: any): void;
  // Encode the string for inclusion into CSS string literals or identifiers 
  encodeCSS(sString: any): void;
  // Encode the string for inclusion into HTML content/attribute 
  encodeHTML(sString: any): void;
  // Encode the string for inclusion into a JS string literal 
  encodeJS(sString: any): void;
  // Encode the string for inclusion into an URL parameter 
  encodeURL(sString: any): void;
  // Encode a map of parameters into a combined URL parameter string 
  encodeURLParameters(mParams: any): void;
  // Encode the string for inclusion into XML content/attribute 
  encodeXML(sString: any): void;
  // Checks whether a given sString ends with sEndString respecting the case of the strings. 
  endsWith(sString: any, sEndString: any): void;
  // Checks whether a given sString ends with sEndString ignoring the case of the strings. 
  endsWithIgnoreCase(sString: any, sEndString: any): void;
  // Compares the two given values for equality, especially takes care not to compare arrays and objects by reference: any, but compares their content. 
  equal(a: any, b: any, maxDepth?: any, contains?: any): void;
  // This function escapes the reserved letters in Regular Expression 
  escapeRegExp(sString: any): void;
  // Returns a new constructor function that creates objects with the given prototype. 
  factory(oPrototype: any): void;
  // Calls focus() on the given DOM element, but catches and ignores any errors that occur when doing so. 
  focus(oDomRef: any): void;
  // Creates a string from a pattern by replacing placeholders with concrete values. 
  formatMessage(sPattern: any, aValues?: any): void;
  // Returns the names of all declared modules. 
  getAllDeclaredModules(): void;
  // Constructs an URL to load the module with the given name and file type (suffix). 
  getModulePath(sModuleName: any, sSuffix: any): void;
  // Returns a JavaScript object which is identified by a sequence of names. 
  getObject(sName: any, iNoCreates?: any, oContext?: any): void;
  // Determines the URL for a resource given its unified resource name. 
  getResourcePath(sResourceName: any): void;
  // Returns a new function that returns the given oValue (using its closure). 
  getter(oValue: any): void;
  // Creates and returns a new instance of jQuery.sap.util.UriParameters. 
  getUriParameters(sUri: any): void;
  // Gets the whitelist for URL valiadtion 
  getUrlWhitelist(): void;
  // Executes an 'eval' for its arguments in the global context (without closure variables). 
  globalEval(): void;
  // Transforms a camel case string into a hyphen separated string. 
  hyphen(sString: any): void;
  // Includes the script (via <script>-tag) into the head for the specified sUrl and optional sId. 
  includeScript(sUrl: any, sId?: any, fnLoadCallback?: any, fnErrorCallback?: any): void;
  // Includes the specified stylesheet via a <link>-tag in the head of the current document. 
  includeStyleSheet(sUrl: any, sId?: any, fnLoadCallback?: any, fnErrorCallback?: any): void;
  // Does some basic modifications to the HTML page that make it more suitable for mobile apps. 
  initMobile(options?: any): void;
  // Calls a method after a given interval and returns an id for this interval. 
  intervalCall(iInterval: any, oObject: any, method: any, aParameters?: any): void;
  // Check whether a given module has been loaded / declared already. 
  isDeclared(sModuleName: any, bIncludePreloaded?: any): void;
  // Returns a new object which has the given oPrototype as its prototype. 
  newObject(oPrototype: any): void;
  // Returns the window reference for a DomRef 
  ownerWindow(oDomRef: any): void;
  // Pads a string on the left side until is has the given length. 
  padLeft(sString: any, sPadChar: any, iLength: any): void;
  // Pads a string on the right side until is has the given length. 
  padRight(sString: any, sPadChar: any, iLength: any): void;
  // Parses the specified XML formatted string text using native parsing function of the browser and returns a valid XML document. 
  parseXML(sXMLText: any): void;
  // Creates and returns a new instance of jQuery.sap.util.Properties. 
  properties(mParams?: any): void;
  // Registers an URL prefix for a module name prefix. 
  registerModulePath(sModuleName: any, vUrlPrefix: any): void;
  // Registers an URL prefix for a resource name prefix. 
  registerResourcePath(sResourceNamePrefix: any, vUrlPrefix: any): void;
  // Removes a whitelist entry for URL valiadtion 
  removeUrlWhitelist(iIndex: any): void;
  // Ensures that the given module is loaded and executed before execution of the current script continues. 
  require(vModuleName: any): void;
  // Creates and returns a new instance of jQuery.sap.util.ResourceBundle using the given URL and locale to determine what to load. 
  resources(mParams?: any): void;
  // Returns the size (width of the vertical / height of the horizontal) native browser scrollbars. 
  scrollbarSize(sClasses?: any, bForce?: any): void;
  // Serializes the specified XML document into a string representation. 
  serializeXML(oXMLDocument: any): void;
  // Sets the bookmark icon for desktop browsers and the icon to be displayed on the home screen of iOS devices after the user does "add to home screen". 
  setIcons(oIcons: any): void;
  // Sets the "apple-mobile-web-app-capable" and "mobile-web-app-capable" meta information which defines whether the application is loaded in full screen mode (browser address bar and toolbar are hidden) after the user does "add to home screen" on mobile devices. 
  setMobileWebAppCapable(bValue: any): void;
  // Sets an object property to a given value, where the property is identified by a sequence of names (path: any). 
  setObject(sName: any, vValue: any, oContext?: any): void;
  // Convenience wrapper around jQuery.ajax() that avoids the need for callback functions when synchronous calls are made. 
  sjax(oOrigSettings: any): void;
  // Checks whether a given sString starts with sStartString respecting the case of the strings. 
  startsWith(sString: any, sStartString: any): void;
  // Checks whether a given sString starts with sStartString ignoring the case of the strings. 
  startsWithIgnoreCase(sString: any, sStartString: any): void;
  // Convenience wrapper for jQuery.sap.sjax that enforeces the Http method GET and defaults the data type of the result to 'text'. 
  syncGet(sUrl: any, data: any, sDataType?: any): void;
  // Convenience wrapper for jQuery.sap.sjax that enforces the Http method GET and the data type 'json'. 
  syncGetJSON(sUrl: any, data: any, fallback?: any): void;
  // Convenience wrapper for jQuery.sap.sjax that enforces the Http method GET and the data type 'text'. 
  syncGetText(sUrl: any, data: any, fallback?: any): void;
  // Convenience wrapper for jQuery.sap.sjax that enforces the Http method POST and defaults the data type of the result to 'text'. 
  syncPost(sUrl: any, data: any, sDataType?: any): void;
  // Search ancestors of the given source DOM element for the specified CSS class name. 
  syncStyleClass(sStyleClass: any, vSource: any, vDestination: any): void;
  // Creates and returns a pseudo-unique id. 
  uid(): void;
  // Unbinds all events for listening with the given callback function. 
  unbindAnyEvent(fnCallback: any): void;
  // Sorts the given array in-place and removes any duplicates (identified by "==="). 
  unique(a: any): void;
  // Validates an URL. 
  validateUrl(sUrl: any): void;
}
declare interface JQueryStatic {
  sap: JquerySap
}
