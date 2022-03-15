// Type definitions for non-npm package @ember/destroyable 4.0
// Project: https://api.emberjs.com/ember/3.22/modules/@ember%2Fdestroyable
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

export function associateDestroyableChild<T extends object>(parent: object, child: T): T;

export function isDestroying(destroyable: object): boolean;

export function isDestroyed(destroyable: object): boolean;

export function destroy(destroyable: object): void;

export function assertDestroyablesDestroyed(): void;

export function enableDestroyableTracking(): void;

export function registerDestructor<T extends object>(
destroyable: T,
destructor: (destroyable: T) => void
): (destroyable: T) => void;

export function unregisterDestructor<T extends object>(
destroyable: T,
destructor: (destroyable: T) => void
): void;
