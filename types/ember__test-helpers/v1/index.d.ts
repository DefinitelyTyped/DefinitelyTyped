// Type definitions for @ember/test-helpers 1.7
// Project: https://github.com/emberjs/ember-test-helpers
// Definitions by: Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare module '@ember/test-helpers' {
    // DOM Interaction Helpers

    export type Target = string | Element;

    export { default as click } from '@ember/test-helpers/dom/click';
    export { default as doubleClick } from '@ember/test-helpers/dom/double-click';
    export { default as tap } from '@ember/test-helpers/dom/tap';
    export { default as focus } from '@ember/test-helpers/dom/focus';
    export { default as blur } from '@ember/test-helpers/dom/blur';
    export { default as triggerEvent } from '@ember/test-helpers/dom/trigger-event';
    export { default as triggerKeyEvent } from '@ember/test-helpers/dom/trigger-key-event';
    export { default as fillIn } from '@ember/test-helpers/dom/fill-in';
    export { default as typeIn } from '@ember/test-helpers/dom/type-in';

    // DOM Query Helpers

    export { default as find } from '@ember/test-helpers/dom/find';
    export { default as findAll } from '@ember/test-helpers/dom/find-all';
    export { default as getRootElement } from '@ember/test-helpers/dom/get-root-element';

    // Routing Helpers

    export { visit, currentRouteName, currentURL } from '@ember/test-helpers/setup-application-context';

    // Rendering Helpers

    export { render, clearRender } from '@ember/test-helpers/setup-rendering-context';

    // Wait Helpers

    export { default as waitFor } from '@ember/test-helpers/dom/wait-for';
    export { default as waitUntil } from '@ember/test-helpers/wait-until';
    export { default as settled, isSettled, getSettledState } from '@ember/test-helpers/settled';

    // Pause Helpers

    export { pauseTest, resumeTest } from '@ember/test-helpers/setup-context';

    // Test Framework APIs

    export { setResolver, getResolver } from '@ember/test-helpers/resolver';
    export { default as setupContext, getContext, setContext, unsetContext } from '@ember/test-helpers/setup-context';
    export { default as teardownContext } from '@ember/test-helpers/teardown-context';
    export { default as setupRenderingContext } from '@ember/test-helpers/setup-rendering-context';
    export { default as teardownRenderingContext } from '@ember/test-helpers/teardown-rendering-context';
    export { getApplication, setApplication } from '@ember/test-helpers/application';
    export { default as setupApplicationContext } from '@ember/test-helpers/setup-application-context';
    export { default as teardownApplicationContext } from '@ember/test-helpers/teardown-application-context';
    export { default as validateErrorHandler } from '@ember/test-helpers/validate-error-handler';
    export { default as setupOnerror, resetOnerror } from '@ember/test-helpers/setup-onerror';
}

declare module '@ember/test-helpers/dom/click' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, options?: MouseEventInit): Promise<void>;
}

declare module '@ember/test-helpers/dom/double-click' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, options?: MouseEventInit): Promise<void>;
}

declare module '@ember/test-helpers/dom/tap' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, options?: object): Promise<void>;
}

declare module '@ember/test-helpers/dom/focus' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target): Promise<void>;
}

declare module '@ember/test-helpers/dom/blur' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target): Promise<void>;
}

declare module '@ember/test-helpers/dom/trigger-event' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, eventType: string, options?: object): Promise<void>;
}

declare module '@ember/test-helpers/dom/trigger-key-event' {
    import { Target } from '@ember/test-helpers';

    export type KeyEvent = 'keydown' | 'keyup' | 'keypress';

    export interface KeyModifiers {
        ctrlKey?: boolean | undefined;
        altKey?: boolean | undefined;
        shiftKey?: boolean | undefined;
        metaKey?: boolean | undefined;
    }

    export default function(target: Target, eventType: KeyEvent, key: number | string, modifiers?: KeyModifiers): Promise<void>;
}

declare module '@ember/test-helpers/dom/fill-in' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, text: string): Promise<void>;
}

declare module '@ember/test-helpers/dom/type-in' {
    import { Target } from '@ember/test-helpers';

    export default function(target: Target, text: string, options?: {delay: number}): Promise<void>;
}

declare module '@ember/test-helpers/dom/find' {
    export default function(selector: string): Element | null;
}

declare module '@ember/test-helpers/dom/find-all' {
    export default function(selector: string): Element[];
}

declare module '@ember/test-helpers/dom/get-root-element' {
    export default function(): Element;
}

declare module '@ember/test-helpers/setup-application-context' {
    export default function<Context extends object>(context: Context): Promise<Context>;
    export function visit(url: string): Promise<void>;
    export function currentRouteName(): string;
    export function currentURL(): string;
}

declare module '@ember/test-helpers/setup-rendering-context' {
    import { TemplateFactory } from 'htmlbars-inline-precompile';

    export default function<Context extends object>(context: Context): Promise<Context>;
    export function render(template: TemplateFactory): Promise<void>;
    export function clearRender(): Promise<void>;
}

declare module '@ember/test-helpers/dom/wait-for' {
    export interface Options {
        timeout?: number | undefined;
        count?: number | undefined;
        timeoutMessage?: string | undefined;
    }

    export default function(selector: string, options?: Options): Promise<Element | Element[]>;
}

declare module '@ember/test-helpers/wait-until' {
    export interface Options {
        timeout?: number | undefined;
        timeoutMessage?: string | undefined;
    }

    export default function<T>(callback: () => T, options?: Options): Promise<T>;
}

declare module '@ember/test-helpers/settled' {
    export interface SettledState {
        hasRunLoop: boolean;
        hasPendingTimers: boolean;
        hasPendingWaiters: boolean;
        hasPendingRequests: boolean;
        hasPendingTransitions: boolean | null;
        pendingRequestCount: number;
    }

    export default function(): Promise<void>;
    export function isSettled(): boolean;
    export function getSettledState(): SettledState;
}

declare module '@ember/test-helpers/setup-context' {
    import Resolver from '@ember/application/resolver';

    export default function<C extends object>(context: C, options?: { resolver?: Resolver | undefined }): Promise<C>;
    export function getContext(): object;
    export function setContext(context: object): void;
    export function unsetContext(): void;

    export function pauseTest(): Promise<void>;
    export function resumeTest(): void;
}

declare module '@ember/test-helpers/resolver' {
    import Resolver from '@ember/application/resolver';

    export function setResolver(resolver: Resolver): void;
    export function getResolver(): Resolver;
}

declare module '@ember/test-helpers/teardown-context' {
    export default function(context: object): Promise<void>;
}

declare module '@ember/test-helpers/teardown-rendering-context' {
    export default function(context: object): Promise<void>;
}

declare module '@ember/test-helpers/teardown-application-context' {
    export default function(context: object): Promise<void>;
}

declare module '@ember/test-helpers/validate-error-handler' {
    import Error from '@ember/error';

    export default function(callback?: (error: Error) => void): { isValid: boolean, message: string };
}

declare module '@ember/test-helpers/setup-onerror' {
    export default function setupOnerror(handler: (error: unknown) => void): void;
    export function resetOnerror(): void;
}

declare module '@ember/test-helpers/application' {
    import Application from '@ember/application';

    export function getApplication(): Application;
    export function setApplication(application: Application): void;
}
