import hbs from 'htmlbars-inline-precompile';
import { module } from 'qunit';
import {
    start,
    test,
    skip,
    only,
    todo,
    setResolver,
    setupRenderingTest,
    setupTest,
    SetupTestOptions,
    setupApplicationTest,
} from 'ember-qunit';
import { render, TestContext } from '@ember/test-helpers';
import EmberResolver from 'ember-resolver';
import EmberObject from '@ember/object';

// if you don't have a custom resolver, do it like this:
setResolver(EmberResolver.create());

// (modified) tests ported from ember-test-helpers
module('rendering', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', function (assert) {
        assert.expect(2);

        // setup the outer context
        this.set('value', 'cat');

        // render the component
        this.render(hbs`
            {{ x-foo value=value action="result" }}
        `);
        this.render('{{ x-foo value=value action="result" }}');
        this.render(['{{ x-foo value=value action="result" }}']);

        const el = this.element.querySelector('div');
        assert.equal(el?.innerText, 'cat', 'The component shows the correct value');

        this.element.querySelector('button')?.click();
    });

    test('it renders', async function (assert) {
        assert.expect(1);

        // creates the component instance
        await render(hbs`<Foo />`);

        await render(hbs`<Foo @item={{42}} />`);

        const { inputFormat } = this.setProperties({
            inputFormat: 'M/D/YY',
            outputFormat: 'MMMM D, YYYY',
            date: '5/3/10',
        });

        const { inputFormat: if2, outputFormat } = this.getProperties('inputFormat', 'outputFormat');

        const inputFormat2 = this.get('inputFormat');

        // render the component on the page
        this.render();
        assert.equal(this.element.querySelector('div')?.innerText, 'bar');
    });
});

module('misc and async', function (hooks) {
    hooks.beforeEach(async function (assert) {
        assert.ok(true, 'hooks can be async');
    });

    test('It can calculate the result', function (assert) {
        assert.expect(1);

        interface Foo extends EmberObject {
            value: string;
            result: string;
        }

        const subject = this.owner.lookup('foo:bar') as Foo;

        subject.set('value', 'foo');
        assert.equal(subject.get('result'), 'bar');
    });

    // This test is intended to ensure the appropriate behavior for @typescript-eslint/no-misused-promises.
    // However, we don't actually use typescript-eslint in this project and tslint has no equivalent,
    // so we can't properly test it.
    test('it can be async', async function (assert) {
        assert.expect(1);

        await this.render();

        assert.ok(true, 'rendered');
    });

    skip('disabled test');

    skip('disabled test', function (assert) {});

    // This test is intended to ensure the appropriate behavior for @typescript-eslint/no-misused-promises.
    // However, we don't actually use typescript-eslint in this project and tslint has no equivalent,
    // so we can't properly test it.
    skip('it can skip async', async function (assert) {
        assert.expect(1);

        await this.render();

        assert.ok(true, 'rendered');
    });

    // This test is intended to ensure the appropriate behavior for @typescript-eslint/no-misused-promises.
    // However, we don't actually use typescript-eslint in this project and tslint has no equivalent,
    // so we can't properly test it.
    only('it can only run async', async function (assert) {
        assert.expect(1);

        await this.render();

        assert.ok(true, 'rendered');
    });

    // This test is intended to ensure the appropriate behavior for @typescript-eslint/no-misused-promises.
    // However, we don't actually use typescript-eslint in this project and tslint has no equivalent,
    // so we can't properly test it.
    todo('it can have an async todo', async function (assert) {
        assert.expect(1);

        await this.render();

        assert.ok(true, 'rendered');
    });
});
// end tests ported from ember-test-helpers

module('returning a promise', function () {
    test('it can return Promise<void>', function (this: TestContext, assert) {
        return Promise.resolve();
    });

    test('it can return a non-empty Promise', function (this: TestContext, assert) {
        return Promise.resolve('foo');
    });
});

// https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md#qunit-nested-modules-api
QUnit.module('some description', function (hooks) {
    hooks.before(() => {});
    hooks.beforeEach(() => {});
    hooks.afterEach(() => {});
    hooks.after(() => {});

    QUnit.test('it blends', function (assert) {
        assert.ok(true, 'of course!');
    });
});

// http://rwjblue.com/2017/10/23/ember-qunit-simplication/#setuprenderingtest
module('x-foo', function (hooks) {
    setupRenderingTest(hooks);
});

// http://rwjblue.com/2017/10/23/ember-qunit-simplication/#setuptest
module('foo service', function (hooks) {
    setupTest(hooks);
});

// RFC-232 equivalent of https://github.com/ember-engines/ember-engines#unitintegration-testing-for-in-repo-engines
module('engine foo component', function (hooks) {
    setupTest(hooks, {
        resolver: EmberResolver.create(),
    });
});

module('all the hooks', function (hooks) {
    setupTest(hooks);

    hooks.after(function () {
        this.owner.lookup('service:store');
    });

    hooks.afterEach(function () {
        this.owner.lookup('service:store');
    });

    hooks.before(function () {
        this.owner.lookup('service:store');
    });

    hooks.beforeEach(function () {
        this.owner.lookup('service:store');
    });
});

module.only('exclusive module with hooks', function (hooks) {
    setupTest(hooks);

    hooks.after(function () {
        this.owner.lookup('service:store');
    });

    hooks.afterEach(function () {
        this.owner.lookup('service:store');
    });

    hooks.before(function () {
        this.owner.lookup('service:store');
    });

    hooks.beforeEach(function () {
        this.owner.lookup('service:store');
    });
});

module('extending TestContext works', function () {
    interface Context extends TestContext {
        someProp: string;
        anotherProp: boolean;
    }

    module('it works with non-async', function (nonAsyncHooks) {
        nonAsyncHooks.before(function (this: Context) {
            this.someProp = 'hello';
        });

        nonAsyncHooks.beforeEach(function (this: Context) {
            this.anotherProp = true;
        });

        nonAsyncHooks.after(function (this: Context) {
            this.someProp = 'goodbye';
        });

        nonAsyncHooks.afterEach(function (this: Context) {
            this.anotherProp = false;
        });

        test('it works with tests', function (this: Context, assert) {
            this.someProp = this.someProp + ' cool person';
            assert.true(this.anotherProp);
        });

        skip('it works with skip', function (this: Context, assert) {
            this.someProp = 'wahoo';
            assert.ok(typeof this.someProp === 'string');
        });

        only('it works with only', function (this: Context, assert) {
            this.someProp = 'crazy pants';
            assert.ok(typeof this.someProp === 'string');
        });

        todo('it works with todo', function (this: Context, assert) {
            this.someProp = 'tada';
            assert.ok(typeof this.someProp === 'string');
        });
    });

    module('it works with async, too', function (asyncHooks) {
        asyncHooks.before(async function (this: Context) {
            this.someProp = 'hello';
            await Promise.resolve(this.someProp);
        });

        asyncHooks.beforeEach(async function (this: Context) {
            this.anotherProp = true;
            await Promise.resolve(this.anotherProp);
        });

        asyncHooks.after(async function (this: Context) {
            this.someProp = 'goodbye';
            await Promise.resolve(this.someProp);
        });

        asyncHooks.afterEach(async function (this: Context) {
            this.anotherProp = false;
            await Promise.resolve(this.anotherProp);
        });

        test('it works with tests', async function (this: Context, assert) {
            this.someProp = this.someProp + ' cool person';
            assert.true(this.anotherProp);
            await Promise.resolve('cool');
        });

        skip('it works with skip', async function (this: Context, assert) {
            this.someProp = 'wahoo';
            const result = await Promise.resolve(this.someProp);
            assert.ok(typeof result === 'string');
        });

        only('it works with only', async function (this: Context, assert) {
            this.someProp = 'crazy pants';
            const result = await Promise.resolve(this.someProp);
            assert.ok(typeof result === 'string');
        });

        todo('it works with todo', async function (this: Context, assert) {
            this.someProp = 'tada';
            const result = await Promise.resolve(this.someProp);
            assert.ok(typeof result === 'string');
        });
    });
});

start();

module('with setup options', function (hooks) {
    // $ExpectType SetupTestOptions | undefined
    type SetupTestOptions = Parameters<typeof setupTest>[1];
    // $ExpectType SetupTestOptions | undefined
    type SetupRenderingTestOptions = Parameters<typeof setupRenderingTest>[1];
    // $ExpectType SetupTestOptions | undefined
    type SetupApplicationTestOptions = Parameters<typeof setupApplicationTest>[1];

    const resolver = EmberResolver.create();

    setupTest(hooks, {});
    setupRenderingTest(hooks, {});
    setupApplicationTest(hooks, {});

    setupTest(hooks, { resolver });
    setupRenderingTest(hooks, { resolver });
    setupApplicationTest(hooks, { resolver });
});
