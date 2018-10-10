// Type definitions for redom 3.12
// Project: https://github.com/redom/redom/
// Definitions by: Rauli Laine <https://github.com/RauliL>
//                 Felix Nehrke <https://github.com/nemoinho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type RedomElement = Node | RedomComponent;
export type RedomQuery = string | RedomElement;
export type RedomMiddleware = (el: HTMLElement) => void;
export type RedomQueryArgumentValue = RedomElement | string | number | { [key: string]: any } | RedomMiddleware;
export type RedomQueryArgument = RedomQueryArgumentValue | RedomQueryArgumentValue[];

export interface RedomComponent {
    el: HTMLElement;

    update?(item: any, index: number, data: any, context?: any): void;

    onmount?(): void;

    onremount?(): void;

    onunmount?(): void;
}

export interface RedomComponentConstructor {
    new (): RedomComponent;
}

export class ListPool {
    constructor(View: RedomComponentConstructor, key?: string, initData?: any);

    update(data: any[], context?: any): void;
}

export class List implements RedomComponent {
    el: HTMLElement;

    constructor(parent: RedomQuery, View: RedomComponentConstructor, key?: string, initData?: any);

    update(data: any[], context?: any): void;

    onmount?(): void;

    onremount?(): void;

    onunmount?(): void;

    static extend(parent: RedomQuery, View: RedomComponentConstructor, key?: string, initData?: any): RedomComponentConstructor;
}

export class Place implements RedomComponent {
    el: HTMLElement;

    constructor(View: RedomComponentConstructor, initData?: any);

    update(visible: boolean, data?: any): void;
}

export class Router implements RedomComponent {
    el: HTMLElement;

    constructor(parent: RedomQuery, Views: RouterDictionary, initData?: any);

    update(route: string, data?: any): void;
}

export interface RouterDictionary {
    [key: string]: RedomComponentConstructor;
}

export function html(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement;
export function h(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement;
export function el(query: RedomQuery, ...args: RedomQueryArgument[]): HTMLElement;

export function listPool(View: RedomComponentConstructor, key?: string, initData?: any): ListPool;
export function list(parent: RedomQuery, View: RedomComponentConstructor, key?: string, initData?: any): List;

export function mount(parent: RedomElement, child: RedomElement, before?: RedomElement): RedomElement;
export function unmount(parent: RedomElement, child: RedomElement): RedomElement;

export function place(View: RedomComponentConstructor, initData?: any): Place;

export function router(parent: RedomQuery, Views: RouterDictionary, initData?: any): Router;

export function setAttr(view: RedomElement, arg1: string | object, arg2?: string): void;

export function setStyle(view: RedomElement, arg1: string | object, arg2?: string): void;

export function setChildren(parent: RedomElement, children: RedomElement[]): void;

export function svg(query: RedomQuery, ...args: RedomQueryArgument[]): SVGElement;
export function s(query: RedomQuery, ...args: RedomQueryArgument[]): SVGElement;

export function text(str: string): Text;

export namespace list {
    function extend(parent: RedomQuery, View: RedomComponentConstructor, key?: string, initData?: any): RedomComponentConstructor;
}

export namespace svg {
    function extend(query: RedomQuery): RedomComponentConstructor;
}
