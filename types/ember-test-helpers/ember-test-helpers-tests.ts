// QUnit expects `function` instead of `() => {}` because it does its "magic"
// via setting things up on `this`. An antipattern, perhaps, but a long-standing
// and deeply-entrenched one.
/* tslint:disable:only-arrow-functions */

import { setupTest, setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

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

    // Make sure the use of the mixin is wired up correctly.
    test('container fun', function (assert) {
        const neato = this.owner.factoryFor('neato');
        assert.ok(neato);
    });
});
/* tslint:enable:only-arrow-functions */
