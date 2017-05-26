// Type definitions for Postman sandbox.
// Project: https://www.getpostman.com/docs/sandbox
// Definitions by: Uroš Jarc <https://github.com/urosjarc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * ENV
 */
declare const environment: Object;
declare function setEnvironmentVariable(name: string, value: string): void;
declare function getEnvironmentVariable(name: string): string;
declare function clearEnvironmentVariable(name: string): void;
declare function clearEnvironmentVariables(): void;

/**
 * GLOBALS
 */
declare const globals: Object;
declare function setGlobalVariable(name: string, value: string): void;
declare function getGlobalVariable(name: string): string;
declare function clearGlobalVariable(name: string): void;
declare function clearGlobalVariables(): void;

/**
 * REQ
 */
declare const request: {
  data: Object;
  headers: Object;
  method: string;
  url: string;
};

/**
 * RES
 */
declare function getResponseCookie(name: string): Object;
declare const responseCookies: Array<any>;
declare const responseBody: string;
declare const responseTime: number;
declare const responseCode: {
  code: number;
  name: string;
  detail: string;
};

/**
 * TESTS
 */
declare const tests: Object;
declare const iteration: number;
declare const data: Object;
