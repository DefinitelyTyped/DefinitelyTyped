/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

import './page';
import './touchscreen';
import './request';
import './response';

/**
 * `BrowserContexts` provide a way to operate multiple independent sessions, with
 * separate pages, cache, and cookies.
 */
export class BrowserContext {}

/**
 * JSHandle represents an in-page JavaScript object.
 */
export class JSHandle<T = any> {}

/**
 * Frame represents the frame within a page. A page is made up of hierarchy of frames.
 */
export class Frame {}

/**
 * Request class represents requests which are sent by a page.
 */
export class Request {}

/**
 * Keyboard provides an api for managing a virtual keyboard.
 */
export class Keyboard {}

/**
 * Mouse provides an api for managing a virtual mouse.
 */
export class Mouse {}

/**
 * The Locator API makes it easier to work with dynamically changing elements.
 * Some of the benefits of using it over existing ways to locate an element
 * (e.g. Page.$()) include:
 *
 * - Helps with writing robust tests by finding an element even if the
 * underlying frame navigates.
 * - Makes it easier to work with dynamic web pages and SPAs built with Svelte,
 * React, Vue, etc.
 */
export class Locator {}

/**
 * ElementHandle represents an in-page DOM element.
 */
export class ElementHandle {}

/**
 * The Worker class represents a [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).
 */
export class Worker {}

/**
 * Represents event-specific properties. Refer to the events documentation for
 * the lists of initial properties:
 * - [DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
 * - [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent)
 * - [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
 * - [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)
 * - [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent)
 * - [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)
 * - [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
 */
export type EvaluationArgument = object;

export type PageFunction<Arg, R> = string | ((arg: Unboxed<Arg>) => R);

export type Unboxed<Arg> =
Arg extends [infer A0, infer A1] ? [Unboxed<A0>, Unboxed<A1>] :
Arg extends [infer A0, infer A1, infer A2] ? [Unboxed<A0>, Unboxed<A1>, Unboxed<A2>] :
Arg extends [infer A0, infer A1, infer A2, infer A3] ? [Unboxed<A0>, Unboxed<A1>, Unboxed<A2>, Unboxed<A3>] :
Arg extends Array<infer T> ? Array<Unboxed<T>> :
Arg extends object ? { [Key in keyof Arg]: Unboxed<Arg[Key]> } :
Arg;

export interface SelectOptionsObject {
  /**
   * Matches by `option.value`.
   */
  value?: string;

  /**
   * Matches by `option.label`.
   */
  label?: string;

  /**
   * Matches by the index.
   */
  index?: number;
}

export interface SecurityDetailsObject {
  /**
   * Common Name component of the Issuer field. The value is extracted from the
   * certificate. This should only be used for informational purposes.
   */
  issuer?: string;

  /**
   * The specific TLS protocol used. For example `TLS 1.3`.
   */
  protocol?: string;

  /**
   * Common Name component of the Subject field. The value is extracted from the
   * certificate. This should only be used for informational purposes.
   */
  subjectName?: string;

  /**
   * Unix timestamp (in seconds) specifying the exact date/time when this cert
   * becomes valid.
   */
  validFrom?: number;

  /**
   * Unix timestamp (in seconds) specifying the exact date/time when this cert
   * becomes invalid.
   */
  validTo?: number;

  /**
   * Subject Alternative Name (SAN) DNS names and IP addresses.
   */
  sanList?: string[];
}

export type ResourceType = "document"|"stylesheet"|"image"|"media"|"font"|"script"|"texttrack"|"xhr"|"fetch"|"eventsource"|"websocket"|"manifest"|"other";

export interface ResourceTiming {
  /**
   * Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC
   */
  startTime: number;

  /**
   * Time immediately before the browser starts the domain name lookup for the resource.
   * The value is given in milliseconds relative to `startTime`, -1 if not available.
   */
  domainLookupStart: number;

  /**
   * Time immediately after the browser ends the domain name lookup for the resource.
   * The value is given in milliseconds relative to `startTime`, -1 if not available.
   */
  domainLookupEnd: number;

  /**
   * Time immediately before the user agent starts establishing the connection to the server
   * to retrieve the resource. The value is given in milliseconds relative to `startTime`,
   * -1 if not available.
   */
  connectStart: number;

  /**
   * Time immediately before the browser starts the handshake process to secure the current
   * connection. The value is given in milliseconds relative to `startTime`, -1 if not available.
   */
  secureConnectionStart: number;

  /**
   * Time immediately after the user agent establishes the connection to the server
   * to retrieve the resource. The value is given in milliseconds relative to `startTime`,
   * -1 if not available.
   */
  connectEnd: number;

  /**
   * Time immediately before the browser starts requesting the resource from the server,
   * cache, or local resource. The value is given in milliseconds relative to `startTime`,
   * -1 if not available.
   */
  requestStart: number;

  /**
   * Time immediately after the browser receives the first byte of the response from the server,
   * cache, or local resource. The value is given in milliseconds relative to `startTime`,
   * -1 if not available.
   */
  responseStart: number;

  /**
   * Time immediately after the browser receives the last byte of the resource or immediately
   * before the transport connection is closed, whichever comes first. The value is given
   * in milliseconds relative to `startTime`, -1 if not available.
   */
  responseEnd: number;
}
