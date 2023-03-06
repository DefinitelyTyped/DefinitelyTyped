// Type definitions for correlation-id 2.1
// Project: https://github.com/toboid/correlation-id#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function withId<T>(id: string, work: () => T): T;
export function withId<T>(work: () => T): T;

export function bindId<T extends (...p: any[]) => any>(id: string, work: T): T;
export function bindId<T extends (...p: any[]) => any>(work: T): T;

export function getId(): string | undefined;
