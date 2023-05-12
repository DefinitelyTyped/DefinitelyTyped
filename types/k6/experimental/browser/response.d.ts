import { SecurityDetailsObject } from './';
import { Request } from "./request";
import { Frame } from "./frame";

/**
 * Response class represents responses which are received by page.
 */
export class Response {
  /**
   * An object with HTTP headers associated with the response. All header names are
   * lower-case.
   * @returns The headers object.
   */
  allHeaders(): Record<string, string>;

  /**
   * Returns the response body.
   * @returns A buffer with response body.
   */
  body(): ArrayBuffer;

  /**
   * @returns the Frame that initiated this response
   */
  frame(): Frame;

  /**
   * An object with HTTP headers associated with the response. All header names are
   * lower-case.
   * @returns The headers object.
   */
  headers(): Record<string, string>;

  /**
   * An array with all the request HTTP response headers. Unlike `Response.headers()`, header
   * names are not lower-cased. Headers with multiple entries, such as `Set-Cookie`,
   * appear in the array multiple times.
   * @returns An array of all the request HTTP headers.
   */
  headersArray(): Array<{ name: string, value: string }>;

  /**
   * Returns the value of the header matching the name. The name is case insensitive.
   * If multiple headers have the same name (except `Set-Cookie`), they are returned
   * as a list separated by ``,``. For `Set-Cookie`, the `\n` separator is used. If
   * no headers are found, `null` is returned.
   * @param name Header name to retrieve value for.
   * @returns The header value for the given name.
   */
  headerValue(name: string): string|null;

  /**
   * Returns all values of the headers matching the name, for example `set-cookie`.
   * The name is case insensitive.
   * @param name Header name to retrieve values for.
   * @returns An array of header values for the given name.
   */
  headerValues(name: string): string[];

  /**
   * Returns the JSON representation of response body. Throws if response body is not
   * parsable via `JSON.parse`.
   * @returns JSON representation of response body.
   */
  json(): any;

  /**
   * Contains a boolean stating whether the response was successful (status in the
   * range 200-299) or not.
   * @returns a boolean stating whether the response was successful
   */
  ok(): boolean;

  /**
   * The request that was used to produce the response.
   * @returns the matching `Request` object
   */
  request(): Request;

  /**
   * Security details associated with this response.
   * @returns A matching `SecurityDetailsObject`
   */
  securityDetails(): SecurityDetailsObject|null;

  /**
   * Returns the IP address and port of the server for this response.
   * @returns The IP address and port of the server
   */
  serverAddr(): { ipAddress: string; port: number }|null;

  /**
   * Contains the status code of the response (e.g., 200 for a success).
   * @returns the status code of the response
   */
  status(): number;

  /**
   * Contains the status text of the response (e.g. usually an "OK" for a success).
   * @returns the status text of the response
   */
  statusText(): string;

  /**
   * The size of the response body and the headers.
   * @returns The size of the response body and the headers.
   */
  size(): { body: number; headers: number };

  /**
   * Contains the URL of the response.
   * @returns the URL of the response
   */
  url(): string;
}
