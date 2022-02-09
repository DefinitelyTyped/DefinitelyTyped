// Type definitions for cavy 3.2
// Project: https://github.com/pixielabs/cavy
// Definitions by: Tyler Hoffman <https://github.com/tyler-hoffman>
//                 Abigail McPhillips <https://github.com/AbigailMcP>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';

// Turn off automatic exporting by exporting {}.
export {};

type TestHookGeneratorWithRefCallback = (label: string, ref?: React.RefCallback<any>) => React.RefCallback<any>;

type TestHookGeneratorWithRefObject = (label: string, ref?: React.RefObject<any>) => React.RefObject<any>;

export type TestHookGenerator = TestHookGeneratorWithRefCallback & TestHookGeneratorWithRefObject;

export type WithTestHook<P extends {}> = P & { generateTestHook: TestHookGenerator };

export function hook<P extends {}>(WrappedComponent: React.ComponentClass<WithTestHook<P>>): React.ComponentClass<P>;

export function useCavy(): TestHookGenerator;

export function wrap<P extends {}>(WrappedComponent: React.ComponentClass<P> | React.FunctionComponent<P>): React.ComponentClass<P>;

export interface TesterProps {
    children: React.ReactElement;
    store: TestHookStore;
    specs: Array<(spec: TestScope) => void>;
    waitTime?: number | undefined;
    startDelay?: number | undefined;
    clearAsyncStorage?: boolean | undefined;
    reporter?: ((report: TestReport) => void) | undefined;

    // Deprecated
    sendReport?: boolean | undefined;
}

export class Tester extends React.Component<TesterProps> {
    reRender(): void;
    clearAsync(): Promise<void>;
}

export class TestHookStore {}

export class TestScope {
    component: Tester;
    findComponent(identifier: string): Promise<React.Component>;
    describe(label: string, fn: () => void): void;
    it(label: string, fn: () => void): void;
    beforeEach(fn: () => void): void;
    press(identifier: string): Promise<void>;
    fillIn(identifier: string, str: string): Promise<void>;
    focus(identifier: string): Promise<void>;
    pause(time: number): Promise<void>;
    exists(identifier: string): Promise<true>;
    notExists(identifier: string): Promise<true>;
    containsText(identifier: string, text: string): Promise<void>;
}

export interface TestResult {
    message: string;
    passed: boolean;
}

export interface TestReport {
    results: ReadonlyArray<TestResult>;
    errorCount: number;
    duration: number;
}
