// Type definitions for Azure Functions 2.0
// Project: https://github.com/Azure/Azure-Functions
// Definitions by: Jan Aagaard <https://github.com/janaagaard75>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Based on the type definitions found at https://github.com/christopheranderson/azure-functions-typescript/tree/master/src.

/// <reference types="node" />

export interface Context {
  bindings: any
  bindingData: {
    invocationId: string
    $request: {
      http: HttpRequest
      data: any
    }
    query: { [key: string]: string }
    headers: { [key: string]: string }
    req: {
      http: HttpRequest
      data: any
    }
    sys: {
      methodName: string
      /** ISO 8601, e.g. "2018-11-28T13:20:53.551099Z". */
      utcNow: string,
      randGuid: string
    }
  }
  executionContext: {
    functionDirectory: string
    functionName: string
    invocationId: string
  }
  invocationId: string
  req?: HttpRequest
  res?: HttpResponse

  /** Create a new bound function. */
  bind?(...args: Array<any>): void

  /** Inform the runtime that the function execution has finished. */
  done(
    err?: Error,
    propertyBag?: { [key: string]: any }
  ): void

  /** The streaming console log. */
  log: {
    (...message: Array<any>): void
    error(...message: Array<any>): void
    info(...message: Array<any>): void
    /** Not documented? https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#writing-trace-output-to-the-console */
    metric(...message: Array<any>): void
    verbose(...message: Array<any>): void
    warn(...message: Array<any>): void
  }
}

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Trace = 'TRACE'
}

export interface HttpRequest {
  body: { [key: string]: any } | undefined
  enableContentNegotiation: boolean
  headers: {
    'accept-encoding': string
    'accept-language': string
    'accept': string
    'connection': string
    'cookie': string
    /** E.g. "localhost:7071" */
    'host': string
    /** E.g. "1" */
    'upgrade-insecure-requests': string
    'user-agent': string
    [key: string]: string
  }
  method: HttpMethod
  originalUrl?: string
  params: { [key: string]: string }
  query: { [key: string]: string }
  rawBody: string | null
  statusCode: string
  url: string
}

export interface HttpResponse {
  body: any

  headers?: {
    'content-disposition'?: string
    'content-encoding'?: string
    'content-language'?: string
    'content-length'?: HttpStatusCode
    'content-location'?: string
    'content-md5'?: Buffer
    'content-range'?: string
    'content-type'?: string
    'expires'?: Date
    'last-modified'?: Date
    [key: string]: any
  }

  /** Skip formatting of the response. */
  isRaw?: boolean

  /** Default is `200` OK. */
  status?: HttpStatusCode | number
}

/**
 * Hypertext Transfer Protocol (HTTP) response status codes.
 *
 * Based on https://gist.github.com/RWOverdijk/6cef816cfdf5722228e01cc05fd4b094.
 */
export enum HttpStatusCode {
  /** The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued. */
  Continue = 100,

  /** The requester has asked the server to switch protocols and the server has agreed to do so. */
  SwitchingProtocols = 101,

  /**  A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost. */
  Processing = 102,

  /** Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action. */
  Ok = 200,

  /** The request has been fulfilled, resulting in the creation of a new resource. */
  Created = 201,

  /** The request has been accepted for processing, but the processing has not been completed.  The request might or might not be eventually acted upon, and may be disallowed when processing occurs. */
  Accepted = 202,

  /** The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response. SINCE HTTP/1.1. */
  NonAuthoritativeInformation = 203,

  /**
   * The server successfully processed the request and is not returning any content.
   */
  NoContent = 204,

  /** The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.  */
  ResetContent = 205,

  /** The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams. */
  PartialContent = 206,

  /** The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made. */
  MultiStatus = 207,

  /** The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again. */
  AlreadyReported = 208,

  /** The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
  ImUsed = 226,

  /** Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation. */
  MultipleChoices = 300,

  /** This and all future requests should be directed to the given URI. */
  MovedPermanently = 301,

  /** This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303. */
  Found = 302,

  /** The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a redirect with a separate GET message. SINCE HTTP/1.1. */
  SeeOther = 303,

  /** Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy. */
  NotModified = 304,

  /** The requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons. SINCE HTTP/1.1. */
  UseProxy = 305,

  /** No longer used. Originally meant "Subsequent requests should use the specified proxy." */
  SwitchProxy = 306,

  /** In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request. SINCE HTTP/1.1. */
  TemporaryRedirect = 307,

  /** The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly. */
  PermanentRedirect = 308,

  /** The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing). */
  BadRequest = 400,

  /** Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means "unauthenticated",i.e. the user does not have the necessary credentials. */
  Unauthorized = 401,

  /** Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micro payment scheme, but that has not happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests. */
  PaymentRequired = 402,

  /** The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource. */
  Forbidden = 403,

  /** The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. */
  NotFound = 404,

  /** A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource. */
  MethodNotAllowed = 405,

  /** The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. */
  NotAcceptable = 406,

  /** The client must first authenticate itself with the proxy. */
  ProxyAuthenticationRequired = 407,

  /** The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time." */
  RequestTimeout = 408,

  /** Indicates that the request could not be processed because of conflict in the request,such as an edit conflict between multiple simultaneous updates. */
  Conflict = 409,

  /** Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead. */
  Gone = 410,

  /** The request did not specify the length of its content, which is required by the requested resource. */
  LengthRequired = 411,

  /** The server does not meet one of the preconditions that the requester put on the request. */
  PreconditionFailed = 412,

  /** The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large". */
  PayloadTooLarge = 413,

  /** The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously. */
  UriTooLong = 414,

  /** The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format. */
  UnsupportedMediaType = 415,

  /** The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously. */
  RangeNotSatisfiable = 416,

  /** The server cannot meet the requirements of the Expect request-header field. */
  ExpectationFailed = 417,

  /** This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com. */
  IAmATeapot = 418,

  /** The request was directed at a server that is not able to produce a response (for example because a connection reuse). */
  MisdirectedRequest = 421,

  /** The request was well-formed but was unable to be followed due to semantic errors. */
  UnprocessableEntity = 422,

  /** The resource that is being accessed is locked. */
  Locked = 423,

  /** The request failed due to failure of a previous request (e.g., a PROPPATCH). */
  FailedDependency = 424,

  /** The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field. */
  UpgradeRequired = 426,

  /** The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict." */
  PreconditionRequired = 428,

  /** The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes. */
  TooManyRequests = 429,

  /** The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large. */
  RequestHeaderFieldsTooLarge = 431,

  /** A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451. */
  UnavailableForLegalReasons = 451,

  /** A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. */
  InternalServerError = 500,

  /** The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API). */
  NotImplemented = 501,

  /** The server was acting as a gateway or proxy and received an invalid response from the upstream server. */
  BadGateway = 502,

  /** The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state. */
  ServiceUnavailable = 503,

  /** The server was acting as a gateway or proxy and did not receive a timely response from the upstream server. */
  GatewayTimeout = 504,

  /** The server does not support the HTTP protocol version used in the request. */
  HttpVersionNotSupported = 505,

  /** Transparent content negotiation for the request results in a circular reference. */
  VariantAlsoNegotiates = 506,

  /** The server is unable to store the representation needed to complete the request. */
  InsufficientStorage = 507,

  /** The server detected an infinite loop while processing the request. */
  LoopDetected = 508,

  /** Further extensions to the request are required for the server to fulfill it. */
  NotExtended = 510,

  /** The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot). */
  NetworkAuthenticationRequired = 511
}
