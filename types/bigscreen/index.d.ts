export as namespace BigScreen;

export const element: Element;
export const enabled: boolean;

export function exit(): void;
export function onchange(element: Element): void;
export function onenter(element: Element): void;
export function onerror(element: Element, reason: string): void;
export function onexit(): void;
export function request(
    element: Element,
    onEnter?: (element: Element) => void,
    onExit?: () => void,
    onError?: (element: Element, reason: string) => void,
): void;
export function toggle(
    element?: Element,
    onEnter?: (element: Element) => void,
    onExit?: () => void,
    onError?: (element: Element, reason: string) => void,
): void;
export function videoEnabled(video: HTMLVideoElement): boolean;
