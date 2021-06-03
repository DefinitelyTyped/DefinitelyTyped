// Type definitions for segment-api 4.13
// Project: https://github.com/padcom/segment-api
// Definitions by: Matthias Hryniszak <https://github.com/padcom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export interface Address {
  city?: string;
  country?: string;
  postalCode?: string;
  state?: string;
  street?: string;
}

export type ISO8601Date = string;

export interface Company {
  name?: string;
  id?: string|number;
  industry?: string;
  employee_count?: number;
  plan?: string;
}

export interface Traits {
  address?: Address;
  age?: number;
  avatar?: string;
  birthday?: ISO8601Date;
  company?: Company;
  createdAt?: ISO8601Date;
  description?: string;
  email?: string;
  firstName?: string;
  gender?: string;
  id?: string;
  lastName?: string;
  name?: string;
  title?: string;
  username?: string;
  website?: string;
}

export interface Options {
  [key: string]: any;
}
export interface Properties {
  [key: string]: any;
}
export type Callback = (err: string) => void;
export type PropertiesCallback = () => Properties;
export type EventCallback = () => string;
export type ReadyCallback = () => void;
export type EventFiredCallback = (event: string, properties: Properties, options: Options) => void;

export function init(key: string): void;
export function identify(userId: string, traits?: Traits, options?: Options, callback?: Callback): void;
export function track(event: string, properties?: Properties, options?: Options, callback?: Callback): void;
export function trackLink(element: HTMLElement|HTMLElement[], event: string|EventCallback, properties?: Properties|PropertiesCallback): void;
export function trackForm(form: HTMLFormElement|HTMLElement[], event: string|EventCallback, properties?: Properties|Callback): void;
export function page(category?: string, name?: string, properties?: Properties, options?: Options, callback?: Callback): void;
export function group(groupId: string, traits?: Traits, options?: Options, callback?: Callback): void;
export function alias(userId: string, previousId?: string, options?: Options, callback?: Callback): void;
export function ready(callback: ReadyCallback): void;
export function debug(enable?: boolean): void;
export function on(method: string, callback: EventFiredCallback): void;
export function timeout(ms: number): void;
export function reset(): void;
