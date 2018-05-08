import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { module } from 'qunit';
import {
    test,
    skip,
    moduleFor,
    moduleForModel,
    moduleForComponent,
    setResolver,
    setupRenderingTest,
    setupTest,
} from 'ember-qunit';

moduleForComponent('x-foo', {
    integration: true
});

moduleForComponent('x-foo', {
    unit: true,
    needs: ['helper:pluralize-string']
});

moduleForModel('user', {
    needs: ['model:child']
});

moduleFor('controller:home');

moduleFor('component:x-foo', 'Some description');

moduleFor('component:x-foo', 'TestModule callbacks', {
    beforeSetup() {
    },

    beforeEach(assert) {
        this.registry.register('helper:i18n', {});
        this.register('service:i18n', {});
        this.inject.service('i18n');
        this.inject.service('i18n', { as: 'i18n' });
        this.factory('object:user').create();
        assert.ok(true);
    },

    afterEach(assert) {
        assert.ok(true);
    },

    afterTeardown(assert) {
        assert.ok(true);
    }
});

// if you don't have a custom resolver, do it like this:
setResolver(Ember.DefaultResolver.create());

test('it renders', function(assert) {
    assert.expect(2);

    // setup the outer context
    this.set('value', 'cat');
    this.on('action', function(result) {
        assert.equal(result, 'bar', 'The correct result was returned');
        assert.equal(this.get('value'), 'cat');
    });

    // render the component
    this.render(hbs`
        {{ x-foo value=value action="result" }}
    `);
    this.render('{{ x-foo value=value action="result" }}');
    this.render([
        '{{ x-foo value=value action="result" }}'
    ]);

    assert.equal(this.$('div>.value').text(), 'cat', 'The component shows the correct value');

    this.$('button').click();
});

test('it renders', function(assert) {
    assert.expect(1);

    // creates the component instance
    const subject = this.subject();

    const subject2 = this.subject({
        item: 42
    });

    const { inputFormat } = this.setProperties({
        inputFormat: 'M/D/YY',
        outputFormat: 'MMMM D, YYYY',
        date: '5/3/10'
    });

    const { inputFormat: if2, outputFormat } = this.getProperties('inputFormat', 'outputFormat');

    const inputFormat2 = this.get('inputFormat');

    // render the component on the page
    this.render();
    assert.equal(this.$('.foo').text(), 'bar');
});

test('It can calculate the result', function(assert) {
    assert.expect(1);

    const subject = this.subject();

    subject.set('value', 'foo');
    assert.equal(subject.get('result'), 'bar');
});

skip('disabled test');

skip('disabled test', function(assert) { });

// https://github.com/emberjs/rfcs/blob/master/text/0232-simplify-qunit-testing-api.md#qunit-nested-modules-api
QUnit.module('some description', function(hooks) {
  hooks.before(() => {});
  hooks.beforeEach(() => {});
  hooks.afterEach(() => {});
  hooks.after(() => {});

  QUnit.test('it blends', function(assert) {
    assert.ok(true, 'of course!');
  });
});

// http://rwjblue.com/2017/10/23/ember-qunit-simplication/#setuprenderingtest
module('x-foo', function(hooks) {
    setupRenderingTest(hooks);
});

// http://rwjblue.com/2017/10/23/ember-qunit-simplication/#setuptest
module('foo service', function(hooks) {
    setupTest(hooks);
});
