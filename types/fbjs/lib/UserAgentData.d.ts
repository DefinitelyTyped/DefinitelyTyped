/**
 * Usage note:
 * This module makes a best effort to export the same data we would internally.
 * At Facebook we use a server-generated module that does the parsing and
 * exports the data for the client to use. We can't rely on a server-side
 * implementation in open source so instead we make use of an open source
 * library to do the heavy lifting and then make some adjustments as necessary.
 * It's likely there will be some differences. Some we can smooth over.
 * Others are going to be harder.
 */
declare namespace uaData {
    var browserArchitecture: string;
    var browserFullVersion: string;
    var browserMinorVersion: string;
    var browserName: string;
    var browserVersion: string;
    var deviceName: string;
    var engineName: string;
    var engineVersion: string;
    var platformArchitecture: string;
    var platformName: string;
    var platformVersion: string;
    var platformFullVersion: string;
}
export = uaData;
