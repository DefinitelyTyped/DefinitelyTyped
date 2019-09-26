import {
  ComposedCustomEvent,
  Constructor,
  CustomElement,
  HTMLElementClass,
  EventOptions,
  PropOptions,
  WithChildren,
  WithRenderer,
  WithUpdate,
  WithComponent,
  WithLifecycle,
  WithContext,
  Mixed
} from './types';

/**
 * The define() function is syntactic sugar on top of customElements.define()
 * that allows you to specify a static is property on your constructor that is the name of the component,
 * or omit it altogether.
 */
export const define: <T extends HTMLElementClass>(ctor: T) => T;

/**
 * Emits an Event on elem that is composed, bubbles and is cancelable by default.
 * The return value of emit() is the same as dispatchEvent().
 */
export function emit(elem: EventTarget | HTMLElementClass, eventName: string, eventOptions?: EventOptions): boolean;

export function link(elem: CustomElement, target?: string): (e: ComposedCustomEvent) => void;

export const props: Readonly<{
  any: PropOptions & PropertyDecorator;
  array: PropOptions<any[]> & PropertyDecorator;
  boolean: PropOptions<boolean> & PropertyDecorator;
  number: PropOptions<number> & PropertyDecorator;
  object: PropOptions<object> & PropertyDecorator;
  string: PropOptions<string> & PropertyDecorator;
}>;

export const prop: (ops?: PropOptions) => PropertyDecorator & PropOptions;

export const shadow: (elem: CustomElement | HTMLElement) => ShadowRoot;

export const name: (componentName?: string) => string;

// Mixins
export function withComponent<T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): typeof WithComponent;

export function withComponent<
  P = Mixed,
  S = Mixed,
  C = void,
  T extends Constructor<HTMLElement> = Constructor<HTMLElement>
>(Base?: T): Constructor<WithComponent<P, S, C>> & T;
export function withUpdate<P = Mixed, S = Mixed, T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): Constructor<WithUpdate<P, S>> & T;
export function withRenderer<O = Mixed | null, T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): Constructor<WithRenderer<O>> & T;
export function withContext<C = Mixed, T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): Constructor<WithContext<C>> & T;
export function withLifecycle<T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): Constructor<WithLifecycle> & T;
export function withChildren<T extends Constructor<HTMLElement> = Constructor<HTMLElement>>(
  Base?: T
): Constructor<WithChildren> & T;
