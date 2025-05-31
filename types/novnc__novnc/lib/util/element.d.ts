export interface ElementPosition {
    x: number;
    y: number;
}
export function clientToElement(x: number, y: number, elem: HTMLElement): ElementPosition;
