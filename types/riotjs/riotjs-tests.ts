function describe(msg:any, fn:Function) {
    if (console.group) {
        console.group(msg);
        fn();
        console.groupEnd();
    } else {
        console.info("---" + msg + "---");
        fn();
    }
}

function it(msg:any, fn:Function) {
    try {
        fn();
        console.log(msg);
    } catch (err) {
        console.error(msg, err);
    }
}

interface RiotAssert {
    (ok:any, msg?:any):void;
    equal(value:any, expected:any):void;
}

var assert:RiotAssert;

/*
function assert(ok, msg) {
    if (!ok) throw (msg || "fails");
}

assert.equal = function (value, expected) {
    assert(value === expected, value + " != " + expected);
};
*/

describe("Observable", function () {

    var el = $.observable({}),
        total = 11,
        count = 0;

    it("Single listener", function () {

        el.on("a", function (arg:any) {
            assert.equal(arg, true)
            count++;
        });

        el.trigger("a", true);

    })

    it("Multiple listeners", function () {

        var counter = 0;

        el.on("b c d", function (e:any) {
            if (++counter == 3) assert.equal(e, "d")
            count++;
        })

        el.one("d", function (a:any) {
            assert.equal(a, true)
            count++;
        })

        el.trigger("b").trigger("c").trigger("d", true);

    })

    it("One", function () {

        var counter = 0;

        el.one("g", function () {
            assert.equal(++counter, 1);
            count++;
        })

        el.trigger("g").trigger("g");
    })

    it("One & on", function () {

        var counter = 0;

        el.one("y",function () {
            count++;
            counter++;

        }).on("y",function () {
                count++;
                counter++;

            }).trigger("y").trigger("y");

        assert.equal(counter, 3);

    })


    it("Remove listeners", function () {

        var counter = 0;

        function r() {
            assert.equal(++counter, 1);
            count++;
        }

        el.on("r", r).on("s", r).off("s", r).trigger("r").trigger("s");

    })

    it("Remove multiple listeners", function () {

        var counter = 0;

        function fn() {
            counter++;
        }

        el.on("a1 b1", fn).on("c1", fn).off("a1 b1").off("c1").trigger("a1").trigger("b1").trigger("c1");

        assert.equal(counter, 0);

    })


    it("Multiple arguments", function () {

        el.on("j", function (a:any, b:any) {
            assert.equal(a, 1);
            assert.equal(b[0], 2);
            count++;
        })

        el.trigger("j", 1, [2]);

    })

    assert.equal(total, count)

});

describe("$.render", function () {

    it("Single token", function () {
        assert.equal($.render("x"), "x");
        assert.equal($.render("x", {}), "x");
        assert.equal($.render("{x}", { x: "x" }), "x");
        assert.equal($.render("{x}", { x: "z" }), "z");
    });

    it("Multiple tokens", function () {
        assert($.render("{x}{y}", { x: "x", y: "y" }) == "xy");
    });

    it("Single quotes", function () {
        assert.equal($.render("'x'"), "'x'");
        assert.equal($.render("\'x.\';"), "\'x.\';");
    });

    it("Empty value", function () {
        assert.equal($.render("{x}", { x: undefined }), "");
        assert.equal($.render("{x}", { x: null }), "");
        assert.equal($.render("{x}", { x: false }), "false");
        assert.equal($.render("{x}", { x: 0 }), "0");
    });

    it("With spaces", function () {
        assert.equal($.render("{ x }", { x: 'x' }), "x");
        assert.equal($.render("{x }", { x: 'x' }), "x");
        assert.equal($.render("{ x}", { x: 'x' }), "x");
        assert.equal($.render("{  x  }", { x: 'x' }), "x");
    });

    it("Empty template", function () {
        assert($.render() === "");
    })

    it("Nearby brackets", function () {
        assert.equal($.render("{{x}", { x: 'x' }), "{x");
        assert.equal($.render("{x}}", { x: 'x' }), "x}");
        assert.equal($.render("{{x}}", { x: 'x' }), "{x}");
    });

    it("<template> tag", function () {
        if ($.trim) assert($.trim($.render($("#test1").html(), {x: 'x'})) == "x");
    })

    it("Line breaks", function () {
        assert.equal($.render("x\r"), "x\r");
        assert.equal($.render("x\n"), "x\n");
    });

});

