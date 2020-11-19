// Type definitions for cloudmersive-virus-api-client 1.1
// Project: https://github.com/Cloudmersive/Cloudmersive.APIClient.NodeJS.Virus
// Definitions by: Jason Luboff <https://github.com/JLuboff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';
export enum CollectionFormatEnum {
    /**
     * Comma-separated values. Value: <code>csv</code>
     */
    CSV = ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     */
    SSV = ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     */
    TSV = '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     */
    PIPES = '|',
    /**
     * Native array. Value: <code>multi</code>
     */
    MULTI = 'multi',
}

export enum WebsiteThreatType {
    None = 'None',
    Malware = 'Malware',
    Phising = 'Phishing',
    ForcedDownload = 'ForcedDownload',
    UnableToConnect = 'UnableToConnect',
}
export interface ApiInstanceAuthentications {
    type: 'apiKey';
    in: 'header';
    name: 'Apikey';
    apiKey: string;
}

export interface ApiInstance {
    /**
     * @param basePath string - The base URL against which to resolve every API
     * call's (relative) path.
     * default https://api.cloudmersive.com
     */
    basePath: string;
    /**
     * @param authentications object - The authentication methods to be included for all API calls.
     */
    authentications: { Apikey: ApiInstanceAuthentications };
    /**
     * @param defaultHeaders string[] - The default HTTP headers to be included for all API calls.
     * default {}
     */
    defaultHeaders: string[];
    /**
     * @param timeout number - The default HTTP timeout for all API calls.
     * default 60000
     */
    timeout: number;
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @param cache boolean - If set to false an additional timestamp parameter is added to
     * all API GET calls to prevent browser caching
     * default true
     */
    cache: boolean;
    /**
     * @param enableCookies boolean - If set to true, the client will save the cookies
     * from each server response, and return them in the next request.
     * default false
     */
    enableCookies: boolean;
    /**
     * @param agent http.Agent - Used to save and return cookies in a node.js (
     * non-browser) setting, if this.enableCookies is set to true.
     */
    agent: http.Agent;
    /**
     * @param requestAgent null | http.Agent - Allow user to override superagent agent
     */
    requestAgent: null | http.Agent;
}

export interface ApiClient {
    instance: ApiInstance;
    CollectionFormatEnum: CollectionFormatEnum;
    /**
     * Parses an ISO-8601 string representation of a date value.
     * @param str string - The date value as a string.
     * @returns Date - The parsed date object.
     */
    parseDate: { (str: string): Date };
    /**
     * Converts a value to the specified type.
     * @param data string | Object - The data to convert, as a string or object.
     * @param type any - The type to return.
     * Pass a string for simple types or the constructor function for a complex type. Pass an
     * array containing the type name to return an array of that type. To return an object, pass
     * an object with one property whose name is the key type and whose value is the corresponding
     *  value type: all properties on <code>data<code> will be converted to this type.
     * @returns An instance of the specified type or null or undefined if data is null or undefined.
     */
    convertToType: { (data: string | object, type: any): any };
    /**
     * Constructs a new map or array model from REST data.
     * @param data any - The REST data.
     * @param obj any - The target object or array.
     */
    constructFromObject: { (data: any, obj: any, itemType: any): void };
}

export interface ScanFileAdvancedOptions {
    /**
     * @param allowExecutables boolean
     * Set to false to block executable files (program code) from being allowed in the input file.
     * Default is false (recommended).
     */
    allowExecutables: boolean;
    /**
     * @param allowInvalidFiles boolean
     * Set to false to block invalid files, such as a PDF file that is not really a valid PDF file,
     * or a Word Document that is not a valid Word Document.
     * Default is false (recommended).
     */
    allowInvalidFiles: boolean;
    /**
     * @param allowScripts boolean
     * Set to false to block script files, such as a PHP files, Pythong scripts, and other malicious
     * content or security threats that can be embedded in the file. Set to true to allow these
     * file types.
     * Default is false (recommended).
     */
    allowScripts: boolean;
    /**
     * @param restrictFileTypes string
     * Specify a restricted set of file formats to allow as clean as a comma-separated list of
     * file formats, such as .pdf,.docx,.png would allow only PDF, PNG and Word document files.
     *  All files must pass content verification against this list of file formats, if they do
     * not, then the result will be returned as CleanResult=false.
     * Set restrictFileTypes parameter to null or empty string to disable;
     * default is disabled.
     */
    restrictFileTypes: string;
}

export interface ScanFile {
    (inputFile: Buffer, callback: (error: any, data: VirusScanResult, response: any) => any): any;
}

export interface ScanFileAdvanced {
    (
        inputFile: Buffer,
        opts: ScanFileAdvancedOptions,
        callback: (error: any, data: VirusScanAdvancedResult, response: any) => any,
    ): any;
}

export interface ScanWebsite {
    (input: WebsiteScanRequest, callback: (error: any, data: WebsiteScanResult, response: any) => any): any;
}

export interface VirusFound {
    /**
     * @param FileName string
     * Name of the file containing the virus
     */
    FileName: string;
    /**
     * @param VirusName string
     * Name of the virus that was found
     */
    VirusName: string;
}

export interface VirusScanResult {
    /**
     * @param CleanResult boolean
     * True if the scan contained no viruses, false otherwise
     */
    CleanResult: boolean;
    /**
     * @param FoundViruses null | IVirusFound
     * Array of viruses found, if any
     */
    FoundViruses: null | VirusFound[];
}

export interface VirusScanAdvancedResult extends VirusScanResult {
    /**
     * @param ContainsExecutable boolean
     * True if the scan contained an executable (application code),
     * which can be a significant risk factor
     */
    ContainsExecutable: boolean;
    /**
     * @param ContainsInvalidFile boolean
     * True if the scan contained an invalid file (such as a PDF that is not a valid PDF,
     * Word Document that is not a valid Word Document, etc.), which can be a significant risk facto
     */
    ContainsInvalidFile: boolean;
    /**
     * @param ContainsScript boolean
     * True if the scan contained a script (such as a PHP script, Python script, etc.) which can
     * be a significant risk factor
     */
    ContainsScript: boolean;
    /**
     * @param ContainsRestrictedFileFormat boolean
     * True if the uploaded file is of a type that is not allowed based on the optional
     * restrictFileTypes parameter, false otherwise;
     * if restrictFileTypes is not set, this will always be false
     */
    ContainsRestrictedFileFormat: boolean;
    /**
     * @param VerifiedFileFormat string
     * For file format verification-supported file formats, the contents-verified file format
     *  of the file. Null indicates that the file format is not supported for contents verification.
     *  If a Virus or Malware is found, this field will always be set to Null.
     */
    VerifiedFileFormat: string;
}

export interface WebsiteScanRequest {
    /**
     * @param Url string
     * URL of the website to scan; should begin with http:// or https://
     */
    Url: string;
}

export interface WebsiteScanResult extends VirusScanResult {
    /**
     * @param WebsiteThreatType None, Malware, Phishing, ForcedDownload, UnableToConnect
     * Type of threat returned; can be None, Malware, ForcedDownload or Phishing
     */
    WebsiteThreatType: WebsiteThreatType;
    /**
     * @param WebsiteHttpResponseCode number (int32)
     * The remote server URL HTTP reasponse code; useful for debugging issues with scanning;
     * typically if the remote server returns a 200 or 300-series code this means a successful
     * response, while a 400 or 500 series code would represent an error returned from the
     * remote server for the provided URL.
     */
    WebsiteHttpResponseCode: number;
}

export interface ScanApi {
    /**
     * Scan a file for viruses
     * Scan files and content for viruses.
     * Leverage continuously updated signatures for millions of threats, and advanced
     * high-performance scanning capabilities.  Over 17 million virus and malware signatures.
     * Continuous cloud-based updates.  Wide file format support including Office, PDF, HTML, Flash.
     * Zip support including .Zip, .Rar, .DMG, .Tar, and other archive formats.
     * Multi-threat scanning across viruses, malware, trojans, ransomware, and spyware.
     * High-speed in-memory scanning delivers subsecond typical response time.
     * @param inputFile buffer - Input file to perform the operation on.
     * @param callback function - The callback function, accepting three arguments:
     * error, data, response
     */
    scanFile: ScanFile;
    /**
     * Advanced Scan a file for viruses
     * Advanced Scan files with 360-degree Content Protection across Viruses and Malware,
     * executables, invalid files, scripts, and even restrictions on accepted file types
     * with complete content verification. Customize threat rules to your needs.
     * Leverage continuously updated signatures for millions of threats,
     * and advanced high-performance scanning capabilities.
     * Over 17 million virus and malware signatures.
     * Continuous cloud-based updates.
     * Block threats beyond viruses including executables, scripts, invalid files, and more.
     * Optionally limit input files to a specific set of file types(eg PDF and Word Documents only).
     *  Wide file format support including Office, PDF, HTML, Flash.
     * Zip support including .Zip, .Rar, .DMG, .Tar, and other archive formats.
     * Multi-threat scanning across viruses, malware, trojans, ransomware, and spyware.
     * High-speed in-memory scanning delivers subsecond typical response time.
     * @param inputFile buffer - Input file to perform the operation on.
     * @param opts object - Optional parameters
     * @param opts.allowExecutables boolean - Set to false to block executable files (program code)
     * from being allowed in the input file.  Default is false (recommended).
     * @param opts.allowInvalidFiles boolean - Set to false to block invalid files, such as a
     * PDF file that is not really a valid PDF file, or a Word Document that is not a
     * valid Word Document.
     * Default is false (recommended).
     * @param opts.allowScripts boolean - Set to false to block script files, such as a
     * PHP files, Python scripts, and other malicious content or security threats that
     * can be embedded in the file.
     * Set to true to allow these file types.  Default is false (recommended).
     * @param opts.restrictFileTypes boolean - Specify a restricted set of file formats to
     * allow as clean as a comma-separated list of file formats, such as .pdf,.docx,.png
     * would allow only PDF, PNG and Word document files.  All files must pass content
     * verification against this list of file formats, if they do not, then the result
     * will be returned as CleanResult&#x3D;false. Set restrictFileTypes parameter to null or
     * empty string to disable; default is disabled.
     * @param callback function - The callback function, accepting three arguments:
     * error, data, response
     */
    scanFileAdvanced: ScanFileAdvanced;
    /**
     * Scan a website for malicious content and threats
     * Operation includes scanning the content of the URL for various types
     * of malicious content and threats, including viruses and threats (including Phishing).
     * @param input string - URL of the website to scan; should begin with http:// or https://
     * @param callback function - The callback function, accepting three arguments:
     * error, data, response
     */
    scanWebsite: ScanWebsite;
}

export class ScanApi implements ScanApi {
    constructor(apiClient?: ApiClient);
    scanFile: ScanFile;
    scanFileAdvanced: ScanFileAdvanced;
    scanWebsite: ScanWebsite;
}
export const ApiClient: ApiClient;
export const VirusFound: VirusFound;
export const VirusScanAdvancedResult: VirusScanAdvancedResult;
export const VirusScanResult: VirusScanResult;
export const WebsiteScanResult: WebsiteScanResult;
export const WebsiteScanRequest: WebsiteScanRequest;
// }
