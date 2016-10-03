import { ConfirmationFn } from './index';

export function addEventListener(node: Node, event: string, listener: EventListener): void;
export function removeEventListener(node: Node, event: string, listener: EventListener): void;
export const getConfirmation: ConfirmationFn;
export function supportsHistory(): boolean;
export function supportsPopStateOnHashChange(): boolean;
export function supportsGoWithoutReloadUsingHash(): boolean;
