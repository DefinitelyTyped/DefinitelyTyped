// Type definitions for correlation-id 2.1
// Project: https://github.com/toboid/correlation-id#readme
// Definitions by: Nate <https://github.com/natemara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function withId(id: string, work: () => void): void;
export function withId(work: () => void): void;

export function bindId<T extends (...p: any[]) => any>(id: string, work: T): T;
export function bindId<T extends (...p: any[]) => any>(work: T): T;

export function getId(): string | undefined;
