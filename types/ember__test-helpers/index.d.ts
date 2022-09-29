// Type definitions for @ember/test-helpers 2.8
// Project: https://github.com/emberjs/ember-test-helpers
// Definitions by: Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import Owner from '@ember/owner';
import { TemplateFactory } from 'htmlbars-inline-precompile';

export interface TestContext {
    get(key: string): unknown;
    getProperties<K extends string>(...keys: K[]): Pick<any, K>;
    set<V>(key: string, value: V): V;
    setProperties<P extends Record<string, unknown>>(hash: P): P;
    render(template?: string | string[] | TemplateFactory): Promise<void>;
    clearRender(): void;
    factory(fullName: string): unknown;
    owner: Owner;
    pauseTest(): Promise<void>;
    resumeTest(): void;
    element: Element | Document;
}

// DOM Interaction Helpers

export type Target = string | Element | Document;

export { default as click } from '@ember/test-helpers/dom/click';
export { default as doubleClick } from '@ember/test-helpers/dom/double-click';
export { default as tap } from '@ember/test-helpers/dom/tap';
export { default as focus } from '@ember/test-helpers/dom/focus';
export { default as blur } from '@ember/test-helpers/dom/blur';
export { default as triggerEvent } from '@ember/test-helpers/dom/trigger-event';
export { default as triggerKeyEvent } from '@ember/test-helpers/dom/trigger-key-event';
export { default as tab } from '@ember/test-helpers/dom/triggerTab';
export { default as fillIn } from '@ember/test-helpers/dom/fill-in';
export { default as typeIn } from '@ember/test-helpers/dom/type-in';
export { default as select } from '@ember/test-helpers/dom/select';
export { default as scrollTo } from '@ember/test-helpers/dom/scroll-to';

// DOM Query Helpers

export { default as find } from '@ember/test-helpers/dom/find';
export { default as findAll } from '@ember/test-helpers/dom/find-all';
export { default as getRootElement } from '@ember/test-helpers/dom/get-root-element';

// Routing Helpers

export { visit, currentRouteName, currentURL } from '@ember/test-helpers/setup-application-context';

// Rendering Helpers

export { render, rerender, clearRender } from '@ember/test-helpers/setup-rendering-context';

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
