/// <reference types="qunit" />
import { ModuleCallbacks, TestContext, TestModule } from 'ember-test-helpers';
import wait from 'ember-test-helpers/wait';
import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import hbs from 'htmlbars-inline-precompile';

function moduleFor(name: string, description: string, callbacks: ModuleCallbacks) {
    const module = new TestModule(name, description, callbacks);

    QUnit.module(module.name, {
        beforeEach() {
            module.setup();
        },
        afterEach() {
            module.teardown();
        },
    });
}

async function testWait() {
    await wait();
}

if (hasEmberVersion(2, 10)) {
    // ...
}

// https://github.com/emberjs/ember-test-helpers/blob/f07e86914f2a3823c4cb6787307f9ba2bf447e68/tests/unit/setup-context-test.js
QUnit.test('it sets up this.owner', function (this: TestContext, assert: Assert) {
    const { owner } = this;
    assert.ok(owner, 'owner was setup');
    assert.equal(typeof owner.lookup, 'function', 'has expected lookup interface');

    if (hasEmberVersion(2, 12)) {
        assert.equal(typeof owner.factoryFor, 'function', 'has expected factory interface');
    }
});

QUnit.test('can pauseTest to be resumed "later"', async function (this: TestContext, assert: Assert) {
    const promise = this.pauseTest();

    this.resumeTest();

    await promise;
});

// https://github.com/emberjs/ember-test-helpers/blob/fb4c8d4cd36b54728ce180227f865b1fa0162632/tests/unit/setup-rendering-context-test.js
QUnit.test('render exposes an `.element` property', async function (this: TestContext, assert: Assert) {
    await this.render(hbs`<p>Hello!</p>`);

    assert.equal(this.element.textContent, 'Hello!');
});
