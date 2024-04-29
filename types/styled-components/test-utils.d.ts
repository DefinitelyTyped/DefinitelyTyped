import type { StyledComponent } from "./index";

export function find(element: HTMLElement, styledComponent: StyledComponent<any, any, any, any>): HTMLElement | null;

export function findAll(element: HTMLElement, styledComponent: StyledComponent<any, any, any, any>): NodeList | null;

export function enzymeFind<Wrapper extends { find: (selector: string) => any }>(
    wrapper: Wrapper,
    styledComponent: StyledComponent<any, any, any, any>,
): Wrapper;
