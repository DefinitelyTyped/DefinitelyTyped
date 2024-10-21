import * as QUnit from "qunit";

QUnit.module("basic tests for importing QUnit", function(hooks) {
    hooks.beforeEach(function(assert) {
        assert.ok(true, "beforeEach called");
    });

    hooks.afterEach(function(assert) {
        assert.ok(true, "afterEach called");
    });

    QUnit.test("call hooks", function(assert) {
        assert.expect(2);
    });

    QUnit.test.skip("skip test", function(assert) {
        assert.expect(3);
    });

    QUnit.test.each("each with string array", ["foo", "bar"], function(assert, data) {
        assert.expect(3);
        assert.strictEqual(data, "string value");
    });

    QUnit.test.each("each with string object example", { case1: "foo", case2: "bar" }, function(assert, data) {
        assert.expect(3);
        assert.strictEqual(data, "string value");
    });

    QUnit.test.each("each with number array", [1, 2], function(assert, data) {
        assert.expect(3);
        assert.strictEqual(data, 3);
    });

    QUnit.test.each("each with number object example", { case1: 1, case2: 2 }, function(assert, data) {
        assert.expect(3);
        assert.strictEqual(data, 3);
    });

    QUnit.module("stacked hooks", function(hooks) {
        // This will run after the parent module's beforeEach hook
        hooks.beforeEach(function(assert) {
            assert.ok(true, "nested beforeEach called");
        });

        // This will run before the parent module's afterEach
        hooks.afterEach(function(assert) {
            assert.ok(true, "nested afterEach called");
        });

        QUnit.test("call hooks", function(assert) {
            assert.expect(4);
        });
    });
});
