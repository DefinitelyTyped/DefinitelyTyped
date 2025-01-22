type EnhanceApiReqBase = {
    /** The parsed JSON payload */
    body: Record<string, any>;
    /** HTTP request headers as an object */
    headers: Record<string, string>;
    /** URL params (e.g. ‘cat’ in /app/api/cats/$cat.mjs) */
    params: Record<string, string>;
    /** HTTP request querystring parameters as an object */
    query: Record<string, string>;
    /** HTTP request cookie as an object */
    session: Record<string, any>;
    /** HTTP request method: GET, POST, PATCH, PUT, or DELETE */
    method: string;
    /** Root-relative path of the HTTP request URL */
    path: string;
  };
  
  export type EnhanceApiReq = EnhanceApiReqBase & Record<string, any>;
  
  type EnhanceApiResBase = {
    /** HTTP response headers as an object */
    headers?: Record<string, string>;
    /** Writes passed object to the session */
    session?: Record<string, any>;
    /* Redirect path, when statusCode is 301 or 302 */
    location?: string;
    /** HTTP response status. Defaults to 200. */
    statusCode?: number;
  
    // shortcuts
    /** Shortcut for statusCode */
    status?: number;
    /** Shortcut for statusCode */
    code?: number;
    /** Shortcut to set the cache-control header. ie. no-cache */
    cacheControl?: string;
    /** Shortcut to send text/plain */
    text?: string;
    /** Shortcut to send text/xml */
    xml?: string;
    /** Shortcut to send text/javascript */
    js?: string;
    /** Shortcut to send text/css */
    css?: string;
    /** Shortcut to send text/html without Enhance rendering. Likely not wanted! */
    html?: string;
  };
  
  type EnhanceApiResJson = {
    /** JSON response, or initial state for a corresponding page */
    json?: Record<string, any>;
    /** body is incompatible when json is specified */
    body?: never;
  };
  
  type EnhanceApiResBody = {
    /** Return value of content-type set in headers. ie. text/xml */
    body?: string;
    /** json is incompatible when body is specified */
    json?: never;
  };
  
  export type EnhanceApiRes = EnhanceApiResBase &
    (EnhanceApiResJson | EnhanceApiResBody);
  
  export type EnhanceElemResult = string; // ez
  
  export type EnhanceHtmlFn = (
    // "Why not TemplateStringsArray?"
    // see https://github.com/microsoft/TypeScript/issues/33304
    strings: ReadonlyArray<string>,
    ...values: [...string[]]
  ) => EnhanceElemResult;
  
  export type EnhanceElemArg = {
    /** Enhance's primary HTML rendering function */
    html: EnhanceHtmlFn;
    /** Enhance's state object with information about markup and the data store */
    state: {
      /** HTML element attributes as an object */
      attrs: Record<string, string>;
      /** Initial state data passed to all Enhance elements */
      store: Record<string, any>;
      /** Unique ID for this instance of the element */
      instanceID: string;
      /** Context data passed to this Enhance element */
      context: Record<string, any>;
    };
  };
  
  export type EnhanceApiFn = (
    /** The parsed HTTP request */
    request: EnhanceApiReq,
  ) => Promise<EnhanceApiRes> | EnhanceApiRes;
  
  export type EnhanceApiFnChain = EnhanceApiFn[];
  
  export type EnhanceHeadFnArg = {
    /** The parsed HTTP request */
    req: EnhanceApiReq;
    /** The Resolved HTTP status code */
    status: 200 | 404 | 500;
    /** Error message, present when status is 404 or 500 */
    error?: string;
    /** Initial state data passed to all Enhance elements */
    store: Record<string, any>;
  };
  
  export type EnhanceHeadFn = (payload: EnhanceHeadFnArg) => EnhanceElemResult;
  
  export type EnhanceElemFn = (payload: EnhanceElemArg) => EnhanceElemResult;
  
  export type EnhancePageFn = EnhanceElemFn;
  
  export type EnhancePreflightFn = (
    payload: EnhanceApiReq,
  ) => Promise<Record<string, any>> | Record<string, any>;
  