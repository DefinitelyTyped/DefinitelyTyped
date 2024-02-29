export interface Address {
    city?: string | undefined;
    country?: string | undefined;
    postalCode?: string | undefined;
    state?: string | undefined;
    street?: string | undefined;
}

export type ISO8601Date = string;

export interface Company {
    name?: string | undefined;
    id?: string | number | undefined;
    industry?: string | undefined;
    employee_count?: number | undefined;
    plan?: string | undefined;
}

export interface Traits {
    address?: Address | undefined;
    age?: number | undefined;
    avatar?: string | undefined;
    birthday?: ISO8601Date | undefined;
    company?: Company | undefined;
    createdAt?: ISO8601Date | undefined;
    description?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    gender?: string | undefined;
    id?: string | undefined;
    lastName?: string | undefined;
    name?: string | undefined;
    title?: string | undefined;
    username?: string | undefined;
    website?: string | undefined;
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
export function trackLink(
    element: HTMLElement | HTMLElement[],
    event: string | EventCallback,
    properties?: Properties | PropertiesCallback,
): void;
export function trackForm(
    form: HTMLFormElement | HTMLElement[],
    event: string | EventCallback,
    properties?: Properties | Callback,
): void;
export function page(
    category?: string,
    name?: string,
    properties?: Properties,
    options?: Options,
    callback?: Callback,
): void;
export function group(groupId: string, traits?: Traits, options?: Options, callback?: Callback): void;
export function alias(userId: string, previousId?: string, options?: Options, callback?: Callback): void;
export function ready(callback: ReadyCallback): void;
export function debug(enable?: boolean): void;
export function on(method: string, callback: EventFiredCallback): void;
export function timeout(ms: number): void;
export function reset(): void;
