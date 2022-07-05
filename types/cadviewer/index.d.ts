// Type definitions for CADViewer 7.0
// Project: https://github.com/cadviewer
// Definitions by: Casper Harnung <https://github.com/cadviewer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7


declare module 'cadviewer' {
/**
 * Changes CADViewer from CADViewer Community to CADViewer Pro
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} cadviewerpro - true for CADViewer Pro, false for CADViewer Community
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_CADViewerPro(cadviewerpro: boolean): void;
/**
 * Set the Handlers for server communication - assumptions of back-end + front end assumed
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} handlerType - the following settings are implemented: 'ReactJS',  'Angular', 'dotNet', 'dotNetCore' 'PHP', 'Servlets', NodeJS'
 * @param {String} floorplan_div - the floorplan div in which CADViewer is running
 * @param {String} controllerPath - the controller path, if any, primarily used for dotNetCore
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setHandlerSettings(handlerType: string, floorplan_div: string, controllerPath: string): void;
/**
 * Set Angular Mode
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - set flag for Angular mode. Default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAngular(mode: boolean): void;
/**
 * Set NodeJS Server flag
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - set flag for nodejs handling. NodeJS server behaves differently for prnumber, default false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setNodeJSserver(mode: boolean): void;
/**
 * Load multipage PDF converter to SVG through php
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - loading converted SVG from PDF via php, default is false and direct load of svg
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_multipagePDFtoSVG_PhpLoad(mode: boolean): void;
/**
 * Sets the size of the print window as a relation of the screen between 0 and 1
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} scale - the size of the print window as a relation of the screen between 0 and 1, default is 0.4
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_printToPdf_windowRelativeSize(scale: number): void;
/**
 * Sets file loading so that it done from a SharePoint Server
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true to load files from sharepoint server, file names are then loaded through internal sharepoint REST calls, false is default standard server load of draiwngs
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_fileLoadFromSharePointServer(mode: boolean): void;
/**
 * Sets the status of the drawing cvjs_masterbackground[cvjs_active_floorplan_div_nr]. If set to true, refreshed on reload, if false multiple drawings can be merged into canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true for standard load, false for overlay of drawings on concequitive loads.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInitMasterBackgroundMode(mode: boolean): void;
/**
 * Sets the loading of filetypes to be the old CADViewer type, in which each file consists of four separate files
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} oldtype - true for oldtype, false for standard new type. Default is false.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setJSFileOldType(oldtype: boolean): void;
/**
 * Enables print Icon
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - name of Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_EnablePrintIcon(floorplan_div: string): void;
/**
 * Disables print Icon
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - name of Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_DisablePrintIcon(floorplan_div: string): void;
/**
 * Sets flag to control if call to server php for conversion shall be URI encoded or not. Default is true.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - default is true. Set to true to custom implement this feature
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_encodeURIcallToserver(flag: boolean): void;
/**
 * Sets flag to control if Print to PDF inside print modal shall be handled by custom controller. The name of controller is defined in: cvjs_setCustomPDFprintController()
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} customPrintAsPDF - default is false. Set to true to custom implement this feature
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomPDFprintControllerFlag(customPrintAsPDF: boolean): void;
/**
 * Sets the name of server side controller to custom control print as PDF inside print modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomPDFprintController(handlerName: string): void;
/**
 * Sets the location of the server side handers for load, save, append and print controls
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - location of print handlers, in the standard case this in the "/php/" folder with redline and file controllers
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerHandlersPath(path: string): void;
/**
 * Sets the location to the print objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - location of print object relative to Controller, can also use absolute paths standard is "./temp_print/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintObjectPath(path: string): void;
/**
 * Sets the location to the print objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} pathUrl - location of print objects, web path
 * @param {string} absolutePathServer - location of print objects, server side absolute path
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintObjectPathAbsolute(pathUrl: string, absolutePathServer: string): void;
/**
 * Sets the name of server side controller to control PDF conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerPDFConverterController(handlerName: string): void;
/**
 * Sets the name of server side controller to load drawings after conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setGetFileController(handlerName: string): void;
/**
 * Sets the name of server side controller to return path structure for PDF conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setReturnPDFparamsController(handlerName: string): void;
/**
 * Controls if Print to PDF feature is included in print Modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} printPDFflag - true is default, set to false to hide PrintAsPDF in Print Modal
 * @param {boolean} printAsPDF - false is default, true will set pdf print flag even if PrintAsPDF checkbox is invisible
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModal_PrintPDF(printPDFflag: boolean, printAsPDF: boolean): void;
/**
 * Controls if GreyScale feature is included in print Modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} printGreyScaleflag - true is default, set to false to hide printGreyScaleflag in Print Modal
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModal_printGreyScaleflag(printGreyScaleflag: boolean): void;
/**
 * Controls if Print to Scale feature is included in print Modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} printToScaleflag - true is default, set to false to hide PrintToScale in Print Modal
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModal_PrintToScale(printToScaleflag: boolean): void;
/**
 * Sets the name of server side save-file controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerSaveFileHandler(handlerName: string): void;
/**
 * Sets the name of server side copy-file controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerCopyFileHandler(handlerName: string): void;
/**
 * Sets the name of server side directory list controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerListDirectoryHandler(handlerName: string): void;
/**
 * Sets the name of server side directory redlines list controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerRedlinesListDirectoryHandler(handlerName: string): void;
/**
 * Sets the name of server side append-file controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerAppendFileHandler(handlerName: string): void;
/**
 * Sets the name of server side delete-file controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerDeleteFileHandler(handlerName: string): void;
/**
 * Sets the name of server side save-file controller document for print
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerSaveFileHandlerPrint(handlerName: string): void;
/**
 * Sets the name of server side append-file controller document for print
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerAppendFileHandlerPrint(handlerName: string): void;
/**
 * Sets the name of server side delete-file controller document for print
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerDeleteFileHandlerPrint(handlerName: string): void;
/**
 * Sets the name of server side handler to custom control merged content sent as email
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomMergedEmailHandler(handlerName: string): void;
/**
 * Sets the name of server side merge DWG controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerMergeDWGHandler(handlerName: string): void;
/**
 * Sets the insertion location of QR Codes
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} serverGetQRCodeController - controller name
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerGetQRCodeController(serverGetQRCodeController: string): void;
/**
 * Sets the name of server side save-file controller document for redline save
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerSaveHandlerRedlines(handlerName: string): void;
/**
 * Sets the name of server side load-file controller document for redline load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerLoadHandlerRedlines(handlerName: string): void;
/**
 * Sets the name of server side load-file controller document for file list load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerLoadHandler(handlerName: string): void;
/**
 * Sets the location to the php upload folder, this can be on a different domain
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Url - location of upload_2.php document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPhpUploadPath(path: any): void;
/**
 * Sets the location to the upload controller location, this can be on a different domain
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Url - location of upload controller
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setUploadControllerPath(path: any): void;
/**
 * Sets the name of server side upload controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setUploadHandler(handlerName: string): void;
/**
 * Sets the name of server side upload controller document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handlerName - name of the controller/handler document
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setUploadController(handlerName: string): void;
/**
 * Sets the location to the php folder
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - current location of php scripts, typically ../php/
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPhpPath(path: string): void;
/**
 * Open the Page Change menu to select a page in a multipage drawing
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_PageChangeList(floorplan_div: string): void;
/**
 * Open the Layer List menu for layer handling
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LayerList(floorplan_div: string): void;
/**
 * Swap drawing layers On/Off
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_swapLayersInDrawing(floorplan_div: string): void;
/**
 * Sets all layers in drawing On
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_allLayersInDrawingOn(floorplan_div: string): void;
/**
 * Return orginal file layer name based on SVG object ID
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} myObjectId - id of the element in the SVG file
 * @return {string} layer - layer name
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_layerNamefromObjectID(myObjectId: string): string;
/**
 * Turn a single layer on interactively
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_interactiveLayerOff(floorplan_div: string): void;
/**
 * Returns the current fileName from the MultiPages list
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} url - current location
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getCurrentMultiPage_FileName(): string;
/**
 * Finds the current url of the library
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} url - current location
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_currentURL(): string;
/**
 * Finds the current host of the library
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} host - current hostlocation
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_currentHost(): string;
/**
 * Set the script paths to load default drawings for encapsulate png rendering, typically ../javascripts
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path to default script-file folder
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDefaultJSPath(path: string): void;
/**
 * Activates and displays the information modal with text
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} modal type, 1 for bootstrap modal, 2 for standard floating modal, default is bootstrap modal
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInformationModalType(mode: any): void;
/**
 * Activates and displays the information modal with text
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
  * @param {String} text string to display
  * @param {int} modalHeight of modal, omit if using standard values
  * @param {int} modal_left, position of modal
  * @param {int} modal_top, position of modal
  *
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayInformationModal(floorplan_div: string, textString: any, modalHeight: number, modal_left: number, modal_top: number): void;
/**
 * Hides the information modal with text
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideInformationModal(floorplan_div: string): void;
export function cvjs_displayInformationModal_Mode(mode: any): void;
/**
 * Display the current version number of the CADViewer toolkit and viewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} version - current version number
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_version(): string;
/**
 * Calls modal for setting background color
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setBackgroundColor(floorplan_div: string): void;
export function cvjs_setGenericColorFromPicker(pickcolor: any): void;
/**
 * Set the background color of CADViewer canvas, using HEX
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} hex of background, hex string, can be with or without #
  * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setBackgroundColorHex(hex: string, floorplan_div: string): void;
/**
 * Calls the interactive modal for text search
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_startSearchText(): void;
/**
 * Calibrate measurement
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_calibrateMeasurement(floorplan_div: string): void;
/**
 * Activates the measurement modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_Measurement(floorplan_div: string): void;
/**
 * Returns the HEX color as AutoCAD Color table
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} hexNumber - hex value of color.
 * @return {int} colorNumber - number of color
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getAutoCADColor(hexNumber: any): string;
/**
  * Returns the DWG/Global coordinates scaled value
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} n - svg coordinate value
  * @param {int} page - page number in the drawing set
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_get_dwg_scaled_value(n: number, page: number): number;
/**
  * Returns the DWG/Global coordinate based on SVG value
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} x - svg coordinate value
  * @param {int} page - page number in the drawing set
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_get_dwg_x_coord(x: number, page: number): number;
/**
  * Returns the DWG/Global coordinate based on SVG value
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} y - svg coordinate value
  * @param {int} page - page number in the drawing set
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_get_dwg_y_coord(y: number, page: number): number;
/**
  * Returns the DWG/Global coordinate based on SVG value from current page
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} x - svg coordinate value
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getGlobal_X_fromSVG(x: number): number;
/**
  * Returns the svg X coordinate based on DWG/Global coordinate
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} x - global coordinate value
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSVG_X_fromGlobal(x: number): number;
/**
  * Returns the DWG/Global coordinate based on SVG value from current page
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} y - svg coordinate value
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getGlobal_Y_fromSVG(y: number): number;
/**
  * Returns the DWG/Global coordinate based on SVG value from current page
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} y - svg coordinate value
  * @return {float} scaled_value - value in dwg space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSVG_Y_fromGlobal(y: number): number;
/**
 * Sets the server controller to save screen as bitmap and create thumbnails
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} controller - the name of the controller
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerCreateThumb_StickyNote_Controller(controller: string): void;
/**
 * Sets the server print mode controller. This variable is used to control what happens after a screenshot is sent to the server
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} mode - the mode in which to control encapsulations of screenshots images sent down to server
  *                     mode = 0: Standard print mode in which a screenshot gets encapsulated into an html document that is opened through a pop-up for printing
  *                     mode = 1: The screenshot is saved to the server as part of stickyNote save, and thumbnails of the image is generated, see method: cvjs_saveScreenAsImage_stickyNoteInfo_makeTumbnails()
  *                     mode = 2: The screenshot is saved to the server as part of a multidocument batch print pdf creation, see method: cvjs_batchConvertDrawingsToPDF()
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerSavePrintModeController(mode: number): void;
/**
 * Sets the server print mode controller. This variable is used to control what happens after a screenshot is sent to the server
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} mode - the mode in which to control encapsulations of screenshots images sent down to server
  *                     mode = 0: Standard print mode in which a screenshot gets encapsulated into an html document that is opened through a pop-up for printing
  *                     mode = 1: The screenshot is saved to the server as part of stickyNote save, and thumbnails of the image is generated, see method: cvjs_saveScreenAsImage_stickyNoteInfo_makeTumbnails()
  *                     mode = 2: The screenshot is saved to the server as part of a multidocument batch print pdf creation, see method: cvjs_batchConvertDrawingsToPDF()
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerSavePrintModeHandler(mode: number): void;
/**
 * Sets the server ScreenToPDF PHP controller document
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} controller  - The location of this document is in: cvjs_phpPath if php, else it will use handler folder.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerScreenToPDFController(controller: string): void;
/**
 * Sets the server ScreenToPDF PHP controller document
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} controller  - The location of this document is in: cvjs_phpPath  if php, else it will use handler folder.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerScreenToPDFHandler(controller: string): void;
/**
 * Save screen image to server
 * On the server two thumbnails are created
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} serverPath - path on Server to save image content and create thumbnails
 * @param {string} image_fileName - name of image file on server. The file with sticky note content will be named fileName.txt
 * @param {int} sizeThumb1 - size in pixels of thumbnail one
 * @param {string} thumb1_fileName - filename of thumbnail one on server
 * @param {int} sizeThumb2 - size in pixels of thumbnail two
 * @param {string} thumb2_fileName - filename of thumbnail two on server
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsImage_makeTumbnails(serverPath: string, image_fileName: string, sizeThumb1: number, thumb1_fileName: string, sizeThumb2: number, thumb2_fileName: string): void;
/**
 * Save screen image to server as well as list of stickyNote content and information
 * On the server two thumbnails are created
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} serverPath - path on Server to save image content and create thumbnails
 * @param {string} image_fileName - name of image file on server. The file with sticky note content will be named fileName.txt
 * @param {int} sizeThumb1 - size in pixels of thumbnail one
 * @param {string} thumb1_fileName - filename of thumbnail one on server
 * @param {int} sizeThumb2 - size in pixels of thumbnail two
 * @param {string} thumb2_fileName - filename of thumbnail two on server
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsImage_stickyNoteInfo_makeTumbnails(serverPath: string, image_fileName: string, sizeThumb1: number, thumb1_fileName: string, sizeThumb2: number, thumb2_fileName: string): void;
/**
 * Save screen image to server as well as list of stickyNote content and information
 * On the server two thumbnails are created
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} serverPath - path on Server to save image content
 * @param {string} image_fileName - name of image file on server.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsImage(serverPath: string, image_fileName: string): void;
/**
 * Captures the screen image and creates a single page PDF
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} pageOrientation - Orientation of drawings: landscape/portrait
 * @param {string} pageSize - Papersize of drawing
 * @param {string} pageResolution - Page resolution in dpi, default is 300
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsPDF(pageOrientation: string, pageSize: string, pageResolution: string): void;
/**
 * Loads a set of drawings, apply page size, page orientation and resolution to each page/drawing.
 * Produce a multi-page PDF out of the set of drawing.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param string floorPlan - Name of the floorplan div for batch processing
 * @param {string[]} drawingFilesArray - String array with name and location of drawings
 * @param {string[]} pageOrientationArray - String array with orientation of drawings: landscape/portrait
 * @param {string[]} pageSizeArray - String array with papersizes of drawings
 * @param {string[]} pageResolutionArray - Array with page resolutions
 * @param string batchFilesToPDF_Controller - Name of the php document that creates the report when the graphics is created
 * @param Object callbackMethod - callBackMethod to decorate each drawing before publishing
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_batchConvertDrawingsToPDF_CustomReport(floorPlan: any, drawingFilesArray: any, pageOrientationArray: any, pageSizeArray: any, pageResolutionArray: any, batchFilesToPDF_Controller: any, callbackMethod: any): void;
/**
 * Sets the paper size of print output
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} papersize - String containg paper size, allowed settings are: A4, A3, A2, US LETTER, ANSI A, ANSI B, ANSI C
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintPaperSize(papersize: string): void;
/**
 * Sets the print resolution
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} dpi - print resolution in dpi, minumum is 75dpi, standard is 300
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintResolutionDpi(dpi: number): void;
/**
 * Sets the print orientation
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} orientation - print orientation, portrait or landscape
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintOrientation(orientation: string): void;
/**
 * Funtion to open print model, interactively set paper size, resolution and orientation and then print
 * API method linked to icon interface
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_Print(floorplan_div: string): void;
/**
 * Conversion for Print , either SVG or PDF with JSON handling.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} originatingContent - base file name
 * @param {string} originatingUsername - username or ""
 * @param {string} originatingPassword - password or ""
 * @param {string} fileFormat - "pdf" or "svg"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_Conversion_forPrint(floorplan_div: string, originatingContent: string, originatingUsername: string, originatingPassword: string, fileFormat: string): void;
/**
 * Function to print to papersize, based on settings provided in cvjs_setPrintOrientation(), cvjs_setPrintResolutionDpi() and cvjs_setPrintPaperSize()
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_printCanvasPaperSize(): void;
/**
 * Set flag to clean temporary print object after use. Requires the cvjs_setServerHandlersPath() general php folder location to be defined with an absolute path
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - true for remove, false to leave as is
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_removePrintObjectAfterPrint(flag: boolean): void;
/**
 * Set javascripts absolute folder url path. Used for print object to find scripts folder to access jquery and ajax
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} folder - absolute jQuery javascripts folder url path
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setJavaScriptsAbsoluteFolder(folder: string): void;
/**
 * Set javascripts absolute folder and jQuery url path. Used for print object to find scripts folder to access jquery and ajax
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} folder - absolute jQuery javascripts folder url path and name
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setJavaScriptsJQ_AbsoluteFolder(folder: string): void;
export function cvjs_displayMagnifyingGlass(floorplan_div: any): void;
export function cvjs_firstPage(floorplan_div: any): void;
export function cvjs_lastPage(floorplan_div: any): void;
export function cvjs_nextPage(floorplan_div: any): void;
/**
 * Change page on the current drawing based on page number
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {int} newpagenumber - a number between 1 and the total pages in the drawing
 * @return {boolean} status - false if newpagenumber outside of range, true if page change

 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changePageByNumber(floorplan_div: string, newpagenumber: number): boolean;
export function cvjs_previousPage(floorplan_div: any): void;
/**
 * Sets the the response of
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} supressflag - true to supress hyperlink colors, false to keep standard highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSupressHyperlinkColors(supressflag: boolean): void;
/**
 * Sets the click response of URl links to either single click or double click
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} click - 1: single click 2: double click
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setUrl_singleDoubleClick(click: number): void;
/**
 * Encapsulate Url in JavaScript callback method cvjs_Url_callback(). Developer gets control over all hyperlinks in drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag: enable callback method false: disable callback method (link directly from drawing)
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_encapsulateUrl_callback(flag: boolean): void;
/**
* Turn all Object Space layers off - Object Spaces, Sticky Notes and Redlines are differentiated.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AllLayersOff(): void;
/**
* Turn single general layer on, either defined individually or as a Object Space layer or Text on a Space object  -  Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to turn on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LayerOn(layer: string): void;
export function cvjs_LayerOn_OthersOff(layer: any): void;
/**
* Turn single Object Space layer on, turn all other layers off - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to turn on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LayerOn_AllOff(layer: string): void;
/**
* Turn single general layer on, either defined individually or as a Object Space layer or Text on a Space object  -  Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to turn off
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LayerOff(layer: string): void;
/**
 * Enable or disable pan operations with a smaller thumbnail drawing object, thereby increasing redraw speed.
 * For large drawings and on limited capacity devices, set this option to true.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} panState - true for pan with thumbnails, false for pan with original image
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPanState(panState: boolean): void;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} doResize - flag to do resize of canvas or not: Parameter doResize is set to false when calling cvjs_windowResize_ after initialization and loading of file. Parameter doResize is set to true when cvjs_windowResize is implemented into the function  jQuery(window).resize(function() {}
 * @param {string} floorplan - name of SVG element containing canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_windowResize_position(doResize: boolean, floorplan: string): void;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan - name of SVG element containing canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeWindow_position(floorplan: string): void;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float}   widthFloorplan - width of containing element in pixels
 * @param {float}   heightFloorplan - height of containing element in pixels
 * @param {string} floorplan - name of SVG element containing canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeWindow_fixedSize(widthFloorplan: number, heightFloorplan: number, floorplan: string): void;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float}   widthFloorplan - width of containing element in pixels
 * @param {float}   heightFloorplan - height of containing element in pixels
 * @param {string} floorplan - name of SVG element containing canvas
 * @param {int}   xPos - x position of element
 * @param {int}   yPos - y position of element
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeWindow_fixedSize_location(widthFloorplan: number, heightFloorplan: number, floorplan: string, xPos: number, yPos: number): void;
export function cvjs_windowResize_position_WidthHeight(doResize: any, widthFloorplan: any, heightFloorplan: any, floorplan: any): void;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} doResize - flag to do resize of canvas or not: Parameter doResize is set to false when calling cvjs_windowResize_ after initialization and loading of file. Parameter doResize is set to true when cvjs_windowResize is implemented into the function  jQuery(window).resize(function() {}
 * @param {float}   widthFloorplan - width of containing element in pixels
 * @param {float}   heightFloorplan - height of containing element in pixels
 * @param {string} floorplan - name of SVG element containing canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_windowResize_fixedSize(doResize: boolean, widthFloorplan: number, heightFloorplan: number, floorplan: string): void;
export function cvjs_InitializeModals(floorplan_modal: any): void;
export function cvjs_initialize_allColorCheckboxes(floorplan_div: any): void;
export function cvjs_customPrintTextboxOnChange(): void;
export function cvjs_LayerListModalXrefOnChange(mode: any): void;
export function cvjs_line_thickness_modal_hide(floorplan_div: any): void;
export function cvjs_exitLineThicknessModal(floorplan_div: any): void;
/**
 * Adjust minimum line thickness
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} precentage - In percentage, set the factor to adjust the minumum line thickness, a value over 100 makes lines thicker, a value below 100 makes lines thinner
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_adjustMinimumLineThickness(percentage: any): void;
export function cvjs_activateLineThicknessModal(floorplan_div: any): void;
export function cvjs_interfaceCounterIndex(floorplan_div: any): number;
/**
 * Show the zoom disk
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayAllInterfaceControlsZoomDisk(floorplan_div: string): void;
/**
 * Hide the page change modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideAllInterfaceControls(floorplan_div: string): void;
/**
 * Disable/enable page change modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true, false disables page change modal
 * @param {boolean} disableNavButtons - Disable page navigation icons in main menu disk. As a default when the page modal is disabled, extra navigation buttons are introduced in the icon interface. If always loading single page files, and no navigation is needed, set this to to true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_PageModal(mode: boolean, disableNavButtons: boolean, floorplan_div: string): void;
/**
 * Removes the icon interface for viewing, redlining, etc. so that developers can control their own interface
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_DisableIcons(mode: boolean, floorplan_div: string): void;
/**
 * Removes all icon interface components  for viewing, redlining, etc. so that developers can control their own interface
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayAllInterfaceControls(mode: boolean, floorplan_div: string): void;
/**
 * Set the classic icon desk, larger on desktop, smaller on devices
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_ClassicSkin(mode: boolean, floorplan_div: string): void;
/**
 * Set the classic icon desk, device size on all platforms
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_ClassicSkin_DevicesSizeOnly(mode: boolean, floorplan_div: string): void;
/**
 * Set minimum icon desk, same size on all platforms
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_MimimumDisk(mode: boolean, floorplan_div: string): void;
export function cvjs_setIconInterfaceControls_MimimumDisk_internal(mode: any, floorplan_div: any): void;
/**
 * Set panzoom desk, same size on all platforms
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {boolean} mode - Set the modal interface, default is true
 * @param {String} floorplan_div - the div running CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_PanZoomDisk(mode: boolean, floorplan_div: string): void;
/**
 * Overwrite default icon menu settings on devices
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true: sets the icon menu on devices similar to desktop environment, false: do not change default. False is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_overwriteDefaultDeviceSettings(mode: boolean): void;
export function cvjs_initFloorPlanDivArray(floorplan_div: any): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @param {object} cvjsPopUpBody - html/css styled object containing the content of the modal when selecting Space Objects
 * @param {object} cvjsPopUpBody2 - second html/css styled object containing the content of the modal when selecting Space Objects, internally controlled based on type of Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_highLight_popUp_dual_Id(floorplan_div: string, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object, cvjsPopUpBody: object, cvjsPopUpBody2: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} app folder - the path (relative or absolute) to the main application folder "app" , the default is the relative path "../app/"
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @param {object} cvjsPopUpBody - html/css styled object containing the content of the modal when selecting Space Objects
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_highLight_popUp_app(floorplan_div: string, app_folder: any, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object, cvjsPopUpBody: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @param {object} cvjsPopUpBody - html/css styled object containing the content of the modal when selecting Space Objects
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_highLight_popUp(floorplan_div: string, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object, cvjsPopUpBody: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_highLight(floorplan_div: string, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} app_folder - the path (relative or absolute) to the main application folder "app" , the default is the relative path "../app/". If installed via npm all resources are imported internally and this path is not used.
 * @param {string} imagePathDirect - direct paths to Images, typically "/assets/cadviewer/app/images/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_app(floorplan_div: string, app_folder: string, imagePathDirect: string): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} app_folder - the path (relative or absolute) to the main application folder "app" , the default is the relative path "../app/", on Angular "/assets/cadviewer/app/. If installed via npm all resources are imported internally and this path is not used.
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_app_highLight(floorplan_div: string, app_folder: string, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} app_folder - the path (relative or absolute) to the main application folder "app" , the default is the relative path "../app/", on Angular "/assets/cadviewer/app/. If installed via npm all resources are imported internally and this path is not used.
 * @param {object} cvjsRoomPolygonBaseAttributes - javascript object containing fill, color and stroke properties for display of Space Object roompolygons
 * @param {object} cvjsRoomPolygonHighlightAttributes - javascript object containing fill, color and stroke properties for mouseover highlight of Space Object roompolygons
 * @param {object} cvjsRoomPolygonSelectAttributes - javascript object containing fill, color and stroke properties for select highlight of Space Object roompolygons
 * @param {object} cvjsPopUpBody - html/css styled object containing the content of the modal when selecting Space Objects
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer_app_highLight_popUp(floorplan_div: string, app_folder: string, cvjsRoomPolygonBaseAttributes: object, cvjsRoomPolygonHighlightAttributes: object, cvjsRoomPolygonSelectAttributes: object, cvjsPopUpBody: object): void;
/**
 * Initializes CADViewer, any of the methods cvjs_InitCADViewer_ must always be called setting up CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} image folder - the path to the image location folder with icon settings, default is "+cvjs_imagesLocation+"
 * @param {string} javascripts_folder - the path to javascripts folder with icon settings, default is ../javscripts/
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitCADViewer(floorplan_div: string, image_location: any, javascripts_folder: string): void;
/**
 * Set the scripts path to folder with CADViewer javascripts
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} scriptsPath - paths to Scripts, typically "../javascripts"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRelativeScriptsPath(scriptsPath: string): void;
/**
 * Sets the path to folder with converted PDF pages. If the folder exists and contain the converted pdf, the converted content will be used for visualization
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} customPdfFolderName - custom PDF path id, for permanent storage of converted PDF file
 * @param {boolean} forcedUpdate - if true, force the folder to be reconverted (if the originating pdf has been updated), false is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomPdfFolder(customPdfFolderName: string, forcedUpdate: boolean): void;
/**
 * Returns the current page number in the document loaded
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {int} pageNumber
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getCurrentPage(): number;
export function cvjs_LoadDrawingPDF_base(FileNamePath: any): void;
export function cvjs_checkSVGOnServerBeforeLoadFirst(): void;
export function cvjs_checkSVGOnServerBeforeLoad(newfile: any): void;
/**
 * Clears the drawing space of CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the div canvas object to which CADViewer is allocated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ClearDrawing(floorplan_div: string): void;
/**
 * Loads a drawing into CADViewer, this method can only be used after intialization of CADViewer through the cvjs_InitCADViewer_ methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} FileName - the name and path to the location of the CADViewer drawing files to load in, the path is either absolute or relative to the document in which CADViewer is invoked
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadDrawing(floorplan_div: string, FileName: string): void;
/**
 * Clear all redlines currently visible
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearCurrentRedline(floorplan_div: string): void;
export function cvjs_findMaxRedlineStickyNote(): number;
export function cvjs_findMaxStickyNote(): number;
export function cvjs_setUpVqRedlines_deleteNode_direct(delete_redline: any): void;
export function cvjs_setUpStickyNotes_deleteNode_direct(delete_note: any): void;
/**
 * Sets the username and password on the server where the converter has to pick up the file for conversion set to "" "" if not protected
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setOriginatingFileUsernamePassword(username: any, password: any): void;
/**
 * Returns the recommended conversion engine php controller for this library, use this to intialize the conversion server setup, this value gets overwritten using cvjs_Init_ConversionServer
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_restApiController(): string;
/**
 * Returns the recommended conversion engine php controller location for this library, use this to intialize the conversion server setup, this value gets overwritten using cvjs_Init_ConversionServer
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_restApiControllerLocation(): string;
/**
 * Set the engine controller location for this library,
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} myAXlocation - location of the server side autoXchange structure
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRestApiControllerLocation(myAXlocation: string): void;
/**
 * Set the engine controller document handling conversions
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} myConverterDoc - name of the document handling conversions
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRestApiController(myConverterDoc: string): void;
/**
 * Returns the recommended converter for this library
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_restApiConverter(): string;
/**
 * Returns the minimum recommended converter version number for this library
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_restApiConverterVersion(): string;
/**
 * Set the AutoXchange converter name and version to be used for the Rest conversion call
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} converter - converter name
 * @param {string} version - converter version
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setConverter(converter: string, version: string): void;
/**
 * Set the username and password to be used for the Rest conversion call
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} username - username on the Rest server where AutoXchange is installed
 * @param {string} password - password on the Rest server where AutoXchange is installed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setConverterCredentials(username: string, password: string): void;
/**
 * Set up CADViewer for the call to the server side custom implementation of the API controlling conversions of DWG,DXF, and DWF files through AutoXchange
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rest_api_url - url of conversion rest api on server
 * @param {string} rest_api_php - url of the PHP rest controller on server
 * @param {string} username - the username of the server, "" if no username
 * @param {string} password - the password of the server, "" if no username
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_Init_ConversionServer(rest_api_url: string, rest_api_php: string, username: string, password: string): void;
/**
 * Set SVG conversion control parameter for server based conversion using either SVG or JS as format.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true for SVG as intermediate format false for .js as intermediate format. Default is true.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSVG_outputFormatInAXConversions(mode: boolean): void;
/**
 * Clears the custom AutoXchange conversion control parameter for server based conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of the div on which the floorplan is places
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_clearAXconversionParameters(floorplan_div: string): void;
/**
 * Add an AutoXchange conversion control parameter for server based conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} name - conversion parameter name
 * @param {string} value - conversion parameter value, if no value set ""
 * @param {string} floorplan_div - name of the div on which the floorplan is placed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_addAXconversionParameter(name: string, value: string, floorplan_div: string): void;
/**
 * Sets control parameter for conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} contentType - "file | embedded | stream"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_setContentType(contentType: string): void;
/**
 * Sets control parameter for conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} contentFormat - "DWG | DXF| DWF | DGN    - DGN currently not implemented",
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_setContentFormat(contentFormat: string): void;
/**
 * Sets fileformat for file-load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileFormat - "PNG, JPG, GIF", to set bitmap,  "JS" for standard load
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_fileLoad_setContentFormat(contentFormat: any): void;
/**
 * Sets control parameter for conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userLabel - " optional label returned in the response",,
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_setUserLabel(userLabel: string): void;
/**
 * Sets control parameter for conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userLabel - " optional label returned in the response",,
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_setContentResponse(contentResponse: any): void;
/**
 * Get the current type of content response
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return string - Returns type of content response - "file | embedded | stream"
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_getContentResponse(): string;
/**
 * Sets debug mode
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} debug - true for debug traces, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_debugMode(debug: boolean): void;
/**
 * Sets password protection for Server Access
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} passwordprotection - true for passwordprotection, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPasswordProtectionServerAccess(passwordprotection: boolean): void;
/**
 * Sets ajax call for server access call for Servlets
 *    jQuery.ajax({
 *        url: "jsonservlet -  cvjs_setRestApiControllerLocation + cvjs_setRestApiController",
 *        type: 'POST',
 *        dataType: 'json',
 *        data: JSON.stringify(article),
 *        contentType: 'application/json',
 *        mimeType: 'application/json',
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - true for servlets, false standard php case
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerAccessToServlet(flag: boolean): void;
/**
 * Sets ajax call for server access call for Post
 *    jQuery.ajax({
 *        type: 'POST',
 *		  url: serverUrl,
 *        data: JSON.stringify(object),
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - true for Post, false standard php case
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerAccessToPost(flag: boolean): void;
/**
 * Loads a DWG drawing into CADViewer, this method can only be used after intialization of CADViewer through the cvjs_InitCADViewer_ methods
 * The method connects to the TailorMade Restful API, alternative Open Source alternatives for conversion of DWG, DXF,DWF and DGN,PCF files
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} originatingContent - the originating content, can be a http path to location, local server side path, stream link or 64 base encoded data
 * @param {string} FileNameNoExtension - file name of the drawing without extension - CADViewer will automatically generate naming
 * @param {string} originatingUsername - if the originating file is username/password protected , "" if no username
 * @param {string} originatingPassword - if the originating file is username/password protected , "" if no password
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadDrawing_Conversion(floorplan_div: string, originatingContent: string, originatingFileNameNoExtension: any, originatingUsername: string, originatingPassword: string): void;
export function cvjs_LoadDrawing_Conversion_original(floorplan_div: any, originatingContent: any, originatingFileNameNoExtension: any, originatingUsername: any, originatingPassword: any): void;
/**
 * Sets the time-out wait for file load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {int} timeout - The time-out in seconds
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setFileLoadTimeOut(floorplan_div: string, timeout: number): void;
export function cvjs_fileLoadTimeOut(callback: any): void;
/**
 * Loads a SVG drawing into CADViewer, this method can only be used after intialization of CADViewer through the cvjs_InitCADViewer_ methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} FileNamePath - the filepath to the location of the SVG drawing files to load in, the path is either absolute or relative to the document in which CADViewer is invoked
 * @param {string} FileName - file name of the SVG drawing, optional as content will be loaded from FileNamePath, which may contain filename
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadDrawing_SVG(floorplan_div: string, FileNamePath: string, FileName: string): void;
/**
 * Set the clickhandler mode for SVG on load. The default is false <br>
 * All SVG objects with an 'id' implemented will be associated with a clickhandler <br>
 * The method will call a number of user implemented call-back methods: <br>
 * cvjs_SVGfileObjectClicked(id, x, y) : callback for click on an object, this method is user implemented <br>
 * cvjs_SVGfileObjectMouseEnter(id, x, y) : callback for mouse entering an object, this method is user implemented <br>
 * cvjs_SVGfileObjectMouseLeave(id, x, y) : callback for mouse leaving an object, this method is user implemented <br>
 * cvjs_SVGfileObjectMouseMove(id, x, y) : callback for mouse move on an object, this method is user implemented <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true: click handlers are added to objects on load, false: no handers added on load
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addSVGClickHandler_onLoad(mode: boolean): void;
export function cvjs_addMouseWheelControls(floorplan_div_nr: any): void;
/**
 * Activated the Zoom Window command
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomWindow(floorplan_div: string): void;
/**
 * Activated the Zoom Window command
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ZoomWindow(floorplan_div: string): void;
/**
 * Pans the current active drawing one step to the right
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_panRight(): void;
/**
 * Pans the current active drawing one step up
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_panUp(): void;
/**
 * Pans the current active drawing one step down
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_panDown(): void;
/**
 * Pans the drawing one step to the left
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_panLeft(): void;
/**
 * Zoom Extents on the drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomExtents(floorplan_div: string): void;
/**
 * Zoom Extents on the drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ZoomExtents(floorplan_div: string): void;
/**
 * Zoom Extents on the drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetZoomPan(floorplan_div: string): boolean;
/**
 * Zoom the Drawing In one step
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomIn(floorplan_div: string): void;
/**
 * Zoom the Drawing In one step
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ZoomIn(floorplan_div: string): void;
/**
 * Zoom the drawing Out one step
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomOut(floorplan_div: string): void;
/**
 * Zoom the drawing Out one step
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ZoomOut(floorplan_div: string): void;
/**
 * Zoom either in or out on the drawing with a custom zoom factor
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {float} customZoomFactor- custom zoom factor, if the factor is between 0 and 1, it zooms in, if above 1, it zooms out.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomInOutCustomFactor(floorplan_div: string, customZoomFactor: any): void;
export function cvjs_zoomPositionFactor(x_pos: any, y_pos: any, wportx: any, wporty: any, floorplan_div: any, zoomfactor: any): void;
/**
 * Redraws the current ViewBox, thereby refreshing the screen with same zoom settings
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_redrawViewBox(): void;
/**
 * Set the Community Menu if no XML file has been designated for menu configuration
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadTopIconMenuViewing(floorplan_div: string): void;
/**
 * Set the language in CADViewer by first loading the language file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} language - name of the language
 * @param {string} languagelocation - path and name of the language location, releative to install folder, if null or undefined, defaults to standard settings for the Handler
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadCADViewerLanguage(language: string, languagelocation: string): void;
/**
 * Set the language in CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Language - name of the language
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLanguage(Language: string): void;
/**
 * Get the languages supported in CADViewer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} languages - string with available languages
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getLanguages(): string;
/**
 * Get the current ServerLocation variable;
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} ServerLoction - server location of html Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getServerLocation(): string;
/**
 * Get the current ServerURL variable;
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} ServerURL - server url of html Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getServerURL(): string;
/**
 * Returns the current object selected on active floorplan
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} lastObj- current space object selected, -1 if no current selection
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnSpaceObjectSelected(): string;
/**
 * Pass over the current settings for ServerLocationbackendUrl
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} ServerLocationBackEndUrl - server location of html Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerBackEndUrl(ServerLocationBackEndUrl: string): void;
/**
 * Get the current ServerBackEndUrl variable;
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} ServerBackEndUrl - ServerBackEndUrl of current CADViewer settings
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getServerBackEndUrl(): string;
/**
 * Pass over the current settings of the calling html document context
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} ServerLocation - server location of html Element on which CADViewer is located
 * @param {string} ServerUrl - server url of html Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerLocationURL(ServerLocation: string, ServerUrl: string): void;
/**
 * Loads in the top icon menu system from an XML file
 * The XML file is in /cadviewer/app/js/menu_config/
 * The XML file allows custom settings of the number of menu pages, the start menu page
 * and content of each page, based on the selection set of available API commands
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div in which CADViewer is implemented
 * @param {String} xml_config_file - XML top menu configuration file
 * @param {String} xml_config_file_location - location of xml config file relative to install server location, omitting this parameter, it will use default paths
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setTopMenuXML(floorplan_div: string, xml_config_file: string, xml_config_file_location: string): void;
/**
 * Loads in the top icon menu system from an XML file
 * The XML file is in /cadviewer/app/js/menu_config/
 * The XML file allows custom settings of the number of menu pages, the start menu page
 * and content of each page, based on the selection set of available API commands
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} xml_config_file - XML top menu configuration file
 * @param {String} floorplan_div - div in which CADViewer is implemented
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomTopMenuXML(xml_config_file: string, floorplan_div: string): void;
/**
 * Controls top menu icon bar visibility
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} display_status - default is true, use false to hide menu bar
 * @param {String} floorplan_div - div in which CADViewer is implemented
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayTopMenuIconBar(display_status: boolean, floorplan_div: string): void;
/**
 * Controls top menu navigation bar visibility
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} display_status - default is true, use false to hide menu bar
 * @param {String} floorplan_div - div in which CADViewer is implemented
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayTopNavigationBar(display_status: boolean, floorplan_div: string): void;
export function cvjs_changePreviousIconPage_TopIconMenu(floorplan_div: any): void;
export function cvjs_changeNextIconPage_TopIconMenu(floorplan_div: any): void;
export function cvjs_LoadTopNavigationMenu(floorplan_div: any): void;
export function cvjs_LoadCoordinatesMenu(floorplan_div: any): void;
export function cvjs_LoadSpaceObjectsCustomMenu(floorplan_div: any): void;
export function cvjs_LoadTopIconMenu(floorplan_div: any): void;
export function cvjs_LoadTopIconMenuXML(floorplan_div: any, cvjsIconMenu: any): void;
/**
 * Insert a sing icon image
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div
 * @param {String} placeholder
 * @param {String} icon_image_code
 * @param {String} cvjs_command_name
 * @param {String} cvjs_command_parameter
 * @param {String} cvjs_icon_image
 * @param {String} cvjs_icon_image_npmpackage
 * @param {boolean} cvjs_language_popup
 * @param {boolean} cvjs_icon_image_npmpackage
 * @param {boolean} firsticonflag
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_insertSingleIconImage(floorplan_div: string, placeholder: string, icon_image_code: string, cvjs_command_name: string, cvjs_command_parameter: string, cvjs_icon_image: string, cvjs_language_popup: boolean, cvjs_icon_image_npmpackage: string, firsticonflag: boolean): void;
export function cvjs_navigationMenuItemHighlight(floorplan_div: any, placeholder: any, highlight_object_id: any, cvjs_language_popup: any, displayflag: any): void;
/**
 * Enables file load through the icon interface, or allows it only through the encapsulating application
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true for file load through File Manager, default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_allowFileLoadToServer(mode: boolean): void;
/**
 * Set custom call back method for OnLoadEnd when drawings are loaded.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} callbackMethodOnLoadEnd - false: default - no custom method , true: custom method defined.
 * @param {function} myOnLoadEndMethod : method that is executed OnLoadEnd of drawing
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomCallbackMethodOnLoadEnd(callbackMethodOnLoadEnd: boolean, myOnLoadEndMethod: Function): void;
export function cvjs_setLooperPosition(): void;
export function cvjs_zoomZeroWidth(): void;
/**
 * Init ZW class handling, automated Zoom and adjustment of zerowidth
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {int}    scale_factor - scale factor on zero width lines when zooming
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_initZeroWidthHandling(floorplan_div: string, scale_factor: number): void;
/**
 * Rotates 90 degrees forward
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_rotateForward(floorplan_div: string): void;
/**
 * Rotates 90 degrees forward
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_rotateBackward(floorplan_div: string): void;
/**
 * Rotates an angle based from 0
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} angle - rotation angle
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_rotateAngle(angle: number, floorplan_div: string): void;
/**
 * Activates the interactive Text Modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_interactiveSearchText(floorplan_div: string): void;
export function cvjs_interactiveSearchText_zoomLevel(zoomlevel: any): void;
export function cvjs_exitSearchTextModal(): void;
/**
 * Text Search; finds a text string in the drawing, and zooms over the search result
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} searchString - the text string to search after
 * @param {int} zoomFactor - zoom factor of the seach result in percentage of zoom extents
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_searchText(textString: any, zoomFactor: number): void;
/**
 * Text Search; finds a text string in the drawing, and zooms over the search result
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} searchString - the text string to search after
 * @param {int} zoomFactor - zoom factor of the seach result in percentage of zoom extents
 * @param {int} textInstance - if multiple entries of text object, load instance, the first instance is 1
 * @return {boolean} true if found, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_searchTextInstance(textString: any, zoomFactor: number, textInstance: number): boolean;
export function cvjs_calibrateMeasurement_RedlinePolyline(): void;
export function cvjs_Measurement_RedlinePolyline(): void;
export function cvjs_closeAreaMeasurement(): void;
/**
 * Extents the Print Modal with a custom controlled checkbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Add checkbox to interface, default is false
 * @param {string} print_modal_custom_checkbox - name of the custom method branch
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomCheckBox(mode: boolean, print_modal_custom_checkbox: string): void;
/**
 * Extents the Print Modal with a custom controlled checkbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Add checkbox to interface, default is false
 * @param {string} print_modal_custom_checkbox - filename containing variable definition location is ServerLocation + "/app/cv"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomCheckBoxFromFile(mode: boolean, print_modal_custom_checkbox: string): void;
/**
 * Extents the Print Modal with a custom controlled textbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Adds a dual checkbox to interface, default is false
 * @param {string} custom_textbox_variables_list_filename - filename containing variable definition location is ServerLocation + "/app/cv". Content is comma separated list with names of the variable in the document to which the Text will be inserted, of type $$$title$$$
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomDualTextBox(mode: boolean, custom_checkbox_variables_list_filename: any): void;
/**
 * Extents the Print Modal with a custom controlled textbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Add checkbox to interface, default is false
 * @param {string} print_modal_custom_textbox_variables_list - comma separated list with names of the variable in the document to which the Text will be inserted, of type $$$title$$$
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomTextBox(mode: boolean, print_modal_custom_checkbox_variables_list: any): void;
/**
 * Extents the Print Modal with a custom controlled textbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Adds a dual checkbox to interface, default is false
 * @param {string} custom_textbox_variables_list_filename - filename containing variable definition location is ServerLocation + "/app/cv". Content is comma separated list with names of the variable in the document to which the Text will be inserted, of type $$$title$$$
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomDualTextBoxFromFile(mode: boolean, custom_checkbox_variables_list_filename: any): void;
/**
 * Extents the Print Modal with a custom controlled textbox
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - Add checkbox to interface, default is false
 * @param {string} custom_textbox_variables_list_filename - filename containing variable definition location is ServerLocation + "/app/cv". Content is comma separated list with names of the variable in the document to which the Text will be inserted, of type $$$title$$$
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintModalCustomTextBoxFromFile(mode: boolean, custom_checkbox_variables_list_filename: any): void;
/**
 * Retrieves a given parameter from the windows.location interface
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} sParam - name of parameter to retrieve
 * @return {string} the parameter if found, otherwise ""
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_GetURLParameter(sParam: string): string;
/**
 * Sets the size of the pop-up browser page with the resulting Print To PDF file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} factor - pop-up window relative screen size,  a value between 0 and 1, default is 0.4
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_PrintToPDFWindowRelativeSize(factor: number): void;
/**
 * Controls if the File Modal shall allow edit mode
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - suppress edit mode in file modal.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setFileModalEditMode(mode: boolean): void;
/**
 * Controls if the Print object in standard print shall be SVG based or based on HTML5 bitmap object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - default is true = SVG based print object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPrintPaperSizeasSVGObject(mode: boolean): void;
export function cvjs_printPaperSizeasSVGObject(floorplan_div: any): void;
/**
 * Superimpose a border frame or background drawing when printing and a custom print dual text box modal is checked.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} backgroundDrawing - location of background drawing, http.
 * @param {float} adjustmentTop - size of background frame border at top for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentBottom - size of background frame border at bottom for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentLeft - size of background frame border at left side for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentRight - size of background frame border at right side for adjustment of zoomed object, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_superimposeBackgroundDrawing_PrintOutputAtDualTextbox(floorplan_div: string, backgroundDrawing: string, adjustmentTop: number, adjustmentBottom: number, adjustmentLeft: number, adjustmentRight: number): void;
/**
 * Superimpose a border frame or background drawing when printing a zoomed in portion of the drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} backgroundDrawing - location of background drawing, http.
 * @param {float} adjustmentTop - size of background frame border at top for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentBottom - size of background frame border at bottom for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentLeft - size of background frame border at left side for adjustment of zoomed object, value between 0 and 1
 * @param {float} adjustmentRight - size of background frame border at right side for adjustment of zoomed object, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_superimposeBackgroundDrawing_PrintOutputAtZoom(floorplan_div: string, backgroundDrawing: string, adjustmentTop: number, adjustmentBottom: number, adjustmentLeft: number, adjustmentRight: number): void;
/**
 * Set Language and Conversion settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_Settings(floorplan_div: string): void;
export function cvjs_exitSettingsModal(floorplan_div: any, flag: any): void;
/**
 * Updates all modeals and callouts based on currentLanguage
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} language - language as a index from the XML language settings file
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentLanguage(floorplan_div: string, language: number): void;
/**
 * Copies the content of the measurement field to the clipboard
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_copyMeasurementField(floorplan_div: string): void;
export function cvjs_spaceObjectsInitSettingsModal(floorplan_div: any): void;
export function cvjs_exitSpaceObjectsInitSettingsModal(): void;
export function cvjs_continueCreateSpaceObjects(): void;
export function cvjs_spaceObjectsChangeSettingsModal(floorplan_div: any): void;
export function cvjs_exitSpaceObjectsChangeSettingsModal(): void;
export function cvjs_updateChangeSpaceObjects(): void;
export function cvjs_unlinkChangeSpaceObjects(): void;
/**
 * Set a custom tooltip overwriting the standard tooltip displaying either Name or Id
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} customtooltip - true for custom tooltip, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomToolTip(customtooltip: boolean): void;
/**
 * Show the standard tooltip in a given location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} tiptext - text of the tooltip to be displayed
 * @param {int} x - x coordinate location of the tooltip object to be displayed
 * @param {int} y - y coordinate location of the tooltip object to be displayed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showToolTipLocation(tiptext: string, x: number, y: number): void;
/**
 * Hides the standard tooltip previously shown with cvjs_showToolTipLocation(tiptext, x, y)
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideToolTip(): void;
/**
 * Set a custom tooltip overwriting the standard tooltip displaying either Name or Id
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id - id of the custom tooltip object to be displayed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displayCustomToolTip(id: string): any;
/**
 * Set the content of a custom tooltip, based on the id of the object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id - id for tooltip
 * @param {arr} contentArr - content for custom tooltip, array with lines of text
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomToolTipValue(id: string, contentArr: any): void;
/**
 * Text Search; finds a text string in the drawing, and zooms over the search result
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} searchString - the text string to search after
 * @param {string} replaceString - the text string to replace with
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_searchReplaceText(textString: any, replaceString: string): void;
/**
 * Controls hyperlinks, so if click on a hyperlink shall open the link in the same instance or open the link in a new window. Default is false.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} openLinkFlag - true if to open links in new window, false otherwise
 * @param {int} windowWidth - width of new popup window, set an arbitary value if openLinkFlag is false
 * @param {int} windowHeight - height of new popup window, set an arbitary value if openLinkFlag is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_openHyperlinkInNewWindow(openLinkFlag: boolean, windowWidth: number, windowHeight: number): void;
/**
 * Returns a list with all Ids in the Space Object structure
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {array} value - Returns Id list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectIdList(): any[];
/**
 * Returns a list with all Names in the Space Object structure
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {array} value - Returns Names list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectNamesList(): any[];
/**
 * Returns the Type of a given Space Object ID
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Id of the Space Object in which to retrive the corresponding Type
 * @return {string} value - Returns the Type corresponding to the given Id, -1 if not found
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectTypefromId(Id: string): string;
/**
 * Returns the first NodeId in the Space Object structure based on an Id
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Id of the Space Object in which to retrive the Node id
 * @return {object} value - Returns the NodeId corresponding to the given Id, -1 if not found
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectNodefromId(Id: string): object;
/**
 * Returns the first Name in the Space Object structure based on an Id
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Id of the Space Object in which to retrive the name
 * @return {object} value - Returns the Name corresponding to the given Id, -1 if not found
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectNamefromId(Id: string): object;
/**
 * Returns the first Id in the Space Object structure based on a nodeId
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Node id of the Space Object in which to retrive the id data filed
 * @return {object} value - Returns the id corresponding to the given nodeId, -1 if not found
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectIdfromNode(nodeId: any): object;
/**
 * Returns the first Name in the Space Object structure based on a nodeId
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} NodeId - Node id of the Space Object in which to retrive the Name data filed
 * @return {object} value - Returns the Name corresponding to the given nodeId, -1 if not found
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectNamefromNode(nodeId: any): object;
/**
 * Retrieves the attribute status from a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} NodeId - Node id of the Space Object in which to retrive the status
 * @return {object} value - Returns the attributeStatus
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getAttributeStatus(nodeId: any): object;
/**
 * Retrieves the attribute status from a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} NodeId - Node id of the Space Object in which to retrive the status
 * @param {string} attributeStatus - attributeStatus of the node, "populated" or "unpopulated"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAttributeStatus(nodeId: any, attributeStatus: string): void;
/**
 * Retrieves an attribute value from a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} NodeId - Node id of the Space Object in which to retrive an attribute
 * @param {string} name - name of attribute (name, value) pair
 * @return {object} value - Returns the value pair corresponding to the given name
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getAttributeFromSpaceObjectNode(nodeId: any, attributeName: any): object;
/**
 * Sets an attribute value in a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} NodeId - Node id of the Space Object in which to retrive an attribute
 * @param {string} name - name of attribute (name, value) pair
 * @param {string} value - name of attribute (name, value) pair to be set
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAttributeInSpaceObjectNode(nodeId: any, attributeName: any, attributeValue: any): void;
/**
 * Creates a new layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to be created
 * @return {object} layerObject - Returns a new layer as a group on the SVG canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_newLayer(layer: string): object;
/**
 * Creates a new layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to be created
 * @param {string} floorplan_div - name of floorplan div
 * @return {object} layerObject - Returns a new layer as a group on the SVG canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_newLayerDiv(layer: string, floorplan_div: string): object;
/**
 * Clears the current layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to be cleared
 * @return {string}  layer - returns cleared layer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearLayer(layer: string): string;
/**
 * Clears the current layer on a named floorplan div
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to be cleared
 * @param {string} floorplan_div - name of floorplan div
 * @return {none}
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearLayerDiv(layer: string, floorplan_div: string): void;
/**
 * Clears the current layer and resets Text border objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of layer to be cleared
 * @return {none}
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearTextLayer(layer: string): void;
/**
 * Sort two layers in order
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer1 - name of layer one
 * @param {string} layer2 - name of layer two
 * @return {boolean} - true if sorted, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_sortLayersInOrder(layer1: string, layer2: string): boolean;
/**
 * Sort two layers in order, prepend layer2
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer1 - name of layer one
 * @param {string} layer2 - name of layer two
 * @return {boolean} - true if sorted, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_sortLayers_prepend(layer1: string, layer2: string): boolean;
/**
 * Sort two layers in order, insert layer2 after layer1
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer1 - name of layer one
 * @param {string} layer2 - name of layer two
 * @return {boolean} - true if sorted, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_sortLayers_insertAfter(layer1: string, layer2: string): boolean;
/**
* Turn all Object Space groups on - Object Spaces, Sticky Notes and Redlines are differentiated.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AllGroupsOn(): void;
/**
* Turn all Object Space groups off - Object Spaces, Sticky Notes and Redlines are differentiated.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AllGroupsOff(): void;
/**
* Turn single Object Space group on  - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of group to turn on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_GroupOn(group: any): void;
/**
* Turn single Object Space group on, all other groups are turned off  - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of group to turn on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_GroupOn_OthersOff(group: any): void;
/**
* Turn single Object Space group on, all other groups are turned off  - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of group to turn on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_GroupOn_AllOff(group: any): void;
/**
* Turn single Object Space group off  - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - name of group to turn off
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_GroupOff(group: any): void;
/**
 * Apply a predefined pattern on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} Id - Id of the graphical object to add hatches
 * @param {string} graphicalPattern - name of the hatch pattern, from a predefined list of patterns:
 *  	"pattern_45degree_standard"
 *		"pattern_45degree_fine"
 *		"pattern_45degree_wide"
 *		"pattern_90degree_standard"
 *		"pattern_90degree_fine"
 *		"pattern_90degree_wide"
 *		"pattern_135degree_standard"
 *		"pattern_135degree_fine"
 *		"pattern_135degree_wide"
 *		"pattern_0degree_standard"
 *		"pattern_0degree_fine"
 *		"pattern_0degree_wide"
 *		"pattern_45degree_crosshatch_standard"
 *		"pattern_45degree_crosshatch_fine"
 * @param {string} colorHex - color of hatch in hex form, for example: #FF0000
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyPatternOnSpaceObjectId(layer: string, Id: string, graphicalPattern: string, colorHex: string, fillOpacity: number): void;
/**
 * Apply a predefined pattern on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object to add hatches
 * @param {string} graphicalPattern - name of the hatch pattern, from a predefined list of patterns:
 *  	"pattern_45degree_standard"
 *		"pattern_45degree_fine"
 *		"pattern_45degree_wide"
 *		"pattern_90degree_standard"
 *		"pattern_90degree_fine"
 *		"pattern_90degree_wide"
 *		"pattern_135degree_standard"
 *		"pattern_135degree_fine"
 *		"pattern_135degree_wide"
 *		"pattern_0degree_standard"
 *		"pattern_0degree_fine"
 *		"pattern_0degree_wide"
 *		"pattern_45degree_crosshatch_standard"
 *		"pattern_45degree_crosshatch_fine"
 * @param {string} colorHex - color of hatch in hex form, for example: #FF0000
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyPatternOnSpaceObjectNode(layer: string, nodeId: string, graphicalPattern: string, colorHex: string, fillOpacity: number): void;
/**
 * Apply a predefined pattern on a URL
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object to add hatches
 * @param {string} graphicalPattern - name of the hatch pattern, from a predefined list of patterns:
 *  	"pattern_45degree_standard"
 *		"pattern_45degree_fine"
 *		"pattern_45degree_wide"
 *		"pattern_90degree_standard"
 *		"pattern_90degree_fine"
 *		"pattern_90degree_wide"
 *		"pattern_135degree_standard"
 *		"pattern_135degree_fine"
 *		"pattern_135degree_wide"
 *		"pattern_0degree_standard"
 *		"pattern_0degree_fine"
 *		"pattern_0degree_wide"
 *		"pattern_45degree_crosshatch_standard"
 *		"pattern_45degree_crosshatch_fine"
 * @param {string} colorHex - color of hatch in hex form, for example: #FF0000
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyPatternOnUrl(layer: string, nodeId: string, graphicalPattern: string, colorHex: string, fillOpacity: number): void;
export function cvjs__ApplyPatternOnObject_layerSort(layer: any, nodeId: any, graphicalPattern: any, colorHex: any, fillOpacity: any, layer2: any, nodetype: any): 1 | -1;
export function cvjs_setUpPattern_45degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_crosshatch_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_crosshatch_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_ApplyRelativeLinearGradientStandard2Colors(graphicalObject: any, startColor: any, endColor: any, fillOpacity: any): void;
export function cvjs_ApplyRelativeLinearGradientStandard3Colors(graphicalObject: any, startColor: any, middleColor: any, endColor: any, fillOpacity: any): void;
export function cvjs_ApplyRelativeLinearGradient(graphicalObject: any, xStart: any, yStart: any, xEnd: any, yEnd: any, startColor: any, middleColor: any, endColor: any, fillOpacity: any): void;
/**
 * Apply a standard linear gradient with two colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} Id - Id of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectId(layer: string, Id: string, startColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard linear gradient with two colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectNode(layer: string, nodeId: string, startColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard linear gradient with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} Id - Id of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectId(layer: string, Id: string, startColor: string, middleColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard linear gradient with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectNode(layer: string, nodeId: string, startColor: string, middleColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a linear gradient, with definition of gradient vector,  with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {float} xStart - gradient vector x start ponumber, value between 0 and 1
 * @param {float} yStart - gradient vector y start ponumber, value between 0 and 1
 * @param {float} xEnd - gradient vector x end ponumber, value between 0 and 1
 * @param {float} yEnd - gradient vector y end ponumber, value between 0 and 1
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @param {string} layer2 - layer which to prepend the gradient layer (typically the main Space Object layer)
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeLinearGradientOnObject_layerSort(layer: string, nodeId: string, xStart: number, yStart: number, xEnd: number, yEnd: number, startColor: string, middleColor: string, endColor: string, fillOpacity: number, layer2: string): 1 | -1;
export function cvjs_ApplyRelativeRadialGradientStandard2Colors(graphicalObject: any, startColor: any, endColor: any, fillOpacity: any): void;
export function cvjs_ApplyRelativeRadialGradientStandard3Colors(graphicalObject: any, startColor: any, middleColor: any, endColor: any, fillOpacity: any): void;
export function cvjs_ApplyRelativeRadialGradient(graphicalObject: any, xC: any, yC: any, radius: any, startColor: any, middleColor: any, endColor: any, fillOpacity: any): void;
/**
 * Apply a standard radial gradient with two colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} Id - Id of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectId(layer: string, Id: string, startColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard radial gradient with two colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectNode(layer: string, nodeId: string, startColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard radial gradient with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} Id - Id of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectId(layer: string, Id: string, startColor: string, middleColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a standard radial gradient with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectNode(layer: string, nodeId: string, startColor: string, middleColor: string, endColor: string, fillOpacity: number): void;
/**
 * Apply a radial gradient, with definition of gradient vector,  with three colors on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layer - layer to apply the pattern
 * @param {string} nodeId - nodeId of the graphical object
 * @param {float} xC - gradient vector x start ponumber, value between 0 and 1
 * @param {float} yC - gradient vector y start ponumber, value between 0 and 1
 * @param {float} radius - gradient vector radius, value between 0 and 1
 * @param {string} startColor - start color of gradient in hex form, for example: #FF0000
 * @param {string} middleColor - middle color of gradient in hex form, for example: #AA00AA
 * @param {string} endColor - end color of gradient in hex form, for example: #00DD00
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @param {string} layer2 - layer which to prepend the gradient layer (typically the main Space Object layer)
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ApplyRelativeRadialGradientOnObject_layerSort(layer: string, nodeId: string, xC: number, yC: number, radius: number, startColor: string, middleColor: string, endColor: string, fillOpacity: number, layer2: string): 1 | -1;
/**
 * Add three layers of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} nodeId - nodeId of the graphical object in which to place the text
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {string} textString1 - first line of text
 * @param {object} textStyle1 - textstyle of text line 1, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {string} scaleText1 - relative scale of text line 1, value between 0 and 1
 * @param {string} hexColorText1 -color of text line 1 in hex form, for example: #AA00AA
 * @param {string} textString2 - second line of text
 * @param {object} textStyle2 - textstyle of text line 2, formattet as a java script object with css style elements
 * @param {string} scaleText2 - relative scale of text line 2, value between 0 and 1
 * @param {string} hexColorText2 -color of text line 2 in hex form, for example: #AA00AA
 * @param {string} textString3 - third line of text
 * @param {object} textStyle3 - textstyle of text line 3, formattet as a java script object with css style elements
 * @param {string} scaleText3 - relative scale of text line 3, value between 0 and 1
 * @param {string} hexColorText3 -color of text line 3 in hex form, for example: #AA00AA
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextOnObject(txtLayer: string, nodeId: string, leftScale: number, textString1: string, textStyle1: object, scaleText1: string, hexColorText1: string, textString2: string, textStyle2: object, scaleText2: string, hexColorText2: string, textString3: string, textStyle3: object, scaleText3: string, hexColorText3: string): void;
/**
 * Add three lines of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} nodeId - nodeId of the graphical object in which to place the text
 * @param {string} tborderId - Text Border Id of the new graphical object in which to place the text, of type "TBORDER_xxx"
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {string} textId1 - Text Id of the first text object, of type "TEXT_xxx"
 * @param {string} textString1 - first line of text
 * @param {object} textStyle1 - textstyle of text line 1, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {string} scaleText1 - relative scale of text line 1, value between 0 and 1
 * @param {string} hexColorText1 -color of text line 1 in hex form, for example: #AA00AA
 * @param {string} textId2 - Text Id of the second text object, of type "TEXT_yyy"
 * @param {string} textString2 - second line of text
 * @param {object} textStyle2 - textstyle of text line 2, formattet as a java script object with css style elements
 * @param {string} scaleText2 - relative scale of text line 2, value between 0 and 1
 * @param {string} hexColorText2 -color of text line 2 in hex form, for example: #AA00AA
 * @param {string} textId3 - Text Id of the third text object, of type "TEXT_zzz"
 * @param {string} textString3 - third line of text
 * @param {object} textStyle3 - textstyle of text line 3, formattet as a java script object with css style elements
 * @param {string} scaleText3 - relative scale of text line 3, value between 0 and 1
 * @param {string} hexColorText3 -color of text line 3 in hex form, for example: #AA00AA
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextAndTBorderOnSpaceObject3Lines(txtLayer: string, nodeId: string, tborderId: string, leftScale: number, textId1: string, textString1: string, textStyle1: object, scaleText1: string, hexColorText1: string, textId2: string, textString2: string, textStyle2: object, scaleText2: string, hexColorText2: string, textId3: string, textString3: string, textStyle3: object, scaleText3: string, hexColorText3: string): number;
/**
 * Add multiple of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} Id - Id of the graphical object in which to place the text
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {array} textStringArr - Array with the lines of text
 * @param {array} textStyleArr - Array with textstyle of text lines, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {array} scaleTextArr - Array with relative scale of text lines, value between 0 and 1, based on global height of drawing
 * @param {array} hexColorTextArr - Array of color of text lines in hex form, for example: #AA00AA
 * @param {boolean} clipping - true if clipping of text inside of Space Object, false if text to cross Space Object borders
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextAndTBorderOnSpaceObjectId_GlobalHeight(txtLayer: string, Id: string, leftScale: number, textStringArr: any[], textStyleArr: any[], scaleTextArr: any[], hexColorTextArr: any[], clipping: boolean): void;
/**
 * Add multiple of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} Id - Id of the graphical object in which to place the text
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {array} textStringArr - Array with the lines of text
 * @param {array} textStyleArr - Array with textstyle of text lines, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {array} scaleTextArr - Array with relative scale of text lines, value between 0 and 1
 * @param {array} hexColorTextArr - Array of color of text lines in hex form, for example: #AA00AA
 * @param {boolean} clipping - true if clipping of text inside of Space Object, false if text to cross Space Object borders
 * @param {boolean} centering - true if centering of text inside of Space Object, false is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextAndTBorderOnSpaceObjectId(txtLayer: string, Id: string, leftScale: number, textStringArr: any[], textStyleArr: any[], scaleTextArr: any[], hexColorTextArr: any[], clipping: boolean, centering: boolean): void;
/**
 * Add multiple of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} nodeId - nodeId of the graphical object in which to place the text
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {array} textStringArr - Array with the lines of text
 * @param {array} textStyleArr - Array with textstyle of text lines, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {array} scaleTextArr - Array with relative scale of text lines, value between 0 and 1
 * @param {array} hexColorTextArr - Array of color of text lines in hex form, for example: #AA00AA
 * @param {boolean} clipping - true if clipping of text inside of Space Object, false if text to cross Space Object borders
 * @param {boolean} centering - true if centering of text inside of Space Object, false is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextAndTBorderOnSpaceObjectNode(txtLayer: string, nodeId: string, leftScale: number, textStringArr: any[], textStyleArr: any[], scaleTextArr: any[], hexColorTextArr: any[], clipping: boolean, centering: boolean): void;
export function cvjs_AddTextAndTBorderOnSpaceObject(txtLayer: any, nodeId: any, tborderId: any, leftScale: any, textIdArr: any, textStringArr: any, textStyleArr: any, scaleTextArr: any, hexColorTextArr: any, clipping: any, centering: any, globalheightFlag: any): number;
export function cvjs_AddTextOnObjectScaleText(graphicalObject: any, leftScale: any, textString1: any, textStyle1: any, scaleText1: any, textString2: any, textStyle2: any, scaleText2: any, textString3: any, textStyle3: any, scaleText3: any): void;
/**
 * Space Object modals control for external retrieval of modal data.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} callbackForkModalDisplay - false: standard modal on Space Object click as defined through setup method: InitCADViewerJS_ , true: if attributesStatus in the data-field of object is "unpopulated" a call is made to external method cvjs_callbackForModalDisplay(), if attributeStatus is "populated", modal is displayed.
 * @param {function} customModalPopUpBody : method that defines the body of the popup model
 * @param {function} populateMyCustomModalPopUpBody : method that populates the body of the popup model, this method is called when a space is selected so the display of modal content will match the modal selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCallbackForModalDisplay(callbackForModalDisplay: any, customModalPopUpBody: Function, populateMyCustomPopUpBody: any): void;
/**
 * Sets the display mode of Space Object modals
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} cvjs_supressPopUp - false: PopUp Modal on Space Object click as defined through setup method: InitCADViewer_ , true: modal is supressed, tooltip is ID of object, color setting is defined through the "linked" database field of the object.
 * @param {boolean} cvjs_creationMode - false:  Activates creation mode colors in Space Object Creation
 * @param {String} excludeID :  "", ID of a space that shall not be restored after creation mode.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCreationMode(cvjs_supressPopUp: boolean, cvjs_creationMode: boolean, excludeID: string): void;
/**
 * Sets the display mode of Space Object modals
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} cvjs_modalMode - false: standard modal on Space Object click as defined through setup method: InitCADViewerJS_ , true: modal is supressed, standard colors on highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setNoModalMode(cvjs_modalMode: boolean): void;
/**
 * Sets Space Object modals to custom type
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} hbody -  String containing the body of the popUpModal
 * @param {boolean} dual_hbody_flag - false: flag for dual body popup
 * @param {String} hbody2 -  second hbody, when no active space object
 
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomModalsContent(hbody: string, dual_body_flag: any, hbody2: string): void;
export function cvjs_setStickyNoteText(text: any): void;
export function cvjs_setStickyNoteEditText(text: any): void;
export function cvjs_showIconnoteTip(tipText: any, icon: any, n_index: any): void;
export function cvjs_showStickynoteTip(tipText: any, icon: any, n_index: any, postfix: any, myStickNoteQtipDiv: any): void;
/**
 * Retrieves the current maximum Node Id for all Space Objects, retrieve and increment when creating new graphical objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} maxNode - the current maximum node id
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_currentMaxSpaceNodeId(): string;
/**
 * Retrieves the current maximum Node Id for all Space Objects, retrieve and increment when creating new graphical objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} maxNode - the current maximum node id
 * @deprecated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_currentMaxNodeId(): string;
/**
 * Add userId to list of redline and stickyNote users to be hidden (on load)
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userId - the userId to be added to the hidden users list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addUserIdToHiddenRedlineUsers(userId: string): void;
/**
 * Add userId to list of redline and stickyNote users to be locked (on load)
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userId - the userId to be added to the hidden users list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addUserIdToLockedRedlineUsers(userId: string): void;
/**
 * Clear all redline and stickyNote userId from hidden users list
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllRedlineHiddenUsers(): void;
/**
 * Clear all redline and stickyNote userId from locked users list
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllRedlineLockedUsers(): void;
/**
 * Lists all redline and stickyNote userId from hidden users list
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {String} value - Returns Id list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getRedlineHiddenUsersList(): string;
/**
 * Lists all redline and stickyNote userId from locked users list
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {String} value - Returns Id list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getRedlineLockedUsersList(): string;
/**
 * Generate list with all redlines users
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {String} value - Returns Id list, separated by ;
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getAllRedlines_UserIdList(): string;
/**
 * Generate list with all redline text and their corresponding userId
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {String} value - Returns Id, redline text list; (userid,redlinetext);(userid,redlinetext)
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getAllRedlines_TextList(): string;
/**
 * Hide all redlines except named userId
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userId - the userId to be displayed, all other hidden
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideAllRedlines_ExceptUser(userId: string): void;
/**
 * Lock all redlines except named userId
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} userId - the userId to be editable, all other locked
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_lockAllRedlines_ExceptUser(userId: string): void;
/**
 * Hide all redlines except current userId
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideAllRedlines_ExceptCurrentUser(): void;
/**
 * Lock all redlines except current userId
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_lockAllRedlines_ExceptCurrentUser(): void;
/**
 * Hide all redlines with userId on the Hidden Users List
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideAllRedlines_HiddenUsersList(): void;
/**
 * Lock all redlines with userId on the Lock Users List
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_lockAllRedlines_LockedUsersList(): void;
/**
 * Sets the current Space Node values, these settings will be used to intialize space objects subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentNode_underbar - the NodeId linking data with graphical objects, of the form "NODE_xxx", where xxx is a number
 * @param {string} currentNode_name - name of the space object to be visualized at the modal header
 * @param {string} currentNode_id - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {string} currentNode_layer - layer of the Space Object
 * @param {string} currentNode_group - group of the Space Object
 * @param {string} currentNode_attributes - a list of attributes for the Space Object
 * @param {string} currentNode_attributeStatus - status of attributes list, can be populated or unpopulated, controls if data is pulled externally
 * @param {string} currentNode_type - the type attribute of the Space Object, the type is displayed at the modal header
 * @param {string} currentNode_tags - list of tags assocated with the object, for retrieval at custom developed highlight
 * @param {string} currentNode_occupancy - tag to describe occupancy, for retrieval at custom developed highlight
 * @param {boolean} currentNode_linked - boolean variable to tell if object is associated with a database object or not. Depending on this flag highlight will differ.
 * @param {string} currentNode_translate_x - translation x after move
 * @param {string} currentNode_translate_y - translation y after move
 * @param {string} currentNode_scale_x - scale after resize
 * @param {string} currentNode_scale_y - scale after resize
 * @param {string} currentNode_rotate - rotation
 * @param {string} currentNode_transform - Set of transformation on current object
 * @param {string} currentNode_area - The area of the object
 * @param {object} currentNode_defaultcolor - The defaultcolor of the object
 * @param {object} currentNode_highlightcolor - The highlight tcolor of the object
 * @param {object} currentNode_selectcolor - The select color of the object
 * @param {object} currentNode_pageNumber - current page number
 * @param {object} currentNode_pageName - current page number
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentNodeValues(currentNode_underbar: string, currentNode_name: string, currentNode_id: string, currentNode_layer: string, currentNode_group: string, currentNode_attributes: string, currentNode_attributeStatus: string, currentNode_type: string, currentNode_tags: string, currentNode_occupancy: string, currentNode_linked: boolean, currentNode_translate_x: string, currentNode_translate_y: string, currentNode_scale_x: string, currentNode_scale_y: string, currentNode_rotate: string, currentNode_transform: string, currentNode_area: string, currentNode_defaultcolor: object, currentNode_highlightcolor: object, currentNode_selectcolor: object, currentNode_pageNumber: object, currentNode_pageName: object): void;
/**
 * Sets the current Space Node values, these settings will be used to intialize space objects subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentNode_underbar - the NodeId linking data with graphical obejcts, of the form "NODE_xxx", where xxx is a number
 * @param {string} currentNode_name - name of the space object to be visualized at the modal header
 * @param {string} currentNode_id - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {string} currentNode_layer - layer of the Space Object
 * @param {string} currentNode_group - group of the Space Object
 * @param {string} currentNode_attributes - a list of attributes for the Space Object
 * @param {string} currentNode_attributeStatus - status of attributes list, can be populated or unpopulated, controls if data is pulled externally
 * @param {string} currentNode_type - the type attribute of the Space Object, the type is displayed at the modal header
 * @param {string} currentNode_tags - list of tags assocated with the object, for retrieval at custom developed highlight
 * @param {string} currentNode_occupancy - tag to describe occupancy, for retrieval at custom developed highlight
 * @param {boolean} currentNode_linked - boolean variable to tell if object is associated with a database object or not. Depending on this flag highlight will differ.
 * @param {string} currentNode_translate_x - translation x after move
 * @param {string} currentNode_translate_y - translation y after move
 * @param {string} currentNode_scale_x - scale after resize
 * @param {string} currentNode_scale_y - scale after resize
 * @param {string} currentNode_rotate - rotation
 * @param {string} currentNode_transform - Set of transformation on current object
 * @param {string} currentNode_area - The area of the object
 * @param {object} currentNode_defaultcolor - The defaultcolor of the object
 * @param {object} currentNode_highlightcolor - The highlight tcolor of the object
 * @param {object} currentNode_selectcolor - The select color of the object
 * @param {object} currentNode_pageNumber - current page number
 * @param {object} currentNode_pageName - current page number
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentSpaceObjectNodeValues(currentNode_underbar: string, currentNode_name: string, currentNode_id: string, currentNode_layer: string, currentNode_group: string, currentNode_attributes: string, currentNode_attributeStatus: string, currentNode_type: string, currentNode_tags: string, currentNode_occupancy: string, currentNode_linked: boolean, currentNode_translate_x: string, currentNode_translate_y: string, currentNode_scale_x: string, currentNode_scale_y: string, currentNode_rotate: string, currentNode_transform: string, currentNode_area: string, currentNode_defaultcolor: object, currentNode_highlightcolor: object, currentNode_selectcolor: object, currentNode_pageNumber: object, currentNode_pageName: object): void;
/**
 * Sets the current Sticky Note values, these settings will be used to intialize Sticky Notes subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentStickyNote_underbar - the NodeId linking data with graphical objects, of the form "NOTE_xxx", where xxx is a number
 * @param {string} currentStickyNote_name - name of the Sticky Note  - user name displayed at StickyNote modal
 * @param {string} currentStickyNote_id - id of the Sticky Note object, used for pop-up highlight
 * @param {string} currentStickyNote_layer - layer of the Sticky Note
 * @param {string} currentStickyNote_group - group of the Sticky Note
 * @param {string} currentStickyNote_text - text in the Sticky Note textfield, typically this is initially empty as users interactively add text to StickyNotes.
 * @param {string} currentStickyNote_userid - UserID of StickyNotes.
 * @param {string} currentStickyNote_date - creation date of the StickyNotes.
 * @param {boolean} currentStickyNote_linked - boolean variable to tell if object is linked or not, internally controlled
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentStickyNoteValues(currentStickyNote_underbar: string, currentStickyNote_name: string, currentStickyNote_id: string, currentStickyNote_layer: string, currentStickyNote_group: string, currentStickyNote_text: string, currentStickyNote_userid: string, currentStickyNote_date: string, currentStickyNote_linked: boolean): void;
/**
 * Sets the current Sticky Note values, these settings will be used to intialize Sticky Notes subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentStickyNote_underbar - the NodeId linking data with graphical objects, of the form "NOTE_xxx", where xxx is a number
 * @param {string} currentStickyNote_name - name of the Sticky Note  - user name displayed at StickyNote modal
 * @param {string} currentStickyNote_id - id of the Sticky Note object, used for pop-up highlight
 * @param {string} currentStickyNote_layer - layer of the Sticky Note
 * @param {string} currentStickyNote_group - group of the Sticky Note
 * @param {string} currentStickyNote_text - text in the Sticky Note textfield, typically this is initially empty as users interactively add text to StickyNotes.
 * @param {string} currentStickyNote_userid - UserID of StickyNotes.
 * @param {string} currentStickyNote_date - creation date of the StickyNotes.
 * @param {boolean} currentStickyNote_linked - boolean variable to tell if object is linked or not, internally controlled
 * @param {boolean} currentStickyNote_transform - transformation of note
 * @param {string} currentStickyNote_currentPage - page on which the note is on
 * @param {int} currentStickyNote_drawingRotation - rotation of page on which the note is on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentStickyNoteValues_All(currentStickyNote_underbar: string, currentStickyNote_name: string, currentStickyNote_id: string, currentStickyNote_layer: string, currentStickyNote_group: string, currentStickyNote_text: string, currentStickyNote_userid: string, currentStickyNote_date: string, currentStickyNote_linked: boolean, currentStickyNote_transform: boolean, currentStickyNote_currentPage: string, currentStickyNote_drawingRotation: number): void;
/**
 * Sets the current Sticky Note values, these settings will be used to intialize Sticky Notes subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentStickyNote_name - name of the Sticky Note  - user name displayed at StickyNote modal
 * @param {string} currentStickyNote_userid - UserID of StickyNotes.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentStickyNoteValues_NameUserId(currentStickyNote_name: string, currentStickyNote_userid: string): void;
/**
 * Sets the current Sticky Note values, these settings will be used to intialize Sticky Notes subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentStickyNote_name - name of the Sticky Note  - user name displayed at StickyNote modal
 * @param {string} currentStickyNote_userid - UserID of StickyNotes.
 * @param {string} currentStickyNote_date - creation date of the StickyNotes.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentStickyNoteValues_NameUserIdDate(currentStickyNote_name: string, currentStickyNote_userid: string, currentStickyNote_date: string): void;
/**
 * Sets the current Redlines name and userid values, these settings will be used to intialize redlines subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_username - redline username
 * @param {string} currentRedline_userid - redline userid
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_NameUserid(currentRedline_username: string, currentRedline_userid: string): void;
/**
 * Sets the current Redlines values, these settings will be used to intialize redlines subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_userid - redline userid
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_Userid(currentRedline_userid: string): void;
/**
 * Sets the current Redlines values, these settings will be used to intialize redlines subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_underbar - the NodeId linking data with graphical objects, of the form "RED_xxx", where xxx is a number
 * @param {string} currentRedline_name - id of the Redline, association to user producing markup
 * @param {string} currentRedline_id - id of the Redline
 * @param {string} currentRedline_layer - layer of the Redline
 * @param {string} currentRedline_group - group of the Redline
 * @param {string} currentRedline_color - color of the Redline as a hex values, for example "#FF0000".
 * @param {float} currentRedline_StrokeWidth - width of the Redline
 * @param {int} currentRedline_drawingRotation - rotation angle of drawing
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues(currentRedline_underbar: string, currentRedline_name: string, currentRedline_id: string, currentRedline_layer: string, currentRedline_group: string, currentRedline_color: string, currentRedline_strokeWidth: any, currentRedline_drawingRotation: number): void;
/**
 * Sets the current Redlines values, these settings will be used to intialize redlines subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_underbar - the NodeId linking data with graphical objects, of the form "RED_xxx", where xxx is a number
 * @param {string} currentRedline_name - id of the Redline, association to user producing markup
 * @param {string} currentRedline_id - id of the Redline
 * @param {string} currentRedline_layer - layer of the Redline
 * @param {string} currentRedline_group - group of the Redline
 * @param {string} currentRedline_color - color of the Redline as a hex values, for example "#FF0000".
 * @param {float} currentRedline_StrokeWidth - width of the Redline
 * @param {string} currentRedline_fill - color of the Redline fill values, for example "#FF0000".
 * @param {float} currentRedline_fill_opacity - fill opacity of filled redline
 * @param {string} currentRedline_transform - transform (redline arrow only)
 * @param {string} currentRedline_username - redline username
 * @param {string} currentRedline_userid - redline userid
 * @param {int} currentRedline_currentPage - page on which the redline is
 * @param {string} currentRedline_polypath_arrow - arrow redline geometry
 * @param {string} currentRedline_triangle_design - arrow redline geometry
 * @param {string} currentRedline_redline_text - text object in redline text
 * @param {string} currentRedline_drawingRotation - rotation of the page the redline is done on
 * @param {string} currentRedline_font_size - redline font size
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_All(currentRedline_underbar: string, currentRedline_name: string, currentRedline_id: string, currentRedline_layer: string, currentRedline_group: string, currentRedline_color: string, currentRedline_strokeWidth: any, currentRedline_fill: string, currentRedline_fill_opacity: number, currentRedline_transform: string, currentRedline_username: string, currentRedline_userid: string, currentRedline_currentPage: number, currentRedline_polypath_arrow: string, currentRedline_triangle_design: string, currentRedline_redline_text: string, currentRedline_drawingRotation: string, currentRedline_font_size: string): void;
/**
 * Sets the current Redlines values, color, strokewidth only, these settings will be used to intialize redlines subsequently drawn with the draw methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_color - color of the Redline as a hex values, for example "#FF0000".
 * @param {float} currentRedline_StrokeWidth - width of the Redline
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_ColorStokeWidth(currentRedline_color: string, currentRedline_strokeWidth: any): void;
/**
 * Sets the current Redlines value
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentRedline_color - color of the Redline as a hex values, for example "#FF0000".
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_Color(currentRedline_color: string): void;
export function cvjs_setCurrentRedlineValues_StokeWidth(currentRedline_strokeWidth: any): void;
/**
 * Sets the current Redlines value
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} currentRedline_StrokeWidth - width of the Redline
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentRedlineValues_StrokeWidth(currentRedline_strokeWidth: any): void;
export function cvjs_setCurrentNodeValuesFromExistingNode(currentNode_underbar: any): void;
export function cvjs_overwriteNodeValues(overwriteNode_underbar: any, overwriteNode_id: any, overwriteNode_name: any, overwriteNode_layer: any, overwriteNode_group: any, overwriteNode_attributes: any, overwriteNode_attributeStatus: any, overwriteNode_type: any, overwriteNode_tags: any, overwriteNode_occupancy: any, overwriteNode_linked: any, overwriteNode_area: any): void;
export function cvjs_addVqRoomsGraphics_newNode_polygon(cvjs_currentNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRoomsGraphics_newNode_circle(cvjs_currentNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqStickyNotesGraphics_newNode(cvjs_currentNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRedlinesGraphics_newNode(cvjs_currentRedline_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRedlinesGraphics_newNodeFill(cvjs_currentRedline_underbar: any, graphicsObject: any, R_fill: any, R_opacity: any): void;
export function cvjs_addVqRedlinesGraphics_newNodeTrans(cvjs_currentRedline_underbar: any, graphicsObject: any, transform: any, triangle_design: any, polypath_arrow: any): void;
export function cvjs_addVqRedlinesGraphics_newNodeText(cvjs_currentRedline_underbar: any, graphicsObject: any, transform: any, textString: any, redline_font_size: any): void;
export function cvjs_setUpVqRooms_currentNode(paper: any, cvjs_currentNode_underbar: any): void;
export function cvjs_setUpVqStickyNotes_currentNode_vqIndex(paper: any, cvjs_currentNode_underbar: any, vqindex: any, passedoverInstance: any): void;
export function cvjs_setUpVqStickyNotes_currentNode_vqIndex_passedInstance(paper: any, cvjs_currentNode_underbar: any, vqindex: any, passedoverInstance: any): void;
export function cvjs_setUpVqStickyNotes_currentNode(paper: any, cvjs_currentNode_underbar: any): void;
export function cvjs_setUpVqStickyNotes_currentNode_PageChange(paper: any, cvjs_currentNode_underbar: any, vqindex: any): void;
export function cvjs_setUpVqRooms_deleteNode(node: any): void;
export function cvjs_setUpStickyNotes_deleteNode(delete_note: any): void;
export function cvjs_StickyNotes_arrayIndex(noteUnderbar: any): string | -1;
/**
 * Draws interactively a circle. The data object of the circle is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_Circle(): void;
/**
 * Draws interactively a cloud. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineCloud(): void;
/**
 * Add a Space Object Custom Rectangle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {string} layer - the associated layer of the object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addRectangleCustomSpaceObject(floorplan_div: string, svgImagePath: string, spaceObjectId: string, spaceObjectName: string, spaceObjectType: string, spaceObjectLayer: any): void;
/**
 * Draws interactively a rectangle and add a custom wallpaper. The data object of the rectangle is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_CustomRectangle(svgImagePath: any, spaceObjectId: any, spaceObjectName: any, spaceObjectType: any): void;
/**
 * Draws interactively a rectangle. The data object of the rectangle is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_Rectangle(): void;
/**
 * Draws interactively a redline rectangle. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineRectangle(): void;
/**
 * <p>Draws interactively a Redline Ellipse Cloud . Prior to calling this any, <strong> [cvjs_setCurrentRedlineValues()]{@link https://cadviewer.com/cadviewerproapi/global.html#cvjs_setCurrentRedlineValues} </strong> should be called.</p>
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineEllipseCloud(): void;
/**
 * Draws interactively a Redline Ellipse . Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineEllipse(): void;
/**
 * Draws interactively a filled redline rectangle. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_FilledRedlineRectangle(): void;
/**
 * Dynamic resize and change location of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} nodeUnderbar - the data node containing the Space Object to which the text is associated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_dynamicResizeTextOnSpaceObject(nodeUnderbar: string): void;
/**
 * Dynamic resize and change location of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} name - the name of the data node containing the Space Object to which the text is associated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_dynamicResizeTextOnSpaceObject_Name(name: string): void;
/**
 * Dynamic resize and change location of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id - the id of the data node containing the Space Object to which the text is associated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_dynamicResizeTextOnSpaceObject_Id(id: string): void;
/**
 * Reset the location and size of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} nodeUnderbar - the data node containing the Space Object to which the text is associated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetTextOnSpaceObject(nodeUnderbar: string): void;
/**
 * Reset the location and size of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} name- name of the data node containing the Space Object to which the text is associated, the first occurance of the name is selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetTextOnSpaceObject_Name(name: any): void;
/**
 * Reset the location and size of text objects drawn on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} name- id of the data node containing the Space Object to which the text is associated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetTextOnSpaceObject_Id(id: any): void;
/**
 * Draws interactively a polygon. The data object of the polygon is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_Polygon(): void;
/**
 * Draws interactively a redline polyline. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlinePolyline(): void;
/**
 * Draws interactively a redline polyline with arrow. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineArrowPolyline(): void;
/**
 * Draws interactively a redline polygon. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_RedlineFilledPolygon(): void;
export function cvjs_setUpVqRedlines_currentNode(rPaper: any, cvjs_currentRedline_underbar: any): void;
export function cvjs_setUpVqRedlines_deleteNode(delete_redline: any): void;
/**
 * Draws interactively a copy of a previously defined cicle object. The data object of the circle is defined as a SpaceObject. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_CopyCircle(): void;
/**
 * Draws interactively a stickynote. The data object of the sticky note is defined as a StickyNote. Prior to calling this any, cvjs_setCurrentStickyNoteValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawStickyNoteDirect(): void;
/**
 * Sets measurements to be echoed through method cvjs_measurementCallback(cvjs_currentMeasurementLength, cvjs_units[cvjs_active_floorplan_div_nr]);
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} callbackMode - false is default, true if measurement shall be echoed through method
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCallbackMeasurement(callbackMode: boolean): void;
export function cvjs_insertRedlineText(textString: any, fontSize: any): void;
export function cvjs_changeNextIconPage(floorplan_div: any): void;
export function cvjs_changePreviousIconPage(floorplan_div: any): void;
export function cvjs_changeToIconPage(pageNr: any, floorplan_div: any): void;
/**
 * Sets the icon interface for viewing, layerhanding, measurement, etc. only
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_ViewingOnly(floorplan_div: string): void;
/**
 * Sets the icon interface for enabling space management
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_SpaceManagement(floorplan_div: string): void;
/**
 * Sets the icon interface for enabling image insert
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconInterfaceControls_ImageInsert(): void;
export function cvjs_initiateInsertRedlineText(floorplan_div: any): void;
/**
 * Insert image link
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_insertImageLink(floorplan_div: string): void;
/**
 * Sets quickcounts to be echoed through method cvjs_QuickCountCallback(cvjs_quickCountCounter);
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} callbackMode - false is default, true if Quick Counts shall be echoed through method
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCallbackQuickCount(callbackMode: boolean): void;
/**
 * Show number of quick counts
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showMeCounts(floorplan_div: string): void;
/**
 * Clear the quick counts counter
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearQuickCounts(floorplan_div: string): void;
/**
 * Activate quick count,
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_quickCount(floorplan_div: string): void;
/**
 * Exit quick count, alternative method to double click or Esc
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_exitQuickCount(floorplan_div: string): void;
/**
 * On the Room Layer designated by the Space Management list, it searches for the encapsulating polygon at the location of mouse-click. If polygon is found
 * a room object is created.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpacePolygonOnLayer(floorplan_div: string): void;
export function cvjs_findSVGcoordinate_setPolygonOnLayer(): void;
export function cvjs_combineRoomTextlayer(): void;
export function cvjs_getSizeOfLinkedObjects(): any;
export function cvjs_createSpaceLocationArrays(nameArray: any, idArray: any): void;
export function cvjs_createDataMapsHeaders(headerArray: any): void;
export function cvjs_OnLoadEndCompareDrawings(): boolean;
/**
 * Sets the name of the second drawing for compare load, bypassing load modal
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} fileName - name of drawing
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCompareDrawings_LoadSecondDrawingDirect(floorplan_div: string, fileName: string): void;
/**
 * Second drawing in compare files are set to be loaded via modal - default action
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCompareDrawings_StandardModal(floorplan_div: string): void;
/**
 * Loads the second drawing for compare with drawing currently loaded
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_compareDrawings_LoadSecondDrawing(floorplan_div: string): void;
/**
 * Toggles the overlaid drawings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_compareDrawings_ToggleDrawingOverlay(floorplan_div: string): void;
/**
 * Toggles the drawings individually
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_compareDrawings_ToggleDrawings(floorplan_div: string): void;
/**
 * Exit compare drawing and returns to base drawing
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_exitCompareDrawings(floorplan_div: string): void;
/**
 * Sets the sessions name for the collaboration session
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} sessions_name : name of the session. This name will be a server entity of same name containing all content relevant to the session
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCollaborationSessionName(session_name: any): void;
/**
 * Sets the server Url for collaboration content
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} url_name : default is "../php/collaboration/";
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCollaborationServerUrl(url_name: string): void;
/**
 * Sets the server path for collaboration content
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} server_path : default is "C:\\xampp\\htdocs\\CV-JS_2_4_1\\php\\collaboration\\";
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCollaborationServerFolder(server_path: string): void;
export function cvjs_collab_timer(): void;
/**
 * Start a collaboration session
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_start_collab(floorplan_div: string): void;
export function cvjs_start_collab_button(floorplan_div: any): void;
/**
 * Leave the collaboration session
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_stop_collab(floorplan_div: string): void;
/**
 * Clear the redlines in collaboration session
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clear_collab_redline(floorplan_div: string): void;
/**
 * Take control and become the presenter in collab sessiojn
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_make_collab_presenter(floorplan_div: string): void;
export function cvjs_downloadFile(filePath: any): void;
export function cvjs_SVGtoOriginal_X_coord(x: any, page: any): number;
export function cvjs_SVGtoOriginal_Y_coord(y: any, page: any): number;
/**
 * Initialize xlink SVG Hyperlinks with click handler so mouse click are caught, and adds a tooltip with the xlink <id> displayed. The return method on mouseclick is:  cvjs_OnHyperlinkClick(xlink_id);
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_InitializeSVGHyperlinkClick(floorplan_div: string): void;
/**
 * Add color to an xlink SVG hyperlinks to have it behave like a dynamic highlight
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} hyperlinkId - the <id> element of the xlink hyperlink
 * @param {string} hyperFill - the new fill color, of type #00FF00
 * @param {float} hyperOpacity - the opacity of the fill, a value between 0.0 and 1.0.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_colorSingleSVGHyperlink(hyperlinkId: string, hyperFill: string, hyperOpacity: number): void;
/**
 * Reset colors on xlink SVG Hyperlinks. The hyperlinks are typically transparent, but can be controlled to do interactive highlight.-
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetSVGHyperlinkColors(): void;
/**
 * Make a legend in the upper right location of the drawings with color codes and text description
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} upperRightDeltaX - delta x value, the Legend is moved this relative value to the right of drawing extents, value between 0 and 1
 * @param {float} upperRightDeltaX - delta y value, the Legend is moved this relative value from the top of the drawing extents, value between 0 and 1
 * @param {float[]} scaleTextArr - Array with the legends text heigth, on a per line basis, value between 0 and 1 as the relative value of the drawing height
 * @param {string[]} textStringArr - Array with the legends text to be displayed on a per line basis
 * @param {string[]} textStylesArr- Array with the text styles of each legend
 * @param {string[]} hexColorTextArr - Array with the hex colors on each text legends
 * @param {string[]} legendColorArr - Array with the hex colors of the color box associated with each legend text
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {Object} highlight_handles_style_object - object with the styles used for highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeLegendUpperRightDiv(upperRightDeltaX: number, upperRightDeltaY: any, roomLayer: any, headerScale: any, headerString: any, headerStyle: any, headerHexColor: any, scaleTextArr: any, textStringArr: any, textStylesArr: any, hexColorTextArr: any, legendColorArr: any, floorplan_div: string, highlight_handles_style_object: any): void;
/**
 * Make a legend in the upper right location of the drawings with color codes and text description
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} upperRightDeltaX - delta x value, the Legend is moved this relative value to the right of drawing extents, value between 0 and 1
 * @param {float} upperRightDeltaX - delta y value, the Legend is moved this relative value from the top of the drawing extents, value between 0 and 1
 * @param {float[]} scaleTextArr - Array with the legends text heigth, on a per line basis, value between 0 and 1 as the relative value of the drawing height
 * @param {string[]} textStringArr - Array with the legends text to be displayed on a per line basis
 * @param {string[]} textStylesArr- Array with the text styles of each legend
 * @param {string[]} hexColorTextArr - Array with the hex colors on each text legends
 * @param {string[]} legendColorArr - Array with the hex colors of the color box associated with each legend text
 * @param {Object} highlight_handles_style_object - object with the styles used for highlight
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeLegendUpperRight(upperRightDeltaX: number, upperRightDeltaY: any, roomLayer: any, headerScale: any, headerString: any, headerStyle: any, headerHexColor: any, scaleTextArr: any, textStringArr: any, textStylesArr: any, hexColorTextArr: any, legendColorArr: any, highlight_handles_style_object: any): void;
/**
 * Changes visible text attribute objects on a block, referenced through its block handle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handle - AutoCAD block handle referecen
 * @param {string[]} textArr - Array with the text objects to be replaced. The lenght of the array determines how many objects are replaced
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeText_On_BlockHandle(handle: string, textArr: string[]): void;
/**
 * Changes visible text attribute objects on a block, referenced through its block handle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handle - AutoCAD block handle reference
 * @param {string[]} textArr - Array with the text objects to be replaced. The lenght of the array determines how many objects are replaced
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @return {boolean} false if handle not found otherwise true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeText_On_BlockHandleDiv(handle: string, textArr: any, floorplan_div: string): boolean;
/**
 * Make a stamp in the upper right location of the drawings with color codes and text description
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} upperRightDeltaX - delta x value, the Legend is moved this relative value to the right of drawing extents, value between 0 and 1
 * @param {float} upperRightDeltaX - delta y value, the Legend is moved this relative value from the top of the drawing extents, value between 0 and 1
 * @param {string} roomLayer - name of layer to draw stamp
 * @param {float} headerScale - Header text heigth, on a per line basis, value between 0 and 1 as the relative value of the drawing height
 * @param {string[]} headerStringArrr - Array with the header text to be displayed on a per line basis
 * @param {object} headerStyle - Style array of the header text
 * @param {string} headerHexColor - Hex color of header text
 * @param {float[]} scaleTextArr - Array with the legends text heigth, on a per line basis, value between 0 and 1 as the relative value of the drawing height
 * @param {string[]} textStringArr - Array with the legends text to be displayed on a per line basis
 * @param {string[]} textStylesArr- Array with the text styles of each legend
 * @param {string[]} hexColorTextArr - Array with the hex colors on each text legends
 * @param {string} hexColorFrame - Hex color of the frame
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeStampUpperRightDiv(upperRightDeltaX: number, upperRightDeltaY: any, roomLayer: string, headerScale: number, headerStringArr: any, headerStyle: object, headerHexColor: string, scaleTextArr: any, textStringArr: any, textStylesArr: any, hexColorTextArr: any, hexColorFrame: string, floorplan_div: string): void;
/**
 * Make a stamp in the upper right location of the drawings with color codes and text description
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} upperRightDeltaX - delta x value, the Legend is moved this relative value to the right of drawing extents, value between 0 and 1
 * @param {float} upperRightDeltaX - delta y value, the Legend is moved this relative value from the top of the drawing extents, value between 0 and 1
 * @param {float[]} scaleTextArr - Array with the legends text heigth, on a per line basis, value between 0 and 1 as the relative value of the drawing height
 * @param {string[]} textStringArr - Array with the legends text to be displayed on a per line basis
 * @param {string[]} textStylesArr- Array with the text styles of each legend
 * @param {string[]} hexColorTextArr - Array with the hex colors on each text legends
 * @param {string[]} legendColorArr - Array with the hex colors of the color box associated with each legend text
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeStampUpperRight(upperRightDeltaX: number, upperRightDeltaY: any, roomLayer: any, headerScale: any, headerStringArr: any, headerStyle: any, headerHexColor: any, scaleTextArr: any, textStringArr: any, textStylesArr: any, hexColorTextArr: any, hexColorFrame: any): void;
/**
 * Saves a stamp layer to a file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {object} layer - Layer with custom information , roomLayer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveStamp(fileName: string, floorplan_div: string, layer: object): void;
/**
 * Saves a custom layer as SVG file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {object} layer - Layer with custom information
 * @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveCustomSVGLayer(fileName: string, floorplan_div: string, layer: object, custom_content: object): void;
/**
 * Saves a floorplan with overlays as PDF file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveFloorplanAsPDF(fileName: string, floorplan_div: string, custom_content: object): void;
/**
 * Saves a floorplan with overlays as PDF file, upload to SharePoint folder
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {string} sharepointFolder - name of SharePoint upload folder
 * @param {string} sharepointUserName - name of SharePointUser
 * @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveFloorplanAsPDFtoSharePoint(fileName: string, floorplan_div: string, sharepointFolder: string, sharepointUserName: string, custom_content: object): void;
/**
 * Saves a floorplan with overlays as SVG file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveFloorplanAsSVG(fileName: string, floorplan_div: string, custom_content: object): void;
/**
 * Saves a floorplan with overlays as SVG file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} filePath - location of the files to be merged, server side
 * @param {string} urlPath - url location of the files to be merged
 * @param {string} fileName - name of the pdf document to be merged, _red pdf pages will be merged into a document _red_merged
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_mergePDFwithRedlines(filePath: string, urlPath: string, fileName: string, floorplan_div: string): void;
/**
 * Loads an stamp file into a custom layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of SVG file to load
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {object} layer - Layer on which to place the file content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadStamp(fileName: string, floorplan_div: string, layer: object): void;
/**
 * Loads a SVG file into a custom layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of SVG file to load
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {object} layer - Layer on which to place the file content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadCustomSVGLayer(fileName: string, floorplan_div: string, layer: object): void;
export function cvjs_LoadDrawingAborted(floorplan_div: any, fileName: any): void;
/**
 * Hide the navigation menu
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} mydiv - name of the div on which the CADViewer instance is placed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideNavigationMenu(mydiv: string): void;
/**
 * Checks if a RoomID is present on a given floorplan
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {string} floorplan_div - name of the div on which the CADViewer instance is placed
 * @return {boolean} false if rmid not found otherwise true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_checkRoomHandleDiv(rmid: string, floorplan_div: string): boolean;
/**
 * Checks if a block handle is present on the floorplan
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} handle - AutoCAD block handle reference
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @return {boolean} false if handle not found otherwise true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_checkBlockHandleDiv(handle: string, floorplan_div: string): boolean;
/**
 * Get the content of all StickyNotes
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} stickyNoteContent - xml wrapped content: userid, id, name, date, text, page
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getStickyNoteInfo(): string;
/**
 * Saves all stickynote content as - xml wrapped content: userid, id, name, date, text, page
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} fileName - name and path of file to save to
 * @param {string} floorplan_div - name of Element on which CADViewer is located
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveStickyNoteInfo(fileName: string, floorplan_div: string, custom_content: object): void;
/**
 * Publish redlined content as PDF
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_publishPDF(floorplan_div: string): void;
/**
* Merge redline content into original DWG for re-distribution
*
* <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
* @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
*
*  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
[The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
*
*
* @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
*/
export function cvjs_mergeDXFDWG(floorplan_div: string): void;
export function cvjs_mergeDXFViaButton(floorplan_div: any): void;
export function cvjs_saveScreenAsMergedDXF(floorplan_div: any, mode: any, custom_content: any): void;
export function cvjs_publishPDFViaButton(floorplan_div: any): void;
/**
 * Captures the screen image and creates a single page PDF, which is uploaded to Sharepoint server
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} pageOrientation - Orientation of drawings: landscape/portrait
 * @param {string} pageSize - Papersize of drawing
 * @param {string} pageResolution - Page resolution in dpi, default is 300
 * @param {string} floorplan_div - div on which CADViewer is places
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsPDF_uploadServer(pageOrientation: string, pageSize: string, pageResolution: string, floorplan_div: string): void;
/**
 * Captures the screen image and creates a single page PDF, which is attached to email
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} pageOrientation - Orientation of drawings: landscape/portrait
 * @param {string} pageSize - Papersize of drawing
 * @param {string} pageResolution - Page resolution in dpi, default is 300
 * @param {string} floorplan_div - div on which CADViewer is places
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveScreenAsPDF_email(pageOrientation: string, pageSize: string, pageResolution: string, floorplan_div: string): void;
export function cvjs_printSavedBitmapToPDF_uploadServer(): void;
export function cvjs_printSavedBitmapToPDF_email(): void;
/**
 * Saves a floorplan with overlays as SVG file, then embed it into a pdf and display in own window
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_printScreenAsPDFwithRedlines(floorplan_div: string, custom_content: object): void;
export function cvjs_initializeFileSelector(): void;
export function cvjs_setModalSingleFileItems(number: any): void;
export function cvjs_initializeAllFileSelectorDivs(floorplan_div: any): void;
export function cvjs_add_file_object(myElement: any): void;
/**
 * Set up the location of folder in server in which files are upload to and accessed from
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} myServerPathToFloorplans - full path to the location of the drawings (typically  /home/myserver/drawings/floorplans/)
 * @param {string} floorplanPath - the relative location of floorplans relative to my document (typically ../drawings/floorplans/)
 * @param {string} floorplanUrl - Url to the locations of floorplans relative to my document
 * @param {string} username - username for floorplans drawings folder, "" if none
 * @param {string} password - password for floorplans drawings folder, "" if none
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerFileLocation(myServerPathToFloorplans: string, floorplanPath: string, floorplanUrl: string, username: string, password: string): void;
/**
 * Set up the location of folder in server in which files are upload to and accessed from
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} myServerPathToFloorplans - full path to the location of the drawings (typically  /home/myserver/drawings/floorplans/)
 * @param {string} floorplanPath - the relative location of floorplans relative to my document (typically ../drawings/floorplans/)
 * @param {string} username - username for floorplans drawings folder, "" if none
 * @param {string} password - password for floorplans drawings folder, "" if none
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setServerFileLocation_AbsolutePaths(myServerPathToFloorplans: string, floorplanUrl: any, username: string, password: string): void;
export function cvjs_exitServerFileLoadModal(): void;
export function cvjs_callServerForDataOverlayProcessing(): void;
export function cvjs_loadFileWithDataOverlays(fileName: any, row: any): void;
/**
 * Enables bitmaps to be loaded via server handler instead of direct load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - true for bitmap file load through server handler
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadBitmapsViaServerPath(mode: boolean): void;
/**
 * Calls the file manager, set the enable file manager load to true prior to calling this method
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_openFileLoadToServer(floorplan_div: string): void;
export function cvjs_setFileLoadTrialMode(loadMode: any): void;
export function cvjs_loadServerFileList(mode: any): void;
/**
 * Sets the relative path for the redlines location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} serverPath - absolute path to the redlines location, "/home/cadviewerjs/redlines/"
 * @param {string} path - path to the redlines location, default is "../redlines"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRedlinesRelativePath(path: string, serverPath: string): void;
/**
 * Sets the absolute path for the redlines location, relative path is not used
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - abslute URL to the redlines location
 * @param {string} serverPath - absolute path to the redlines location, "/home/cadviewerjs/redlines/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRedlinesAbsolutePath(path: string, serverPath: string): void;
/**
 * Opens the SpaceObject Save Modal for server interaction with redlines
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan-div - the ID of the Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_openSpaceObjectSaveModal(floorplan_div: any): void;
/**
 * Opens the Redline Save Modal for server interaction with redlines
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan-div - the ID of the Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_openRedlineSaveModal(floorplan_div: any): void;
/**
 * Opens the Redline Load Modal for server interaction with redlines
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan-div - the ID of the Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_openRedlineLoadModal(floorplan_div: any): void;
/**
 * Toggle the color settings Black /White
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan-div - the ID of the Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_toggleBlackWhite(floorplan_div: any): void;
export function cvjs_colorAllLayersInDrawing_OriginalColor_SVG(floorplan_div: any): void;
export function cvjs_colorAllLayersInDrawing_InvertBackground_SVG(hexColor: any, bwMode: any, floorplan_div: any): void;
/**
 * Create an internal array with all fill colors on all SVG graphical objects.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_storeFillColors(): void;
/**
 * Toggle the color settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan-div - the ID of the Element in which CADViewer is running
 * @param {string} hexColor - color of all layers
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_colorAllLayersInDrawing(floorplan_div: any, hexColor: string): void;
export function cvjs_colorAllLayersInDrawing_InvertBackground(hexColor: any, floorplan_div: any): void;
/**
 * Sets the relative path for the insert image object location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - path to the inserted images location, default is "../drawings/inserted_image_objects/"
 * @param {string} serverPath - absolute path to the inserted images location, "/home/cadviewerjs/drawings/mypath/inserted_image_objects/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInsertImageObjectsRelativePath(path: string, serverPath: string): void;
/**
 * Sets the basolute path for the insert image object location, relative path is not used
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - absolute http/Url path to the inserted images location,
 * @param {string} serverPath - absolute path to the inserted images location, "/home/cadviewerjs/drawings/mypath/inserted_image_objects/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInsertImageObjectsAbsolutePath(path: string, serverPath: string): void;
/**
 * Sets the basolute path for the insert image object location, relative path is not used
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - absolute http/Url path to the inserted images location,
 * @param {string} serverPath - absolute path to the inserted images location, "/home/cadviewerjs/drawings/mypath/inserted_image_objects/"
 * @param {string} fileName - filename, "myobject.js"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInsertImageObjectsAbsolutePath_FileName(path: string, serverPath: string, fileName: string): void;
export function cvjs_add_image(): void;
/**
 * Load all object image links
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {object} custom_content - custom controlled information
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadAllImageLinks(floorplan_div: string, custom_content: object): void;
export function cvjs_loadImageObjectTimer(): void;
export function cvjs_addInlineScript(cvjs_script: any): void;
/**
 * Saves all image links
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveAllImageLinks(floorplan_div: string, custom_content: object): void;
/**
 * Clears all image links from the canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllImageLinks(floorplan_div: string): void;
/**
* Opens the File Loader Modal to load and convert drawing with space objects
*
* <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
* @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
*
*  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
[The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
*
*
* @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
*/
export function cvjs_loadDrawingsWithSpaceObjects(floorplan_div: string): void;
/**
 * Clean the server side temporary folder for files. This command is useful when using cvjs_conversion_setContentResponse("file");
 * where the server conversion provides a full set of files that is not removed when read by CADViewer
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_cleanFilesDirectory(): void;
export function cvjs_setSpaceObjectUserMode(mode: any): void;
/**
 * Add a Space Object Rectangle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addRectangleSpaceObject(floorplan_div: string): void;
export function cvjs_addRectangleSpaceObjectCore(floorplan_div: any): void;
/**
 * Add a Space Object Polygon
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addPolygonSpaceObject(floorplan_div: string): void;
export function cvjs_addPolygonSpaceObjectCore(floorplan_div: any): void;
/**
 * Add a Space Object Circle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addCircleSpaceObject(floorplan_div: string): void;
export function cvjs_addCircleSpaceObjectCore(floorplan_div: any): void;
/**
 * Copy a Space Object Circle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_copyCircleSpaceObject(floorplan_div: string): void;
/**
 * Deletes all Space Objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearSpaceObjects(floorplan_div: string): void;
/**
 * Delete a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteSpaceObject(floorplan_div: string): void;
/**
 * Sets the mode of Space Object to either display or create
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {boolean} displayModal - flag to display SpaceObjectEditModal, if undefined modal is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectDisplayMode(floorplan_div: string, displayModal: boolean): void;
export function cvjs_change_space(rmid: any): void;
/**
 * Display of Space Object structure in User Mode, with enabled seach panel
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_displaySpaceObjectsStructure(floorplan_div: string): void;
export function cvjs_displaySpaceObjectsStructureInternal(floorplan_div: any, userSiteName: any, dropFloor: any, dropFloorList: any, myCustomFunction: any): void;
/**
 * Settings of how Space Objects communicates with user defined back-end
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_spaceObjectSettings(floorplan_div: string): void;
export function cvjs_spaceObjectInputPanel(floorplan_div: any, custom_content: any): void;
export function cvjs_addCircleAccessPointObject(): void;
export function cvjs_setLanguageIndexIncrement(): void;
export function cvjs_setLanguageIndex(languageIndex: any): void;
/**
 * Set the ajax control callback variable
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} callbackStatus - set to false then monitor then true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ajaxPostCallbackVariable_thumbNails(callbackStatus: boolean): void;
/**
 * Settings for email sender in the PDF publish method. When calling this any, email will be activated
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} from_name - name of the from sender in redline PDF email
 * @param {string} from_mail - email address of the from sender in redline PDF email
 * @param {string} cc_mail - email of the cc address when sending redline PDF email
 * @param {string} replyto - mail of the reply to sender in redline PDF email
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_emailSettings_PDF_publish(from_name: string, from_mail: string, cc_mail: string, replyto: string): void;
/**
 * Saves a floorplan with overlays as SVG file, then embed it into a pdf and send it as email
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_emailScreenAsPDFwithRedlines(floorplan_div: string, custom_content: object): void;
/**
 * Brings the dragging background to front - used for drawings with static filled polygons
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_dragBackgroundToFront_SVG(floorplan_div: string): void;
/**
 * Sends the dragging background to back  - default
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_dragBackgroundToBack_SVG(floorplan_div: string): void;
/**
 * Save current object as SVG, including redlines and space objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveAsSVG(floorplan_div: string): void;
export function cvjs_download_link(filename: any, filelocation: any): void;
/**
 * Save current object as SVG, including redlines and space objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {string} FileLocation - name of file to save
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveAsSVGOnServer(floorplan_div: string, FileLocation: string, custom_content: object): void;
/**
 * Returns the current redlines and sticky notes as a string object in XMLso the user can do their own server side save
 * bypassing php or servlet code *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} stickynote_flag  - save stickynotes as xml, default true
 * @returns {string} a string containg the redline, sticky note object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getStickyNotesRedlineXML(stickynote_flag: boolean): string;
/**
 * Returns the setting of Measurement Units on the current drawing/page from the active floorplan_div
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} units -  Measurement Unit (mmn, cm, m, feet, inch)
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getCurrentMeasurementUnit(): string;
/**
 * Returns the setting of SVG to World Units on the current drawing/page from the active floorplan_div
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {float} svgToWorldUnits - conversion factor for measurements
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSvgToWorldUnits(): number;
/**
 * Sets Unit and Measurement World Unit Transformation on current page
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @param {string} units - Measurement Unit  (mmn, cm, m, feet, inch)
 * @param {float} svgToWorldUnit - conversion factor for measurements
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCurrentMeasurementUnits(floorplan_div: string, units: string, svgToWorldUnit: number): void;
/**
 * Reset the initialization of floorplans
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resetInitialization_FloorplanDiv(): void;
/**
 * Moves the drag background on top, typically for image and text intensive PDF files
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDragBackgroundOnTop(floorplan_div: string): void;
/**
 * Moves the drag background to its default position, at the back, typically for CAD files
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDragBackgroundToBack(floorplan_div: string): void;
export function cvjs_creation_modal_show(floorplan_div: any): void;
export function cvjs_creation_modal_hide(floorplan_div: any): void;
export function cvjs_showCreationModeModal(floorplan_div: any): void;
export function cvjs_drawEllipseViaButton(floorplan_div: any): void;
export function cvjs_ellipse_modal_hide(floorplan_div: any): void;
export function cvjs_drawRedlineEllipseCloud(floorplan_div: any): void;
/**
 * Build a tree structure in which to be able to load CADViewer dynamically
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} FileLocation - location of file tree folder
 * @param {string} DocumentLocation - location of current document
 * @param {string} floorplan_div - name of the Element in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_buildFolderTree(FileLocation: string, DocumentLocation: string, floorplan_div: string): string;
export function cvjs_CleanLayout(floorplan_div: any): void;
export function cvjs_selectPageFromList(floorplan_div: any): void;
export function cvjs_custom_jsTreeSelection(data: any, datalength: any): void;
/**
 * Sets control parameter for service conversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} applicationPlatform -
 * @param {string} applicationPlatformUsername
 * @param {string} applicationPlatformUserID
 * @param {string} ServiceToken
 * @param {int} leaveStreamOnServerOnServer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_conversion_setApplicationServiceParameters(applicationPlatform: string, applicationPlatformUsername: string, applicationPlatformUserID: string, ServiceToken: string, leaveStreamOnServer: any): void;
export function cvjs_update_done_edit_location_fields(rmid: any): void;
export function cvjs_draw_space_object_names_on_spaces(): void;
/**
 * Connect Text Strings; connects two text strings with a line and arrow
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} searchString1 - the first text string to search after
 * @param {int} textInstance1 - if multiple entries of text object, load instance, the first instance is 1
 * @param {string} searchString1 - the second text string to search after
 * @param {int} textInstance1 - if multiple entries of text object, load instance, the first instance is 1
 * @param {int} lengthfactor1 - % value, tells how many percentages line should be shorted at first text
 * @param {int} lengthfactor2 - % value, tells how many percentages line should be shorted at end text
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_connectTextInstances(textString1: any, textInstance1: number, textString2: any, textInstance2: any, lengthfactor1: number, lengthfactor2: number): void;
export function cvjs_floodfill(cvjs_ctx: any, canv_width: any, canv_height: any, widthHeightFactorSVG: any, widthHeightFactorSVGless1: any): void;
export function cvjs_floodfillWrapper(x: any, y: any, text: any, canv_width: any, canv_height: any, cvjs_ctx: any, sizeWidth: any, sizeHeight: any): void;
export function cvjs_pngForSVG(htmlPrintFile: any): void;
/**
 * Add a Pin Marker Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {string} layer - the associated layer of the object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addPinMarker(floorplan_div: string, spaceObjectId: string, spaceObjectName: string, spaceObjectType: string, spaceObjectLayer: any): void;
/**
 * Interactively draws a custom wallpaper. The data object of the rectangle is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_PinMarker(spaceObjectId: any, spaceObjectName: any, spaceObjectType: any): void;
export function cvjs_PinMarker(): void;
/**
 * Function to merge a QR into a drawing for download
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorPlan_div - name of the div that contains CADViewer
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_mergeQR(floorplan_div: any, custom_content: object): void;
/**
 * Sets the direct content of the file load modal instead of scanning through a designated folder
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {object} custom_modal_dir_listing - a structure containing filename, url, and path
 * @param {String} floorPlan_div - name of the div that contains the floorplan
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_CompareFiles_setFileModalContent(custom_modal_dir_listing: object, floorPlan_div: string): void;
export function cvjs_createSpaceOutput_JSfile_Legacy(): string;
export function cvjs_createSpaceOutput_JSfile(): string;
export function cvjs_loadSpaceObjectsUser(floorplan_div: any): void;
/**
 * Sets the absolute path for the space object location, relative path is not used
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} path - abslute URL to the space object location
 * @param {string} serverPath - absolute path to the space object location, "/home/cadviewerjs/spaceObjects/"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectsAbsolutePath(path: string, serverPath: string): void;
/**
 * Sets the name and url of the Space Object file to load, The Space Object file is has the extension .js
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} file - String containg url and name of space_object.js file
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectUrl(file: string): void;
/**
 * Loads JSON Space Object to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadSpaceObjects(floorplan_div: string, custom_content: object): void;
/**
 * Controls the appearance of pop up modal when space object is clicked
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} modal_mode - flag to make popup modal disappear , false is default and display, true for supressed
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_supressPopUpModalMode(modal_mode: boolean): void;
/**
 * Controls the highlight appearance when space object is clicked. Used for custom control of multiple selections, etc.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} modal_mode - flag to make highlight disappear , false is default highlight, true for supressed highlight of space
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_supressSingleSpaceHighlight(modal_mode: boolean): void;
/**
 * Add a Fixed Size Space Object Custom Rectangle at coordinates x, y
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {int} coordinate_flag - 0 is SVG coordinates, 1 is DWG coordinates, 0 is default
 * @param {int} xcor - x coordinate
 * @param {int} ycor - y coordinate
 * @param {Object} textArray - array with lines of text content in Space Object
 * @param {float} scaleFactor - scale factor at insertion, 1.0 is default
 * @param {Object} colorObject - object containing colors and style of default setting of Space Object, "none" provides standard default color
 * @param {Object} textStyles - object containing colors and style of each line of text in the Space Object
 * @param {Array} scaleText - array containing relative size af each line of text in the Space Object
 * @param {Array} hexColorText - array containing color of each line of text in the Space Object
 * @param {float} leftFactor - left adjustment factor of text in the Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addSpaceObjectDirectXY(floorplan_div: string, svgImagePath: string, spaceObjectId: string, spaceObjectName: string, spaceObjectType: string, coordinate_flag: number, xcor: number, ycor: number, textArray: any, scaleFactor: number, colorObject: any, textStyles: any, scaleText: any[], hexColorText: any[], leftFactor: number): void;
/**
 * Add a Fixed Size Space Object Custom Rectangle at coordinates x, y
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {string} layer - the associated layer of the object
 * @param {int} xcor - x coordinate
 * @param {int} ycor - y coordinate
 * @param {int} coordinate_flag - 0 is SVG coordinates, 1 is DWG coordinates, 0 is default
 * @param {Object} textArray - array with lines of text content in Space Object
 * @param {float} scaleFactor - scale factor at insertion, 1.0 is default
 * @param {Object} textStyles - object containing colors and style of each line of text in the Space Object
 * @param {Array} scaleText - array containing relative size af each line of text in the Space Object
 * @param {Array} hexColorText - array containing color of each line of text in the Space Object
 * @param {float} leftFactor - left adjustment factor of text in the Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addFixedSizeCustomSpaceObjectXY(floorplan_div: string, svgImagePath: string, spaceObjectId: string, spaceObjectName: string, spaceObjectType: string, spaceObjectLayer: any, xcor: number, ycor: number, coordinate_flag: number, textArray: any, scaleFactor: number, textStyles: any, scaleText: any[], hexColorText: any[], leftFactor: number): void;
/**
 * Add a Fixed Size Space Object Custom Rectangle at coordinates x, y
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {string} layer - the associated layer of the object
 * @param {int} xcor - x coordinate in SVG coordinates
 * @param {int} ycor - y coordinate in SVG coordinates
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_moveFixedSizeCustomSpaceObjectXY(floorplan_div: string, spaceObjectId: string, xcor: number, ycor: number): void;
/**
 * Add a Fixed Size Space Object Custom Rectangle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} spaceObjectName - Name of the space object.
 * @param {string} spaceObjectType - Type of the object
 * @param {string} layer - the associated layer of the object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addFixedSizeCustomSpaceObject(floorplan_div: string, svgImagePath: string, spaceObjectId: string, spaceObjectName: string, spaceObjectType: string, spaceObjectLayer: any): void;
/**
 * Draws a fixed size space and add a custom wallpaper. The data object of the rectangle is defined as a Space Object. Prior to calling this any, cvjs_setCurrentSpaceObjectNodeValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawSpaceObject_FixedSize(svgImagePath: any, spaceObjectId: any, spaceObjectName: any, spaceObjectType: any): void;
/**
 * Delete a Space Image Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteSpaceImageObject(floorplan_div: string): void;
/**
 * Interactively rotates a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_rotateSpaceObject(floorplan_div: string): void;
/**
 * Interactively move a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_moveSpaceObject(floorplan_div: string): void;
/**
 * Interactively resize a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeSpaceObject(floorplan_div: string): void;
/**
 * Interactively resize a Space Image Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeSpaceImageObject(floorplan_div: string): void;
export function cvjs_resizeSpaceImageObject_core(floorplan_div: any): void;
/**
 * Add a Fixed Size Image Space Object in SVG coordinates
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {int} xcor - x coordinate in SVG coordinates
 * @param {int} ycor - y coordinate in SVG coordinates
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addFixedSizeImageSpaceObjectXY(floorplan_div: string, xcor: number, ycor: number): void;
/**
 * Add a Fixed Size Image Space Object in Global (DWG) Coordinates
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {int} xcor - x coordinate in Global (DWG) coordinates
 * @param {int} ycor - y coordinate in Global (SVG) coordinates
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addFixedSizeImageSpaceObject_GlobalXY(floorplan_div: string, xcor: number, ycor: number): void;
/**
 * Add a Fixed Size Image Space Object with
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addFixedSizeImageSpaceObject(floorplan_div: string): void;
/**
 * Add a Drag Size Size Image Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addDragRectangleImageSpaceObject(floorplan_div: string): void;
/**
 * CADViewer Pro Initialization class, to be called as part of init of base version
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_initCADViewerPro_Section02(floorplan_div: string): void;
/**
 * CADViewer Pro Initialization class, to be called as part of init of base version
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_initCADViewerPro_Section03(floorplan_div: string): void;
/**
 * CADViewer Pro Initialization class, to be called as part of init of base version
 * FileLoad Module
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_initCADViewerPro_FileLoadModal(floorplan_div: string): void;
/**
 * Returns the current redlines and sticky notes as a string object in DXF so the user can do their own server side save
 * bypassing php or servlet code
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@returns {string} RedlineNote - a string containg the redline, sticky note object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getStickyNotesRedlineDXF(): string;
/**
 * Returns the current redlines and sticky notes as a string object in JS so the user can do their own server side save
 * bypassing php or servlet code
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} RedlineNote - a string containg the redline, sticky note object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getStickyNotesRedlineJS(): string;
/**
 * Returns the current redlines and sticky notes as a string object in so the user can do their own server side save
 * bypassing php or servlet code
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} RedlineNote - a string containg the redline, sticky note object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getStickyNotesRedline(): string;
/**
 * Saves Space Objectws to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @param {String} filepath - file path
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveSpaceObjects(floorplan_div: string, filepath: string, custom_content: object): void;
/**
 * Saves redlines and sticky notes to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @param {boolean} display_modal - display save modal. If undefined -> true
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_saveStickyNotesRedlines(floorplan_div: string, display_modal: boolean, custom_content: object): void;
/**  REDLINE top level user commands, draw set color, line thickness   *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
/**
 * Draws interactively a freehand redline. The data object of the redline is defined as a Redline. Prior to calling this any, cvjs_setCurrentRedlineValues() should be called.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedline__Freehand(): void;
/**
 * Calls modal for setting redline color
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRedlineColor(floorplan_div: string): void;
export function cvjs_color_modal_hide(floorplan_div: any): void;
/**
 * Calls modal for publish PDF document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setPublishPDF(floorplan_div: string): void;
export function cvjs_publishPDF_modal_hide(floorplan_div: any): void;
/**
 * Calls modal for merge DXF document
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setMergeDXF(floorplan_div: string): void;
export function cvjs_mergeDXF_modal_hide(floorplan_div: any): void;
/**
 * Calls modal for setting redline color
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setGenericColor(): void;
/**
 * Calls modal for setting redline color
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setRedlineThickness(floorplan_div: string): void;
export function cvjs_setRedlineColorViaButton(floorplan_div: any): void;
export function cvjs_setRedlineColorFromPicker(pickcolor: any): void;
export function cvjs_setRedlineThicknessViaButton(floorplan_div: any): void;
/**
 * Draws a redline rectangle - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineRectangle(floorplan_div: string): void;
/**
 * Draws a redline triangle - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineTriangle(floorplan_div: string): void;
/**
 * Draws a redline filled rectangle - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineFilledRectangle(floorplan_div: string): void;
/**
 * Draws a redline cloud - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineCloud(floorplan_div: string): void;
/**
 * Draws a redline ellipse - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineEllipse(floorplan_div: string): void;
/**
 * Draws a redline polyline - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlinePolyline(floorplan_div: string): void;
/**
 * Draws a redline filled polygon - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineFilledPolygon(floorplan_div: string): void;
/**
 * Draws a redline polyline with arrow - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineArrow(floorplan_div: string): void;
/**
 * Draws a redline text  - uses global settings of color
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineText(floorplan_div: string): void;
export function cvjs_hide_redline_text_modal(floorplan_div: any): void;
export function cvjs_exitRedlineTextModal(): void;
/**
 * Sets the name and url of the redline file to load, The redline file is has the extension .js
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} file - String containg url and name of redline.js file
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setStickyNoteRedlineUrl(file: string): void;
/**
 * Sets the name and url of the redline file to save. The redline file can be .js , .dxf or .xml
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} file - String containg url and name of redline.js/redline.ext file
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setStickyNoteSaveRedlineUrl(file: string): void;
/**
 * Draws a freehand redline - uses global settings of color and width
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedline_Freehand(floorplan_div: string): void;
/**
 * Draws a freehand redline - uses global values of color and width
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedline_Freehand_globalColorWidth(): void;
export function cvjs_drawRedline_Freehand_setValues(): void;
export function cvjs_drawStickyNote_setValues(): void;
/**
 * Draws a freehand stickynote - uses global settings of user and user id
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawStickyNote(floorplan_div: string): void;
/**
 * Deletes the last drawn Redline
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteLastRedline(floorplan_div: string): void;
/**
 * Undo delete of the last drawn Redline
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_undoDeleteLastRedline(floorplan_div: string): void;
/**
 * Clears all redlines in drawing
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteAllRedlines(): void;
/**
 * Clears all stickynotes in drawing
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteAllStickyNotes(): void;
/**
 * Loads redlines and sticky notes to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
* @param {object} custom_content - custom controlled information
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadStickyNotesRedlines(floorplan_div: string, custom_content: object): void;
export function cvjs_loadStickyNotesRedlinesTimer(): void;
/**
 * Deletes a single redline
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteSingleRedline(floorplan_div: string): void;
export function cvjs_saveScreenAsImage_UploadSharepointListItem(serverPath: any, image_fileName: any, user_name: any, list_name: any, record_id: any): void;
/**
 * Loads a set of drawings, apply page size, page orientation and resolution to each page/drawing.
 * Produce a multi-page PDF out of the set of drawing.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string[]} drawingFilesArray - String array with name and location of drawings
 * @param {string[]} pageOrientationArray - String array with orientation of drawings: landscape/portrait
 * @param {string[]} pageSizeArray - String array with papersizes of drawings
 * @param {string[]} pageResolutionArray - Array with page resolutions
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_batchConvertDrawingsToPDF(drawingFilesArray: any, pageOrientationArray: any, pageSizeArray: any, pageResolutionArray: string[]): void;
export function cvjs_batchConvertOnLoadEndCustomMethod(): void;
/**
 * Clears the drawing from any highlight or modals active on Space Objects
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearDrawingSpaceObjects(): void;
export function cvjs_clearDrawing(): void;
/**
 * Clears the drawing from any highlight or modals active on StickyNotes
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearDrawingStickyNotes(): void;
/**
 * Clears the drawing from any highlight or modals active on Hyperlinks
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearDrawingHyperlinks(): void;
/**
 * Clears the drawing from any redlines
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearDrawingRedlines(): void;
/**
 * Update redlines after page change
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_updateDrawingRedlines(redlineStickyNoteLayer: any): void;
export function cvjs_clearAllDrawing(): void;
/**
 * Highlights a URL with a given style on a given layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Id of the URL to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the URL
 * @param {string} layer - layer on which to draw the highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightURL(urlid: any, roomstyle: object, layer: string): void;
export function cvjs_highlightURL_layersort(rmid: any, roomstyle: any, layer: any, layer2: any): 1 | -1;
export function cvjs_highlightRoomCSS(rmid: any, roomstyle: any): void;
/**
 * Highlights all Space Objects with a given style on a specified external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {object} roomstyle - JSON formattet object containg the styling of the Space Objects
 * @param {string} layer - external layer on which to draw the highlights
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightAllSpaceObjects(roomstyle: object, layer: string): void;
export function cvjs_highlightAllRooms_layer(roomstyle: any, layer: any): void;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @param {string} floorplan_div - floorplan div with CADViewer instance
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpaceObjectIdDiv(rmid: string, roomstyle: object, layer: string, floorplan_div: string): void;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpaceObjectId(rmid: string, roomstyle: object, layer: string): void;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightRoomCSS_layer(rmid: string, roomstyle: object, layer: string): void;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @param {string} floorplan_div - name of the div on which the CADViewer instance is placed
 * @return {boolean} false if rmid not found otherwise true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightRoomCSS_layersortDiv(rmid: string, roomstyle: object, layer: string, floorplan_div: string): boolean;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @param {string} layer2 - external layer is repositioned and put on top of layer2
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightRoomCSS_layersort(rmid: string, roomstyle: object, layer: string, layer2: string): 1 | -1;
/**
 * Highlights a Space Object bordr with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @param {string} floorplan_div - name of the div on which the CADViewer instance is placed
 * @param {float} lineWeightFactor - scale factor on border line weight
 * @return {boolean} false if rmid not found otherwise true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpaceBorderCSS_layersortDiv(rmid: string, roomstyle: object, layer: string, floorplan_div: string, lineWeightFactor: number): boolean;
/**
 * Highlights a Space Object bordr with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} Id - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @param {string} layer - external layer on which to draw the highlight
 * @param {string} layer2 - layer is repositioned and put on top of layer2
 * @param {float} lineWeightFactor - scale factor on border line weight
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpaceBorderCSS_layersort(rmid: any, roomstyle: object, layer: string, layer2: string, lineWeightFactor: number): 1 | -1;
export function cvjs_highlightFixtureCSS_layersort(rmid: any, roomstyle: any, layer: any, layer2: any, scale: any): 1 | -1;
export function cvjs_highlightRoomRGB(rmid: any, r: any, g: any, b: any): void;
export function cvjs_highlightRoomHex(rmid: any, hex: any): void;
export function cvjs_highlightRoomByIdHex(rmid: any, hex: any): void;
/**
* Highlight a Space Object using defined cvjs_selectColors
*
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of space object modal to highlight
* @param {boolean} cleardrawing - clears all other highlights, before highlight, default is true, false will accumulate highlights
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightRoomImmediate(rmid: string, cleardrawing: boolean): string | number;
export function cvjs_highlightRoomImmediateHyperlinks(rmid: any): string | number;
export function cvjs_highlightRoomImmediateStickyNotes(rmid: any): string | number;
export function cvjs_highlightRoomImmediateNoClearDrawing(rmid: any): string | number;
/**
* Activate modal on Space Object.
* <br><br><strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of space object modal to activate
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation: [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}, implements [interface commands]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_activateSpaceObjectModal_Id(rmid: string): void;
/**
* Activate modal on Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} node - Node of space object modal to activate
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_activateSpaceObjectModal_Node(node: string): void;
export function cvjs_mysimple_encode(outputstring: any): string;
/**
 * Set the license key path, typically a path relative to the calling document, for example as ../javascripts
 * The command will activate the license key
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} licensePath - path to the license key location
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLicenseKeyPath(licensePath: string): void;
/**
 * Pass over the license key directly
 * The command will activate the license key
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} licensekey - string containing the license key JSON array
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLicenseKeyDirect(licensekey: string): void;
export function cvjs_checkLicensePreThenLoad(floorplan_div: any, originatingContent: any, originatingFileNameNoExtension: any, originatingUsername: any, originatingPassword: any): void;
export function cvjs_checkLicense(): void;
/**
* Opens the layer list for Space Objects for setting of Room/Text Layer processing
*
* <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
* @param {string} floorplan_div - name of div containing CADViewer canvas
* @param {int} mode - mode=1 , rl/tl selection,   mode=2, hl selection   , mode = 3, layer for SpaceID selection in floodfil process
* @example
*
*  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
[The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
*
*
* @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
*/
export function cvjs_LayerListSpaceObject(floorplan_div: string, mode: number): void;
export function cvjs_LayerListSpaceClick(id: any): void;
export function cvjs_LayerTypeSpaceClick(id: any, mode: any): void;
/**
 * Calls server side PHP controller to fetch file list from Sharepoint server. A CAD server tree is built for jstree file selector.
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_generateShareFileDrawingList(): void;
export function cvjs_buildShareFileDrawingSelector(): void;
/**
 * Sets the insertion location of QR Codes
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} PercentXFromLowerLeft - distance in x, percent of total width from lower left
 * @param {int} PercentYFromLowerLeft - distance in y, percent of total height from lower left
 * @param {int} cvjs_widthPercent - width of QR code, in percent of total width
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setQRCodeInsertion(PercentXFromLowerLeft: number, PercentYFromLowerLeft: number, widthPercent: any): void;
/**
 * Sets the mode for loading multiple redlines and overlay the previous loaded
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode: true to overlay redlines, false to clear redline when new is loaded, default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLoadMultipleRedlinesStickyNotes(mode: boolean): void;
/**
 * Identify the id of the last Object Space selected - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} objectId - The objectId is (-1) in case of no current object selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_idObjectClicked(): string;
/**
 * Identify the id of the last Object Space selected - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} objectId - The objectId is (-1) in case of no current object selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_IdObjectClicked(): string;
/**
 * Identify the name of the last Object Space selected - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} Name - The Name is (-1) in case of no current object selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_NameObjectClicked(): string;
/**
 * Identify the node identifier of the last Object Space selected - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} nodeId - The nodeId is (-1) in case of no current object selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_NodeObjectClicked(): string;
/**
 * Identify the node identifier of the last Sticky Note selected - Object Spaces, Sticky Notes and Redlines are differentiated.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {string} nodeId - The nodeId is (-1) in case of no current object selected
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_StickyNoteClicked(): string;
/**
 * Resize CADViewer canvas after browser window changes, automatic adjustment based on canvas size and location
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} model3D - name of canvas element containing 3D model
 * @param {string} floorplan - name of SVG element containing floorplan
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_resizeWindow_3D(model3D: string, floorplan: string): void;
export function cvjs_hidePop(): any;
export function cvjs_redrawPop(): void;
export function cvjs_pick_space(trigger: any): void;
export function cvjs_zoomHere(): void;
/**
 * Zoom in over the extents of an object using a zoom factor
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {String} rmid - Id of the Space Object to zoom over
 * @param {float} factor - zoom factor to zoom in over in percent
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomHere_ObjectId(rmid: string, factor: number): void;
/**
 * Zoom in over the extents of an object using a zoom factor
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {String} rmid - Id of the Space Object to zoom over
 * @param {float} factor - zoom factor to zoom in over in percent
 * @param {String} floorplan_div - floorplan div to zoom over
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomHere_ObjectIdDiv(rmid: string, factor: number, floorplan_div: string): void;
/**
 * Zoom in over the extents of an object using a zoom factor
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {String} node - NODE_ node object
 * @param {float} factor - zoom factor to zoom in over
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomHere_Factor(node: string, factor: number): void;
/**
 * Zoom in over the extents of an handle object using a zoom factor
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {String} handle - handle object
 * @param {float} factor - zoom factor to zoom in over
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_zoomHere_Handle(handle: string, factor: number, floorplan_div: string): boolean;
/**
 * Trigger a direct download of the current redline on canvas into a file for local save
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} filename - name of redline file of screen content to download, it's format extension must be .js
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_directDownloadStickyNotesRedlines(floorplan_div: string, filename: string): void;
export function cvjs_clickElem(elem: any): void;
/**
* Trigger a direct local source load of a redline file into the current canvas
*
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_directUploadStickyNotesRedlines(floorplan_div: string): void;
export function cvjs_change_datamaps(mapNr: any): void;
export function cvjs_hide_image_note(imageNote: any): void;
export function cvjs_delete_image(imageNote: any, floorplan_div: any): void;
/**
 * Sets a scale factor of Image Space Objects when placed out in the canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} factor - scalefactor, default is 1.0
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setGlobalSpaceImageObjectScaleFactor(factor: number): void;
/**
 * Sets the DGN workspace file
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} workspace - Server location of workspace file, the (your server path) in the WorkSpace is automatically set to one level up from workspace file location.
 * @param {String} workspacepath - DGN workspace internal Server Path, the (your server path) in the WorkSpace. Only use if different to one level up from workspace file location.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDgnWorkSpace(workspace: string, workspacepath: string): void;
/**
 * Sets the DGN workspace internal Server Path
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} workspacepath - DGN workspace internal Server Path, the (your server path) in the WorkSpace. Only use if different to one level up from workspace file location.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDgnWorkSpaceServerPath(workspacepath: string): void;
/**
 * Directly sets a Space Object onto the canvas and increments the current array with space objects
 * NOTE: User must take consideration to not define an ID already available.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} currentNode_name - name of the space object to be visualized at the modal header
 * @param {string} currentNode_id - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {string} currentNode_layer - layer of the Space Object
 * @param {string} currentNode_group - group of the Space Object
 * @param {string} currentNode_attributes - a list of attributes for the Space Object
 * @param {string} currentNode_attributeStatus - status of attributes list, can be populated or unpopulated, controls if data is pulled externally
 * @param {string} currentNode_type - the type attribute of the Space Object, the type is displayed at the modal header
 * @param {string} currentNode_tags - list of tags assocated with the object, for retrieval at custom developed highlight
 * @param {string} currentNode_occupancy - tag to describe occupancy, for retrieval at custom developed highlight
 * @param {string} currentNode_Path - The path of the Space Object as an SVG path
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addSingleSpaceObject(floorplan_div: string, currentNode_name: string, currentNode_id: string, currentNode_layer: string, currentNode_group: string, currentNode_attributes: string, currentNode_attributeStatus: string, currentNode_type: string, currentNode_tags: string, currentNode_occupancy: string, currentNode_Path: string): void;
/**
 * Returns a Bounding Box of Space Object in screen coordinates
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} rmid - Room ID of Space Object
 * @return {Object} myBoundingBox - upper right and lower left corner of bounding box defined by myBoundingBox.x, myBoundingBox.y, myBoundingBox.x2, myBoundingBox.y2
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_ObjectBoundingBox_ScreenCoord(rmid: number): any;
/**
 * Highlight a Space Object with a css settings of a Color Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {Object} colorobject - Styleobject to apply to Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpaceObjectDirect(floorplan_div: string, objectID: string, colorobject: any): void;
/**
 * Clear the Highlight a Space Object and returns to default settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearHighlightSpaceObjectDirect(floorplan_div: string, objectID: string): void;
/**
 * Clear all Highlight on all Space Objects and returns to default settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllHighlightSpaceObjectDirect(floorplan_div: string): void;
/**
 * Modify a Fixed Size Space Object Custom Rectangle content
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} spaceObjectId - Unique ID of the space object. NOTE!
 * @param {string} svgImagePath - name of path containing wallpaper object
 * @param {Object} textArray - array with lines of text content in Space Object
 * @param {float} scaleFactor - scale factor at insertion, 1.0 is default
 * @param {Object} textStyles - object containing colors and style of each line of text in the Space Object
 * @param {Array} scaleText - array containing relative size af each line of text in the Space Object
 * @param {Array} hexColorText - array containing color of each line of text in the Space Object
 * @param {float} leftFactor - left adjustment factor of text in the Space Object
 * @return {boolean} flag - true if objectID exists, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_modifySpaceObjectDirectXY(floorplan_div: string, spaceObjectId: string, svgImagePath: string, textArray: any, scaleFactor: number, textStyles: any, scaleText: any[], hexColorText: any[], leftFactor: number): boolean;
export function cvjs_coreModifySpaceObjectDirectXY(xcor: any, ycor: any, this_Node_underbar: any, spaceObjectId: any): void;
/**
 * Moves a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {int} coordinate_flag - 0 is SVG coordinates, 1 is DWG coordinates, 0 is default
 * @param {int} xcor - x coordinate
 * @param {int} ycor - y coordinate
 * @return {boolean} flag - true if objectID exists, false otherwise
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_moveSpaceObjectDirectXY(floorplan_div: string, objectID: string, coordinate_flag: number, xpos: any, ypos: any): boolean;
/**
 * Get current Space Object Coordinates
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @param {int} coordinate_flag - 0 is SVG coordinates, 1 is DWG coordinates, 0 is default
 * @return {Array} coords - x and y coordinate of object , null if undefined
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectDirectXYCoord(floorplan_div: string, objectID: string, coordinate_flag: number): any[];
/**
 * Delete Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight in "non-modal display" and for linking Space Objects with database entries
 * @return {boolean} flag - true if deleted, false if objectID undefined
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_deleteSpaceObjectDirectXY(floorplan_div: string, objectID: string): boolean;
/**
* Turn all Space Objects on
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_allSpaceObjectsOn(floorplan_div: string): void;
/**
* Turn all Space Object off
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_allSpaceObjectsOff(floorplan_div: string): void;
/**
* Set the creation layer for Space Objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} layerName - name of the layer field of the Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectsDefaultLayer(floorplan_div: string, layerName: string): void;
/**
* Get the creation layer for Space Objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @return {string} layerName - name of the default Space Object layer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectDefaultLayer(floorplan_div: string): string;
/**
* Get the associated layer name for the Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {String} ObjectID - Space Object Id on layer, -1 if none found
 * @return {string} layerName - name of the layer field of the Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getLayerForSpaceObject(floorplan_div: string, ObjectID: string): string;
export function cvjs_getLayerOnSpaceObject(floorplan_div: any, ObjectID: any): void;
/**
 * Associate Space Object with a Layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the object, used for pop-up highlight and for linking Space Objects with database entries
 * @param {string} layerName - name of the layer field of the Space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectOnLayer(floorplan_div: string, objectID: string, layerName: string): boolean;
/**
 * Set the display status of Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} objectID - id of the space object
 * @param {string} displayStatus - "on" to display, "off" to hide, default is "on"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectOnOff(floorplan_div: string, objectID: string, displayStatus: string): boolean;
/**
 * Get all Space Objects with a given layer Association
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} layerName - name of the layer field of the Space Object
 * @return {Array} IdArrary - Array with Space Object Id's
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnAllSpaceObjectsOnLayer(floorplan_div: string, layerName: string): any[];
/**
 * Sets the status On/Off of all Space Objects with a given layer Association
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @param {string} layerName - name of the layer field of the Space Object
 * @param {string} displayStatus - display status of layer "on" of "off"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_spaceObjectLayerOnOff(floorplan_div: string, layerName: string, displayStatus: string): void;
/**
 * Return a list of all Space Objects on an active layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of floorplan div
 * @return {Array} IdArrary - Array with Space Object Id's
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnActiveSpaceObjects(floorplan_div: string): any[];
/**
 * Return a JSON structure of all content of a space object clicked: <br>
 * 	var jsonStructure =  	{	"path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
 *								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform, <br>
 *								"svgx": svgx, <br>
 *								"svgy": svgx, <br>
 *								"dwgx": dwgx, <br>
 *								"dwgy": dwgy } <br>
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName,
 *                                "block" : "",
 *                               "blockAttributeId" : "",
 *                               "blockAttributeCount" : "",
 *                               "clickhandler" : "enable",
 *                                "parent": "none"
 *                               } <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {Object} jsonSpaceObject - Object with the entire space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnSpaceObjectClicked(): any;
/**
 * Return a JSON structure with  all Space Object content, each entry is of the form: <br>
 * 	SpaceObjects :[  	{	    "path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
*								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform, <br>
 *								"svgx": svgx, <br>
 *								"svgy": svgx, <br>
 *								"dwgx": dwgx, <br>
 *								"dwgy": dwgy } <br>
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName  } <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} spaceID - Id of the Space Object to return
 * @return {Object} jsonSpaceObject - Object with all space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnAllSpaceObjects(): any;
/**
 * Return a JSON structure of all content of a given ID: <br>
 * 	var jsonStructure =  	{	"path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
 *								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform, <br>
 *								"svgx": svgx, <br>
 *								"svgy": svgx, <br>
 *								"dwgx": dwgx, <br>
 *								"dwgy": dwgy,
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName,
 *                               "block" : "",
 *                               "blockAttributeId" : "",
 *                               "blockAttributeCount" : "",
 *                               "clickhandler" : "",
 *                               "parent" : "none"
 *   } <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} spaceID - Id of the Space Object to return
 * @return {Object} jsonSpaceObject - Object with the entire space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnSpaceObjectID(spaceID: string): any;
/**
 * Using a JSON structure to create a new Space Object <br>
 * 	var jsonStructure =  	{	"path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
  *								"area": area, <br>
*								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"highlightcolor": highlightcolor, <br>
 *								"selectcolor": selectcolor, <br>
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform, <br>
 *								"svgx": svgx, <br>
 *								"svgy": svgx, <br>
 *								"dwgx": dwgx, <br>
 *								"dwgy": dwgy } <br>
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName
 *                               "block" : "",
 *                               "blockAttributeId" : "",
 *                               "blockAttributeCount" : "",
 *                               "clickhandler" : "",
 *                               "parent" : ""
 *  } <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {Object} jsonSpaceObject - Object with the entire space objects content
 * @return {boolean} flag - true if created, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectDirect(jsonSpaceObject: any): boolean;
/**
 * Change the layer of a current Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentId - The current ID of the Space Object
 * @param {string} newLayer - The new layer of the Space Object
 * @return {boolean} flag - true if changed, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectLayer(currentId: string, newLayer: string): boolean;
/**
 * Set the link status Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentId - The current ID of the Space Object
 * @param {boolean} linkFlag - The new link Status of the Space Object
 * @return {boolean} flag - true if changed, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectLinkStatus(currentId: string, linkFlag: boolean): boolean;
/**
 * Change the Name of a current Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentId - The current ID of the Space Object
 * @param {string} newName - The new Name of the Space Object
 * @return {boolean} flag - true if changed, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectName(currentId: string, newName: string): boolean;
/**
 * Change the Space Type of a current Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentId - The current ID of the Space Object
 * @param {string} newType - The new Type of the Space Object
 * @return {boolean} flag - true if changed, otherwise false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectType(currentId: string, newType: string): boolean;
/**
 * Change the ID of a current Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentId - The current ID of the Space Object
 * @param {String} newId - The new ID of the Space Object
 * @return {boolean} flag - true if changed, otherwise false. Note, it cannot be changed into an existing ID
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectID(currentId: string, newId: string): boolean;
/**
 * Clear all Highlights on AutoCAD Handle tagged geometrical objects
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllHighlightHandleObjectStyles(): void;
export function cvjs_removeSingleHighlightHandleObjectStyles(id: any, handle: any): void;
/**
 * Highlights an AutoCAD Handle tagged geometrical object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} hexColor - Color of the hightlight in Hex, for example red is: #F00
 * @param {float} lineWeightFactor - factor to increase or decrease line weights, 1.0 is current line weight
 * @param {float} opacity - opacity of hexColor - 1.0 is default.
 * @param {boolean} tooltip - flag for tooltip, true generic tooltip, false none
 * @param {String} id - id of space Object, generic pass through
 * @param {String} handle - handle of space Object, generic pass through
 * @param {String} customTooltip - if custom tooltip is different from "", then customToolTip is used
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_HighlightHandleObjectStyles(hexColor: string, lineWeightFactor: number, opacity: number, tooltip: boolean, id: string, customTooltip: string): void;
/**
 * Control the highlight of AutoCAD Handle tagged geometrical objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} hexColor - Color of the hightlight in Hex, for example red is: #F00
 * @param {float} lineWeightFactor - factor to increase or decrease line weights, 1.0 is current line weight
 * @param {float} opacity - opacity of hexColor - 1.0 is default.
 * @param {boolean} tooltip - flag for tooltip, true tooltip, false none
 * @param {String} id - id of space Object, generic pass through
 * @param {String} handle - handle of space Object, generic pass through
 * @param {String} customTooltip - if custom tooltip is different from "", then customToolTip is used
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_mouseenter_handleObjectStyles(hexColor: string, lineWeightFactor: number, opacity: number, tooltip: boolean, id: string, handle: string, customTooltip: string): void;
export function cvjs_convertOrgToHex(styleString: any): any;
export function cvjs_rgbToHex(rgb: any): string;
/**
 * Reset the highlight from a AutoCAD Handle tagged geometrical objects on mouse leave
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} id - id of space Object, generic pass through
 * @param {String} handle - handle of space Object, generic pass through
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_mouseout_handleObjectStyles(id: string, handle: string): void;
/**
 * Highlights a Space Object with a given style on a given external layer
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object to highlight
 * @param {object} roomstyle - JSON formattet object containg the styling of the SpaceObject
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_highlightSpace(rmid: string, roomstyle: object): 1 | -1;
/**
 * Clears and initialize the general Space Layer for highlights
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {none}
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearSpaceLayer(): void;
/**
 * Apply a predefined pattern on a graphical Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object to add hatches
 * @param {string} graphicalPattern - name of the hatch pattern, from a predefined list of patterns:
 *  	"pattern_45degree_standard"
 *		"pattern_45degree_fine"
 *		"pattern_45degree_wide"
 *		"pattern_90degree_standard"
 *		"pattern_90degree_fine"
 *		"pattern_90degree_wide"
 *		"pattern_135degree_standard"
 *		"pattern_135degree_fine"
 *		"pattern_135degree_wide"
 *		"pattern_0degree_standard"
 *		"pattern_0degree_fine"
 *		"pattern_0degree_wide"
 *		"pattern_45degree_crosshatch_standard"
 *		"pattern_45degree_crosshatch_fine"
 * @param {string} colorHex - color of hatch in hex form, for example: #FF0000
 * @param {float} fillOpacity - fill opacity of pattern, value between 0 and 1
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hatchSpace(rmid: string, graphicalPattern: string, colorHex: string, fillOpacity: number): number;
/**
 *
 * Clears all custom tooltips
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_clearAllCustomTooltips(): void;
/**
 * Remove a multiselected object and return the original style of that object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object to add hatches
 * @param {Object} _mySpaceArray - custom array for multiselected spaces
 * @return {Object} attributesObject - object containing all styles in the selected object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_removeSelectedAndReturnOriginalStyle(rmid: string, _mySpaceArray: any): any;
/**
 * Remove a multiselected object and return the original style of that object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object to add hatches
 * @param {Object} mySpaceArray - custom array for multiselected spaces
 * @return {Object} attributesObject - object containing all styles in the selected object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnOriginalStyleAndRemoveSelected(rmid: string, mySpaceArray: any): any;
/**
 * Checks is a given space already has been selected
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object to add hatches
 * @param {array} spaceArray - array with { space, attrObj} over selected  spaces
 * @return {boolean} selected - true if selected, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnIsSpaceMultipleSelected(rmid: string, spaceArray: any[]): boolean;
/**
 * If an object has been selected, then add it to the list of Original Styles
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addSelectedToOriginalStyles(rmid: string): void;
/**
 * Return the original style of a space object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of the Space Object object
 * @return {Object} attributesObject - object containing all styles in the selected object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnSelectedOriginalStyles(rmid: string): any;
/**
 * return current settings object
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_currentSpaceSettings(): Object;
/**
 * Initialize multi-select
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_initMultiSelect(): void;
/**
 * Exit multi-select
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_exitMultiSelect(): void;
export function cvjs_getLengthOfSVGPath(path: any): number;
export function cvjs_emptyMainCanvasInAngular(floorPlan: any): void;
/**
 * Clears the canvas, needed for Framework applications, re-initalizing when entering back into the canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_emptyMainCanvas(floorplan_div: string): void;
/**
 * Controls the multiselect variable status
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} multiSelect - multiselect flag, default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setMultiSelect(multiSelect: boolean): void;
/**
 * Controls the multiselect variable status
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {boolean} multiSelect - value of multiselect flag
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getMultiSelect(): boolean;
/**
 * Remove the popup click color
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideOnlyPop(): void;
/**
 * Execute a custom implemented canvas method for drag
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {method} generic_start_method - A placeholder method executed at start drag
 * @param {method} generic_stop_method - A placeholder method executed at stopping of drag
 * @param {method} generic_move_method - A placeholder method executed when drag is initiated and movement takes place
 * @param {method} generic_init_method - A placeholder method executed when drag is initiated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_executeCustomCanvasMethod_drag(generic_start_method: any, generic_stop_method: any, generic_move_method: any, generic_init_method: any): void;
/**
 * Execute a custom implemented canvas method for mouse operation, no drag
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {method} generic_mousemove_method - A placeholder method for mouse move
 * @param {method} generic_mousedown_method - A placeholder method for mouse down
 * @param {method} generic_mouseup_method - A placeholder method for mouse up
 * @param {method} generic_dblclick_method - A placeholder method for mouse double click
 * @param {method} generic_init_method - A placeholder method executed when mouse interaction on canvas initiated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_executeCustomCanvasMethod_nodrag(generic_mousemove_method: any, generic_mousedown_method: any, generic_mouseup_method: any, generic_dblclick_method: any, generic_init_method: any): void;
/**
 * Execute a custom implemented canvas method for mouse operation, click operations
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {method} generic_mousemove_method - A placeholder method for mouse move
 * @param {method} generic_mousedown_method - A placeholder method for mouse down
 * @param {method} generic_mouseup_method - A placeholder method for mouse up
 * @param {method} generic_dblclick_method - A placeholder method for mouse double click
 * @param {method} generic_init_method - A placeholder method executed when mouse interaction on canvas initiated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_executeCustomCanvasMethod_click(generic_mousemove_method: any, generic_mousedown_method: any, generic_mouseup_method: any, generic_dblclick_method: any, generic_init_method: any): void;
/**
 * Creates the global scale and delta translation values for SVG coordinate calculaiton in custom Canvas Methods
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_customCanvasMethod_globalScale(): void;
/**
 * Returns the SVG x-coordinate of screen x-coordinate reference point
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} x - screen x-coordinate
 * @return {float} x_svg - x-coordinate in SVG
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_SVG_x(x: number): number;
/**
 * Returns the SVG y-coordinate of screen x-coordinate reference point
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} y - screen x-coordinate
 * @return {float} y_svg - x-coordinate in SVG
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_SVG_y(y: number): number;
/**
 * Checks is two rectangles are overlapping
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} l1_x - rectangle 1  upper left x-coordinate
 * @param {float} l1_y - rectangle 1  upper left y-coordinate
 * @param {float} r1_x - rectangle 1  lower right x-coordinate
 * @param {float} r1_y - rectangle 1  lower right  y-coordinate
 * @param {float} l2_x - rectangle 2  upper left x-coordinate
 * @param {float} l2_y - rectangle 2  upper left y-coordinate
 * @param {float} r2_x - rectangle 2  lower right x-coordinate
 * @param {float} r2_y - rectangle 2  lower right  y-coordinate
 * @return {boolean} overlapping - true if overlapping, false otherwise
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_rect_doOverlap(l1_x: number, l1_y: number, r1_x: number, r1_y: number, l2_x: number, l2_y: number, r2_x: number, r2_y: number): boolean;
/**
 * Returns a list with all Ids in the Space Object structure
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} id - SpaceId
 * @return {Object} boundingBox - Returns the bounding box
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectBoundingBox(id: string): any;
/**
 * Sets up a graphics Group object with the current Node_underbar
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} currentNode_underbar - the current internal ID of a Group object
 * @param {Object} graphicsObject - the graphical base object, to which the Group is built around
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addVqRoomsGraphics_newNode(currentNode_underbar: string, graphicsObject: any): void;
/**
* Creates a Space Object Group based on initialization values and a boase graphics
*
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} currentNode_underbar - the current internal ID of a Group object
* @param {Object} baseGraphics - the graphical base object, to which the Group is built around
* @param {String} customSpaceObjectId - the public exposed ID of the group object
* @param {String} customSpaceObjectName - the public exposed Name of the group object
* @param {String} customSpaceObjectType - the public exposed Type of the group object
* @param {String} customLayer - the layer of the  group object
* @param {String} customGroup - a general group name, to which the group object can be part of
* @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_createSpaceObjectGroup(currentNode_underbar: string, baseGraphics: any, customSpaceObjectId: string, customSpaceObjectName: string, customSpaceObjectType: string, customLayer: string, customGroup: string): void;
/**
 * Add graphics to a space object group
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentNode_underbar - base object name of graphics group
 * @param {Object} baseGraphics - graphics object to be added to graphics group
 * @param {string} objectTag - sub id tag inside graphics group
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addGraphicsToSpaceObjectGroup(currentNode_underbar: string, baseGraphics: any, objectTag: string): void;
/**
 * Add a graphics object or space object group to a space object group
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentNode_underbar - base object name of graphics group
 * @param {string} graphicsTag - the space object ID tag of the graphics to be added
 * @param {string} objectTag - sub id tag, to be added inside main graphics group
 * @param {boolean} isGroup - if true, the group name is detemined based on the graphicsTag
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addObjectToSpaceObjectGroup(currentNode_underbar: string, graphicsTag: string, objectTag: string, isGroup: boolean): void;
/**
 * Creates a graphical object on Canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} objectType - type of object, Implemented is 'path', polyline
 * @param {String} graphicsObject - graphics object
 * @return {Object} svgCanvasObject - returns an SVG canvas object, that can be Styled and manipulated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeGraphicsObjectOnCanvas(objectType: string, graphicsObject: string): any;
/**
 * Removes all handers associated with a custom canvas method
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_removeCustomCanvasMethod(): void;
export function cvjs_setLastObj(space: any): void;
/**
 * Brings the custom canvas to front - default
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_sendCustomCanvasToFront(floorplan_div: string): void;
/**
 * Sends the custom canvas to back   - used for drawings with static filled polygons
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_sendCustomCanvasToBack(floorplan_div: string): void;
/**
 * Creates a graphical text object on Canvas
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} x - x coord
 * @param {float} y - y coord
 * @param {String} textObject - text object
 * @return {Object} svgCanvasObject - returns an SVG canvas object, that can be Styled and manipulated
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_makeTextObjectOnCanvas(x: number, y: number, textObject: string): any;
/**
 * Sets the parameters when creating an Image Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} loadSpaceImage_LocationOrbase64Object - location of the image object (SVG or bitmap)  NOTE: the image can also be base64 encoded of type: data:image/svg+xml;base64,PHN.... or  data:image/png;base64,PHN....
 * @param {string} loadSpaceImage_ID - ID of the Image Space Object
 * @param {string} loadSpaceImage_Type - Type of the Image Space Object
 * @param {string} loadSpaceImage_Layer - name of the layer where the Space Object is positioned
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setImageSpaceObjectParameters(loadSpaceImage_LocationOrbase64Object: string, loadSpaceImage_ID: string, loadSpaceImage_Type: string, loadSpaceImage_Layer: string): void;
/**
 * Returns a list with all NODES in the Space Object structure
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {array} value - Returns Id list
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectNodeList(): any[];
/**
 * Hide an object inside a Space Object Group
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id_node - base object name(node) or id of graphics group
 * @param {string} objectTag - sub id tag, to be shown
 * @param {string} type - type of id_node, can be "id" or "node"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideObjectInSpaceObjectGroup(id_node: string, objectTag: string, type: string): void;
/**
 * Show an object inside a Space Object Group
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id_node - base object name(node) or id of graphics group
 * @param {string} objectTag - sub id tag, to be shown
 * @param {string} type - type of id_node, can be "id" or "node"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showObjectInSpaceObjectGroup(id_node: string, objectTag: string, type: string): void;
/**
 * Show only this object inside a Space Object Group
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} id_node - base object name(node) or id of graphics group
 * @param {string} objectTag - sub id tag, to be shown
 * @param {string} type - type of id_node, can be "id" or "node"
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showOnlyObjectInSpaceObjectGroup(id_node: string, objectTag: string, type: string): void;
/**
 * Show only this object inside all Space Object Group with this object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} objectTag - sub id tag, to be shown
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showOnlyObjectInAllSpaceObjectGroups(objectTag: string): void;
/**
 * Control if interactive drag inside a space, shall be disabled or not
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - false for interactive drag, true to disable, false is default.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setDisableClickDrag(flag: boolean): void;
/**
 * Control if interactive zoom adjusts lineweights dynamically
 *
 * <strong>CADViewer Internal Command Groups:</strong> [zoom]{@link https://cadviewer.com/cadviewerproapi/global.html?id=zoom}.
 * @param {boolean} flag - flag for integrated zoom adjustment of lines, default is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setInteractiveZoomWidthAdjustment(flag: boolean): void;
/**
 * Adjust minimum line thickness for all content
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {float} value - Set the minumum line thickness
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_adjustMinimumLineThickness_Value(minlinewidth: any): void;
/**
 * Set Custom implementation of Callback Methods:
 * Methods implemented:
 * cvjs_OnLoadEnd()
 * cvjs_graphicalObjectOnChange(type, graphicalObject, spaceID)
 *
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} callbackMethodName - false: standard modal on Space Object click as defined through setup method: InitCADViewerJS_ , true: if attributesStatus in the data-field of object is "unpopulated" a call is made to external method cvjs_callbackForModalDisplay(), if attributeStatus is "populated", modal is displayed.
 * @param {function} callbackMethod : method that defines the body of the Callback method
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCallbackMethod(callbackMethodName: string, callbackMethod: Function): void;
/**
 * Add multiple of text, individually formatted and styled, inside a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} txtLayer - layer to apply the text
 * @param {string} Id - Id of the graphical object in which to place the text
 * @param {float} leftScale - distance from the left border of Space Object, value between 0 and 1
 * @param {array} textStringArr - Array with the lines of text
 * @param {array} textStyleArr - Array with textstyle of text lines, formattet as a java script object with css style elements, predefined is: text_style_arial_11pt_bold , text_style_arial_9pt_normal, text_style_dialog
 * @param {array} scaleTextArr - Array with relative scale of text lines in relation to space object height, value between 0 and 1. If 0, using font-size in font object as is.
 * @param {array} hexColorTextArr - Array of color of text lines in hex form, for example: #AA00AA
 * @param {boolean} clipping - true if clipping of text inside of Space Object, false if text to cross Space Object borders
 * @param {boolean} centering - true if centering of text inside of Space Object, false is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_AddTextOnSpaceObject(txtLayer: string, Id: string, leftScale: number, textStringArr: any[], textStyleArr: any[], scaleTextArr: any[], hexColorTextArr: any[], clipping: boolean, centering: boolean): void;
/**
 * Set the Handlers for server communication - user controlled combination of front-end and back-end
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} handlerType - the following settings are implemented: 'DotNET', 'PHP', 'Servlets', 'NodeJS', 'DotNETCore'
 * @param {String} frontEndType - the following settings are implemented: 'ReactJS', 'Angular', 'JavaScript', 'VueJS'
 * @param {String} floorplan_div - the floorplan div in which CADViewer is running
 * @param {String} controllerPath - optional, set the controllerPath, used with dotNetCore
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setHandlers_FrontEnd(handlerType: string, frontEndType: string, floorplan_div: string, controllerPath: string): void;
/**
 * Set the HLALL processing at load   - handle processing is also used internally for snap in measurement
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} hlallProcessing - flag to parse handles at load, default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setHandleObjectProcessing(hlallProcessing: boolean): void;
/**
 * Styles an an AutoCAD Handle tagged geometrical object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} hexColor - Color of the hightlight in Hex, for example red is: #F00
 * @param {float} lineWeightFactor - factor to increase or decrease line weights, 1.0 is current line weight
 * @param {float} opacity - opacity of hexColor - 1.0 is default.
 * @param {String} handle - handle of space Object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_HighlightHandle(hexColor: string, lineWeightFactor: number, opacity: number, handle: string): void;
/**
 * Set a layer color
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} layerName - layer
 * @param {string} layerHexColor - hex color of layer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLayerColor(layerName: string, layerHexColor: string): void;
/**
 * Loads a SVG drawing into CADViewer as a string, this method can only be used after intialization of CADViewer through the cvjs_InitCADViewer_ methods
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - the SVG canvas object to which CADViewer is allocated
 * @param {string} basestring - the string containing the svg
 * @param {string} FileName - file name of the SVG drawing
 * @param {boolean} base64 - flag for base64 encoding
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadDrawing_SVG_string(floorplan_div: string, basestring: string, FileName: string, base64: boolean): void;
/**
 * Search the drawing for a text string with a given zoom factor. Highlight result in red. Continue search on next object in Drawing.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} searchString - the text search string
 * @param {float} zoomFactor - the zoomfactor in percent.  100 is default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_searchTextNext(searchString: string, zoomFactor: number): void;
/**
 * Set the clickhandler mode for SVG on load. The default is false <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} mode - set LefletJS mode , default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setLeafletJS(mode: boolean): void;
/**
 * Set the parsing of blocks, when processing handle objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - set the parse block flag,  default is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_handleObjectsParceBlocks(flag: boolean): void;
/**
 * Direct load of top Icon menu from a preconfigures XML configuration file, used to reload current icon menu based on browser zoom change
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div in which CADViewer is running
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_LoadTopIconMenuXML_preconfigured(floorplan_div: string): void;
/**
 * When printing to PDF, overwrite the pre-set parameters or navigated layout with this parameter
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag -  true to overwrite, false to reset to original
 * @param {string} param -  conversion parameter
 * @param {string} value -  conversion value
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_overwritePDFOutputParameter(flag: boolean, param: string, value: string): void;
/**
 * After menu initialization and generation, this method call can be used to populate a new menu XML file
 *
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of SVG element containing canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_regenerateTopIconMenuXML(floorplan_div: string): void;
/**
 * Display menu with transformed original DWG coordinates and display SVG coordinates
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div  - div in which CADViewer is implemented
 * @param {boolean} displayFlag  - flag to display coordinates, default is false.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_DisplayCoordinatesMenu(floorplan_div: string, displayFlag: boolean): void;
/**
 * Pass over the current settings for ServerLocationbackendUrl, ServerUrl and ServerLocation (or set to load location via script)
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} ServerBackEndUrl - server backend Url of back-end scripts interface
 * @param {string} ServerUrl - server location of html Element on which CADViewer is located
 * @param {string} ServerLocation - server location of html Element on which CADViewer is located
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAllServerURLsLocation(ServerBackEndUrl: string, ServerUrl: string, ServerLocation: string): void;
/**
 * Sets the server location controller
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} returnPathController - controller name
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setReturnPathController(returnPathController: string): void;
/**
 * Set the Handlers for server communication - user controlled combination of front-end and back-end
 * Pass over the current settings for ServerLocationbackendUrl, ServerUrl and ServerLocation (or set to load location via script)
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} ServerBackEndUrl - server backend Url of back-end scripts interface
 * @param {string} ServerUrl - server location of html Element on which CADViewer is located
 * @param {string} ServerLocation - server location of html Element on which CADViewer is located
 * @param {String} handlerType - the following settings are implemented: 'DotNET', 'PHP', 'Servlets', 'NodeJS', 'DotNETCore'
 * @param {String} frontEndType - the following settings are implemented: 'ReactJS', 'Angular', 'JavaScript', 'VueJS'
 * @param {String} floorplan_div - the floorplan div in which CADViewer is running
 * @param {String} controllerPath - optional, set the controllerPath, used with dotNetCore
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAllServerPaths_and_Handlers(ServerBackEndUrl: string, ServerUrl: string, ServerLocation: string, handlerType: string, frontEndType: string, floorplan_div: string, controllerPath: string): void;
/**
 * Reset the current redline operation
  *
 <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 ** @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_removeHandleFunc_Generic(): void;
/**
 * Draws a single redline line - uses global settings of color and width
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_drawRedlineSingleLine(floorplan_div: string): void;
export function setllccktrace(flag: any): void;
/**
 * Controls On/Off for pan and click operation on single Space
 *
 * <strong>CADViewer Internal Command Groups:</strong> [SpaceObjects]{@link https://cadviewer.com/cadviewerproapi/global.html?id=SpaceObject}.
 * @param {boolean} onoff  true=on, false=off, default is on
 * @param {String} spaceID  ID of the space to control
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_spaceObjectClickHandlerControlID(onoff: boolean, spaceID: string): void;
/**
 * Controls On/Off for pan and click operation on All Spaces
 *
 * <strong>CADViewer Internal Command Groups:</strong> [SpaceObjects]{@link https://cadviewer.com/cadviewerproapi/global.html?id=SpaceObject}.
 * @param {boolean} onoff  true=on, false=off, default is on
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_spaceObjectClickHandlerControlAll(onoff: boolean): void;
/**
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {*} floorplan_div
 * @param {*} ID
 * @param {*} loadSpaceImage_LocationOr64byteEncoded
 * @param {*} scale
 * @param {*} width
 * @param {*} height
 * @param {*} rotate
 * @param {*} unit
 * @param {*} jsonSpaceObject
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addSpaceObject(floorplan_div: any, ID: any, loadSpaceImage_LocationOr64byteEncoded: any, scale: any, width: any, height: any, rotate: any, unit: any, jsonSpaceObject: any): void;
/**
 *
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {*} floorplan_div
 * @param {*} ID
 * @param {*} LocationOr64byteEncodedArr
 * @param {*} layerArr
 * @param {*} scale
 * @param {*} width
 * @param {*} height
 * @param {*} rotate
 * @param {*} unit
 * @param {*} jsonSpaceObject
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_addLayeredSpaceObject(floorplan_div: any, ID: any, LocationOr64byteEncodedArr: any, layerArr: any, scale: any, width: any, height: any, rotate: any, unit: any, jsonSpaceObject: any): void;
/**
 * Return a new JSON structure with default content:
 * 	var jsonStructure =  	{	"path": path,
 *								"tags": tags,
 *								"node": node,
 *								"area": area,
 *								"outerhtml": outerHTML,
 *								"occupancy": occupancy,
 *								"name": name,
 *								"type": type,
 *								"id": id,
 *								"defaultcolor": defaultcolor,
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer,
 *								"group": group,
 *								"linked": linked,
 *								"attributes": attributes,
 *								"attributeStatus": attributeStatus,
 *								"displaySpaceObjects": displaySpaceObjects,
 *								"translate_x": translate_x,
 *								"translate_y": translate_y,
 *								"scale_x": scale_x ,
 *								"scale_y": scale_y ,
 *								"rotate": rotate,
 *								"transform": transform,
 *								"svgx": svgx,
 *								"svgy": svgx,
 *								"dwgx": dwgx,
 *								"dwgy": dwgy ,
 *                               "customContent" : mycustomcontent,
 *                               "pageNumber" : "",
 *                               "pageName" : "",
 *                               "block" : "",
 *                               "blockAttributeId" : "",
 *                               "blockAttributeCount" : ""
 *                               "clickhandler" : "enable",
 *                               "parent": "none"
 *                               }
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {Object} jsonSpaceObject - Object with the entire space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_createNewJSonSpaceObject(): any;
/**
 * Return a new JSON structure with default content:
 * 	var jsonStructure =  	{	"path": path,
 *								"tags": tags,
 *								"node": node,
 *								"area": area,
 *								"outerhtml": outerHTML,
 *								"occupancy": occupancy,
 *								"name": name,
 *								"type": type,
 *								"id": id,
 *								"defaultcolor": defaultcolor,
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer,
 *								"group": group,
 *								"linked": linked,
 *								"attributes": attributes,
 *								"attributeStatus": attributeStatus,
 *								"displaySpaceObjects": displaySpaceObjects,
 *								"translate_x": translate_x,
 *								"translate_y": translate_y,
 *								"scale_x": scale_x ,
 *								"scale_y": scale_y ,
 *								"rotate": rotate,
 *								"transform": transform,
 *								"svgx": svgx,
 *								"svgy": svgx,
 *								"dwgx": dwgx,
 *								"dwgy": dwgy ,
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName
 *                               "block" : "",
 *                               "blockAttributeId" : "",
 *                               "blockAttributeCount" : "",
 *                               "clickhandler" : "",
 *                               "parent" : ""
 * }
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *@return {Object} jsonSpaceObject - Object with the entire space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_createNewJSonSpaceObject(): any;
/**
 * Sets the mode of Space Object to either display or create
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {boolean} displayModal - flag to display SpaceObjectEditModal, if undefined modal is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_changeSpaceObjectDisplayMode(floorplan_div: string, displayModal: boolean): void;
/**
 * Internal method to resize, drag and rotate SpaceObjects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {*} node  space object node ID
 * @param {*} rmid  space object room ID
 * @param {*} spc   index for location in Space object JSON  array
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_addHandleFunc_ResizeDragSpace(node: any, rmid: any, spc: any): void;
/**
 * Interactively resize a Space Image Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_resizeSpaceImageObject(floorplan_div: string): void;
/**
 * Interactively resize a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_resizeSpaceObject(floorplan_div: string): void;
/**
 * Interactively move a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_moveSpaceObject(floorplan_div: string): void;
/**
 * Interactively rotates a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_rotateSpaceObject(floorplan_div: string): void;
/**
 * Display of Space Object structure in User Mode, with enabled seach panel
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_displaySpaceObjectsStructure(floorplan_div: string): void;
/**
 * Delete a Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_deleteSpaceObject(floorplan_div: string): void;
/**
 * Deletes all Space Objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_clearSpaceObjects(floorplan_div: string): void;
/**
 * Add a Space Object Polygon
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_addPolygonSpaceObject(floorplan_div: string): void;
/**
 * Add a Space Object Rectangle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_addRectangleSpaceObject(floorplan_div: string): void;
/**
 * Add a Space Object Circle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_addCircleSpaceObject(floorplan_div: string): void;
/**
 * Copy a Space Object Circle
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjsspace_copyCircleSpaceObject(floorplan_div: string): void;
/**
 * Replace the content of a Space Object with a Fixed Size Image Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of div containing CADViewer canvas
 * @param {string} spaceID - spaceID
 * @param {string} imagelocation - image location or base64 encoded image
 
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_replaceSpaceObjectPathWithImage(floorplan_div: string, spaceID: string, imagelocation: string): boolean;
/**
 * Loads Space Object to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @param {String} spaceObjectUrl - SpaceObject file to load
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_loadSpaceObjectsDirect(floorplan_div: string, spaceObjectUrl: string): void;
/**
 * Loads Space Object to the location defined through parameter settings
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div - div of the CADViewer canvas
 * @param {String} spaceObjectStructure - Setting of a spaceObject JSON structure in a 'SpaceObjects' array
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectsStructureDirect(floorplan_div: string, spaceObjectStructure: string): void;
/**
 * Sets the value of the CustomConversionEndpointExtension for user control of conversions, server side in end-point /callapiconversion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - value of CustomConversionEndpointExtension, default is false.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setCustomConversionEndpointExtension(flag: boolean): void;
/**
 * Extracts the current SVG on canvas, including any added objects.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} floorplan_div - name of Element on which CADViewer is located
 * @returns {string} a string containg the svg object on canvas,
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_extractSVGfromCanvas(floorplan_div: string): string;
/**
 * Download a stringObject
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} filename - name of object
 * @param {string} object - the object object to be saved
 * @param {boolean} binaryflag - true to save as binary, false is text and default
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_downloadObjectAsFile(filename: string, object: string, binaryflag: boolean): void;
/**
 * Enable or Disable Space Object processing at load
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} spaceProcessing - flag to parse spaces at load, default is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectProcessing(spaceProcessing: boolean): void;
/**
 * Returns the paqrsed SVG object loaded before pre-processing.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @returns {string} SVGobject - SVG loaded into CADViewer
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnNonPreprocessedSVG(): string;
/**
 * Returns the end-point to get SVG object loaded from Server, if remainOnServer has been set to true on CADViewer Server.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} remainOnServer - flag remove after use,  default is false = remove,
 * @returns {string} SVGobject - Url to pull SVG from server
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_restAPI_getSVGContentData(remainOnServer: boolean): string;
export function cvjs_setMouseTouchHandlers_SpaceObject(floorplan_div: any, active_floorplan_div_nr: any, room: any): void;
/**
 * Display menu with custom space icon objects for insertion
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {*} serverFolder  - folder of Space Object meny content, default is: /content/customInsertSpaceObjectMenu/
 * @param {*} fileName  - filename of json file with space objects default is: cadviewercustomspacecommands.json
 * @param {*} flag  - true to display, false to hide by default, default is false
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setSpaceObjectsCustomMenu(serverFolder: any, fileName: any, flag: any): void;
/**
 * Sets the pixel height of icon menus
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} floorplan_div  - div in which CADViewer is implemented
 * @param {boolean} pixelheight  - height of icon menu in pixels, default is 34.
 * @param {boolean} pixelheight_large  - height of large icon menu in pixels, default is 34.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setIconImageSize(floorplan_div: string, pixelheight: boolean, pixelheight_large: boolean): void;
/**
 * Change the Node of a current Space Object
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} currentNode - The current Node of the Space Object
 * @param {String} newNode - The new Node of the Space Object
 * @return {boolean} flag - true if changed, otherwise false. Note, it cannot be changed into an existing ID
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceObjectNode(currentNode: string, newNode: string): boolean;
/**
 * Hide a Space Object based in it's ID
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} spaceID - id of space object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_hideSpaceObjectID(spaceID: string): boolean;
/**
 * Show a Space Object based on it's ID
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} spaceID - id of space object
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_showSpaceObjectID(spaceID: string): boolean;
/**
* Sets the cadviewer interface version, version 7 is SVG based skin, version 6 is legacy bitmap fixed size icons
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} version - version 7 is new default, version 6 is legacy interface
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 
 */
export function cvjs_setCADViewerInterfaceVersion(version: boolean): void;
/**
 * Return a JSON structure with  all Space Object corresponding to the type designated from parameter: <br>
 * 	SpaceObjects :[  	{	    "path":   path, <br>
 *								"tags": tags, <br>
 *								"node": node, <br>
 *								"area": area, <br>
*								"outerhtml": outerHTML, <br>
 *								"occupancy": occupancy, <br>
 *								"name": name, <br>
 *								"type": type, <br>
 *								"id": id, <br>
 *								"defaultcolor": defaultcolor, <br>
 *								"highlightcolor": highlightcolor,
 *								"selectcolor": selectcolor,
 *								"layer": layer, <br>
 *								"group": group, <br>
 *								"linked": linked, <br>
 *								"attributes": attributes, <br>
 *								"attributeStatus": attributeStatus, <br>
 *								"displaySpaceObjects": displaySpaceObjects, <br>
 *								"translate_x": translate_x, <br>
 *								"translate_y": translate_y, <br>
 *								"scale_x": scale_x ,<br>
 *								"scale_y": scale_y ,<br>
 *								"rotate": rotate, <br>
 *								"transform": transform, <br>
 *								"svgx": svgx, <br>
 *								"svgy": svgx, <br>
 *								"dwgx": dwgx, <br>
 *								"dwgy": dwgy } <br>
 *                               "customContent" : "customobject",
 *                               "pageNumber" : pageNumber,
 *                               "pageName" : pageName  } <br>
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 
 * @param {String} getType - type of Space Objects to search
 * @return {Object} jsonSpaceObject - Object with all space objects content
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getSpaceObjectByType(getType: string): any;
/**
 * Returns all Redlines in a JSON object , CADViewer v7
 * @return {Object} redlineObjects is stored in a structure '{ "RedlineObjects" :[]}'
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnAllRedlineObjects(): any;
/**
 * Returns all StickyNotes in a JSON object, CADViewer v7
 * @return {Object} StickyNoteObjects is stored in a structure '{ "StickyNoteObjects" :[]}'
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnAllStickyNoteObjects(): any;
/**
 * Set all Redlines and StickyNotesbased on a JSON object, CADViewer v7
 * @param {Object} jsonObject  , redlineObjects and stickNoteObjects are stored in a structure '{ "AllObjects" :[]}'
 *
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAllRedlineStickyNoteObjects(jsonObject: any): void;
/**
 * Set all Redlines based on a JSON object, CADViewer v7
 * @param {*} redlineObjects  , redlineObjects is stored in a structure '{ "RedlineObjects" :[]}'
 * @param {*} clear , default is true, delete any redline and stickynote before insertion
 *
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAllRedlineObjects(redlineObjects: any, clear: any): void;
/**
 * Set all StickyNotes based on a JSON object, CADViewer v7
 * @param {*} stickyNoteObjects  , stickyNoteObjects is stored in a structure '{ "StickyNoteObjects" :[]}'
 * @param {*} clear , default is true, delete any redline and stickynote before insertion
 *
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setAllStickyNoteObjects(stickyNoteObjects: any, clear: any): void;
/**
 * Returns all Redlines and StickyNotes in a JSON object , CADViewer v7
 * @return {Object} allObjects is stored in a structure '{ "AllObjects" :[]}'
 * [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}. [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_returnAllRedlineStickyNoteObjects(): any;
/**
  * Sets the z-index of qtip modals
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} zindex   zindex of ztip
  *
  *
  * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setQtipZindex(zindex: number): void;
/**
  * Sets the z-index of qtip modals
  *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {int} qtip_location_my   insert location if the qtip itself
 * @param {int} qtip_location_at   insert location relative to the highlight object
  *
  *
  * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_setQtipLocation(qtip_location_my: number, qtip_location_at: number): void;
/**
* Activate modal on Space Object.
* <br><br><strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {string} rmid - Id of space object modal to activate
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation: [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}, implements [interface commands]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_changeSpaceFixedLocation(rmid: string): void;
/**
 * Set the parsing of text elements only, when processing handle objects
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {boolean} flag - set the parse block flag,  default is true
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_handleObjectsParceTextOnly(flag: boolean): void;
export function cvjs_processHandleObjects(): void;
/**
 * Get text object on ID
 *
 * <strong>CADViewer Internal Command Groups:</strong> [All]{@link https://cadviewer.com/cadviewerproapi/global.html?id=All}.
 * @param {String} id - id of object, of type cv_xxxx
 * @return {String}
 * @example
 *
 *  [See CADViewer]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html} reference implementation [CADViewer Online Demo]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 [The Sample implements]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}  selected interface commands and various [API methods]{@link https://onlinedemo.cadviewer.com/cadviewer_7_0/html/CADViewer_onlinetest_70.html}.
 *
 *
 * @see  Please reference the [CADViewer Tech Docs Reference Samples]{@link https://cadviewer.com/cadviewertechdocs/samples} for API method usage and asssociated code samples.
 */
export function cvjs_getTextOnId(id: string): string;

}
