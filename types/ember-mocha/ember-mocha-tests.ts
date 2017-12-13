import {
    describeComponent, describeModel, describeModule,
    setResolver, setupAcceptanceTest, setupComponentTest,
    setupModelTest, setupTest
} from 'ember-mocha';
import { context, describe, it, beforeEach, afterEach, before, after } from 'mocha';
import chai = require('chai');
import Ember from "ember";
import hbs from 'htmlbars-inline-precompile';

describeModule('name', function() {
    beforeEach(function() {
    });

    it('test', function() {
    });
});

describeModule('name', 'description', function() {
    it('test', function() {
    });
});

describeModule(
    'name',
    'description',
    {
        needs: ['service:notifications']
    },
    function() {
    }
);

describeModule('component:x-foo', 'TestModule callbacks', {
    needs: [],

    beforeSetup() {
    },
    setup() {
    },
    teardown() {
    },
    afterTeardown() {
    }
}, function() {
});

describeComponent('x-foo', {
    integration: true
}, function() {
});

describeComponent('x-foo', {
    unit: true,
    needs: ['helper:pluralize-string']
}, function() {
});

describeComponent.skip(
    'block-slot',
    'Integration: BlockSlotComponent',
    {
        integration: true
    },
    function() {
    }
);

describeModel('user', {
    needs: ['model:child']
}, function() {
});

describeModule('component:x-foo', 'TestModule callbacks', function() {
    before(function() {
        class I18n extends Ember.Object {}

        this.skip();
        this.timeout(1000);
        this.registry.register('helper:i18n', I18n);
        this.registry.register('helper:i18n', I18n, { singleton: true });
        this.register('service:i18n', {});
        this.inject.service('i18n');
        this.inject.service('i18n', { as: 'i18n' });
        this.factory('object:user').create();
    });

    after(function() {
    });

    beforeEach(function() {
    });

    afterEach(function() {
    });
});

describe('setupTest', function() {
    setupTest();

    setupTest('service:ajax');

    setupTest('service:ajax', {
        unit: true
    });

    setupTest('controller:sidebar', {
        // Specify the other units that are required for this test.
        // needs: ['controller:foo']
    });

    setupComponentTest('gravatar-image', {
        // specify the other units that are required for this test
        // needs: ['component:foo', 'helper:bar']
    });

    setupModelTest('contact', {
        // Specify the other units that are required for this test.
        needs: []
    });

    const Application = Ember.Application.extend();

    setupAcceptanceTest({ Application });

    it('test', function() {
    });
});

// testing context
describe('for test suite A', function() {
    context('when trying method foo', function() {
        it('should test correctly', function() {
        });
    });
});

// if you don't have a custom resolver, do it like this:
setResolver(Ember.DefaultResolver.create());

it('renders', function() {
    // setup the outer context
    this.set('value', 'cat');
    this.on('action', function(result) {
        chai.expect(result).to.equal('bar', 'The correct result was returned');
        chai.expect(this.get('value')).to.equal('cat');
    });

    // render the component
    this.render(hbs`
        {{ x-foo value=value action="result" }}
    `);
    this.render('{{ x-foo value=value action="result" }}');
    this.render([
        '{{ x-foo value=value action="result" }}'
    ]);

    chai.expect(this.$('div>.value').text()).to.equal('cat', 'The component shows the correct value');

    this.$('button').click();
});

it('renders', function() {
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
    chai.expect(this.$('.foo').text()).to.equal('bar');
});

it('can calculate the result', function(assert) {
    const subject = this.subject();

    subject.set('value', 'foo');
    chai.assert.equal(subject.get('result'), 'bar');
});

it.skip('disabled test');

it.skip('disabled test', function() { });
