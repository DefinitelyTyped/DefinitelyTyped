import { module, test, skip, only } from 'qunit';

module(
    'my first test module',
    {
        before(assert) {
            assert.ok('before hook');
        }
    },
    function(cbHooks) {
        cbHooks.after(function (assert) {
            assert.ok('after hook');
        })
    }
);

module('my second test module', function(cbHooks) {
    cbHooks.before(function(assert) {
        assert.ok('before');
    });
    cbHooks.beforeEach(function(assert) {
        assert.ok('beforeEach');
    });
    cbHooks.after(function(assert) {
        assert.ok('after');
    });
    cbHooks.afterEach(function(assert) {
        assert.ok('afterEach');
    });

    test('it works', function(assert) {
        assert.deepEqual([], [], 'Empty arrays are equal!');
    });
    only('only test this', function(assert) {
        assert.deepEqual([], [], 'Empty arrays are equal!');
    });
    skip('skip this', function(assert) {
        assert.deepEqual([], [], 'Empty arrays are equal!');
    });
});
