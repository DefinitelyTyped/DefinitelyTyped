import o = require('mithril/ospec');

const fn = () => {};

{
    o("assertions", (done, timeout) => {
        o(1 + 1).equals(2)("1 + 1 == 2");
        o("1" + "1").notEquals("2")("'1' + '1' != '2'");
        o({a: []}).deepEquals({a: []})("{a:[]} deepEquals {a:[]}");
        o({a: 1}).notDeepEquals({a: 0})("{a:1} notDeepEquals {a:0}");
        o(() => {throw new Error(); }).throws(Error)("expecting error");
        o(() => {throw new Error("a"); }).throws("a")("expecting error");
        o(fn).notThrows(Error)("not expecting error");
        o(fn).notThrows("a")("not expecting error");
        done();
        setTimeout(timeout, 1000);
    });
}

{
    const _o = o.new("clone");
    _o.spec("static", () => {
        _o.before(fn);
        _o.beforeEach(fn);
        _o.after(fn);
        _o.afterEach(fn);
        _o.specTimeout(1000);
        _o.only("only", fn);
        const s = _o.spy();
        s(1, "a");
        _o(s.args).deepEquals([1, "a"]);
        _o(s.callCount).equals(1);
        _o(s.calls.length).equals(1);
    });
    _o.run((results) => {
        results.forEach((result) => {
            console.log(result.context, result.error, result.message, result.pass, result.testError);
        });
    });
}
