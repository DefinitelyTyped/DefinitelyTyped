import serialize = require("serialize-javascript");

const obj: any = {
    str: "string",
    num: 0,
    obj: { foo: "foo" },
    arr: [1, 2, 3],
    bool: true,
    nil: null,
    undef: undefined,

    fn: function echo(arg: any) { return arg; },
    re: /([^\s]+)/g
};

serialize(obj);
serialize(obj, { space: 2 });
serialize(obj, { space: "\t" });
serialize(obj, { isJSON: true });
serialize(obj, { ignoreFunction: true });
