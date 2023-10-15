// Type definitions for disposable-email 0.2
// Project: https://github.com/disposable/disposable#readme
// Definitions by: Zeeshan Ahmad <https://github.com/ziishaned>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function validate(domainOrEmail: string): boolean;
export function validate(domainOrEmail: string, callback: (error: null, isValid: boolean) => void): void;
