import { ReactNode } from 'react';

export type ReactEmpty = null | undefined | boolean;

export type ReactNodeList = ReactEmpty | ReactNode;

export interface ReactProviderType<T> {
    $$typeof: symbol | number;
    _context: ReactContext<T>;
}

export interface ReactContext<T> {
    $$typeof: symbol | number;
    Consumer: ReactContext<T>;
    Provider: ReactProviderType<T>;
    unstable_read: () => T;

    _calculateChangedBits: ((a: T, b: T) => number) | null;

    _currentValue: T;
    _currentValue2: T;

    // DEV only
    _currentRenderer?: object | null;
    _currentRenderer2?: object | null;
}

export interface RefObject {
    current: any;
}
