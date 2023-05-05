/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

import './page';
import './touchscreen';
import './request';
import './response';
import './locator';
import './js_handle';

/**
 * `BrowserContexts` provide a way to operate multiple independent sessions, with
 * separate pages, cache, and cookies.
 */
export class BrowserContext {}

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

export type MouseButton = "left"|"right"|"middle";

export type KeyboardModifier = "Alt"|"Control"|"Meta"|"Shift";

export type ElementState = "attached"|"detached"|"visible"|"hidden";

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

export interface TimeoutOptions {
  /**
   * Maximum time in milliseconds. Pass 0 to disable the timeout. Default is overridden by the setDefaultTimeout option on `BrowserContext` or `Page`.
   * Defaults to 30000.
   */
  timeout?: number;
}

export interface StrictnessOptions {
  /**
   * When `true`, the call requires selector to resolve to a single element.
   * If given selector resolves to more than one element, the call throws
   * an exception. Defaults to `false`.
   */
  strict?: boolean;
}

export type ElementHandleOptions = {
  /**
   * Setting this to `true` will bypass the actionability checks (`visible`, `stable`, `enabled`).
   * Defaults to `false`.
   */
  force?: boolean,

  /**
   * If set to `true` and a navigation occurs from performing this action, it will not wait for it to complete.
   * Defaults to `false`.
   */
  noWaitAfter?: boolean,

  /**
   * Setting this to `true` will perform the actionability checks without performing the action.
   * Defaults to `false`.
   */
  trial?: boolean,
} & TimeoutOptions;

export type ElementClickOptions = ElementHandleOptions & {
  /**
   * A point to use relative to the top left corner of the element. If not supplied, a visible point of the element is used.
   */
  position?: { x: number, y: number }
};

export type KeyboardPressOptions = {
  /**
   * Milliseconds to wait between `keydown` and `keyup`.
   */
  delay?: number,

  /**
   * If set to `true` and a navigation occurs from performing this action, it will not wait for it to complete.
   * Defaults to `false`.
   */
  noWaitAfter?: boolean,
} & TimeoutOptions;

export type KeyboardMultiPressOptions = {
  /**
   * Milliseconds to wait between key presses. Defaults to `0`.
   */
  delay?: number,

  /**
   * If set to `true` and a navigation occurs from performing this action, it will not wait for it to complete.
   * Defaults to `false`.
   */
  noWaitAfter?: boolean,
} & TimeoutOptions;

export type MouseMoveOptions = ElementClickOptions & {
  /**
   * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the action. If not specified, currently pressed modifiers are used.
   */
  modifiers?: KeyboardModifier[],
};

export type MouseClickOptions = MouseMoveOptions & {
  /**
   * The mouse button to use during the action.
   * Defaults to `left`.
   */
  button?: MouseButton,

  /**
   * Milliseconds to wait between `mousedown` and `mouseup`.
   * Defaults to 0.
   */
  delay?: number,
};

export type MouseMultiClickOptions = MouseClickOptions & {
  /**
   * The number of times the action is performed.
   * Defaults to 1.
   */
  clickCount?: number,
};
