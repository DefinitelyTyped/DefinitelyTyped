/**
 * Typescript definition tests for alpinejs module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import Alpine from 'alpinejs';
import { reactive, effect, stop, toRaw } from '@vue/reactivity';

{ // Alpine.reactive
    // example usage from docs:
    // https://alpinejs.dev/advanced/reactivity#alpine-reactive
    const data = { count: 1 };
    const reactiveData = Alpine.reactive(data);
    // $ExpectType { count: number; }
    data;
    // $ExpectType number
    data.count;
    // $ExpectType number
    reactiveData.count;
}

{ // Alpine.release
    const effectRunner = Alpine.effect(() => {});
    // $ExpectType void
    Alpine.release(effectRunner);
}

{ // Alpine.effect
    // example usage from docs:
    // https://alpinejs.dev/advanced/reactivity#alpine-effect
    const data = Alpine.reactive({ count: 1 });

    // $ExpectType ReactiveEffectRunner<any>
    Alpine.effect(() => {
        console.log(data.count);
    });
}

{ // Alpine.raw
    const data = Alpine.reactive({ count: 1 });
    // $ExpectType { count: number; }
    Alpine.raw(data);
}

{ // Alpine.version
    // $ExpectType string
    Alpine.version;
}

{ // Alpine.flushAndStopDeferringMutations
    // $ExpectType void
    Alpine.flushAndStopDeferringMutations();
}

{ // Alpine.disableEffectScheduling
    // $ExpectType void
    Alpine.disableEffectScheduling(() => {
        // do something
    });
}

{ // Alpine.setReactivityEngine
    // $ExpectType void
    Alpine.setReactivityEngine({ reactive, effect, release: stop, raw: toRaw });
}

{ // Alpine.closestDataStack
    const someNode = document.body;
    // $ExpectType object[]
    Alpine.closestDataStack(someNode);
}

{ // Alpine.skipDuringClone
    // inspired by
    // https://github.com/alpinejs/alpine/blob/688200e1a4a2631c48894484f0fea9c4d409701d/packages/trap/src/index.js

    // $ExpectType (el: Node, params: DirectiveParameters, utils: DirectiveUtilities) => void
    const directiveHandler = Alpine.skipDuringClone(
        (el, { expression, modifiers}, { effect, evaluateLater}) => {
            // do something
            // $ExpectType Node
            el;
            // $ExpectType string
            expression;
            // $ExpectType string[]
            modifiers;
            // $ExpectType () => void
            effect;
            // $ExpectType (expression: string) => (result: unknown) => void
            evaluateLater;
        },
        (el, { expression, modifiers }, { evaluate }) => {
            // do something
        },
    );
    Alpine.directive('trap', directiveHandler);
}

{ // Alpine.addRootSelector
    // inspired by
    // https://github.com/alpinejs/alpine/blob/98805c323d42f74189540716c693b5dc66f0c05c/packages/alpinejs/src/directives/x-data.js

    // $ExpectType void
    Alpine.addRootSelector(() => `[${Alpine.prefixed('data')}]`);
}

{ // Alpine.addInitSelector
    // inspired by
    // https://github.com/alpinejs/alpine/blob/09951d6b5893fe99158299794fea184876e16f74/packages/portal/src/index.js

    // $ExpectType void
    Alpine.addInitSelector(() => `[${Alpine.prefixed('portal-target')}]`);
}

{ // Alpine.addScopeToNode
    // inspired by
    // https://github.com/alpinejs/alpine/blob/e75587e61dfa7913aa03886c84aea084b595383f/packages/alpinejs/src/directives/x-if.js
    // https://github.com/alpinejs/alpine/blob/98805c323d42f74189540716c693b5dc66f0c05c/packages/alpinejs/src/directives/x-data.js

    const target = document.querySelector('target')!;
    const clone = document.querySelector('clone')!;

    // $ExpectType () => void
    Alpine.addScopeToNode(clone, {}, target);

    const data = { count: 2 };
    const reactiveData = Alpine.reactive(data);
    const undo = Alpine.addScopeToNode(clone, reactiveData);
    // $ExpectType () => void
    undo;
}

{ // Alpine.deferMutations

    // $ExpectType void
    Alpine.deferMutations();
}

{ // Alpine.mapAttributes
    // inspired by
    // https://github.com/alpinejs/alpine/blob/8d4f1266b25a550d9bd777b8aeb632a6857e89d1/packages/alpinejs/src/directives/x-bind.js

    const startingWith = (s: string, r: string) => ({ name, value }: { name: string, value: unknown }) => ({ name: name.replace(s, r), value });
    const into = (i: string) => i;

    // $ExpectType void
    Alpine.mapAttributes(startingWith(':', into(Alpine.prefixed('bind:'))));
}

{ // Alpine.evaluateLater
    // example usage from docs:
    // https://alpinejs.dev/advanced/extending#introducing-reactivity

    const el = document.body;
    const expression = "2 < 5";
    // $resultType (resultCallback: (result: unknown) => void) => void
    const getThingToLog = Alpine.evaluateLater(el, expression);

    getThingToLog(thingToLog => {
        console.log(thingToLog);
    });
}

{ // Alpine.setEvaluator
    // inspired by
    // https://github.com/alpinejs/alpine/blob/b46c41fa240cd8af2dcaa29fb60fb1db0389c95a/packages/alpinejs/src/index.js

    const justExpressionEvaluator = (el: Node, expression: string) => (resultCallback: (result: unknown) => void) => resultCallback(expression);

    Alpine.setEvaluator(justExpressionEvaluator);
}

{ // Alpine.mergeProxies
    const el = document.body;

    // $ExpectType any
    const data = Alpine.mergeProxies(Alpine.closestDataStack(el));

    const one = { one: 1 };
    const two = { two: '2' };
    const three = { three: [3] };
    const four = { four: true };
    // $ExpectType { one: number; } & { two: string; } & { three: number[]; } & { four: boolean; }
    const mergedFour = Alpine.mergeProxies([one, two, three, four]);

    // $ExpectType string
    const mergedTwo = Alpine.mergeProxies(['hello', 'world']);

    // $ExpectType never
    const mergedTwoNever = Alpine.mergeProxies(['hello', 123]);
}

{ // Alpine.closestRoot
    const el = document.body;

    // $ExpectType Node | undefined
    Alpine.closestRoot(el);
    // $ExpectType Node | undefined
    Alpine.closestRoot(el, true);
}

{ // Alpine.interceptor
    // inspired by
    // https://github.com/alpinejs/alpine/blob/1ff2f77077acc4e9221b78572097e4045b67db5e/packages/persist/src/index.js

    let alias: string;
    let storage: Storage;

    // $ExpectType (initialValue: string) => string
    const persist = Alpine.interceptor<string>((initialValue, getter, setter, path, key) => {
        const lookup = alias || `_x_${path}`;
        setter(initialValue);
        Alpine.effect(() => {
            const value = getter();
            storage.setItem(lookup, JSON.stringify(value));
            setter(value);
        });
        return initialValue;
    }, (func: any) => {
        func.as = (key: string) => { alias = key; return func; };
        func.using = (target: Storage) => { storage = target; return func; };
    });
}

{ // Alpine.transition
    // inspired by
    // https://github.com/alpinejs/alpine/blob/286ac9914ac0f4c0bea1da16ea3782b15d407824/packages/collapse/src/index.js

    const el = document.body;
    const setFunction = Alpine.setStyles;
    let transitioning = false;

    // $ExpectType void
    Alpine.transition(el, setFunction, {
        during: { overflow: 'hidden' },
        start: { height: '100px' },
        end: { height: '200px' },
    }, () => transitioning = true, () => transitioning = false);
}

{ // Alpine.setStyles

    const el = document.body;

    // $ExpectType: () => void
    Alpine.setStyles(el, 'visibility: hidden');
    // $ExpectType: () => void
    Alpine.setStyles(el, { visibility: 'hidden' });
}

{ // Alpine.mutateDom
    // inspired by
    // https://github.com/alpinejs/alpine/blob/09951d6b5893fe99158299794fea184876e16f74/packages/portal/src/index.js

    const target = document.querySelector('target')!;
    const clone = document.querySelector('clone')!;

    // $ExpectType void
    Alpine.mutateDom(() => {
        target.before(clone);
        Alpine.initTree(clone);
    });
}

{ // Alpine.directive
    // example usage from docs:
    // https://alpinejs.dev/advanced/extending#method-signature

    // $ExpectType void
    Alpine.directive('[name]', (el, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {
        // $ExpectType Node
        el;
        // $ExpectType string
        value;
        // $ExpectType string[]
        modifiers;
        // $ExpectType string
        expression;
        // $ExpectType Alpine
        Alpine;
        // $ExpectType () => void
        effect;
        // $ExpectType () => void
        cleanup;
    });
}

{ // Alpine.throttle
    const limit = 200;
    const handler1 = () => { /* do something */ };

    // $ExpectType () => void
    Alpine.throttle(handler1, limit);

    const handler2 = (count: number) => `${count}`;

    // $ExpectType (count: number) => void
    Alpine.throttle(handler2);
}

{ // Alpine.debounce
    const wait = 200;
    const handler1 = () => { /* do something */ };

    // $ExpectType () => void
    Alpine.debounce(handler1, wait);

    const handler2 = (count: number) => `${count}`;

    // $ExpectType (count: number) => string
    Alpine.debounce(handler2);
}

{ // Alpine.evaluate
    // inspired by
    // https://github.com/alpinejs/alpine/blob/98805c323d42f74189540716c693b5dc66f0c05c/packages/alpinejs/src/directives/x-data.js
    const el = document.body;
    const expression = "2 < 5";
    const dataProviderContext = {};

    // $ExpectType unknown
    const data = Alpine.evaluate(el, expression, { scope: dataProviderContext });
}

{ // Alpine.initTree
    // inspired by
    // https://github.com/alpinejs/alpine/blob/09951d6b5893fe99158299794fea184876e16f74/packages/portal/src/index.js
    // https://github.com/alpinejs/alpine/blob/09951d6b5893fe99158299794fea184876e16f74/packages/alpinejs/src/clone.js
    const clone = document.body;

    // $ExpectType void
    Alpine.initTree(clone);

    const shallowWalker = (el: Node, callback: (el: Node, skip: () => void) => void) => {
        // do walking
    };
    // $ExpectType void
    Alpine.initTree(clone, shallowWalker);
}

{ // Alpine.nextTick
    // example usage from docs:
    // https://alpinejs.dev/magics/nextTick

    const $el = document.body;
    // $ExpectType void
    Alpine.nextTick(() => { console.log($el.innerText); });
}

{ // Alpine.prefixed
    // inspired by
    // https://github.com/alpinejs/alpine/blob/34b86216a51b3d67018d51b96daf970d4e9b5150/packages/alpinejs/src/directives/x-cloak.js

    // $ExpectType string
    Alpine.prefixed('cloak');

    const el = document.body;
    // $ExpectType void
    el.removeAttribute(Alpine.prefixed('cloak'));
}

{ // Alpine.prefix
    // inspired by
    // https://github.com/alpinejs/alpine/blob/7922e7fb8d54de64ebfc4814c2115293a5518ebd/tests/cypress/integration/custom-prefix.spec.js

    // $ExpectType void
    Alpine.prefix('data-x-');
}

{ // Alpine.plugin
    // example usage from docs:
    // https://alpinejs.dev/advanced/extending#bundle-module

    const MyAlpinePlugin = (alpine: typeof Alpine) => {
        alpine.directive('foo', (el, directive, utilities) => {});
        alpine.magic('foo', () => {});
    };

    // $ExpectType: void
    Alpine.plugin(MyAlpinePlugin);
}

{ // Alpine.magic
    // example usage from docs:
    // https://alpinejs.dev/advanced/extending#custom-magics

    // $ExpectType void
    Alpine.magic('now', () => {
        return (new Date()).toLocaleTimeString();
    });
    // $ExpectType void
    Alpine.magic('clipboard', () => {
        return (subject: string) => navigator.clipboard.writeText(subject);
    });
    // $ExpectType void
    Alpine.magic('clipboard', () => (subject: string) => {
        navigator.clipboard.writeText(subject);
    });
}

{ // Alpine.store
    // example usage from docs:
    // https://alpinejs.dev/essentials/state#global-state
    // https://alpinejs.dev/globals/alpine-store

    const darkModeDataContext = {
        on: false,

        toggle() {
            this.on = ! this.on;
        }
    };

    // $ExpectType void
    Alpine.store('darkMode', darkModeDataContext);

    // $ExpectType void
    (Alpine.store('darkMode') as typeof darkModeDataContext).toggle();

    // $ExpectType void
    Alpine.store('darkMode', false);

    // $ExpectType void
    Alpine.store('tabs', {
        current: 'first',

        items: ['first', 'second', 'third'],
    });
}

{ // Alpine.start
    // example usage from docs:
    // https://alpinejs.dev/upgrade-guide#need-to-call-alpine-start
    // https://alpinejs.dev/essentials/installation#as-a-module

    // $ExpectType void
    Alpine.start();
}

{ // Alpine.clone
    // inspired by
    // https://github.com/alpinejs/alpine/blob/b46c41fa240cd8af2dcaa29fb60fb1db0389c95a/tests/cypress/integration/clone.spec.js

    const original = document.getElementById('original')!;
    const copy = document.getElementById('copy')!;

    // $ExpectType void
    Alpine.clone(original, copy);
}

{ // Alpine.data
    // example usage from docs:
    // https://alpinejs.dev/essentials/state#re-usable-data
    // https://alpinejs.dev/essentials/lifecycle#element-initialization
    // https://alpinejs.dev/directives/data#re-usable-data
    // https://alpinejs.dev/directives/init#auto-evaluate-init-method
    // https://alpinejs.dev/directives/bind#bind-directives
    // https://alpinejs.dev/plugins/persist#using-persist-with-alpine-data
    // https://alpinejs.dev/globals/alpine-data

    // $ExpectType void
    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = ! this.open;
        }
    }));

    // $ExpectType void
    Alpine.data('dropdown', (initialOpenState = false) => ({
        open: initialOpenState
    }));

    // $ExpectType void
    Alpine.data('dropdown', () => ({
        init() {
            // This code will be executed before Alpine
            // initializes the rest of the component.
        }
    }));

    // $ExpectType void
    Alpine.data('dropdown', () => ({
        open: false,

        init() {
            this.$watch('open', () => {});
        }
    }));

    // $ExpectType void
    Alpine.data('dropdown', () => ({
        open: false,

        trigger: {
            ['@click']() {
                this.open = ! this.open;
            },
        },

        dialogue: {
            ['x-show']() {
                return this.open;
            },
        },
    }));
}
