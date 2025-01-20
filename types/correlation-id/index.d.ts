export function withId<T>(id: string, work: () => T): T;
export function withId<T>(work: () => T): T;

export function bindId<T extends (...p: any[]) => any>(id: string, work: T): T;
export function bindId<T extends (...p: any[]) => any>(work: T): T;

export function getId(): string | undefined;
