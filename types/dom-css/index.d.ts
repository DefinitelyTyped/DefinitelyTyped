import "web";

type Style = keyof CSSStyleDeclaration | (string & Record<never, never>);

declare function set(element: HTMLElement, style: string): void;
declare function set(element: HTMLElement, properties: { [P in Style]?: string | number }): void;
declare function set(element: HTMLElement, property: Style, value: string | number): void;

export = set;

declare module set {
    export { set };

    export function get(element: HTMLElement, property: Style): string;
    export function get<T extends Style[]>(element: HTMLElement, properties: T): { [P in T[number]]: string };
}
