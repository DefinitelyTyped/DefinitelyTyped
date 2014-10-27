// Type definitions for Microsoft Dynamics xRM ClientGlobalContext.js.aspx
// Project: http://msdn.microsoft.com/en-us/library/gg328255.aspx
// Definitions by: David Berry <https://github.com/6ix4our/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="xrm.d.ts" />

/**
 * Gets the xRM application context, for HTML web resources
 * @returns {Xrm.Context}   The application context for the user's current session.
 * @remarks The ClientGlobalContext.js.aspx page will include some global event handlers. These event handlers will 
 *          cancel the onselectstart, contextmenu, and ondragstart events.
 */
declare function GetGlobalContext(): Xrm.Context;