/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

import './page';
import './touchscreen';
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
