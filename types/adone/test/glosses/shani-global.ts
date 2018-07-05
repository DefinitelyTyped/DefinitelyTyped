namespace shaniGlobalTests {
    namespace describeTests {
        describe("hello", () => {});

        describe("hello", function () {
            this.skip();
            this.timeout(10);
            this.a;
        });

        describe("1", "2", "3", "4", "45", function () {
            this.skip();
            this.timeout(10);
            this.a;
        });

        describe("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", function () {
            this.skip();
            this.timeout(10);
            this.a;
        });

        context("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", function () {
            this.skip();
            this.timeout(10);
            this.a;
        });
    }

    namespace itTests {
        it("should be here", () => {});

        it("should be here", function () {
            this.timeout(100);
            this.skip();
            this.a;
        });

        it("should be here", function (done: () => void) {
            this.timeout(1000);
            done();
            this.a;
        });

        it("hello", {}, () => {});

        it("hello", {
            skip: true
        }, () => {});

        it("hello", {
            skip: () => true
        }, () => {});

        it("hello", {
            timeout: () => 1202
        }, () => {});

        it("hello", {
            timeout: 1010
        }, () => {});

        it("hello", {
            before() {}
        }, () => {});

        it("hello", {
            before: ["hello", () => {}]
        }, () => {});

        it("hello", {
            after() {}
        }, () => {});

        it("hello", {
            after: ["hello", () => {}]
        }, () => {});

        specify("hello", {
            after: ["hello", () => {}]
        }, () => {});
    }

    namespace beforeTests {
        before(function() {
            this.timeout(100);
            this.a;
        });

        before("description", function () {
            this.timeout(100);
            this.a;
        });

        before("description", function (done) {
            this.timeout(100);
            done();
            this.a;
        });
    }

    namespace afterTests {
        after(function () {
            this.timeout(10);
            this.a;
        });

        after("description", function () {
            this.timeout(10);
            this.a;
        });

        after("description", function (done) {
            this.timeout(10);
            this.a;
        });
    }

    namespace beforeEachTests {
        beforeEach(function () {
            this.timeout(100);
            this.a;
        });

        beforeEach("hello", function () {
            this.timeout(100);
            this.a;
        });

        beforeEach("hello", function (done) {
            this.timeout(100);
            done();
            this.a;
        });
    }

    namespace afterEachTests {
        afterEach(function () {
            this.timeout(100);
            this.a;
        });

        afterEach("asd", function () {
            this.timeout(100);
            this.a;
        });

        afterEach("asd", function (done) {
            this.timeout(100);
            done();
            this.a;
        });
    }

    expect(1).to.be.a("number");
    assert.equal(1, 1);
    fakeClock.install().tick(100);
    stub()(1, 2, 3);
    expect(spy()).to.have.been.calledOnce;
    match(2).and(match(2));
    mock().alwaysCalledOn({});
    request({}).expectBody("");
}
