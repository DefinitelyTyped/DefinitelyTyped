import { module, test } from 'qunit';
import Application from '@ember/application';
import hbs from 'htmlbars-inline-precompile';
import { setupTest, setupRenderingTest } from 'ember-qunit';

import {
    TestContext,
    click,
    doubleClick,
    tap,
    focus,
    blur,
    tab,
    triggerEvent,
    triggerKeyEvent,
    typeIn,
    fillIn,
    render,
    rerender,
    find,
    findAll,
    getRootElement,
    pauseTest,
    resumeTest,
    scrollTo,
    select,
    waitFor,
    waitUntil,
    settled,
    isSettled,
    getSettledState,
    visit,
    currentURL,
    currentRouteName,
    setApplication,
    setupOnerror,
    resetOnerror
} from '@ember/test-helpers';

interface LocalContext extends TestContext {
    something: 'cool';
}

// QUnit expects `function` instead of `() => {}` because it does its "magic"
// via setting things up on `this`. An antipattern, perhaps, but a long-standing
// and deeply-entrenched one.
/* tslint:disable:only-arrow-functions */
module('proper module', function (hooks) {
    setupTest(hooks);
    setupRenderingTest(hooks);

    hooks.beforeEach(function (assert) {
        assert.ok(true);
    });

    // https://github.com/emberjs/ember-test-helpers/blob/f07e86914f2a3823c4cb6787307f9ba2bf447e68/tests/unit/setup-context-test.js
    test('it sets up this.owner', function (assert) {
        const { owner } = this;
        assert.ok(owner, 'owner was setup');
        assert.equal(typeof owner.lookup, 'function', 'has expected lookup interface');
        owner; // $ExpectType Owner
    });

    test('can pauseTest to be resumed "later"', async function(assert) {
        const promise = this.pauseTest();

        this.resumeTest();

        await promise;
        assert.ok(true);
    });

    // https://github.com/emberjs/ember-test-helpers/blob/fb4c8d4cd36b54728ce180227f865b1fa0162632/tests/unit/setup-rendering-context-test.js
    test('render exposes an `.element` property', async function(assert) {
        await this.render(hbs`<p>Hello!</p>`);

        assert.equal(this.element.textContent, 'Hello!');
    });

    test('without custom test context, it does not "work"', function (assert) {
        // @ts-expect-error
        this.something;
        assert.notOk(true);
    });

    test('it can work with custom test contexts', function (this: LocalContext, assert) {
        assert.equal(this.something, 'cool');
    });
});
/* tslint:enable:only-arrow-functions */

const MyApp = Application.extend({ modulePrefix: 'my-app' });

setApplication(MyApp.create());

test('DOM interactions', async () => {
    await render(hbs`<div class="message">Hello, world</div>`);

    await click('.message');
    await doubleClick('.message');
    await tap('.message');
    await focus('.message');
    await blur('.message');
    await triggerEvent('.message', 'custom-event');
    await triggerKeyEvent('.message', 'keydown', 'Enter', { ctrlKey: true });
    await fillIn('.message', 'content');

    const messageElement = find('.message')!;
    await click(messageElement, { metaKey: true });
    await doubleClick(messageElement, { metaKey: true });
    await tap(messageElement, { clientX: 13, clientY: 17 });
    await focus(messageElement);
    await blur(messageElement);
    await triggerEvent(messageElement, 'custom-event');
    await triggerKeyEvent(messageElement, 'keydown', 'Enter', { ctrlKey: true });
    await tab();
    await fillIn(messageElement, 'content');
    await typeIn(messageElement, 'content');
    await select(messageElement, 'content');
    await scrollTo(messageElement, 0, 0);

    await triggerEvent(document, 'custom-event');
    await triggerKeyEvent(document, 'keydown', 'Enter', { ctrlKey: true });

    const allMessages = findAll('.message');
    for (const element of allMessages) {
        await click(element);
    }

    const root = getRootElement();
    await click(root);

    await rerender();
});

test('routing helpers', async (assert) => {
    await visit('/foo');

    assert.equal(currentURL(), '/foo');
    assert.equal(currentRouteName(), 'foo');
});

test('pause and resume', async () => {
    await pauseTest();
    setTimeout(resumeTest, 1000);
});

test('catching errors', async (assert) => {
    setupOnerror((error) => {
        assert.ok(error);
    });
    resetOnerror();
});

test('wait helpers', async (assert) => {
    await render(hbs`<div class="message">Hello</div>`);

    await waitFor('.message', { count: 1, timeout: 10, timeoutMessage: 'uh oh' });
    await waitUntil(() => 'hello', { timeout: 1000, timeoutMessage: 'boom' });

    await settled();
    assert.ok(isSettled());

    const {
        hasPendingRequests,
        hasPendingTimers,
        hasPendingTransitions,
        hasPendingWaiters,
        hasRunLoop,
        pendingRequestCount
    } = getSettledState();
});
