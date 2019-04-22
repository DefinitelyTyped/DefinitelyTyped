namespace assertionTests {
    const { assertion } = adone;

    namespace assertionInterface {
        namespace exception {
            const a: adone.error.Exception = new assertion.AssertionError();
            const b: adone.error.Exception = new assertion.AssertionError("hello");
            const c: adone.error.Exception = new assertion.AssertionError("hello", { actual: 2, expected: 3 }, () => {});
        }

        namespace config {
            assertion.config.includeStack = true;
            assertion.config.proxyExcludedKeys = ["a"];
            assertion.config.showDiff = false;
            assertion.config.truncateThreshold = 20;
            assertion.config.useProxy = false;
        }

        namespace loadInterfaces {
            assertion.loadAssertInterface().config.includeStack = true;
            assertion.loadExpectInterface().config.includeStack = true;
            assertion.loadMockInterface().config.includeStack = true;
        }

        namespace use {
            assertion.use(() => {}).use(() => {}).config.includeStack = true;
        }
    }

    const { assert } = assertion;

    namespace assertTests {
        assert(1);
        assert(1, "hello");
        assert.fail();
        assert.fail(1);
        assert.fail(1, 2);
        assert.fail(1, 2, "hello");
        assert.fail(1, 2, "hello", "<");

        assert.ok(1);
        assert.ok(1, "hello");

        assert.notOk(1);
        assert.notOk(1, "hello");

        assert.equal(1, 2);
        assert.equal(1, 2, "hello");

        assert.notEqual(1, 2);
        assert.notEqual(1, 2, "hello");

        assert.strictEqual(1, 2);
        assert.strictEqual(1, 2, "hello");

        assert.notStrictEqual(1, 2);
        assert.notStrictEqual(1, 2, "hello");

        assert.deepEqual(1, 2);
        assert.deepEqual(1, 2, "hello");

        assert.deepStrictEqual(1, 2);
        assert.deepStrictEqual(1, 2, "hello");

        assert.equalArrays([1, 2, 3], [4, 5, 6]);
        assert.equalArrays([1, 2, 3], [4, 5, 6], "hello");

        assert.notDeepEqual(1, 2);
        assert.notDeepEqual(1, 2, "hello");

        assert.above(1, 2);
        assert.above(1, 2, "hello");

        assert.atLeast(1, 2);
        assert.atLeast(1, 2, "hello");

        assert.below(1, 2);
        assert.below(1, 2, "hello");

        assert.atMost(1, 2);
        assert.atMost(1, 2, "hello");

        assert.true(1);
        assert.true(1, "hello");

        assert.notTrue(1);
        assert.notTrue(1, "hello");

        assert.false(1);
        assert.false(1, "hello");

        assert.notFalse(1);
        assert.notFalse(1, "hello");

        assert.null(1);
        assert.null(1, "hello");

        assert.NaN(1);
        assert.NaN(1, "hello");

        assert.NotNaN(1);
        assert.NotNaN(1, "hello");

        assert.exists(1);
        assert.exists(1, "hello");

        assert.notExists(1);
        assert.notExists(1, "hello");

        assert.undefined(1);
        assert.undefined(1, "hello");

        assert.defined(1);
        assert.defined(1, "hello");

        assert.function(1);
        assert.function(1, "hello");

        assert.notFunction(1);
        assert.notFunction(1, "hello");

        assert.object(1);
        assert.object(1, "hello");

        assert.notObject(1);
        assert.notObject(1, "hello");

        assert.array(1);
        assert.array(1, "hello");

        assert.notArray(1);
        assert.notArray(1, "hello");

        assert.string(1, "hello");

        assert.notString(1);
        assert.notString(1, "hello");

        assert.number(1);
        assert.number(1, "hello");

        assert.notNumber(1);
        assert.notNumber(1, "hello");

        assert.finite(1);
        assert.finite(1, "hello");

        assert.boolean(1);
        assert.boolean(1, "hello");

        assert.notBoolean(1);
        assert.notBoolean(1, "hello");

        assert.typeOf(1, "string");
        assert.typeOf(1, "number", "hello");

        assert.notTypeOf(1, "string");
        assert.notTypeOf(1, "number", "hello");

        assert.instanceOf(1, Date);
        class A {}
        assert.instanceOf("4", A, "hello");

        assert.notInstanceOf(1, Date);
        assert.notInstanceOf(Date, A, "hello");

        assert.include([1, 2, 3], 4);
        assert.include([1, 2, 3], 4, "hello");
        assert.include("string", "string");
        assert.include("string", "string", "string");

        assert.notInclude([1, 2, 3], 4);
        assert.notInclude([1, 2, 3], 4, "hello");
        assert.notInclude("string", "string");
        assert.notInclude("string", "string", "string");

        assert.deepInclude([1, 2, 3], 4);
        assert.deepInclude([1, 2, 3], 4, "hello");
        assert.deepInclude("string", "string");
        assert.deepInclude("string", "string", "string");

        assert.notDeepInclude([1, 2, 3], 4);
        assert.notDeepInclude([1, 2, 3], 4, "hello");
        assert.notDeepInclude("string", "string");
        assert.notDeepInclude("string", "string", "string");

        assert.nestedInclude({ a: 1 }, {});
        assert.nestedInclude({ a: 1 }, {}, "hello");

        assert.notNestedInclude({ a: 1 }, {});
        assert.notNestedInclude({ a: 1 }, {}, "hello");

        assert.deepNestedInclude({ a: 1 }, {});
        assert.deepNestedInclude({ a: 1 }, {}, "hello");

        assert.notDeepNestedInclude({ a: 1 }, {});
        assert.notDeepNestedInclude({ a: 1 }, {}, "hello");

        assert.ownInclude({ a: 1 }, {});
        assert.ownInclude({ a: 1 }, {}, "hello");

        assert.notOwnInclude({ a: 1 }, {});
        assert.notOwnInclude({ a: 1 }, {}, "hello");

        assert.deepOwnInclude({ a: 1 }, {});
        assert.deepOwnInclude({ a: 1 }, {}, "hello");

        assert.notDeepOwnInclude({ a: 1 }, {});
        assert.notDeepOwnInclude({ a: 1 }, {}, "hello");

        assert.match("1", /\d+/);
        assert.match("1", /\d+/, "hello");

        assert.notMatch("1", /\d+/);
        assert.notMatch("1", /\d+/, "hello");

        assert.property({ a: 1 }, "a");
        assert.property({ a: 1 }, "a", "hello");

        assert.notProperty({ a: 1 }, "a");
        assert.notProperty({ a: 1 }, "a", "hello");

        assert.propertyVal({ a: 1 }, "a", 1);
        assert.propertyVal({ a: 1 }, "a", 1, "hello");

        assert.notPropertyVal({ a: 1 }, "a", 1);
        assert.notPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.deepPropertyVal({ a: 1 }, "a", 1);
        assert.deepPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.notDeepPropertyVal({ a: 1 }, "a", 1);
        assert.notDeepPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.ownProperty({ a: 1 }, "a");
        assert.ownProperty({ a: 1 }, "a", "hello");

        assert.notOwnProperty({ a: 1 }, "a");
        assert.notOwnProperty({ a: 1 }, "a", "hello");

        assert.ownPropertyVal({ a: 1 }, "a", 1);
        assert.ownPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.deepOwnPropertyVal({ a: 1 }, "a", 1);
        assert.deepOwnPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.notDeepOwnPropertyVal({ a: 1 }, "a", 1);
        assert.notDeepOwnPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.nestedProperty({ a: 1 }, "a");
        assert.nestedProperty({ a: 1 }, "a", "hello");

        assert.notNestedProperty({ a: 1 }, "a");
        assert.notNestedProperty({ a: 1 }, "a", "hello");

        assert.nestedPropertyVal({ a: 1 }, "a", 1);
        assert.nestedPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.notNestedPropertyVal({ a: 1 }, "a", 1);
        assert.notNestedPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.deepNestedPropertyVal({ a: 1 }, "a", 1);
        assert.deepNestedPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.notDeepNestedPropertyVal({ a: 1 }, "a", 1);
        assert.notDeepNestedPropertyVal({ a: 1 }, "a", 1, "hello");

        assert.lengthOf([1, 2, 3], 3);
        assert.lengthOf([1, 2, 3], 3, "hello");

        assert.hasAnyKeys({ a: 1 }, "a");
        assert.hasAnyKeys({ a: 1 }, ["a"]);
        assert.hasAnyKeys({ a: 1 }, ["a"], "hello");

        assert.hasAnyKeys({ a: 1 }, { a: 1 });
        assert.hasAnyKeys({ a: 1 }, { a: 1 }, "hello");

        assert.hasAllKeys({ a: 1 }, "a");
        assert.hasAllKeys({ a: 1 }, ["a"]);
        assert.hasAllKeys({ a: 1 }, ["a"], "hello");

        assert.hasAllKeys({ a: 1 }, { a: 1 });
        assert.hasAllKeys({ a: 1 }, { a: 1 }, "hello");

        assert.containsAllKeys({ a: 1 }, "a");
        assert.containsAllKeys({ a: 1 }, ["a"]);
        assert.containsAllKeys({ a: 1 }, ["a"], "hello");

        assert.containsAllKeys({ a: 1 }, { a: 1 });
        assert.containsAllKeys({ a: 1 }, { a: 1 }, "hello");

        assert.doesNotHaveAnyKeys({ a: 1 }, "a");
        assert.doesNotHaveAnyKeys({ a: 1 }, ["a"]);
        assert.doesNotHaveAnyKeys({ a: 1 }, ["a"], "hello");

        assert.doesNotHaveAnyKeys({ a: 1 }, { a: 1 });
        assert.doesNotHaveAnyKeys({ a: 1 }, { a: 1 }, "hello");

        assert.doesNotHaveAllDeepKeys({ a: 1 }, "a");
        assert.doesNotHaveAllDeepKeys({ a: 1 }, ["a"]);
        assert.doesNotHaveAllDeepKeys({ a: 1 }, ["a"], "hello");

        assert.doesNotHaveAllDeepKeys({ a: 1 }, { a: 1 });
        assert.doesNotHaveAllDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.hasAnyDeepKeys({ a: 1 }, "a");
        assert.hasAnyDeepKeys({ a: 1 }, ["a"]);
        assert.hasAnyDeepKeys({ a: 1 }, ["a"], "hello");

        assert.hasAnyDeepKeys({ a: 1 }, { a: 1 });
        assert.hasAnyDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.hasAllDeepKeys({ a: 1 }, "a");
        assert.hasAllDeepKeys({ a: 1 }, ["a"]);
        assert.hasAllDeepKeys({ a: 1 }, ["a"], "hello");

        assert.hasAllDeepKeys({ a: 1 }, { a: 1 });
        assert.hasAllDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.containsAllDeepKeys({ a: 1 }, "a");
        assert.containsAllDeepKeys({ a: 1 }, ["a"]);
        assert.containsAllDeepKeys({ a: 1 }, ["a"], "hello");

        assert.containsAllDeepKeys({ a: 1 }, { a: 1 });
        assert.containsAllDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.doesNotHaveAnyDeepKeys({ a: 1 }, "a");
        assert.doesNotHaveAnyDeepKeys({ a: 1 }, ["a"]);
        assert.doesNotHaveAnyDeepKeys({ a: 1 }, ["a"], "hello");

        assert.doesNotHaveAnyDeepKeys({ a: 1 }, { a: 1 });
        assert.doesNotHaveAnyDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.doesNotHaveAllDeepKeys({ a: 1 }, "a");
        assert.doesNotHaveAllDeepKeys({ a: 1 }, ["a"]);
        assert.doesNotHaveAllDeepKeys({ a: 1 }, ["a"], "hello");

        assert.doesNotHaveAllDeepKeys({ a: 1 }, { a: 1 });
        assert.doesNotHaveAllDeepKeys({ a: 1 }, { a: 1 }, "hello");

        assert.throws(() => {});
        assert.throws(() => {}, Error);
        assert.throws(() => {}, Error, /\d+/);
        assert.throws(() => {}, Error, "string");
        assert.throws(() => {}, Error, "string", "hello");

        assert.throws(async () => {}).then(() => 42);
        assert.throws(async () => {}, Error).then(() => 42);
        assert.throws(async () => {}, Error, /\d+/).then(() => 42);
        assert.throws(async () => {}, Error, "string").then(() => 42);
        assert.throws(async () => {}, Error, "string", "hello").then(() => 42);

        assert.doesNotThrow(() => {});
        assert.doesNotThrow(() => {}, Error);
        assert.doesNotThrow(() => {}, Error, /\d+/);
        assert.doesNotThrow(() => {}, Error, "string");
        assert.doesNotThrow(() => {}, Error, "string", "hello");

        assert.doesNotThrow(async () => {}).then(() => 42);
        assert.doesNotThrow(async () => {}, Error).then(() => 42);
        assert.doesNotThrow(async () => {}, Error, /\d+/).then(() => 42);
        assert.doesNotThrow(async () => {}, Error, "string").then(() => 42);
        assert.doesNotThrow(async () => {}, Error, "string", "hello").then(() => 42);

        assert.operator(1, "<", 2);
        assert.operator(1, "<", 2, "hello");

        assert.closeTo(1, 2, 1);
        assert.closeTo(1, 2, 1, "hello");

        assert.approximately(1, 2, 2);
        assert.approximately(1, 2, 2, "hello");

        assert.sameMembers([1, 2, 3], [4, 5, 6]);
        assert.sameMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.notSameMembers([1, 2, 3], [4, 5, 6]);
        assert.notSameMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.sameDeepMembers([1, 2, 3], [4, 5, 6]);
        assert.sameDeepMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.notSameDeepMembers([1, 2, 3], [4, 5, 6]);
        assert.notSameDeepMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.sameOrderedMembers([1, 2, 3], [4, 5, 6]);
        assert.sameOrderedMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.notSameOrderedMembers([1, 2, 3], [4, 5, 6]);
        assert.notSameOrderedMembers([1, 2, 3], [4, 5, 6], "hello");

        assert.includeMembers([1, 2, 3], [3]);
        assert.includeMembers([1, 2, 3], [3], "hello");

        assert.notIncludeMembers([1, 2, 3], [3]);
        assert.notIncludeMembers([1, 2, 3], [3], "hello");

        assert.includeDeepMembers([1, 2, 3], [3]);
        assert.includeDeepMembers([1, 2, 3], [3], "hello");

        assert.notIncludeDeepMembers([1, 2, 3], [3]);
        assert.notIncludeDeepMembers([1, 2, 3], [3], "hello");

        assert.includeOrderedMembers([1, 2, 3], [3]);
        assert.includeOrderedMembers([1, 2, 3], [3], "hello");

        assert.notIncludeOrderedMembers([1, 2, 3], [3]);
        assert.notIncludeOrderedMembers([1, 2, 3], [3], "hello");

        assert.includeDeepOrderedMembers([1, 2, 3], [3]);
        assert.includeDeepOrderedMembers([1, 2, 3], [3], "hello");

        assert.notIncludeDeepOrderedMembers([1, 2, 3], [3]);
        assert.notIncludeDeepOrderedMembers([1, 2, 3], [3], "hello");

        assert.oneOf(1, [1, 2, 3]);
        assert.oneOf(1, [1, 2, 3], "hello");

        assert.changes(() => {}, {}, "a");
        assert.changes(() => {}, {}, "a", "hello");

        assert.changesBy(() => {}, {}, "a", 2);
        assert.changesBy(() => {}, {}, "a", 2, "hello");

        assert.doesNotChange(() => {},  {}, "a");
        assert.doesNotChange(() => {},  {}, "a", "hello");

        assert.changesButNotBy(() => {}, {}, "a", 20);
        assert.changesButNotBy(() => {}, {}, "a", 20, "hello");

        assert.increases(() => {}, {}, "a");
        assert.increases(() => {}, {}, "a", "hello");

        assert.increasesBy(() => {}, {}, "a", 20);
        assert.increasesBy(() => {}, {}, "a", 20, "hello");

        assert.doesNotIncrease(() => {}, {}, "a");
        assert.doesNotIncrease(() => {}, {}, "a", "hello");

        assert.increasesButNotBy(() => {}, {}, "a", 20);
        assert.increasesButNotBy(() => {}, {}, "a", 20, "hello");

        assert.decreases(() => {}, {}, "a");
        assert.decreases(() => {}, {}, "a", "hello");

        assert.decreasesBy(() => {}, {}, "a", 20);
        assert.decreasesBy(() => {}, {}, "a", 20, "hello");

        assert.doesNotDecrease(() => {}, {}, "a");
        assert.doesNotDecrease(() => {}, {}, "a", "hello");

        assert.doesNotDecreaseBy(() => {}, {}, "a", 20);
        assert.doesNotDecreaseBy(() => {}, {}, "a", 20, "hello");

        assert.decreasesButNotBy(() => {}, {}, "a", 20);
        assert.decreasesButNotBy(() => {}, {}, "a", 20, "hello");

        assert.ifError(1);

        assert.extensible({});
        assert.extensible({}, "hello");

        assert.notExtensible({});
        assert.notExtensible({}, "hello");

        assert.sealed({});
        assert.sealed({}, "hello");

        assert.notSealed({});
        assert.notSealed({}, "hello");

        assert.frozen({});
        assert.frozen({}, "hello");

        assert.notFrozen({});
        assert.notFrozen({}, "hello");

        assert.empty({});
        assert.empty({}, "hello");
    }

    const { expect } = assertion;

    namespace expectTests {
        expect(1);
        expect(1, "hello");
        expect.fail(1, 2);
        expect.fail(1, 2, "hello");
        expect.fail(1, 2, "hello", "+");
        expect(1).to.be.been.is.and.has.have.with.that.which.at.of.same.but.does.not.deep.nested.own.ordered.any.all.a("number");
        expect(1).to.be.a("number", "hello").and;
        expect(1).to.be.an("array").and;
        expect(1).to.be.an("array", "hello").and;
        expect(1).to.include(1).and;
        expect(1).to.include(1, "hello").and;
        expect(1).but.includes(2).and;
        expect(1).but.includes(2, "hello").and;
        expect(1).to.contain(2).and;
        expect(1).to.contain(2, "hello").and;
        expect(1).but.contains(2).and;
        expect(1).but.contains(2, "hello").and;
        expect(1).to.ok().and.a("string");
        expect(1).to.be.true().but.false();
        expect(1).to.be.false().but.true();
        expect(1).to.be.null().and.null();
        expect(1).to.be.undefined().and.true();
        expect(1).to.be.NaN().and.null();
        expect(1).to.exist().and.be.null();
        expect(1).to.be.empty().and.true();
        expect(1).to.be.arguments().and.a("number");
        expect(1).to.be.Arguments().and.false();
        expect(1).to.be.equal(2).and;
        expect(1).to.be.equal(2, "hello").and;
        expect(1).but.equals(2).and;
        expect(1).but.equals(2, "hello").and;
        expect(1).to.eq(2).and;
        expect(1).to.eq(2, "hello").and;
        expect(1).but.eqls(2).and;
        expect(1).but.eqls(2, "hello").and;
        expect(1).to.eqlArray([1, 2, 3]).and;
        expect(1).to.eqlArray([1, 2, 3], "hello").and;
        expect(1).to.be.above(2).and;
        expect(1).to.be.above(2, "hello").and;
        expect(1).to.be.gt(2).and;
        expect(1).to.be.gt(2, "hello").and;
        expect(1).to.be.greaterThan(2).and;
        expect(1).to.be.greaterThan(2, "hello").and;
        expect(1).to.be.at.least(10).and;
        expect(1).to.be.at.least(10, "hello").and;
        expect(1).to.be.gte(10).and;
        expect(1).to.be.gte(10, "hello").and;
        expect(1).to.be.below(100).and;
        expect(1).to.be.below(100, "hello").and;
        expect(1).to.be.lt(10).and;
        expect(1).to.be.lt(10, "hello").and;
        expect(1).to.be.lessThan(10, "hello").and;
        expect(1).to.be.at.most(10).and;
        expect(1).to.be.at.most(10, "hello").and;
        expect(1).to.be.lte(10).and;
        expect(1).to.be.lte(10, "hello").and;
        expect(1).to.be.within(1, 10).and;
        expect(1).to.be.within(1, 10, "hello").and;
        expect(1).to.be.instanceof(Number).and;
        expect(1).to.be.instanceof(Number, "hello").and;
        expect(1).to.be.instanceOf(Number).and;
        expect(1).to.be.instanceOf(Number, "hello").and;
        expect(1).to.have.property("a").and;
        expect(1).to.have.property("a", 1).and;
        expect(1).to.have.property("a", 1, "hello").and;
        expect(1).to.have.ownProperty("a").and;
        expect(1).to.have.ownProperty("a", 1).and;
        expect(1).to.have.ownProperty("a", 1, "hello").and;
        expect(1).to.haveOwnProperty("a").and;
        expect(1).to.haveOwnProperty("a", 1).and;
        expect(1).to.haveOwnProperty("a", 1, "hello").and;
        expect(1).to.have.ownPropertyDescriptor("a").and;
        expect(1).to.have.ownPropertyDescriptor("a", {}).and;
        expect(1).to.have.ownPropertyDescriptor("a", {}, "hello").and;
        expect(1).to.haveOwnPropertyDescriptor("a").and;
        expect(1).to.haveOwnPropertyDescriptor("a", {}).and;
        expect(1).to.haveOwnPropertyDescriptor("a", {}, "hello").and;
        expect("a").to.have.length(1).and;
        expect("a").to.have.length(1, "hello").and;
        expect("a").to.have.lengthOf(1).and;
        expect("a").to.have.lengthOf(1, "hello").and;
        expect(1).to.match(/\d+/).and;
        expect(1).to.match(/\d+/, "hello").and;
        expect(1).to.have.string("1230").and;
        expect(1).to.have.string("1230", "hello").and;
        expect(1).to.have.key("a").and;
        expect(1).to.have.key("a", "b").and;
        expect(1).to.have.key(["a", "b"]).and;
        expect(1).to.have.key({ a: 1, b: 2 }).and;
        expect(1).to.have.keys("a").and;
        expect(1).to.have.keys("a", "b").and;
        expect(1).to.have.keys(["a", "b"]).and;
        expect(1).to.have.keys({ a: 1, b: 2 }).and;
        expect(() => {}).to.throw().and;
        expect(() => {}).to.throw(Error).and;
        expect(() => {}).to.throw(Error, "string").and;
        expect(() => {}).to.throw(Error, "string", "hello").and;
        expect(() => {}).to.throw(Error, /\d+/).and;
        expect(() => {}).to.throw(Error, /\d+/, "hello").and;
        expect(() => {}).but.throws().and;
        expect(() => {}).but.throws(Error).and;
        expect(() => {}).but.throws(Error, "string").and;
        expect(() => {}).but.throws(Error, "string", "hello").and;
        expect(() => {}).but.throws(Error, /\d+/).and;
        expect(() => {}).but.throws(Error, /\d+/, "hello").and;
        expect(1).to.respondTo("a").and;
        expect(1).to.respondTo("a", "hello").and;
        expect(1).to.respondsTo("a").and;
        expect(1).to.respondsTo("a", "hello").and;
        expect(1).itself.to.respondsTo("a").and;
        expect(1).to.satisfy(() => true).and;
        expect(1).to.satisfy(() => true, "hello").and;
        expect(1).but.satisfies(() => true).and;
        expect(1).but.satisfies(() => true, "hello").and;
        expect(1).to.be.closeTo(2, 1).and;
        expect(1).to.be.closeTo(2, 1, "hello").and;
        expect(1).to.be.approximately(1, 2).and;
        expect(1).to.be.approximately(1, 2, "hello").and;
        expect(1).to.have.members([1, 2, 3]).and;
        expect(1).to.have.members([1, 2, 3], "hello").and;
        expect(1).to.be.oneOf([1, 2, 3]).and;
        expect(1).to.be.oneOf([1, 2, 3], "hello").and;
        expect(() => {}).to.change(() => {}).and;
        expect(() => {}).to.change({}, "a").and;
        expect(() => {}).to.change({}, "a", "hello").and;
        expect(() => {}).but.changes(() => {}).and;
        expect(() => {}).but.changes({}, "a").and;
        expect(() => {}).but.changes({}, "a", "hello").and;
        expect(() => {}).to.increase({}).and;
        expect(() => {}).to.increase({}, "a").and;
        expect(() => {}).to.increase({}, "a", "hello").and;
        expect(() => {}).but.increases({}).and;
        expect(() => {}).but.increases({}, "a").and;
        expect(() => {}).but.increases({}, "a", "hello").and;
        expect(() => {}).to.decrease({}).and;
        expect(() => {}).to.decrease({}, "a").and;
        expect(() => {}).to.decrease({}, "a", "hello").and;
        expect(() => {}).but.decreases({}).and;
        expect(() => {}).but.decreases({}, "a").and;
        expect(() => {}).but.decreases({}, "a", "hello").and;
        expect(() => {}).to.decreases({}).by(2).and;
        expect(() => {}).to.decreases({}).by(2, "hello").and;
        expect({}).to.be.extensible().and;
        expect({}).to.be.sealed().and;
        expect({}).to.be.frozen().and;
        expect({}).to.be.finite().and;

        namespace mockTests {
            const s1 = adone.shani.util.spy();
            const s2 = adone.shani.util.spy();

            expect(s1).to.have.been.called();
            expect(s1).to.have.been.calledOnce();
            expect(s1).to.have.been.calledTwice();
            expect(s1).to.have.been.calledThrice();
            expect(s1).to.have.callCount(100);
            expect(s1).to.have.been.calledBefore(s2);
            expect(s1).to.have.been.calledAfter(s2);
            expect(s1).to.have.been.calledImmediatelyAfter(s2);
            expect(s1).to.have.been.calledImmediatelyBefore(s2);
            expect(s1).to.have.been.calledOn({});
            expect(s1).to.have.been.calledOn({});
            expect(s1).to.have.been.calledWith(1, 2, 3);
            expect(s1).to.have.been.calledWithExactly(1, 2, 3);
            expect(s1).to.have.returned(1);
            expect(s1).to.have.thrown({});
        }
    }
}
