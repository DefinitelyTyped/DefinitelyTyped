export function associateDestroyableChild<T extends object>(parent: object, child: T): T;

export function isDestroying(destroyable: object): boolean;

export function isDestroyed(destroyable: object): boolean;

export function destroy(destroyable: object): void;

export function assertDestroyablesDestroyed(): void;

export function enableDestroyableTracking(): void;

export function registerDestructor<T extends object>(
    destroyable: T,
    destructor: (destroyable: T) => void,
): (destroyable: T) => void;

export function unregisterDestructor<T extends object>(destroyable: T, destructor: (destroyable: T) => void): void;
