/// <reference types="suitescript"/>
/// <reference types="jquery" />

interface Iconfig {
    logging?: boolean | undefined;
    smartConvert?: boolean | undefined;
    searchId?: string | undefined;
    recordType?: string | undefined;
    filterExpression?: any;
    columns?: string | undefined;
    start?: number | undefined;
    end?: number | undefined;
    maxUnitsUsage?: number | undefined;
}
declare namespace jSuite {
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
