/// <reference types="react"/>

export function composeHooks<T extends Record<string, (...args: unknown[]) => unknown>>(hooks: T): <P>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof T>>;
