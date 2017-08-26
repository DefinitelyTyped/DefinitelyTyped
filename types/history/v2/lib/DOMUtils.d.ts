export function addEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function removeEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function getHashPath(): string;
export function replaceHashPath(path: string): void;
export function getWindowPath(): string;
export function go(n: number): void;
export function getUserConfirmation(message: string, callback: (result: boolean) => void): void;
export function supportsHistory(): boolean;
export function supportsGoWithoutReloadUsingHash(): boolean;
