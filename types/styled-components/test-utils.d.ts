import type { StyledComponent } from "./index"

export function find(element: HTMLElement, styledComponent: StyledComponent<any,any,any,any>): HTMLElement | null;

export function findAll(element: HTMLElement, styledComponent: StyledComponent<any,any,any,any>): NodeList | null;

export function enzymeFind(wrapper: any, styledComponent: StyledComponent<any,any,any,any>): any