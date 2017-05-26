let isString: string;
let isObject: Object;
let isNumber: number;
let isArray: Array<any>;

/**
 * ENV
 */
isObject = environment;
setEnvironmentVariable('name', 'value');
isString = getEnvironmentVariable('name');
clearEnvironmentVariable('name');
clearEnvironmentVariables();

/**
 * GLOBALS
 */
isObject = globals;
setGlobalVariable('name', 'value');
isString = getGlobalVariable('name');
clearGlobalVariable('name');
clearGlobalVariables();

/**
 * REQ
 */
isObject = request;
isObject = request.data;
isObject = request.headers;
isString = request.method;
isString = request.url;

/**
 * RES
 */
isObject = getResponseCookie('name');
isArray = responseCookies;
isString = responseBody;
isNumber = responseTime;
isObject = responseCode;
isNumber = responseCode.code;
isString = responseCode.name;
isString = responseCode.detail;

/**
 * TESTS
 */
isObject = tests;
isNumber = iteration;
isObject = data;
