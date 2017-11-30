import * as o from "ospec";

o("addition", () => {
    o(1 + 1).equals(2);
});

function call(cb, arg) { cb(arg); }

o.spec("call()", () => {
    o("works", () => {
        const spy = o.spy();
        call(spy, 1);

        o(spy.callCount).equals(1);
        o(spy.args[0]).equals(1);
    });
});
