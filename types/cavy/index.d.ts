// Type definitions for cavy 0.6
// Project: https://github.com/pixielabs/cavy
// Definitions by: Tyler Hoffman <https://github.com/tyler-hoffman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';

export {};

type RefCallback = (element: React.ReactNode | null) => void;

export type TestHookGenerator = (label: string, callback?: RefCallback) => RefCallback;

export type WithTestHook<T extends {}> = T & { generateTestHook: TestHookGenerator };

export function hook<T extends {}>(component: React.ComponentClass<WithTestHook<T>>): React.ComponentClass<T>;

export interface TesterProps {
    specs: Array<(spec: TestScope) => void>;
    waitTime: number;
    sendReport?: boolean;
}

export class Tester extends React.Component<TesterProps> {
    reRender(): void;
    clearAsync(): Promise<void>;
}

export class TestScope {
    component: Tester;
    findComponent(identifier: string): Promise<React.Component>;
    describe(label: string, fn: () => void): void;
    it(label: string, fn: () => void): void;
    press(identifier: string): Promise<void>;
    fillIn(identifier: string, str: string): Promise<void>;
    pause(time: number): Promise<void>;
    exists(identifier: string): Promise<true>;
    notExists(identifier: string): Promise<true>;
}
