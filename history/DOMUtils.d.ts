export const isExtraneousPopstateEvent: boolean;
export function addEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function removeEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function getConfirmation(message: string, callback: (result: boolean) => void): void;
export function supportsHistory(): boolean;
export function supportsGoWithoutReloadUsingHash(): boolean;
