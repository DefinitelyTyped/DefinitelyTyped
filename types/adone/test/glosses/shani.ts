namespace shaniTests {
    const { shani } = adone;

    namespace engineOptionsTests {
        new shani.Engine();
        new shani.Engine({});
        new shani.Engine({ callGc: true });
        new shani.Engine({ defaultTimeout: 1000 });
        new shani.Engine({ defaultHookTimeout: 1000 });
        new shani.Engine({ transpilerOptions: {} });
    }

    namespace contextTests {
        const e = new adone.shani.Engine();
        const c = e.context();

        namespace describeTests {
            c.describe("hello", () => {});

            c.describe("hello", function () {
                this.skip();
                this.timeout(10);
                this.a;
            });

            c.describe("1", "2", "3", "4", "45", function () {
                this.skip();
                this.timeout(10);
                this.a;
            });

            c.describe("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", function () {
                this.skip();
                this.timeout(10);
                this.a;
            });

            c.context("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", function () {
                this.skip();
                this.timeout(10);
                this.a;
            });
        }

        namespace itTests {
            c.it("should be here", () => {});

            c.it("should be here", function () {
                this.timeout(100);
                this.skip();
                this.a;
            });

            c.it("should be here", function (done) {
                this.timeout(100);
                this.skip();
                done();
                this.a;
            });

            c.it("hello", {}, () => { });

            c.it("hello", {
                skip: true
            }, () => { });

            c.it("hello", {
                skip: () => true
            }, () => { });

            c.it("hello", {
                timeout: () => 1202
            }, () => { });

            c.it("hello", {
                timeout: 1010
            }, () => { });

            c.it("hello", {
                before() { }
            }, () => { });

            c.it("hello", {
                before: ["hello", () => { }]
            }, () => { });

            c.it("hello", {
                after() { }
            }, () => { });

            c.it("hello", {
                after: ["hello", () => { }]
            }, () => { });

            c.specify("hello", {
                after: ["hello", () => { }]
            }, () => { });
        }

        namespace beforeTests {
            c.before(function () {
                this.timeout(100);
                this.a;
            });

            c.before("description", function () {
                this.timeout(100);
                this.a;
            });

            c.before("description", function (done) {
                this.timeout(100);
                done();
                this.a;
            });
        }

        namespace afterTests {
            c.after(function () {
                this.timeout(10);
                this.a;
            });

            c.after("description", function () {
                this.timeout(10);
                this.a;
            });

            c.after("description", function (done) {
                this.timeout(10);
                done();
                this.a;
            });
        }

        namespace beforeEachTests {
            c.beforeEach(function () {
                this.timeout(100);
                this.a;
            });

            c.beforeEach("hello", function () {
                this.timeout(100);
                this.a;
            });

            c.beforeEach("hello", function (done) {
                this.timeout(100);
                done();
                this.a;
            });
        }

        namespace afterEachTests {
            c.afterEach(function () {
                this.timeout(100);
                this.a;
            });

            c.afterEach("asd", function () {
                this.timeout(100);
                this.a;
            });

            c.afterEach("asd", function (done) {
                this.timeout(100);
                done();
                this.a;
            });
        }

        namespace rootTests {
            const { root } = c;
            root.children[0];
            root.prepare().then((x) => { });
            root.addChild(root);
            const check = (hook: adone.shani.I.Hook) => {
                hook.run().then((x) => x);
                hook.cause();
                { const a: boolean = hook.failed(); }
                hook.timeout() + 2;
                hook.timeout(10).timeout(10).timeout() + 2;
            };
            for (const hook of root.beforeHooks()) {
                check(hook);
            }
            for (const hook of root.afterHooks()) {
                check(hook);
            }
            for (const hook of root.beforeEachHooks()) {
                check(hook);
            }
            for (const hook of root.afterEachHooks()) {
                check(hook);
            }
            { const a: boolean = root.isInclusive(); }
            { const a: boolean = root.isExclusive(); }
            { const a: boolean = root.hasInclusive(); }
            root.skip().only().skip();
            const a: number | null = root.timeout();
            root.timeout(100).timeout(100);
            root.level() + 2;
            root.level(2).level() + 2;
            root.chain().toLowerCase();
            root.blockChain()[0].blockChain()[0].addChild(root);
        }

        namespace eventEmitterTests {
            const a = c.start();
            a.on("enter block", ({ block }) => {
                block.addChild(block);
            }).on("exit block", ({ block }) => {
                block.addChild(block);
            }).on("start test", ({ block, test }) => {
                block.addChild(test);
                test.chain();
            }).on("end test", ({ block, test, meta }) => {
                block.addChild(test);
                test.chain();
                meta.err;
                meta.elapsed + 2;
            }).on("start before hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end before hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("start after hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end after hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("start before each hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end before each hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("start after each hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end after each hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("start before test hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end before test hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("start after test hook", ({ block, hook }) => {
                block.addChild(block);
                hook.desctiption;
            }).on("end after test hook", ({ block, hook, meta }) => {
                block.addChild(block);
                hook.desctiption;
                meta.err;
                meta.elapsed;
            }).on("error", (err) => {}).on("done", () => {}).stop();
        }
    }

    namespace utilTests {
        const { util } = shani;

        namespace spyCallTests {
            const call = util.spy().firstCall;
            { const a: boolean = call.calledBefore(call); }
            { const a: boolean = call.calledAfter(call); }
            { const a: boolean = call.calledWithNew(call); }
            call.thisValue;
            call.args[0];
            call.exception;
            call.returnValue;
            { const a: boolean = call.calledOn({}); }
            { const a: boolean = call.calledWith(1, 2, 3); }
            { const a: boolean = call.calledWithExactly(1, 2, 3); }
            { const a: boolean = call.calledWithMatch(1, 2, 3); }
            { const a: boolean = call.notCalledWith(1, 2, 3); }
            { const a: boolean = call.notCalledWithMatch(1, 2, 3); }
            { const a: boolean = call.returned(1); }
            { const a: boolean = call.threw(); }
            { const a: boolean = call.threw("12"); }
            { const a: boolean = call.threw({}); }
            call.callArg(1);
            call.callArgOn(1, {});
            call.callArgWith(1, 1, 2, 3);
            call.callArgOnWith(1, {}, 1, 2, 3);
            call.yield(1, 2, 3);
            call.yieldOn({}, 1, 2, 3);
            call.yieldToOn("a", {}, 1, 2, 3);
        }

        namespace spyTests {
            util.spy().alwaysCalledOn({});
            util.spy(() => { }).alwaysCalledOn({});
            const a: number = util.spy().callCount;
            const s = util.spy();
            { const a: boolean = s.called; }
            { const a: boolean = s.notCalled; }
            { const a: boolean = s.calledOnce; }
            { const a: boolean = s.calledTwice; }
            { const a: boolean = s.calledThrice; }
            s.firstCall.args;
            s.secondCall.args;
            s.thirdCall.args;
            s.lastCall.args;
            s.thisValues[0];
            s.args[0][0];
            s.exceptions[0];
            s.returnValues[0];
            s(1, 2, 3);
            s.calledBefore(s);
            s.calledAfter(s);
            s.calledImmediatelyAfter(s);
            s.calledImmediatelyBefore(s);
            { const a: boolean = s.calledWithNew(); }
            s.withArgs(1, 2, 3).firstCall.args;
            { const a: boolean = s.alwaysCalledOn({}); }
            { const a: boolean = s.alwaysCalledWith(1, 2, 3); }
            { const a: boolean = s.alwaysCalledWithExactly(1, 2, 3); }
            { const a: boolean = s.alwaysCalledWithMatch(1, 2, 3); }
            { const a: boolean = s.neverCalledWith(1, 2, 3); }
            { const a: boolean = s.neverCalledWithMatch(1, 2, 3); }
            { const a: boolean = s.alwaysThrew(); }
            { const a: boolean = s.alwaysThrew("a"); }
            { const a: boolean = s.alwaysThrew({}); }
            { const a: boolean = s.alwaysReturned({}); }
            s.invokeCallback(1, 2, 3);
            s.getCall(0).args;
            s.getCalls()[0].args;
            s.reset();
            s.printf("%s", "1").toLowerCase();
            s.restore();
            s.waitFor(() => true).then((x: adone.shani.util.I.SpyCall) => {});
            s.waitFor(() => true, () => 2).then((x: number) => {});
            s.waitForCall().then((x: adone.shani.util.I.SpyCall) => {});
            s.waitForNCalls(10).then((x: adone.shani.util.I.SpyCall[]) => {});
            s.waitForArg(1, "hello").then((x: adone.shani.util.I.SpyCall) => {});
            s.waitForArgs(1, 2, 3).then((x: adone.shani.util.I.SpyCall) => {});
        }

        namespace stubTests {
            util.stub({});
            class A {
                a() {}
            }
            util.stub(new A(), "a").resetHistory();
            const s = util.stub();
            s.resetBehavior();
            s.resetHistory();
            s.usingPromise({}).alwaysCalledOn(2);
            s.returns({}).resetBehavior();
            s.returnsArg(1).resetBehavior();
            s.returnsThis().resetBehavior();
            s.resolves().resetBehavior();
            s.resolves(1).resetBehavior();
            s.throws().resetBehavior();
            s.throws("1").resetBehavior();
            s.throwsArg(1).resetBehavior();
            s.throwsException().resetBehavior();
            s.throwsException("1").resetBehavior();
            s.throwsException({}).resetBehavior();
            s.rejects().resetBehavior();
            s.rejects("string").resetBehavior();
            s.rejects(1).resetBehavior();
            s.callsArg(1).resetBehavior();
            s.callThrough().resetBehavior();
            s.callsArgOn(1, {}).resetBehavior();
            s.callsArgOnWith(1, {}, 123).resetBehavior();
            s.callsArgAsync(1).resetBehavior();
            s.callsArgOnAsync(1, {}).resetBehavior();
            s.callsArgOnWithAsync(1, {}, 1, 2, 3).resetBehavior();
            s.callsFake(() => { }).resetBehavior();
            s.get(() => { }).resetBehavior();
            s.set((v) => 1).resetBehavior();
            s.onCall(1).resetBehavior();
            s.onFirstCall().resetBehavior();
            s.onSecondCall().resetBehavior();
            s.onThirdCall().resetBehavior();
            s.value(1).resetBehavior();
            s.yields(1, 2, 3).resetBehavior();
            s.yieldsOn({}, 1, 2).resetBehavior();
            s.yieldsRight(1, 2, 3).resetBehavior();
            s.yieldsTo("a", 1, 2, 3).resetBehavior();
            s.yieldsToOn("a", {}, 1, 2, 3).resetBehavior();
            s.yieldsAsync(1, 2, 3).resetBehavior();
            s.yieldsOnAsync({}, 1, 2, 3).resetBehavior();
            s.yieldsToAsync("a", 1, 2, 3).resetBehavior();
            s.yieldsToOnAsync("1", {}, 1, 2, 3).resetBehavior();
            s.withArgs(1, 2, 3).resetBehavior();
        }

        namespace expectationTests {
            util.expectation.create("");
            const e = util.expectation.create();
            e.atLeast(1).never();
            e.atMost(2).never();
            e.never().never();
            e.once().never();
            e.twice().never();
            e.thrice().never();
            e.exactly(1).never();
            e.withArgs(1, 2, 3).never();
            e.withExactArgs(1, 2, 3).never();
            e.on({}).never();
            e.verify().never();
            e.restore();
        }

        namespace mockTests {
            util.mock().never();
            util.mock({}).expects("").restore();
            util.mock({}).verify();
        }

        namespace assertTests {
            util.assert.failException;
            util.assert.fail();
            util.assert.fail("1");
            util.assert.pass(1);
            const s = util.spy();
            util.assert.notCalled(s);
            util.assert.called(s);
            util.assert.calledOnce(s);
            util.assert.calledTwice(s);
            util.assert.calledThrice(s);
            util.assert.callCount(s, 10);
            util.assert.callOrder(s, s, s, s);
            util.assert.calledOn(s, {});
            util.assert.calledOn(s, {});
            util.assert.alwaysCalledOn(s, {});
            util.assert.calledWith(s, {});
            util.assert.neverCalledWith(s, {});
            util.assert.calledWithExactly(s, {});
            util.assert.alwaysCalledWithExactly(s, {});
            util.assert.calledWithMatch(s, {});
            util.assert.alwaysCalledWithMatch(s, {});
            util.assert.neverCalledWithMatch(s, {});
            util.assert.threw(s);
            util.assert.threw(s, "a");
            util.assert.threw(s, {});
            util.assert.alwaysThrew(s);
            util.assert.alwaysThrew(s, "");
            util.assert.alwaysThrew(s, {});
            util.assert.expose({});
            util.assert.expose({}, { includeFail: true });
            util.assert.expose({}, { prefix: "a" });
        }

        namespace matchTests {
            util.match(1).and(util.match(1));
            util.match("1").and(util.match(1));
            util.match(/1/).and(util.match(1));
            util.match({}).and(util.match(1));
            util.match((v: any) => true).and(util.match(1));
            util.match((v: any) => true, "a").and(util.match(1));
            util.match.any.and;
            util.match.defined.and;
            util.match.truthy.and;
            util.match.falsy.and;
            util.match.bool.and;
            util.match.number.and;
            util.match.string.and;
            util.match.object.and;
            util.match.func.and;
            util.match.map.contains(new Map());
            util.match.map.deepEquals(new Map());
            util.match.set.contains(new Set());
            util.match.array.contains([]);
            util.match.array.deepEquals([]);
            util.match.array.endsWith([]);
            util.match.array.startsWith([]);
            util.match.regexp.and;
            util.match.date.and;
            util.match.symbol.and;
            util.match.same({}).and;
            util.match.typeOf("string").and;
            util.match.instanceOf({}).and;
            util.match.has("a").and;
            util.match.has("a", {}).and;
            util.match.hasOwn("a").and;
            util.match.hasOwn("a", {}).and;
        }

        namespace sandboxTests {
            util.sandbox.create();
            util.sandbox.create({});
            util.sandbox.create({ injectInto: {} });
            util.sandbox.create({ properties: ["a"] });
            const s = util.sandbox.create();
            s.assert.alwaysCalledOn(s.spy(), {});
            s.spy().args;
            s.stub().args;
            s.mock().args;
            s.restore();
            s.reset();
            s.resetHistory();
            s.resetBehavior();
            s.usingPromise({}).reset();
            s.verify();
            s.verifyAndRestore();
        }
    }

    namespace requestTests {
        const r = request({});
        r.get("/").head("/").post("/").put("/").options("/");
        r.attach("fname", "hello");
        r.attach("fname", "hello", {});
        r.attach("fname", "hello", { type: "application/javascript" });
        r.attach("fname", "hello", { filename: "a.js" });
        r.field("a", "basd");
        r.send("asd");
        r.setHeader("Cookie", "key=value");
        r.auth("user", "pass");
        r.expect(() => true);
        r.expect(async () => true);
        r.expect((response) => {
            assert.equal(response.statusCode, 200);
            return response.body.length === 0;
        });
        r.expectStatus(200);
        r.expectStatusMessage("OK");
        r.expectBody("body");
        r.expectBody(Buffer.from("body"));
        r.expectBody(/body/);
        r.expectBody({ a: 1 });
        r.expectBody("body", {});
        r.expectBody("body", { decompress: true });
        r.expectEmptyBody();
        r.expectHeader("Cookie", "key=value");
        r.expectHeaderExists("Cookie");
        r.then((x: adone.shani.util.I.Response) => {
            x.statusCode === 200;
            x.body.fill(0);
        });
    }
}
