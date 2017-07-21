// Type definitions for jSuite
// Project: https://github.com/darrenthill/jsuite
// Definitions by: Darren Hill <https://github.com/darrenhillconsulting>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="suitescript"/>
/// <reference types="jquery" />

interface Iconfig {
    logging?: boolean;
    smartConvert?: boolean;
    searchId?: string;
    recordType?: string;
    filterExpression?: any;
    columns?: string;
    start?: number;
    end?: number;
    maxUnitsUsage?: number;
}
declare module jSuite {
    function getVersion(): string;
    function setLogging(toggle: boolean): void;
    function getRoleCenter(): any;
    function getUser(): any;
    function getScriptParameter(paramName: string): any;
    function getDeploymentId(): any;
    function getScriptId(): any;
    function isProduction(): any;
    function clearSublist(transaction: nlobjRecord, listType: string): void;
    function getCompanyPreference(paramName: string): any;
    function roundNum(num: number, length: number): number;
    function isNumber(n: any): boolean;
    function runSearch(config?: Iconfig): any;
    function lookupField(dataIn: any): string;
    function submitField(dataIn: any): any;
    function asyncLookupField(config: any, callback: any): void;
    function asyncSubmitField(config: any): JQueryXHR;
    function audit(title: string, message: string): void;
    function debug(title: string, message: string): void;
    function error(title: string, message: string): void;
    function emergency(title: string, message: string): void;
}
